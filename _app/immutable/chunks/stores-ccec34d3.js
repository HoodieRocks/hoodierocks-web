import{c as s}from"./singletons-eca981c1.js";import{Q as t}from"./index-67a3932e.js";s.disable_scroll_handling;const n=s.goto;s.invalidate;s.prefetch;s.prefetch_routes;s.before_navigate;s.after_navigate;const r=()=>{const e=t("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session,updated:e.updated}},g={subscribe(e){return r().page.subscribe(e)}};export{n as g,g as p};