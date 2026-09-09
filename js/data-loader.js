window.BLACKMARK = window.BLACKMARK || {};
(() => {
  const B = window.BLACKMARK; const cache = new Map();
  const safe = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
  const write = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} };
  B.store = { get: (key, fallback) => safe(key, fallback), set: write };
  B.favorites = { all: () => safe(B.config.storage.favorites, []), has: id => safe(B.config.storage.favorites, []).includes(id), toggle: id => { const list=safe(B.config.storage.favorites,[]); const next=list.includes(id)?list.filter(x=>x!==id):[...list,id]; write(B.config.storage.favorites,next); return next; } };
  B.load = async path => { const url=B.url(path); if(cache.has(url)) return cache.get(url); const result=fetch(url).then(r=>{if(!r.ok) throw new Error(`Could not load ${path}`);return r.json()}); cache.set(url,result); return result; };
  B.loadCategories = () => B.load('/data/categories.json');
  B.loadCategory = async slug => { const manifest=await B.load(`/data/prompts/${slug}/index.json`); const parts=await Promise.all(manifest.subcategories.map(s=>B.load(s.file))); return {...manifest,subcategories:parts.map(p=>({name:p.subcategory,slug:p.slug,prompts:p.prompts}))}; };
  B.loadFeatured = () => B.load('/data/featured.json');
  B.copy = async text => { try { await navigator.clipboard.writeText(text); B.toast('Copied to clipboard'); } catch { B.toast('Copy unavailable — select the text manually'); } };
  B.toast = message => { let el=document.querySelector('#toast'); if(!el){el=document.createElement('div');el.id='toast';document.body.append(el)} el.textContent=message;el.classList.add('show');clearTimeout(B._toast);B._toast=setTimeout(()=>el.classList.remove('show'),2200); };
  B.escape = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  B.flatten = cats => cats.flatMap(c => c.subcategories.flatMap(s => s.prompts.map(p => ({...p, category:c.category, categorySlug:c.slug, subcategory:s.name}))));
})();
