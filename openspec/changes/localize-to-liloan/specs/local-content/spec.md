## ADDED Requirements

### Requirement: No Solano references
No deployed file under `public/` SHALL contain the strings `solano`, `nueva vizcaya`, `nuevavizcaya` or `bettersolano` (case-insensitive), and no deployed file SHALL contain Solano data stored without those strings (for example the CMCI series in `statistics-new.js`). An automated check SHALL enforce the string rule.

#### Scenario: Leftover Solano string
- **WHEN** any file under `public/` contains `Solano` (any case)
- **THEN** the leftover-reference check fails and names the file and line

#### Scenario: Clean tree
- **WHEN** the check runs on a tree with no Solano references
- **THEN** it passes

### Requirement: Verified sources only
Every Liloan-specific fact on the site (name, phone number, email, address, figure, date, ranking) SHALL come from `docs/liloan-data-research.md` (human-verified rows) or the "Safe to publish" list in `docs/liloan-research-2/verification.md`. A fact with no such source SHALL NOT be published, even with a disclaimer.

#### Scenario: Fact with a verified source
- **WHEN** a value appears in a verified source, e.g. the Liloan police hotline 0998-598-6385
- **THEN** the site may show it

#### Scenario: Fact without a verified source
- **WHEN** no verified source has a value, e.g. a barangay captain's name or a department head
- **THEN** the site shows the standard placeholder instead of a guessed or unverified value

### Requirement: Standard placeholder
Content with no verified Liloan source SHALL be replaced by one standard placeholder: the text "Information coming soon" (translated through `translations.js`) and a link to https://liloan.gov.ph. Pages and sections that become placeholders SHALL stay reachable (no broken navigation links).

#### Scenario: Data page with no verified data
- **WHEN** a visitor opens the fiscal transparency, DPWH projects, ordinances or resolutions view
- **THEN** they see the placeholder text and the liloan.gov.ph link, not Solano data and not an empty table

#### Scenario: Missing office email
- **WHEN** an office has no published email (all offices except the LGU general address)
- **THEN** the office card shows the general email `liveloveliloan@liloan.gov.ph` or the placeholder, never a `solano.gov.ph` address

### Requirement: Liloan officials
The site SHALL list the 2025–2028 officials: Mayor Hon. Aljew Fernando J. Frasco, Vice Mayor Hon. Margarita D. Frasco, the 8 elected councilors from the 14th Sangguniang Bayan, and the two ex-officio seats (Hon. Gloria A. Sanchez, LNMB President; Hon. Raymund Kit B. Comendador, SK Federation President). Each ex-officio seat SHALL carry a note that it is pending the 2026-11-02 BSKE results.

#### Scenario: Ex-officio seat
- **WHEN** a visitor views the Sangguniang Bayan list
- **THEN** both ex-officio members appear with a visible "pending 2026 BSKE results" note

### Requirement: Liloan hotlines
The hotline bar on every page SHALL list only verified Liloan lines, in this order: Police (0998-598-6385), Fire (0905-350-3109), MDRRMO (0956-271-1967, the poster's ambulance/floods line), MSWDO (0932-293-2853) and LGU trunk line (032-425-1388). Each item's `tel:` link SHALL dial the number shown. The Solano DILG and R2TMC slots SHALL be removed. Pages that list full hotlines (contact, public safety, offline) SHALL also show the second Police and MDRRMO numbers.

#### Scenario: Hotline bar consistency
- **WHEN** the hotline bar on any two pages is compared
- **THEN** they list the same lines with the same numbers

#### Scenario: tel link matches label
- **WHEN** a visitor taps "Police: 0998 598 6385"
- **THEN** the dialer opens with 09985986385

### Requirement: Barangays
The site SHALL list Liloan's 14 barangays (Cabadiangan, Calero, Catarman, Cotcot, Jubay, Lataban, Mulao, Poblacion, San Roque, San Vicente, Santa Cruz, Tabla, Tayud, Yati). Population figures SHALL be the 2020 census, credited to PSA. Each barangay's Punong Barangay SHALL read "To be updated after BSKE 2026" until a human verifies the names.

#### Scenario: Barangay list
- **WHEN** a visitor opens the government page barangay section
- **THEN** exactly 14 barangays are shown and none is a Solano barangay

### Requirement: Municipal location
Location-based features (weather, map) SHALL use the Liloan Municipal Hall coordinates 10.3996021, 123.999612.

#### Scenario: Weather and map
- **WHEN** the weather widget or map loads
- **THEN** it requests and centres on 10.3996021, 123.999612

### Requirement: Competitiveness index
The statistics page SHALL show Liloan's DTI CMCI data for 2016–2024. The 2018 values SHALL be treated as no data (null), not zero. The data SHALL credit DTI CMCI with its retrieval date.

#### Scenario: 2018 column
- **WHEN** the CMCI chart or table renders 2018
- **THEN** it shows a gap or "no data", not 0

#### Scenario: 2024 overall
- **WHEN** a visitor views the 2024 overall ranking
- **THEN** it shows rank 24 with score 37.0244 among 1st–2nd class municipalities
