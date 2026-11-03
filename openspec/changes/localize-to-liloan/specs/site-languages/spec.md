## ADDED Requirements

### Requirement: Offered languages
The site SHALL offer exactly three languages: English (`en`, default), Filipino (`fil`) and Cebuano (`ceb`). Ilocano (`ilo`) SHALL NOT be offered: no `ilo` dictionary, switcher button or `hreflang` entry.

#### Scenario: Language switcher
- **WHEN** a visitor opens any page
- **THEN** the switcher shows EN, FIL and CEB buttons and no ILO button

#### Scenario: hreflang tags
- **WHEN** a crawler reads any page's `<head>`
- **THEN** it finds `hreflang` entries for `en`, `fil`, `ceb` and `x-default`, and none for `ilo`

### Requirement: English fallback
For any key missing from the selected language's dictionary, the engine SHALL show the English value. A partial `ceb` dictionary SHALL therefore never leave an element blank or show a raw key.

#### Scenario: Untranslated key in Cebuano
- **WHEN** the visitor selects CEB and an element's key has no `ceb` entry
- **THEN** the element shows the English text

### Requirement: Stale language preference
A saved preference for a language that is no longer offered SHALL be ignored and the engine SHALL fall back to browser detection, then English.

#### Scenario: Returning Ilocano visitor
- **WHEN** `localStorage.selectedLang` is `ilo`
- **THEN** the page loads in the browser-detected language or English, and no error is thrown

### Requirement: Cebuano detection
A browser language whose primary subtag is `ceb` (e.g. `ceb`, `ceb-PH`) SHALL select `ceb`.

#### Scenario: Cebuano browser
- **WHEN** `navigator.language` is `ceb` or `ceb-PH` and no preference is saved
- **THEN** the page loads in Cebuano

### Requirement: Cebuano scope and review
The initial `ceb` dictionary SHALL cover navigation, header and footer chrome, the hotline bar labels, the language switcher, and the standard placeholder. Every `ceb` string SHALL be reviewed by a native Cebuano speaker before release.

#### Scenario: Chrome in Cebuano
- **WHEN** the visitor selects CEB
- **THEN** the navigation, header, footer and placeholder text appear in Cebuano
