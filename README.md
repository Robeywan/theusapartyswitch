# The USA Party Switch

Canonical site: [theusapartyswitch.com](https://theusapartyswitch.com/).

An interactive American party realignment atlas adapted from a historical research manuscript dated October 29, 2026.

## Run or publish

This repository root contains the complete static website. For GitHub Pages, publish from the selected branch’s root directory (`/`); no generated build folder is needed. Open `index.html` in a current browser, or publish the repository root through GitHub Pages or another static host. No build step, account database, analytics, or runtime dependencies are required. Fonts, map paths, and educational data are included locally. Original source links require internet access.

## Contents

- 60 presidential election allocation maps, 1789–2024
- All 50 states and Washington, DC; Alaska and Hawaii statehood in 1959
- 30 narrative checkpoints and 50 midterm entries
- 272 manuscript and supplementary sources
- Party comparisons, demographic readings and tables, and nine regional case studies
- Per-state electoral histories, split-elector details, and CSV export

The timeline covers 1789–October 29, 2026. Between presidential elections, the map retains the latest completed election. No 2026 election results are included.

## Map methodology

Map colors identify leading party/faction allocations of counted presidential electoral votes, rather than popular-vote winners. Before 1804 the color follows the leading candidate affiliation, with nonpartisan Washington used in 1789 and 1792; all original undifferentiated elector choices are retained in state details. Split votes are hatched. Current state boundaries provide a geographic reference throughout; they do not reconstruct historical territories.

Official electoral tables: https://www.archives.gov/electoral-college

Documented corrections: the Archives 1800 table omits Burr’s Virginia21 votes (restored using the Library of Congress and national totals); the 1824 summary mislabels Jackson as President (the House elected John Quincy Adams). See election notes and the included validation report for details.

## Source and reuse notes

The starting manuscript refers to an additional packet of 115 map reproductions, which was not supplied. This website renders new interactive maps and links to original records. Links extracted from the manuscript are not all independently checked. Targeted historical checks and full structural data validation are documented in the accompanying research notes. The original source publishers retain rights in their materials.

Map geometry is Census-derived us-atlas 3.0.1 under ISC; see `map-license.txt`. Fonts use the SIL Open Font License; licenses are in `fonts/`.

## Editing

`app.js` contains interface behavior; `style.css` contains layout and styling; `data.js` defines `window.ATLAS_DATA`. The data object separates content, elections, states, and geometry. No compilation is required after editing. Preserve the electoral metric and historical exceptions when revising.

## Historical flags and photographs

The timeline shows 27 historical national flag versions, chosen as of July 4 in the selected year. Star counts follow the Department of Veterans Affairs chronology. Early arrangements are identified as representative because star placement and proportions were not standardized before 1912. The 1795 flag has 15 stripes; the 1959 flag has 49 stars. Select the flag for exact effective dates and institutional sources.

Photo sources and public domain licensing are recorded in `assets/credits.json` and the page’s Image credits. The eagle photograph is by Matt Poole/USFWS; the flag photograph was dedicated to the public domain by its creator, Scrumshus. Background photographs are contemporary decoration rather than historical flag evidence.

## Patriotic visual edition

The visual design uses a navy masthead, crimson and gold details, a historical flag ribbon, an eagle portrait, and a gallery of historical artwork, an original document, and a historic photograph. Full gallery source and rights information is in `assets/sources.json`. `patriotic.css` layers the visual design over the base layout. Reduced-motion preferences disable decorative animation. Election data and historical flag chronology are unchanged.

## Custom domain

The root `CNAME` file specifies `theusapartyswitch.com` as the GitHub Pages custom domain. The root `.nojekyll` file disables Jekyll processing so GitHub Pages serves this static website directly. Keep both files in the published branch’s root. Repository publication, GitHub Pages settings, and domain DNS configuration are separate setup steps.

## Ask the atlas

A patriotic “Have a question?” button and navigation tab open a local research companion. `questions-data.js` contains 28 prepared historical explanations with citations to the existing source register. `questions-engine.js` matches freeform questions conservatively and retrieves related source records and atlas passages when it cannot identify one clear answer. `questions.js` renders the accessible dialog, citations, related questions, and timeline links; `questions.css` styles it.

This feature does not call an AI service or search the live web. It needs no API key, account, or server. Questions and recent-question history stay in memory in the current tab; no question is written to storage, a URL, or a network request. Linked original sources open separately. The panel labels its prepared-answer and related-evidence modes so that a lexical match is not presented as a newly researched answer.

To add a question, supply a unique ID, canonical question, aliases, keywords, cited paragraphs, valid `sourceIds`, a timeline year, and optional related answer IDs. Check claims against the cited materials before publishing.

