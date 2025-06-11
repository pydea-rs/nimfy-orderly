import{r,j as p}from"./index-_b-vxSi4.js";import{h as R}from"./client-Df-1iYcO.js";import{E as h,i as C,d as v,e as M,m as y,s as g,f as E,g as S,h as F,j as b,k as P,l as k,R as D,n as z,o as j,p as H}from"./components-GEXnQvz7.js";/**
 * @remix-run/react v2.16.8
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function L(u){if(!u)return null;let m=Object.entries(u),s={};for(let[n,e]of m)if(e&&e.__type==="RouteErrorResponse")s[n]=new h(e.status,e.statusText,e.data,e.internal===!0);else if(e&&e.__type==="Error"){if(e.__subType){let o=window[e.__subType];if(typeof o=="function")try{let i=new o(e.message);i.stack=e.stack,s[n]=i}catch{}}if(s[n]==null){let o=new Error(e.message);o.stack=e.stack,s[n]=o}}else s[n]=e;return s}/**
 * @remix-run/react v2.16.8
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a,t,f=!1,c;new Promise(u=>{c=u}).catch(()=>{});function O(u){if(!t){if(window.__remixContext.future.v3_singleFetch){if(!a){let d=window.__remixContext.stream;C(d,"No stream found for single fetch decoding"),window.__remixContext.stream=void 0,a=v(d,window).then(l=>{window.__remixContext.state=l.value,a.value=!0}).catch(l=>{a.error=l})}if(a.error)throw a.error;if(!a.value)throw a}let o=M(window.__remixManifest.routes,window.__remixRouteModules,window.__remixContext.state,window.__remixContext.future,window.__remixContext.isSpaMode),i;if(!window.__remixContext.isSpaMode){i={...window.__remixContext.state,loaderData:{...window.__remixContext.state.loaderData}};let d=y(o,window.location,window.__remixContext.basename);if(d)for(let l of d){let _=l.route.id,x=window.__remixRouteModules[_],w=window.__remixManifest.routes[_];x&&g(w,x,window.__remixContext.isSpaMode)&&(x.HydrateFallback||!w.hasLoader)?i.loaderData[_]=void 0:w&&!w.hasLoader&&(i.loaderData[_]=null)}i&&i.errors&&(i.errors=L(i.errors))}t=E({routes:o,history:b(),basename:window.__remixContext.basename,future:{v7_normalizeFormMethod:!0,v7_fetcherPersist:window.__remixContext.future.v3_fetcherPersist,v7_partialHydration:!0,v7_prependBasename:!0,v7_relativeSplatPath:window.__remixContext.future.v3_relativeSplatPath,v7_skipActionErrorRevalidation:window.__remixContext.future.v3_singleFetch===!0},hydrationData:i,mapRouteProperties:H,dataStrategy:window.__remixContext.future.v3_singleFetch&&!window.__remixContext.isSpaMode?F(window.__remixManifest,window.__remixRouteModules,()=>t):void 0,patchRoutesOnNavigation:S(window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode,window.__remixContext.basename)}),t.state.initialized&&(f=!0,t.initialize()),t.createRoutesForHMR=P,window.__remixRouter=t,c&&c(t)}let[m,s]=r.useState(void 0),[n,e]=r.useState(t.state.location);return r.useLayoutEffect(()=>{f||(f=!0,t.initialize())},[]),r.useLayoutEffect(()=>t.subscribe(o=>{o.location!==n&&e(o.location)}),[n]),k(t,window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode),r.createElement(r.Fragment,null,r.createElement(D.Provider,{value:{manifest:window.__remixManifest,routeModules:window.__remixRouteModules,future:window.__remixContext.future,criticalCss:m,isSpaMode:window.__remixContext.isSpaMode}},r.createElement(z,{location:n},r.createElement(j,{router:t,fallbackElement:null,future:{v7_startTransition:!0}}))),window.__remixContext.future.v3_singleFetch?r.createElement(r.Fragment,null):null)}r.startTransition(()=>{R(document,p.jsx(r.StrictMode,{children:p.jsx(O,{})}))});
