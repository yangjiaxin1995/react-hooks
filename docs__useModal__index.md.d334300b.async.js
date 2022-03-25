(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"5pq4":function(e,t,a){},A9BD:function(e,t,a){},ArIt:function(e,t,a){"use strict";a.r(t);var n=a("1QO0"),l=a.n(n),r=a("WVuG"),o=a("GqfL"),c=a("5c5H"),i=a("ReUR"),u=l.a.memo((e=>{var t=e.demos,a=t["usemodal-demo01"].component,n=t["usemodal-demo02"].component,u=t["usemodal-demo03"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"usemodal"},l.a.createElement(r["AnchorLink"],{to:"#usemodal","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useModal"),l.a.createElement("p",null,"\u4f18\u96c5\u7684\u4f7f\u7528 Modal\u3001Drawer \u5f39\u5c42\u7c7b\u7ec4\u4ef6\u7684 Hook\u3002"),l.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),l.a.createElement("h3",{id:"modal"},l.a.createElement(r["AnchorLink"],{to:"#modal","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Modal")),l.a.createElement(o["default"],t["usemodal-demo01"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"drawer"},l.a.createElement(r["AnchorLink"],{to:"#drawer","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Drawer")),l.a.createElement(o["default"],t["usemodal-demo02"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"data"},l.a.createElement(r["AnchorLink"],{to:"#data","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"data")),l.a.createElement(o["default"],t["usemodal-demo03"].previewerProps,l.a.createElement(u,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(c["a"],{code:"const { visible, data, open, close } = useModal<T>(defaultVisible?: boolean, defaultData?: T);",lang:"ts"}),l.a.createElement("h3",{id:"params"},l.a.createElement(r["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Params"),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"defaultVisible"),l.a.createElement("td",null,"\u9ed8\u8ba4\u7684\u5f00\u5173\u72b6\u6001"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean"))),l.a.createElement("tr",null,l.a.createElement("td",null,"defaultData"),l.a.createElement("td",null,"\u9ed8\u8ba4\u7684\u6570\u636e"),l.a.createElement("td",null,l.a.createElement("code",null,"T"))))),l.a.createElement("h3",{id:"result"},l.a.createElement(r["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Result"),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"data"),l.a.createElement("td",null,"\u9700\u8981\u4f20\u5165\u7684\u503c"),l.a.createElement("td",null,l.a.createElement("code",null,"T"))),l.a.createElement("tr",null,l.a.createElement("td",null,"visible"),l.a.createElement("td",null,"\u5f00\u5173\u72b6\u6001"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean"))),l.a.createElement("tr",null,l.a.createElement("td",null,"open"),l.a.createElement("td",null,"\u6253\u5f00\u5bf9\u8bdd\u6846"),l.a.createElement("td",null,l.a.createElement("code",null,"(value?: T) => void"))),l.a.createElement("tr",null,l.a.createElement("td",null,"close"),l.a.createElement("td",null,"\u5173\u95ed\u5bf9\u8bdd\u6846"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void"))))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(u,{demos:a})}},GqfL:function(e,t,a){"use strict";a.r(t);var n=a("1QO0"),l=a.n(n),r=a("VqeS"),o=a("MZF8"),c=a("WVuG"),i=a("5c5H");a("5pq4");function u(e,t){return E(e)||f(e,t)||m(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return s(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function f(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],o=!0,c=!1;try{for(a=a.call(e);!(o=(n=a.next()).done);o=!0)if(r.push(n.value),t&&r.length===t)break}catch(i){c=!0,l=i}finally{try{o||null==a["return"]||a["return"]()}finally{if(c)throw l}}return r}}function E(e){if(Array.isArray(e))return e}function b(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var p=function(e){var t,a,d,m=Object(n["useRef"])(),s=Object(n["useContext"])(c["context"]),f=s.locale,E=Object(c["useLocaleProps"])(f,e),p=Object(c["useDemoUrl"])(E.identifier),v=E.demoUrl||p,h=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(E.identifier),y=1===Object.keys(E.sources).length,_=Object(c["useCodeSandbox"])((null===(t=E.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:E),w=Object(c["useRiddle"])((null===(a=E.hideActions)||void 0===a?void 0:a.includes("RIDDLE"))?null:E),k=Object(c["useMotions"])(E.motions||[],m.current),g=u(k,2),O=g[0],A=g[1],N=Object(c["useCopy"])(),j=u(N,2),x=j[0],S=j[1],L=Object(n["useState"])((function(){return E.sources._?"_":Object.keys(E.sources)[0]})),C=u(L,2),I=C[0],R=C[1],M=Object(n["useState"])(b(I,E.sources[I])),T=u(M,2),D=T[0],P=T[1],U=Object(n["useState"])(Boolean(E.defaultShowCode)),B=u(U,2),V=B[0],q=B[1],F=Object(n["useState"])(Math.random()),G=u(F,2),$=G[0],H=G[1],W=E.sources[I][D]||E.sources[I].content,J=Object(c["useTSPlaygroundUrl"])(f,W),Q=Object(n["useRef"])(),z=Object(c["usePrefersColor"])(),X=u(z,1),Z=X[0],K=E.actionBarRender,Y=void 0===K?function(e){return e}:K;function ee(e){R(e),P(b(e,E.sources[e]))}return Object(n["useEffect"])((function(){H(Math.random())}),[Z]),l.a.createElement("div",{style:E.style,className:[E.className,"__dumi-default-previewer",h?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:E.identifier,"data-debug":E.debug||void 0,"data-iframe":E.iframe||void 0},E.iframe&&l.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),l.a.createElement("div",{ref:m,className:"__dumi-default-previewer-demo",style:{transform:E.transform?"translate(0, 0)":void 0,padding:E.compact||E.iframe&&!1!==E.compact?"0":void 0,background:E.background}},E.iframe?l.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(E.iframe).replace(/(\d)$/,"$1px")},key:$,src:v,ref:Q}):E.children),l.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":E.title},E.title&&l.a.createElement(c["AnchorLink"],{to:"#".concat(E.identifier)},E.title),E.description&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:E.description}})),l.a.createElement("div",{className:"__dumi-default-previewer-actions"},Y(l.a.createElement(l.a.Fragment,null,_&&l.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:_}),w&&l.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:w}),E.motions&&l.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:A,onClick:function(){return O()}}),E.iframe&&l.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return H(Math.random())}}),!(null===(d=E.hideActions)||void 0===d?void 0:d.includes("EXTERNAL"))&&l.a.createElement(c["Link"],{target:"_blank",to:v},l.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),l.a.createElement("span",null),l.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":S,onClick:function(){return x(W)}}),"tsx"===D&&V&&l.a.createElement(c["Link"],{target:"_blank",to:J},l.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),l.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(V?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return q(!V)}})))),V&&l.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!y&&l.a.createElement(r["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:I,onChange:ee},Object.keys(E.sources).map((function(e){return l.a.createElement(r["a"],{tab:"_"===e?"index.".concat(b(e,E.sources[e])):e,key:e})}))),l.a.createElement("div",{className:"__dumi-default-previewer-source"},l.a.createElement(i["a"],{code:W,lang:D,showCopy:!1}))))};t["default"]=p},MZF8:function(e,t,a){"use strict";var n=a("ogwx");a.d(t,"a",(function(){return n["b"]}));a("VCU9")},ReUR:function(e,t,a){"use strict";var n=a("1QO0"),l=a.n(n),r=a("bIC1"),o=a.n(r);a("A9BD");function c(e,t){return s(e)||m(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function m(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],o=!0,c=!1;try{for(a=a.call(e);!(o=(n=a.next()).done);o=!0)if(r.push(n.value),t&&r.length===t)break}catch(i){c=!0,l=i}finally{try{o||null==a["return"]||a["return"]()}finally{if(c)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,a=Object(n["useRef"])(),r=Object(n["useState"])(!1),i=c(r,2),u=i[0],d=i[1],m=Object(n["useState"])(!1),s=c(m,2),f=s[0],E=s[1];return Object(n["useEffect"])((function(){var e=a.current,t=o()((function(){d(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":u||void 0,"data-right-folded":f||void 0},l.a.createElement("table",null,t)))};t["a"]=f}}]);