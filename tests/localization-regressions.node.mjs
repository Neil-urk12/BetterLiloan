import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const root = new URL('../public/', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');

function languagePage({ search = '', stored = null, browser = 'en-US' } = {}) {
  const node = {
    tagName: 'P',
    textContent: '14 Barangays serving our community',
    getAttribute: (name) => (name === 'data-i18n' ? 'gov-barangays-count' : null),
  };
  let preference = stored;
  const document = {
    readyState: 'complete',
    documentElement: { lang: 'en' },
    body: {},
    querySelectorAll: (selector) => (selector === '[data-i18n]' ? [node] : []),
    dispatchEvent() {},
  };
  const sandbox = {
    document,
    window: { location: { search } },
    navigator: { language: browser },
    localStorage: {
      getItem: () => preference,
      setItem: (_key, value) => {
        preference = value;
      },
    },
    MutationObserver: class {
      observe() {}
    },
    CustomEvent: class {},
    URLSearchParams,
    console: { log() {}, warn() {} },
  };
  vm.runInNewContext(read('assets/js/translations.js'), sandbox);
  return { engine: sandbox.window.TranslationEngine, node, document };
}

test('explicit language links take precedence over saved and browser preferences', () => {
  const ceb = languagePage({ search: '?lang=ceb', stored: 'fil' });
  assert.equal(ceb.engine.getCurrentLanguage(), 'ceb');
  assert.equal(ceb.document.documentElement.lang, 'ceb');
  assert.equal(
    languagePage({ search: '?lang=fil', stored: 'en' }).engine.getCurrentLanguage(),
    'fil'
  );
  assert.equal(
    languagePage({ search: '?lang=unknown', stored: 'fil' }).engine.getCurrentLanguage(),
    'fil'
  );
  assert.equal(languagePage({ browser: 'ceb-PH' }).engine.getCurrentLanguage(), 'ceb');
  assert.ok(ceb.engine.switchLanguage('en'));
  assert.equal(ceb.engine.getCurrentLanguage(), 'en');
});

test('the barangay count survives translation in every offered language', () => {
  for (const lang of ['en', 'fil', 'ceb']) {
    const page = languagePage({ stored: lang });
    assert.match(page.node.textContent, /\b14\b/, lang);
    assert.doesNotMatch(page.node.textContent, /\b22\b/, lang);
  }
  const mswdo = read('service-details/mswdo.html');
  assert.doesNotMatch(mswdo, /22 Barangays/i);
});

test('offline emergency numbers include working links for both backup lines', () => {
  const offline = read('offline.html');
  for (const [dial, visible] of [
    ['09989673845', '0998 967 3845'],
    ['09193307442', '0919 330 7442'],
  ]) {
    assert.match(offline, new RegExp(`href="tel:${dial}"[^>]*>${visible}</a>`));
  }
});

test('birth certificate timing is not published without a Liloan source', () => {
  const services = JSON.parse(read('data/services.json')).services;
  assert.ok(!/\d/.test(services.find((s) => s.id === 'birth-certificate').processingTime || ''));
  assert.ok(services.every((service) => service.processingTime === null));
  for (const page of [
    'service-details/birth-certificate.html',
    'service-details/civil-registrar.html',
    'service-details/municipal-civil-registrar.html',
    'services/certificates.html',
  ]) {
    assert.doesNotMatch(read(page), /15\s*[-–]\s*30\s*(?:min(?:ute)?s?)/i, page);
  }
  assert.doesNotMatch(
    read('service-details/death-certificate.html'),
    /1 hour (?:and )?3[58] minutes/i
  );
  assert.doesNotMatch(
    read('service-details/marriage-certificate.html'),
    /10 days, 5 hours and 10 minutes|approximately 5 minutes/i
  );
});

test('the service data validator accepts an unknown processing time without accepting a missing field', () => {
  const sandbox = { module: { exports: {} } };
  vm.runInNewContext(read('assets/js/services-validator.js'), sandbox);
  const service = JSON.parse(read('data/services.json')).services[0];
  const { validateServiceEntry } = sandbox.module.exports;
  assert.equal(validateServiceEntry(service).valid, true);
  const { processingTime, ...missingTime } = service;
  assert.equal(validateServiceEntry(missingTime).valid, false);
});

test('population chart identifies the 2020 data and all 14 barangays', () => {
  const sandbox = { module: { exports: {} }, document: { addEventListener() {} } };
  vm.runInNewContext(read('assets/js/statistics-new.js'), sandbox);
  const { barangayData } = sandbox.module.exports;
  assert.equal(barangayData.length, 14);
  assert.equal(
    barangayData.reduce((total, barangay) => total + barangay.pop, 0),
    153197
  );
  const chart = read('statistics/index.html')
    .split('<!-- Bar Chart Section -->')[1]
    .split('</section>')[0];
  assert.match(chart, /14 barangays/i);
  assert.match(chart, /2020 Census/i);
  assert.doesNotMatch(chart, /22 barangays|2024 Census/i);
});

test('CMCI indicators and chart datasets use the correct pillar and valid colors', () => {
  let captured;
  const sandbox = {
    module: { exports: {} },
    document: { addEventListener() {}, getElementById: () => ({}) },
    Chart: class {
      constructor(_canvas, config) {
        captured = config;
      }
    },
  };
  vm.runInNewContext(
    read('assets/js/statistics-new.js') + '\ncreateCMCIPillarChart("economicDynamism", "chart");',
    sandbox
  );
  const { economicDynamism, governmentEfficiency } = sandbox.module.exports.cmciData.pillars;
  for (const [label, latest] of [
    ['Cost of Living', 1.798],
    ['Cost of Business', 1.2231],
    ['Financial Deepening', 0.3895],
    ['Productivity', 0.1809],
  ]) {
    const i = economicDynamism.labels.indexOf(label);
    assert.notEqual(i, -1, label);
    assert.equal(economicDynamism.data[i].at(-1), latest, label);
    assert.equal(governmentEfficiency.labels.includes(label), false, label);
  }
  const html = read('statistics/index.html');
  const economicPanel = html
    .split('id="panel-economic-dynamism"')[1]
    .split('<!-- Government Efficiency Panel -->')[0];
  const governmentPanel = html
    .split('id="panel-government-efficiency"')[1]
    .split('<!-- Infrastructure Panel -->')[0];
  for (const name of [
    'Cost of Living',
    'Cost of Doing Business',
    'Financial Deepening',
    'Productivity',
  ]) {
    assert.ok(economicPanel.includes(name), name);
    assert.ok(!governmentPanel.includes(name), name);
  }
  for (const dataset of captured.data.datasets) {
    assert.match(dataset.borderColor, /^#[0-9a-f]{6}$/i, dataset.label);
    assert.match(dataset.backgroundColor, /^#[0-9a-f]{8}$/i, dataset.label);
  }
});

test('new page scripts and service-worker precache use the same versioned translation URL', () => {
  const index = read('index.html');
  const match = index.match(/src="([^"]*assets\/js\/translations\.js\?[^\"]+)"/);
  assert.ok(match, 'the translated page must request a versioned script');
  const pageURL = new URL(match[1], 'https://example.test/');
  const sandbox = {
    self: { addEventListener() {} },
  };
  vm.runInNewContext(read('sw.js') + '\nglobalThis.precache = PRECACHE_URLS;', sandbox);
  assert.ok(sandbox.precache.includes(pageURL.pathname + pageURL.search));
});
