> Retrieved 2026-11-02. UNVERIFIED, for human review. Liloan = Liloan, Cebu (CMCI label "Liloan (CU)", Region VII). Liloan (SL), Southern Leyte, excluded.

# Liloan, Cebu: CMCI competitiveness, fiscal data, SGLG

**How the data was retrieved.** cmci.dti.gov.ph, blgf.gov.ph, coa.gov.ph and liloan.gov.ph all return 403 to a plain `curl`. Bot protection was not bypassed. All CMCI figures below come through the WebFetch tool, which reads each page and returns a model-generated summary. They were not parsed from raw HTML.
- **Overall and pillar figures (high).** Each year's overall and pillar figures were read twice: once from the LGU profile and once from the ranking table. The two readings agreed every time.
- **Indicator figures (med).** These were read only once, from the profile page.

Before the coordinator's correction, one early fetch of the CMCI site used a spoofed browser user agent. That output was thrown away and none of it is used here.

## Repo targets

- `public/data/competitive-index.json`. Keys: `title`, `description`, `source`, `years` [2016..2024], `keyIndicators[]` (Health, Education, Social Protection, Peace and Order, LGU Investment), and `pillars[]` (economic-dynamism, government-efficiency, infrastructure, resiliency, innovation). Each indicator has `values[]` aligned to `years`. The page actually renders an inline copy of this data in `public/assets/js/statistics-new.js` (`cmciData`, line 432), not the JSON file. The section is in `public/statistics/index.html` (`#competitive-index`).
- `public/data/fiscal_transparency.json`. Keys: `_schema_version`, `_status`, `_source`, `_note`, `municipality`, `province`, `fiscal_years: []` (empty, with no per-year schema). The Finance block hardcoded in `public/statistics/index.html` (around lines 280-345) shows Annual Income, IRA Share, IRA Dependency %, Local %, and Income Class, citing "BLGF 2023 SRE".
- The JSON has no overall-rank or overall-score keys. Those are listed below anyway, because the page text says "rankings".

Where indicators sit: the repo JSON files Cost of Living, Cost of Doing Business, Financial Deepening and Productivity under `government-efficiency`. On the CMCI site, from 2017 onwards, these are **Economic Dynamism** indicators. `keyIndicators` Health, Education and LGU Investment are **Infrastructure** indicators on CMCI. Social Protection and Peace and Order are **Government Efficiency** indicators. The values below are given under the repo's key names, whatever pillar CMCI puts them in.

## 1. CMCI: overall and pillars (category: 1st to 2nd Class Municipalities)

Ranking pages used: `https://cmci.dti.gov.ph/rankings-data.php?unit=1st%20to%202nd%20Class%20Municipalities&year=YYYY` and the profile `https://cmci.dti.gov.ph/lgu-profile.php?lgu=Liloan (CU)&year=YYYY`. Each pillar is given as rank / score. "n/a" means the pillar did not exist that year: 2016 has 3 pillars, 2017-2021 have 4, and 2022 onwards have 5.

| field | value | source URL | source date / "as of" | confidence (high/med/low) | notes |
|---|---|---|---|---|---|
| category | 1st to 2nd Class Municipalities | https://cmci.dti.gov.ph/rankings-data.php?unit=1st%20to%202nd%20Class%20Municipalities | CMCI 2024 | high | Profile "Category": "First Class Municipality". Region VII, Province Cebu. |
| 2024 overall | rank 24th, score 37.0244 | rankings-data.php …&year=2024 (default) | CMCI 2024 | high | Profile shows rank only. |
| 2024 pillars | ED 26 / 4.7327; GE 143 / 8.8745; Infra 285 / 2.3800; Res 4 / 13.9251; Innov 107 / 7.1121 | same + lgu-profile.php?lgu=Liloan (CU) | CMCI 2024 | high | |
| 2023 overall | rank 46th, score 36.8806 | rankings-data.php …&year=2023 | CMCI 2023 | high | |
| 2023 pillars | ED 31 / 4.8634; GE 176 / 9.3747; Infra 149 / 2.8753; Res 39 / 11.9333; Innov 42 / 7.8339 | same + profile &year=2023 | CMCI 2023 | high | |
| 2022 overall | rank 31st, score 34.7524 | rankings-data.php …&year=2022 | CMCI 2022 | high | |
| 2022 pillars | ED 34 / 5.3309; GE 208 / 7.5398; Infra 130 / 2.4950; Res 33 / 11.9936; Innov 13 / 7.3931 | same + profile &year=2022 | CMCI 2022 | high | |
| 2021 overall | rank 60th, score 35.5499 | rankings-data.php …&year=2021 | CMCI 2021 | high | |
| 2021 pillars | ED 28 / 6.5552; GE 250 / 9.1342; Infra 131 / 5.8498; Res 38 / 14.0105; Innov n/a | same + profile &year=2021 | CMCI 2021 | high | No Innovation pillar shown for 2021. |
| 2020 overall | rank 19th, score 43.2268 | rankings-data.php …&year=2020 | CMCI 2020 | high | |
| 2020 pillars | ED 24 / 6.2211; GE 118 / 10.7306; Infra 57 / 6.5067; Res 1 / 19.7684; Innov n/a | same + profile &year=2020 | CMCI 2020 | high | Ranked 1st in Resiliency. |
| 2019 overall | rank 22nd, score 41.7432 | rankings-data.php …&year=2019 | CMCI 2019 | high | |
| 2019 pillars | ED 70 / 4.8575; GE 65 / 11.3080; Infra 90 / 6.2480; Res 1 / 19.3297; Innov n/a | same + profile &year=2019 | CMCI 2019 | high | Ranked 1st in Resiliency. |
| 2018 overall | rank 120th, score 0.0000 | rankings-data.php …&year=2018 | CMCI 2018 | med | The site publishes 0.0000 for the overall and every pillar score, yet still shows ranks. This looks like a data gap on the site. The Solano JSON has the same 2018 zeros. |
| 2018 pillars | ED 117 / 0.0000; GE 202 / 0.0000; Infra 121 / 0.0000; Res 37 / 0.0000 | same + profile &year=2018 | CMCI 2018 | med | See the 2018 overall row. |
| 2017 overall | rank 158th, score 36.2284 | rankings-data.php …&year=2017 | CMCI 2017 | high | |
| 2017 pillars | ED 41 / 6.0819; GE 338 / 7.7646; Infra 136 / 6.3395; Res 155 / 16.0424 | same + profile &year=2017 | CMCI 2017 | high | |
| 2016 overall | rank 128th, score 26.4632 | rankings-data.php …&year=2016 | CMCI 2016 | high | |
| 2016 pillars | ED 18 / 10.1947; GE 319 / 7.6172; Infra 110 / 8.6513 | same + profile &year=2016 | CMCI 2016 | high | Only 3 pillars in 2016. |
| corroboration, 2023 to 2024 | "46th to 24th" | https://www.sunstar.com.ph/cebu/aljew-frasco-files-coc-to-continue-progress-in-liloan | 2024-10 (COC filing) | low | News, quoting the mayor. Agrees with the CMCI figures. Read only as a search snippet. |
| DTI Cebu 2024 provincial award | 4th in Resiliency, 1st-2nd class municipalities | https://dti.gov.ph/regions/region-7/region-7-news/dti-cebu-honors-outstanding-lgus-provincial-awarding-ceremony | Nov 2024 | med | Read only as a search snippet. Agrees with the CMCI Resiliency rank 4. |

## 1b. CMCI: indicator values in the repo JSON shape (years 2016..2024)

Each `values` array has 9 slots in the order [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]. `null` means the indicator was not on the profile page that year. All figures come from `https://cmci.dti.gov.ph/lgu-profile.php?lgu=Liloan (CU)&year=YYYY`, one WebFetch per year, all retrieved 2026-11-02. Confidence is **med** for every row: each was read once, through a summarizer.

| field | value | source URL | source date / "as of" | confidence (high/med/low) | notes |
|---|---|---|---|---|---|
| title | NOT FOUND (no published title) | n/a | n/a | n/a | Editorial text, e.g. "Liloan Competitive Index". Not something to research. |
| source | Cities and Municipalities Competitiveness Index (CMCI) | https://cmci.dti.gov.ph/ | n/a | high | Unchanged. |
| years | 2016-2024 available (the site lists 2013-2024) | profile page | n/a | high | |
| economic-dynamism / Local Economy Size | [0.3478, 0.1436, 0.3858, 0.0089, 0.0965, 0.1654, 0.0943, 0.1519, 0.0595] | lgu-profile.php?lgu=Liloan (CU)&year=… | CMCI 2016-2024 | med | |
| economic-dynamism / Local Economy Growth | [0.0801, 0.0063, 0.0127, 0.0017, 0.3952, 0.0105, 0.0000, 0.0008, 0.0005] | same | same | med | |
| economic-dynamism / Active Establishments | [null, null, null, null, null, null, 0.5932, 0.3470, 0.3442] | same | same | med | Not found by the extractor for 2016-2021. In 2024 the label is "Active Establishments in the Locality". |
| economic-dynamism / Safety Compliant Business | [null, 0.1548, 0.2966, 0.1087, 0.4234, 0.2667, 0.0000, 0.3193, 0.2623] | same | same | med | |
| economic-dynamism / Employment Generation | [0.3142, 0.1765, 0.1740, 0.2614, 0.2030, 0.2463, 0.2648, 0.2534, 0.4278] | same | same | med | Labels differ by year: "Jobs" in 2016, "Increase in Employment" in 2017-2021. |
| government-efficiency / Cost of Living | [2.6667, 1.0473, 1.4352, 0.9524, 1.3793, 2.3750, 1.8990, 1.4796, 1.7980] | same | same | med | On CMCI this sits in the ED pillar. |
| government-efficiency / Cost of Doing Business | [3.0937, 1.8573, 1.8684, 1.8094, 1.9633, 1.9778, 1.7879, 1.4908, 1.2231] | same | same | med | On CMCI this sits in the ED pillar. |
| government-efficiency / Financial Deepening | [3.6005, 2.5000, 0.0534, 1.3788, 0.3310, 0.5852, 0.4912, 0.5635, 0.3895] | same | same | med | Labelled "Financial Institutions" in 2016. |
| government-efficiency / Productivity | [0.0115, 0.1274, 0.0385, 0.0001, 0.1364, 0.2734, 0.1826, 0.2384, 0.1809] | same | same | med | |
| government-efficiency / Compliance to National Directives | [3.1287, 0.0000, 0.0000, 2.3500, 2.3864, 2.4405, 1.9643, 1.9565, 1.9200] | same | same | med | |
| infrastructure / Road Network | [0.0044, 0.0026, 0.0000, 0.0062, 0.0003, 0.0115, 0.0013, 0.0014, 0.0000] | same | same | med | |
| infrastructure / Distance to Ports | [3.1766, 2.3926, 0.0000, 2.4554, 2.4988, 2.4393, 1.9411, 1.9425, 1.9514] | same | same | med | |
| infrastructure / Availability of Basic Utilities | [3.3333, 2.5000, 0.0000, 2.3119, 2.5000, 2.3589, 0.0037, 0.3779, 0.1250] | same | same | med | Labelled "Availability of Utilities" in 2016. |
| infrastructure / Transportation Vehicles | [0.5523, 0.3208, 0.0000, 0.0545, 0.1114, 0.1386, 0.0335, 0.0417, 0.0449] | same | same | med | Labelled "Transportation" in 2016. |
| infrastructure / Information Technology Capacity | [null, 0.3203, 0.0000, 0.4386, 0.5126, 0.4545, 0.1410, 0.1762, 0.0155] | same | same | med | |
| resiliency / Disaster Risk Reduction Plan | [null, 2.5000, 0.0000, 2.4074, 2.5000, 2.4737, 1.9998, 1.9583, 1.9783] | same | same | med | No Resiliency pillar in 2016. |
| resiliency / Annual Disaster Drill | [null, 2.5000, 0.0000, 2.2500, 2.5000, 1.2667, 1.0520, 1.0258, 1.0182] | same | same | med | |
| resiliency / Early Warning System | [null, 2.5000, 0.0000, 2.5000, 2.5000, 1.2884, 1.0347, 1.0031, 1.0122] | same | same | med | |
| resiliency / Budget for DRRMP | [null, 0.0027, 0.0000, 0.3406, 0.2380, 0.0215, 0.0000, 0.0350, 2.0000] | same | same | med | |
| resiliency / Local Risk Assessments | [null, 2.5000, 0.0000, 2.5000, 2.5000, 2.5000, 2.0000, 2.0000, 2.0000] | same | same | med | |
| resiliency / Emergency Infrastructure | [null, 1.1631, 0.0000, 0.5679, 0.6080, 0.3320, 0.5282, 0.5547, 0.5671] | same | same | med | |
| innovation / ICT Plan | [null, null, null, null, null, null, 2.0001, 2.0001, 2.0001] | same | same | med | Innovation pillar exists from 2022 only. |
| innovation / R&D Expenditures Allotment | [null, null, null, null, null, null, 0.0549, 0.0063, 0.0000] | same | same | med | |
| innovation / ICT Use: E-BPLS Software | [null, null, null, null, null, null, 2.0000, 2.0000, 2.0000] | same | same | med | |
| innovation / Online Payment Facilities | [null, null, null, null, null, null, 2.0000, 2.0000, 2.0000] | same | same | med | |
| innovation / STEM Graduates | [null, null, null, null, null, null, 0.0002, 0.0006, 0.0006] | same | same | med | |
| innovation / Start Up and Innovation Facilities | [null, null, null, null, null, null, 0.1673, 0.2071, 0.0235] | same | same | med | |
| keyIndicators / Health, candidate A (Infra "Health") | [0.0739, 0.1046, 0.0000, 0.1616, 0.2002, 0.1337, 0.0931, 0.1155, 0.0876] | same | same | med | Two CMCI indicators fit the name "Health". Both are listed. Not chosen. |
| keyIndicators / Health, candidate B (GE "Capacity of Health Services") | [0.3056, 0.1822, 0.0000, 0.0920, 0.0792, 0.0978, 0.0013, 0.0883, 0.0356] | same | same | med | |
| keyIndicators / Education, candidate A (Infra "Education") | [0.0496, 0.2647, 0.0000, 0.1692, 0.1490, 0.1079, 0.1910, 0.1364, 0.0805] | same | same | med | Same ambiguity as Health. |
| keyIndicators / Education, candidate B (GE "Capacity of School Services") | [0.1333, 0.5447, 0.0000, 0.4404, 0.2708, 0.1423, 0.0330, 0.0792, 0.0548] | same | same | med | Labelled "Capacity of Schools" in 2016. |
| keyIndicators / Social Protection | [0.0342, 0.3957, 0.0000, 0.9106, 0.4913, 0.4868, 0.0010, 0.9648, 0.5018] | same | same | med | |
| keyIndicators / Peace and Order | [null, 0.1632, 0.0000, 0.0275, 0.0216, 0.0425, 0.0211, 0.0571, 0.0309] | same | same | med | |
| keyIndicators / LGU Investment | [null, 0.2267, 0.0000, 0.4965, 0.2383, 0.0241, 0.0008, 0.0012, 0.0000] | same | same | med | |

## 2. Fiscal data (fiscal_transparency.json + statistics Finance block)

| field | value | source URL | source date / "as of" | confidence (high/med/low) | notes |
|---|---|---|---|---|---|
| municipality | Liloan | https://cmci.dti.gov.ph/lgu-profile.php?lgu=Liloan (CU) | 2024 profile | high | |
| province | Cebu | same | 2024 profile | high | Region VII (Central Visayas). |
| income class | "First Class Municipality" | same | CMCI 2024 profile | high | Wikipedia also says "1st municipal income class" (low). |
| _source | NOT FOUND (no Liloan SRE retrieved) | n/a | n/a | n/a | BLGF SRE, COA AAR and the FDP portal were all unreachable (see the last section). |
| Annual Income / total income, FY2023 | NOT FOUND | n/a | n/a | n/a | The page cites "BLGF 2023 SRE" for this figure. BLGF returns 403. |
| IRA / NTA share, any FY | NOT FOUND | n/a | n/a | n/a | |
| IRA dependency % | NOT FOUND | n/a | n/a | n/a | Not calculated from other figures, per the no-computation rule. |
| Local sources (amount or %) | NOT FOUND | n/a | n/a | n/a | |
| Annual budget / appropriation ordinance, any FY | NOT FOUND | n/a | n/a | n/a | No news or official source found. |
| Revenue FY2024, candidate | PHP 635 million | https://en.wikipedia.org/wiki/Liloan | infobox "(2024)" | low | Uncited infobox. Source unknown, possibly a COA AAR. |
| Expenditure FY2024, candidate | PHP 417.4 million | same | "(2024)" | low | Uncited. |
| Assets / liabilities FY2024, candidate | PHP 1,404 million / PHP 423.3 million | same | "(2024)" | low | Uncited. Extra fields, not in the JSON. |
| Revenue FY2022, candidate | PHP 641.4 million | https://encycloreader.org/r/wikipedia.php?q=Liloan | infobox "(2022)" (older Wikipedia mirror) | low | Uncited. |
| Expenditure FY2022, candidate | PHP 560.6 million | same | "(2022)" | low | Uncited. Liabilities are given as PHP 576.1M and assets as PHP 1,320M for 2022. |
| Annual regular income, 2009-2016 | 2009: 120,493,052.25; 2010: 125,551,427.23; 2011: 145,690,941.76; 2012: 141,732,010.49; 2013: 155,886,615.19; 2014: 179,562,529.23; 2015: 205,876,037.10; 2016: 226,110,226.09 (PHP) | https://www.philatlas.com/visayas/r07/cebu/liloan.html | FY2009-FY2016 | low | Third-party site, which says its source is BLGF/DOF. Historical only. |
| COA audit opinion, FY2022 | "unmodified" (clean), cited by the mayor as the 5th such opinion | https://www.rappler.com/?p=2435987 | mid-2023 | low | News report, seen as a search snippet only. The same audit flagged about PHP 1.35M in lechon purchases (ABS-CBN 2023-06-29, Inquirer). |

## 3. DILG Seal of Good Local Governance (and related seals)

No year was found in which Liloan, Cebu won the full **SGLG**. A missing name in a news list does not prove Liloan did not win. Each row below records what was checked.

| field | value | source URL | source date / "as of" | confidence (high/med/low) | notes |
|---|---|---|---|---|---|
| SGLG 2015 | NOT FOUND | https://dilg.gov.ph/news/Cebu-LGUs-get-Good-Governance-Seal/NC-2015-1239 | 2015 | n/a | Page failed with a TLS certificate error. A search-snippet excerpt did not show Liloan. |
| SGLG 2016-2021 | NOT FOUND | n/a | n/a | n/a | The 2018 and 2019 Cebu Daily News lists returned 403. |
| SGLG 2022 | Not among the awardees. Only 4 Cebu LGUs won: Talisay, Danao, San Remigio, Sogod. | https://www.sunstar.com.ph/cebu/local-news/four-cebu-lgus-get-dilg-nod | 2022-10-27 | med | News. |
| SGLG 2023 | Not among the awardees. The 9 Cebu LGUs were Bogo City, Alegria, Borbon, Daanbantayan, Madridejos, Samboan, San Remigio, Sogod, Tudela. | https://tribune.net.ph/2023/12/06/9-cebu-lgus-awarded-seal-of-good-local-governance | 2023-12-06 | med | News. |
| SGLG 2024 | Not in the list. 14 or 15 Cebu LGUs are named (Cordova, Consolacion, Bogo City, Asturias, Daanbantayan, Danao City, Madridejos, Balamban, Santa Fe, Tudela, Medellin, Tuburan, Pinamungajan, Carmen, Alegria). | "2024 ANNUAL REPORT DILG CEBU PROVINCE" at cebuprovincedilg.duckdns.org | Dec 2024 | low | Seen as a search snippet only. The host's TLS certificate did not match. The report's count (14) disagrees with the names listed (15). |
| SGLG 2025 | NOT FOUND | n/a | n/a | n/a | No 2025 municipal list for Cebu was found. |
| Seal of Good Financial Housekeeping, CY2021 | Passed | https://www.philstar.com/the-freeman/cebu-news/2022/06/05/2186134/17-more-cebu-lgus-get-seal | 2022-06-05 | med | This is GFH, not the full SGLG. |
| Seal of Good Financial Housekeeping, CY2025 | Passed (on the passers list as of 2026-03-09) | https://www.cebu.gov.ph/13102/cebu-province-earns-dilg-good-financial-housekeeping-award-gov-pam-vows-transparency/ | article 2026-06-19 | med | Province of Cebu official site. This is GFH, not the full SGLG. |
| LGU self-claim | "consistent recipient of the DILG Seal of Good Financial Housekeeping and Seal of Child-Friendly Local Governance" | https://liloan.gov.ph/index.php/about-liloan | undated | low | Seen as a search snippet only. WebFetch returned 404. |

## Sources checked (nothing usable)

- `https://blgf.gov.ph/lgu-fiscal-data/` and `https://blgf.gov.ph/nol_liloan-cebu/`: 403 to both plain curl and WebFetch. This is the main source for the SRE (income, NTA, local sources).
- `https://www.coa.gov.ph/` and its AAR LGU listing: 403. No Liloan annual audit report was retrieved.
- `https://fdpp.dilg.gov.ph/`: the HTTPS certificate chain fails to verify. It was not bypassed.
- `https://liloan.gov.ph/`: 403 to plain curl, recorded as blocked. WebFetch returned 404 for `/index.php/about-liloan` and `/executive/8-point-agenda/good-governance/271-seal-of-good-financial-housekeeping`.
- DBM BESF Table F.7 (FY2022, FY2023, FY2024 SRE "By Municipalities"): www.dbm.gov.ph/wp-content/uploads/BESF/BESF2024/F7.pdf, BESF2025/F7.pdf and BESF2026/F7.pdf. These sum all municipalities per province, so there is no row for Liloan.
- `https://lgu201.dilg.gov.ph/view.php?r=07&p=22&m=27`: DNS does not resolve.
- `cebudailynews.inquirer.net` (2018 and 2019 SGLG articles): 403.
- Wikidata Q316056 / Q173665: financial statements are not labelled clearly enough to use.
- Web searches for a Liloan annual budget ordinance (FY2024-2026) and the COA 2023 AAR: nothing found.
