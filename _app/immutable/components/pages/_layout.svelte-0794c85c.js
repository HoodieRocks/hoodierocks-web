import{S as P,i as V,s as q,C,k as b,a as I,l as k,m as $,c as A,h as p,D as G,n as r,b as E,E as v,F as N,G as J,H as B,q as K,r as O,B as L,I as se,w as Z,J as le,x,y as ee,f as H,t as D,d as re,K as ie,L as ae,M as ne,z as te,N as oe,g as ce}from"../../chunks/index-2129d253.js";import{c as j}from"../../chunks/singletons-ee32c75e.js";import{s as W}from"../../chunks/index-5f6996ca.js";j.disable_scroll_handling;const X=j.goto;j.invalidate;j.invalidateAll;j.prefetch;j.prefetch_routes;j.before_navigate;j.after_navigate;function Y(d){let e,s,l,o,h,n,c,w;return{c(){e=b("a"),s=K("About"),l=I(),o=b("a"),h=K("Projects"),n=I(),c=b("a"),w=K("Contact Me"),this.h()},l(f){e=k(f,"A",{href:!0,class:!0});var a=$(e);s=O(a,"About"),a.forEach(p),l=A(f),o=k(f,"A",{href:!0,class:!0});var m=$(o);h=O(m,"Projects"),m.forEach(p),n=A(f),c=k(f,"A",{href:!0,class:!0});var y=$(c);w=O(y,"Contact Me"),y.forEach(p),this.h()},h(){r(e,"href","/#about"),r(e,"class","text-neutral-200 font-medium"),r(o,"href","/coming-soon"),r(o,"class","text-neutral-200 font-medium"),r(c,"href","/coming-soon"),r(c,"class","text-neutral-200 font-medium")},m(f,a){E(f,e,a),v(e,s),E(f,l,a),E(f,o,a),v(o,h),E(f,n,a),E(f,c,a),v(c,w)},d(f){f&&p(e),f&&p(l),f&&p(o),f&&p(n),f&&p(c)}}}function Q(d){let e,s,l,o,h;return{c(){e=b("p"),s=b("img"),this.h()},l(n){e=k(n,"P",{});var c=$(e);s=k(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(p),this.h()},h(){G(s.src,l="bars-solid.svg")||r(s,"src",l),r(s,"alt","Bars"),r(s,"class","w-8 h-8 invert absolute top-[calc(50%-16px)] right-8")},m(n,c){E(n,e,c),v(e,s),o||(h=[N(s,"click",d[5]),N(s,"keypress",d[6])],o=!0)},p:L,d(n){n&&p(e),o=!1,B(h)}}}function fe(d){let e,s,l,o,h,n,c,w,f,a,m,y,M;C(d[2]);let i=(d[1]>768||d[0])&&Y(),_=d[1]<768&&Q(d);return{c(){e=b("nav"),s=b("div"),l=b("img"),h=I(),n=b("div"),i&&i.c(),w=I(),_&&_.c(),this.h()},l(u){e=k(u,"NAV",{class:!0});var t=$(e);s=k(t,"DIV",{class:!0});var g=$(s);l=k(g,"IMG",{src:!0,alt:!0,class:!0}),h=A(g),n=k(g,"DIV",{class:!0});var z=$(n);i&&i.l(z),z.forEach(p),g.forEach(p),w=A(t),_&&_.l(t),t.forEach(p),this.h()},h(){G(l.src,o=d[0]?"indigo-white.svg":"indigo.svg")||r(l,"src",o),r(l,"alt","Indigo logo"),r(l,"class","h-8 cursor-pointer"),r(n,"class","flex flex-col md:flex-row justify-between items-center w-2/5 mx-8"),r(s,"class",c="flex justify-between items-center "+(d[0]?"h-screen":"h-auto")+" md:h-auto transition-all"),r(e,"class",f="w-full "+(d[0]?"bg-indigo-600":"bg-white bg-opacity-5")+" fixed py-8 md:py-3 z-50 transition-all")},m(u,t){E(u,e,t),v(e,s),v(s,l),v(s,h),v(s,n),i&&i.m(n,null),v(e,w),_&&_.m(e,null),m=!0,y||(M=[N(window,"resize",d[2]),N(l,"click",d[3]),N(l,"keypress",d[4])],y=!0)},p(u,[t]){(!m||t&1&&!G(l.src,o=u[0]?"indigo-white.svg":"indigo.svg"))&&r(l,"src",o),u[1]>768||u[0]?i||(i=Y(),i.c(),i.m(n,null)):i&&(i.d(1),i=null),(!m||t&1&&c!==(c="flex justify-between items-center "+(u[0]?"h-screen":"h-auto")+" md:h-auto transition-all"))&&r(s,"class",c),u[1]<768?_?_.p(u,t):(_=Q(u),_.c(),_.m(e,null)):_&&(_.d(1),_=null),(!m||t&1&&f!==(f="w-full "+(u[0]?"bg-indigo-600":"bg-white bg-opacity-5")+" fixed py-8 md:py-3 z-50 transition-all"))&&r(e,"class",f)},i(u){m||(C(()=>{a||(a=J(e,W,{duration:250},!0)),a.run(1)}),m=!0)},o(u){a||(a=J(e,W,{duration:250},!1)),a.run(0),m=!1},d(u){u&&p(e),i&&i.d(),_&&_.d(),u&&a&&a.end(),y=!1,B(M)}}}function ue(d,e,s){let l=!1,o=0;function h(){s(1,o=window.innerWidth)}return[l,o,h,()=>X("/"),a=>a.key=="h"?X("/"):null,()=>s(0,l=!l),a=>a.key=="n"?s(0,l=!l):null]}class de extends P{constructor(e){super(),V(this,e,ue,fe,q,{})}}function he(d){let e,s,l,o,h,n,c,w,f,a,m,y,M,i,_,u;return{c(){e=b("footer"),s=b("img"),o=I(),h=b("div"),n=b("a"),c=b("img"),f=I(),a=b("a"),m=b("img"),M=I(),i=b("a"),_=b("img"),this.h()},l(t){e=k(t,"FOOTER",{class:!0});var g=$(e);s=k(g,"IMG",{src:!0,alt:!0,class:!0}),o=A(g),h=k(g,"DIV",{class:!0});var z=$(h);n=k(z,"A",{href:!0});var F=$(n);c=k(F,"IMG",{src:!0,alt:!0,class:!0}),F.forEach(p),f=A(z),a=k(z,"A",{href:!0});var R=$(a);m=k(R,"IMG",{src:!0,alt:!0,class:!0}),R.forEach(p),M=A(z),i=k(z,"A",{href:!0});var S=$(i);_=k(S,"IMG",{src:!0,alt:!0,class:!0}),S.forEach(p),z.forEach(p),g.forEach(p),this.h()},h(){G(s.src,l="indigo.svg")||r(s,"src",l),r(s,"alt","indigo logo"),r(s,"class","h-10 md:h-12"),G(c.src,w="instagram.svg")||r(c,"src",w),r(c,"alt","instagram logo"),r(c,"class","h-6 md:h-8 invert"),r(n,"href","https://instagram.com/geode.dev"),G(m.src,y="discord.svg")||r(m,"src",y),r(m,"alt","discord logo"),r(m,"class","h-6 md:h-8 invert"),r(a,"href","https://discord.gg/rEnxDz9P5m"),G(_.src,u="github.svg")||r(_,"src",u),r(_,"alt","github logo"),r(_,"class","h-6 md:h-8 invert"),r(i,"href","https://github.com/HoodieRocks"),r(h,"class","flex justify-evenly items-center w-1/3"),r(e,"class","py-8 flex justify-evenly w-screen bg-neutral-800 border-t-2 border-neutral-700 items-center")},m(t,g){E(t,e,g),v(e,s),v(e,o),v(e,h),v(h,n),v(n,c),v(h,f),v(h,a),v(a,m),v(h,M),v(h,i),v(i,_)},p:L,i:L,o:L,d(t){t&&p(e)}}}class me extends P{constructor(e){super(),V(this,e,null,he,q,{})}}const{window:T}=oe;function U(d){let e,s;return e=new de({}),{c(){Z(e.$$.fragment)},l(l){x(e.$$.fragment,l)},m(l,o){ee(e,l,o),s=!0},i(l){s||(H(e.$$.fragment,l),s=!0)},o(l){D(e.$$.fragment,l),s=!1},d(l){te(e,l)}}}function _e(d){let e=!1,s=()=>{e=!1},l,o,h,n,c,w,f,a,m,y,M;C(d[6]),C(d[7]);let i=(d[0]>200||d[1]<window.screen.height)&&U();const _=d[5].default,u=se(_,d,d[4],null);return a=new me({}),{c(){o=b("link"),h=b("link"),n=b("link"),c=I(),i&&i.c(),w=I(),u&&u.c(),f=I(),Z(a.$$.fragment),this.h()},l(t){const g=le("svelte-1gvy7rh",document.head);o=k(g,"LINK",{rel:!0,href:!0}),h=k(g,"LINK",{rel:!0,href:!0,crossorigin:!0}),n=k(g,"LINK",{async:!0,href:!0,rel:!0}),g.forEach(p),c=A(t),i&&i.l(t),w=A(t),u&&u.l(t),f=A(t),x(a.$$.fragment,t),this.h()},h(){r(o,"rel","preconnect"),r(o,"href","https://fonts.googleapis.com"),r(h,"rel","preconnect"),r(h,"href","https://fonts.gstatic.com"),r(h,"crossorigin","anonymous"),r(n,"async",""),r(n,"href","https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&display=swap"),r(n,"rel","stylesheet")},m(t,g){v(document.head,o),v(document.head,h),v(document.head,n),E(t,c,g),i&&i.m(t,g),E(t,w,g),u&&u.m(t,g),E(t,f,g),ee(a,t,g),m=!0,y||(M=[N(T,"scroll",()=>{e=!0,clearTimeout(l),l=setTimeout(s,100),d[6]()}),N(T,"resize",d[7])],y=!0)},p(t,[g]){g&1&&!e&&(e=!0,clearTimeout(l),scrollTo(T.pageXOffset,t[0]),l=setTimeout(s,100)),t[0]>200||t[1]<window.screen.height?i?g&3&&H(i,1):(i=U(),i.c(),H(i,1),i.m(w.parentNode,w)):i&&(ce(),D(i,1,1,()=>{i=null}),re()),u&&u.p&&(!m||g&16)&&ie(u,_,t,t[4],m?ne(_,t[4],g,null):ae(t[4]),null)},i(t){m||(H(i),H(u,t),H(a.$$.fragment,t),m=!0)},o(t){D(i),D(u,t),D(a.$$.fragment,t),m=!1},d(t){p(o),p(h),p(n),t&&p(c),i&&i.d(t),t&&p(w),u&&u.d(t),t&&p(f),te(a,t),y=!1,B(M)}}}function ge(d,e,s){let{$$slots:l={},$$scope:o}=e;const h=!0;let n=0,c=0,w=0;function f(){s(0,n=T.pageYOffset)}function a(){s(1,c=T.innerHeight),s(2,w=T.outerHeight)}return d.$$set=m=>{"$$scope"in m&&s(4,o=m.$$scope)},[n,c,w,h,o,l,f,a]}class be extends P{constructor(e){super(),V(this,e,ge,_e,q,{prerender:3})}get prerender(){return this.$$.ctx[3]}}export{be as default};
