/* Local, deterministic retrieval. Responses contain curated text or archive excerpts only. */
(function (root) {
  'use strict';
  const MAX_QUERY = 600;
  const STOP = new Set(('a an the this that these those i me my we our you your it its they them their he she his her ' +
    'what why when where who whom whose how which is are was were be been being do does did done can could ' +
    'will would shall should may might must have has had of in on at by for with as and or also plus than ' +
    'then so if whether tell explain describe show give find please really actually about into during ' +
    'through between across regarding concerning much many some any more most all up out us').split(' '));
  const WORDS = {
    parties:'party', politicians:'politician', politics:'politic', political:'politic',
    democrats:'democratic', democrat:'democratic', republicans:'republican',
    switches:'switch', switched:'switch', switching:'switch', swaps:'switch', swapped:'switch', swapping:'switch',
    realignments:'realign', realignment:'realign', realigned:'realign', realigning:'realign',
    changed:'change', changes:'change', changing:'change',
    shifted:'shift', shifts:'shift', shifting:'shift', moved:'move', moves:'move', moving:'move',
    became:'become', becoming:'become', southern:'south', northerners:'north', northern:'north',
    blacks:'black', voters:'voter', voting:'vote', voted:'vote', votes:'vote',
    elections:'election', electoral:'electoral', coalitions:'coalition',
    origins:'origin', founded:'found', founding:'found', formed:'form', formation:'form',
    economic:'economy', economics:'economy', economies:'economy',
    slavery:'slavery', slaves:'slavery', enslaved:'slavery',
    racial:'race', races:'race', civilrights:'civilrights',
    liberals:'liberal', liberalism:'liberal', conservatives:'conservative', conservatism:'conservative',
    women:'woman', workers:'worker', unions:'union', unionized:'union',
    supported:'support', supporting:'support', supports:'support',
    opposed:'oppose', opposing:'oppose', opposition:'oppose', oppositionist:'oppose',
    documents:'document', sources:'source', citations:'citation', records:'record',
    happened:'happen', happenings:'happen', meanings:'meaning', meant:'mean', means:'mean'
  };
  const BROAD = new Set(['party','democratic','republican','politic','american','america','history','change','source','document']);
  const SUBJECT = new Set(['lincoln','black','south','north','civilrights','civilwar','newdeal','reconstruction',
    'goldwater','wallace','nixon','reagan','jackson','slavery','woman','religion','immigrant','hispanic','latino']);
  const list = value => Array.isArray(value) ? value : [];
  const strings = value => Array.isArray(value) ? value.filter(x => typeof x === 'string') : typeof value === 'string' ? [value] : [];
  const unique = values => [...new Set(values)];
  function plain(value) {
    return String(value == null ? '' : value).normalize('NFKD').replace(/[\u0300-\u036f]/g,'')
      .replace(/[\u2018\u2019]/g,"'").toLowerCase();
  }
  function normalized(value) {
    return plain(value)
      .replace(/\bdemocratic[\s-]+republicans?\b/g,' jeffersonian ')
      .replace(/\bafrican[\s-]+americans?\b/g,' black ')
      .replace(/\b(?:gop|grand old party)\b/g,' republican ')
      .replace(/\bdems\b/g,' democratic ')
      .replace(/\babraham\s+lincoln\b/g,' lincoln ')
      .replace(/\bcivil[\s-]+rights\b/g,' civilrights ')
      .replace(/\bcivil[\s-]+war\b/g,' civilwar ')
      .replace(/\bnew[\s-]+deal\b/g,' newdeal ')
      .replace(/\bstates?[\s']+rights\b/g,' statesrights ')
      .replace(/\b(?:party[\s-]+swap|party[\s-]+flip)\b/g,' party switch ')
      .replace(/[^a-z0-9]+/g,' ').trim();
  }
  function tokens(value) {
    return normalized(value).split(/\s+/).filter(w => w && !STOP.has(w)).map(w => {
      if (WORDS[w]) return WORDS[w];
      if (/^[a-z]{5,}ies$/.test(w)) return w.slice(0,-3)+'y';
      if (/^[a-z]{5,}s$/.test(w) && !/(?:ss|us|is)$/.test(w)) return w.slice(0,-1);
      return w;
    });
  }
  const signature = value => tokens(value).join(' ');
  function years(value) { return unique((String(value).match(/\b(?:1[0-9]{3}|2[0-9]{3})\b/g) || []).map(Number)); }
  function sourceKeys(text) {
    const found=[];
    for (const match of String(text || '').matchAll(/\[([^\]]+)\]/g)) found.push(...match[1].split(/[;,]/).map(x=>x.trim()));
    return found;
  }
  function create(config) {
    config=config || {};
    const archive=root.ATLAS_DATA || {};
    const content=archive.content || {};
    const answers=list(config.answers).filter(a=>a && typeof a.question==='string');
    const sources=list(config.sources || content.sources).filter(s=>s && s.id);
    const chapters=list(config.chapters || content.chapters).filter(c=>c && c.title);
    const sourceMap=new Map(sources.map(s=>[String(s.id),s]));
    const canonicalSource=new Map(sources.map(s=>[String(s.id).toLowerCase(),String(s.id)]));
    const knownIds=ids=>unique(list(ids).map(String).filter(id=>sourceMap.has(id)));
    const resolveSources=ids=>knownIds(ids).map(id=>sourceMap.get(id));
    const indexed=answers.map(answer=>{
      const variants=[answer.question,...strings(answer.aliases)].map(text=>({text,key:signature(text),terms:new Set(tokens(text))}));
      const terms=new Set([...variants.flatMap(v=>[...v.terms]),...tokens(strings(answer.keywords).join(' '))]);
      return {answer,variants,terms};
    });
    const df=new Map();
    indexed.forEach(a=>a.terms.forEach(t=>df.set(t,(df.get(t)||0)+1)));
    const weight=t=>Math.log(2+(indexed.length+1)/((df.get(t)||0)+1));
    const total=terms=>[...terms].reduce((sum,t)=>sum+weight(t),0);
    function overlap(query,terms) {
      const matched=query.filter(t=>terms.has(t));
      return {matched,raw:matched.length/Math.max(1,query.length),weighted:total(matched)/Math.max(1,total(query))};
    }
    function rankAnswers(query) {
      const q=unique(tokens(query)), key=signature(query);
      return indexed.map(item=>{
        const all=overlap(q,item.terms);
        let best={raw:0,weighted:0,variant:0,exact:false,phrase:false,matched:[]};
        for (const variant of item.variants) {
          const hit=overlap(q,variant.terms);
          const coverage=total(hit.matched)/Math.max(1,total(variant.terms));
          const exact=Boolean(key && key===variant.key);
          const phrase=Boolean(variant.key && variant.terms.size>=2 && (' '+key+' ').includes(' '+variant.key+' '));
          const candidate={...hit,variant:coverage,exact,phrase};
          const score=x=>x.weighted*3+x.raw+x.variant+(x.exact?7:0)+(x.phrase?1:0);
          if(score(candidate)>score(best))best=candidate;
        }
        const score=best.weighted*4+all.weighted*1.5+best.raw+best.variant+(best.exact?8:0)+(best.phrase?1.2:0);
        return {...item,score,all,best,q};
      }).filter(x=>x.all.matched.length).sort((a,b)=>b.score-a.score || String(a.answer.id).localeCompare(String(b.answer.id)));
    }
    function excerpt(text,max) {
      text=String(text || '').trim();
      if(text.length<=max)return text;
      const cut=text.slice(0,max-1),space=cut.lastIndexOf(' ');
      return cut.slice(0,space>max*.7?space:cut.length)+'\u2026';
    }
    const sourceDocuments=sources.map(source=>{
      const titleTerms=new Set(tokens(source.title+' '+source.id));
      return {source,titleTerms,terms:new Set([...titleTerms,...tokens(source.description || source.citation || '')])};
    });
    const chapterDocuments=chapters.flatMap(chapter=>{
      const titleTerms=new Set(tokens(chapter.title));
      return [chapter.summary,...strings(chapter.body)].filter(Boolean).map(paragraph=>{
        const paragraphIds=knownIds(sourceKeys(paragraph));
        return {chapter,paragraph,titleTerms,terms:new Set([...titleTerms,...tokens(paragraph)]),
          sourceIds:paragraphIds.length?paragraphIds:knownIds(chapter.sourceIds)};
      });
    });
    function fallback(query) {
      const q=unique(tokens(query)), items=[], queryYears=years(query);
      if(!q.length)return [];
      const direct=canonicalSource.get(String(query).trim().toLowerCase());
      for(const doc of sourceDocuments) {
        const {source,titleTerms,terms}=doc, hit=overlap(q,terms),title=overlap(q,titleTerms);
        const idMatch=source.id===direct;
        if(!idMatch && (hit.raw<.45 || hit.matched.length<Math.min(2,q.length)))continue;
        items.push({score:(idMatch?50:0)+hit.weighted*3+title.weighted*2, evidence:{
          title:source.title,excerpt:excerpt(source.description || source.citation || source.title,700),
          sourceIds:[String(source.id)],year:source.year || null
        }});
      }
      for(const doc of chapterDocuments) {
        const {chapter,paragraph,titleTerms,terms}=doc,hit=overlap(q,terms);
        if(hit.raw<.5 || hit.matched.length<Math.min(2,q.length))continue;
        const title=overlap(q,titleTerms),exactYear=queryYears.includes(Number(chapter.year));
        items.push({score:hit.weighted*3+title.weighted+(exactYear?.3:0),evidence:{
          title:chapter.title,excerpt:excerpt(paragraph,900),sourceIds:doc.sourceIds,year:chapter.year || null
        }});
      }
      const used=new Set();
      return items.sort((a,b)=>b.score-a.score).filter(item=>{
        const key=item.evidence.title;
        if(used.has(key))return false;
        used.add(key);return true;
      }).slice(0,5).map(item=>item.evidence);
    }
    function unsupported(query) {
      const text=plain(query), dates=years(query);
      if(dates.some(y=>y>2026))return 'This archive ends on October 29, 2026, and its presidential election results end in 2024. It cannot answer questions about later elections or predict their results.';
      if(/\b2026\b/.test(text)&&/\b(?:results?|winner|won|winning|electoral votes?|prediction|predict)\b/.test(text))return 'The November 2026 midterm election had not occurred at the archive cutoff of October 29, 2026. No 2026 election results or predictions are included.';
      if((/\b(?:current|today|now|present)\b/.test(text)&&/\bpresident\b/.test(text)&&!dates.some(y=>y<=2024)) || /^\s*who\s+is\s+(?:the\s+)?(?:us\s+|u\.s\.\s+|american\s+)?president\s*[?.!]*\s*$/.test(text))return 'This is a historical archive, not a live officeholder service. Its research cutoff is October 29, 2026, and its presidential election results end in 2024. Check a current official government source for the president serving today.';
      if(/\b(?:weather|forecast|temperature|javascript|python|typescript|programming|debug|npm|sql|html|css|recipe|recipes|horoscope)\b/.test(text))return 'This local question guide covers U.S. political parties, elections, and realignment. It cannot provide weather, programming help, or other unrelated services.';
      if(/\b(?:passwords?|credentials?|api\s*keys?|system\s*prompts?|hidden\s*instructions?|access\s*tokens?)\b/.test(text)||/\b(?:reveal|print|show|give)\b.{0,35}\bsecrets?\b/.test(text))return 'The question guide only retrieves the public historical material included in this atlas. It cannot reveal credentials, private data, or internal instructions.';
      if(/\b(?:fabricate|invent|fake|make\s+up)\b.{0,45}\b(?:citation|citations|source|sources|reference|references)\b/.test(text))return 'The atlas does not fabricate citations or sources. Ask for evidence on a historical topic to retrieve the existing source register and archive excerpts.';
      if(dates.length && dates.every(y=>y<1789))return 'The interactive election archive begins in 1789. Try a question about party formation or an election between 1789 and 2024; the historical reading extends to October 29, 2026.';
      return null;
    }
    function negated(query) { return /\b(?:not|never|neither|nothing|nobody|no\s+(?:party|parties|republicans?|democrats?)|isn't|wasn't|weren't|didn't|doesn't|don't|cannot|can't)\b/.test(plain(query)); }
    function direction(query) {
      const text=normalized(query);
      const m=text.match(/\b(?:toward|towards|to|become|became|support|supported|vote for|voting for)\s+(?:the\s+)?(democrats?|democratic|republicans?|republican)\b/);
      return m ? (m[1].startsWith('democrat')?'democratic':'republican') : null;
    }
    function multipleTopics(query,ranked) {
      if(years(query).length>1&&!ranked[0]?.best.exact)return true;
      const pieces=String(query).split(/\b(?:and|or|also|plus)\b|[;?]/i).map(x=>x.trim()).filter(Boolean);
      const leaders=[];
      for(const piece of pieces) {
        const terms=unique(tokens(piece));
        if(terms.length<2&&!terms.some(t=>SUBJECT.has(t)))continue;
        const hits=rankAnswers(piece),top=hits[0];
        if(top && top.best.raw>=.75 && top.all.weighted>=.8 && top.best.matched.some(t=>SUBJECT.has(t)||/^\d{4}$/.test(t)))leaders.push(top.answer.id);
      }
      return new Set(leaders).size>1;
    }
    function ask(input) {
      const query=typeof input==='string'?input.trim():'';
      if(!query)return {kind:'clarify',query:'',candidates:answers.slice(0,5),message:'Enter a historical question, year, person, or source key.'};
      if(query.length>MAX_QUERY)return {kind:'clarify',query:query.slice(0,MAX_QUERY),candidates:[],message:'Please shorten the question to 600 characters or fewer so the guide can match one clear topic.'};
      const block=unsupported(query);
      if(block)return {kind:'unsupported',query,message:block,candidates:[],evidence:[],sources:[]};
      const ranked=rankAnswers(query),top=ranked[0],second=ranked[1];
      const evidence=fallback(query);
      const candidates=ranked.filter(x=>x.all.raw>=.4||x.best.exact).slice(0,5).map(x=>x.answer);
      const base={query,candidates,evidence,sources:resolveSources(evidence.flatMap(e=>e.sourceIds))};
      if(!top)return {...base,kind:evidence.length?'results':'unsupported',message:evidence.length?'These archive excerpts and source entries may help. No curated answer closely matches this wording.':'No close match was found in this archive. Try a specific election year, person, issue, or source key; the guide covers 1789 through October 29, 2026.'};
      const negative=negated(query),compound=multipleTopics(query,ranked);
      const target=direction(query),expected=direction(top.answer.question);
      const conflict=Boolean(target&&expected&&target!==expected);
      const broad=top.q.every(t=>BROAD.has(t));
      const uniqueExact=top.best.exact&&(!second?.best.exact);
      const margin=!second||top.score-second.score>=.65;
      const strong=top.q.length>=2&&top.best.raw>=.75&&top.best.weighted>=.82&&top.best.variant>=.5&&top.all.raw>=.8&&top.all.weighted>=.85&&margin;
      if(!negative&&!compound&&!conflict&&!broad&&(uniqueExact||strong)) {
        return {kind:'answer',query,answer:top.answer,candidates:candidates.filter(a=>a.id!==top.answer.id).slice(0,3),
          evidence:[],sources:resolveSources(top.answer.sourceIds),message:'This is a curated answer from the atlas, with its listed sources.'};
      }
      if(negative||compound||conflict)return {...base,kind:'clarify',message:compound?'Your question appears to combine topics or dates. Choose a related question below, or ask about one issue at a time.':conflict?'The change described in your question differs from the closest prepared explanation. Choose a related question or review the evidence to check the distinction.':'That wording may involve an assumption the atlas cannot confirm directly. Choose a related question or review the evidence below.'};
      return {...base,kind:candidates.length?'results':evidence.length?'results':'unsupported',message:candidates.length?'These related questions and archive excerpts are the closest matches. Choose a question to read its complete curated answer.':evidence.length?'These are matching archive excerpts and source entries, not a generated answer.':'No close archive match was found. Try a specific year, person, issue, or source key.'};
    }
    return Object.freeze({ask});
  }
  const api=Object.freeze({create,MAX_QUERY_LENGTH:MAX_QUERY});
  root.AtlasQuestions=api;
  if(typeof module==='object'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:typeof globalThis!=='undefined'?globalThis:this);
