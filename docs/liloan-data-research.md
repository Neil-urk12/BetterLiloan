# Liloan, Cebu: research findings (UNVERIFIED, for human review)

Research for `docs/handoff-liloan-data.md`. Retrieved **2026-11-01**. **No site files were changed.** A person must verify every row before any of it goes onto the site.

Confidence: **high** = official LGU site (liloan.gov.ph); **med** = national source, or a news/third-party source that matches the LGU site; **low** = third-party/unconfirmed.

Notes on liloan.gov.ph:
- Its pages show no publish or update date. The "as of" values below are upload-folder dates from the image URLs (e.g. `/uploads/2026/07/`) or the retrieval date.
- It sits behind an Azure gateway that returns 403 to plain `curl`. A browser user agent over HTTP/1.1 works.

> ⚠️ **Barangay and SK elections are scheduled for 2026-11-02 (tomorrow).** The two ex-officio SB seats (Liga/LNMB president, SK Federation president) will probably change soon afterward. Check them again after the new Liga and SK federation officers are elected.

## 0. Official web presence

| field | value | source URL | source date / "as of" | confidence | notes |
|---|---|---|---|---|---|
| Official website | https://liloan.gov.ph | https://liloan.gov.ph | retrieved 2026-11-01 | high | Gov't Web Template (GWT) WordPress site. Newest post dated 2026-10-14. Wikipedia mirror also lists `www.liloan.gov.ph`. |
| Official Facebook page | https://www.facebook.com/liloan.lgu (page name "Lgu Liloan") | search result only (could not open; Facebook requires login) | retrieved 2026-11-01 | **low** | **Not confirmed as the Cebu LGU's page.** liloan.gov.ph has no Facebook link anywhere (checked the home, contact, hotline, SB, mayor, profile and map pages). Do **not** use `facebook.com/mdrrmoliloan.SL` (Liloan, **Southern Leyte**) or `facebook.com/LiloanCebuPhilippines` (personal blog). Have a person confirm the page. |
| Official YouTube (embedded) | https://www.youtube.com/embed/7B2-KyEer7Y | https://liloan.gov.ph | retrieved 2026-11-01 | med | Only a video embed on the homepage. The channel URL was not determined. |

## 1. Officials → `data/officials.json` (term 2025–2028, "14th Sangguniang Bayan")

The LGU's 14th SB page matches the top 8 councilor finishers in the Rappler/COMELEC partial results (100% of precincts reporting). The 14th SB is therefore the 2025–2028 term. Note that Darwin T. Apas was **vice mayor in the 13th SB** (2022–2025) and is a **councilor** now.

| field | value | source URL | source date / "as of" | confidence | notes |
|---|---|---|---|---|---|
| mayor | Hon. Aljew Fernando J. Frasco (full: Aljew Fernando Jordan Frasco) | https://liloan.gov.ph/mayor-aljew-fernando-j-frasco/ ; https://ph.rappler.com/elections/2025/local-race/cebu/liloan | LGU page retrieved 2026-11-01; Rappler as of 2025-05-15 14:41 | high | Won 2025 (1CEBU): 56,333 votes (64.52%). Photo: https://liloan.gov.ph/wp-content/uploads/2026/04/MAYOR-ALJEW-for-printing-A-WITH-NAME-small.jpg |
| vice_mayor | Hon. Margarita D. Frasco ("Margo") | https://liloan.gov.ph/14th-sangguniang-bayan-members/ ; Rappler (above) | as above | high | Ran unopposed per Rappler, 56,128 votes (1CEBU). Photo: https://liloan.gov.ph/wp-content/uploads/2026/04/MARGO.jpg |
| councilor | Hon. Darwin T. Apas | 14th SB page; Rappler | as above | high | Rank 1, 54,534 votes. Photo: …/2026/04/DARWIN.jpg |
| councilor | Hon. Edna M. Cala | 14th SB page; Rappler | as above | high | Rank 5, 38,388. Photo: …/2026/04/CALA.jpg |
| councilor | Hon. Cedric Y. Cañete | 14th SB page; Rappler | as above | high | Rank 3, 40,113. Photo: …/2026/04/cedric2.png |
| councilor | Hon. Thelma L. Jordan | 14th SB page; Rappler | as above | high | Rank 4, 39,889. Photo: …/2026/04/THELMA2.jpg |
| councilor | Hon. Katherine D. Jumapao | 14th SB page; Rappler ("Kath") | as above | high | Rank 2, 45,351. Photo: …/2026/04/KATH2.jpg |
| councilor | Hon. Nelly Bernardo L. Lopez | 14th SB page; Rappler ("Bernard") | as above | high | Rank 8, 34,663. Photo: …/2026/04/BERNARD.jpg |
| councilor | Hon. Richard C. Pendo | 14th SB page; Rappler | as above | high | Rank 6, 37,712. Photo: …/2026/04/pendo2.jpg |
| councilor | Hon. Lucelito B. Pilapil | 14th SB page; Rappler ("Lucelito") | as above | high | Rank 7, 36,278. Photo: …/2026/04/LITO2.jpg |
| ex-officio: Liga/ABC (LNMB) president | Hon. Gloria A. Sanchez | 14th SB page | retrieved 2026-11-01 | high (until BSKE) | Listed as "LNMB President". Also listed in the 13th SB. **Likely to change after the 2026-11-02 barangay elections.** Photo: …/2026/04/Gloria2-1.jpg |
| ex-officio: SK Federation (PPSK) president | Hon. Raymund Kit B. Comendador | 14th SB page | retrieved 2026-11-01 | med | The page shows "Raymund Kit B. Comendador – PPSK". The 13th SB page lists "Kent Anthon D. Bihag, PPSK President", but its image set includes `KIT.png`, so the LGU pages are internally inconsistent. The 14th SB page uses `comendador.jpg`. **Likely to change after the 2026-11-02 SK elections.** |
| (conflict) councilor list on Wikipedia | Cesar R. Cañete Jr., Francisco C. Comendador III instead of Cedric Cañete, Richard Pendo, Darwin Apas | https://en.wikipedia.org/wiki/Liloan | page edited 2026-10-08 | low | The Wikipedia infobox mixes in the **13th SB (2022–2025)** members. Do not use it. |

Photo base URL: `https://liloan.gov.ph/wp-content/uploads/2026/04/`. COMELEC's own certified canvass was not checked; Rappler is "partial, unofficial" COMELEC media-server data.

## 2. Emergency hotlines → hotline bar (~52 pages)

Main source: the LGU hotline poster at https://liloan.gov.ph/wp-content/uploads/2026/07/HOTLINES1.jpg (embedded on https://liloan.gov.ph/emergency-hotline-numbers/). I read the numbers from the image directly.

| field | value | source URL | source date / "as of" | confidence | notes |
|---|---|---|---|---|---|
| PNP Liloan (Police 24/7) | 0998-598-6385 / 0998-967-3845 | LGU poster (above) | upload 2026-07 | high | Matches the "E-Reklamo sa Pulis Liloan" listing (https://www.govserv.org/PH/Liloan/297057240486288/E-Reklamo-sa-Pulis-Liloan). |
| PNP Liloan landline (alternative) | 343-4876 (no area code given; probably (032) 343-4876) | https://www.govserv.org/PH/Liloan/297057240486288/E-Reklamo-sa-Pulis-Liloan | undated | low | Third-party mirror of the station's FB page. Not on the LGU poster. |
| BFP Liloan (Fire 24/7) | 0905-350-3109 | LGU poster | upload 2026-07 | high | Not found on any BFP/BFP-7 source. Searched: BFP Liloan Fire Station contact, BFP R7. |
| MDRRMO / rescue | 0956-271-1967 / 0919-330-7442 | LGU poster | upload 2026-07 | high (number) / med (label) | The poster labels it "AMBULANCE – FLOODS, EMERGENCY 24/7 HOTLINE". It does **not** say "MDRRMO", so the office this goes to is inferred. Confirm with the LGU. |
| MSWDO | 0932-293-2853 | https://liloan.gov.ph/contact-us/ ("MSWD – 09322932853") | retrieved 2026-11-01 | high | |
| Nearest government hospital / emergency | NOT FOUND | — | — | — | Looked: liloan.gov.ph, DOH/provincial search, news. RA 11886 (2022) created the **Liloan Children's Hospital** under the Province of Cebu (https://lawphil.net/statutes/repacts/ra2022/ra_11886_2022.html), but I found no operating status or phone number. National 911 is an option but I did not confirm local routing. Cebu PDRRMO: (032) 888-2300 per SunStar (https://www.sunstar.com.ph/cebu/local-news/always-call-rescue-hotlines-in-calamities), undated, low. |
| LGU trunk lines | 032-425-1388 / 032-413-5400 / 032-260-8328 / 032-263-5451 | https://liloan.gov.ph/contact-us/ | retrieved 2026-11-01 | high | Written on the site as "032-4135400". |
| Traffic (extra) | 032-349-7573 | LGU poster | upload 2026-07 | high | Not in the current bar. Optional. |
| Garbage collection & drainage flooding (extra) | 0933-475-7911 / 0997-371-3316 | LGU poster | upload 2026-07 | high | Not in the current bar. Optional. |
| DILG (Solano slot) | NOT FOUND | — | — | — | No Liloan DILG MLGOO number found. Looked: liloan.gov.ph, web search. |

## 3. Office contact details

liloan.gov.ph publishes **no per-office emails and no floor/building locations**. The only published email is the general address. Locals are extensions of the trunk lines. The site doesn't say which trunk line they belong to.

| field | value | source URL | source date / "as of" | confidence | notes |
|---|---|---|---|---|---|
| Mayor's Office | local 102; direct 032-564-3131 ("Mayor") | https://liloan.gov.ph/contact-us/ | retrieved 2026-11-01 | high | Email/location NOT FOUND |
| Vice Mayor / SB | NOT FOUND | — | — | — | Looked: contact page, SB pages |
| Accounting | NOT FOUND | — | — | — | Looked: contact page |
| Agriculture | local 113 | contact page | retrieved 2026-11-01 | high | Email/location NOT FOUND |
| Assessor | local 114 | contact page | retrieved 2026-11-01 | high | Email/location NOT FOUND |
| BPLO (business permits) | local 112 ("Business") | contact page | retrieved 2026-11-01 | high (number) / med (that "Business" = BPLO) | Email/location NOT FOUND |
| Budget | NOT FOUND | — | — | — | Looked: contact page |
| Civil Registrar | local 115 | contact page | retrieved 2026-11-01 | high | Email/location NOT FOUND |
| Engineering (incl. OBO) | 032-503-3930 | contact page ("Engineering/OBO") | retrieved 2026-11-01 | high | Email/location NOT FOUND |
| GSO | NOT FOUND | — | — | — | Looked: contact page |
| HRMO | NOT FOUND | — | — | — | Looked: contact page |
| MDRRMO | see §2 ambulance/floods line | LGU poster | upload 2026-07 | med | No office line found |
| Municipal Health Office / RHU | NOT FOUND | — | — | — | The site mentions an MHO clinical lab ordinance but gives no contact |
| MPDO (planning) | NOT FOUND | — | — | — | Looked: contact page |
| MSWDO | 0932-293-2853 | contact page | retrieved 2026-11-01 | high | Email/location NOT FOUND |
| Treasurer | local "11" (as printed) | contact page | retrieved 2026-11-01 | **low** | The page literally says "Treasurer – 11". Probably a truncated 3-digit local (11x). Confirm with the LGU. |
| MENRO (extra) | local 106 | contact page | retrieved 2026-11-01 | high | Not in the Solano list |
| COMELEC Liloan (extra) | 032-424-1376 | contact page | retrieved 2026-11-01 | high | |
| Municipal hall address | Poblacion, Liloan, Cebu, Philippines | contact page | retrieved 2026-11-01 | high | No street address published |
| Postal code | 6002 | https://www.philatlas.com/visayas/r07/cebu/liloan.html ; Wikipedia | retrieved 2026-11-01 | med | Both sources agree |
| Municipal hall lat/long | NOT FOUND | — | — | — | Only **town-center** points were found. Do not label them as the hall. Candidates: 10.398479, 123.996555 (LGU contact-page map embed, pin "Liloan, Cebu"); 10.39954, 123.99993 (LGU /liloan-map/ embed center); 10.4002, 123.9993 (PhilAtlas "municipal center"); 10.41111, 123.98222 (Wikipedia). |
| Office hours | NOT FOUND | — | — | — | Looked: home, contact, hotline pages |
| LGU general email | liveloveliloan@liloan.gov.ph | contact page | retrieved 2026-11-01 | high | |
| Area code | (032) | Wikipedia; trunk lines | — | high | |

## Other sources checked (nothing usable)

- https://liloan.gov.ph/municipal-profile-liloan-cebu/ (history only)
- https://liloan.gov.ph/sangguniang-bayan-members/ (index of terms)
- Facebook search (login wall)
- BFP/PNP regional search results (Cebu City numbers only, not applicable)
