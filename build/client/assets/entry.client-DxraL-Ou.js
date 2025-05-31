import{r,j as R}from"./index-_b-vxSi4.js";import{h as p}from"./client-Df-1iYcO.js";import{E as h,m as C,d as v,e as M,R as y,f as g}from"./index-Di9JU0ht.js";import{i as E,d as S,c as b,s as F,g as P,a as k,b as D,u as z,R as H,e as L}from"./components-CdH6ss3X.js";/**
 * @remix-run/react v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function O(u){if(!u)return null;let m=Object.entries(u),s={};for(let[a,e]of m)if(e&&e.__type==="RouteErrorResponse")s[a]=new h(e.status,e.statusText,e.data,e.internal===!0);else if(e&&e.__type==="Error"){if(e.__subType){let o=window[e.__subType];if(typeof o=="function")try{let i=new o(e.message);i.stack=e.stack,s[a]=i}catch{}}if(s[a]==null){let o=new Error(e.message);o.stack=e.stack,s[a]=o}}else s[a]=e;return s}/**
 * @remix-run/react v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let n,t,f=!1,c;new Promise(u=>{c=u}).catch(()=>{});function T(u){if(!t){if(window.__remixContext.future.v3_singleFetch){if(!n){let d=window.__remixContext.stream;E(d,"No stream found for single fetch decoding"),window.__remixContext.stream=void 0,n=S(d,window).then(l=>{window.__remixContext.state=l.value,n.value=!0}).catch(l=>{n.error=l})}if(n.error)throw n.error;if(!n.value)throw n}let o=b(window.__remixManifest.routes,window.__remixRouteModules,window.__remixContext.state,window.__remixContext.future,window.__remixContext.isSpaMode),i;if(!window.__remixContext.isSpaMode){i={...window.__remixContext.state,loaderData:{...window.__remixContext.state.loaderData}};let d=C(o,window.location,window.__remixContext.basename);if(d)for(let l of d){let _=l.route.id,x=window.__remixRouteModules[_],w=window.__remixManifest.routes[_];x&&F(w,x,window.__remixContext.isSpaMode)&&(x.HydrateFallback||!w.hasLoader)?i.loaderData[_]=void 0:w&&!w.hasLoader&&(i.loaderData[_]=null)}i&&i.errors&&(i.errors=O(i.errors))}t=v({routes:o,history:M(),basename:window.__remixContext.basename,future:{v7_normalizeFormMethod:!0,v7_fetcherPersist:window.__remixContext.future.v3_fetcherPersist,v7_partialHydration:!0,v7_prependBasename:!0,v7_relativeSplatPath:window.__remixContext.future.v3_relativeSplatPath,v7_skipActionErrorRevalidation:window.__remixContext.future.v3_singleFetch===!0},hydrationData:i,mapRouteProperties:g,dataStrategy:window.__remixContext.future.v3_singleFetch?k(window.__remixManifest,window.__remixRouteModules,()=>t):void 0,patchRoutesOnNavigation:P(window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode,window.__remixContext.basename)}),t.state.initialized&&(f=!0,t.initialize()),t.createRoutesForHMR=D,window.__remixRouter=t,c&&c(t)}let[m,s]=r.useState(void 0),[a,e]=r.useState(t.state.location);return r.useLayoutEffect(()=>{f||(f=!0,t.initialize())},[]),r.useLayoutEffect(()=>t.subscribe(o=>{o.location!==a&&e(o.location)}),[a]),z(t,window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode),r.createElement(r.Fragment,null,r.createElement(H.Provider,{value:{manifest:window.__remixManifest,routeModules:window.__remixRouteModules,future:window.__remixContext.future,criticalCss:m,isSpaMode:window.__remixContext.isSpaMode}},r.createElement(L,{location:a},r.createElement(y,{router:t,fallbackElement:null,future:{v7_startTransition:!0}}))),window.__remixContext.future.v3_singleFetch?r.createElement(r.Fragment,null):null)}r.startTransition(()=>{p(document,R.jsx(r.StrictMode,{children:R.jsx(T,{})}))});
