# Handoff: research Liloan officials, hotlines and contact details

**For:** a fresh Claude Code session in this repo. Read `CLAUDE.md` first.
**Goal:** collect *sourced* public data for **Liloan, Cebu** (Municipality of Liloan, Province of Cebu, Region VII) so it can replace the leftover Solano data. This is a **research-only** task: do not edit any site files.

## Why research-only

This is a government services portal. A wrong hotline or official's name is worse than a blank one. Findings go into one file for a human to verify. A later session applies only the verified values.

## Deliverable

Write `docs/liloan-data-research.md` with one table per section below. Each row needs:

| field | value | source URL | source date / "as of" | confidence (high/med/low) | notes |

Rules:
- **Never fabricate or infer.** If you can't find a value, write `NOT FOUND` and list where you looked.
- Prefer, in order: the official LGU Liloan website and its official Facebook page, then national government sources (COMELEC 2025 election results, DILG, PNP/BFP regional pages, PhilAtlas, PSA), then news. Mark anything from lower sources `low`.
- Officials changed after the **May 2025 elections** (term 2025–2028). Make sure the names are for the current term.
- When sources disagree, list every candidate value with its source. Don't pick one.
- Record the URL of the official LGU Liloan Facebook page and website. They were removed from the site and need to be re-added.

## 1. Officials → feeds `data/officials.json`

The schema in use is below. Keep the keys. `image` paths can stay as placeholders, but note any official photo URLs you find.

```json
{
  "mayor": { "name": "Hon. …", "title": "Municipal Mayor", "image": "assets/images/officials/mayor.jpg" },
  "vice_mayor": { "name": "Hon. …", "title": "Municipal Vice Mayor", "image": "…" },
  "councilors": [ { "name": "Hon. …", "title": "SB Member", "image": "…" } ]
}
```

Gather: the mayor, the vice mayor, all elected Sangguniang Bayan members, and the ex-officio SB members (ABC/Liga ng mga Barangay president and SK Federation president).

## 2. Emergency hotlines → the hotline bar on all ~52 HTML pages

The bar currently lists Solano numbers for: **Police, MSWDO, Fire, DILG, MDRRMO, R2TMC** (a Region 2 hospital, which doesn't apply to Liloan). Find Liloan's equivalents:
- PNP Liloan station
- BFP Liloan fire station
- MDRRMO / rescue
- MSWDO
- the nearest government hospital or emergency line
- any LGU trunk line

## 3. Office contact details → `contact/index.html`, `service-details/*.html`, homepage contact cards

Solano used a per-office email on `solano.gov.ph`. For each office below, find Liloan's email, phone and location (floor/building) if published: Mayor, Vice Mayor, Accounting, Agriculture, Assessor, BPLO (business permits), Budget, Civil Registrar, Engineering, GSO, HRMO, MDRRMO, Municipal Health Office/RHU, MPDO (planning), MSWDO, Treasurer.

Also gather:
- the municipal hall address
- the postal code
- the municipal hall's coordinates (lat/long)
- office hours
- the LGU general email

## Out of scope

Don't edit the HTML, JSON or `translations.js`, and don't touch `react-app/`. Don't apply the data. The next session does that once the research file has been verified.
