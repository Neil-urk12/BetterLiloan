Retrieved 2026-11-02. UNVERIFIED, for human review. Liloan, **Cebu** only (not Liloan, Southern Leyte).

# Liloan, Cebu: profile, demographics, history, department heads

Confidence: **high** = liloan.gov.ph; **med** = national source (PSA, DILG, BLGF) or PhilAtlas, which republishes PSA tables; **low** = Wikipedia, news, or other third-party sources.

Access notes: every psa.gov.ph and rsso07.psa.gov.ph URL tried returned **HTTP 403** (blocked). Facebook (facebook.com/municipalityliloancebu) returned only the page title (login wall, blocked). barangaydirectory.com returned **HTTP 503**. So the 2024 POPCEN figure could not be checked against PSA directly.

## 1. `public/data/demographics.json` keys

| field | value | source URL | source date / "as of" | confidence | notes |
| --- | --- | --- | --- | --- | --- |
| `_source` | Philippine Statistics Authority (PSA) | — | — | — | Keep. The PSA tables themselves were blocked (403), so values below come through PhilAtlas and Wikipedia. |
| `_note` | (replace Solano text) | — | — | — | Current text says "LGU Solano planning office". |
| `municipality` | Liloan | https://www.philatlas.com/visayas/r07/cebu/liloan.html | retrieved 2026-11-02 | high | Same on liloan.gov.ph. |
| `province` | Cebu | PhilAtlas (above) | retrieved 2026-11-02 | high | |
| `region` | Region VII - Central Visayas | PhilAtlas (above); https://en.wikipedia.org/wiki/Liloan | retrieved 2026-11-02 | med | Written in the same format as Solano's value. Cebu stayed in Region VII after Negros Oriental and Siquijor moved to the Negros Island Region (2024). |
| `population.total` (2024 POPCEN) | **158,387** | https://en.wikipedia.org/wiki/Liloan (cites PSA, "2024 Census of Population (POPCEN) Population Counts Declared Official by the President", 2025-07-17, https://psa.gov.ph/content/2024-census-population-popcen-population-counts-declared-official-president) | census ref. 2024; PSA release 2025-07-17 | low | **The PSA page returned 403**, so the figure is not verified against the primary source. barangaydirectory.com showed the same figure in search snippets (the page itself returned 503). PhilAtlas has no 2024 figure yet. |
| `population.total` (2024, other candidate) | 145,234 | https://citypopulation.de/en/philippines/cities/visayas/?cityid=25057 | census 2024-07-01 | low | **Not the municipal total.** citypopulation.de says this is its own "urban area" figure (contiguous high-density barangays). Listed only so nobody copies it by mistake. |
| `population.total` (2020 CPH) | 153,197 | PhilAtlas (above); Wikipedia | census 2020-05-01 | med | PSA RSSO VII 2020 CPH press release (https://psa.gov.ph/system/files/phcd/2022-12/10_Press%2520Release_2020%2520CPH_RSSO%2520VII_signed.pdf) returned 403. A search snippet shows it lists "Liloan Cebu 153,197". |
| `population.year` | 2024 (if 158,387 is used) / 2020 (if 153,197) | — | — | — | Use 2020 if only a PSA-verified number may go on the site. |
| `population.source` | "PSA 2024 POPCEN" / "PSA 2020 CPH" | — | — | — | Pick the label that matches the figure. |
| `land_area_km2` | 45.92 | PhilAtlas (labels it "Area (2013)"); Wikipedia | retrieved 2026-11-02 | med | Both sources agree. liloan.gov.ph publishes no land area. |
| `barangay_count` | 14 | PhilAtlas; Wikipedia | retrieved 2026-11-02 | med | Both agree. |
| `income_class` | 1st | https://en.wikipedia.org/wiki/Liloan ; barangaydirectory.com search snippet ("classified as a 1st by the Bureau of Local Government Finance") | Wikipedia retrieved 2026-11-02 | low | Not checked against the official DOF Department Order No. 074-2024 schedule (the RA 11964 reclassification, effective 2025-01). The wageindicator.org copy of DO 074-2024 returned 404, and the BLGF site was not reached. |
| `barangays[]` (names) | Cabadiangan, Calero, Catarman, Cotcot, Jubay, Lataban, Mulao, Poblacion, San Roque, San Vicente, Santa Cruz, Tabla, Tayud, Yati | Wikipedia; PhilAtlas barangay pages (e.g. https://www.philatlas.com/visayas/r07/cebu/liloan/poblacion.html) | retrieved 2026-11-02 | med | |
| `barangays[]` (2024 populations) | NOT FOUND (reliable) | Wikipedia | — | — | Wikipedia's "2024" barangay column sums to 118,753, which is the **2015** total, so it is mislabelled. A barangaydirectory snippet gives Yati = 37,082 (2024 POPCEN), but Wikipedia lists Yati as 27,367. Do not use either until PSA is checked. |

### Extra demographic fields (not in the JSON yet, may suit the statistics page)

| field | value | source URL | source date / "as of" | confidence | notes |
| --- | --- | --- | --- | --- | --- |
| Households (2024) | 37,390 | https://en.wikipedia.org/wiki/Liloan | retrieved 2026-11-02 | low | Uncited in the infobox. |
| Households (2015) | 27,847; household population 118,515; avg. size 4.26 | PhilAtlas | census 2015-08-01 | med | PhilAtlas has no 2020 household figure. |
| Density | 3,449/km² (2024) | Wikipedia | retrieved 2026-11-02 | low | Equals 158,387 / 45.92, so it depends on the unverified 2024 figure. |
| Density | 3,336/km² (2020) | PhilAtlas | census 2020 | med | |
| Growth rate | 5.51% per year, 2015–2020 | PhilAtlas | census 2020 | med | No 2020–2024 rate found from any source. |
| Population 2015 | 118,753 | PhilAtlas; Wikipedia | census 2015-08-01 | med | |
| Share of Cebu province | 4.61% (2020) | PhilAtlas | census 2020 | med | |
| Median age | 25.41 (2015) | PhilAtlas | census 2015 | med | Dependency ratio 52.88 (youth 46.78, old age 6.1). |
| Registered voters | 87,305 (2025) | Wikipedia | retrieved 2026-11-02 | low | PhilAtlas: 72,620 (2019, COMELEC). |
| Poverty incidence | 15.81% (2023) | Wikipedia (cites PSA) | retrieved 2026-11-02 | low | |
| Annual regular income | ₱226,110,226.09 (FY2016) | PhilAtlas | FY2016 | med | Out of date. Wikipedia lists 2024 revenue ₱635 million, expenditure ₱417.4 million, assets ₱1,404 million, liabilities ₱423.3 million (low). The statistics page's "IRA share / IRA dependency" values were not found for Liloan. |
| "Most populous municipality in Cebu / Visayas" | claim on Wikipedia | Wikipedia | — | low | Unverified. Do not use without PSA tables. |

## 2. Basic profile

| field | value | source URL | source date / "as of" | confidence | notes |
| --- | --- | --- | --- | --- | --- |
| Classification | Municipality | PhilAtlas | retrieved 2026-11-02 | med | Senate bill (Sen. Imee Marcos) proposes converting it into a component city (https://ldr.senate.gov.ph/bills/senate-bill-no-1926-19th-congress). No evidence it was enacted. |
| Income class | 1st | see §1 | — | low | |
| Province / region | Cebu / Region VII (Central Visayas) | PhilAtlas | retrieved 2026-11-02 | med | |
| Congressional district | 5th District of Cebu | https://en.wikipedia.org/wiki/Liloan ; https://en.wikipedia.org/wiki/Cebu%27s_5th_congressional_district | retrieved 2026-11-02 | low | District: Danao City, Borbon, Carmen, Catmon, Compostela, Liloan, Pilar, Poro, San Francisco, Sogod, Tudela. Rep. per Wikipedia: Vincent Franco "Duke" Frasco (since 2019). His 2025 re-election was not confirmed. |
| PSGC | 072227000 | Wikipedia | retrieved 2026-11-02 | low | The PSA PSGC page returned 403. |
| ZIP | 6002 | PhilAtlas; Wikipedia | retrieved 2026-11-02 | med | |
| Area code | (032) | liloan.gov.ph/contact-us trunk lines | retrieved 2026-11-02 | high | |
| Languages spoken | Cebuano | Wikipedia ("native language", uncited) | retrieved 2026-11-02 | low | No other source found. liloan.gov.ph does not say. |
| Founding / establishment | **Conflict:** "1840s" (LGU); 23 August 1844 (Wikipedia body); 1845 (Wikipedia infobox) | https://liloan.gov.ph/municipal-profile-liloan-cebu/ ; Wikipedia | LGU page undated (images 2026/04, 2026/08) | high (LGU) / low (Wiki) | LGU: became "an independent municipality in the 1840s" (separated from Mandaue). Wikipedia's 1844 date cites a user-uploaded Scribd presentation. |
| Parish established | **Conflict:** 1845 (LGU profile); 27 Jan 1845 (Wikipedia, uncited); 27 June 1847 (LGU tourist page) | https://liloan.gov.ph/municipal-profile-liloan-cebu/ ; https://liloan.gov.ph/tourist-destinations/ ; Wikipedia | retrieved 2026-11-02 | high / high / low | The two LGU pages disagree with each other. |
| Patron saint | San Fernando Rey (St. Ferdinand III) | LGU profile; https://www.sunstar.com.ph/cebu/local-news/all-set-for-liloans-rosquillos-festival | SunStar 2023-05-26 | high | The parish is "San Fernando Rey Parish" (profile) / "San Fernando El Rey Parish" (tourist page). |
| Fiesta date | NOT FOUND (exact day) | — | — | — | SunStar 2023: festivities 20–30 May 2023, street dancing 27 May 2023, "the town's 176th annual fiesta celebration". The fixed fiesta day was not found on liloan.gov.ph. |
| Festival | Rosquillos Festival (annual, May, honoring the patron) | https://liloan.gov.ph/the-ultimate-rosquillos-festival-experience/ (2026-08-04, no dates given); SunStar (above) | 2023-05-26 | high (exists) / med (May) | The 12th edition was 26 May 2019 per Cebu Daily News (https://cebudailynews.inquirer.net/?p=235997, not opened, search snippet only). |
| Nickname | "The Light of the North" | LGU profile | undated | high | Named after the Bagacay Point lighthouse. |
| Landmark: Bagacay Point Lighthouse ("Parola") | Built by the Spanish in 1857, rebuilt in the early 1900s under American rule, 22 m, National Historical Landmark 2004 | LGU profile | undated | high | LGU tourist page: "Built in 1904", about 72 ft, coral stone. Wikipedia: present tower 1904. |
| Landmark: San Fernando Rey Parish Church | Stone church, construction began January 1859, completed 1880; pilaster inscribed "Año de 1847"; first parish priest Fr. Vicente Dorocel | https://liloan.gov.ph/tourist-destinations/ | retrieved 2026-11-02 | high | The same page also says "Built in 1847", which conflicts. |
| Landmark: Titay's Rosquillos | Rosquillos created by Doña Titay (Margarita Frasco), early 1900s; "1907" (LGU festival post) | LGU profile; https://liloan.gov.ph/the-ultimate-rosquillos-festival-experience/ | 2026-08-04 | high | |
| Other landmarks | Bantayan sa Hari watchtower (c. 1857, foundation only), Malingin Rock (Brgy. Mulao), Stone Ark (Mulao River), Suba Bridge (Poblacion–Catarman), Silot Bay (~100 ha tidal lagoon), Pap Kit's Marina and Fishing Lagoon | https://liloan.gov.ph/tourist-destinations/ ; LGU profile | retrieved 2026-11-02 | high | |
| Pier 88 | Maritime terminal opened 27 May 2023 by Pres. Marcos | Wikipedia | retrieved 2026-11-02 | low | |
| Local delicacies | Rosquillos, masi, lanang | LGU profile | undated | high | |
| Vision | "progressive, livable first-class municipality in Metro Cebu" that balances growth, environment and culture | LGU profile | undated | high | Paraphrased by the fetch tool. Get the exact wording from the page before quoting it. |

## 3. History (short, sourced)

| field | value | source URL | source date / "as of" | confidence | notes |
| --- | --- | --- | --- | --- | --- |
| Name origin | From Cebuano *lilo* ("whirlpool"), which forms at the mouth of Silot Bay where tidal currents meet | https://liloan.gov.ph/municipal-profile-liloan-cebu/ | undated | high | Wikipedia agrees ("a place where there is a lilo"). |
| Pre-independence | Under Mandaue's jurisdiction | LGU profile | undated | high | |
| Independence | Became an independent municipality in the 1840s | LGU profile | undated | high | Wikipedia gives 23 Aug 1844 (low, see §2). |
| Parish | Made a parish in 1845 under San Fernando Rey | LGU profile | undated | high | Conflicts with the LGU tourist page (27 June 1847). |
| Later development | Grew from a coastal settlement into a suburban community, with strategic roles in the Spanish-American and World War II eras | LGU profile | undated | high | The page gives no further detail. |
| Lighthouse | Spanish-built 1857, rebuilt early 1900s, National Historical Landmark 2004 | LGU profile | undated | high | |
| Boundary changes | Consolacion separated from Liloan; Compostela was merged with Liloan, then separated again (Wikipedia says 1919) | Wikipedia | retrieved 2026-11-02 | low | Uncited on Wikipedia. |
| First capitan municipal | "Capitan Banlitan" (history text) / Basilio Bantilan, 1845–1846 (mayor list) | Wikipedia | retrieved 2026-11-02 | low | Same article, two spellings, both uncited. |
| WWII | Three mayors at one time during the war; Japanese shipwreck in Silot Bay | Wikipedia | retrieved 2026-11-02 | low | Uncited or informally sourced. |

Suggested summary (LGU-sourced facts only): *Liloan takes its name from the Cebuano "lilo", the whirlpool at the mouth of Silot Bay. Once part of Mandaue, it became an independent municipality in the 1840s, and its parish under San Fernando Rey was established in 1845. The Spanish-built Bagacay Point Lighthouse (1857, rebuilt in the early 1900s) was declared a National Historical Landmark in 2004 and gives the town its nickname, "The Light of the North."* Source: liloan.gov.ph/municipal-profile-liloan-cebu/.

## 4. Department heads

No source found names any appointed department head. liloan.gov.ph has no directory, organisation chart or citizen's charter. The contact page lists offices and local numbers only, and the Bids and Awards Committee page names no one.

| field | value | source URL | source date / "as of" | confidence | notes |
| --- | --- | --- | --- | --- | --- |
| Municipal Administrator | NOT FOUND | — | — | — | Looked: liloan.gov.ph (home, contact, BAC, full disclosure, latest news), web search, Senate city-conversion bill (lists posts only). |
| Municipal Treasurer | NOT FOUND | — | — | — | Office exists. Contact page lists "Treasurer: 11" (probably a truncated local). |
| Municipal Assessor | NOT FOUND | — | — | — | Office exists (local 114). |
| Municipal Accountant | NOT FOUND | — | — | — | |
| Municipal Budget Officer | NOT FOUND | — | — | — | |
| MPDC | NOT FOUND | — | — | — | |
| Municipal Engineer | NOT FOUND | — | — | — | Engineering/OBO: 032-503-3930. |
| Municipal Health Officer | NOT FOUND | — | — | — | "Liloan Municipal Health Office" exists (proposed lab-rates ordinance on liloan.gov.ph). |
| MSWDO | NOT FOUND | — | — | — | MSWD: 0932-293-2853. |
| MDRRMO | NOT FOUND | — | — | — | SunStar typhoon/flood stories mention the office but not its head. |
| HRMO | NOT FOUND | — | — | — | |
| GSO | NOT FOUND | — | — | — | |
| Municipal Civil Registrar | NOT FOUND | — | — | — | Office exists (local 115). |
| Municipal Agriculturist | NOT FOUND | — | — | — | Office exists (local 113). |
| MENRO | NOT FOUND | — | — | — | Office exists (local 106). |
| BPLO head | NOT FOUND | — | — | — | "Business" local 112. |
| (aside) Executive assistant to the mayor | Russel Cañete | https://www.sunstar.com.ph/cebu/local-news/all-set-for-liloans-rosquillos-festival | 2023-05-26 | low | Not a department head, and 3+ years old. The same article calls the mayor "Alfredo 'Aljew' Frasco", but liloan.gov.ph says "Aljew Fernando J. Frasco". |

Office local numbers come from https://liloan.gov.ph/contact-us/ (retrieved 2026-11-02, high). The best next step is the LGU Facebook page (login wall) or a direct request to the HRMO.

## 5. Municipal hall office hours

| field | value | source URL | source date / "as of" | confidence | notes |
| --- | --- | --- | --- | --- | --- |
| Office hours | NOT FOUND | — | — | — | Looked: liloan.gov.ph home, contact-us, full-disclosure, liloan-map, web search. The only time on the site is an event time ("9 AM TO 5 PM \| PBF GYM", scholarship requirements). Do not assume the Solano hours or a generic 8–5. |
| Address | Poblacion, Liloan, Cebu, Philippines | https://liloan.gov.ph/contact-us/ | retrieved 2026-11-02 | high | No street address published. |

## Sources checked (nothing usable)

- https://psa.gov.ph/content/2024-census-population-popcen-population-counts-declared-official-president: **blocked (403)**
- https://psa.gov.ph/statistics/population-and-housing/node/57233: **blocked (403)**
- https://psa.gov.ph/system/files/phcd/2022-12/10_Press%2520Release_2020%2520CPH_RSSO%2520VII_signed.pdf: **blocked (403)**
- https://psa.gov.ph/classification/psgc/citimuni/0702200000: **blocked (403)**
- https://rsso07.psa.gov.ph/node/1684057185: **blocked (403)**
- https://www.facebook.com/municipalityliloancebu: **blocked (login wall, title only)**
- https://www.barangaydirectory.com/city/liloan and /barangay/liloan/yati: **503**
- https://cebudailynews.inquirer.net/?p=292167: **403**
- https://wageindicator.org/documents/do_074-2024-with-table.pdf (DOF DO 074-2024 income class schedule): **404**
- https://cmci.dti.gov.ph/lgu-profile.php?lgu=Liloan%20(Cebu): all profile fields blank
- https://www.citypopulation.de/en/philippines/admin/cebu/: empty response
- https://liloan.gov.ph/bids-and-awards-committee/: no names
- https://liloan.gov.ph/full-disclosure/: links only, no names
- https://liloan.gov.ph/liloan-map/: no data
- https://liloan.gov.ph/category/liveloveliloan/tourism-heritage/: no fiesta date
- https://liloan.gov.ph/category/latest_news/: only elected officials named (mayor, vice mayor, councilors)
- Web searches for Liloan department heads (administrator, MDRRMO, MSWDO, MHO, treasurer, MPDC, agriculturist, assessor, accountant, budget, civil registrar): no Liloan-Cebu results
- Web search for municipal hall office hours: nothing for Liloan
