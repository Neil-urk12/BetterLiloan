> Verification run 2026-11-02 for Liloan, **Cebu** (PSGC 072227000, Region VII). Method: each cited source was re-opened independently with WebFetch (a model reads the page and quotes it back; quotes below are that tool's verbatim extracts) or plain `curl` where the site allowed it (PhilAtlas, citypopulation.de, psgc.gitlab.io: raw HTML/JSON parsed directly). Second sources were sought with WebSearch. No user-agent spoofing, no bypassing of 403s, TLS errors or login walls. PDF text extraction (`pdftotext`) is blocked by this machine's shell policy, so the scanned DPWH FY2024 APP was not read; the 2013 Cebu 5th DEO certificate was read visually (page 1).

# Verification of docs/liloan-research-2/*

Verdicts: **CONFIRMED** (source states it exactly) · **CONFIRMED+2** (plus an independent second source) · **MISMATCH** · **UNSUPPORTED** (source reachable, value not there) · **UNREACHABLE** (source blocked/down). Rows already marked NOT FOUND by the researchers were skipped.

## 1. Summary

| file | CONFIRMED | CONFIRMED+2 | MISMATCH | UNSUPPORTED | UNREACHABLE | rows checked |
|---|---|---|---|---|---|---|
| barangays.md | 31 | 4 | 0 | 2 | 18 | 55 |
| profile-demographics.md | 36 | 18 | 0 | 0 | 3 | 57 |
| cmci-fiscal.md | 30 | 1 | 1 | 0 | 3 | 35 |
| dpwh-legislation.md | 30 | 3 | 0 | 0 | 5 | 38 |
| **total** | **127** | **26** | **1** | **2** | **29** | **185** |

Counting rule: in barangays.md each barangay contributes four checks (PSGC, 2020 pop, 2024 pop if claimed, captain). CMCI scope: all 2023 and 2024 overall and pillar rows, 5 sampled indicator values (listed in §5.3), plus 5 overall ranks from other years that were seen incidentally on the profile pages. The remaining CMCI rows (2016–2022 pillar rows, 2017–2018 overall rows, and the other ~185 indicator values) were **not checked** and are not counted.

Headline findings:
- **No value was contradicted by its own cited source**, except the SGLG 2024 awardee name list (snippet level, see cmci-fiscal).
- **All 14 barangay captains are unverified.** barangaydirectory.com is still HTTP 503. Search-engine text reproduces 10 of the names; for **San Roque (Herana)** and **Yati (Salundaguit)** the search index says the Cebu pages list *no* official, so those two are UNSUPPORTED. No LGU, DILG, COMELEC or news source names any Liloan captain.
- **Poblacion = Gloria A. Sanchez** is plausible (LGU names "Gloria A. Sanchez, LNMB President"; directory snippet names "Gloria Arcelo Sanchez" as Poblacion PB) but the barangay link rests only on the directory snippet.
- The barangaydirectory `/liloan/` slug is Liloan, Cebu; `/liloan-2/` is Southern Leyte (e.g. `/liloan-2/san-roque`, `/liloan-2/bahay`). The San Vicente and Tabla snippets are from `/liloan/` (Cebu).
- 2020 barangay populations (PhilAtlas, PSA) **sum exactly to 153,197** (and the 2015 column to 118,753).
- **158,387 (2024)** is confirmed by citypopulation.de (citing PSA) and Wikipedia; PSA itself is 403. **Income class 1st** is confirmed by DTI's CMCI 2024 profile ("First Class Municipality") and Wikipedia; the DOF DO 074-2024 schedule was not reached.
- Founding/parish conflict is real and sits in the LGU's own pages: profile says parish "1845", tourist page says parish "elevated on June 27, 1847" and church "Built in 1847". SunStar (2023-05-26) calls 2023 the "176th annual fiesta", which counts from 1847, not 1845.
- **₱149.5M vs ₱149.8M Cotcot (upstream) contracts:** The Freeman explicitly presents them as two separate contracts (the 2024-04-01 one with "Contract ID No. 24H00016", and "the second contract" awarded 2025-03-10). SunStar, Bombo Radyo and MyTV (all quoting DPWH-7) mention only one upstream contract, completed 2025-03-10, the same date The Freeman gives as the second contract's *award*. Probable duplicate; unresolved.
- **"24H00016" is printed by The Freeman but is not a valid DPWH ID format** (Cebu 5th DEO IDs read `24HI00xx`). A search result associates `24HI0016` with a different road project (access road to Santiago Public Beach Resort). `24HI0014` (Cotcot downstream, 620 m) appears only in a Rappler search snippet; Rappler is 403.
- Researcher note "Duke Frasco's 2025 re-election was not confirmed" is outdated: Wikipedia records him "Re-elected in 2025" (217,303 votes) and The Freeman (2025-09-05) calls him "Fifth District Representative Duke Frasco, whose jurisdiction includes Liloan".

## 2. Safe to publish

CONFIRMED / CONFIRMED+2 from an official or national source (liloan.gov.ph, cmci.dti.gov.ph, dpwh.gov.ph, cebu.gov.ph, statute text):

- **CMCI (DTI)**: category 1st–2nd Class Municipalities; profile "First Class Municipality". 2024: overall rank 24th, score 37.0244; ED 26/4.7327, GE 143/8.8745, Infra 285/2.3800, Res 4/13.9251, Innov 107/7.1121. 2023: overall 46th, 36.8806; ED 31/4.8634, GE 176/9.3747, Infra 149/2.8753, Res 39/11.9333, Innov 42/7.8339. Overall ranks 2022 31st, 2021 60th, 2020 19th, 2019 22nd, 2016 128th (rank only). The five sampled indicator values in §5.3. All 5 sampled values matched; the other indicator values were not checked and stay med confidence.
- **Income class**: 1st class (CMCI 2024 profile; Wikipedia agrees).
- **LGU officials (liloan.gov.ph 14th SB page)**: Gloria A. Sanchez, LNMB President; Raymund Kit B. Comendador, PPSK.
- **History/profile (liloan.gov.ph municipal profile + tourist page)**: name from Cebuano "lilo" (whirlpool at the mouth of Silot Bay); formerly under Mandaue; independent municipality "in the 1840s"; patron San Fernando Rey; Bagacay Point lighthouse (Spanish 1857, rebuilt early 1900s, 22 m, National Historical Landmark 2004); "The Light of the North"; Titay's rosquillos (Doña Titay, Margarita Frasco; "1907" on the festival page); masi and lanang; landmarks (Bantayan sa Hari c. 1857, foundation only; Malingin Rock in Mulao; Stone Ark on the Mulao River; Suba Bridge, Poblacion–Catarman; Silot Bay "a hundred-hectare tidal lagoon"; Pap Kit's Marina and Fishing Lagoon, named on the profile page only); church construction began January 1859, completed 1880. Vision: use the exact wording in §5.2, not the researcher's paraphrase.
- **Contact (liloan.gov.ph/contact-us)**: address "Poblacion, Liloan, Cebu, Philippines"; trunk lines 032-425-1388 / 032-4135400 / 032-260-8328 / 032-263-5451; Engineering/OBO 032-503-3930; MSWD 0932-293-2853; locals Assessor 114, Civil Registrar 115, Agriculture 113, MENRO 106, Business 112, Mayor's Office 102 ("Treasurer – 11" as printed, probably truncated).
- **Ordinances (liloan.gov.ph)**: 14th SB Ord. 2025-29 (Animal Bite Treatment Center); 12th SB Ord. 202111 (Fuel regulation); 12th SB Ord. 202110 (Odette price freeze); 12th SB Ord. 2021-07 (Purok system, adopts EO 2-21 of 2021-01-25); 12th SB Ord. 2021-01 (Truck ban; page is internally inconsistent on whether it amends 2012-03 or 2012-06). No enactment dates are published.
- **Resolutions (liloan.gov.ph)**: 12th SB No. 2021-206 (State of Calamity, Odette); 8th SB No. 2010-025 (Sr. Ma. Corazon Del Carmen, OSA, adopted daughter; post dated 2010-02-15).
- **Proposed ordinances (liloan.gov.ph Legislative listing)**: clinical laboratory test rates (hearing 2026-10-14), liquor regulation (posted 2026-10-12), PBF Memorial Sports Complex fees (hearing 2026-10-06 2:00 PM), balaclavas/face masks (committee hearing, posted 2026-07-28). Publish only as *proposed*.
- **DPWH**: Liloan is served by the DPWH Cebu 5th District Engineering Office (Brgy. Poblacion, Danao City); District Engineer Ma. Jannet B. Nero (directory undated); Brgy. Tabla farm-to-market road, 562 m concrete, ₱10 million, completed (DPWH news 2022-09-12); 2013 contract 13HI0006, CLUSTER I road concreting at San Vicente and San Roque, Liloan (+ Poblacion, Compostela), NOA/NTP 2013-10-23, "Closed".
- **Province of Cebu (cebu.gov.ph)**: Liloan passed the CY2025 Good Financial Housekeeping assessment (passers list as of 2026-03-09).

Confirmed but via third-party mirrors of PSA (fine to publish with "Source: PSA, via PhilAtlas / citypopulation.de"): barangay count 14; 14 barangay names and PSGC codes; 2020 population 153,197 and the 14 barangay 2020 figures; 2015 population 118,753; 2024 population 158,387; land area 45.92 km²; ZIP 6002; density 3,336/km² (2020); growth 5.51% (2015–2020); 2015 households 27,847.

## 3. Do not publish

MISMATCH / UNSUPPORTED:
- **San Roque captain "Nila Tundag Herana"**: UNSUPPORTED. Search index text for `/barangay/liloan/san-roque` (Cebu) says the page lists no officials; a search for "Herana" + San Roque Liloan returns nothing naming her. Directory itself 503.
- **Yati captain "Leo Pepito Salundaguit"**: UNSUPPORTED. Two separate search results say the Yati page "does not name a barangay captain" / "has no officials listed"; the name does not appear in any result.
- **SGLG 2024 Cebu awardee list (cmci-fiscal §3)**: MISMATCH at snippet level. My search snippet of the same DILG Cebu 2024 annual report lists 14 LGUs: Bogo, Danao, Alegria, Asturias, Carmen, Consolacion, Cordova, Daanbantayan, Medellin, Pinamungajan, San Remigio, Santa Fe, Sogod, Tuburan. The research row's list adds Madridejos, Balamban, Tudela and omits San Remigio and Sogod. Liloan is absent from both, so "Liloan not an SGLG 2024 awardee" still stands (low confidence); do not publish the name list.

Also hold back (not contradicted, but not verifiable or source-weak):
- All other 12 barangay captains (single third-party directory, HTTP 503, snippet-only) and the four 2024 barangay populations other than Yati, plus Yati 37,082 (snippet only, and inconsistent with the municipal 2020→2024 growth).
- "Gloria A. Sanchez = Poblacion captain": plausible, but the barangay link rests only on the directory snippet.
- Freeman's "Contract ID No. 24H00016" as a DPWH contract ID; `24HI0014`; the FY2024 APP rows (`24HI0018` San Vicente road; "Ka Paz Road"; ₱100M ABC).
- The ₱149.8M Cotcot upstream contract as a *separate* project (probable duplicate of the ₱149.5M one).
- Any exact founding date (23 Aug 1844 / 1845) or parish date (27 Jan 1845 / 1845 / 27 Jun 1847): sources conflict, including the LGU's own pages. Publish "1840s".
- Wikipedia-only values: 2024 households 37,390; 2024 density 3,449; 2025 voters 87,305; poverty 15.81%; fiscal 2024/2022 revenue/expenditure/assets/liabilities; Pier 88 date (well corroborated in news, fine with a news citation); "most populous municipality" claim; WWII and first capitan municipal anecdotes.
- 145,234 (citypopulation.de urban-core figure, not the municipal total).
- "8th SB" prefix on Ordinance 2009-07: the SunStar letter prints only "Ordinance No. 2009-07".

## 4. Sources re-opened by this verifier

| source | status |
|---|---|
| cmci.dti.gov.ph rankings-data.php / lgu-profile.php | WebFetch OK; plain curl 403 |
| philatlas.com Liloan page | curl 200 (raw HTML parsed) |
| psgc.gitlab.io API (municipality + barangays) | curl 200 (JSON) |
| citypopulation.de (municipality page, Visayas cities page) | curl 200 |
| liloan.gov.ph (14th SB, municipal profile, tourist destinations, contact-us, rosquillos post, 5 ordinance posts, 2 resolution posts, Legislative category) | WebFetch OK; plain curl 403; `/index.php/about-liloan` 404 |
| en.wikipedia.org Liloan; Cebu's 5th congressional district; encycloreader mirror | WebFetch OK |
| psa.gov.ph POPCEN 2024 release | 403 |
| barangaydirectory.com | 503 |
| dti.gov.ph CMCI Cebu awarding release | `dti.gov.ph` DNS failure; `www.dti.gov.ph` 404 |
| rappler.com (Cotcot; COA lechon) | 403 |
| cebudailynews.inquirer.net ?p=235997 | 403 |
| ldr.senate.gov.ph SB 1926 | 403 |
| dpwh.gov.ph news 27724, Region VII directory, 2013 Cebu 5th certificate (PDF read visually) | OK |
| dpwh.gov.ph FY2024 APP PDF | downloaded, not text-readable; `pdftotext` blocked by local shell policy |
| lawphil RA 9218, RA 11991 | OK |
| SunStar (3 articles), Philstar/Freeman (2), Tribune (2), Bombo Radyo, MyTV, GMA, PCIJ, cebu.gov.ph | OK |

## 5. Per-row detail

### 5.1 barangays.md

| file | field | claimed value | verdict | evidence (quote, URL) | notes |
|---|---|---|---|---|---|
| barangays | Barangay count | 14 | CONFIRMED+2 | psgc.gitlab.io returns 14 barangays under 072227000; PhilAtlas "Barangay count 14" (https://www.philatlas.com/visayas/r07/cebu/liloan.html) | PSA itself 403 |
| barangays | Municipality PSGC | 0702227000 / 072227000 | CONFIRMED+2 | psgc.gitlab.io: `"code":"072227000" … "psgc10DigitCode":"0702227000"`, province 072200000, region 070000000; Wikipedia infobox "072227000" | |
| barangays | Population 2020 | 153,197 | CONFIRMED+2 | PhilAtlas "Population (2020) 153,197"; citypopulation.de "Census 2020-05-01 … 153,197" (https://citypopulation.de/en/philippines/visayas/admin/cebu/072227__liloan/) | both cite PSA |
| barangays | Population 2024 | 158,387 | CONFIRMED+2 | citypopulation.de "Census 2024-07-01 … 158,387 … Source: Philippines Statistics Authority"; Wikipedia infobox "158,387" | PSA release 403 |
| barangays | LNMB president | Hon. Gloria A. Sanchez | CONFIRMED | liloan.gov.ph/14th-sangguniang-bayan-members/: "Gloria A. Sanchez" — "LNMB President" | page names no barangay |
| barangays | Barangay of LNMB president | Poblacion ("Gloria Arcelo Sanchez") | UNREACHABLE | barangaydirectory.com 503. Search text: "The Punong Barangay of Barangay Poblacion is Gloria Arcelo Sanchez (2023 - 2026 term)" | snippet reproduces it; middle initial matches; no independent source |
| barangays | PPSK | Raymund Kit B. Comendador | CONFIRMED | same LGU page: "Raymund Kit B. Comendador" — "PPSK" | |
| barangays | PSGC, all 14 barangays | 0702227001 … 0702227014 / 072227001 … 072227014, in the listed order | CONFIRMED ×14 | psgc.gitlab.io JSON: Cabadiangan 001, Calero 002, Catarman 003, Cotcot 004, Jubay 005, Lataban 006, Mulao 007, Poblacion 008, San Roque 009, San Vicente 010, Santa Cruz 011, Tabla 012, Tayud 013, Yati 014 (10-digit 0702227xxx) | Wikipedia matches for the two codes spot-checked (Yati, Cabadiangan) |
| barangays | Pop. 2020, all 14 barangays | 2,209; 6,821; 20,162; 10,598; 14,904; 2,516; 1,189; 16,657; 1,797; 13,069; 2,689; 1,562; 21,978; 37,046 | CONFIRMED ×14 | PhilAtlas municipal table, identical values row by row | sum = 153,197 exactly (computed); 2015 column sums to 118,753 |
| barangays | Pop. 2024 Cabadiangan / Lataban / Santa Cruz / Tayud | 2,544 / 2,523 / 3,037 / 21,984 | UNREACHABLE ×4 | barangaydirectory.com 503 | not reproduced in my searches |
| barangays | Pop. 2024 Yati | 37,082 | UNREACHABLE | 503; search text: "It had a population of 37,082 as of the 2024 POPCEN." | +36 over 2020 while the town grew +5,190: implausible |
| barangays | Captain Cabadiangan | Rosalio Melenres Noval Jr. | UNREACHABLE | 503 | not reproduced |
| barangays | Captain Calero | Primor Rivera Garbo | UNREACHABLE | 503; search text: "Primor Rivera Garbo as Punong Barangay of Barangay Calero in Liloan, Cebu … 2023 - 2026 term" | |
| barangays | Captain Catarman | Ruel Delos Reyes Jugalbot | UNREACHABLE | 503; search text: "current Punong Barangay of Barangay Catarman in Liloan, Cebu … 2023 - 2026 term" | |
| barangays | Captain Cotcot | Martin Juntilla Yungco | UNREACHABLE | 503 | not reproduced |
| barangays | Captain Jubay | Pablito Wagas Angtud | UNREACHABLE | 503; search text says the Jubay page "names no captain" | weak; treat as unsupported in practice |
| barangays | Captain Lataban | Bonifacio Capangpangan Cantero | UNREACHABLE | 503; search text: "Lataban lists Bonifacio Capangpangan Cantero (2023–2026)" | |
| barangays | Captain Mulao | Pedro Ampayer Azarcon Jr. | UNREACHABLE | 503; search text: "holds office under the mandate established by the October 30, 2023 BSKE" | |
| barangays | Captain Poblacion | Gloria Arcelo Sanchez | UNREACHABLE | see LNMB row | |
| barangays | Captain San Roque | Nila Tundag Herana | UNSUPPORTED | search text: "The San Roque page has no officials listed, and nothing mentions a Tilao or Herana"; query `"Herana" San Roque Liloan` finds nothing | Cebu slug `/liloan/san-roque`; Southern Leyte is `/liloan-2/san-roque` |
| barangays | Captain San Vicente | Victor Bacus Comendador | UNREACHABLE | 503; search text: "The Punong Barangay of Barangay San Vicente is Victor Bacus Comendador (2023 - 2026 term)" | `/liloan/` slug = Cebu |
| barangays | Captain Santa Cruz | Ruben Maglasang Goc-ong | UNREACHABLE | 503; search text: "Punong Barangay in Barangay Santa Cruz, a barangay in the municipality of Liloan … 2023 - 2026 term" | |
| barangays | Captain Tabla | Maria Rosenisa Tanjay Tilao | UNREACHABLE | 503; one search result names her (Tabla, Liloan, Cebu, 2023–2026); another found no name | `/liloan/` slug = Cebu |
| barangays | Captain Tayud | Isidro Icot Cabahug | UNREACHABLE | 503; search text: "Punong Barangay Isidro Icot Cabahug(2023 - 2026 term)" | |
| barangays | Captain Yati | Leo Pepito Salundaguit | UNSUPPORTED | two searches: Yati page "does not name a barangay captain" / "has no officials listed"; name absent from all results | |
| barangays | Wikipedia "2024" column mislabelled | values are 2015 data | CONFIRMED | Wikipedia table headers "2024", "2010"; Yati "27,367", Cabadiangan "1,982" = PhilAtlas 2015 values | |

### 5.2 profile-demographics.md

| file | field | claimed value | verdict | evidence (quote, URL) | notes |
|---|---|---|---|---|---|
| profile | municipality | Liloan | CONFIRMED+2 | PhilAtlas; liloan.gov.ph | |
| profile | province | Cebu | CONFIRMED+2 | PhilAtlas "Province Cebu"; PSGC provinceCode 072200000 | |
| profile | region | Region VII - Central Visayas | CONFIRMED+2 | PhilAtlas "Central Visayas (Region VII)"; PSGC regionCode 070000000 | |
| profile | population.total 2024 | 158,387 | CONFIRMED+2 | Wikipedia "158,387"; citypopulation.de 2024-07-01 "158,387" (cites PSA) | PSA 403 |
| profile | 2024 "other candidate" | 145,234 (urban area, not municipal) | CONFIRMED | citypopulation.de cityid=25057: "Liloan VII … 145,234"; footnote: "barangays with high population density that form a contiguous area" | correctly flagged as not the total |
| profile | population 2020 | 153,197 | CONFIRMED+2 | PhilAtlas; citypopulation.de | RSSO VII PDF 403 |
| profile | land_area_km2 | 45.92 | CONFIRMED+2 | PhilAtlas "Area (2013) 45.92 km2"; Wikipedia "45.92 km2" | |
| profile | barangay_count | 14 | CONFIRMED+2 | PhilAtlas; PSGC mirror | |
| profile | income_class | 1st | CONFIRMED+2 | cmci.dti.gov.ph profile 2024: "First Class Municipality"; Wikipedia "1st municipal income class" | DOF DO 074-2024 schedule not reached |
| profile | barangay names | 14 names | CONFIRMED+2 | PSGC mirror; PhilAtlas table | |
| profile | Wikipedia 2024 barangay column | mislabelled 2015 data | CONFIRMED | see 5.1 | |
| profile | Households 2024 | 37,390 | CONFIRMED | Wikipedia "Households 37,390" | uncited on Wikipedia |
| profile | Households 2015 | 27,847; HH pop 118,515; 4.26 | CONFIRMED | PhilAtlas: "household population … 118,515 … 27,847 households … 4.26" | |
| profile | Density 2024 | 3,449/km² | CONFIRMED | Wikipedia "3,449/km2" | derived from 158,387/45.92 |
| profile | Density 2020 | 3,336/km² | CONFIRMED | PhilAtlas "3,336 / km2" | |
| profile | Growth 2015–2020 | 5.51% | CONFIRMED | PhilAtlas "annualized growth rate of 5.51%" | |
| profile | Population 2015 | 118,753 | CONFIRMED+2 | PhilAtlas; citypopulation.de | |
| profile | Share of Cebu province | 4.61% | CONFIRMED | PhilAtlas "4.61% of the total population of Cebu province" | |
| profile | Median age etc. | 25.41; dependency 52.88 (46.78/6.1) | CONFIRMED | PhilAtlas, verbatim | 2015 census |
| profile | Registered voters | 87,305 (2025); 72,620 (2019) | CONFIRMED | Wikipedia "87,305 voters (2025)"; PhilAtlas "2019 was 72,620" | COMELEC not checked |
| profile | Poverty incidence | 15.81% (2023) | CONFIRMED | Wikipedia "15.81" (2023) | PSA not checked |
| profile | Annual regular income FY2016 | ₱226,110,226.09 | CONFIRMED | PhilAtlas, verbatim | |
| profile | Wikipedia 2024 fiscal | ₱635M / ₱417.4M / ₱1,404M / ₱423.3M | CONFIRMED | Wikipedia infobox, verbatim | uncited |
| profile | "Most populous municipality" | Wikipedia claim | CONFIRMED (claim exists) | Wikipedia: "making it the most populated municipality in Cebu and the whole Visayas" | the fact itself unverified |
| profile | Classification | Municipality | CONFIRMED+2 | PhilAtlas "Type municipality"; CMCI profile | |
| profile | Senate Bill 1926 (cityhood) | exists, not enacted | UNREACHABLE | ldr.senate.gov.ph 403 | |
| profile | Congressional district | 5th District of Cebu | CONFIRMED+2 | Wikipedia district article lists Liloan; Freeman 2025-09-05 "Fifth District Representative Duke Frasco, whose jurisdiction includes Liloan" | |
| profile | Representative | Vincent Franco "Duke" Frasco (since 2019); 2025 re-election "not confirmed" | CONFIRMED+2 | Wikipedia: since June 30, 2019, "Re-elected in 2025" (217,303 votes, 62.01%); Freeman Sept 2025 calls him the Fifth District Rep | researcher's "not confirmed" caveat is outdated |
| profile | PSGC | 072227000 | CONFIRMED+2 | Wikipedia; PSGC mirror | |
| profile | ZIP | 6002 | CONFIRMED+2 | PhilAtlas "Postal code 6002"; Wikipedia "6002" | |
| profile | Area code | (032) | CONFIRMED | liloan.gov.ph/contact-us trunk lines "032-425-1388 …" | |
| profile | Languages | Cebuano | CONFIRMED | Wikipedia "Native language: Cebuano" | Wikipedia only |
| profile | Founding conflict | 1840s (LGU) / 23 Aug 1844 (Wiki body) / 1845 (Wiki infobox) | CONFIRMED | LGU: "established as an independent municipality in the 1840s"; Wiki: "officially on August 23, 1844"; infobox "Founded 1845" | Wikipedia's 1844 cite is a Scribd presentation |
| profile | Parish conflict | 1845 (LGU profile) / 27 Jan 1845 (Wiki) / 27 Jun 1847 (LGU tourist page) | CONFIRMED | profile: "establishment as a parish in 1845"; Wiki: "instated as a parish on January 27, 1845"; tourist page: "elevated on June 27, 1847", "Built in 1847" | SunStar 2023 "176th annual fiesta" fits 1847 |
| profile | Patron saint | San Fernando Rey | CONFIRMED+2 | LGU profile "under the patronage of San Fernando Rey"; SunStar 2023-05-26 "St. Ferdinand El Rey" | |
| profile | Festival | Rosquillos Festival, May | CONFIRMED+2 | LGU post (2026-08-04, no dates); SunStar 2023-05-26: "activities started last May 20 and will run until May 30", street dancing "Saturday, May 27, 2023" | |
| profile | 12th Rosquillos Festival, 2019-05-26 | CDN | UNREACHABLE | cebudailynews.inquirer.net/?p=235997 403 | |
| profile | Nickname | The Light of the North | CONFIRMED | LGU: "Liloan's moniker, "The Light of the North."" | |
| profile | Lighthouse | Spanish 1857, rebuilt early 1900s, 22 m, NHL 2004; tourist page 1904, ~72 ft, coral stone | CONFIRMED | profile: "Originally built by the Spanish in 1857 … reconstructed in the early 1900s … 22-meter-tall … National Historical Landmark in 2004"; tourist: "Built in 1904 under American colonial rule", "roughly 72 feet", "coral stone" | tourist page does not say "Bagacay Point" |
| profile | Parish church | Jan 1859–1880; "Año de 1847"; Fr. Vicente Dorocel | CONFIRMED | tourist page verbatim | |
| profile | Titay's Rosquillos | Doña Titay (Margarita Frasco), early 1900s; 1907 | CONFIRMED | profile "created by Doña Titay (Margarita Frasco) in the early 1900s"; festival post "Titay's in 1907" | |
| profile | Other landmarks | Bantayan sa Hari, Malingin Rock, Stone Ark, Suba Bridge, Silot Bay, Pap Kit's | CONFIRMED | tourist page: "Constructed circa 1857", "reduced … to its foundation", "Barangay Mulao", "Mulao River", "link between Barangay Poblacion and Barangay Catarman", "a hundred-hectare tidal lagoon"; profile: "Pap Kit's Marina and Fishing Lagoon" | Pap Kit's is on the profile page only |
| profile | Pier 88 | opened 27 May 2023 by Pres. Marcos | CONFIRMED | Wikipedia "officially inaugurated and opened to the public on May 27, 2023"; search results: PIA "grand launching of pier 88" (2023/05/27), Inquirer "Bongbong Marcos unveils P1B Pier 88" | corroboration seen in search listings only; PCO says operations from May 28 |
| profile | Delicacies | rosquillos, masi, lanang | CONFIRMED | LGU profile verbatim | |
| profile | Vision | paraphrase | CONFIRMED | exact: "Liloan aspires to be a premier, highly progressive, and livable first-class municipality—balancing rapid economic growth and urbanization as part of Metro Cebu with sustainable environmental stewardship, rich cultural preservation, and a high quality of life for all Liloanons." | use this wording |
| profile | Name origin | lilo = whirlpool, Silot Bay | CONFIRMED+2 | LGU: "derived its name from the Cebuano word "lilo," which refers to a whirlpool … mouth of Silot Bay"; Wikipedia agrees | |
| profile | Pre-independence | under Mandaue | CONFIRMED | LGU "a settlement under the jurisdiction of Mandaue" | |
| profile | Independence | 1840s | CONFIRMED | LGU | |
| profile | Parish 1845 (history) | 1845 | CONFIRMED | LGU profile | conflicts with LGU tourist page |
| profile | Later development | Spanish-American / WWII roles | CONFIRMED | LGU "crucial strategic roles during both the Spanish-American eras and World War II" | |
| profile | Boundary changes | Consolacion separated; Compostela merged, separated 1919 | CONFIRMED | Wikipedia "Consolacion separated from Liloan…"; "Compostela merged with Liloan from Danao and later separated in 1919" | uncited |
| profile | First capitan municipal | Capitan Banlitan / Basilio Bantilan 1845–1846 | CONFIRMED | Wikipedia, both spellings | uncited |
| profile | WWII | three mayors; Japanese shipwreck | CONFIRMED | Wikipedia "Lilo-an had three mayors at one time"; "a small Japanese Shipwreck was found … in Silot Bay" | uncited |
| profile | Executive assistant | Russel Cañete; mayor "Alfredo 'Aljew' Frasco" | CONFIRMED | SunStar 2023-05-26: "executive assistant"; "Alfredo "Aljew" Frasco" | |
| profile | Office locals / numbers | Treasurer 11, Assessor 114, Civil Registrar 115, Agriculture 113, MENRO 106, Business 112, Eng/OBO 032-503-3930, MSWD 0932-293-2853 | CONFIRMED | liloan.gov.ph/contact-us verbatim | no office hours on page |
| profile | Address | Poblacion, Liloan, Cebu, Philippines | CONFIRMED | contact-us: "Poblacion, Liloan, Cebu, Philippines" | |
| profile | 2020 CPH RSSO VII "Liloan Cebu 153,197" | PSA PDF | UNREACHABLE | psa.gov.ph 403 | value itself confirmed elsewhere |

### 5.3 cmci-fiscal.md

Sampled indicator values (picked by hand across pillars and years, since random tools are blocked on this machine): Distance to Ports 2019, Social Protection 2022, Cost of Living 2016, Budget for DRRMP 2021, Local Economy Growth 2020.

| file | field | claimed value | verdict | evidence (quote, URL) | notes |
|---|---|---|---|---|---|
| cmci | category | 1st to 2nd Class Municipalities; profile "First Class Municipality" | CONFIRMED | rankings page title "2024 Rankings of 1st to 2nd Class Municipalities" lists Liloan (CU); profile "Category: First Class Municipality" | |
| cmci | 2024 overall | 24th, 37.0244 | CONFIRMED | https://cmci.dti.gov.ph/rankings-data.php?unit=1st%20to%202nd%20Class%20Municipalities&year=2024: "24th", "37.0244"; profile "24th" | SunStar 2024-10-09 (sponsored content by the mayor): "moving from 46th to 24th place in the 2024 … CMCI" — agrees but not independent |
| cmci | 2024 pillars | ED 26/4.7327; GE 143/8.8745; Infra 285/2.3800; Res 4/13.9251; Innov 107/7.1121 | CONFIRMED | rankings table and profile give identical ranks and scores | DTI Cebu release (snippet) also gives Res 4th; page unreachable |
| cmci | 2023 overall | 46th, 36.8806 | CONFIRMED | rankings …&year=2023: "46th", "36.8806"; profile "46th" | |
| cmci | 2023 pillars | ED 31/4.8634; GE 176/9.3747; Infra 149/2.8753; Res 39/11.9333; Innov 42/7.8339 | CONFIRMED | rankings table and profile identical | profile pages do not print the selected year; the two readings agree, so the year parameter is honoured |
| cmci | 2022 overall | 31st (score not checked) | CONFIRMED (rank) | profile &year=2022 "31st" | incidental |
| cmci | 2021 overall | 60th (score not checked) | CONFIRMED (rank) | profile &year=2021 "60th" | incidental |
| cmci | 2020 overall | 19th (score not checked) | CONFIRMED (rank) | profile &year=2020 "19th" | incidental |
| cmci | 2019 overall | 22nd (score not checked); Res 1st/19.3297 | CONFIRMED (rank) | profile &year=2019 "22nd"; Resiliency "1st", "19.3297" | incidental |
| cmci | 2016 overall | 128th (score not checked) | CONFIRMED (rank) | profile &year=2016 "128th" | incidental |
| cmci | sample: Distance to Ports 2019 | 2.4554 | CONFIRMED | profile 2019: "2.4554" (rank 54th) | |
| cmci | sample: Social Protection 2022 | 0.0010 | CONFIRMED | profile 2022: "0.0010" | |
| cmci | sample: Cost of Living 2016 | 2.6667 | CONFIRMED | profile 2016: "2.6667" | |
| cmci | sample: Budget for DRRMP 2021 | 0.0215 | CONFIRMED | profile 2021: "0.0215" | |
| cmci | sample: Local Economy Growth 2020 | 0.3952 | CONFIRMED | profile 2020: "0.3952" | |
| cmci | corroboration 46th→24th | SunStar | CONFIRMED | https://www.sunstar.com.ph/cebu/aljew-frasco-files-coc-to-continue-progress-in-liloan (2024-10-09, "Sponsored Content") | campaign material |
| cmci | DTI Cebu 2024 award, 4th Resiliency | DTI release | UNREACHABLE | dti.gov.ph DNS failure; www.dti.gov.ph 404. Search snippet: Liloan "taking 4th place in Resiliency among 1st to 2nd …" | |
| cmci | source | CMCI | CONFIRMED | cmci.dti.gov.ph | |
| cmci | years | 2016–2024 available, site 2013–2024 | CONFIRMED | profile: "Ranking 2013-2024" | |
| cmci | municipality / province | Liloan / Cebu | CONFIRMED ×2 | CMCI rankings "Liloan (CU)", Cebu, Region VII | |
| cmci | income class | First Class Municipality | CONFIRMED+2 | CMCI 2024 profile; Wikipedia | |
| cmci | Revenue FY2024 | ₱635M | CONFIRMED | Wikipedia "₱ 635 million (2024)" | uncited |
| cmci | Expenditure FY2024 | ₱417.4M | CONFIRMED | Wikipedia "₱ 417.4 million (2024)" | uncited |
| cmci | Assets / liabilities FY2024 | ₱1,404M / ₱423.3M | CONFIRMED | Wikipedia verbatim | uncited |
| cmci | Revenue FY2022 | ₱641.4M | CONFIRMED | encycloreader mirror "₱641.4 million (2022)" | uncited |
| cmci | Expenditure FY2022 (+ assets/liabilities) | ₱560.6M (₱1,320M / ₱576.1M) | CONFIRMED | encycloreader verbatim | uncited |
| cmci | Annual regular income 2009–2016 | 8 values | CONFIRMED | PhilAtlas table, all 8 values identical | PhilAtlas cites BLGF |
| cmci | COA FY2022 unmodified opinion | 5th such | UNREACHABLE | rappler.com 403; search text quotes the mayor: "This has been the fifth year of unmodified opinion for Liloan" | ABS-CBN 2023-06-29 lechon headline seen in search list |
| cmci | SGLG 2022 | Liloan not among 4 Cebu awardees | CONFIRMED | SunStar 2022-10-27: "only the component cities of Talisay and Danao and the municipalities of San Remigio and Sogod made it to the list" | |
| cmci | SGLG 2023 | Liloan not among 9 | CONFIRMED | Tribune 2023-12-06: Bogo City + "Alegria, Borbon, Daanbantayan, Madridejos, Samboan, San Remigio, Sogod, and Tudela" | |
| cmci | SGLG 2024 | not in list; 14/15 names listed | MISMATCH (snippet level) | DILG Cebu annual report host has a TLS mismatch; my snippet of the same report: "Cities of Bogo and Danao, and Municipalities of Alegria, Asturias, Carmen, Consolacion, Cordova, Daanbantayan, Medellin, Pinamungajan, San Remigio, Santa Fe, Sogod, and Tuburan" (14) | Liloan absent in both readings; the research list (Madridejos, Balamban, Tudela; no San Remigio/Sogod) is wrong or from a different section |
| cmci | GFH CY2021 | passed | CONFIRMED | Freeman 2022-06-05: Liloan listed; "financial housekeeping for 2021" | |
| cmci | GFH CY2025 | passed (as of 2026-03-09) | CONFIRMED | cebu.gov.ph 2026-06-19: "Liloan, Madridejos, Malabuyoc"; "list of passers as of March 9, 2026"; "CY 2025 Good Financial Housekeeping (GFH) assessment" | official provincial site |
| cmci | LGU self-claim (GFH + child-friendly) | about-liloan page | UNREACHABLE | liloan.gov.ph/index.php/about-liloan 404 | |

### 5.4 dpwh-legislation.md

| file | field | claimed value | verdict | evidence (quote, URL) | notes |
|---|---|---|---|---|---|
| dpwh | DEO covering Liloan | Cebu 5th DEO | CONFIRMED+2 | DPWH news 27724 (2022-09-12): "DPWH Cebu 5th District Engineering Office"; 2013 Cebu 5th DEO certificate lists Liloan projects | |
| dpwh | RA 9218 | Fifth Engineering District incl. Liloan | CONFIRMED | lawphil: "the Fifth Engineering District shall comprise the City of Danao and the municipalities of Liloan, Compostela, …"; lapsed into law Aug 8, 2003 | |
| dpwh | 2013 certificate, HI prefix | 13HI0006 Liloan road concreting | CONFIRMED | PDF p.1: "2151174 … 13HI0006 - CLUSTER I – a)Road Concreting @ Brgy. San Vicente, Liloan, Cebu b) Road Concreting @ Brgy. San Roque, Liloan, Cebu c) Road Concreting @ Brgy. Poblacion, Compostela, Cebu … October 23, 2013 … Closed"; period "January 2013 up to December 2013" | |
| dpwh | RA 11991 caveat | repeals RA 9218, renumbers 1st–4th only | CONFIRMED | lawphil: approved "MAR 21 2024"; covers First–Fourth DEOs; "RA 9043 and RA 9218 … are hereby repealed" | |
| dpwh | Cebu 5th DEO head | DE Ma. Jannet B. Nero | CONFIRMED | DPWH Region VII directory: "DE MA. JANNET B. NERO", "Brgy. Poblacion, Danao City" | page undated |
| dpwh | Congressional district | 5th District of Cebu | CONFIRMED+2 | Freeman 2025-09-05 quote; Wikipedia | |
| dpwh | GMA: 5 projects, ₱398M | | CONFIRMED | GMA 2025-11-05: "Five flood control projects amounting to P398 million" | |
| dpwh | Freeman: 3 contracts, ₱395.8M | | CONFIRMED | Freeman: "a total of P395.8 million" | |
| dpwh | PCIJ: >₱1.5B, at least six | | CONFIRMED | PCIJ 2026-01-05: "over P1.5 billion" since 2020, "Liloan and Compostela", "at least six Cotcot River flood control projects" | |
| dpwh | Row 1: Cotcot upstream revetment, 476.781 lm, JV Alpha & Omega / MC Geometric, ₱149,549,060.00, signed 2024-04-01, 330 cd, completed 2025-03-10 | | CONFIRMED+2 | SunStar 2025-09-05: "476.781 linear meters", "April 1, 2024", "330 calendar days", "completed on March 10, 2025"; Bombo Radyo 2025-09-05 and MyTV 2025-09-05: "revised contract amount of P149.5 million"; Freeman: "P149, 549,060.00" | Freeman does not name the contractor for this contract; SunStar/Bombo/MyTV do |
| dpwh | Row 1 id | Freeman "24H00016" (unverified) | CONFIRMED (as printed) | Freeman: "Contract ID No. 24H00016" | not a valid DPWH ID format; a search result ties `24HI0016` to a different road project; do not publish |
| dpwh | Row 2: ₱149.8M, awarded 2025-03-10, same JV, upstream | | CONFIRMED (as printed) | Freeman: "awarded on March 10, 2025, to the joint venture of MC Geometric Proportions, Inc. and Alpha & Omega … P149.8 million", called "the second contract" | probable duplicate of Row 1: SunStar "Discaya-linked firm bags P149M" mentions no second contract; award date = Row 1 completion date |
| dpwh | Row 3: Cotcot downstream, JV MC Geometric / St. Matthew, ₱96.4M, awarded 2024-12-26 | | CONFIRMED | Freeman: "the third contract, amounting to P96.4 million, was awarded on December 26, 2024" | |
| dpwh | Row 3 id / length | 24HI0014, 620 m | UNREACHABLE | Rappler 403; search text: "Contract ID No. 24HI0014 covered 620 meters downstream of the Cotcot River" | |
| dpwh | Row 3 APP ABC | ₱100,000,000 | UNREACHABLE | APP PDF downloaded but not text-readable here | |
| dpwh | Row 4 | 24HI0018 San Vicente road, ABC ₱5M | UNREACHABLE | same APP PDF | |
| dpwh | Row 5 | Ka Paz Road, ABC ₱5M | UNREACHABLE | same APP PDF | |
| dpwh | Row 6 | Tabla FMR 562 m, ₱10M, completed | CONFIRMED | DPWH news 27724: "The 562-meter new concrete road", "₱10 million", "completed farm-to-market road (FMR) project", 2022-09-12 | |
| dpwh | Row 7 | 13HI0006 | CONFIRMED | see certificate row | |
| dpwh | Ord. 42-2026 | Pay As You Throw, ₱12 bags | CONFIRMED | Tribune (2026-09-08, dateline "LILOAN, Cebu"): "Ordinance 42-2026", "Pay As You Throw, Garbage Bag System", "P12 each" | |
| dpwh | 14th SB 2025-29 | Animal Bite Treatment Center | CONFIRMED | liloan.gov.ph: "14th SB Ordinance No 2025-29", posted 11 May 2026 | no enactment date |
| dpwh | 12th SB 202111 | Fuel regulation | CONFIRMED | "12th SB Ordinance No 202111 Regulation of Gasoline Stations and Selling of Gasoline and Petroleum", posted 14 April 2026 | |
| dpwh | 12th SB 202110 | Odette price freeze | CONFIRMED | "12th SB Ordinance No 202110 Declaring Price all essential commodities Typhoon Odette"; "Super Typhoon Odette on December 16, 2021" | |
| dpwh | 12th SB 2021-07 | Purok system | CONFIRMED | "12th SB Ordinance No 2021-07"; "Executive Order No. 2-21 … issued on January 25, 2021" | |
| dpwh | 12th SB 2021-01 | Truck ban, 2012-03/2012-06 conflict | CONFIRMED | "12th SB Ordinance No 2021-01"; description amends 2012-03 and repeals 2012-06, attachment label says amends 2012-06 | |
| dpwh | 10th SB 2016-06 | VAWC desk | UNREACHABLE | old liloan.gov.ph attachment URL 404 | |
| dpwh | 8th SB 2009-07 | Zoning, 2009-06-01 | CONFIRMED | SunStar letter (2017-09-07): "Ordinance No. 2009-07, dated June 1, 2009: An Ordinance Revising the Zoning Regulations of the Municipality of Liloan, Cebu…" | "8th SB" prefix is not in the source |
| dpwh | Ord. 93-06 | Zoning, 1993-12-13 | CONFIRMED | same letter: "Zoning Ordinance No. 93-06, dated Dec. 13, 1993" | |
| dpwh | Ord. 9 s.1982 | Zoning, 1982-12-12 | CONFIRMED | same letter: "Zoning Ordinance No. 9, Series of 1982, dated Dec. 12, 1982" | |
| dpwh | Proposed: lab test rates | hearing 2026-10-14 | CONFIRMED | Legislative listing, posted 13 October 2026, "October 14, 2026" | |
| dpwh | Proposed: liquor | posted 2026-10-12 | CONFIRMED | Legislative listing | |
| dpwh | Proposed: PBF sports complex fees | hearing 2026-10-06 2:00 PM | CONFIRMED | "October 6, 2026 (Tuesday), 2:00 PM, 2nd Floor Board Room" | |
| dpwh | Proposed: balaclavas | posted 2026-07-28 | CONFIRMED | Legislative listing | |
| dpwh | Res. 12th SB 2021-206 | State of calamity | CONFIRMED | "Resolution 12th SB No2021-206"; "Declaring Entire Liloan Under a State of Calamity" | |
| dpwh | Res. 8th SB 2010-025 | Adopted daughter | CONFIRMED | "8th SB No.2010-025", posted 15 February 2010 | |
| dpwh | Res. 2009-147 | CLUP, 2009-10-13 | CONFIRMED | SunStar letter: "Resolution No. 2009-147, dated Oct. 13, 2009" | |
| dpwh | Res. 170 | Land Use Plan, 1978-07-23 | CONFIRMED | "Sangguniang Bayan Resolution No. 170, dated July 23, 1978" | |
| dpwh | Cebu SP Res. 1726-2011 | CLUP approval, 2011-11-16 | CONFIRMED | "Cebu Sangguniang Panlalawigan Resolution No. 1726-2011, dated Nov. 16, 2011 … planning period 2009-1018" | |
