(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"5pq4":function(e,t,n){},A9BD:function(e,t,n){},GqfL:function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),r=n.n(a),l=n("VqeS"),o=n("MZF8"),c=n("WVuG"),i=n("5c5H");n("5pq4");function u(e,t){return E(e)||f(e,t)||d(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function f(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){c=!0,r=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function E(e){if(Array.isArray(e))return e}function b(e,t){var n,a=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return a||(a=t.tsx?"tsx":"jsx"),a}var p=function(e){var t,n,s,d=Object(a["useRef"])(),m=Object(a["useContext"])(c["context"]),f=m.locale,E=Object(c["useLocaleProps"])(f,e),p=Object(c["useDemoUrl"])(E.identifier),v=E.demoUrl||p,h=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(E.identifier),y=1===Object.keys(E.sources).length,_=Object(c["useCodeSandbox"])((null===(t=E.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:E),k=Object(c["useRiddle"])((null===(n=E.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:E),g=Object(c["useMotions"])(E.motions||[],d.current),w=u(g,2),O=w[0],j=w[1],A=Object(c["useCopy"])(),x=u(A,2),N=x[0],S=x[1],L=Object(a["useState"])((function(){return E.sources._?"_":Object.keys(E.sources)[0]})),C=u(L,2),I=C[0],R=C[1],P=Object(a["useState"])(b(I,E.sources[I])),M=u(P,2),U=M[0],T=M[1],V=Object(a["useState"])(Boolean(E.defaultShowCode)),F=u(V,2),B=F[0],q=F[1],D=Object(a["useState"])(Math.random()),G=u(D,2),$=G[0],W=G[1],H=E.sources[I][U]||E.sources[I].content,J=Object(c["useTSPlaygroundUrl"])(f,H),Q=Object(a["useRef"])(),z=Object(c["usePrefersColor"])(),X=u(z,1),Z=X[0],K=E.actionBarRender,Y=void 0===K?function(e){return e}:K;function ee(e){R(e),T(b(e,E.sources[e]))}return Object(a["useEffect"])((function(){W(Math.random())}),[Z]),r.a.createElement("div",{style:E.style,className:[E.className,"__dumi-default-previewer",h?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:E.identifier,"data-debug":E.debug||void 0,"data-iframe":E.iframe||void 0},E.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:d,className:"__dumi-default-previewer-demo",style:{transform:E.transform?"translate(0, 0)":void 0,padding:E.compact||E.iframe&&!1!==E.compact?"0":void 0,background:E.background}},E.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(E.iframe).replace(/(\d)$/,"$1px")},key:$,src:v,ref:Q}):E.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":E.title},E.title&&r.a.createElement(c["AnchorLink"],{to:"#".concat(E.identifier)},E.title),E.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:E.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},Y(r.a.createElement(r.a.Fragment,null,_&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:_}),k&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:k}),E.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:j,onClick:function(){return O()}}),E.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return W(Math.random())}}),!(null===(s=E.hideActions)||void 0===s?void 0:s.includes("EXTERNAL"))&&r.a.createElement(c["Link"],{target:"_blank",to:v},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":S,onClick:function(){return N(H)}}),"tsx"===U&&B&&r.a.createElement(c["Link"],{target:"_blank",to:J},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(B?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return q(!B)}})))),B&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!y&&r.a.createElement(l["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:I,onChange:ee},Object.keys(E.sources).map((function(e){return r.a.createElement(l["a"],{tab:"_"===e?"index.".concat(b(e,E.sources[e])):e,key:e})}))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(i["a"],{code:H,lang:U,showCopy:!1}))))};t["default"]=p},MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},ReUR:function(e,t,n){"use strict";var a=n("1QO0"),r=n.n(a),l=n("bIC1"),o=n.n(l);n("A9BD");function c(e,t){return m(e)||d(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){c=!0,r=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function m(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=Object(a["useRef"])(),l=Object(a["useState"])(!1),i=c(l,2),u=i[0],s=i[1],d=Object(a["useState"])(!1),m=c(d,2),f=m[0],E=m[1];return Object(a["useEffect"])((function(){var e=n.current,t=o()((function(){s(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":f||void 0},r.a.createElement("table",null,t)))};t["a"]=f},VOvp:function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),r=n.n(a),l=n("WVuG"),o=n("GqfL"),c=n("5c5H"),i=n("ReUR"),u=r.a.memo((e=>{var t=e.demos,n=t["uselockfn-demo01"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"uselockfn"},r.a.createElement(l["AnchorLink"],{to:"#uselockfn","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"useLockFn"),r.a.createElement("p",null,"\u7528\u4e8e\u7ed9\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\u589e\u52a0\u7ade\u6001\u9501\uff0c\u9632\u6b62\u5e76\u53d1\u6267\u884c\u3002"),r.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.a.createElement(l["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},r.a.createElement(l["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),r.a.createElement(o["default"],t["uselockfn-demo01"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(c["a"],{code:"function useLockFn<P extends any[] = any[], V extends any = any>(\n  fn: (...args: P) => Promise<V>\n): fn: (...args: P) => Promise<V | undefined>",lang:"typescript"}),r.a.createElement("h3",{id:"result"},r.a.createElement(l["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Result"),r.a.createElement(i["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"fn"),r.a.createElement("td",null,"\u589e\u52a0\u4e86\u7ade\u6001\u9501\u7684\u51fd\u6570"),r.a.createElement("td",null,r.a.createElement("code",null,"(...args: any[]) => Promise<any>"))))),r.a.createElement("h3",{id:"params"},r.a.createElement(l["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Params"),r.a.createElement(i["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"fn"),r.a.createElement("td",null,"\u9700\u8981\u589e\u52a0\u7ade\u6001\u9501\u7684\u51fd\u6570"),r.a.createElement("td",null,r.a.createElement("code",null,"(...args: any[]) => Promise<any>")),r.a.createElement("td",null,"-")))))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(u,{demos:n})}}}]);