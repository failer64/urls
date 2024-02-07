import{r as n}from"./react-RCQyz0-a.js";import{i as h,r as O,g as L,j as P,A as J,p as D,s as z,m as W,a as A}from"./@remix-run-mwXkICKc.js";/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function b(){return b=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},b.apply(this,arguments)}const F=n.createContext(null),V=n.createContext(null),E=n.createContext(null),B=n.createContext(null),x=n.createContext({outlet:null,matches:[],isDataRoute:!1}),S=n.createContext(null);function ce(t,e){let{relative:r}=e===void 0?{}:e;R()||h(!1);let{basename:a,navigator:i}=n.useContext(E),{hash:s,pathname:o,search:d}=K(t,{relative:r}),c=o;return a!=="/"&&(c=o==="/"?a:P([a,o])),i.createHref({pathname:c,search:d,hash:s})}function R(){return n.useContext(B)!=null}function U(){return R()||h(!1),n.useContext(B).location}function _(t){n.useContext(E).static||n.useLayoutEffect(t)}function q(){let{isDataRoute:t}=n.useContext(x);return t?oe():G()}function G(){R()||h(!1);let t=n.useContext(F),{basename:e,future:r,navigator:a}=n.useContext(E),{matches:i}=n.useContext(x),{pathname:s}=U(),o=JSON.stringify(L(i,r.v7_relativeSplatPath)),d=n.useRef(!1);return _(()=>{d.current=!0}),n.useCallback(function(v,u){if(u===void 0&&(u={}),!d.current)return;if(typeof v=="number"){a.go(v);return}let l=O(v,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(l.pathname=l.pathname==="/"?e:P([e,l.pathname])),(u.replace?a.replace:a.push)(l,u.state,u)},[e,a,o,s,t])}function K(t,e){let{relative:r}=e===void 0?{}:e,{future:a}=n.useContext(E),{matches:i}=n.useContext(x),{pathname:s}=U(),o=JSON.stringify(L(i,a.v7_relativeSplatPath));return n.useMemo(()=>O(t,JSON.parse(o),s,r==="path"),[t,o,s,r])}function Q(t,e){return X(t,e)}function X(t,e,r,a){R()||h(!1);let{navigator:i}=n.useContext(E),{matches:s}=n.useContext(x),o=s[s.length-1],d=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let v=U(),u;if(e){var l;let f=typeof e=="string"?D(e):e;c==="/"||(l=f.pathname)!=null&&l.startsWith(c)||h(!1),u=f}else u=v;let p=u.pathname||"/",m=c==="/"?p:p.slice(c.length)||"/",g=W(t,{pathname:m}),C=ee(g&&g.map(f=>Object.assign({},f,{params:Object.assign({},d,f.params),pathname:P([c,i.encodeLocation?i.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?c:P([c,i.encodeLocation?i.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),s,r,a);return e&&C?n.createElement(B.Provider,{value:{location:b({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:J.Pop}},C):C}function Y(){let t=ne(),e=A(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},e),r?n.createElement("pre",{style:i},r):null,null)}const Z=n.createElement(Y,null);class $ extends n.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?n.createElement(x.Provider,{value:this.props.routeContext},n.createElement(S.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function H(t){let{routeContext:e,match:r,children:a}=t,i=n.useContext(F);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(x.Provider,{value:e},a)}function ee(t,e,r,a){var i;if(e===void 0&&(e=[]),r===void 0&&(r=null),a===void 0&&(a=null),t==null){var s;if((s=r)!=null&&s.errors)t=r.matches;else return null}let o=t,d=(i=r)==null?void 0:i.errors;if(d!=null){let u=o.findIndex(l=>l.route.id&&(d==null?void 0:d[l.route.id]));u>=0||h(!1),o=o.slice(0,Math.min(o.length,u+1))}let c=!1,v=-1;if(r&&a&&a.v7_partialHydration)for(let u=0;u<o.length;u++){let l=o[u];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(v=u),l.route.id){let{loaderData:p,errors:m}=r,g=l.route.loader&&p[l.route.id]===void 0&&(!m||m[l.route.id]===void 0);if(l.route.lazy||g){c=!0,v>=0?o=o.slice(0,v+1):o=[o[0]];break}}}return o.reduceRight((u,l,p)=>{let m,g=!1,C=null,f=null;r&&(m=d&&l.route.id?d[l.route.id]:void 0,C=l.route.errorElement||Z,c&&(v<0&&p===0?(le("route-fallback",!1),g=!0,f=null):v===p&&(g=!0,f=l.route.hydrateFallbackElement||null)));let j=e.concat(o.slice(0,p+1)),k=()=>{let y;return m?y=C:g?y=f:l.route.Component?y=n.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=u,n.createElement(H,{match:l,routeContext:{outlet:u,matches:j,isDataRoute:r!=null},children:y})};return r&&(l.route.ErrorBoundary||l.route.errorElement||p===0)?n.createElement($,{location:r.location,revalidation:r.revalidation,component:C,error:m,children:k(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):k()},null)}var T=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(T||{}),N=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(N||{});function te(t){let e=n.useContext(F);return e||h(!1),e}function re(t){let e=n.useContext(V);return e||h(!1),e}function ae(t){let e=n.useContext(x);return e||h(!1),e}function w(t){let e=ae(),r=e.matches[e.matches.length-1];return r.route.id||h(!1),r.route.id}function ne(){var t;let e=n.useContext(S),r=re(N.UseRouteError),a=w(N.UseRouteError);return e!==void 0?e:(t=r.errors)==null?void 0:t[a]}function oe(){let{router:t}=te(T.UseNavigateStable),e=w(N.UseNavigateStable),r=n.useRef(!1);return _(()=>{r.current=!0}),n.useCallback(function(i,s){s===void 0&&(s={}),r.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,b({fromRouteId:e},s)))},[t,e])}const M={};function le(t,e,r){!e&&!M[t]&&(M[t]=!0)}function de(t){let{to:e,replace:r,state:a,relative:i}=t;R()||h(!1);let{future:s,static:o}=n.useContext(E),{matches:d}=n.useContext(x),{pathname:c}=U(),v=q(),u=O(e,L(d,s.v7_relativeSplatPath),c,i==="path"),l=JSON.stringify(u);return n.useEffect(()=>v(JSON.parse(l),{replace:r,state:a,relative:i}),[v,l,i,r,a]),null}function ie(t){h(!1)}function fe(t){let{basename:e="/",children:r=null,location:a,navigationType:i=J.Pop,navigator:s,static:o=!1,future:d}=t;R()&&h(!1);let c=e.replace(/^\/*/,"/"),v=n.useMemo(()=>({basename:c,navigator:s,static:o,future:b({v7_relativeSplatPath:!1},d)}),[c,d,s,o]);typeof a=="string"&&(a=D(a));let{pathname:u="/",search:l="",hash:p="",state:m=null,key:g="default"}=a,C=n.useMemo(()=>{let f=z(u,c);return f==null?null:{location:{pathname:f,search:l,hash:p,state:m,key:g},navigationType:i}},[c,u,l,p,m,g,i]);return C==null?null:n.createElement(E.Provider,{value:v},n.createElement(B.Provider,{children:r,value:C}))}function ve(t){let{children:e,location:r}=t;return Q(I(e),r)}new Promise(()=>{});function I(t,e){e===void 0&&(e=[]);let r=[];return n.Children.forEach(t,(a,i)=>{if(!n.isValidElement(a))return;let s=[...e,i];if(a.type===n.Fragment){r.push.apply(r,I(a.props.children,s));return}a.type!==ie&&h(!1),!a.props.index||!a.props.children||h(!1);let o={id:a.props.id||s.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(o.children=I(a.props.children,s)),r.push(o)}),r}export{E as N,fe as R,q as a,U as b,K as c,de as d,ve as e,ie as f,ce as u};