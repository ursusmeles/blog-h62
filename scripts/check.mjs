import assert from 'node:assert/strict';
import Eleventy from '@11ty/eleventy';
const app=new Eleventy(undefined,undefined,{quietMode:true,config:c=>{
 for(let i=1;i<=7;i++)c.addTemplate(`src/teksty/check-${i}.md`,'Paragraph.\n\n## Heading\n\nBody.',{title:`Check ${i}`,description:'Fixture',category:i<4?'Alpha':'Zeta',date:new Date(`2026-04-0${i}T00:00:00Z`),tags:['posts'],layout:'single.njk'});
}});
const pages=await app.toJSON();
const sitemap=pages.find(p=>p.url==='/sitemap.xml').content;
for(const p of pages.filter(p=>p.url.startsWith('/kategoria/')))assert(sitemap.includes(p.url),p.url);
const archive=pages.find(p=>p.url==='/teksty/2/');
assert(archive.content.includes('property="og:type" content="website"'));
assert(sitemap.includes('/teksty/2/'));
const category=pages.find(p=>p.url==='/kategoria/alpha/').content;
assert(category.indexOf('>Check 3</h3>')<category.indexOf('>Check 1</h3>'));
for(const p of pages.filter(p=>p.url.endsWith('/'))){
 assert(!p.content.includes('/info#polityka-prywatnosci/'));
 for(const m of p.content.matchAll(/datetime="([^"]+)"/g))assert(/^\d{4}-\d{2}-\d{2}T/.test(m[1]));
 assert(!p.content.includes('<style>'));
 assert(p.content.includes('/assets/main.css'));
}
console.log('Publishing regression checks passed.');
import fs from 'node:fs';
const css = fs.readFileSync('src/_includes/css/main.css', 'utf8');
const declarations = new Set([...css.matchAll(/(--[\w-]+)\s*:/g)].map(m => m[1]));
declarations.add('--index'); // Supplied by the Info page markup.
for (const [, name] of css.matchAll(/var\((--[\w-]+)\s*\)/g)) assert(declarations.has(name), `Undefined token: ${name}`);
const htmlPages = new Map(pages.filter(p => p.url.endsWith('/')).map(p => [p.url, p.content]));
for (const [url, html] of htmlPages) {
  for (const [, href] of html.matchAll(/href="([^"<>]+)"/g)) {
    if (!href.startsWith('/') && !href.startsWith('#')) continue;
    const target = new URL(href, `https://local${url}`);
    if (!target.hash) continue;
    const content = htmlPages.get(target.pathname.endsWith('/') ? target.pathname : target.pathname + '/');
    assert(content, `Missing page: ${href}`);
    const ids = [...content.matchAll(/id="([^"]+)"/g)].map(m => m[1]);
    assert(ids.includes(target.hash.slice(1)) || ids.includes(decodeURIComponent(target.hash.slice(1))), `Missing fragment: ${href}`);
  }
}
console.log('CSS token and internal fragment checks passed.');
