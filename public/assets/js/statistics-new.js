/**
 * Statistics Page - Enhanced Animations & Charts
 * Better Liloan Portal - Minimal Professional Design
 */

// Brand colors
const COLORS = {
  primary: '#0032a0',
  primaryDark: '#002170',
  secondary: '#003D82',
  accent: '#F77F00',
  success: '#06A77D',
  info: '#0077BE',
};

// Barangay data (PSA 2020 Census via PhilAtlas; docs/liloan-research-2/barangays.md)
const barangayData = [
  { name: 'Yati', pop: 37046 },
  { name: 'Tayud', pop: 21978 },
  { name: 'Catarman', pop: 20162 },
  { name: 'Poblacion', pop: 16657 },
  { name: 'Jubay', pop: 14904 },
  { name: 'San Vicente', pop: 13069 },
  { name: 'Cotcot', pop: 10598 },
  { name: 'Calero', pop: 6821 },
  { name: 'Santa Cruz', pop: 2689 },
  { name: 'Lataban', pop: 2516 },
  { name: 'Cabadiangan', pop: 2209 },
  { name: 'San Roque', pop: 1797 },
  { name: 'Tabla', pop: 1562 },
  { name: 'Mulao', pop: 1189 },
];

// Historical data (PSA 2020 Census; 2024 POPCEN via citypopulation.de)
const historicalData = {
  years: [2020, 2024],
  populations: [153197, 158387],
};

// Chart instances
let charts = {};

/**
 * Animate number counting
 */
function animateCount(element, target, duration = 2000) {
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * easeOut);

    element.textContent = current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toLocaleString();
    }
  }

  requestAnimationFrame(update);
}

/**
 * Intersection Observer for scroll animations
 */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');

            // Trigger count animation for metric cards
            const countEl = entry.target.querySelector('[data-count]');
            if (countEl) {
              const target = parseInt(countEl.dataset.count);
              animateCount(countEl, target);
            }

            // Animate bars
            animateBars(entry.target);
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.animate-on-scroll, .metric-card').forEach((el) => {
    observer.observe(el);
  });
}

/**
 * Animate progress bars within an element
 */
function animateBars(container) {
  // Breakdown bars
  container.querySelectorAll('.breakdown-segment').forEach((bar) => {
    const width = bar.dataset.width;
    if (width) {
      setTimeout(() => {
        bar.style.width = width + '%';
      }, 300);
    }
  });

  // Barangay bars
  container.querySelectorAll('.bar-wrap .bar').forEach((bar) => {
    const width = bar.dataset.width;
    if (width) {
      setTimeout(() => {
        bar.style.width = width + '%';
      }, 100);
    }
  });

  // Sector bars
  container.querySelectorAll('.sector-bar, .sc-fill').forEach((bar) => {
    const width = bar.dataset.width;
    if (width) {
      setTimeout(() => {
        bar.style.width = width + '%';
      }, 200);
    }
  });

  // Poverty bars
  container.querySelectorAll('.poverty-fill').forEach((bar) => {
    const width = bar.dataset.width;
    if (width) {
      setTimeout(() => {
        bar.style.width = width * 10 + '%';
      }, 300);
    }
  });
}

/**
 * Create Historical Line Chart
 */
function createHistoricalChart() {
  const ctx = document.getElementById('historicalLineChart');
  if (!ctx) return;

  const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(0, 50, 160, 0.2)');
  gradient.addColorStop(1, 'rgba(0, 50, 160, 0)');

  charts.historical = new Chart(ctx, {
    type: 'line',
    data: {
      labels: historicalData.years,
      datasets: [
        {
          label: 'Population',
          data: historicalData.populations,
          borderColor: COLORS.primary,
          backgroundColor: gradient,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: COLORS.primary,
          pointBorderColor: '#fff',
          pointBorderWidth: 3,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointHoverBorderWidth: 3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 2000,
        easing: 'easeOutQuart',
      },
      interaction: {
        intersect: false,
        mode: 'index',
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(0, 50, 160, 0.95)',
          titleFont: { size: 14, weight: '600' },
          bodyFont: { size: 13 },
          padding: 12,
          cornerRadius: 8,
          displayColors: false,
          callbacks: {
            label: (ctx) => `Population: ${ctx.raw.toLocaleString()}`,
          },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { size: 12 } },
        },
        y: {
          beginAtZero: false,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: {
            font: { size: 12 },
            callback: (v) => v / 1000 + 'K',
          },
        },
      },
    },
  });
}

/**
 * Create Distribution Pie Chart
 */
function createDistributionChart() {
  const ctx = document.getElementById('distributionPieChart');
  if (!ctx) return;

  const top10 = barangayData.slice(0, 10);
  const colors = [
    COLORS.primary,
    COLORS.accent,
    COLORS.success,
    COLORS.info,
    '#8B5CF6',
    '#EC4899',
    '#14B8A6',
    '#F59E0B',
    '#6366F1',
    COLORS.secondary,
  ];

  charts.distribution = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: top10.map((d) => d.name),
      datasets: [
        {
          data: top10.map((d) => d.pop),
          backgroundColor: colors,
          borderColor: '#fff',
          borderWidth: 3,
          hoverBorderWidth: 3,
          hoverOffset: 8,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        animateRotate: true,
        animateScale: true,
        duration: 1500,
        easing: 'easeOutQuart',
      },
      cutout: '55%',
      plugins: {
        legend: {
          position: 'right',
          labels: {
            boxWidth: 14,
            padding: 12,
            font: { size: 12 },
            usePointStyle: true,
            pointStyle: 'circle',
          },
        },
        tooltip: {
          backgroundColor: 'rgba(0, 50, 160, 0.95)',
          titleFont: { size: 14, weight: '600' },
          bodyFont: { size: 13 },
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            label: (ctx) => {
              const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
              const pct = ((ctx.raw / total) * 100).toFixed(1);
              return `${ctx.raw.toLocaleString()} (${pct}%)`;
            },
          },
        },
      },
    },
  });
}

/**
 * Create Population Bar Chart
 */
function createBarChart() {
  const ctx = document.getElementById('populationBarChart');
  if (!ctx) return;

  const sorted = [...barangayData].sort((a, b) => b.pop - a.pop);

  charts.bar = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sorted.map((d) => d.name),
      datasets: [
        {
          label: 'Population',
          data: sorted.map((d) => d.pop),
          backgroundColor: sorted.map((_, i) => {
            const opacity = 1 - i * 0.03;
            return `rgba(0, 50, 160, ${opacity})`;
          }),
          borderRadius: 4,
          borderSkipped: false,
        },
      ],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1500,
        easing: 'easeOutQuart',
        delay: (ctx) => ctx.dataIndex * 50,
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(0, 50, 160, 0.95)',
          titleFont: { size: 14, weight: '600' },
          bodyFont: { size: 13 },
          padding: 12,
          cornerRadius: 8,
          displayColors: false,
          callbacks: {
            label: (ctx) => `Population: ${ctx.raw.toLocaleString()}`,
          },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: {
            font: { size: 11 },
            callback: (v) => v.toLocaleString(),
          },
        },
        y: {
          grid: { display: false },
          ticks: { font: { size: 11 } },
        },
      },
    },
  });
}

/**
 * Initialize all charts with lazy loading
 */
function initCharts() {
  const chartObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const chartId = entry.target.id;

          if (chartId === 'historicalLineChart' && !charts.historical) {
            createHistoricalChart();
          } else if (chartId === 'distributionPieChart' && !charts.distribution) {
            createDistributionChart();
          } else if (chartId === 'populationBarChart' && !charts.bar) {
            createBarChart();
          }

          chartObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('canvas').forEach((canvas) => {
    chartObserver.observe(canvas);
  });
}

/**
 * Initialize economy section counters
 */
function initEconomyCounters() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const countEl = entry.target.querySelector('[data-count]');
          if (countEl) {
            const target = parseInt(countEl.dataset.count);
            animateCount(countEl, target, 1500);
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('.economy-card').forEach((card) => {
    observer.observe(card);
  });
}

/**
 * CMCI (Competitive Index) Data
 */
// DTI CMCI, Liloan (CU), 1st to 2nd Class Municipalities; retrieved 2026-11-01
// (docs/liloan-research-2/cmci-fiscal.md §1b). 2018 is null: DTI publishes 0.0000 scores for that year (no data).
const cmciData = {
  years: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  pillars: {
    economicDynamism: {
      labels: [
        'Local Economy Size',
        'Economy Growth',
        'Active Establishments',
        'Safety Compliant',
        'Employment',
        'Cost of Living',
        'Cost of Business',
        'Financial Deepening',
        'Productivity',
      ],
      data: [
        [0.3478, 0.1436, null, 0.0089, 0.0965, 0.1654, 0.0943, 0.1519, 0.0595],
        [0.0801, 0.0063, null, 0.0017, 0.3952, 0.0105, 0.0, 0.0008, 0.0005],
        [null, null, null, null, null, null, 0.5932, 0.347, 0.3442],
        [null, 0.1548, null, 0.1087, 0.4234, 0.2667, 0.0, 0.3193, 0.2623],
        [0.3142, 0.1765, null, 0.2614, 0.203, 0.2463, 0.2648, 0.2534, 0.4278],
        [2.6667, 1.0473, null, 0.9524, 1.3793, 2.375, 1.899, 1.4796, 1.798],
        [3.0937, 1.8573, null, 1.8094, 1.9633, 1.9778, 1.7879, 1.4908, 1.2231],
        [3.6005, 2.5, null, 1.3788, 0.331, 0.5852, 0.4912, 0.5635, 0.3895],
        [0.0115, 0.1274, null, 0.0001, 0.1364, 0.2734, 0.1826, 0.2384, 0.1809],
      ],
    },
    governmentEfficiency: {
      labels: ['Compliance'],
      data: [
        [3.1287, 0.0, null, 2.35, 2.3864, 2.4405, 1.9643, 1.9565, 1.92],
      ],
    },
    infrastructure: {
      labels: [
        'Road Network',
        'Distance to Ports',
        'Basic Utilities',
        'Transportation',
        'IT Capacity',
      ],
      data: [
        [0.0044, 0.0026, null, 0.0062, 0.0003, 0.0115, 0.0013, 0.0014, 0.0],
        [3.1766, 2.3926, null, 2.4554, 2.4988, 2.4393, 1.9411, 1.9425, 1.9514],
        [3.3333, 2.5, null, 2.3119, 2.5, 2.3589, 0.0037, 0.3779, 0.125],
        [0.5523, 0.3208, null, 0.0545, 0.1114, 0.1386, 0.0335, 0.0417, 0.0449],
        [null, 0.3203, null, 0.4386, 0.5126, 0.4545, 0.141, 0.1762, 0.0155],
      ],
    },
    resiliency: {
      labels: ['DRR Plan', 'Disaster Drill', 'Early Warning', 'DRRMP Budget', 'Risk Assessments'],
      data: [
        [null, 2.5, null, 2.4074, 2.5, 2.4737, 1.9998, 1.9583, 1.9783],
        [null, 2.5, null, 2.25, 2.5, 1.2667, 1.052, 1.0258, 1.0182],
        [null, 2.5, null, 2.5, 2.5, 1.2884, 1.0347, 1.0031, 1.0122],
        [null, 0.0027, null, 0.3406, 0.238, 0.0215, 0.0, 0.035, 2.0],
        [null, 2.5, null, 2.5, 2.5, 2.5, 2.0, 2.0, 2.0],
      ],
    },
    innovation: {
      labels: [
        'ICT Plan',
        'R&D Expenditures',
        'E-BPLS Software',
        'STEM Graduates',
        'Innovation Facilities',
      ],
      data: [
        [null, null, null, null, null, null, 2.0001, 2.0001, 2.0001],
        [null, null, null, null, null, null, 0.0549, 0.0063, 0.0],
        [null, null, null, null, null, null, 2.0, 2.0, 2.0],
        [null, null, null, null, null, null, 0.0002, 0.0006, 0.0006],
        [null, null, null, null, null, null, 0.1673, 0.2071, 0.0235],
      ],
    },
  },
  // Health and Education are left out: two CMCI indicators match each name and none was verified as the one meant.
  keyIndicators: {
    labels: ['Social Protection', 'Peace & Order', 'LGU Investment'],
    data: [
      [0.0342, 0.3957, null, 0.9106, 0.4913, 0.4868, 0.001, 0.9648, 0.5018],
      [null, 0.1632, null, 0.0275, 0.0216, 0.0425, 0.0211, 0.0571, 0.0309],
      [null, 0.2267, null, 0.4965, 0.2383, 0.0241, 0.0008, 0.0012, 0.0],
    ],
  },
};

/**
 * Create CMCI Overview Chart
 */
function createCMCIOverviewChart() {
  const ctx = document.getElementById('cmciOverviewChart');
  if (!ctx || charts.cmciOverview) return;

  const chartColors = [COLORS.primary, COLORS.accent, COLORS.success, COLORS.info, '#8B5CF6'];

  charts.cmciOverview = new Chart(ctx, {
    type: 'line',
    data: {
      labels: cmciData.years,
      datasets: cmciData.keyIndicators.labels.map((label, i) => ({
        label: label,
        data: cmciData.keyIndicators.data[i],
        borderColor: chartColors[i],
        backgroundColor: chartColors[i] + '20',
        fill: false,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
      })),
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1500, easing: 'easeOutQuart' },
      interaction: { intersect: false, mode: 'index' },
      plugins: {
        legend: {
          position: 'bottom',
          labels: { boxWidth: 12, padding: 16, font: { size: 11 }, usePointStyle: true },
        },
        tooltip: {
          backgroundColor: 'rgba(0, 50, 160, 0.95)',
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            label: (ctx) =>
              ctx.raw !== null
                ? `${ctx.dataset.label}: ${ctx.raw.toFixed(4)}`
                : `${ctx.dataset.label}: N/A`,
          },
        },
      },
      scales: {
        x: { grid: { display: false }, ticks: { font: { size: 11 } } },
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { font: { size: 11 } },
        },
      },
    },
  });
}

/**
 * Create CMCI Pillar Chart
 */
function createCMCIPillarChart(pillarKey, canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || charts[canvasId]) return;

  const pillarData = cmciData.pillars[pillarKey];
  if (!pillarData) return;

  const chartColors = [
    COLORS.primary, COLORS.accent, COLORS.success, COLORS.info, '#8B5CF6',
    '#B45309', '#BE123C', '#0F766E', '#4B5563',
  ];
  const chartDashes = [[], [6, 3], [2, 3], [10, 3, 2, 3]];

  charts[canvasId] = new Chart(ctx, {
    type: 'line',
    data: {
      labels: cmciData.years,
      datasets: pillarData.labels.map((label, i) => ({
        label: label,
        data: pillarData.data[i],
        borderColor: chartColors[i],
        backgroundColor: chartColors[i] + '20',
        borderDash: chartDashes[i % chartDashes.length],
        fill: false,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 5,
        borderWidth: 2,
      })),
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1200, easing: 'easeOutQuart' },
      interaction: { intersect: false, mode: 'index' },
      plugins: {
        legend: {
          position: 'bottom',
          labels: { boxWidth: 10, padding: 12, font: { size: 10 }, usePointStyle: true },
        },
        tooltip: {
          backgroundColor: 'rgba(0, 50, 160, 0.95)',
          padding: 10,
          cornerRadius: 6,
          callbacks: {
            label: (ctx) =>
              ctx.raw !== null
                ? `${ctx.dataset.label}: ${ctx.raw.toFixed(4)}`
                : `${ctx.dataset.label}: N/A`,
          },
        },
      },
      scales: {
        x: { grid: { display: false }, ticks: { font: { size: 10 } } },
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { font: { size: 10 } },
        },
      },
    },
  });
}

/**
 * Initialize CMCI Tab Navigation
 */
function initCMCITabs() {
  const tabs = document.querySelectorAll('.cmci-tab');
  const panels = document.querySelectorAll('.cmci-panel');

  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const pillar = tab.dataset.pillar;

      // Update active tab
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      // Update active panel
      panels.forEach((p) => p.classList.remove('active'));
      const activePanel = document.getElementById(`panel-${pillar}`);
      if (activePanel) {
        activePanel.classList.add('active');

        // Create chart for this panel if needed
        if (pillar === 'overview') {
          createCMCIOverviewChart();
        } else if (pillar === 'economic-dynamism') {
          createCMCIPillarChart('economicDynamism', 'cmciEconomicChart');
        } else if (pillar === 'government-efficiency') {
          createCMCIPillarChart('governmentEfficiency', 'cmciGovernmentChart');
        } else if (pillar === 'infrastructure') {
          createCMCIPillarChart('infrastructure', 'cmciInfraChart');
        } else if (pillar === 'resiliency') {
          createCMCIPillarChart('resiliency', 'cmciResiliencyChart');
        } else if (pillar === 'innovation') {
          createCMCIPillarChart('innovation', 'cmciInnovationChart');
        }

        // Animate indicator bars
        animateCMCIBars(activePanel);
      }
    });
  });
}

/**
 * Animate CMCI indicator bars
 */
function animateCMCIBars(container) {
  container.querySelectorAll('.indicator-fill').forEach((bar) => {
    const value = bar.dataset.value;
    if (value) {
      setTimeout(() => {
        bar.style.setProperty('--fill-width', value + '%');
        bar.classList.add('animated');
      }, 100);
    }
  });
}

/**
 * Initialize CMCI Section
 */
function initCMCISection() {
  const cmciSection = document.getElementById('competitive-index');
  if (!cmciSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          initCMCITabs();
          createCMCIOverviewChart();
          animateCMCIBars(document.getElementById('panel-overview'));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(cmciSection);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initCharts();
  initEconomyCounters();
  initCMCISection();
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    barangayData,
    historicalData,
    cmciData,
    COLORS,
    animateCount,
  };
}
