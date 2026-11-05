/* November 5, 2026 refresh to the local, source-backed question register.
   Load after questions-data.js and updates-data.js, before questions.js.
   No requests, browser storage, or generated historical claims are used here. */
(function (root) {
  'use strict';
  const answers = root.ATLAS_QUESTIONS;
  const senate = root.ATLAS_UPDATES && root.ATLAS_UPDATES.senate;
  if (!Array.isArray(answers) || !senate || !Array.isArray(senate.races)) return;
  const snapshotDate = root.ATLAS_UPDATES.research.snapshot.asOfDate;
  const snapshotLabel = new Date(snapshotDate + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
  const unique = values => [...new Set(values.filter(Boolean))];
  const ids = value => Array.isArray(value) ? value.filter(v => typeof v === 'string') : [];
  const cite = values => '[' + unique(values).join('; ') + ']';
  const byId = id => answers.find(a => a.id === id);
  const addSources = (answer, values) => { answer.sourceIds = unique([...ids(answer.sourceIds), ...values]); };
  function put(answer) {
    const index = answers.findIndex(a => a.id === answer.id);
    if (index < 0) answers.push(answer);
    else answers[index] = answer;
  }

  // Keep the original 2024 explanation attached to its own election and surveys.
  const election2024 = byId('election-2024');
  if (election2024) {
    election2024.aliases = (election2024.aliases || []).filter(q => !/\b2026\b/.test(q));
    election2024.keywords = (election2024.keywords || []).filter(q => !/\b2026\b/.test(q));
    election2024.paragraphs[1] = 'Pew finds that changes in who turned out mattered more than individual switching for much of the 2020–2024 movement. Validated-voter studies and election-night exit polls are different measurement series and should not be spliced into one precise trend. Pew’s 2026 pre-election preference survey remains survey evidence, not the subsequent vote count. The atlas’s November 5 update covers 2026 midterm reporting separately from the 2024 presidential result. [V02; V03; G2024; V06; N26_METHOD]';
    election2024.related = unique([...(election2024.related || []), 'midterms-2026']);
    addSources(election2024, ['N26_METHOD']);
  }
  const mapColors = byId('map-colors');
  if (mapColors) {
    mapColors.paragraphs[0] = 'Red for Republican and blue for Democratic are display conventions, not permanent historical identities. On the presidential layer, this atlas colors states by their leading recorded presidential electoral allocation, with historical factions distinguished where needed. That layer does not show winning popular-vote margins or every resident’s political views. [A01; E1960; E2024]';
    mapColors.paragraphs[1] = 'On the presidential layer, hatching marks multiple electoral recipients. It can reflect early constitutional rules, district allocation, unpledged electors, or faithless electors—not necessarily a split statewide popular vote. Before the Twelfth Amendment, electors cast two undifferentiated votes rather than separate presidential and vice-presidential votes. [E1789; E1800; E1960; F2016]';
    const senateColorText = 'The separate 2026 Senate layer uses red and blue for the party of an AP-called winner in a contested Senate race. Gold means uncalled in the dated snapshot; gray means no Senate contest. These are not presidential electoral votes or a map of both sitting senators. [N26_METHOD; N26_UNCALLED]';
    if (!mapColors.paragraphs.includes(senateColorText)) mapColors.paragraphs.push(senateColorText);
    addSources(mapColors, ['N26_METHOD', 'N26_UNCALLED']);
  }
  const statehood = byId('statehood');
  if (statehood) {
    statehood.paragraphs[1] = 'Washington, DC is a federal district and first cast presidential electoral votes in 1964. Modern outlines provide a geographic reference throughout this atlas; they do not reconstruct early territories or changing boundaries. On the presidential layer, a muted area means no accepted allocation is shown for that election, rather than an absence of people or political history. [E1964; E1789]';
    const senateStatehoodText = 'The 2026 Senate layer has a different meaning for gray: no Senate contest was held in that jurisdiction. That status is separate from an uncalled contest. DC has no voting U.S. Senate seats; its presidential electoral votes do not give it senators. [N26_METHOD; N26_SEN_SCOPE]';
    if (!statehood.paragraphs.includes(senateStatehoodText)) statehood.paragraphs.push(senateStatehoodText);
    addSources(statehood, ['N26_METHOD', 'N26_SEN_SCOPE']);
  }

  put({
    id: 'midterms-2026',
    question: 'What happened in the 2026 midterms?',
    aliases: ['Who won the 2026 midterms?', 'Does the atlas include 2026 midterm results?', 'Who won Congress in 2026?', 'Who won the House and Senate in 2026?', 'Who won the Senate in 2026?', 'Who won the 2026 Senate?', 'Who won the 2026 House?', 'What are the 2026 House results?', 'What are the 2026 Senate results?', 'What does the 2026 Senate map show?', 'What happened in the November 2026 election?'],
    keywords: [],
    paragraphs: [
      'AP called Democrats to win the incoming House and Senate after the November 3, 2026 midterms. Those congressional terms begin January 3, 2027; the election does not immediately replace the Congress currently serving. This is dated reporting, not a complete certified seat tally. [N26_CONTROL; N26_TERMS]',
      'The separate Senate map records 35 contests: 33 regular elections plus special elections in Florida and Ohio. It includes 33 AP-called winners; Alaska and Mississippi remain uncalled in reporting reviewed November 5. This layer shows Senate contest outcomes, not presidential electoral votes or the party composition of all 100 Senate seats. [N26_SEN_SCOPE; N26_SEN_FL_CONTEXT; N26_SEN_OH_CONTEXT; N26_NOV5_SENATE_STATUS; N26_METHOD]'
    ],
    sourceIds: ['N26_CONTROL', 'N26_TERMS', 'N26_SEN_SCOPE', 'N26_SEN_FL_CONTEXT', 'N26_SEN_OH_CONTEXT', 'N26_NOV5_SENATE_STATUS', 'N26_METHOD'],
    year: 2026, mapMode: 'midterms',
    related: ['senate-2026-status', 'realignment-2026', 'president-2026']
  });
  put({
    id: 'senate-2026-status',
    question: 'Are the 2026 Senate results final and certified?',
    aliases: ['Which 2026 Senate races are uncalled?', 'Are all 2026 Senate races called?', 'What does uncalled mean on the 2026 Senate map?', 'Are the 2026 Senate results certified?', 'How current is the 2026 Senate map?', 'Why are some states gray on the 2026 Senate map?', 'What is the date of the 2026 Senate snapshot?', 'Does the 2026 Senate map show every Senate seat?'],
    keywords: [],
    paragraphs: [
      'The latest atlas snapshot was reviewed November 5, 2026. That morning’s reporting still listed Alaska and Mississippi Senate contests as uncalled. An uncalled race still has no recorded winner here; a candidate’s claim or a vote lead is not substituted for a call. [N26_NOV5_SENATE_STATUS]',
      'An AP race call is separate from official canvassing and certification. The atlas has not established certified results for these calls and supplies no final vote totals. Gold means an uncalled contest; gray means no Senate election. The map covers contests held in 2026, rather than both senators from every state or all 100 seats. [N26_AP_COUNTING; N26_METHOD; N26_SEN_SCOPE]'
    ],
    sourceIds: ['N26_NOV5_SENATE_STATUS', 'N26_AP_COUNTING', 'N26_METHOD', 'N26_SEN_SCOPE'],
    year: 2026, mapMode: 'midterms',
    related: ['midterms-2026', 'senate-2026-AK', 'senate-2026-MS']
  });
  put({
    id: 'president-2026',
    question: 'Was there a U.S. presidential election in 2026?',
    aliases: ['Who won the 2026 presidential election?', 'Who won president in 2026?', 'Who won the presidency in 2026?', 'What were the 2026 presidential electoral votes?', 'Did the 2026 midterms elect a president?', 'Does the 2026 Senate map show presidential results?', 'Did the Democrats win the presidency in the 2026 midterms?'],
    keywords: [],
    paragraphs: [
      'No. The November 2026 election covered midterm offices, not a presidential election. The atlas’s presidential electoral-allocation series still ends with 2024, when Trump received 312 electoral votes and Harris received 226. The separate 2026 Senate map does not create a new presidential result. [N26_FEC; E2024; N26_METHOD]',
      'AP’s report that Democrats won incoming congressional majorities concerns the House and Senate. Winning Congress does not award presidential electoral votes or elect a new president. Keep that midterm result separate from the presidential chronology. [N26_CONTROL; N26_METHOD]'
    ],
    sourceIds: ['N26_FEC', 'E2024', 'N26_METHOD', 'N26_CONTROL'],
    year: 2026, mapMode: 'midterms',
    related: ['midterms-2026', 'election-2024', 'map-colors']
  });
  put({
    id: 'realignment-2026',
    question: 'Do the 2026 midterms prove another party realignment?',
    aliases: ['Did the parties switch again in 2026?', 'Does the 2026 election prove a permanent realignment?', 'Did every voter switch parties in 2026?', 'Can the 2026 Senate map explain why voters changed parties?', 'What do the 2026 results mean for party realignment?', 'Does the 2026 election prove demographic groups changed parties?'],
    keywords: [],
    paragraphs: [
      'The 2026 result adds another electoral reversal after the Republican presidential victory of 2024. AP called Democrats to win the incoming House and Senate. That is an election outcome; deciding whether it marks a durable new party alignment requires evidence across more than one election and office. [E2024; N26_CONTROL; S02]',
      'As a methodological inference, a change in a state’s aggregate result cannot identify which individuals switched parties or why. Turnout, population change, candidate differences, and persuasion can produce different outcomes. Pew’s study of 2020–2024 illustrates why turnout and individual switching must be measured separately; it does not measure those mechanisms in the 2026 election. [S02; V02; N26_METHOD]'
    ],
    sourceIds: ['E2024', 'N26_CONTROL', 'S02', 'V02', 'N26_METHOD'],
    year: 2026, mapMode: 'midterms',
    related: ['party-switch', 'midterms-2026', 'election-2024']
  });

  put({
    id: 'state-government-2026', question: 'How did state governments change in the 2026 elections?',
    aliases: ['Which states gained Democratic trifectas in 2026?', 'What changed in state government in the 2026 midterms?', 'How did the 2026 elections change state legislatures?', 'Did the 2026 midterms change governors and state legislatures?'], keywords: [],
    paragraphs: ["NCSL’s November 4 report, reviewed November 5, lists 28 Democratic governorships, 20 Republican governorships and two not yet called. It identifies five new Democratic trifectas: Michigan, Minnesota, Nevada, Pennsylvania and Wisconsin. A trifecta means one party controls the governor’s office and both legislative chambers. [N26_NOV5_NCSL]","Democrats won the Texas House, while Republicans retained its Senate. NCSL also reports Democratic flips in both New Hampshire chambers, alongside Republican Governor Kelly Ayotte’s reelection. These examples produce divided state government rather than Democratic trifectas. [N26_NOV5_NCSL; N26_NOV5_STATE]"],
    sourceIds: ['N26_NOV5_NCSL','N26_NOV5_STATE'], year: 2026, mapMode: 'midterms', related: ['midterms-2026','realignment-2026','ballot-measures-2026']
  });
  put({
    id: 'ballot-measures-2026', question: 'What happened with ballot measures in the 2026 elections?',
    aliases: ['What were the 2026 ballot measure results?', 'What did the 2026 ballot measures show?', 'How did abortion and redistricting measures fare in 2026?'], keywords: [],
    paragraphs: ["AP reports Missouri’s abortion and redistricting measures failed; Virginia and Nevada abortion-rights measures passed; Idaho’s abortion-rights initiative failed. Different measures and offices require separate interpretation. [N26_NOV5_BALLOT]","Maryland’s Question 3 results page, refreshed November 5 at 8:08:04 a.m. as displayed, reports 60.11% for and 39.89% against the redistricting amendment. The page calls the results unofficial and lists provisional ballots as not reported. The amendment concerns congressional district criteria; approval is not itself a new congressional map. [N26_NOV5_MD_Q3; N26_NOV5_MD_TEXT]"],
    sourceIds: ['N26_NOV5_BALLOT','N26_NOV5_MD_Q3','N26_NOV5_MD_TEXT'], year: 2026, mapMode: 'midterms', related: ['state-government-2026','midterms-2026','realignment-2026']
  });

  function stateAliases(state) {
    // Every variant names both the office and year. Bare state/candidate keywords
    // would make unrelated historical questions appear to have a prepared answer.
    return [
      `Who won the 2026 Senate election in ${state}?`,
      `What happened in the ${state} Senate race in 2026?`,
      `What are the 2026 U.S. Senate results for ${state}?`,
      `Who won ${state}’s 2026 Senate race?`,
      `Which party won the 2026 Senate election in ${state}?`,
      `What is the result of the 2026 ${state} Senate race?`,
      `Was the 2026 Senate race in ${state} called?`
    ];
  }
  function raceParagraph(race) {
    const state = race.state;
    const sourceIds = ids(race.sourceIds);
    const kind = race.electionType === 'special' ? 'special election' : 'regular election';
    if (race.status === 'unresolved') {
      return `Reporting reviewed ${snapshotLabel} still listed the ${state} U.S. Senate ${kind} as uncalled. This atlas records no winner or winning party for that unresolved contest. ${cite(sourceIds.length ? sourceIds : ['N26_UNCALLED'])}`;
    }
    if (race.status === 'projected' && race.candidate && race.party) {
      const displayName = race.displayName || race.candidate;
      const party = ({ D: 'Democrat', R: 'Republican', I: 'independent' })[race.party] || race.party;
      return `AP called ${party} ${displayName} the winner of the ${state} U.S. Senate ${kind} held November 3, 2026. This is the called outcome recorded in the atlas’s ${snapshotLabel} snapshot. ${cite(sourceIds)}`;
    }
    return `The atlas does not have a source-backed winner for the ${state} 2026 U.S. Senate ${kind}. It does not infer a winner from an incumbent, a candidate’s claim, or an incomplete tally. ${cite(sourceIds.length ? sourceIds : ['N26_METHOD'])}`;
  }

  const stateEntries = Object.entries(senate.states || {}).sort((a, b) => String(a[1].state).localeCompare(String(b[1].state)));
  stateEntries.forEach(([code, record]) => {
    const state = record.state || code;
    const races = senate.races.filter(r => r.stateCode === code);
    const sourceIds = unique(races.flatMap(r => ids(r.sourceIds)));
    let question, paragraphs, aliases = stateAliases(state);
    if (code === 'DC') {
      question = 'Did Washington, DC hold a 2026 U.S. Senate election?';
      aliases = [
        'Who won the 2026 Senate race in Washington DC?',
        'Did Washington DC have a 2026 Senate election?',
        'Who won the District of Columbia 2026 Senate election?',
        'What are the 2026 Senate results for Washington DC?',
        'Why is Washington DC gray on the 2026 Senate map?',
        'Does DC elect U.S. senators in 2026?',
        'Did the District of Columbia elect a senator in 2026?'
      ];
      paragraphs = [
        'The District of Columbia has no voting U.S. Senate seats, so there is no contest for such a seat and no winner to show in this layer. The atlas does not cover DC’s shadow-office elections. [N26_METHOD]',
        'DC’s presidential electoral votes are a different constitutional and electoral measure; it first cast them in 1964. Gray on the 2026 Senate map means no Senate election, rather than a tie, an uncalled race, or a presidential result. [E1964; N26_METHOD]'
      ];
      sourceIds.push('N26_METHOD', 'E1964');
    } else if (record.status === 'no_election' || record.electionHeld === false) {
      question = `Did ${state} hold a 2026 U.S. Senate election?`;
      aliases[6] = `Did ${state} have a Senate election in 2026?`;
      paragraphs = [
        `${state} did not hold a U.S. Senate election on November 3, 2026, so there is no 2026 Senate winner for this state in the atlas. The regular 2026 cycle covered Class II seats; the additional Florida and Ohio contests were special elections. [N26_SEN_SCOPE; N26_METHOD]`,
        'Gray here means no Senate contest, rather than an uncalled race or a claim about the party of the state’s sitting senators. The 2026 Senate layer is separate from the historical presidential electoral-allocation map. [N26_METHOD]'
      ];
      sourceIds.push('N26_SEN_SCOPE', 'N26_METHOD');
    } else {
      question = `Who won the ${state} 2026 U.S. Senate election?`;
      const contests = races.length ? races : (Array.isArray(record.contests) && record.contests.length ? record.contests : [record]);
      paragraphs = [
        contests.map(raceParagraph).join(' '),
        `This is a dated ${snapshotLabel} snapshot. A media call is separate from official canvassing and certification; certified returns and final vote totals are not established here. The state color concerns this Senate contest, not both sitting senators, presidential electoral votes, or every resident’s views. [N26_AP_COUNTING; N26_METHOD]`
      ];
      sourceIds.push(...contests.flatMap(r => ids(r.sourceIds)), 'N26_AP_COUNTING', 'N26_METHOD');
    }
    // IN, ME and OR are ordinary stop words in the retrieval engine. Use the
    // full state name for their eighth variant to prevent an ambiguous alias.
    aliases.push(['IN', 'ME', 'OR'].includes(code)
      ? `Has AP called the ${state} 2026 U.S. Senate election?`
      : `Who won the 2026 U.S. Senate election in ${code}?`);
    put({
      id: 'senate-2026-' + code,
      question, aliases, keywords: [], paragraphs,
      sourceIds: unique(sourceIds),
      year: 2026, mapMode: 'midterms', stateCode: code,
      related: ['midterms-2026', 'senate-2026-status', 'realignment-2026']
    });
  });
})(typeof window !== 'undefined' ? window : globalThis);
