## ADDED Requirements

### Requirement: Synced news reaches production through git
When the scheduled Facebook sync produces a changed `public/data/news.json`, the workflow SHALL commit that file to `main` and push it, so the regular deployment publishes it. No direct upload to a host SHALL occur.

#### Scenario: News changed
- **WHEN** `scripts/sync-facebook.js` reports `changed=true`
- **THEN** the workflow commits only `public/data/news.json` with message `chore(news): sync Facebook posts`, pushes to `main`, and a deployment follows

#### Scenario: News unchanged
- **WHEN** the sync reports `changed=false`
- **THEN** no commit is created and no deployment is triggered

#### Scenario: No Page token configured
- **WHEN** the `FB_ACCESS_TOKEN` secret is absent
- **THEN** the workflow exits successfully without committing

### Requirement: Least-privilege workflow
The sync workflow SHALL use the built-in `GITHUB_TOKEN` with `contents: write` and SHALL NOT require FTP or Cloudflare credentials.

#### Scenario: Secrets required
- **WHEN** the workflow file is inspected
- **THEN** it references no `FTP_*` or Cloudflare API token secrets
