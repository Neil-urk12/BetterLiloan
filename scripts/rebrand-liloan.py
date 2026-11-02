#!/usr/bin/env python3
"""One-off: BetterSolano -> BetterLiloan branding pass (static site only, not react-app/).

Changes project identity (name, domain, logo filenames, repo link), the place
name in <head> SEO/meta and site chrome (footer tagline, cost line, volunteer
popup), and removes the Solano GA tag and Facebook links. Page body facts
(officials, offices, addresses, history, data/*.json) are deliberately left alone.
Idempotent: safe to re-run.
"""
import re
import subprocess
import sys

ROOT = subprocess.check_output(['git', 'rev-parse', '--show-toplevel']).decode().strip()
SKIP = ('react-app/', 'pnpm-lock.yaml', 'scripts/rebrand-liloan.py', 'CLAUDE.md')  # CLAUDE.md names upstream on purpose
TEXT_EXT = ('.html', '.js', '.json', '.md', '.txt', '.xml', '.webmanifest', '.py', '.sh',
            '.css', '.yml', '.yaml', '.htaccess', '.example', '.svg')

# Identity tokens, safe everywhere.
GLOBAL = [
    (r'github\.com/BetterSolano/bettersolano', 'github.com/Neil-urk12/BetterLiloan'),
    # quiz.bettersolano.org is a separate Solano-only site; FB page URL is removed below.
    (r'(?<!quiz\.)(?<!facebook\.com/)bettersolano\.org', 'betterliloan.org'),
    (r'BetterSolano', 'BetterLiloan'),
    (r'Better Solano', 'Better Liloan'),
    (r'better-solano-logo', 'better-liloan-logo'),
]


def place(s):
    s = re.sub(r'Nueva Vizcaya', 'Cebu', s)
    return re.sub(r'(?<![\w.@/-])Solano(?![\w@-]|\.\w)', 'Liloan', s)


def json_ld(m):
    s = m.group(0)
    # Solano-specific contact/location facts: drop rather than mislabel as Liloan.
    s = re.sub(r'\n\s*"postalCode": "3708",', '', s)
    s = re.sub(r',\n\s*"geo": \{.*?\}', '', s, flags=re.S)
    s = re.sub(r'\n\s*"telephone": "[^"]*",', '', s)
    s = re.sub(r'\n\s*"email": "[^"]*solano[^"]*",', '', s)
    s = re.sub(r',\n\s*"sameAs": \[[^\]]*\]', '', s)
    return place(s)


def html(path, s):
    # Google Analytics (Solano property)
    s = re.sub(r'\n\s*<!-- Google tag \(gtag\.js\) -->\s*<script async src="https://www\.googletagmanager\.com/gtag/js\?id=G-8777S9SP9X"></script>\s*<script>.*?</script>',
               '', s, flags=re.S)
    # Facebook: footer social button, footer LGU link, homepage feed section
    s = re.sub(r'\n\s*<a\s+href="https://www\.facebook\.com/bettersolano\.org".*?</a>', '', s, flags=re.S)
    s = re.sub(r'\n\s*<li>\s*<a\s+href="https://www\.facebook\.com/OfficialLguSolanoFanpage/?".*?</a\s*>\s*</li>', '', s, flags=re.S)
    s = re.sub(r'\n\s*<!-- Latest Updates -->\s*<section class="section home-fb-section">.*?</section>\n', '\n', s, flags=re.S)

    head, sep, body = s.partition('</head>')
    if sep and not path.endswith('government/officials.html'):  # its meta names Solano's officials
        head = re.sub(r'<script type="application/ld\+json">.*?</script>', json_ld, head, flags=re.S)
        head = re.sub(r'<(?:title|meta)\b[^>]*>(?:[^<]*</title>)?', lambda m: place(m.group(0)), head)
        s = head + sep + body

    for pat in (r'<p\s+class="footer-tagline".*?</p>',
                r'<div\s+class="footer-cost".*?</div>',
                r'<p class="vol-popup-header-sub">.*?</p>'):
        s = re.sub(pat, lambda m: place(m.group(0)), s, flags=re.S)
    return s


def translations(s):
    # Footer tagline values in en/fil/ilo
    return re.sub(r"('[\w-]+-empowering-the-people-of-solano-with-transparent':\s*\n?\s*['\"]).*?(['\"],)",
                  lambda m: place(m.group(0)), s, flags=re.S)


def main():
    files = subprocess.check_output(['git', 'ls-files'], cwd=ROOT).decode().splitlines()
    changed = 0
    for f in files:
        if f.startswith(SKIP) or not (f.endswith(TEXT_EXT) or f.split('/')[-1] in ('.htaccess',)):
            continue
        p = f'{ROOT}/{f}'
        try:
            s = open(p, encoding='utf-8').read()
        except (UnicodeDecodeError, FileNotFoundError):
            continue
        o = s
        if f.endswith('.html'):
            s = html(f, s)
        if f == 'assets/js/translations.js':
            s = translations(s)
        if f == 'manifest.webmanifest':
            s = place(s)
        for pat, rep in GLOBAL:
            s = re.sub(pat, rep, s)
        if s != o:
            open(p, 'w', encoding='utf-8').write(s)
            changed += 1
    print(f'{changed} files changed', file=sys.stderr)


if __name__ == '__main__':
    main()
