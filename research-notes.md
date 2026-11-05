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
