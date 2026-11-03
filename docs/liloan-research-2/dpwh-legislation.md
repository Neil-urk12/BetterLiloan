> Retrieved 2026-11-02. UNVERIFIED, for human review. Liloan, **Cebu** only (Liloan, Southern Leyte; Liloan, Malinao, Aklan; Liloan, Catarman, Camiguin; and Liloan, Maria, Siquijor hits were excluded).

# DPWH projects, ordinances and SB resolutions: Liloan, Cebu

Target JSON shapes (from `public/data/`):

- `dpwh-projects.json`: `summary{totalProjects,totalCost,completedProjects,ongoingProjects,implementingAgency}` and `projects[]{id,name,location,category,contractor,contractorId,cost,status(0-100),completionDate}`. Rendered by `public/assets/js/dpwh-projects.js` on `public/budget/index.html`.
- `ordinances.json`: `ordinances[]{ordinanceNo,title,sessionDate}`. Rendered by `public/assets/js/ordinances.js` on `public/legislative/ordinance-framework.html`.
- `resolutions.json`: `resolutions[]{resolutionNo,title,sessionDate}`. Rendered by `public/assets/js/resolutions.js` on `public/legislative/resolution-framework.html`.

**Bottom line:** none of the three datasets can be filled to the Solano standard from what is publicly reachable. liloan.gov.ph posts only a handful of legislative items, mostly without enactment dates. The DPWH Transparency Portal (the likely source of the Solano DPWH data, with `contractorId` and % status) returned 403. All contractor/amount data below comes from news reports about the Cotcot River flood-control contracts.

## 1. DEO and congressional district

| Item | Value | Source URL | Source date / as of | Confidence |
|---|---|---|---|---|
| DPWH DEO covering Liloan | **DPWH Cebu 5th District Engineering Office** (Brgy. Poblacion, Danao City) | https://dpwh.gov.ph/DPWH/news/27724 (DPWH: Brgy. Tabla, Liloan FMR "implemented by the DPWH Cebu 5th District Engineering Office") | 2022-09-12 | high |
| same | Liloan is in the "Fifth Engineering District" (Danao City + Liloan, Compostela, …) | https://www.lawphil.net/statutes/repacts/ra2003/ra_9218_2003.html (RA 9218) | 2003-08-08 | high (historical) |
| same | Cebu 5th DEO FY2024 APP lists Liloan projects; contract-ID prefix `HI` = Cebu 5th DEO (e.g. `13HI0006` Liloan road concreting) | https://www.dpwh.gov.ph/dpwh/sites/default/files/certificate_of_compliance/Cebu%205th.pdf | covers Jan-Dec 2013 | high |
| Caveat | RA 11991 (2024-03-21) repealed RA 9218 and renumbered Cebu **1st-4th** DEOs only; it does not name Liloan or a 5th DEO. Whether a DPWH order re-defined the 5th DEO's coverage afterwards: NOT FOUND | https://lawphil.net/statutes/repacts/ra2024/ra_11991_2024.html | 2024-03-21 | high (for what the act says) |
| Cebu 5th DEO head | DE Ma. Jannet B. Nero (directory page undated) | https://dpwh.gov.ph/dpwh/directory/region/Region-VII | undated | low |
| Congressional district | **5th District of Cebu** ("Fifth District Rep. Duke Frasco, whose district includes Liloan") | https://www.philstar.com/the-freeman/cebu-news/2025/09/05/2470621/discaya-firms-secured-p3958-million-projects-liloan | 2025-09-05 | med |
| same | Cebu 5th district | https://en.wikipedia.org/wiki/Liloan | undated | low |

`summary.implementingAgency` candidate: "Cebu 5th District Engineering Office". `summary.totalProjects` / `totalCost` / completed / ongoing: **NOT FOUND** (portal blocked). Partial totals reported in news, which disagree:

| Figure | Source | Date | Confidence |
|---|---|---|---|
| 5 flood-control projects in Liloan, ₱398M (GMA Research from the Sumbong sa Pangulo site) | https://www.gmanetwork.com/news/topstories/nation/965056/cebu-typhoon-tino-flood-control-projects/story | 2025-11-05 | low |
| 3 contracts to Discaya-linked firms, ₱395.8M total | https://www.philstar.com/the-freeman/cebu-news/2025/09/05/2470621/discaya-firms-secured-p3958-million-projects-liloan | 2025-09-05 | low |
| >₱1.5B for Cotcot River flood control since 2020 (Liloan **and Compostela**), per DPWH transparency database; "at least six" Cotcot projects per a citizen group | https://pcij.org/2026/01/05/we-decide-whether-floods-keep-killing/ | 2026-01-05 | low |

## 2. DPWH projects in Liloan

Total distinct Liloan, Cebu projects seen: **7 candidate rows** (some may describe the same contract). No row has a verified `contractorId`. Rows 1 and 2 may be the same contract: DPWH-7 calls 2025-03-10 the *completion* date, The Freeman calls it the *award* date of a second contract.

| # | id | name | location | category | contractor | contractorId | cost (₱) | status | completionDate | Source URL | Source date | Confidence |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | NOT FOUND (The Freeman prints "24H00016"; not verified on DPWH) | Construction of Flood Mitigating Structure – Revetment Type, Cotcot River (upstream), left bank, 476.781 lm | Liloan, Cebu; barangay NOT FOUND | flood control (per source; DPWH category NOT FOUND) | JV: Alpha & Omega General Contractor & Development Corp. / MC Geometric Proportions, Inc. | NOT FOUND | 149,549,060.00 (Freeman, from DPWH contract doc); "revised contract amount" ₱149.5M (DPWH-7 via news) | Completed (100) per DPWH-7 | 2025-03-10 (contract signed 2024-04-01, 330 cd) | https://www.sunstar.com.ph/cebu/dpwh-7-discaya-firm-completes-liloan-flood-control-project ; https://cebu.bomboradyo.com/flood-control-project-sa-cotcot-river-liloan-nahuman-na-dpwh-7/ ; https://www.mytv.ph/article/DPWH-7_defends_Liloan_flood_control_project ; https://www.sunstar.com.ph/cebu/discaya-linked-firm-bags-p149m-liloan-project | 2025-09-04/05 | med |
| 2 | NOT FOUND | Flood control structure along Cotcot River (upstream) | Liloan, Cebu; barangay NOT FOUND | flood control (per source) | JV: MC Geometric Proportions, Inc. / Alpha & Omega General Contractor & Development Corp. | NOT FOUND | 149.8M (Philstar also writes ₱149.84M) | NOT FOUND (awarded 2025-03-10 per Freeman) | NOT FOUND | https://www.philstar.com/the-freeman/cebu-news/2025/09/05/2470621/discaya-firms-secured-p3958-million-projects-liloan | 2025-09-05 | low |
| 3 | `24HI0014` (Rappler, seen only in search-result text; article 403) | Flood control structure, Cotcot River (downstream), 620 m | Liloan, Cebu; barangay NOT FOUND | flood control (per source) | Freeman: JV MC Geometric Proportions, Inc. / St. Matthew General Contractor & Development Corp.; Rappler snippet: St. Matthew General Contractor & Development Corp. | NOT FOUND | 96.4M (Freeman); ~96M (Rappler snippet); APP ABC 100,000,000 (FY2024 APP, search snippet only) | NOT FOUND (awarded 2024-12-26 per Freeman) | NOT FOUND | https://www.philstar.com/the-freeman/cebu-news/2025/09/05/2470621/discaya-firms-secured-p3958-million-projects-liloan ; https://www.rappler.com/newsbreak/investigative/cotcot-river-structural-errors-discaya-flood-control-cebu/ ; https://www.dpwh.gov.ph/dpwh/sites/default/files/filefield_paths/final_app_fy_2024_0.pdf | 2025-09-05; Rappler undated; APP FY2024 | low |
| 4 | `24HI0018` | Construction of Road, Barangay San Vicente, Liloan, Cebu | Brgy. San Vicente, Liloan | NOT FOUND | NOT FOUND | NOT FOUND | ABC 5,000,000 (planned) | NOT FOUND | NOT FOUND | https://www.dpwh.gov.ph/dpwh/sites/default/files/filefield_paths/final_app_fy_2024_0.pdf (seen only in search-result text; PDF not machine-readable here) | FY2024 APP | low |
| 5 | NOT FOUND | "Ka Paz Road", Brgy. Catarman to Brgy. Tayud, Liloan. **Conflict:** one search summary called it a flood-control structure, another a road | Catarman–Tayud, Liloan | NOT FOUND | NOT FOUND | NOT FOUND | ABC 5,000,000 (planned) | NOT FOUND | NOT FOUND | same FY2024 APP PDF (search-result text only) | FY2024 APP | low |
| 6 | NOT FOUND | Farm-to-market road, 562 m concrete | Brgy. Tabla, Liloan | Roads (FMR; DPWH-DA convergence) | NOT FOUND | NOT FOUND | 10,000,000 | Completed (100), date NOT FOUND | NOT FOUND | https://dpwh.gov.ph/DPWH/news/27724 | 2022-09-12 | high |
| 7 | `13HI0006` (PhilGEPS ref 2151174) | CLUSTER I – a) Road Concreting @ Brgy. San Vicente, Liloan; b) Road Concreting @ Brgy. San Roque, Liloan; c) Road Concreting @ Brgy. Poblacion, Compostela | Brgys. San Vicente & San Roque, Liloan (+ Compostela) | NOT FOUND | NOT FOUND | NOT FOUND | NOT FOUND | NOA/NTP posted 2013-10-23; bid notice "Closed" | NOT FOUND | https://www.dpwh.gov.ph/dpwh/sites/default/files/certificate_of_compliance/Cebu%205th.pdf (page 1 read) | 2013 | high (for ID/title only) |

Not reviewed: pages 2-14 of the 2013 certificate (search text mentions `13HI0014` MPB, Brgy. Jubay, Liloan) and the Cebu 5th DEO PMR as of 2023-12-31 (https://dpwh.gov.ph/dpwh/sites/default/files/pmr/dpwhcebu5thdeo-submissionoffy2023pmr2ndsemcivilworksgoodsconsultingserivesfinal.pdf). The PMR shows contract IDs, ABC and contract cost but no contractor, and its rendered text was too small to read reliably. Neither PDF could be text-extracted here (no PDF tool available). Running `pdftotext -layout` on them and grepping "Liloan" is the cheapest next step.

## 3. Municipal ordinances

liloan.gov.ph lists **4** items under Legislative → Ordinances (plus 1 ordinance filed under Resolutions). Ordinance numbers come from the PDF attachment labels; none of the pages shows an enactment date. `sessionDate` is therefore NOT FOUND unless stated.

| ordinanceNo | title | sessionDate | Source URL | Source date / as of | Confidence |
|---|---|---|---|---|---|
| 42-2026 | "Pay As You Throw, Garbage Bag System" (₱12 official bags) | NOT FOUND | https://tribune.net.ph/2026/09/07/liloan-shifts-to-p12-pay-as-you-throw | 2026-09-08 | med (news) |
| 14th SB 2025-29 | An Ordinance establishing an Animal Bite Treatment Center under the Municipal Health Office of the Municipality of Liloan, Province of Cebu and providing funds therefor | NOT FOUND | https://liloan.gov.ph/establishing-an-animal-bite-treatment-center/ | posted 2026-05-11 | high |
| 12th SB "202111" (printed without a hyphen) | Regulation of Gasoline Stations and Selling of Gasoline and Petroleum (page heading: "The Liloan Fuel Regulation Ordinance") | NOT FOUND | https://liloan.gov.ph/the-liloan-fuel-regulation-ordinance/ | posted 2026-04-14 | high |
| 12th SB "202110" (printed without a hyphen) | Declaring Price [freeze on] all essential commodities, Typhoon Odette. Body: "An Ordinance declaring a price freeze on all basic necessities and other prime commodities in the entire Municipality due to … Super Typhoon Odette on December 16, 2021" | NOT FOUND | https://liloan.gov.ph/basic-commodities-protection-ordinance/ | posted 2026-04-14 | high |
| 12th SB 2021-07 | Adopt EO Reconstituting the Liloan Purok System and Adopting Systems (page heading: "Liloan Purok Strengthening & Funding Act"; adopts EO No. 2-21 of 2021-01-25) | NOT FOUND | https://liloan.gov.ph/adopt-eo-reconstituting-the-liloan-purok-system-and-adopting-systems/ | posted 2026-04-14 | high |
| 12th SB 2021-01 | Amending Ordinance No 2012-06, Revising the Truck Ban. **Conflict:** the category excerpt says it amends Ord. 2012-03 and repeals 2012-06 | NOT FOUND | https://liloan.gov.ph/revising-the-truck-ban/ | posted 2026-04-14 | high |
| 10th SB 2016-06 | Compelling Every Barangay of the Municipality of Liloan, Cebu, the Establishment of VAWC Desk | NOT FOUND | https://liloan.gov.ph/attachments/article/189/ (old URL from search index, now 404) | n/a | low |
| 8th SB 2009-07 | An Ordinance Revising the Zoning Regulations of the Municipality of Liloan, Cebu and Providing for the Administration, Enforcement and Amendment Thereof and for the Repeal of All Ordinances in Conflict therewith | 2009-06-01 | https://www.sunstar.com.ph/more-articles/tell-it-to-sunstar-liloans-land-use-plan (letter by then-Mayor Frasco); old liloan.gov.ph PDF URL now 404 | 2017-09-07 | med |
| 93-06 | Zoning Ordinance (full title NOT FOUND) | 1993-12-13 | same SunStar letter | 2017-09-07 | med |
| 9, s. 1982 | Zoning Ordinance (full title NOT FOUND) | 1982-12-12 | same SunStar letter | 2017-09-07 | med |

Proposed (not enacted), from liloan.gov.ph Legislative → Public Hearing:

| Status | Title | Date | Source URL | Confidence |
|---|---|---|---|---|
| Public hearing 2026-10-14 | Proposed Ordinance Prescribing and Establishing the Official Laboratory Test Rates of the Clinical Laboratory of the Liloan Municipal Health Office | posted 2026-10-13 | https://liloan.gov.ph/proposed-ordinance-prescribing-and-establishing-the-official-laboratory-test-rates-of-the-clinical-laboratory-of-the-liloan-municipal-health-office/ | high |
| Public hearing | Proposed Ordinance Regulating the Sale and Consumption of Intoxicating Liquor and Alcoholic Beverages | posted 2026-10-12 | https://liloan.gov.ph/proposed-ordinance-regulating-the-sale-and-consumption-of-intoxicating-liquor-and-alcoholic-beverages/ | high |
| Public hearing 2026-10-06 2:00 PM | Proposed Ordinance Prescribing and Authorizing Reasonable Fees for the Use of the Panphil B. Frasco Memorial Sports Complex | posted 2026-10-02 | https://liloan.gov.ph/fees-pbf-gym/ | high |
| Committee hearing | An Ordinance Regulating the wearing of Balaclavas, Face Masks… (title truncated on listing) | posted 2026-07-28 | https://liloan.gov.ph/committee-hearing-an-ordinance-regulating-the-wearing-of-balaclavas-face-masks/ | high |

## 4. SB resolutions

liloan.gov.ph lists **3** items under Legislative → Resolutions. One of them is actually an ordinance (Truck Ban, above).

| resolutionNo | title | sessionDate | Source URL | Source date / as of | Confidence |
|---|---|---|---|---|---|
| 12th SB 2021-206 | Declaring Entire Liloan Under a State of Calamity (Super Typhoon Odette, 2021-12-16). Page heading calls it "The Liloan Post-Odette State of Calamity Ordinance" | NOT FOUND | https://liloan.gov.ph/the-liloan-post-odette-state-of-calamity-ordinance/ | posted 2026-04-14 | high |
| 8th SB 2010-025 | Declaring Sr. Ma. Corazon Del Carmen, OSA, as Adopted Daughter of the Municipality of Liloan | NOT FOUND (post dated 2010-02-15) | https://liloan.gov.ph/declaring-sr-ma-corazon-del-carmen-osa-as-adopted-daughter-of-the-municipality-of-liloan/ | 2010-02-15 | high |
| 2009-147 | A Resolution Adopting a Comprehensive Land Use Plan for the Municipality of Liloan, Cebu | 2009-10-13 | https://www.sunstar.com.ph/more-articles/tell-it-to-sunstar-liloans-land-use-plan | 2017-09-07 | med |
| 170 | Approval of the Land Use Plan of the Municipality of Liloan, Cebu | 1978-07-23 | same SunStar letter | 2017-09-07 | med |
| *(Provincial, not SB)* Cebu SP Res. 1726-2011 | Approving the CLUP of the Municipality of Liloan, Cebu for the planning period 2009-1018 [sic, as printed] and the Zoning Ordinance of the Municipality as amended | 2011-11-16 | same SunStar letter | 2017-09-07 | med |

## Sources checked (nothing usable)

- https://transparency.dpwh.gov.ph: **blocked** (403). This is the DPWH Transparency Portal (launched Nov 2025, projects since 2016) and the most likely source for a full `dpwh-projects.json`.
- https://sumbongsapangulo.ph/flood-control-map/: **blocked** (403).
- https://www.rappler.com/newsbreak/investigative/cotcot-river-structural-errors-discaya-flood-control-cebu/: **blocked** (403). Only the search-result snippet was used (row 3).
- https://liloan.gov.ph/wp-json/wp/v2/search: **401**, not pursued.
- https://liloan.gov.ph/category/legislative/ordinances/page/2/: 404 (only one page exists). Legislative category pages 1-3 were reviewed in full.
- Old liloan.gov.ph `/attachments/article/...` ordinance PDFs (2009-07, 2016-06): 404.
- DPWH civil-works submissions, filtered with `?data=Liloan` (https://www.dpwh.gov.ph/dpwh/business/procurement/civil_works/submissions/notice_of_award?data=Liloan, `.../contract_of_agreement?data=Liloan`, `?data=Cotcot`): no Liloan, Cebu rows. Cebu 5th DEO postings evidently don't put "Liloan" in the description. Page 2 of the NOA results was not checked.
- PhilGEPS open opportunities (https://notices.philgeps.gov.ph/...): JavaScript-only search, no Liloan results visible.
- DPWH FY2024 consolidated APP PDF and Cebu 5th DEO PMR (2023) PDF: downloaded but not text-extractable here.
- https://www.dpwh.gov.ph/DPWH/tags/reclassification-cebu-6th-district-engineering-office-deo-3rd-class-deo-2nd-class-deo-vii-063-org: Cebu 6th DEO (Mandaue; covers Lapu-Lapu, Mandaue, Consolacion, Cordova per DO 52 s2010), not Liloan.
- https://tribune.net.ph/2024/03/24/bongbong-greenlights-revised-deos: the "Liloan" it mentions is Southern Leyte (RA 11992).
- Cebu Provincial Board: no online list of reviewed Liloan ordinances found via web search.
- Web searches for 2025-2026 Liloan SB resolutions and other ordinances: nothing beyond the items above.
