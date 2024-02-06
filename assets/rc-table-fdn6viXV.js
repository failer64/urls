import{r as t}from"./react-RCQyz0-a.js";import{c as Wt,a as dn,u as Z}from"./@rc-component-KC8IvooG.js";import"./react-is-q81m-9gd.js";import{c as D,d as Ie,b as z,e as g,g as Q,h as Le,f as Ce}from"./@babel-NyfAOc0i.js";import{c as V}from"./classnames-bfnzNRGW.js";import{p as Zn,o as et,F as fn,i as Be,h as An,x as $t,c as Bt,J as Ge,L as Xn,M as Dn,k as At,d as Un,D as Xt,C as Vn}from"./rc-util-P8w88VWb.js";import{R as vn}from"./rc-resize-observer-cjiFeZj2.js";import{L as Dt}from"./rc-virtual-list-_jxhUvxu.js";var Te={},Je="rc-table-internal-hook",mn=Wt(),nt=mn.makeImmutable,Fe=mn.responseImmutable,Ut=mn.useImmutableMark,te=dn(),tt=t.createContext({renderWithProps:!1}),Vt="RC_TABLE_KEY";function jt(e){return e==null?[]:Array.isArray(e)?e:[e]}function Qe(e){var r=[],a={};return e.forEach(function(n){for(var o=n||{},l=o.key,i=o.dataIndex,s=l||jt(i).join("-")||Vt;a[s];)s="".concat(s,"_next");a[s]=!0,r.push(s)}),r}function sn(e){return e!=null}function Yt(e){return e&&Ie(e)==="object"&&!Array.isArray(e)&&!t.isValidElement(e)}function Gt(e,r,a,n,o,l){var i=t.useContext(tt),s=Ut(),c=Zn(function(){if(sn(n))return[n];var u=r==null||r===""?[]:Array.isArray(r)?r:[r],m=fn(e,u),f=m,d=void 0;if(o){var v=o(m,e,a);Yt(v)?(f=v.children,d=v.props,i.renderWithProps=!0):f=v}return[f,d]},[s,e,n,r,o,a],function(u,m){if(l){var f=D(u,2),d=f[1],v=D(m,2),p=v[1];return l(p,d)}return i.renderWithProps?!0:!et(u,m,!0)});return c}function qt(e,r,a,n){var o=e+r-1;return e<=n&&o>=a}function Jt(e,r){return Z(te,function(a){var n=qt(e,r||1,a.hoverStartRow,a.hoverEndRow);return[n,a.onHover]})}var Qt=function(r){var a=r.ellipsis,n=r.rowType,o=r.children,l,i=a===!0?{showTitle:!0}:a;return i&&(i.showTitle||n==="header")&&(typeof o=="string"||typeof o=="number"?l=o.toString():t.isValidElement(o)&&typeof o.props.children=="string"&&(l=o.props.children)),l};function Zt(e){var r,a,n,o,l,i,s,c,u=e.component,m=e.children,f=e.ellipsis,d=e.scope,v=e.prefixCls,p=e.className,S=e.align,y=e.record,I=e.render,b=e.dataIndex,N=e.renderIndex,L=e.shouldCellUpdate,E=e.index,k=e.rowType,K=e.colSpan,A=e.rowSpan,F=e.fixLeft,O=e.fixRight,X=e.firstFixLeft,w=e.lastFixLeft,C=e.firstFixRight,_=e.lastFixRight,T=e.appendNode,h=e.additionalProps,x=h===void 0?{}:h,R=e.isSticky,H="".concat(v,"-cell"),U=Z(te,["supportSticky","allColumnsFixedLeft"]),W=U.supportSticky,re=U.allColumnsFixedLeft,ye=Gt(y,b,N,m,I,L),ve=D(ye,2),ee=ve[0],M=ve[1],ce={},ae=typeof F=="number"&&W,me=typeof O=="number"&&W;ae&&(ce.position="sticky",ce.left=F),me&&(ce.position="sticky",ce.right=O);var he=(r=(a=(n=M==null?void 0:M.colSpan)!==null&&n!==void 0?n:x.colSpan)!==null&&a!==void 0?a:K)!==null&&r!==void 0?r:1,oe=(o=(l=(i=M==null?void 0:M.rowSpan)!==null&&i!==void 0?i:x.rowSpan)!==null&&l!==void 0?l:A)!==null&&o!==void 0?o:1,we=Jt(E,oe),j=D(we,2),Y=j[0],G=j[1],Se=Be(function(se){var pe;y&&G(E,E+oe-1),x==null||(pe=x.onMouseEnter)===null||pe===void 0||pe.call(x,se)}),ze=Be(function(se){var pe;y&&G(-1,-1),x==null||(pe=x.onMouseLeave)===null||pe===void 0||pe.call(x,se)});if(he===0||oe===0)return null;var Re=(s=x.title)!==null&&s!==void 0?s:Qt({rowType:k,ellipsis:f,children:ee}),le=V(H,p,(c={},z(c,"".concat(H,"-fix-left"),ae&&W),z(c,"".concat(H,"-fix-left-first"),X&&W),z(c,"".concat(H,"-fix-left-last"),w&&W),z(c,"".concat(H,"-fix-left-all"),w&&re&&W),z(c,"".concat(H,"-fix-right"),me&&W),z(c,"".concat(H,"-fix-right-first"),C&&W),z(c,"".concat(H,"-fix-right-last"),_&&W),z(c,"".concat(H,"-ellipsis"),f),z(c,"".concat(H,"-with-append"),T),z(c,"".concat(H,"-fix-sticky"),(ae||me)&&R&&W),z(c,"".concat(H,"-row-hover"),!M&&Y),c),x.className,M==null?void 0:M.className),B={};S&&(B.textAlign=S);var Ee=g(g(g(g({},ce),x.style),B),M==null?void 0:M.style),ie=ee;return Ie(ie)==="object"&&!Array.isArray(ie)&&!t.isValidElement(ie)&&(ie=null),f&&(w||C)&&(ie=t.createElement("span",{className:"".concat(H,"-content")},ie)),t.createElement(u,Q({},M,x,{className:le,style:Ee,title:Re,scope:d,onMouseEnter:Se,onMouseLeave:ze,colSpan:he!==1?he:null,rowSpan:oe!==1?oe:null}),T,ie)}const He=t.memo(Zt);function pn(e,r,a,n,o,l){var i=a[e]||{},s=a[r]||{},c,u;i.fixed==="left"?c=n.left[o==="rtl"?r:e]:s.fixed==="right"&&(u=n.right[o==="rtl"?e:r]);var m=!1,f=!1,d=!1,v=!1,p=a[r+1],S=a[e-1],y=!(l!=null&&l.children);if(o==="rtl"){if(c!==void 0){var I=S&&S.fixed==="left";v=!I&&y}else if(u!==void 0){var b=p&&p.fixed==="right";d=!b&&y}}else if(c!==void 0){var N=p&&p.fixed==="left";m=!N&&y}else if(u!==void 0){var L=S&&S.fixed==="right";f=!L&&y}return{fixLeft:c,fixRight:u,lastFixLeft:m,firstFixRight:f,lastFixRight:d,firstFixLeft:v,isSticky:n.isSticky}}var rt=t.createContext({});function er(e){var r=e.className,a=e.index,n=e.children,o=e.colSpan,l=o===void 0?1:o,i=e.rowSpan,s=e.align,c=Z(te,["prefixCls","direction"]),u=c.prefixCls,m=c.direction,f=t.useContext(rt),d=f.scrollColumnIndex,v=f.stickyOffsets,p=f.flattenColumns,S=f.columns,y=a+l-1,I=y+1===d?l+1:l,b=pn(a,a+I-1,p,v,m,S==null?void 0:S[a]);return t.createElement(He,Q({className:r,index:a,component:"td",prefixCls:u,record:null,dataIndex:null,align:s,colSpan:I,rowSpan:i,render:function(){return n}},b))}var nr=["children"];function tr(e){var r=e.children,a=Le(e,nr);return t.createElement("tr",a,r)}function Ze(e){var r=e.children;return r}Ze.Row=tr;Ze.Cell=er;function rr(e){var r=e.children,a=e.stickyOffsets,n=e.flattenColumns,o=e.columns,l=Z(te,"prefixCls"),i=n.length-1,s=n[i],c=t.useMemo(function(){return{stickyOffsets:a,flattenColumns:n,scrollColumnIndex:s!=null&&s.scrollbar?i:null,columns:o}},[s,n,i,a,o]);return t.createElement(rt.Provider,{value:c},t.createElement("tfoot",{className:"".concat(l,"-summary")},r))}const qe=Fe(rr);var ar=Ze;function or(e){return null}function lr(e){return null}function at(e,r,a,n,o,l,i){e.push({record:r,indent:a,index:i});var s=l(r),c=o==null?void 0:o.has(s);if(r&&Array.isArray(r[n])&&c)for(var u=0;u<r[n].length;u+=1)at(e,r[n][u],a+1,n,o,l,u)}function ot(e,r,a,n){var o=t.useMemo(function(){if(a!=null&&a.size){for(var l=[],i=0;i<(e==null?void 0:e.length);i+=1){var s=e[i];at(l,s,0,r,a,n,i)}return l}return e==null?void 0:e.map(function(c,u){return{record:c,indent:0,index:u}})},[e,r,a,n]);return o}function lt(e,r,a,n){var o=Z(te,["prefixCls","fixedInfoList","flattenColumns","expandableType","expandRowByClick","onTriggerExpand","rowClassName","expandedRowClassName","indentSize","expandIcon","expandedRowRender","expandIconColumnIndex","expandedKeys","childrenColumnName","rowExpandable","onRow"]),l=o.flattenColumns,i=o.expandableType,s=o.expandedKeys,c=o.childrenColumnName,u=o.onTriggerExpand,m=o.rowExpandable,f=o.onRow,d=o.expandRowByClick,v=o.rowClassName,p=i==="nest",S=i==="row"&&(!m||m(e)),y=S||p,I=s&&s.has(r),b=c&&e&&e[c],N=Be(u),L=f==null?void 0:f(e,a),E=L==null?void 0:L.onClick,k=function(O){d&&y&&u(e,O);for(var X=arguments.length,w=new Array(X>1?X-1:0),C=1;C<X;C++)w[C-1]=arguments[C];E==null||E.apply(void 0,[O].concat(w))},K;typeof v=="string"?K=v:typeof v=="function"&&(K=v(e,a,n));var A=Qe(l);return g(g({},o),{},{columnsKey:A,nestExpandable:p,expanded:I,hasNestChildren:b,record:e,onTriggerExpand:N,rowSupportExpand:S,expandable:y,rowProps:g(g({},L),{},{className:V(K,L==null?void 0:L.className),onClick:k})})}function it(e){var r=e.prefixCls,a=e.children,n=e.component,o=e.cellComponent,l=e.className,i=e.expanded,s=e.colSpan,c=e.isEmpty,u=Z(te,["scrollbarSize","fixHeader","fixColumn","componentWidth","horizonScroll"]),m=u.scrollbarSize,f=u.fixHeader,d=u.fixColumn,v=u.componentWidth,p=u.horizonScroll,S=a;return(c?p&&v:d)&&(S=t.createElement("div",{style:{width:v-(f?m:0),position:"sticky",left:0,overflow:"hidden"},className:"".concat(r,"-expanded-row-fixed")},S)),t.createElement(n,{className:l,style:{display:i?null:"none"}},t.createElement(He,{component:o,prefixCls:r,colSpan:s},S))}function ct(e,r,a,n,o){var l=e.record,i=e.prefixCls,s=e.columnsKey,c=e.fixedInfoList,u=e.expandIconColumnIndex,m=e.nestExpandable,f=e.indentSize,d=e.expandIcon,v=e.expanded,p=e.hasNestChildren,S=e.onTriggerExpand,y=s[a],I=c[a],b;a===(u||0)&&m&&(b=t.createElement(t.Fragment,null,t.createElement("span",{style:{paddingLeft:"".concat(f*n,"px")},className:"".concat(i,"-row-indent indent-level-").concat(n)}),d({prefixCls:i,expanded:v,expandable:p,record:l,onExpand:S})));var N;return r.onCell&&(N=r.onCell(l,o)),{key:y,fixedInfo:I,appendCellNode:b,additionalCellProps:N||{}}}function ir(e){var r=e.className,a=e.style,n=e.record,o=e.index,l=e.renderIndex,i=e.rowKey,s=e.indent,c=s===void 0?0:s,u=e.rowComponent,m=e.cellComponent,f=e.scopeCellComponent,d=lt(n,i,o,c),v=d.prefixCls,p=d.flattenColumns,S=d.expandedRowClassName,y=d.expandedRowRender,I=d.rowProps,b=d.expanded,N=d.rowSupportExpand,L=t.useRef(!1);L.current||(L.current=b);var E=S&&S(n,o,c),k=t.createElement(u,Q({},I,{"data-row-key":i,className:V(r,"".concat(v,"-row"),"".concat(v,"-row-level-").concat(c),I==null?void 0:I.className,c>=1?E:""),style:g(g({},a),I==null?void 0:I.style)}),p.map(function(F,O){var X=F.render,w=F.dataIndex,C=F.className,_=ct(d,F,O,c,o),T=_.key,h=_.fixedInfo,x=_.appendCellNode,R=_.additionalCellProps;return t.createElement(He,Q({className:C,ellipsis:F.ellipsis,align:F.align,scope:F.rowScope,component:F.rowScope?f:m,prefixCls:v,key:T,record:n,index:o,renderIndex:l,dataIndex:w,render:X,shouldCellUpdate:F.shouldCellUpdate},h,{appendNode:x,additionalProps:R}))})),K;if(N&&(L.current||b)){var A=y(n,o,c+1,b);K=t.createElement(it,{expanded:b,className:V("".concat(v,"-expanded-row"),"".concat(v,"-expanded-row-level-").concat(c+1),E),prefixCls:v,component:u,cellComponent:m,colSpan:p.length,isEmpty:!1},A)}return t.createElement(t.Fragment,null,k,K)}const cr=Fe(ir);function sr(e){var r=e.columnKey,a=e.onColumnResize,n=t.useRef();return t.useEffect(function(){n.current&&a(r,n.current.offsetWidth)},[]),t.createElement(vn,{data:r},t.createElement("td",{ref:n,style:{padding:0,border:0,height:0}},t.createElement("div",{style:{height:0,overflow:"hidden"}}," ")))}function ur(e){var r=e.prefixCls,a=e.columnsKey,n=e.onColumnResize;return t.createElement("tr",{"aria-hidden":"true",className:"".concat(r,"-measure-row"),style:{height:0,fontSize:0}},t.createElement(vn.Collection,{onBatchResize:function(l){l.forEach(function(i){var s=i.data,c=i.size;n(s,c.offsetWidth)})}},a.map(function(o){return t.createElement(sr,{key:o,columnKey:o,onColumnResize:n})})))}function dr(e){var r=e.data,a=e.measureColumnWidth,n=Z(te,["prefixCls","getComponent","onColumnResize","flattenColumns","getRowKey","expandedKeys","childrenColumnName","emptyNode"]),o=n.prefixCls,l=n.getComponent,i=n.onColumnResize,s=n.flattenColumns,c=n.getRowKey,u=n.expandedKeys,m=n.childrenColumnName,f=n.emptyNode,d=ot(r,m,u,c),v=t.useRef({renderWithProps:!1}),p=l(["body","wrapper"],"tbody"),S=l(["body","row"],"tr"),y=l(["body","cell"],"td"),I=l(["body","cell"],"th"),b;r.length?b=d.map(function(L,E){var k=L.record,K=L.indent,A=L.index,F=c(k,E);return t.createElement(cr,{key:F,rowKey:F,record:k,index:E,renderIndex:A,rowComponent:S,cellComponent:y,scopeCellComponent:I,getRowKey:c,indent:K})}):b=t.createElement(it,{expanded:!0,className:"".concat(o,"-placeholder"),prefixCls:o,component:S,cellComponent:y,colSpan:s.length,isEmpty:!0},f);var N=Qe(s);return t.createElement(tt.Provider,{value:v.current},t.createElement(p,{className:"".concat(o,"-tbody")},a&&t.createElement(ur,{prefixCls:o,columnsKey:N,onColumnResize:i}),b))}const fr=Fe(dr);var vr=["expandable"],st="RC_TABLE_INTERNAL_COL_DEFINE";function mr(e){var r=e.expandable,a=Le(e,vr),n;return"expandable"in e?n=g(g({},a),r):n=a,n.showExpandColumn===!1&&(n.expandIconColumnIndex=-1),n}var pr=["columnType"];function ut(e){for(var r=e.colWidths,a=e.columns,n=e.columCount,o=[],l=n||a.length,i=!1,s=l-1;s>=0;s-=1){var c=r[s],u=a&&a[s],m=u&&u[st];if(c||m||i){var f=m||{};f.columnType;var d=Le(f,pr);o.unshift(t.createElement("col",Q({key:s,style:{width:c}},d))),i=!0}}return t.createElement("colgroup",null,o)}var xr=["className","noData","columns","flattenColumns","colWidths","columCount","stickyOffsets","direction","fixHeader","stickyTopOffset","stickyBottomOffset","stickyClassName","onScroll","maxContentScroll","children"];function Cr(e,r){return t.useMemo(function(){for(var a=[],n=0;n<r;n+=1){var o=e[n];if(o!==void 0)a[n]=o;else return null}return a},[e.join("_"),r])}var yr=t.forwardRef(function(e,r){var a=e.className,n=e.noData,o=e.columns,l=e.flattenColumns,i=e.colWidths,s=e.columCount,c=e.stickyOffsets,u=e.direction,m=e.fixHeader,f=e.stickyTopOffset,d=e.stickyBottomOffset,v=e.stickyClassName,p=e.onScroll,S=e.maxContentScroll,y=e.children,I=Le(e,xr),b=Z(te,["prefixCls","scrollbarSize","isSticky"]),N=b.prefixCls,L=b.scrollbarSize,E=b.isSticky,k=E&&!m?0:L,K=t.useRef(null),A=t.useCallback(function(h){An(r,h),An(K,h)},[]);t.useEffect(function(){var h;function x(R){var H=R,U=H.currentTarget,W=H.deltaX;W&&(p({currentTarget:U,scrollLeft:U.scrollLeft+W}),R.preventDefault())}return(h=K.current)===null||h===void 0||h.addEventListener("wheel",x),function(){var R;(R=K.current)===null||R===void 0||R.removeEventListener("wheel",x)}},[]);var F=t.useMemo(function(){return l.every(function(h){return h.width})},[l]),O=l[l.length-1],X={fixed:O?O.fixed:null,scrollbar:!0,onHeaderCell:function(){return{className:"".concat(N,"-cell-scrollbar")}}},w=t.useMemo(function(){return k?[].concat(Ce(o),[X]):o},[k,o]),C=t.useMemo(function(){return k?[].concat(Ce(l),[X]):l},[k,l]),_=t.useMemo(function(){var h=c.right,x=c.left;return g(g({},c),{},{left:u==="rtl"?[].concat(Ce(x.map(function(R){return R+k})),[0]):x,right:u==="rtl"?h:[].concat(Ce(h.map(function(R){return R+k})),[0]),isSticky:E})},[k,c,E]),T=Cr(i,s);return t.createElement("div",{style:g({overflow:"hidden"},E?{top:f,bottom:d}:{}),ref:A,className:V(a,z({},v,!!v))},t.createElement("table",{style:{tableLayout:"fixed",visibility:n||T?null:"hidden"}},(!n||!S||F)&&t.createElement(ut,{colWidths:T?[].concat(Ce(T),[k]):[],columCount:s+1,columns:C}),y(g(g({},I),{},{stickyOffsets:_,columns:w,flattenColumns:C}))))});const jn=t.memo(yr);function hr(e){var r=e.cells,a=e.stickyOffsets,n=e.flattenColumns,o=e.rowComponent,l=e.cellComponent,i=e.tdCellComponent,s=e.onHeaderRow,c=e.index,u=Z(te,["prefixCls","direction"]),m=u.prefixCls,f=u.direction,d;s&&(d=s(r.map(function(p){return p.column}),c));var v=Qe(r.map(function(p){return p.column}));return t.createElement(o,d,r.map(function(p,S){var y=p.column,I=pn(p.colStart,p.colEnd,n,a,f,y),b;return y&&y.onHeaderCell&&(b=p.column.onHeaderCell(y)),t.createElement(He,Q({},p,{scope:y.title?p.colSpan>1?"colgroup":"col":null,ellipsis:y.ellipsis,align:y.align,component:y.title?l:i,prefixCls:m,key:v[S]},I,{additionalProps:b,rowType:"header"}))}))}function gr(e){var r=[];function a(i,s){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;r[c]=r[c]||[];var u=s,m=i.filter(Boolean).map(function(f){var d={key:f.key,className:f.className||"",children:f.title,column:f,colStart:u},v=1,p=f.children;return p&&p.length>0&&(v=a(p,u,c+1).reduce(function(S,y){return S+y},0),d.hasSubColumns=!0),"colSpan"in f&&(v=f.colSpan),"rowSpan"in f&&(d.rowSpan=f.rowSpan),d.colSpan=v,d.colEnd=d.colStart+v-1,r[c].push(d),u+=v,v});return m}a(e,0);for(var n=r.length,o=function(s){r[s].forEach(function(c){!("rowSpan"in c)&&!c.hasSubColumns&&(c.rowSpan=n-s)})},l=0;l<n;l+=1)o(l);return r}function wr(e){var r=e.stickyOffsets,a=e.columns,n=e.flattenColumns,o=e.onHeaderRow,l=Z(te,["prefixCls","getComponent"]),i=l.prefixCls,s=l.getComponent,c=t.useMemo(function(){return gr(a)},[a]),u=s(["header","wrapper"],"thead"),m=s(["header","row"],"tr"),f=s(["header","cell"],"th"),d=s(["header","cell"],"td");return t.createElement(u,{className:"".concat(i,"-thead")},c.map(function(v,p){var S=t.createElement(hr,{key:p,flattenColumns:n,cells:v,stickyOffsets:r,rowComponent:m,cellComponent:f,tdCellComponent:d,onHeaderRow:o,index:p});return S}))}const Yn=Fe(wr);function Gn(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return typeof r=="number"?r:r.endsWith("%")?e*parseFloat(r)/100:null}function Sr(e,r,a){return t.useMemo(function(){if(r&&r>0){var n=0,o=0;e.forEach(function(d){var v=Gn(r,d.width);v?n+=v:o+=1});var l=Math.max(r,a),i=Math.max(l-n,o),s=o,c=i/o,u=0,m=e.map(function(d){var v=g({},d),p=Gn(r,v.width);if(p)v.width=p;else{var S=Math.floor(c);v.width=s===1?i:S,i-=S,s-=1}return u+=v.width,v});if(u<l){var f=l/u;i=l,m.forEach(function(d,v){var p=Math.floor(d.width*f);d.width=v===m.length-1?i:p,i-=p})}return[m,Math.max(u,l)]}return[e,r]},[e,r,a])}var Rr=["children"],Er=["fixed"];function dt(e){return $t(e).filter(function(r){return t.isValidElement(r)}).map(function(r){var a=r.key,n=r.props,o=n.children,l=Le(n,Rr),i=g({key:a},l);return o&&(i.children=dt(o)),i})}function ft(e){return e.filter(function(r){return r&&Ie(r)==="object"&&!r.hidden}).map(function(r){var a=r.children;return a&&a.length>0?g(g({},r),{},{children:ft(a)}):r})}function un(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key";return e.filter(function(a){return a&&Ie(a)==="object"}).reduce(function(a,n,o){var l=n.fixed,i=l===!0?"left":l,s="".concat(r,"-").concat(o),c=n.children;return c&&c.length>0?[].concat(Ce(a),Ce(un(c,s).map(function(u){return g({fixed:i},u)}))):[].concat(Ce(a),[g(g({key:s},n),{},{fixed:i})])},[])}function br(e){return e.map(function(r){var a=r.fixed,n=Le(r,Er),o=a;return a==="left"?o="right":a==="right"&&(o="left"),g({fixed:o},n)})}function Nr(e,r){var a=e.prefixCls,n=e.columns,o=e.children,l=e.expandable,i=e.expandedKeys,s=e.columnTitle,c=e.getRowKey,u=e.onTriggerExpand,m=e.expandIcon,f=e.rowExpandable,d=e.expandIconColumnIndex,v=e.direction,p=e.expandRowByClick,S=e.columnWidth,y=e.fixed,I=e.scrollWidth,b=e.clientWidth,N=t.useMemo(function(){var w=n||dt(o)||[];return ft(w.slice())},[n,o]),L=t.useMemo(function(){if(l){var w,C=N.slice();if(!C.includes(Te)){var _=d||0;_>=0&&C.splice(_,0,Te)}var T=C.indexOf(Te);C=C.filter(function(H,U){return H!==Te||U===T});var h=N[T],x;(y==="left"||y)&&!d?x="left":(y==="right"||y)&&d===N.length?x="right":x=h?h.fixed:null;var R=(w={},z(w,st,{className:"".concat(a,"-expand-icon-col"),columnType:"EXPAND_COLUMN"}),z(w,"title",s),z(w,"fixed",x),z(w,"className","".concat(a,"-row-expand-icon-cell")),z(w,"width",S),z(w,"render",function(U,W,re){var ye=c(W,re),ve=i.has(ye),ee=f?f(W):!0,M=m({prefixCls:a,expanded:ve,expandable:ee,record:W,onExpand:u});return p?t.createElement("span",{onClick:function(ae){return ae.stopPropagation()}},M):M}),w);return C.map(function(H){return H===Te?R:H})}return N.filter(function(H){return H!==Te})},[l,N,c,i,m,v]),E=t.useMemo(function(){var w=L;return r&&(w=r(w)),w.length||(w=[{render:function(){return null}}]),w},[r,L,v]),k=t.useMemo(function(){return v==="rtl"?br(un(E)):un(E)},[E,v,I]),K=t.useMemo(function(){for(var w=-1,C=k.length-1;C>=0;C-=1){var _=k[C].fixed;if(_==="left"||_===!0){w=C;break}}if(w>=0)for(var T=0;T<=w;T+=1){var h=k[T].fixed;if(h!=="left"&&h!==!0)return!0}var x=k.findIndex(function(U){var W=U.fixed;return W==="right"});if(x>=0)for(var R=x;R<k.length;R+=1){var H=k[R].fixed;if(H!=="right")return!0}return!1},[k]),A=Sr(k,I,b),F=D(A,2),O=F[0],X=F[1];return[E,O,X,K]}function kr(e){var r,a=e.prefixCls,n=e.record,o=e.onExpand,l=e.expanded,i=e.expandable,s="".concat(a,"-row-expand-icon");if(!i)return t.createElement("span",{className:V(s,"".concat(a,"-row-spaced"))});var c=function(m){o(n,m),m.stopPropagation()};return t.createElement("span",{className:V(s,(r={},z(r,"".concat(a,"-row-expanded"),l),z(r,"".concat(a,"-row-collapsed"),!l),r)),onClick:c})}function Tr(e,r,a){var n=[];function o(l){(l||[]).forEach(function(i,s){n.push(r(i,s)),o(i[a])})}return o(e),n}function Ir(e,r,a){var n=mr(e),o=n.expandIcon,l=n.expandedRowKeys,i=n.defaultExpandedRowKeys,s=n.defaultExpandAllRows,c=n.expandedRowRender,u=n.onExpand,m=n.onExpandedRowsChange,f=n.childrenColumnName,d=o||kr,v=f||"children",p=t.useMemo(function(){return c?"row":e.expandable&&e.internalHooks===Je&&e.expandable.__PARENT_RENDER_ICON__||r.some(function(E){return E&&Ie(E)==="object"&&E[v]})?"nest":!1},[!!c,r]),S=t.useState(function(){return i||(s?Tr(r,a,v):[])}),y=D(S,2),I=y[0],b=y[1],N=t.useMemo(function(){return new Set(l||I||[])},[l,I]),L=t.useCallback(function(E){var k=a(E,r.indexOf(E)),K,A=N.has(k);A?(N.delete(k),K=Ce(N)):K=[].concat(Ce(N),[k]),b(K),u&&u(!A,E),m&&m(K)},[a,N,r,u,m]);return[n,p,N,d,v,L]}function Lr(e,r,a,n){var o=e.map(function(l,i){return pn(i,i,e,r,a,n==null?void 0:n[i])});return Zn(function(){return o},[o],function(l,i){return!et(l,i)})}function vt(e){var r=t.useRef(e),a=t.useState({}),n=D(a,2),o=n[1],l=t.useRef(null),i=t.useRef([]);function s(c){i.current.push(c);var u=Promise.resolve();l.current=u,u.then(function(){if(l.current===u){var m=i.current,f=r.current;i.current=[],m.forEach(function(d){r.current=d(r.current)}),l.current=null,f!==r.current&&o({})}})}return t.useEffect(function(){return function(){l.current=null}},[]),[r.current,s]}function Hr(e){var r=t.useRef(e||null),a=t.useRef();function n(){window.clearTimeout(a.current)}function o(i){r.current=i,n(),a.current=window.setTimeout(function(){r.current=null,a.current=void 0},100)}function l(){return r.current}return t.useEffect(function(){return n},[]),[o,l]}function Mr(){var e=t.useState(-1),r=D(e,2),a=r[0],n=r[1],o=t.useState(-1),l=D(o,2),i=l[0],s=l[1],c=t.useCallback(function(u,m){n(u),s(m)},[]);return[a,i,c]}var qn=Bt()?window:null;function _r(e,r){var a=Ie(e)==="object"?e:{},n=a.offsetHeader,o=n===void 0?0:n,l=a.offsetSummary,i=l===void 0?0:l,s=a.offsetScroll,c=s===void 0?0:s,u=a.getContainer,m=u===void 0?function(){return qn}:u,f=m()||qn;return t.useMemo(function(){var d=!!e;return{isSticky:d,stickyClassName:d?"".concat(r,"-sticky-holder"):"",offsetHeader:o,offsetSummary:i,offsetScroll:c,container:f}},[c,o,i,r,f])}function Pr(e,r,a){var n=t.useMemo(function(){var o=r.length,l=function(u,m,f){for(var d=[],v=0,p=u;p!==m;p+=f)d.push(v),r[p].fixed&&(v+=e[p]||0);return d},i=l(0,o,1),s=l(o-1,-1,-1).reverse();return a==="rtl"?{left:s,right:i}:{left:i,right:s}},[e,r,a]);return n}function Jn(e){var r=e.className,a=e.children;return t.createElement("div",{className:r},a)}var Kr=function(r,a){var n,o,l=r.scrollBodyRef,i=r.onScroll,s=r.offsetScroll,c=r.container,u=Z(te,"prefixCls"),m=((n=l.current)===null||n===void 0?void 0:n.scrollWidth)||0,f=((o=l.current)===null||o===void 0?void 0:o.clientWidth)||0,d=m&&f*(f/m),v=t.useRef(),p=vt({scrollLeft:0,isHiddenScrollBar:!1}),S=D(p,2),y=S[0],I=S[1],b=t.useRef({delta:0,x:0}),N=t.useState(!1),L=D(N,2),E=L[0],k=L[1],K=function(){k(!1)},A=function(C){C.persist(),b.current.delta=C.pageX-y.scrollLeft,b.current.x=0,k(!0),C.preventDefault()},F=function(C){var _,T=C||((_=window)===null||_===void 0?void 0:_.event),h=T.buttons;if(!E||h===0){E&&k(!1);return}var x=b.current.x+C.pageX-b.current.x-b.current.delta;x<=0&&(x=0),x+d>=f&&(x=f-d),i({scrollLeft:x/f*(m+2)}),b.current.x=C.pageX},O=function(){if(l.current){var C=Dn(l.current).top,_=C+l.current.offsetHeight,T=c===window?document.documentElement.scrollTop+window.innerHeight:Dn(c).top+c.clientHeight;_-Xn()<=T||C>=T-s?I(function(h){return g(g({},h),{},{isHiddenScrollBar:!0})}):I(function(h){return g(g({},h),{},{isHiddenScrollBar:!1})})}},X=function(C){I(function(_){return g(g({},_),{},{scrollLeft:C/m*f||0})})};return t.useImperativeHandle(a,function(){return{setScrollLeft:X}}),t.useEffect(function(){var w=Ge(document.body,"mouseup",K,!1),C=Ge(document.body,"mousemove",F,!1);return O(),function(){w.remove(),C.remove()}},[d,E]),t.useEffect(function(){var w=Ge(c,"scroll",O,!1),C=Ge(window,"resize",O,!1);return function(){w.remove(),C.remove()}},[c]),t.useEffect(function(){y.isHiddenScrollBar||I(function(w){var C=l.current;return C?g(g({},w),{},{scrollLeft:C.scrollLeft/C.scrollWidth*C.clientWidth}):w})},[y.isHiddenScrollBar]),m<=f||!d||y.isHiddenScrollBar?null:t.createElement("div",{style:{height:Xn(),width:f,bottom:s},className:"".concat(u,"-sticky-scroll")},t.createElement("div",{onMouseDown:A,ref:v,className:V("".concat(u,"-sticky-scroll-bar"),z({},"".concat(u,"-sticky-scroll-bar-active"),E)),style:{width:"".concat(d,"px"),transform:"translate3d(".concat(y.scrollLeft,"px, 0, 0)")}}))};const Fr=t.forwardRef(Kr);var mt="rc-table",Or=[],zr={};function Wr(){return"No Data"}function $r(e,r){var a,n=g({rowKey:"key",prefixCls:mt,emptyText:Wr},e),o=n.prefixCls,l=n.className,i=n.rowClassName,s=n.style,c=n.data,u=n.rowKey,m=n.scroll,f=n.tableLayout,d=n.direction,v=n.title,p=n.footer,S=n.summary,y=n.caption,I=n.id,b=n.showHeader,N=n.components,L=n.emptyText,E=n.onRow,k=n.onHeaderRow,K=n.internalHooks,A=n.transformColumns,F=n.internalRefs,O=n.tailor,X=n.getContainerWidth,w=n.sticky,C=c||Or,_=!!C.length,T=K===Je,h=t.useCallback(function(P,$){return fn(N,P)||$},[N]),x=t.useMemo(function(){return typeof u=="function"?u:function(P){var $=P&&P[u];return $}},[u]),R=h(["body"]),H=Mr(),U=D(H,3),W=U[0],re=U[1],ye=U[2],ve=Ir(n,C,x),ee=D(ve,6),M=ee[0],ce=ee[1],ae=ee[2],me=ee[3],he=ee[4],oe=ee[5],we=m==null?void 0:m.x,j=t.useState(0),Y=D(j,2),G=Y[0],Se=Y[1],ze=Nr(g(g(g({},n),M),{},{expandable:!!M.expandedRowRender,columnTitle:M.columnTitle,expandedKeys:ae,getRowKey:x,onTriggerExpand:oe,expandIcon:me,expandIconColumnIndex:M.expandIconColumnIndex,direction:d,scrollWidth:T&&O&&typeof we=="number"?we:null,clientWidth:G}),T?A:null),Re=D(ze,4),le=Re[0],B=Re[1],Ee=Re[2],ie=Re[3],se=Ee??we,pe=t.useMemo(function(){return{columns:le,flattenColumns:B}},[le,B]),be=t.useRef(),en=t.useRef(),q=t.useRef(),Cn=t.useRef();t.useImperativeHandle(r,function(){return{nativeElement:be.current,scrollTo:function($){var ne;if(q.current instanceof HTMLElement){var J=$.index,fe=$.top,Ke=$.key;if(fe){var Ne;(Ne=q.current)===null||Ne===void 0||Ne.scrollTo({top:fe})}else{var ke,$e=Ke??x(C[J]);(ke=q.current.querySelector('[data-row-key="'.concat($e,'"]')))===null||ke===void 0||ke.scrollIntoView()}}else(ne=q.current)!==null&&ne!==void 0&&ne.scrollTo&&q.current.scrollTo($)}}});var yn=t.useRef(),xt=t.useState(!1),hn=D(xt,2),Ct=hn[0],Ae=hn[1],yt=t.useState(!1),gn=D(yt,2),ht=gn[0],Xe=gn[1],gt=vt(new Map),wn=D(gt,2),wt=wn[0],St=wn[1],Rt=Qe(B),Sn=Rt.map(function(P){return wt.get(P)}),Rn=t.useMemo(function(){return Sn},[Sn.join("_")]),De=Pr(Rn,B,d),ue=m&&sn(m.y),xe=m&&sn(se)||!!M.fixed,Me=xe&&B.some(function(P){var $=P.fixed;return $}),En=t.useRef(),_e=_r(w,o),ge=_e.isSticky,Et=_e.offsetHeader,bt=_e.offsetSummary,Nt=_e.offsetScroll,kt=_e.stickyClassName,Tt=_e.container,de=t.useMemo(function(){return S==null?void 0:S(C)},[S,C]),We=(ue||ge)&&t.isValidElement(de)&&de.type===Ze&&de.props.fixed,nn,Ue,tn;ue&&(Ue={overflowY:"scroll",maxHeight:m.y}),xe&&(nn={overflowX:"auto"},ue||(Ue={overflowY:"hidden"}),tn={width:se===!0?"auto":se,minWidth:"100%"});var bn=t.useCallback(function(P,$){At(be.current)&&St(function(ne){if(ne.get(P)!==$){var J=new Map(ne);return J.set(P,$),J}return ne})},[]),It=Hr(null),Nn=D(It,2),Lt=Nn[0],kn=Nn[1];function Ve(P,$){$&&(typeof $=="function"?$(P):$.scrollLeft!==P&&($.scrollLeft=P,$.scrollLeft!==P&&setTimeout(function(){$.scrollLeft=P},0)))}var Pe=Be(function(P){var $=P.currentTarget,ne=P.scrollLeft,J=d==="rtl",fe=typeof ne=="number"?ne:$.scrollLeft,Ke=$||zr;if(!kn()||kn()===Ke){var Ne;Lt(Ke),Ve(fe,en.current),Ve(fe,q.current),Ve(fe,yn.current),Ve(fe,(Ne=En.current)===null||Ne===void 0?void 0:Ne.setScrollLeft)}var ke=$||en.current;if(ke){var $e=ke.scrollWidth,cn=ke.clientWidth;if($e===cn){Ae(!1),Xe(!1);return}J?(Ae(-fe<$e-cn),Xe(-fe>0)):(Ae(fe>0),Xe(fe<$e-cn))}}),Tn=function(){xe&&q.current?Pe({currentTarget:q.current}):(Ae(!1),Xe(!1))},Ht=function($){var ne=$.width,J=be.current?be.current.offsetWidth:ne;T&&X&&be.current&&(J=X(be.current,J)||J),J!==G&&(Tn(),Se(J))},In=t.useRef(!1);t.useEffect(function(){In.current&&Tn()},[xe,c,le.length]),t.useEffect(function(){In.current=!0},[]);var Mt=t.useState(0),Ln=D(Mt,2),je=Ln[0],Hn=Ln[1],_t=t.useState(!0),Mn=D(_t,2),_n=Mn[0],Pt=Mn[1];t.useEffect(function(){(!O||!T)&&(q.current instanceof Element?Hn(Un(q.current).width):Hn(Un(Cn.current).width)),Pt(Xt("position","sticky"))},[]),t.useEffect(function(){T&&F&&(F.body.current=q.current)});var Kt=t.useCallback(function(P){return t.createElement(t.Fragment,null,t.createElement(Yn,P),We==="top"&&t.createElement(qe,P,de))},[We,de]),Ft=t.useCallback(function(P){return t.createElement(qe,P,de)},[de]),Pn=h(["table"],"table"),Ye=t.useMemo(function(){return f||(Me?se==="max-content"?"auto":"fixed":ue||ge||B.some(function(P){var $=P.ellipsis;return $})?"fixed":"auto")},[ue,Me,B,f,ge]),rn,an={colWidths:Rn,columCount:B.length,stickyOffsets:De,onHeaderRow:k,fixHeader:ue,scroll:m},Kn=t.useMemo(function(){return _?null:typeof L=="function"?L():L},[_,L]),Fn=t.createElement(fr,{data:C,measureColumnWidth:ue||xe||ge}),On=t.createElement(ut,{colWidths:B.map(function(P){var $=P.width;return $}),columns:B}),zn=y!=null?t.createElement("caption",{className:"".concat(o,"-caption")},y):void 0,Ot=Vn(n,{data:!0}),Wn=Vn(n,{aria:!0});if(ue||ge){var on;typeof R=="function"?(on=R(C,{scrollbarSize:je,ref:q,onScroll:Pe}),an.colWidths=B.map(function(P,$){var ne=P.width,J=$===B.length-1?ne-je:ne;return typeof J=="number"&&!Number.isNaN(J)?J:0})):on=t.createElement("div",{style:g(g({},nn),Ue),onScroll:Pe,ref:q,className:V("".concat(o,"-body"))},t.createElement(Pn,Q({style:g(g({},tn),{},{tableLayout:Ye})},Wn),zn,On,Fn,!We&&de&&t.createElement(qe,{stickyOffsets:De,flattenColumns:B,columns:le},de)));var $n=g(g(g({noData:!C.length,maxContentScroll:xe&&se==="max-content"},an),pe),{},{direction:d,stickyClassName:kt,onScroll:Pe});rn=t.createElement(t.Fragment,null,b!==!1&&t.createElement(jn,Q({},$n,{stickyTopOffset:Et,className:"".concat(o,"-header"),ref:en}),Kt),on,We&&We!=="top"&&t.createElement(jn,Q({},$n,{stickyBottomOffset:bt,className:"".concat(o,"-summary"),ref:yn}),Ft),ge&&q.current&&q.current instanceof Element&&t.createElement(Fr,{ref:En,offsetScroll:Nt,scrollBodyRef:q,onScroll:Pe,container:Tt}))}else rn=t.createElement("div",{style:g(g({},nn),Ue),className:V("".concat(o,"-content")),onScroll:Pe,ref:q},t.createElement(Pn,Q({style:g(g({},tn),{},{tableLayout:Ye})},Wn),zn,On,b!==!1&&t.createElement(Yn,Q({},an,pe)),Fn,de&&t.createElement(qe,{stickyOffsets:De,flattenColumns:B,columns:le},de)));var ln=t.createElement("div",Q({className:V(o,l,(a={},z(a,"".concat(o,"-rtl"),d==="rtl"),z(a,"".concat(o,"-ping-left"),Ct),z(a,"".concat(o,"-ping-right"),ht),z(a,"".concat(o,"-layout-fixed"),f==="fixed"),z(a,"".concat(o,"-fixed-header"),ue),z(a,"".concat(o,"-fixed-column"),Me),z(a,"".concat(o,"-fixed-column-gapped"),Me&&ie),z(a,"".concat(o,"-scroll-horizontal"),xe),z(a,"".concat(o,"-has-fix-left"),B[0]&&B[0].fixed),z(a,"".concat(o,"-has-fix-right"),B[B.length-1]&&B[B.length-1].fixed==="right"),a)),style:s,id:I,ref:be},Ot),v&&t.createElement(Jn,{className:"".concat(o,"-title")},v(C)),t.createElement("div",{ref:Cn,className:"".concat(o,"-container")},rn),p&&t.createElement(Jn,{className:"".concat(o,"-footer")},p(C)));xe&&(ln=t.createElement(vn,{onResize:Ht},ln));var Bn=Lr(B,De,d,le),zt=t.useMemo(function(){return{scrollX:se,prefixCls:o,getComponent:h,scrollbarSize:je,direction:d,fixedInfoList:Bn,isSticky:ge,supportSticky:_n,componentWidth:G,fixHeader:ue,fixColumn:Me,horizonScroll:xe,tableLayout:Ye,rowClassName:i,expandedRowClassName:M.expandedRowClassName,expandIcon:me,expandableType:ce,expandRowByClick:M.expandRowByClick,expandedRowRender:M.expandedRowRender,onTriggerExpand:oe,expandIconColumnIndex:M.expandIconColumnIndex,indentSize:M.indentSize,allColumnsFixedLeft:B.every(function(P){return P.fixed==="left"}),emptyNode:Kn,columns:le,flattenColumns:B,onColumnResize:bn,hoverStartRow:W,hoverEndRow:re,onHover:ye,rowExpandable:M.rowExpandable,onRow:E,getRowKey:x,expandedKeys:ae,childrenColumnName:he}},[se,o,h,je,d,Bn,ge,_n,G,ue,Me,xe,Ye,i,M.expandedRowClassName,me,ce,M.expandRowByClick,M.expandedRowRender,oe,M.expandIconColumnIndex,M.indentSize,Kn,le,B,bn,W,re,ye,M.rowExpandable,E,x,ae,he]);return t.createElement(te.Provider,{value:zt},ln)}var Br=t.forwardRef($r);function Ar(e){return nt(Br,e)}var Oe=Ar();Oe.EXPAND_COLUMN=Te;Oe.INTERNAL_HOOKS=Je;Oe.Column=or;Oe.ColumnGroup=lr;Oe.Summary=ar;var xn=dn(null),pt=dn(null);function Xr(e,r,a){var n=r||1;return a[e+n]-(a[e]||0)}function Dr(e){var r=e.rowInfo,a=e.column,n=e.colIndex,o=e.indent,l=e.index,i=e.component,s=e.renderIndex,c=e.record,u=e.style,m=e.className,f=e.inverse,d=e.getHeight,v=a.render,p=a.dataIndex,S=a.className,y=a.width,I=Z(pt,["columnsOffset"]),b=I.columnsOffset,N=ct(r,a,n,o,l),L=N.key,E=N.fixedInfo,k=N.appendCellNode,K=N.additionalCellProps,A=K.style,F=K.colSpan,O=F===void 0?1:F,X=K.rowSpan,w=X===void 0?1:X,C=n-1,_=Xr(C,O,b),T=O>1?y-_:0,h=g(g(g({},A),u),{},{flex:"0 0 ".concat(_,"px"),width:"".concat(_,"px"),marginRight:T,pointerEvents:"auto"}),x=t.useMemo(function(){return f?w<=1:O===0||w===0||w>1},[w,O,f]);x?h.visibility="hidden":f&&(h.height=d==null?void 0:d(w));var R=x?function(){return null}:v,H={};return(w===0||O===0)&&(H.rowSpan=1,H.colSpan=1),t.createElement(He,Q({className:V(S,m),ellipsis:a.ellipsis,align:a.align,scope:a.rowScope,component:i,prefixCls:r.prefixCls,key:L,record:c,index:l,renderIndex:s,dataIndex:p,render:R,shouldCellUpdate:a.shouldCellUpdate},E,{appendNode:k,additionalProps:g(g({},K),{},{style:h},H)}))}var Ur=["data","index","className","rowKey","style","extra","getHeight"],Vr=t.forwardRef(function(e,r){var a=e.data,n=e.index,o=e.className,l=e.rowKey,i=e.style,s=e.extra,c=e.getHeight,u=Le(e,Ur),m=a.record,f=a.indent,d=a.index,v=Z(te,["prefixCls","flattenColumns","fixColumn","componentWidth","scrollX"]),p=v.scrollX,S=v.flattenColumns,y=v.prefixCls,I=v.fixColumn,b=v.componentWidth,N=Z(xn,["getComponent"]),L=N.getComponent,E=lt(m,l,n,f),k=L(["body","row"],"div"),K=L(["body","cell"],"div"),A=E.rowSupportExpand,F=E.expanded,O=E.rowProps,X=E.expandedRowRender,w=E.expandedRowClassName,C;if(A&&F){var _=X(m,n,f+1,F),T=w==null?void 0:w(m,n,f),h={};I&&(h={style:z({},"--virtual-width","".concat(b,"px"))});var x="".concat(y,"-expanded-row-cell");C=t.createElement(k,{className:V("".concat(y,"-expanded-row"),"".concat(y,"-expanded-row-level-").concat(f+1),T)},t.createElement(He,{component:K,prefixCls:y,className:V(x,z({},"".concat(x,"-fixed"),I)),additionalProps:h},_))}var R=g(g({},i),{},{width:p});s&&(R.position="absolute",R.pointerEvents="none");var H=t.createElement(k,Q({},O,u,{ref:A?null:r,className:V(o,"".concat(y,"-row"),O==null?void 0:O.className,z({},"".concat(y,"-row-extra"),s)),style:g(g({},R),O==null?void 0:O.style)}),S.map(function(U,W){return t.createElement(Dr,{key:W,component:K,rowInfo:E,column:U,colIndex:W,indent:f,index:n,renderIndex:d,record:m,inverse:s,getHeight:c})}));return A?t.createElement("div",{ref:r},H,C):H}),Qn=Fe(Vr),jr=t.forwardRef(function(e,r){var a=e.data,n=e.onScroll,o=Z(te,["flattenColumns","onColumnResize","getRowKey","prefixCls","expandedKeys","childrenColumnName","emptyNode","scrollX"]),l=o.flattenColumns,i=o.onColumnResize,s=o.getRowKey,c=o.expandedKeys,u=o.prefixCls,m=o.childrenColumnName,f=o.emptyNode,d=o.scrollX,v=Z(xn),p=v.sticky,S=v.scrollY,y=v.listItemHeight,I=v.getComponent,b=t.useRef(),N=ot(a,m,c,s),L=t.useMemo(function(){var T=0;return l.map(function(h){var x=h.width,R=h.key;return T+=x,[R,x,T]})},[l]),E=t.useMemo(function(){return L.map(function(T){return T[2]})},[L]);t.useEffect(function(){L.forEach(function(T){var h=D(T,2),x=h[0],R=h[1];i(x,R)})},[L]),t.useImperativeHandle(r,function(){var T={scrollTo:function(x){var R;(R=b.current)===null||R===void 0||R.scrollTo(x)}};return Object.defineProperty(T,"scrollLeft",{get:function(){var x;return((x=b.current)===null||x===void 0?void 0:x.getScrollInfo().x)||0},set:function(x){var R;(R=b.current)===null||R===void 0||R.scrollTo({left:x})}}),T});var k=function(h,x){var R,H=(R=N[x])===null||R===void 0?void 0:R.record,U=h.onCell;if(U){var W,re=U(H,x);return(W=re==null?void 0:re.rowSpan)!==null&&W!==void 0?W:1}return 1},K=function(h){var x=h.start,R=h.end,H=h.getSize,U=h.offsetY;if(R<0)return null;for(var W=l.filter(function(j){return k(j,x)===0}),re=x,ye=function(Y){if(W=W.filter(function(G){return k(G,Y)===0}),!W.length)return re=Y,1},ve=x;ve>=0&&!ye(ve);ve-=1);for(var ee=l.filter(function(j){return k(j,R)!==1}),M=R,ce=function(Y){if(ee=ee.filter(function(G){return k(G,Y)!==1}),!ee.length)return M=Math.max(Y-1,R),1},ae=R;ae<N.length&&!ce(ae);ae+=1);for(var me=[],he=function(Y){var G=N[Y];if(!G)return 1;l.some(function(Se){return k(Se,Y)>1})&&me.push(Y)},oe=re;oe<=M;oe+=1)he(oe);var we=me.map(function(j){var Y=N[j],G=s(Y.record,j),Se=function(le){var B=j+le-1,Ee=s(N[B].record,B),ie=H(G,Ee);return ie.bottom-ie.top},ze=H(G);return t.createElement(Qn,{key:j,data:Y,rowKey:G,index:j,style:{top:-U+ze.top},extra:!0,getHeight:Se})});return we},A=t.useMemo(function(){return{columnsOffset:E}},[E]),F="".concat(u,"-tbody"),O=I(["body","wrapper"]),X=I(["body","row"],"div"),w=I(["body","cell"],"div"),C;if(N.length){var _={};p&&(_.position="sticky",_.bottom=0,Ie(p)==="object"&&p.offsetScroll&&(_.bottom=p.offsetScroll)),C=t.createElement(Dt,{fullHeight:!1,ref:b,styles:{horizontalScrollBar:_},className:V(F,"".concat(F,"-virtual")),height:S,itemHeight:y||24,data:N,itemKey:function(h){return s(h.record)},component:O,scrollWidth:d,onVirtualScroll:function(h){var x=h.x;n({scrollLeft:x})},extraRender:K},function(T,h,x){var R=s(T.record,h);return t.createElement(Qn,Q({data:T,rowKey:R,index:h},x))})}else C=t.createElement(X,{className:V("".concat(u,"-placeholder"))},t.createElement(He,{component:w,prefixCls:u},f));return t.createElement(pt.Provider,{value:A},C)}),Yr=Fe(jr),Gr=function(r,a){var n=a.ref,o=a.onScroll;return t.createElement(Yr,{ref:n,data:r,onScroll:o})};function qr(e,r){var a=e.columns,n=e.scroll,o=e.sticky,l=e.prefixCls,i=l===void 0?mt:l,s=e.className,c=e.listItemHeight,u=e.components,m=n||{},f=m.x,d=m.y;typeof f!="number"&&(f=1),typeof d!="number"&&(d=500);var v=Be(function(S,y){return fn(u,S)||y}),p=t.useMemo(function(){return{sticky:o,scrollY:d,listItemHeight:c,getComponent:v}},[o,d,c,v]);return t.createElement(xn.Provider,{value:p},t.createElement(Oe,Q({},e,{className:V(s,"".concat(i,"-virtual")),scroll:g(g({},n),{},{x:f}),components:g(g({},u),{},{body:Gr}),columns:a,internalHooks:Je,tailor:!0,ref:r})))}var Jr=t.forwardRef(qr);function Qr(e){return nt(Jr,e)}Qr();export{Te as E,ar as F,st as I,Qr as a,Je as b,dt as c,Ar as g};
