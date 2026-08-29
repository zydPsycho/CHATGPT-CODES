const CATEGORIES=[
 {name:"Quality & Restoration",slug:"quality",icon:"✧",desc:"Enhance, restore and improve image quality to professional standards.",codes:[
 ["/hdreal","High-definition realistic enhancement"],["/4k","Improve image to 4K-level detail"],["/8k","Ultra-high-resolution enhancement"],["/enhance","Overall image enhancement"],["/quality","Improve overall image quality"],["/natural","Keep enhancement natural and believable"],["/sharpen","Sharpen details and edges"],["/details","Bring out fine details"],["/clarity","Improve local contrast and clarity"],["/deblur","Reduce blur and recover edges"],["/denoise","Reduce noise and grain"],["/restore","Restore old or degraded images"],["/repair","Repair visible image defects"],["/reconstruct","Reconstruct missing visual information"],["/upscale","Increase resolution while preserving detail"],["/clean","Remove dirt, marks and distractions"]]},
 {name:"Face & Identity",slug:"face",icon:"◉",desc:"Preserve and improve facial identity and detail.",codes:[
 ["/facefix","Correct facial rendering while preserving identity"],["/faceenhance","Enhance facial detail and definition"],["/faceclear","Make facial features clearer"],["/faceidentity","Prioritize identity consistency"],["/skin","Improve skin appearance"],["/skinfix","Correct distracting skin artifacts"],["/naturalface","Keep facial enhancement realistic"],["/eyes","Improve eye clarity naturally"],["/teeth","Clean up teeth appearance naturally"],["/identitylock","Keep the same core identity"],["/faceconsistent","Maintain facial structure"],["/referenceface","Use the supplied reference as the identity anchor"]]},
 {name:"Lighting & Color",slug:"light",icon:"☼",desc:"Control light, atmosphere and color treatment.",codes:[
 ["/relight","Re-light the subject or scene"],["/goldenhour","Golden-hour lighting"],["/daylight","Natural daytime lighting"],["/softlight","Soft flattering illumination"],["/dramaticlight","Cinematic dramatic lighting"],["/studio","Controlled professional studio lighting"],["/rimlight","Add controlled rim lighting"],["/colorize","Add realistic color"],["/naturalcolor","Natural believable color"],["/vivid","Increase color impact"],["/cinematiccolor","Cinematic color grading"],["/warm","Warmer color treatment"],["/cool","Cooler color treatment"],["/bw","Black-and-white treatment"]]},
 {name:"Camera, Motion & Stability",slug:"camera",icon:"◌",desc:"Perspective, framing and movement controls.",codes:[
 ["/antishake","Reduce camera-shake appearance"],["/walking","Natural walking-motion context"],["/motion","Add controlled motion"],["/freeze","Crisp frozen moment"],["/wideangle","Wider field of view"],["/closeup","Close framing"],["/portrait","Portrait-oriented composition"],["/lowangle","Low camera angle"],["/highangle","High camera angle"],["/overhead","Top-down camera view"],["/pov","Point-of-view perspective"],["/reframe","Recompose the image"],["/crop","Crop around important content"],["/center","Center the main subject"],["/expand","Extend the composition"],["/vertical","Optimize for vertical framing"],["/horizontal","Optimize for horizontal framing"]]},
 {name:"Background & Object Cleanup",slug:"quality",icon:"◇",desc:"Remove distractions and control the environment.",codes:[
 ["/backgroundclean","Clean and simplify the background"],["/blurbackground","Add controlled background blur"],["/replacebackground","Replace the background"],["/removebackground","Remove the background"],["/extendbackground","Extend the environment naturally"],["/removepeople","Remove unwanted people"],["/removeobject","Remove an unwanted object"],["/cleanup","Clean distracting elements"],["/declutter","Reduce visual clutter"],["/erase","Remove a specified element"]]},
 {name:"Composition & Design",slug:"design",icon:"▣",desc:"Improve visual balance, hierarchy and format.",codes:[
 ["/professional","Professional composition and finish"],["/balanced","Improve visual balance"],["/symmetry","Strengthen symmetry where appropriate"],["/minimal","Minimal uncluttered composition"],["/cinematic","Cinematic composition"],["/dynamic","Energetic composition"],["/9:16","Vertical phone/social format"],["/16:9","Widescreen format"],["/1:1","Square format"],["/4:5","Portrait social format"],["/3:4","Standard portrait format"]]},
 {name:"Style Transformations",slug:"style",icon:"✦",desc:"Photographic and artistic visual treatments.",codes:[
 ["/photoreal","Photorealistic rendering"],["/hyperreal","Highly detailed realistic rendering"],["/editorial","Editorial photography look"],["/fashion","Fashion/editorial treatment"],["/product","Clean product photography"],["/documentary","Documentary-style realism"],["/illustration","Illustration-style rendering"],["/anime","Anime-inspired transformation"],["/comic","Comic-book treatment"],["/watercolor","Watercolor painting style"],["/oilpaint","Oil-painting style"],["/sketch","Sketch-style rendering"],["/3d","3D-rendered appearance"]]},
 {name:"Video & Animation",slug:"camera",icon:"▷",desc:"Motion planning, camera movement and video finish.",codes:[
 ["/animate","Animate specified elements"],["/animateparts","Animate individual parts"],["/smoothmotion","Smooth controlled motion"],["/loop","Create a clean loop"],["/slowmotion","Slow graceful motion"],["/pan","Horizontal camera movement"],["/tilt","Vertical camera movement"],["/zoom","Controlled zoom"],["/dolly","Forward/backward camera movement"],["/orbit","Camera orbit"],["/drone","Aerial camera movement"],["/videoreal","Realistic video appearance"],["/motionblur","Natural motion blur"],["/stabilized","Stabilized-camera appearance"]]},
 {name:"Logo & Branding",slug:"design",icon:"⬡",desc:"Clean, recreate and adapt brand graphics.",codes:[
 ["/logoclean","Clean up a logo"],["/logorecreate","Recreate a logo faithfully"],["/logooutline","Add a controlled outline"],["/monochrome","Restrict to monochrome"],["/brandmark","Emphasize the primary brand mark"],["/blackredblue","Restrict design to black, red and blue"],["/whiteaccent","Permit controlled white accent lines"],["/transparent","Transparent-background graphic"],["/vectorlook","Clean vector-like appearance"],["/icon","Optimize for icon use"]]},
 {name:"Text, Posters & UI",slug:"design",icon:"T",desc:"Typography, posters, banners and screen visuals.",codes:[
 ["/textclear","Make text visually clearer"],["/typography","Improve typography and hierarchy"],["/poster","Poster-style composition"],["/banner","Banner composition"],["/splash","App splash-screen composition"],["/ui","UI-oriented visual composition"],["/androidportrait","Android portrait screen"],["/mobile","Mobile-first framing"],["/desktop","Desktop framing"],["/splashscreen","App splash-screen layout"]]},
 {name:"Floorplans & Architecture",slug:"design",icon:"⌗",desc:"Space planning and architectural visualization.",codes:[
 ["/floorplan","Create or refine a floorplan"],["/layout","Improve room arrangement"],["/dimension","Add or clarify dimensions"],["/roomlabel","Add clear room labels"],["/circulation","Improve movement/circulation"],["/exterior","Exterior architectural visualization"],["/interior","Interior visualization"],["/aerialplan","Aerial/site-plan perspective"],["/3dplan","3D floorplan presentation"]]},
 {name:"Environment & Atmosphere",slug:"light",icon:"☁",desc:"Weather, time of day and mood controls.",codes:[
 ["/sunset","Sunset atmosphere"],["/sunrise","Sunrise atmosphere"],["/night","Nighttime treatment"],["/rain","Rainy atmosphere"],["/fog","Fog or mist atmosphere"],["/overcast","Overcast lighting"],["/moody","Moody atmospheric treatment"],["/bright","Bright airy treatment"],["/dark","Dark dramatic treatment"],["/cleanlook","Clean commercial finish"],["/naturalambient","Natural ambient environment"]]},
 {name:"Subject Preservation",slug:"face",icon:"♢",desc:"Protect important original elements during edits.",codes:[
 ["/preserveface","Preserve facial identity"],["/preservepose","Preserve the original pose"],["/preserveclothes","Preserve clothing"],["/preservebackground","Preserve the background"],["/preservedetails","Preserve important details"],["/onlyface","Restrict changes to the face"],["/onlybackground","Restrict changes to background"],["/onlylighting","Change lighting only"],["/onlycolor","Change color treatment only"],["/subtle","Make changes subtle"]]},
 {name:"Command Recipes",slug:"quality",icon:"◆",desc:"Ready-to-copy multi-command combinations.",codes:[
 ["/antishake /walking /facefix /relight /4k","Stable walking + face + lighting + quality"],["/drone /goldenhour /hdreal /natural","Aerial golden-hour realistic treatment"],["/professional /reframe /4k /clean","Professional reframing and cleanup"],["/facefix /relight /natural /4k","Natural facial correction and lighting"],["/product /cleanlook /4k","Clean product enhancement"],["/interior /relight /natural /4k","Interior visualization workflow"]]}
];

let selectedCategory=0;
let activeFilter="all";
let favorites=JSON.parse(localStorage.getItem("gptCodesFavoritesV3")||"[]");
let builderSelection=[];

const icons=["✧","◉","☼","◌","◇","▣","✦","▷","⬡","T","⌗","☁","♢","◆"];

function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
function allCodes(){return CATEGORIES.flatMap(c=>c.codes.map(x=>({command:x[0],desc:x[1],category:c.name,slug:c.slug})));}
function saveFav(){localStorage.setItem("gptCodesFavoritesV3",JSON.stringify(favorites));document.getElementById("favCountNav").textContent=favorites.length;}
function showToast(t){const el=document.getElementById("toast");el.textContent=t;el.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove("show"),1700);}
async function copyText(text){try{await navigator.clipboard.writeText(text);showToast("Copied to clipboard");}catch(e){showToast("Copy unavailable — select and copy manually");}}
function toggleFavorite(command){favorites=favorites.includes(command)?favorites.filter(x=>x!==command):[...favorites,command];saveFav();renderCodes();renderFavorites();showToast(favorites.includes(command)?"Added to favorites":"Removed from favorites");}
function selectCategory(i){selectedCategory=i;renderCategories();renderCodes();document.getElementById("library").scrollIntoView({behavior:"smooth",block:"start"});}
function renderCategories(){
 const grid=document.getElementById("categoryGrid");
 grid.innerHTML=CATEGORIES.map((c,i)=>`<article class="categoryCard ${i===selectedCategory?"selected":""}" onclick="selectCategory(${i})"><div class="categoryIcon">${icons[i]}</div><h3>${i+1}. ${esc(c.name)}</h3><p>${c.codes.length} commands</p></article>`).join("");
}
function currentItems(){
 const q=document.getElementById("globalSearch").value.trim().toLowerCase();
 let base=(activeFilter==="all"?allCodes():allCodes().filter(x=>x.slug===activeFilter));
 if(!q)return base;
 return base.filter(x=>(x.command+" "+x.desc+" "+x.category).toLowerCase().includes(q));
}
function renderCodes(){
 const q=document.getElementById("globalSearch").value.trim();
 const items=currentItems();
 const c=CATEGORIES[selectedCategory];
 document.getElementById("libraryHeading").textContent=q||activeFilter!=="all"?"Search results":c.name;
 document.getElementById("sideTitle").textContent=c.name;
 document.getElementById("sideDescription").textContent=c.desc;
 document.getElementById("sideIcon").textContent=icons[selectedCategory];
 document.getElementById("resultMeta").textContent=`${items.length} matching commands`;
 document.getElementById("listCount").textContent=`${items.length} commands`;
 document.getElementById("listTitle").textContent=q||activeFilter!=="all"?"MATCHING COMMANDS":"ALL CODES";
 const list=document.getElementById("codeList");
 document.getElementById("noResults").classList.toggle("hidden",items.length!==0);
 list.innerHTML=items.map(x=>`<div class="codeRow"><span class="command">${esc(x.command)}</span><span class="description">${esc(x.desc)}${q||activeFilter!=="all"?` <i>• ${esc(x.category)}</i>`:""}</span><button class="rowButton" onclick='copyText(${JSON.stringify(x.command)})' title="Copy">▣</button><button class="rowButton ${favorites.includes(x.command)?"saved":""}" onclick='toggleFavorite(${JSON.stringify(x.command)})' title="Favorite">♡</button></div>`).join("");
 document.getElementById("clearSearch").style.display=q?"block":"none";
}
function renderFavorites(){
 const box=document.getElementById("favoriteList");
 if(!favorites.length){box.innerHTML=`<div class="emptyFavorites">No favorites yet. Tap ♡ beside any command to save it here.</div>`;return}
 const lookup=new Map(allCodes().map(x=>[x.command,x]));
 box.innerHTML=favorites.map(cmd=>{const x=lookup.get(cmd);if(!x)return"";return `<div class="codeRow"><span class="command">${esc(x.command)}</span><span class="description">${esc(x.desc)}</span><button class="rowButton" onclick='copyText(${JSON.stringify(x.command)})'>▣</button><button class="rowButton saved" onclick='toggleFavorite(${JSON.stringify(x.command)})'>♥</button></div>`}).join("");
}
function copyVisibleCodes(){const items=currentItems();copyText(items.map(x=>x.command).join(" "));}
function showOnlyFavorites(){if(!favorites.length){showToast("No favorites saved yet");return}document.getElementById("favorites").scrollIntoView({behavior:"smooth"});renderFavorites();}
function toggleFilters(){document.getElementById("filterBar").classList.toggle("hidden")}
function toggleMobileMenu(){document.getElementById("mobileMenu").classList.toggle("open")}
function openBuilder(){buildChoices();document.getElementById("builderDialog").showModal()}
function buildChoices(){
 const pool=allCodes().filter(x=>!x.command.includes(" "));
 const box=document.getElementById("builderChoices");
 box.innerHTML=pool.map(x=>`<button class="builderChip ${builderSelection.includes(x.command)?"active":""}" onclick='toggleBuilder(${JSON.stringify(x.command)})'>${esc(x.command)}</button>`).join("");
 updateBuilderOutput();
}
function toggleBuilder(cmd){builderSelection=builderSelection.includes(cmd)?builderSelection.filter(x=>x!==cmd):[...builderSelection,cmd];buildChoices()}
function updateBuilderOutput(){document.getElementById("builderOutputText").textContent=builderSelection.length?builderSelection.join(" "):"Choose commands above…"}
function copyBuilder(){if(!builderSelection.length){showToast("Choose at least one command");return}copyText(builderSelection.join(" "))}
function closeDialog(id){document.getElementById(id).close()}
function openPremium(){document.getElementById("premiumDialog").showModal()}

document.querySelectorAll(".filterChip").forEach(btn=>btn.addEventListener("click",()=>{activeFilter=btn.dataset.filter;document.querySelectorAll(".filterChip").forEach(b=>b.classList.remove("active"));btn.classList.add("active");renderCodes();}));
document.getElementById("globalSearch").addEventListener("input",renderCodes);
document.getElementById("clearSearch").addEventListener("click",()=>{document.getElementById("globalSearch").value="";renderCodes();document.getElementById("globalSearch").focus()});
document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();document.getElementById("globalSearch").focus()}if(e.key==="Escape"){document.querySelectorAll("dialog[open]").forEach(d=>d.close())}});
document.getElementById("heroCodeCount").textContent=allCodes().length+"+";
saveFav();renderCategories();renderCodes();renderFavorites();

if(window.THREE){
 const mount=document.getElementById("threeHero");
 const scene=new THREE.Scene();
 const camera=new THREE.PerspectiveCamera(45,Math.max(mount.clientWidth,1)/Math.max(mount.clientHeight,1),.1,100);
 camera.position.z=6;
 const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});
 renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
 renderer.setSize(mount.clientWidth,mount.clientHeight);
 mount.appendChild(renderer.domElement);
 const group=new THREE.Group();scene.add(group);
 const core=new THREE.Mesh(new THREE.IcosahedronGeometry(1.08,3),new THREE.MeshStandardMaterial({color:0x101414,metalness:.9,roughness:.2,emissive:0x241907,emissiveIntensity:.25}));
 group.add(core);
 const gold=new THREE.MeshBasicMaterial({color:0xd5a23c,transparent:true,opacity:.58});
 const ring=new THREE.Mesh(new THREE.TorusGeometry(1.55,.018,8,180),gold);ring.rotation.x=1.0;group.add(ring);
 const ring2=new THREE.Mesh(new THREE.TorusGeometry(1.85,.012,8,180),gold);ring2.rotation.x=.45;ring2.rotation.y=.9;group.add(ring2);
 const geo=new THREE.BufferGeometry(),N=850,pos=new Float32Array(N*3);
 for(let i=0;i<N;i++){const r=2.1+Math.random()*2.0,a=Math.random()*Math.PI*2,b=(Math.random()-.5)*1.5;pos[i*3]=Math.cos(a)*r;pos[i*3+1]=b*r*.45;pos[i*3+2]=Math.sin(a)*r}
 geo.setAttribute("position",new THREE.BufferAttribute(pos,3));
 group.add(new THREE.Points(geo,new THREE.PointsMaterial({color:0xe2b04b,size:.018,transparent:true,opacity:.7})));
 scene.add(new THREE.AmbientLight(0x80683a,1.1));
 const pl=new THREE.PointLight(0xf0bb4b,16,8);pl.position.set(2,2,4);scene.add(pl);
 function tick(){requestAnimationFrame(tick);group.rotation.y+=.0022;group.rotation.x=Math.sin(performance.now()*.0003)*.07;ring.rotation.z+=.005;ring2.rotation.z-=.0035;renderer.render(scene,camera)}tick();
 addEventListener("resize",()=>{camera.aspect=Math.max(mount.clientWidth,1)/Math.max(mount.clientHeight,1);camera.updateProjectionMatrix();renderer.setSize(mount.clientWidth,mount.clientHeight)});
}