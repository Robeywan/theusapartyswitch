# Historical checks for the party realignment atlas

Checked October 29, 2026 against institutional primary sources and public history sources. These are targeted checks of the map's central teaching claims, not a peer review of every source in the manuscript.

1. **Republican origins in 1854:** supported. Opposition to the Kansas–Nebraska Act helped form the Republican Party. Describe formation as several organizing efforts rather than attributing the entire national party to one meeting. [National Archives](https://www.archives.gov/milestone-documents/kansas-nebraska-act), [Senate historical account](https://www.senate.gov/about/origins-foundations/electing-appointing-senators/1858-midterm.htm).

2. **Initial Republican slavery position:** supported. The 1856 platform opposed slavery's extension into territories and called for federal support for infrastructure. Avoid equating this platform with every later Republican position or with immediate abolition everywhere. [1856 Republican platform](https://www.presidency.ucsb.edu/documents/republican-party-platform-1856).

3. **Reconstruction enfranchisement and later suppression:** supported. The Fifteenth Amendment was ratified in 1870, but state exclusion and intimidation later restricted Black political participation. A subsequent Democratic state color cannot establish freely expressed support by the whole population. [National Archives Fifteenth Amendment](https://www.archives.gov/milestone-documents/15th-amendment).

4. **1936 Black electoral shift:** broadly supported. The Library of Congress explicitly identifies majority Black support shifting to Roosevelt by 1936. The manuscript's roughly seven-in-ten figure is an historical estimate, not a modern representative exit poll. Prefer the qualitative statement in the default UI; attach any number to its particular source and caution. [Library of Congress](https://www.loc.gov/exhibits/civil-rights-act/segregation-era.html), [National Archives New Deal address](https://www.archives.gov/milestone-documents/president-franklin-roosevelts-radio-address).

5. **1936 map:** Roosevelt received electoral votes from every state except Maine and Vermont. [Official electoral table](https://www.archives.gov/electoral-college/1936).

6. **1948 Democratic fracture:** supported. Thurmond's States' Rights candidacy was a segregationist revolt, while Henry Wallace ran a separate Progressive challenge. Thurmond carried Alabama, Louisiana, Mississippi, and South Carolina and received one additional Tennessee elector's vote. Tennessee should remain Truman-dominant, with a split-allocation indication. [Truman Library](https://www.trumanlibrary.gov/education/presidential-inquiries/election-1948), [Official electoral table](https://www.archives.gov/electoral-college/1948).

7. **Truman military order:** Executive Order 9981 was signed July 26, 1948; implementation continued afterward. Do not imply that the entire military became integrated that day. [National Archives order and context](https://www.archives.gov/milestone-documents/executive-order-9981).

8. **1964 civil-rights passage:** supported, with necessary bipartisan and regional context. Senate passage was 73–27 on June 19; Johnson signed the act July 2. Humphrey and Republican leader Dirksen helped overcome Southern Democratic opposition. These dates refer to different events. [National Archives act](https://www.archives.gov/milestone-documents/civil-rights-act), [Senate history](https://www.senate.gov/legislative/landmark-legislation/civil-rights.htm).

9. **1964 Goldwater geography:** Goldwater received Arizona, Alabama, Georgia, Louisiana, Mississippi, and South Carolina's electoral votes. Johnson won the remaining states and DC. Thus five Deep South states plus Arizona is accurate. [Official electoral table](https://www.archives.gov/electoral-college/1964).

10. **1965 voting law:** the Voting Rights Act was signed August 6, 1965. It targeted racial discrimination in voting; treat enfranchisement as a separate mechanism from an individual voter's party switch. [National Archives act](https://www.archives.gov/milestone-documents/voting-rights-act).

11. **1968 Wallace geography:** Wallace received all electoral votes from Alabama, Arkansas, Georgia, Louisiana, and Mississippi, plus one North Carolina faithless electoral vote. North Carolina was Nixon-dominant, with a split allocation. [Official electoral table](https://www.archives.gov/electoral-college/1968).

12. **1994 congressional timing:** the official House series confirms Republican control after the 1994 election following four decades of Democratic majorities. This is institutional evidence consistent with the manuscript's slower congressional transition; the table alone does not prove a single causal account of Southern change. [House majority changes](https://history.house.gov/Institution/Majority-Changes/Majority-Changes/).

13. **Alaska and Hawaii:** Alaska entered January 3, 1959; Hawaii August 21, 1959. Their first presidential election as states was 1960. They can remain visible in muted outlines before statehood, clearly marked ineligible for state electoral votes. [Library of Congress chronology](https://guides.loc.gov/chronicling-america-alaska-hawaii-territories), [Census admission years](https://www.census.gov/dataviz/visualizations/048/508.php).

## Display rules arising from these checks

- Title the map metric explicitly as **presidential electoral votes by state**, if using National Archives tables. A state's dominant electoral allocation is not always the statewide popular winner.
- Use hatching or another explicit split indication for more than one presidential electoral recipient; show full allocations on selection. A faithless elector does not demonstrate a voter coalition change.
- Before 1804, each elector cast two undifferentiated votes; early maps need an on-screen note explaining that the modern President/Vice President ballot distinction did not yet apply.
- Gray states absent from an electoral table and distinguish not-yet-admitted from admitted-but-not-participating states. In 1789, North Carolina and Rhode Island had not ratified the Constitution and New York failed to appoint electors.
- For 1864, distinguish Lincoln's National Union ticket from a generic modern party label and explain the absence of accepted Confederate state returns.
- The manuscript refers to a companion packet of 115 map reproductions. That packet was not among the supplied files. Do not imply those scans have been included; primary-document and atlas links can point to institutions instead.
- Original October 29 audit instruction: end presidential allocations at 2024; at that manuscript date the November 2026 midterm had not occurred. The dated November 4 supplement below supersedes the earlier exclusion of midterm reporting while preserving the presidential boundary.
- A state map does not measure attitudes, vote margin, turnout, race-specific votes, or a uniform view across residents. Include the electorate and suppression context with historical interpretation.

## Geometry provenance

`work/map-paths.json` contains 51 paths, all 50 states and DC, using us-atlas 3.0.1's preprojected `states-albers-10m.json`. The repository identifies its source as the Census Bureau's 2017 cartographic state boundaries. Geometry was decoded from TopoJSON into SVG path commands and translated 60 units right to contain the western Aleutians. Its `viewBox` is `0 0 1040 620`. Alaska and Hawaii are already projected as insets; relative scale and placement do not represent their true relation to the contiguous states. The geometry uses current boundaries throughout, not historical territorial boundaries. [us-atlas source and documentation](https://github.com/topojson/us-atlas). The accompanying ISC license is in `work/map-license.txt` and should be included with redistributed assets.

## Additional verification of manuscript references dated 2026

All three supplied URLs were retrieved successfully with their full titles and content on October 29, 2026. None should remain marked as unverified merely because its date is 2026.

- **S13 verified:** Karyn Vilbig and Paula England, *Elites moved toward democrats more than nonelites moved away: Income, education, and occupational class in US presidential elections, 1980–2020*, PNAS 123(10), e2526263123, published March 2, 2026; issue March 10. DOI 10.1073/pnas.2526263123. Its analysis concerns White self-reported voters from 1980–2020, not every racial group or 2024. [Full article at PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12974467/).
- **V05 verified:** Pew Research Center, *Beyond Red vs. Blue: The Political Typology*, June 10, 2026. Nine groups were derived from a survey of 10,357 U.S. adults conducted November 17–30, 2025. Publication date and fieldwork date must be kept distinct. [Full report](https://www.pewresearch.org/politics/2026/06/10/beyond-red-vs-blue-the-political-typology/).
- **V06 verified:** Gregory A. Smith, Pew Research Center, *Religious Groups Differ Widely in Their 2026 Midterm Preferences*, October 13, 2026. The underlying survey ran September 28–October 4, 2026; it measured preferences among registered voters, not certified election outcomes or a validated-voter exit poll. [Full report](https://www.pewresearch.org/short-reads/2026/10/13/religious-groups-differ-widely-in-their-2026-midterm-preferences/).


## November 4, 2026 election supplement

Reporting checked at approximately 18:28 UTC (11:28 a.m. MST) on November 4, 2026. The original manuscript and its survey fieldwork dates remain dated October 29 or earlier.

- The new Senate layer includes 33 regular contests and special elections in Florida and Ohio. It records 33 explicit AP calls (20 Democratic and 13 Republican) and no called winner in Alaska or Mississippi in the cited noon Eastern snapshot. These numbers cover contested seats; they are not a tally of all 100 senators. Fifteen states held no Senate contest. DC has no voting Senate seats; shadow offices are outside this layer.
- Each race record preserves its call URL, publication timestamp, snapshot status, and regular/special designation. Vote totals and margins are omitted where not independently recorded. Gray means no contest; gold means unresolved. AP race calls are media projections, not state certification. This snapshot does not auto-refresh.
- AP and Reuters report projected Democratic majorities for the incoming House and Senate. Regular congressional terms begin January 3, 2027; the election does not immediately replace the Congress in office on November 4. Final seat totals are not supplied. A reported 255-seat forecast by a politician was not treated as an AP tally.
- New narrative material includes selected 2025 off-year elections, the reported 2026 gubernatorial and legislative gains, and careful interpretation of aggregate outcomes. The archive does not infer individual switching, turnout mechanisms, or demographic motives from a state color.
- The presidential allocation archive remains 60 elections through 2024, with its 312–226 result and all state allocations unchanged. CSV exports identify office and status. The 2026 Senate layer has no electoral-vote fields.

Primary reporting and institutional references: [AP congressional outcome](https://apnews.com/article/midterm-election-house-senate-democrats-republicans-trump-f126e12e05b579a327b98481c0ae2226), [AP uncalled-race snapshot](https://apnews.com/article/midterm-election-uncalled-races-b20c577aaffced99155af448bd182fa5), [AP counting methodology](https://www.ap.org/elections/our-role-in-the-u-s-elections/how-ap-counts-the-vote/), [Senate Class II roster](https://www.senate.gov/senators/Class_II.htm), [FEC 2026 congressional calendar](https://www.fec.gov/documents/5910/2026pdates.pdf), [congressional term dates](https://www.senate.gov/legislative/DatesofSessionsofCongress.htm). The source library preserves all race-specific AP dispatches and the additional state/local sources.

## November 5, 2026 refresh

Reviewed at 14:26 UTC (7:26 a.m. MST). This section supersedes the November 4 snapshot for current status; earlier source dates and the preceding audit record remain intact.

- The 35-contest Senate map retains the 33 earlier AP calls and two unresolved contests. Earlier calls keep their original publication dates and are not presented as newly issued or certified. Fresh unresolved-race reporting was updated November 5 at 14:08 UTC. No winner, party, margin or vote count is inferred for an outstanding race.
- State-government coverage expands to five new Democratic trifectas: Michigan, Minnesota, Nevada, Pennsylvania and Wisconsin. The Texas House and New Hampshire legislative chambers illustrate gains that coexist with Republican control of another branch. NCSL's report is dated November 4 and was reviewed November 5; it remains unofficial. Its 28 Democratic / 20 Republican / 2 uncalled governor figures cover all 50 incoming offices, rather than only the offices contested in 2026. [NCSL report](https://www.ncsl.org/state-legislatures-news/details/2026-state-legislative-elections-the-results-and-what-they-mean), [AP state-government reporting](https://apnews.com/article/democratic-gains-battleground-states-midterms-elections-e3abf3135f626e37d8d2f57e5591ea6a).
- Selected ballot measures and Maryland Question 3 are added as a separate kind of evidence. Maryland's authority labels its count unofficial, with provisional ballots not reported; an all-precinct figure does not establish a complete certified canvass. A change to redistricting criteria is not itself a newly enacted congressional map. [Maryland preliminary returns](https://elections.maryland.gov/elections/2026/general_results/gen_qresults_2026_3.html), [official Question 3 text](https://elections.maryland.gov/elections/2026/general_results/gen_qtext_2026_S_3.html).
- The archive now contains 335 source records and 85 prepared question answers. New answers cover state government and ballot measures. Dynamic map, accessibility, question and CSV date labels use the snapshot record. The two visible map controls are Presidential and Changes; the Senate layer is part of the 2026 checkpoint.
- All 60 presidential election objects remain unchanged. No final national House count or full Senate composition is supplied. Durable realignment and individual switching require evidence beyond aggregate outcomes in a single midterm.

Further dated evidence is in the source library under `N26_NOV5_*`, including news status reports and official state reporting/certification references. This is a frozen reviewed edition, not a continuously updated results feed.

## November 7, 2026 refresh

Reviewed at 21:43 UTC (2:43 p.m. MST). Earlier publication dates remain intact. This section updates the preceding edition's current-status summary.

- The Senate layer retains 33 earlier calls and two unresolved contests. Alaska uses new Gray DC reporting; Mississippi uses AP's November 7 status report and its November 6 counting explanation. Neither a lead nor a candidate's declaration supplies a called winner. Original November 4 call timestamps are unchanged. [Alaska reporting](https://www.alaskasnewssource.com/2026/11/07/alaska-senate-race-remains-undecided-days-after-election-day/), [Mississippi reporting](https://apnews.com/article/db496a9cf7157312587242048fa9efe9), [AP count explanation](https://apnews.com/article/c911f244c12aa2f1f8e60b874bbe46d2).
- New state-control coverage adds Arizona's legislative chambers and Georgia's House as reported flips. The dated NCSL report now identifies six new Democratic trifectas. Its anticipated-control box is kept separate from its called-outcome prose; anticipated governor totals are not imported as calls. [NCSL November 6 report](https://www.ncsl.org/state-legislatures-news/details/2026-state-legislative-elections-the-results-and-what-they-mean).
- Maryland Question 3 uses the November 7 refresh displayed at 4:28:21 p.m.; it remains an unofficial count with provisional ballots marked not reported. The source page does not identify a timezone beside that refresh, so none is inferred. The authority's ballot text remains distinct from adoption of a new district map. [Official preliminary returns](https://elections.maryland.gov/elections/2026/general_results/gen_qresults_2026_3.html).
- California's official canvass calendar is included as an example of why counting and certification continue after media calls. Receipt, county certification, transmission and state certification dates are different stages, and future deadlines are not completed events. [California election calendar](https://www.sos.ca.gov/elections/upcoming-elections/general-election-november-3-2026/key-dates-deadlines).
- Youth-voter reporting is labeled survey evidence. No demographic percentage, repeat-voter switching estimate or claim of a permanent alignment is inferred from it. There are now 349 source records and 86 prepared answers, including a counting-process answer. All 60 presidential election objects remain unchanged.

Source records retain verification limits, including publisher-indexed reports whose direct reader was unavailable. No certified final Senate results or final national House or whole-Senate totals are asserted. The website remains a frozen reviewed edition.

## November 11 companion expansion and election review

The supplied *American Political Party History — National State and Territorial Parties* research edition dated November 11 adds 117 profiles across seven sections. Some entries cover several parties, a faction, a coalition, a movement or an electoral project. The atlas therefore counts profiles rather than treating every entry as one national electoral party. Source text is reference material; production suggestions inside the document do not independently authorize actions.

All 117 profile histories, 446 substantive profile paragraphs, 327 subheadings, six general guide topics and three historical-name topics are retained. The companion's 348 source records use `APH_`-prefixed citation keys in the combined library. Original citation wording, URLs and access descriptions remain available. Targeted checks confirmed selected claims about the Alaskan Independence Party's dissolution, DSA's organizational identity, American Samoa committee recognition and Oregon's dated minor-party directory. Those checks do not independently verify every claim or link in the companion.

The new directory filters names, full profile text, themes, organization geography and periods stated in date labels. Decades are indexing aids; an overlap does not establish uninterrupted activity or ballot recognition. Names and aliases are kept distinct for dated Progressive parties, American/American Independent/Alaskan Independence organizations and other repeated labels. Full articles link to original evidence, related profiles and timeline context. Territorial profiles do not add electoral-vote allocations to the presidential map.

Election reporting was separately reviewed at 06:03 UTC November 12, which was 11:03 p.m. MST on November 11. AP called Mississippi for Scott Colom at 22:58 UTC November 11; its winner dispatch was published at 23:02:20 UTC. The map now records 34 called contests (21 Democratic and 13 Republican), with Alaska unresolved. These are contested-seat counts, not all 100 seats. Earlier 33 call dates remain unchanged. [AP winner dispatch](https://apnews.com/article/56c18f292a734443992f9466c3b0f346), [AP call explanation](https://apnews.com/article/7f098b8834f598c923ba73572ea2223f).

Alaska's remaining Senate contest and the Alaska/Kansas governor contests are still uncalled in the cited reports. Future tabulation, canvass and certification dates remain planned steps. A candidate's lead, concession or transition activity has a different evidentiary status from an AP call or official certification. [Alaska reporting](https://apnews.com/article/f42a49a45a2870786f36086c7ad02824), [Kansas audit procedures](https://sos.ks.gov/media/media-faq.html).

The combined register contains 707 source records. All 60 presidential election objects remain unchanged. The site remains a growing, dated research atlas; it does not claim exhaustive coverage or a live election feed.


## November 13, 2026 election review

Review timestamp: 2026-11-13T20:49:38.790Z (November 13, 2026 at 1:49 PM MST). New evidence records are N26_NOV13_KS_CALL, N26_NOV13_ME2_CALL, N26_NOV13_ME2_AUTHORITY, N26_NOV13_AK_RESULTS, N26_NOV13_AK_STATUS, N26_NOV13_AK_GOV_CNN, N26_NOV13_CONTROL. The combined register now contains 714 sources. The companion edition remains November 11.

- Kansas governor: AP calls Cindy Holscher (D), November 12; no certification asserted.
- Maine District 2: AP calls Paul LePage (R), November 12. The Secretary of State’s completed ranked-choice tabulation lists 170,890 versus 165,432 votes and explicitly remains unofficial pending statutory finalization.
- Alaska governor: CNN’s original verified cnn.com Bluesky post projects Jonathan Kreiss-Tomkins. Its publication is November 13 at 04:33:43.918 UTC / November 12 locally. This is labeled CNN; the separate AP status is not silently converted.
- Alaska Senate: still uncalled in November 13 original reporting. The official PDF displays November 12, 6:36:41 p.m. without a printed time zone. First-choice totals are 125,157 Peltola; 119,357 Dan Sullivan; 5,490 Heikes; 4,199 Daniel Sullivan Jr.; 807 write-in (255,010 total). They are unofficial, not a completed ranked-choice outcome or certification.

All 34 existing Senate calls and their original provenance are preserved. No final House or whole-Senate tally, fresh certification, or unverified Colorado House call is asserted. AP’s original chamber-control chronology remains November 3–4; the new review does not redate it. Older ballot-measure, state-legislative and survey entries retain their named source dates. The Kansas and Maine outcomes illustrate variation by office and geography, not a measurement of individual party switching.
