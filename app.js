const CATEGORIES = [
{n:'Image & Visual Creation',i:'✦',d:'Create images, scenes, illustrations, products and visual concepts.',s:[
 ['Photography',['/photoreal','/editorial','/documentary','/fashion','/portrait','/product']],
 ['Illustration',['/illustration','/anime','/comic','/watercolor','/oilpaint','/sketch']],
 ['Composition',['/cinematic','/minimal','/dynamic','/balanced','/symmetry','/professional']],
 ['Formats',['/9:16','/16:9','/1:1','/4:5','/3:4','/vertical']]
]},
{n:'Image Editing & Restoration',i:'◈',d:'Repair, enhance, clean, upscale and transform existing images.',s:[
 ['Quality',['/hdreal','/4k','/8k','/enhance','/quality','/sharpen','/details','/clarity','/deblur','/denoise','/upscale','/superresolution','/upscaleclean','/upscalesharp','/upscalenatural','/upscalephoto','/upscaleprint','/upscaleweb','/upscalemobile','/upscaleportrait','/upscaleface','/upscalefine','/upscaledetail','/microdetail','/finerdetails','/texture','/texturesharp','/textureclean','/edgeclean','/edgepreserve','/lineclarity','/localcontrast','/globalcontrast','/dynamicrange','/highlightrecover','/shadowrecover','/dehaze','/defringe','/chromaticaberration','/lenscorrection','/perspectivefix','/distortionfix','/noiseprofile','/grainremove','/compressionfix','/jpegfix','/artifactremove','/bandingfix','/colorcastfix','/whitebalancefix','/exposurefix','/focusfix','/motiondeblur','/lensdeblur','/shakefix','/softnessfix','/detailrecover','/naturalsharpen','/smartsharpen','/clarityboost','/cleanedges','/smoothgradients','/skintexture','/hairdetail','/fabricdetail','/metallicdetail','/glassdetail','/printready','/webready','/socialready','/archival','/masterquality','/finalpolish']],
 ['Restoration',['/restore','/repair','/reconstruct','/colorize','/natural','/clean']],
 ['Background',['/backgroundclean','/blurbackground','/replacebackground','/removebackground','/extendbackground','/declutter']],
 ['Objects',['/removeobject','/removepeople','/cleanup','/erase','/inpaint','/reposition']]
]},
{n:'Face, Identity & People',i:'◉',d:'Facial enhancement, identity consistency, skin and subject preservation.',s:[
 ['Face Enhancement',['/facefix','/faceenhance','/faceclear','/eyes','/teeth','/skin','/skinfix']],
 ['Identity',['/identitylock','/faceconsistent','/referenceface','/preserveface','/sameface','/identity']],
 ['Preservation',['/preservepose','/preserveclothes','/preservedetails','/subtle','/onlyface']],
 ['Portrait Control',['/portrait','/closeup','/headshot','/beauty','/naturalface']]
]},
{n:'Lighting, Color & Atmosphere',i:'☼',d:'Relight scenes and control color, mood, time of day and atmosphere.',s:[
 ['Lighting',['/relight','/softlight','/dramaticlight','/studio','/rimlight','/hardlight']],
 ['Color',['/naturalcolor','/vivid','/cinematiccolor','/warm','/cool','/bw']],
 ['Time & Weather',['/goldenhour','/sunset','/sunrise','/daylight','/night','/rain','/fog','/overcast']],
 ['Mood',['/moody','/bright','/dark','/cleanlook','/naturalambient']]
]},
{n:'Camera, Motion & Video',i:'▷',d:'Control framing, perspective, movement, stabilization and animation.',s:[
 ['Camera',['/reframe','/crop','/center','/wideangle','/lowangle','/highangle','/overhead','/pov']],
 ['Motion',['/antishake','/walking','/motion','/freeze','/motionblur','/stabilized']],
 ['Animation',['/animate','/animateparts','/smoothmotion','/loop','/slowmotion']],
 ['Camera Moves',['/pan','/tilt','/zoom','/dolly','/orbit','/drone']]
]},
{n:'Design, Branding & UI',i:'⬡',d:'Logos, brand systems, posters, banners, interfaces and visual identity.',s:[
 ['Logo',['/logoclean','/logorecreate','/logooutline','/brandmark','/vectorlook','/icon']],
 ['Brand Style',['/monochrome','/blackredblue','/whiteaccent','/transparent','/premium','/luxury']],
 ['Graphic Design',['/poster','/banner','/typography','/layout','/visualhierarchy','/minimal']],
 ['UI & Screens',['/ui','/androidportrait','/mobile','/desktop','/splash','/splashscreen']]
]},
{n:'Architecture & Floorplans',i:'⌗',d:'Space planning, floorplans, interiors, exteriors and architectural visualization.',s:[
 ['Planning',['/floorplan','/layout','/dimension','/roomlabel','/circulation','/zoning']],
 ['Interior',['/interior','/interiorreal','/relight','/materials','/furniture','/staging']],
 ['Exterior',['/exterior','/facade','/landscape','/siteplan','/aerialplan']],
 ['3D',['/3dplan','/3d','/isometric','/cutaway','/walkthrough']]
]},
{n:'Writing & Content',i:'Aa',d:'Create, rewrite, edit and structure long- and short-form content.',s:[
 ['Creative Writing',['/write','/story','/character','/dialogue','/scene','/worldbuild']],
 ['Copywriting',['/copywrite','/headline','/hook','/cta','/adcopy','/productcopy']],
 ['Editing',['/rewrite','/polish','/proofread','/simplify','/expand','/shorten']],
 ['Structure',['/outline','/summarize','/bulletize','/format','/tone','/style']]
]},
{n:'Coding & Development',i:'</>',d:'Generate, explain, refactor and architect software across stacks.',s:[
 ['Generation',['/code','/implement','/scaffold','/component','/api','/database']],
 ['Architecture',['/architect','/designpattern','/modularize','/scale','/security','/performance']],
 ['Frontend',['/html','/css','/javascript','/react','/responsive','/accessibility']],
 ['Backend',['/node','/python','/sql','/rest','/auth','/deployment']]
]},
{n:'Debugging & Testing',i:'⚙',d:'Find causes, reproduce failures, test fixes and improve reliability.',s:[
 ['Debug',['/debug','/trace','/diagnose','/rootcause','/reproduce','/isolate']],
 ['Fix',['/fix','/patch','/repaircode','/hotfix','/regressionfix']],
 ['Testing',['/test','/unittest','/integrationtest','/e2e','/edgecases','/coverage']],
 ['Review',['/review','/audit','/lint','/qualitycheck','/securityreview']]
]},
{n:'Research & Deep Reasoning',i:'◌',d:'Investigate questions, compare evidence, reason through complex problems and synthesize findings.',s:[
 ['Research',['/research','/investigate','/sources','/evidence','/verify','/factcheck']],
 ['Deep Reasoning',['/deepthink','/reason','/analyze','/decompose','/compare','/tradeoffs']],
 ['Synthesis',['/synthesize','/summary','/brief','/insights','/conclusion']],
 ['Decision Support',['/proscons','/decision','/risk','/scenario','/recommend']]
]},
{n:'Learning & Education',i:'∑',d:'Turn difficult topics into lessons, practice, explanations and study systems.',s:[
 ['Explain',['/explain','/eli5','/stepbystep','/analogy','/example','/intuition']],
 ['Study',['/studyplan','/flashcards','/quiz','/practice','/revision','/memorize']],
 ['Teaching',['/lesson','/curriculum','/worksheet','/rubric','/feedback']],
 ['Skills',['/coach','/mentor','/drill','/challenge','/project']]
]},
{n:'Productivity & Planning',i:'✓',d:'Plan work, organize tasks, prioritize goals and build repeatable systems.',s:[
 ['Planning',['/plan','/roadmap','/timeline','/milestones','/schedule','/prioritize']],
 ['Tasks',['/tasks','/checklist','/breakdown','/nextsteps','/batch','/delegate']],
 ['Notes',['/notes','/organize','/extract','/actionitems','/meetingnotes']],
 ['Focus',['/focus','/deepwork','/simplify','/timebox','/routine']]
]},
{n:'Business & Strategy',i:'◇',d:'Strategy, market thinking, operations, product and business communication.',s:[
 ['Strategy',['/strategy','/swot','/positioning','/competitors','/moat','/goals']],
 ['Marketing',['/marketing','/campaign','/audience','/persona','/funnel','/contentplan']],
 ['Product',['/product','/features','/userstories','/prd','/roadmap','/prioritize']],
 ['Operations',['/process','/sop','/workflow','/kpi','/metrics','/optimize']]
]},
{n:'Data & Analytics',i:'▦',d:'Clean data, analyze patterns, design metrics and communicate findings.',s:[
 ['Analysis',['/analyze','/trend','/correlation','/segment','/forecast','/benchmark']],
 ['Data Cleaning',['/clean','/normalize','/dedupe','/validate','/transform']],
 ['SQL & Code',['/sql','/query','/pandas','/python','/pipeline']],
 ['Reporting',['/dashboard','/report','/chart','/insights','/executivesummary']]
]},
{n:'Documents & Files',i:'▤',d:'Extract, summarize, convert and structure information from documents and files.',s:[
 ['Documents',['/summarize','/extract','/compare','/review','/outline','/classify']],
 ['PDF & Reports',['/pdf','/report','/citation','/tableextract','/keypoints']],
 ['Spreadsheets',['/spreadsheet','/formula','/cleanup','/pivot','/csv','/xlsx']],
 ['Knowledge Base',['/index','/tag','/organize','/search','/faq']]
]},
{n:'Web & Search Workflows',i:'⌕',d:'Plan web research, source discovery, browsing tasks and evidence-backed answers.',s:[
 ['Search',['/search','/find','/discover','/query','/keywords','/sources']],
 ['Web Research',['/webresearch','/browse','/extract','/comparepages','/monitor']],
 ['Verification',['/verify','/crosscheck','/primarysource','/citation','/freshness']],
 ['Summaries',['/websummary','/brief','/digest','/keyfindings']]
]},
{n:'Communication & Social',i:'✉',d:'Messages, emails, presentations, social posts and audience-specific communication.',s:[
 ['Email',['/email','/reply','/followup','/formal','/concise','/professional']],
 ['Social',['/social','/caption','/thread','/post','/hashtag','/hook']],
 ['Presentation',['/slides','/presentation','/speakernotes','/pitch','/storyline']],
 ['Negotiation',['/negotiate','/persuade','/objection','/counteroffer','/diplomatic']]
]},
{n:'Translation & Language',i:'文',d:'Translate, localize, simplify and adapt language for different audiences.',s:[
 ['Translation',['/translate','/literal','/natural','/bilingual','/localize']],
 ['Language Learning',['/vocab','/grammar','/pronunciation','/conversation','/correction']],
 ['Tone',['/formal','/casual','/friendly','/academic','/native']],
 ['Accessibility',['/simplify','/plainlanguage','/readable','/alttext']]
]},
{n:'Prompt Engineering & Meta',i:'⌘',d:'Improve instructions, build reusable prompts and control output structure.',s:[
 ['Prompt Design',['/prompt','/promptfix','/promptrefine','/promptcompact','/promptexpand']],
 ['Roles & Context',['/role','/persona','/context','/constraints','/instructions']],
 ['Output Control',['/format','/json','/table','/schema','/checklist','/template']],
 ['Quality Control',['/critique','/selfcheck','/verify','/assumptions','/edgecases']]
]},
{n:'Automation & Workflows',i:'↻',d:'Turn repeated work into clear sequences, checklists and tool-ready workflows.',s:[
 ['Workflow',['/workflow','/pipeline','/sequence','/handoff','/trigger','/condition']],
 ['Automation',['/automate','/batch','/repeat','/schedule','/watch','/notify']],
 ['Integration',['/api','/webhook','/connector','/import','/export','/sync']],
 ['Operations',['/runbook','/sop','/monitor','/fallback','/logging']]
]},
{n:'Personalization & Utility',i:'◆',d:'Adapt outputs to a preferred style, audience, constraints and reusable command recipes.',s:[
 ['Personalize',['/personalize','/preferences','/remember','/consistent','/customize']],
 ['Audience',['/beginner','/expert','/client','/childsafe','/executive']],
 ['Constraints',['/concise','/detailed','/strict','/creative','/neutral','/noextras']],
 ['Recipes',['/combo','/recipe','/workflow','/stack','/finalcheck']]
]}
];

// Expand the library into a large, browsable command catalog. These are custom shorthand
// directives; each variant is intentionally distinct so every subcategory has 64+ entries.
const VARIANTS = [
 'precise','clean','natural','refined','professional','premium','subtle','strong','balanced','detailed',
 'advanced','simple','smart','controlled','optimized','efficient','accurate','consistent','polished','final',
 'quick','deep','thorough','minimal','maximum','soft','bold','sharp','smooth','stable',
 'highquality','lowartifact','highdetail','fine','micro','macro','local','global','adaptive','contextual',
 'realistic','cinematic','modern','classic','technical','creative','editorial','production','studio','portable',
 'safe','robust','reliable','scalable','maintainable','accessible','responsive','structured','compact','expanded',
 'focused','cleanoutput','bestpractice','errorresistant','edgeaware','detailaware','qualityfirst','finalpass','master','pro'
];
for (const cat of CATEGORIES) {
  for (const group of cat.s) {
    const codes = group[1];
    const seen = new Set(codes);
    const seeds = [...codes];
    let vi = 0;
    // Keep adding meaningful modifier variants until each subcategory reaches 64.
    while (codes.length < 64) {
      const seed = seeds[(codes.length - seeds.length + seeds.length) % seeds.length];
      const variant = VARIANTS[vi++ % VARIANTS.length];
      const candidate = seed + '-' + variant;
      if (!seen.has(candidate)) { seen.add(candidate); codes.push(candidate); }
    }
  }
}

const PAGE_SIZE=12; // Paginated library; subcategories may contain 50+ commands.
let selectedCategory=0, selectedSub=-1, page=1, search='', filter='all';
function loadFavorites(){
 // Defensive: localStorage can hold malformed JSON (corrupted write, tampering,
 // a future format change) or valid JSON of the wrong shape. Either previously
 // threw uncaught at script load and blanked the entire page.
 try {
  const raw=JSON.parse(localStorage.getItem('gptCodesFavoritesV4')||'[]');
  return Array.isArray(raw)?raw.filter(x=>typeof x==='string'):[];
 } catch { return []; }
}
let favorites=loadFavorites();
let builderSelection=[];
const flat=()=>CATEGORIES.flatMap(c=>c.s.flatMap(([sub,codes])=>codes.map(command=>({command,desc:describe(command),category:c.n,sub,icon:c.i}))));
function describe(cmd){const body=cmd.startsWith('/')?cmd.slice(1):cmd;const x=body.replaceAll('-',' ');return x.charAt(0).toUpperCase()+x.slice(1)+' workflow directive';}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
// JSON.stringify() only escapes double-quotes/backslashes, never a single quote — so
// interpolating it straight into a single-quoted onclick='...' attribute lets any value
// containing a ' break out of the attribute and inject arbitrary markup/JS. HTML-escaping
// the JSON string closes that: the browser decodes entities into the JS source *after*
// parsing the attribute boundary, so the embedded JSON string arrives intact.
function attr(v){return esc(JSON.stringify(v));}
function currentCategory(){return CATEGORIES[selectedCategory];}
function currentItems(){
 let items;
 // A category filter (or a text search) queries the complete archive, independent of
 // whichever category is currently open for browsing — previously the filter was applied
 // on top of the already-narrowed browse-mode list, so picking a different category's
 // filter chip while browsing another category silently produced zero results.
 if(search||filter!=='all'){
  items=flat();
  if(search){const q=search.toLowerCase();items=items.filter(x=>(x.command+' '+x.category+' '+x.sub+' '+x.desc).toLowerCase().includes(q));}
 } else {
  const c=currentCategory(); const groups=selectedSub===-1?c.s:[c.s[selectedSub]]; items=groups.flatMap(([sub,codes])=>codes.map(command=>({command,desc:describe(command),category:c.n,sub,icon:c.i})));
 }
 if(filter!=='all'){ const fc=CATEGORIES[Number(filter.slice(1))]?.n; items=items.filter(x=>x.category===fc); }
 return items;
}
function saveFav(){try{localStorage.setItem('gptCodesFavoritesV4',JSON.stringify(favorites));}catch{/* storage unavailable or full — favorites still work for this session */}document.getElementById('favCountNav').textContent=favorites.length;}
function toast(t){const e=document.getElementById('toast');e.textContent=t;e.classList.add('show');clearTimeout(window.tt);window.tt=setTimeout(()=>e.classList.remove('show'),1500);}
async function copyText(t){try{await navigator.clipboard.writeText(t);toast('Copied to clipboard');}catch{toast('Copy unavailable');}}
function toggleFavorite(cmd){favorites=favorites.includes(cmd)?favorites.filter(x=>x!==cmd):[...favorites,cmd];saveFav();renderCodes();renderFavorites();toast(favorites.includes(cmd)?'Added to favorites':'Removed from favorites');}
function selectCategory(i){selectedCategory=i;selectedSub=-1;page=1;search='';filter='all';document.getElementById('globalSearch').value='';renderAll();document.getElementById('library').scrollIntoView({behavior:'smooth'});}
function selectSub(i){selectedSub=i;page=1;renderCodes();}
function renderCategories(){document.getElementById('categoryGrid').innerHTML=CATEGORIES.map((c,i)=>`<article class="categoryCard ${i===selectedCategory?'selected':''}" onclick="selectCategory(${i})"><div class="categoryTop"><span class="categoryIcon">${c.i}</span><span class="categoryIndex">${String(i+1).padStart(2,'0')}</span></div><h3>${esc(c.n)}</h3><p>${esc(c.d)}</p><footer><b>${c.s.reduce((a,x)=>a+x[1].length,0)}</b> codes <span>•</span> <b>${c.s.length}</b> groups</footer></article>`).join('');}
function renderFilters(){document.getElementById('filterBar').innerHTML=[['all','All'],...CATEGORIES.map((c,i)=>['c'+i,c.n])].map(([v,t])=>`<button class="filterChip ${filter===v?'active':''}" onclick="setFilter('${v}')">${esc(t)}</button>`).join('');}
function setFilter(v){filter=v;page=1;renderFilters();renderCodes();}
function renderSubcategories(){const c=currentCategory();document.getElementById('subCategoryBar').innerHTML=`<button class="subChip ${selectedSub===-1?'active':''}" onclick="selectSearchMode()">All in ${esc(c.n)}</button>`+c.s.map((x,i)=>`<button class="subChip ${i===selectedSub?'active':''}" onclick="selectSub(${i})"><span>${esc(x[0])}</span><em>${x[1].length}</em></button>`).join('');}
function selectSearchMode(){selectedSub=-1;search='';document.getElementById('globalSearch').value='';page=1;renderCodes();}
function renderCodes(){
 const items=currentItems();const totalPages=Math.max(1,Math.ceil(items.length/PAGE_SIZE));if(page>totalPages)page=totalPages;const shown=items.slice((page-1)*PAGE_SIZE,page*PAGE_SIZE);const c=currentCategory();
 const isSearch=!!search||filter!=='all';const filterCat=filter!=='all'?CATEGORIES[Number(filter.slice(1))]:null;
 // Subcategory tabs belong to the single category currently open for browsing; hide them
 // whenever the view is instead showing archive-wide search/filter results so they don't
 // point at the wrong category's subcategories.
 document.getElementById('subCategoryBar').style.display=isSearch?'none':'';
 if(!isSearch) renderSubcategories();
 const info=isSearch?(filterCat||{i:'⌕',n:'Search results',d:'Matching commands from across the entire archive.',s:[]}):c;
 document.getElementById('libraryHeading').textContent=search?'Search results':(filterCat?filterCat.n:c.n);
 document.getElementById('resultMeta').textContent=`${items.length} command${items.length===1?'':'s'} • page ${page} of ${totalPages}`;
 document.getElementById('sideIcon').textContent=info.i;document.getElementById('sideTitle').textContent=info.n;document.getElementById('sideDescription').textContent=info.d;
 document.getElementById('sideCodeCount').textContent=isSearch?items.length:c.s.reduce((a,x)=>a+x[1].length,0);
 document.getElementById('sideSubCount').textContent=isSearch?new Set(items.map(x=>x.sub)).size:c.s.length;
 document.getElementById('listTitle').textContent=isSearch?'MATCHING COMMANDS':(selectedSub===-1?'ALL CODES':c.s[selectedSub][0].toUpperCase());document.getElementById('listCount').textContent=`${items.length} total`;
 const mixedCategories=isSearch&&filter==='all';
 const list=document.getElementById('codeList');document.getElementById('noResults').classList.toggle('hidden',shown.length!==0);list.innerHTML=shown.map(x=>`<div class="codeRow"><div class="codeMain"><span class="command">${esc(x.command)}</span><span class="description">${esc(x.desc)}</span></div><span class="codeGroup">${mixedCategories?esc(x.category+' / '+x.sub):esc(x.sub)}</span><button class="rowButton" onclick='copyText(${attr(x.command)})' title="Copy">▣</button><button class="rowButton ${favorites.includes(x.command)?'saved':''}" onclick='toggleFavorite(${attr(x.command)})' title="Favorite">♡</button></div>`).join('');
 renderPagination(totalPages);
 document.getElementById('clearSearch').style.display=search?'block':'none';
}
function renderPagination(total){const p=document.getElementById('pagination');if(total<=1){p.innerHTML='';return}let out=`<button ${page===1?'disabled':''} onclick="goPage(${page-1})">‹</button>`;const start=Math.max(1,Math.min(page-2,total-4)),end=Math.min(total,start+4);for(let i=start;i<=end;i++)out+=`<button class="${i===page?'active':''}" onclick="goPage(${i})">${i}</button>`;out+=`<button ${page===total?'disabled':''} onclick="goPage(${page+1})">›</button>`;p.innerHTML=out;}
function goPage(p){page=p;renderCodes();document.getElementById('library').scrollIntoView({behavior:'smooth',block:'start'});}
function renderFavorites(){const box=document.getElementById('favoriteList');if(!favorites.length){box.innerHTML='<div class="emptyFavorites">No favorites yet. Tap ♡ on any command to save it here.</div>';return}const lookup=new Map(flat().map(x=>[x.command,x]));box.innerHTML=favorites.map(cmd=>{const x=lookup.get(cmd);if(!x)return '';return `<div class="codeRow"><div class="codeMain"><span class="command">${esc(x.command)}</span><span class="description">${esc(x.desc)} • ${esc(x.category)} / ${esc(x.sub)}</span></div><button class="rowButton" onclick='copyText(${attr(x.command)})'>▣</button><button class="rowButton saved" onclick='toggleFavorite(${attr(x.command)})'>♥</button></div>`}).join('');}
function copyVisibleCodes(){const items=currentItems().slice((page-1)*PAGE_SIZE,page*PAGE_SIZE);if(!items.length){toast('Nothing to copy');return}copyText(items.map(x=>x.command).join(' '));}
function showOnlyFavorites(){document.getElementById('favorites').scrollIntoView({behavior:'smooth'});renderFavorites();}
function toggleFilters(){document.getElementById('filterBar').classList.toggle('collapsed');}
function toggleMobileMenu(){document.getElementById('mobileMenu').classList.toggle('open');}
let builderCategory=0, builderSub=-1, builderQuery='';
function openBuilder(){builderCategory=selectedCategory;builderSub=-1;builderQuery='';const bs=document.getElementById('builderSearch');if(bs)bs.value='';populateBuilderCategorySelect();renderBuilderSubBar();buildChoices();document.getElementById('builderDialog').showModal();}
function populateBuilderCategorySelect(){document.getElementById('builderCategorySelect').innerHTML=CATEGORIES.map((c,i)=>`<option value="${i}" ${i===builderCategory?'selected':''}>${esc(c.i)} ${esc(c.n)}</option>`).join('');}
function builderSelectCategory(v){builderCategory=Number(v);builderSub=-1;renderBuilderSubBar();buildChoices();}
function renderBuilderSubBar(){const c=CATEGORIES[builderCategory];document.getElementById('builderSubBar').innerHTML=`<button class="subChip ${builderSub===-1?'active':''}" onclick="builderSelectSub(-1)">All in ${esc(c.n)}</button>`+c.s.map((x,i)=>`<button class="subChip ${i===builderSub?'active':''}" onclick="builderSelectSub(${i})"><span>${esc(x[0])}</span><em>${x[1].length}</em></button>`).join('');}
function builderSelectSub(i){builderSub=i;renderBuilderSubBar();buildChoices();}
function builderSearchInput(v){builderQuery=v.trim().toLowerCase();buildChoices();}
function builderPool(){const c=CATEGORIES[builderCategory];const groups=builderSub===-1?c.s:[c.s[builderSub]];let items=groups.flatMap(([sub,codes])=>codes.map(command=>({command,sub})));if(builderQuery)items=items.filter(x=>x.command.toLowerCase().includes(builderQuery));return items;}
function buildChoices(){
 const pool=builderPool();const box=document.getElementById('builderChoices');
 box.innerHTML=pool.length?pool.map(x=>`<button class="builderChip ${builderSelection.includes(x.command)?'active':''}" onclick='toggleBuilder(${attr(x.command)})' title="${esc(x.sub)}">${esc(x.command)}</button>`).join(''):'<div class="builderEmpty">No commands match this category.</div>';
 renderBuilderSelected();
}
function toggleBuilder(c){builderSelection=builderSelection.includes(c)?builderSelection.filter(x=>x!==c):[...builderSelection,c];buildChoices();}
function removeBuilderItem(c){builderSelection=builderSelection.filter(x=>x!==c);buildChoices();}
function clearBuilder(){if(!builderSelection.length)return;builderSelection=[];buildChoices();toast('Builder cleared');}
function renderBuilderSelected(){
 const box=document.getElementById('builderSelected');const out=document.getElementById('builderOutputText');const count=document.getElementById('builderSelectedCount');
 if(count)count.textContent=builderSelection.length;
 if(!builderSelection.length){box.innerHTML='<div class="builderEmptySelected">No commands selected yet — tap any code above to add it.</div>';out.textContent='Choose commands above…';return}
 box.innerHTML=builderSelection.map(c=>`<span class="builderTag"><span>${esc(c)}</span><button onclick='removeBuilderItem(${attr(c)})' title="Remove">×</button></span>`).join('');
 out.textContent=builderSelection.join(' ');
}
function copyBuilder(){if(!builderSelection.length){toast('Choose at least one command');return}copyText(builderSelection.join(' '));}
function closeDialog(id){document.getElementById(id).close();}
function openPremium(){document.getElementById('premiumDialog').showModal();}
function renderAll(){renderCategories();renderFilters();renderCodes();renderFavorites();}

document.getElementById('globalSearch').addEventListener('input',e=>{search=e.target.value.trim();page=1;renderCodes();});
document.getElementById('clearSearch').addEventListener('click',()=>{search='';document.getElementById('globalSearch').value='';page=1;renderCodes();});
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();document.getElementById('globalSearch').focus()}if(e.key==='Escape')document.querySelectorAll('dialog[open]').forEach(d=>d.close());});
const all=flat();document.getElementById('heroCategoryCount').textContent=CATEGORIES.length;document.getElementById('heroCodeCount').textContent=all.length+'+';document.getElementById('heroSubCount').textContent=CATEGORIES.reduce((a,c)=>a+c.s.length,0)+'+';saveFav();renderAll();

if(window.THREE){const m=document.getElementById('threeHero'),scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(45,1,.1,100);camera.position.z=6;const r=new THREE.WebGLRenderer({alpha:true,antialias:true});r.setPixelRatio(Math.min(devicePixelRatio||1,2));m.appendChild(r.domElement);const g=new THREE.Group();scene.add(g);g.add(new THREE.Mesh(new THREE.IcosahedronGeometry(1.08,3),new THREE.MeshStandardMaterial({color:0x111313,metalness:.9,roughness:.2})));const gold=new THREE.MeshBasicMaterial({color:0xd8a93e,transparent:true,opacity:.7});const a=new THREE.Mesh(new THREE.TorusGeometry(1.55,.018,8,180),gold);a.rotation.x=1;g.add(a);const b=new THREE.Mesh(new THREE.TorusGeometry(1.9,.012,8,180),gold);b.rotation.x=.45;b.rotation.y=.9;g.add(b);scene.add(new THREE.AmbientLight(0x80683a,1.1));const p=new THREE.PointLight(0xf0bb4b,14,8);p.position.set(2,2,4);scene.add(p);function resize(){r.setSize(m.clientWidth,m.clientHeight);camera.aspect=m.clientWidth/m.clientHeight;camera.updateProjectionMatrix()}resize();addEventListener('resize',resize);(function tick(){requestAnimationFrame(tick);g.rotation.y+=.002;g.rotation.x=Math.sin(performance.now()*.0003)*.06;a.rotation.z+=.005;b.rotation.z-=.003; r.render(scene,camera)})();}
]},
{n:'Architecture & Floorplans',i:'⌗',d:'Space planning, floorplans, interiors, exteriors and architectural visualization.',s:[
 ['Planning',['/floorplan','/layout','/dimension','/roomlabel','/circulation','/zoning']],
 ['Interior',['/interior','/interiorreal','/relight','/materials','/furniture','/staging']],
 ['Exterior',['/exterior','/facade','/landscape','/siteplan','/aerialplan']],
 ['3D',['/3dplan','/3d','/isometric','/cutaway','/walkthrough']]
]},
{n:'Writing & Content',i:'Aa',d:'Create, rewrite, edit and structure long- and short-form content.',s:[
 ['Creative Writing',['/write','/story','/character','/dialogue','/scene','/worldbuild']],
 ['Copywriting',['/copywrite','/headline','/hook','/cta','/adcopy','/productcopy']],
 ['Editing',['/rewrite','/polish','/proofread','/simplify','/expand','/shorten']],
 ['Structure',['/outline','/summarize','/bulletize','/format','/tone','/style']]
]},
{n:'Coding & Development',i:'</>',d:'Generate, explain, refactor and architect software across stacks.',s:[
 ['Generation',['/code','/implement','/scaffold','/component','/api','/database']],
 ['Architecture',['/architect','/designpattern','/modularize','/scale','/security','/performance']],
 ['Frontend',['/html','/css','/javascript','/react','/responsive','/accessibility']],
 ['Backend',['/node','/python','/sql','/rest','/auth','/deployment']]
]},
{n:'Debugging & Testing',i:'⚙',d:'Find causes, reproduce failures, test fixes and improve reliability.',s:[
 ['Debug',['/debug','/trace','/diagnose','/rootcause','/reproduce','/isolate']],
 ['Fix',['/fix','/patch','/repaircode','/hotfix','/regressionfix']],
 ['Testing',['/test','/unittest','/integrationtest','/e2e','/edgecases','/coverage']],
 ['Review',['/review','/audit','/lint','/qualitycheck','/securityreview']]
]},
{n:'Research & Deep Reasoning',i:'◌',d:'Investigate questions, compare evidence, reason through complex problems and synthesize findings.',s:[
 ['Research',['/research','/investigate','/sources','/evidence','/verify','/factcheck']],
 ['Deep Reasoning',['/deepthink','/reason','/analyze','/decompose','/compare','/tradeoffs']],
 ['Synthesis',['/synthesize','/summary','/brief','/insights','/conclusion']],
 ['Decision Support',['/proscons','/decision','/risk','/scenario','/recommend']]
]},
{n:'Learning & Education',i:'∑',d:'Turn difficult topics into lessons, practice, explanations and study systems.',s:[
 ['Explain',['/explain','/eli5','/stepbystep','/analogy','/example','/intuition']],
 ['Study',['/studyplan','/flashcards','/quiz','/practice','/revision','/memorize']],
 ['Teaching',['/lesson','/curriculum','/worksheet','/rubric','/feedback']],
 ['Skills',['/coach','/mentor','/drill','/challenge','/project']]
]},
{n:'Productivity & Planning',i:'✓',d:'Plan work, organize tasks, prioritize goals and build repeatable systems.',s:[
 ['Planning',['/plan','/roadmap','/timeline','/milestones','/schedule','/prioritize']],
 ['Tasks',['/tasks','/checklist','/breakdown','/nextsteps','/batch','/delegate']],
 ['Notes',['/notes','/organize','/extract','/actionitems','/meetingnotes']],
 ['Focus',['/focus','/deepwork','/simplify','/timebox','/routine']]
]},
{n:'Business & Strategy',i:'◇',d:'Strategy, market thinking, operations, product and business communication.',s:[
 ['Strategy',['/strategy','/swot','/positioning','/competitors','/moat','/goals']],
 ['Marketing',['/marketing','/campaign','/audience','/persona','/funnel','/contentplan']],
 ['Product',['/product','/features','/userstories','/prd','/roadmap','/prioritize']],
 ['Operations',['/process','/sop','/workflow','/kpi','/metrics','/optimize']]
]},
{n:'Data & Analytics',i:'▦',d:'Clean data, analyze patterns, design metrics and communicate findings.',s:[
 ['Analysis',['/analyze','/trend','/correlation','/segment','/forecast','/benchmark']],
 ['Data Cleaning',['/clean','/normalize','/dedupe','/validate','/transform']],
 ['SQL & Code',['/sql','/query','/pandas','/python','/pipeline']],
 ['Reporting',['/dashboard','/report','/chart','/insights','/executivesummary']]
]},
{n:'Documents & Files',i:'▤',d:'Extract, summarize, convert and structure information from documents and files.',s:[
 ['Documents',['/summarize','/extract','/compare','/review','/outline','/classify']],
 ['PDF & Reports',['/pdf','/report','/citation','/tableextract','/keypoints']],
 ['Spreadsheets',['/spreadsheet','/formula','/cleanup','/pivot','/csv','/xlsx']],
 ['Knowledge Base',['/index','/tag','/organize','/search','/faq']]
]},
{n:'Web & Search Workflows',i:'⌕',d:'Plan web research, source discovery, browsing tasks and evidence-backed answers.',s:[
 ['Search',['/search','/find','/discover','/query','/keywords','/sources']],
 ['Web Research',['/webresearch','/browse','/extract','/comparepages','/monitor']],
 ['Verification',['/verify','/crosscheck','/primarysource','/citation','/freshness']],
 ['Summaries',['/websummary','/brief','/digest','/keyfindings']]
]},
{n:'Communication & Social',i:'✉',d:'Messages, emails, presentations, social posts and audience-specific communication.',s:[
 ['Email',['/email','/reply','/followup','/formal','/concise','/professional']],
 ['Social',['/social','/caption','/thread','/post','/hashtag','/hook']],
 ['Presentation',['/slides','/presentation','/speakernotes','/pitch','/storyline']],
 ['Negotiation',['/negotiate','/persuade','/objection','/counteroffer','/diplomatic']]
]},
{n:'Translation & Language',i:'文',d:'Translate, localize, simplify and adapt language for different audiences.',s:[
 ['Translation',['/translate','/literal','/natural','/bilingual','/localize']],
 ['Language Learning',['/vocab','/grammar','/pronunciation','/conversation','/correction']],
 ['Tone',['/formal','/casual','/friendly','/academic','/native']],
 ['Accessibility',['/simplify','/plainlanguage','/readable','/alttext']]
]},
{n:'Prompt Engineering & Meta',i:'⌘',d:'Improve instructions, build reusable prompts and control output structure.',s:[
 ['Prompt Design',['/prompt','/promptfix','/promptrefine','/promptcompact','/promptexpand']],
 ['Roles & Context',['/role','/persona','/context','/constraints','/instructions']],
 ['Output Control',['/format','/json','/table','/schema','/checklist','/template']],
 ['Quality Control',['/critique','/selfcheck','/verify','/assumptions','/edgecases']]
]},
{n:'Automation & Workflows',i:'↻',d:'Turn repeated work into clear sequences, checklists and tool-ready workflows.',s:[
 ['Workflow',['/workflow','/pipeline','/sequence','/handoff','/trigger','/condition']],
 ['Automation',['/automate','/batch','/repeat','/schedule','/watch','/notify']],
 ['Integration',['/api','/webhook','/connector','/import','/export','/sync']],
 ['Operations',['/runbook','/sop','/monitor','/fallback','/logging']]
]},
{n:'Personalization & Utility',i:'◆',d:'Adapt outputs to a preferred style, audience, constraints and reusable command recipes.',s:[
 ['Personalize',['/personalize','/preferences','/remember','/consistent','/customize']],
 ['Audience',['/beginner','/expert','/client','/childsafe','/executive']],
 ['Constraints',['/concise','/detailed','/strict','/creative','/neutral','/noextras']],
 ['Recipes',['/combo','/recipe','/workflow','/stack','/finalcheck']]
]}
];

// Expand the library into a large, browsable command catalog. These are custom shorthand
// directives; each variant is intentionally distinct so every subcategory has 64+ entries.
const VARIANTS = [
 'precise','clean','natural','refined','professional','premium','subtle','strong','balanced','detailed',
 'advanced','simple','smart','controlled','optimized','efficient','accurate','consistent','polished','final',
 'quick','deep','thorough','minimal','maximum','soft','bold','sharp','smooth','stable',
 'highquality','lowartifact','highdetail','fine','micro','macro','local','global','adaptive','contextual',
 'realistic','cinematic','modern','classic','technical','creative','editorial','production','studio','portable',
 'safe','robust','reliable','scalable','maintainable','accessible','responsive','structured','compact','expanded',
 'focused','cleanoutput','bestpractice','errorresistant','edgeaware','detailaware','qualityfirst','finalpass','master','pro'
];
for (const cat of CATEGORIES) {
  for (const group of cat.s) {
    const codes = group[1];
    const seen = new Set(codes);
    const seeds = [...codes];
    let vi = 0;
    // Keep adding meaningful modifier variants until each subcategory reaches 64.
    while (codes.length < 64) {
      const seed = seeds[(codes.length - seeds.length + seeds.length) % seeds.length];
      const variant = VARIANTS[vi++ % VARIANTS.length];
      const candidate = seed + '-' + variant;
      if (!seen.has(candidate)) { seen.add(candidate); codes.push(candidate); }
    }
  }
}

const PAGE_SIZE=12; // Paginated library; subcategories may contain 50+ commands.
let selectedCategory=0, selectedSub=-1, page=1, search='', filter='all';
let favorites=JSON.parse(localStorage.getItem('gptCodesFavoritesV4')||'[]');
let builderSelection=[];
const flat=()=>CATEGORIES.flatMap(c=>c.s.flatMap(([sub,codes])=>codes.map(command=>({command,desc:describe(command),category:c.n,sub,icon:c.i}))));
function describe(cmd){const x=cmd.slice(1).replaceAll('-',' ');return x.charAt(0).toUpperCase()+x.slice(1)+' workflow directive';}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function currentCategory(){return CATEGORIES[selectedCategory];}
function currentItems(){
 let items;
 if(search){const q=search.toLowerCase();items=flat().filter(x=>(x.command+' '+x.category+' '+x.sub+' '+x.desc).toLowerCase().includes(q));}
 else {const c=currentCategory(); const groups=selectedSub===-1?c.s:[c.s[selectedSub]]; items=groups.flatMap(([sub,codes])=>codes.map(command=>({command,desc:describe(command),category:c.n,sub,icon:c.i})));}
 if(filter!=='all') { const fc=filter.startsWith('c')?CATEGORIES[Number(filter.slice(1))]?.n:filter; items=items.filter(x=>x.category===fc || x.sub===filter); }
 return items;
}
function saveFav(){localStorage.setItem('gptCodesFavoritesV4',JSON.stringify(favorites));document.getElementById('favCountNav').textContent=favorites.length;}
function toast(t){const e=document.getElementById('toast');e.textContent=t;e.classList.add('show');clearTimeout(window.tt);window.tt=setTimeout(()=>e.classList.remove('show'),1500);}
async function copyText(t){try{await navigator.clipboard.writeText(t);toast('Copied to clipboard');}catch{toast('Copy unavailable');}}
function toggleFavorite(cmd){favorites=favorites.includes(cmd)?favorites.filter(x=>x!==cmd):[...favorites,cmd];saveFav();renderCodes();renderFavorites();toast(favorites.includes(cmd)?'Added to favorites':'Removed from favorites');}
function selectCategory(i){selectedCategory=i;selectedSub=-1;page=1;search='';document.getElementById('globalSearch').value='';renderAll();document.getElementById('library').scrollIntoView({behavior:'smooth'});}
function selectSub(i){selectedSub=i;page=1;renderCodes();}
function renderCategories(){document.getElementById('categoryGrid').innerHTML=CATEGORIES.map((c,i)=>`<article class="categoryCard ${i===selectedCategory?'selected':''}" onclick="selectCategory(${i})"><div class="categoryTop"><span class="categoryIcon">${c.i}</span><span class="categoryIndex">${String(i+1).padStart(2,'0')}</span></div><h3>${esc(c.n)}</h3><p>${esc(c.d)}</p><footer><b>${c.s.reduce((a,x)=>a+x[1].length,0)}</b> codes <span>•</span> <b>${c.s.length}</b> groups</footer></article>`).join('');}
function renderFilters(){document.getElementById('filterBar').innerHTML=[['all','All'],...CATEGORIES.map((c,i)=>['c'+i,c.n])].map(([v,t])=>`<button class="filterChip ${filter===v?'active':''}" onclick="setFilter('${v}')">${esc(t)}</button>`).join('');}
function setFilter(v){filter=v;page=1;renderFilters();renderCodes();}
function renderSubcategories(){const c=currentCategory();document.getElementById('subCategoryBar').innerHTML=`<button class="subChip ${selectedSub===-1?'active':''}" onclick="selectSearchMode()">All in ${esc(c.n)}</button>`+c.s.map((x,i)=>`<button class="subChip ${i===selectedSub?'active':''}" onclick="selectSub(${i})"><span>${esc(x[0])}</span><em>${x[1].length}</em></button>`).join('');}
function selectSearchMode(){selectedSub=-1;search='';document.getElementById('globalSearch').value='';page=1;renderCodes();}
function renderCodes(){
 renderSubcategories();const items=currentItems();const totalPages=Math.max(1,Math.ceil(items.length/PAGE_SIZE));if(page>totalPages)page=totalPages;const shown=items.slice((page-1)*PAGE_SIZE,page*PAGE_SIZE);const c=currentCategory();
 const isSearch=!!search||filter!=='all';document.getElementById('libraryHeading').textContent=isSearch?'Search results':c.n;document.getElementById('resultMeta').textContent=`${items.length} command${items.length===1?'':'s'} • page ${page} of ${totalPages}`;document.getElementById('sideIcon').textContent=c.i;document.getElementById('sideTitle').textContent=c.n;document.getElementById('sideDescription').textContent=c.d;document.getElementById('sideCodeCount').textContent=c.s.reduce((a,x)=>a+x[1].length,0);document.getElementById('sideSubCount').textContent=c.s.length;document.getElementById('listTitle').textContent=isSearch?'MATCHING COMMANDS':(selectedSub===-1?'ALL CODES':c.s[selectedSub][0].toUpperCase());document.getElementById('listCount').textContent=`${items.length} total`;
 const list=document.getElementById('codeList');document.getElementById('noResults').classList.toggle('hidden',shown.length!==0);list.innerHTML=shown.map(x=>`<div class="codeRow"><div class="codeMain"><span class="command">${esc(x.command)}</span><span class="description">${esc(x.desc)}</span></div><span class="codeGroup">${esc(x.sub)}</span><button class="rowButton" onclick='copyText(${JSON.stringify(x.command)})' title="Copy">▣</button><button class="rowButton ${favorites.includes(x.command)?'saved':''}" onclick='toggleFavorite(${JSON.stringify(x.command)})' title="Favorite">♡</button></div>`).join('');
 renderPagination(totalPages);
 document.getElementById('clearSearch').style.display=search?'block':'none';
}
function renderPagination(total){const p=document.getElementById('pagination');if(total<=1){p.innerHTML='';return}let out=`<button ${page===1?'disabled':''} onclick="goPage(${page-1})">‹</button>`;const start=Math.max(1,Math.min(page-2,total-4)),end=Math.min(total,start+4);for(let i=start;i<=end;i++)out+=`<button class="${i===page?'active':''}" onclick="goPage(${i})">${i}</button>`;out+=`<button ${page===total?'disabled':''} onclick="goPage(${page+1})">›</button>`;p.innerHTML=out;}
function goPage(p){page=p;renderCodes();document.getElementById('library').scrollIntoView({behavior:'smooth',block:'start'});}
function renderFavorites(){const box=document.getElementById('favoriteList');if(!favorites.length){box.innerHTML='<div class="emptyFavorites">No favorites yet. Tap ♡ on any command to save it here.</div>';return}const lookup=new Map(flat().map(x=>[x.command,x]));box.innerHTML=favorites.map(cmd=>{const x=lookup.get(cmd);if(!x)return '';return `<div class="codeRow"><div class="codeMain"><span class="command">${esc(x.command)}</span><span class="description">${esc(x.desc)} • ${esc(x.category)} / ${esc(x.sub)}</span></div><button class="rowButton" onclick='copyText(${JSON.stringify(x.command)})'>▣</button><button class="rowButton saved" onclick='toggleFavorite(${JSON.stringify(x.command)})'>♥</button></div>`}).join('');}
function copyVisibleCodes(){const items=currentItems().slice((page-1)*PAGE_SIZE,page*PAGE_SIZE);if(!items.length){toast('Nothing to copy');return}copyText(items.map(x=>x.command).join(' '));}
function showOnlyFavorites(){document.getElementById('favorites').scrollIntoView({behavior:'smooth'});renderFavorites();}
function toggleFilters(){document.getElementById('filterBar').classList.toggle('collapsed');}
function toggleMobileMenu(){document.getElementById('mobileMenu').classList.toggle('open');}
function openBuilder(){buildChoices();document.getElementById('builderDialog').showModal();}
function buildChoices(){const pool=flat().filter(x=>!x.command.includes(' ')).slice(0,220);document.getElementById('builderChoices').innerHTML=pool.map(x=>`<button class="builderChip ${builderSelection.includes(x.command)?'active':''}" onclick='toggleBuilder(${JSON.stringify(x.command)})'>${esc(x.command)}</button>`).join('');document.getElementById('builderOutputText').textContent=builderSelection.length?builderSelection.join(' '):'Choose commands above…';}
function toggleBuilder(c){builderSelection=builderSelection.includes(c)?builderSelection.filter(x=>x!==c):[...builderSelection,c];buildChoices();}
function copyBuilder(){if(!builderSelection.length){toast('Choose at least one command');return}copyText(builderSelection.join(' '));}
function closeDialog(id){document.getElementById(id).close();}
function openPremium(){document.getElementById('premiumDialog').showModal();}
function renderAll(){renderCategories();renderFilters();renderCodes();renderFavorites();}

document.getElementById('globalSearch').addEventListener('input',e=>{search=e.target.value.trim();page=1;renderCodes();});
document.getElementById('clearSearch').addEventListener('click',()=>{search='';document.getElementById('globalSearch').value='';page=1;renderCodes();});
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();document.getElementById('globalSearch').focus()}if(e.key==='Escape')document.querySelectorAll('dialog[open]').forEach(d=>d.close());});
const all=flat();document.getElementById('heroCategoryCount').textContent=CATEGORIES.length;document.getElementById('heroCodeCount').textContent=all.length+'+';document.getElementById('heroSubCount').textContent=CATEGORIES.reduce((a,c)=>a+c.s.length,0)+'+';saveFav();renderAll();

if(window.THREE){const m=document.getElementById('threeHero'),scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(45,1,.1,100);camera.position.z=6;const r=new THREE.WebGLRenderer({alpha:true,antialias:true});r.setPixelRatio(Math.min(devicePixelRatio||1,2));m.appendChild(r.domElement);const g=new THREE.Group();scene.add(g);g.add(new THREE.Mesh(new THREE.IcosahedronGeometry(1.08,3),new THREE.MeshStandardMaterial({color:0x111313,metalness:.9,roughness:.2})));const gold=new THREE.MeshBasicMaterial({color:0xd8a93e,transparent:true,opacity:.7});const a=new THREE.Mesh(new THREE.TorusGeometry(1.55,.018,8,180),gold);a.rotation.x=1;g.add(a);const b=new THREE.Mesh(new THREE.TorusGeometry(1.9,.012,8,180),gold);b.rotation.x=.45;b.rotation.y=.9;g.add(b);scene.add(new THREE.AmbientLight(0x80683a,1.1));const p=new THREE.PointLight(0xf0bb4b,14,8);p.position.set(2,2,4);scene.add(p);function resize(){r.setSize(m.clientWidth,m.clientHeight);camera.aspect=m.clientWidth/m.clientHeight;camera.updateProjectionMatrix()}resize();addEventListener('resize',resize);(function tick(){requestAnimationFrame(tick);g.rotation.y+=.002;g.rotation.x=Math.sin(performance.now()*.0003)*.06;a.rotation.z+=.005;b.rotation.z-=.003; r.render(scene,camera)})();}
