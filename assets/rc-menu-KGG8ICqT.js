import{h as B,e as _,f as Me,b as w,c as D,g as G,i as _n,o as kn,a as $n,_ as Dn,d as On}from"./@babel-NyfAOc0i.js";import{c as he}from"./classnames-bfnzNRGW.js";import{F as Oe}from"./rc-overflow-7c0vxWcQ.js";import{p as An,o as Vt,H as Ln,l as Ae,K as ie,A as je,b as Ut,e as Tn,y as zt,x as Fn}from"./rc-util-P8w88VWb.js";import{r as t}from"./react-RCQyz0-a.js";import{r as Vn}from"./react-dom-bICc-1QG.js";import{T as Un}from"./@rc-component-KC8IvooG.js";import{C as zn}from"./rc-motion-oPIyD74H.js";var Ht=t.createContext(null);function Gt(r,e){return r===void 0?null:"".concat(r,"-").concat(e)}function Wt(r){var e=t.useContext(Ht);return Gt(e,r)}var Hn=["children","locked"],ee=t.createContext(null);function Gn(r,e){var a=_({},r);return Object.keys(e).forEach(function(o){var n=e[o];n!==void 0&&(a[o]=n)}),a}function Le(r){var e=r.children,a=r.locked,o=B(r,Hn),n=t.useContext(ee),l=An(function(){return Gn(n,o)},[n,o],function(i,u){return!a&&(i[0]!==u[0]||!Vt(i[1],u[1],!0))});return t.createElement(ee.Provider,{value:l},e)}var Wn=[],jt=t.createContext(null);function Xe(){return t.useContext(jt)}var Bt=t.createContext(Wn);function Te(r){var e=t.useContext(Bt);return t.useMemo(function(){return r!==void 0?[].concat(Me(e),[r]):e},[e,r])}var qt=t.createContext(null),pt=t.createContext({}),ct=ie.LEFT,st=ie.RIGHT,vt=ie.UP,Be=ie.DOWN,qe=ie.ENTER,Yt=ie.ESC,ke=ie.HOME,$e=ie.END,At=[vt,Be,ct,st];function jn(r,e,a,o){var n,l,i,u,s="prev",c="next",C="children",v="parent";if(r==="inline"&&o===qe)return{inlineTrigger:!0};var p=(n={},w(n,vt,s),w(n,Be,c),n),S=(l={},w(l,ct,a?c:s),w(l,st,a?s:c),w(l,Be,C),w(l,qe,C),l),h=(i={},w(i,vt,s),w(i,Be,c),w(i,qe,C),w(i,Yt,v),w(i,ct,a?C:v),w(i,st,a?v:C),i),K={inline:p,horizontal:S,vertical:h,inlineSub:p,horizontalSub:h,verticalSub:h},R=(u=K["".concat(r).concat(e?"":"Sub")])===null||u===void 0?void 0:u[o];switch(R){case s:return{offset:-1,sibling:!0};case c:return{offset:1,sibling:!0};case v:return{offset:-1,sibling:!1};case C:return{offset:1,sibling:!1};default:return null}}function Bn(r){for(var e=r;e;){if(e.getAttribute("data-menu-list"))return e;e=e.parentElement}return null}function qn(r,e){for(var a=r||document.activeElement;a;){if(e.has(a))return a;a=a.parentElement}return null}function ht(r,e){var a=Ln(r,!0);return a.filter(function(o){return e.has(o)})}function Lt(r,e,a){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!r)return null;var n=ht(r,e),l=n.length,i=n.findIndex(function(u){return a===u});return o<0?i===-1?i=l-1:i-=1:o>0&&(i+=1),i=(i+l)%l,n[i]}var dt=function(e,a){var o=new Set,n=new Map,l=new Map;return e.forEach(function(i){var u=document.querySelector("[data-menu-id='".concat(Gt(a,i),"']"));u&&(o.add(u),l.set(u,i),n.set(i,u))}),{elements:o,key2element:n,element2key:l}};function Yn(r,e,a,o,n,l,i,u,s,c){var C=t.useRef(),v=t.useRef();v.current=e;var p=function(){Ae.cancel(C.current)};return t.useEffect(function(){return function(){p()}},[]),function(S){var h=S.which;if([].concat(At,[qe,Yt,ke,$e]).includes(h)){var K=l(),R=dt(K,o),b=R,x=b.elements,f=b.key2element,d=b.element2key,I=f.get(e),m=qn(I,x),y=d.get(m),O=jn(r,i(y,!0).length===1,a,h);if(!O&&h!==ke&&h!==$e)return;(At.includes(h)||[ke,$e].includes(h))&&S.preventDefault();var P=function(A){if(A){var q=A,Y=A.querySelector("a");Y!=null&&Y.getAttribute("href")&&(q=Y);var re=d.get(A);u(re),p(),C.current=Ae(function(){v.current===re&&q.focus()})}};if([ke,$e].includes(h)||O.sibling||!m){var T;!m||r==="inline"?T=n.current:T=Bn(m);var $,N=ht(T,x);h===ke?$=N[0]:h===$e?$=N[N.length-1]:$=Lt(T,x,m,O.offset),P($)}else if(O.inlineTrigger)s(y);else if(O.offset>0)s(y,!0),p(),C.current=Ae(function(){R=dt(K,o);var ne=m.getAttribute("aria-controls"),A=document.getElementById(ne),q=Lt(A,R.elements);P(q)},5);else if(O.offset<0){var W=i(y,!0),F=W[W.length-2],te=f.get(F);s(F,!1),P(te)}}c==null||c(S)}}function Xn(r){Promise.resolve().then(r)}var Ct="__RC_UTIL_PATH_SPLIT__",Tt=function(e){return e.join(Ct)},Jn=function(e){return e.split(Ct)},ft="rc-menu-more";function Zn(){var r=t.useState({}),e=D(r,2),a=e[1],o=t.useRef(new Map),n=t.useRef(new Map),l=t.useState([]),i=D(l,2),u=i[0],s=i[1],c=t.useRef(0),C=t.useRef(!1),v=function(){C.current||a({})},p=t.useCallback(function(f,d){var I=Tt(d);n.current.set(I,f),o.current.set(f,I),c.current+=1;var m=c.current;Xn(function(){m===c.current&&v()})},[]),S=t.useCallback(function(f,d){var I=Tt(d);n.current.delete(I),o.current.delete(f)},[]),h=t.useCallback(function(f){s(f)},[]),K=t.useCallback(function(f,d){var I=o.current.get(f)||"",m=Jn(I);return d&&u.includes(m[0])&&m.unshift(ft),m},[u]),R=t.useCallback(function(f,d){return f.some(function(I){var m=K(I,!0);return m.includes(d)})},[K]),b=function(){var d=Me(o.current.keys());return u.length&&d.push(ft),d},x=t.useCallback(function(f){var d="".concat(o.current.get(f)).concat(Ct),I=new Set;return Me(n.current.keys()).forEach(function(m){m.startsWith(d)&&I.add(n.current.get(m))}),I},[]);return t.useEffect(function(){return function(){C.current=!0}},[]),{registerPath:p,unregisterPath:S,refreshOverflowKeys:h,isSubPathKey:R,getKeyPath:K,getKeys:b,getSubPathKeys:x}}function De(r){var e=t.useRef(r);e.current=r;var a=t.useCallback(function(){for(var o,n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(o=e.current)===null||o===void 0?void 0:o.call.apply(o,[e].concat(l))},[]);return r?a:void 0}var Qn=Math.random().toFixed(5).toString().slice(2),Ft=0;function er(r){var e=je(r,{value:r}),a=D(e,2),o=a[0],n=a[1];return t.useEffect(function(){Ft+=1;var l="".concat(Qn,"-").concat(Ft);n("rc-menu-uuid-".concat(l))},[]),o}function Xt(r,e,a,o){var n=t.useContext(ee),l=n.activeKey,i=n.onActive,u=n.onInactive,s={active:l===r};return e||(s.onMouseEnter=function(c){a==null||a({key:r,domEvent:c}),i(r)},s.onMouseLeave=function(c){o==null||o({key:r,domEvent:c}),u(r)}),s}function Jt(r){var e=t.useContext(ee),a=e.mode,o=e.rtl,n=e.inlineIndent;if(a!=="inline")return null;var l=r;return o?{paddingRight:l*n}:{paddingLeft:l*n}}function Zt(r){var e=r.icon,a=r.props,o=r.children,n;return e===null||e===!1?null:(typeof e=="function"?n=t.createElement(e,_({},a)):typeof e!="boolean"&&(n=e),n||o||null)}var tr=["item"];function Ye(r){var e=r.item,a=B(r,tr);return Object.defineProperty(a,"item",{get:function(){return Ut(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),e}}),a}var nr=["title","attribute","elementRef"],rr=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],ar=["active"],ir=function(r){_n(a,r);var e=kn(a);function a(){return $n(this,a),e.apply(this,arguments)}return Dn(a,[{key:"render",value:function(){var n=this.props,l=n.title,i=n.attribute,u=n.elementRef,s=B(n,nr),c=zt(s,["eventKey","popupClassName","popupOffset","onTitleClick"]);return Ut(!i,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),t.createElement(Oe.Item,G({},i,{title:typeof l=="string"?l:void 0},c,{ref:u}))}}]),a}(t.Component),or=t.forwardRef(function(r,e){var a,o=r.style,n=r.className,l=r.eventKey;r.warnKey;var i=r.disabled,u=r.itemIcon,s=r.children,c=r.role,C=r.onMouseEnter,v=r.onMouseLeave,p=r.onClick,S=r.onKeyDown,h=r.onFocus,K=B(r,rr),R=Wt(l),b=t.useContext(ee),x=b.prefixCls,f=b.onItemClick,d=b.disabled,I=b.overflowDisabled,m=b.itemIcon,y=b.selectedKeys,O=b.onActive,P=t.useContext(pt),T=P._internalRenderMenuItem,$="".concat(x,"-item"),N=t.useRef(),W=t.useRef(),F=d||i,te=Tn(e,W),ne=Te(l),A=function(L){return{key:l,keyPath:Me(ne).reverse(),item:N.current,domEvent:L}},q=u||m,Y=Xt(l,F,C,v),re=Y.active,oe=B(Y,ar),ae=y.includes(l),ce=Jt(ne.length),se=function(L){if(!F){var X=A(L);p==null||p(Ye(X)),f(X)}},V=function(L){if(S==null||S(L),L.which===ie.ENTER){var X=A(L);p==null||p(Ye(X)),f(X)}},U=function(L){O(l),h==null||h(L)},Ce={};r.role==="option"&&(Ce["aria-selected"]=ae);var ve=t.createElement(ir,G({ref:N,elementRef:te,role:c===null?"none":c||"menuitem",tabIndex:i?null:-1,"data-menu-id":I&&R?null:R},K,oe,Ce,{component:"li","aria-disabled":i,style:_(_({},ce),o),className:he($,(a={},w(a,"".concat($,"-active"),re),w(a,"".concat($,"-selected"),ae),w(a,"".concat($,"-disabled"),F),a),n),onClick:se,onKeyDown:V,onFocus:U}),s,t.createElement(Zt,{props:_(_({},r),{},{isSelected:ae}),icon:q}));return T&&(ve=T(ve,r,{selected:ae})),ve});function lr(r,e){var a=r.eventKey,o=Xe(),n=Te(a);return t.useEffect(function(){if(o)return o.registerPath(a,n),function(){o.unregisterPath(a,n)}},[n]),o?null:t.createElement(or,G({},r,{ref:e}))}const gt=t.forwardRef(lr);var ur=["className","children"],cr=function(e,a){var o=e.className,n=e.children,l=B(e,ur),i=t.useContext(ee),u=i.prefixCls,s=i.mode,c=i.rtl;return t.createElement("ul",G({className:he(u,c&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat(s==="inline"?"inline":"vertical"),o),role:"menu"},l,{"data-menu-list":!0,ref:a}),n)},bt=t.forwardRef(cr);bt.displayName="SubMenuList";function yt(r,e){return Fn(r).map(function(a,o){if(t.isValidElement(a)){var n,l,i=a.key,u=(n=(l=a.props)===null||l===void 0?void 0:l.eventKey)!==null&&n!==void 0?n:i,s=u==null;s&&(u="tmp_key-".concat([].concat(Me(e),[o]).join("-")));var c={key:u,eventKey:u};return t.cloneElement(a,c)}return a})}var k={adjustX:1,adjustY:1},sr={topLeft:{points:["bl","tl"],overflow:k},topRight:{points:["br","tr"],overflow:k},bottomLeft:{points:["tl","bl"],overflow:k},bottomRight:{points:["tr","br"],overflow:k},leftTop:{points:["tr","tl"],overflow:k},leftBottom:{points:["br","bl"],overflow:k},rightTop:{points:["tl","tr"],overflow:k},rightBottom:{points:["bl","br"],overflow:k}},vr={topLeft:{points:["bl","tl"],overflow:k},topRight:{points:["br","tr"],overflow:k},bottomLeft:{points:["tl","bl"],overflow:k},bottomRight:{points:["tr","br"],overflow:k},rightTop:{points:["tr","tl"],overflow:k},rightBottom:{points:["br","bl"],overflow:k},leftTop:{points:["tl","tr"],overflow:k},leftBottom:{points:["bl","br"],overflow:k}};function Qt(r,e,a){if(e)return e;if(a)return a[r]||a.other}var dr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function fr(r){var e=r.prefixCls,a=r.visible,o=r.children,n=r.popup,l=r.popupStyle,i=r.popupClassName,u=r.popupOffset,s=r.disabled,c=r.mode,C=r.onVisibleChange,v=t.useContext(ee),p=v.getPopupContainer,S=v.rtl,h=v.subMenuOpenDelay,K=v.subMenuCloseDelay,R=v.builtinPlacements,b=v.triggerSubMenuAction,x=v.forceSubMenuRender,f=v.rootClassName,d=v.motion,I=v.defaultMotions,m=t.useState(!1),y=D(m,2),O=y[0],P=y[1],T=S?_(_({},vr),R):_(_({},sr),R),$=dr[c],N=Qt(c,d,I),W=t.useRef(N);c!=="inline"&&(W.current=N);var F=_(_({},W.current),{},{leavedClassName:"".concat(e,"-hidden"),removeOnLeave:!1,motionAppear:!0}),te=t.useRef();return t.useEffect(function(){return te.current=Ae(function(){P(a)}),function(){Ae.cancel(te.current)}},[a]),t.createElement(Un,{prefixCls:e,popupClassName:he("".concat(e,"-popup"),w({},"".concat(e,"-rtl"),S),i,f),stretch:c==="horizontal"?"minWidth":null,getPopupContainer:p,builtinPlacements:T,popupPlacement:$,popupVisible:O,popup:n,popupStyle:l,popupAlign:u&&{offset:u},action:s?[]:[b],mouseEnterDelay:h,mouseLeaveDelay:K,onPopupVisibleChange:C,forceRender:x,popupMotion:F,fresh:!0},o)}function mr(r){var e=r.id,a=r.open,o=r.keyPath,n=r.children,l="inline",i=t.useContext(ee),u=i.prefixCls,s=i.forceSubMenuRender,c=i.motion,C=i.defaultMotions,v=i.mode,p=t.useRef(!1);p.current=v===l;var S=t.useState(!p.current),h=D(S,2),K=h[0],R=h[1],b=p.current?a:!1;t.useEffect(function(){p.current&&R(!1)},[v]);var x=_({},Qt(l,c,C));o.length>1&&(x.motionAppear=!1);var f=x.onVisibleChanged;return x.onVisibleChanged=function(d){return!p.current&&!d&&R(!0),f==null?void 0:f(d)},K?null:t.createElement(Le,{mode:l,locked:!p.current},t.createElement(zn,G({visible:b},x,{forceRender:s,removeOnLeave:!1,leavedClassName:"".concat(u,"-hidden")}),function(d){var I=d.className,m=d.style;return t.createElement(bt,{id:e,className:I,style:m},n)}))}var pr=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],hr=["active"],Cr=function(e){var a,o=e.style,n=e.className,l=e.title,i=e.eventKey;e.warnKey;var u=e.disabled,s=e.internalPopupClose,c=e.children,C=e.itemIcon,v=e.expandIcon,p=e.popupClassName,S=e.popupOffset,h=e.popupStyle,K=e.onClick,R=e.onMouseEnter,b=e.onMouseLeave,x=e.onTitleClick,f=e.onTitleMouseEnter,d=e.onTitleMouseLeave,I=B(e,pr),m=Wt(i),y=t.useContext(ee),O=y.prefixCls,P=y.mode,T=y.openKeys,$=y.disabled,N=y.overflowDisabled,W=y.activeKey,F=y.selectedKeys,te=y.itemIcon,ne=y.expandIcon,A=y.onItemClick,q=y.onOpenChange,Y=y.onActive,re=t.useContext(pt),oe=re._internalRenderSubMenuItem,ae=t.useContext(qt),ce=ae.isSubPathKey,se=Te(),V="".concat(O,"-submenu"),U=$||u,Ce=t.useRef(),ve=t.useRef(),de=C??te,L=v??ne,X=T.includes(i),le=!N&&X,Fe=ce(F,i),Ve=Xt(i,U,f,d),fe=Ve.active,Re=B(Ve,hr),Ze=t.useState(!1),Se=D(Ze,2),xe=Se[0],Qe=Se[1],J=function(Q){U||Qe(Q)},et=function(Q){J(!0),R==null||R({key:i,domEvent:Q})},Ue=function(Q){J(!1),b==null||b({key:i,domEvent:Q})},Pe=t.useMemo(function(){return fe||(P!=="inline"?xe||ce([W],i):!1)},[P,fe,W,xe,i,ce]),tt=Jt(se.length),ge=function(Q){U||(x==null||x({key:i,domEvent:Q}),P==="inline"&&q(i,!X))},Ee=De(function(Z){K==null||K(Ye(Z)),A(Z)}),we=function(Q){P!=="inline"&&q(i,Q)},nt=function(){Y(i)},be=m&&"".concat(m,"-popup"),j=t.createElement("div",G({role:"menuitem",style:tt,className:"".concat(V,"-title"),tabIndex:U?null:-1,ref:Ce,title:typeof l=="string"?l:null,"data-menu-id":N&&m?null:m,"aria-expanded":le,"aria-haspopup":!0,"aria-controls":be,"aria-disabled":U,onClick:ge,onFocus:nt},Re),l,t.createElement(Zt,{icon:P!=="horizontal"?L:void 0,props:_(_({},e),{},{isOpen:le,isSubMenu:!0})},t.createElement("i",{className:"".concat(V,"-arrow")}))),ye=t.useRef(P);if(P!=="inline"&&se.length>1?ye.current="vertical":ye.current=P,!N){var me=ye.current;j=t.createElement(fr,{mode:me,prefixCls:V,visible:!s&&le&&P!=="inline",popupClassName:p,popupOffset:S,popupStyle:h,popup:t.createElement(Le,{mode:me==="horizontal"?"vertical":me},t.createElement(bt,{id:be,ref:ve},c)),disabled:U,onVisibleChange:we},j)}var Ke=t.createElement(Oe.Item,G({role:"none"},I,{component:"li",style:o,className:he(V,"".concat(V,"-").concat(P),n,(a={},w(a,"".concat(V,"-open"),le),w(a,"".concat(V,"-active"),Pe),w(a,"".concat(V,"-selected"),Fe),w(a,"".concat(V,"-disabled"),U),a)),onMouseEnter:et,onMouseLeave:Ue}),j,!N&&t.createElement(mr,{id:be,open:le,keyPath:se},c));return oe&&(Ke=oe(Ke,e,{selected:Fe,active:Pe,open:le,disabled:U})),t.createElement(Le,{onItemClick:Ee,mode:P==="horizontal"?"vertical":P,itemIcon:de,expandIcon:L},Ke)};function It(r){var e=r.eventKey,a=r.children,o=Te(e),n=yt(a,o),l=Xe();t.useEffect(function(){if(l)return l.registerPath(e,o),function(){l.unregisterPath(e,o)}},[o]);var i;return l?i=n:i=t.createElement(Cr,r,n),t.createElement(Bt.Provider,{value:o},i)}var gr=["className","title","eventKey","children"],br=["children"],yr=function(e){var a=e.className,o=e.title;e.eventKey;var n=e.children,l=B(e,gr),i=t.useContext(ee),u=i.prefixCls,s="".concat(u,"-item-group");return t.createElement("li",G({role:"presentation"},l,{onClick:function(C){return C.stopPropagation()},className:he(s,a)}),t.createElement("div",{role:"presentation",className:"".concat(s,"-title"),title:typeof o=="string"?o:void 0},o),t.createElement("ul",{role:"group",className:"".concat(s,"-list")},n))};function en(r){var e=r.children,a=B(r,br),o=Te(a.eventKey),n=yt(e,o),l=Xe();return l?n:t.createElement(yr,zt(a,["warnKey"]),n)}function tn(r){var e=r.className,a=r.style,o=t.useContext(ee),n=o.prefixCls,l=Xe();return l?null:t.createElement("li",{role:"separator",className:he("".concat(n,"-item-divider"),e),style:a})}var Ir=["label","children","key","type"];function mt(r){return(r||[]).map(function(e,a){if(e&&On(e)==="object"){var o=e,n=o.label,l=o.children,i=o.key,u=o.type,s=B(o,Ir),c=i??"tmp-".concat(a);return l||u==="group"?u==="group"?t.createElement(en,G({key:c},s,{title:n}),mt(l)):t.createElement(It,G({key:c},s,{title:n}),mt(l)):u==="divider"?t.createElement(tn,G({key:c},s)):t.createElement(gt,G({key:c},s),n)}return null}).filter(function(e){return e})}function Mr(r,e,a){var o=r;return e&&(o=mt(e)),yt(o,a)}var Rr=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],Ie=[],Sr=t.forwardRef(function(r,e){var a,o,n=r,l=n.prefixCls,i=l===void 0?"rc-menu":l,u=n.rootClassName,s=n.style,c=n.className,C=n.tabIndex,v=C===void 0?0:C,p=n.items,S=n.children,h=n.direction,K=n.id,R=n.mode,b=R===void 0?"vertical":R,x=n.inlineCollapsed,f=n.disabled,d=n.disabledOverflow,I=n.subMenuOpenDelay,m=I===void 0?.1:I,y=n.subMenuCloseDelay,O=y===void 0?.1:y,P=n.forceSubMenuRender,T=n.defaultOpenKeys,$=n.openKeys,N=n.activeKey,W=n.defaultActiveFirst,F=n.selectable,te=F===void 0?!0:F,ne=n.multiple,A=ne===void 0?!1:ne,q=n.defaultSelectedKeys,Y=n.selectedKeys,re=n.onSelect,oe=n.onDeselect,ae=n.inlineIndent,ce=ae===void 0?24:ae,se=n.motion,V=n.defaultMotions,U=n.triggerSubMenuAction,Ce=U===void 0?"hover":U,ve=n.builtinPlacements,de=n.itemIcon,L=n.expandIcon,X=n.overflowedIndicator,le=X===void 0?"...":X,Fe=n.overflowedIndicatorPopupClassName,Ve=n.getPopupContainer,fe=n.onClick,Re=n.onOpenChange,Ze=n.onKeyDown;n.openAnimation,n.openTransitionName;var Se=n._internalRenderMenuItem,xe=n._internalRenderSubMenuItem,Qe=B(n,Rr),J=t.useMemo(function(){return Mr(S,p,Ie)},[S,p]),et=t.useState(!1),Ue=D(et,2),Pe=Ue[0],tt=Ue[1],ge=t.useRef(),Ee=er(K),we=h==="rtl",nt=je(T,{value:$,postState:function(g){return g||Ie}}),be=D(nt,2),j=be[0],ye=be[1],me=function(g){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function z(){ye(g),Re==null||Re(g)}M?Vn.flushSync(z):z()},Ke=t.useState(j),Z=D(Ke,2),Q=Z[0],nn=Z[1],rt=t.useRef(!1),rn=t.useMemo(function(){return(b==="inline"||b==="vertical")&&x?["vertical",x]:[b,!1]},[b,x]),Mt=D(rn,2),ze=Mt[0],at=Mt[1],Rt=ze==="inline",an=t.useState(ze),St=D(an,2),ue=St[0],on=St[1],ln=t.useState(at),xt=D(ln,2),un=xt[0],cn=xt[1];t.useEffect(function(){on(ze),cn(at),rt.current&&(Rt?ye(Q):me(Ie))},[ze,at]);var sn=t.useState(0),Pt=D(sn,2),He=Pt[0],vn=Pt[1],it=He>=J.length-1||ue!=="horizontal"||d;t.useEffect(function(){Rt&&nn(j)},[j]),t.useEffect(function(){return rt.current=!0,function(){rt.current=!1}},[]);var pe=Zn(),Et=pe.registerPath,wt=pe.unregisterPath,dn=pe.refreshOverflowKeys,Kt=pe.isSubPathKey,fn=pe.getKeyPath,Nt=pe.getKeys,mn=pe.getSubPathKeys,pn=t.useMemo(function(){return{registerPath:Et,unregisterPath:wt}},[Et,wt]),hn=t.useMemo(function(){return{isSubPathKey:Kt}},[Kt]);t.useEffect(function(){dn(it?Ie:J.slice(He+1).map(function(E){return E.key}))},[He,it]);var Cn=je(N||W&&((a=J[0])===null||a===void 0?void 0:a.key),{value:N}),_t=D(Cn,2),Ne=_t[0],ot=_t[1],gn=De(function(E){ot(E)}),bn=De(function(){ot(void 0)});t.useImperativeHandle(e,function(){return{list:ge.current,focus:function(g){var M,z=Nt(),H=dt(z,Ee),We=H.elements,lt=H.key2element,Kn=H.element2key,Dt=ht(ge.current,We),Ot=Ne??(Dt[0]?Kn.get(Dt[0]):(M=J.find(function(Nn){return!Nn.props.disabled}))===null||M===void 0?void 0:M.key),_e=lt.get(Ot);if(Ot&&_e){var ut;_e==null||(ut=_e.focus)===null||ut===void 0||ut.call(_e,g)}}}});var yn=je(q||[],{value:Y,postState:function(g){return Array.isArray(g)?g:g==null?Ie:[g]}}),kt=D(yn,2),Ge=kt[0],In=kt[1],Mn=function(g){if(te){var M=g.key,z=Ge.includes(M),H;A?z?H=Ge.filter(function(lt){return lt!==M}):H=[].concat(Me(Ge),[M]):H=[M],In(H);var We=_(_({},g),{},{selectedKeys:H});z?oe==null||oe(We):re==null||re(We)}!A&&j.length&&ue!=="inline"&&me(Ie)},Rn=De(function(E){fe==null||fe(Ye(E)),Mn(E)}),$t=De(function(E,g){var M=j.filter(function(H){return H!==E});if(g)M.push(E);else if(ue!=="inline"){var z=mn(E);M=M.filter(function(H){return!z.has(H)})}Vt(j,M,!0)||me(M,!0)}),Sn=function(g,M){var z=M??!j.includes(g);$t(g,z)},xn=Yn(ue,Ne,we,Ee,ge,Nt,fn,ot,Sn,Ze);t.useEffect(function(){tt(!0)},[]);var Pn=t.useMemo(function(){return{_internalRenderMenuItem:Se,_internalRenderSubMenuItem:xe}},[Se,xe]),En=ue!=="horizontal"||d?J:J.map(function(E,g){return t.createElement(Le,{key:E.key,overflowDisabled:g>He},E)}),wn=t.createElement(Oe,G({id:K,ref:ge,prefixCls:"".concat(i,"-overflow"),component:"ul",itemComponent:gt,className:he(i,"".concat(i,"-root"),"".concat(i,"-").concat(ue),c,(o={},w(o,"".concat(i,"-inline-collapsed"),un),w(o,"".concat(i,"-rtl"),we),o),u),dir:h,style:s,role:"menu",tabIndex:v,data:En,renderRawItem:function(g){return g},renderRawRest:function(g){var M=g.length,z=M?J.slice(-M):null;return t.createElement(It,{eventKey:ft,title:le,disabled:it,internalPopupClose:M===0,popupClassName:Fe},z)},maxCount:ue!=="horizontal"||d?Oe.INVALIDATE:Oe.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(g){vn(g)},onKeyDown:xn},Qe));return t.createElement(pt.Provider,{value:Pn},t.createElement(Ht.Provider,{value:Ee},t.createElement(Le,{prefixCls:i,rootClassName:u,mode:ue,openKeys:j,rtl:we,disabled:f,motion:Pe?se:null,defaultMotions:Pe?V:null,activeKey:Ne,onActive:gn,onInactive:bn,selectedKeys:Ge,inlineIndent:ce,subMenuOpenDelay:m,subMenuCloseDelay:O,forceSubMenuRender:P,builtinPlacements:ve,triggerSubMenuAction:Ce,getPopupContainer:Ve,itemIcon:de,expandIcon:L,onItemClick:Rn,onOpenChange:$t},t.createElement(qt.Provider,{value:hn},wn),t.createElement("div",{style:{display:"none"},"aria-hidden":!0},t.createElement(jt.Provider,{value:pn},J)))))}),Je=Sr;Je.Item=gt;Je.SubMenu=It;Je.ItemGroup=en;Je.Divider=tn;export{tn as D,Je as E,gt as M,It as S,en as a,Te as u};
