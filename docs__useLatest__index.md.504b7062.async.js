(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"5pq4":function(e,t,a){},GqfL:function(e,t,a){"use strict";a.r(t);var n=a("1QO0"),r=a.n(n),o=a("VqeS"),l=a("MZF8"),c=a("WVuG"),i=a("5c5H");a("5pq4");function u(e,t){return b(e)||f(e,t)||d(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function f(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,o=[],l=!0,c=!1;try{for(a=a.call(e);!(l=(n=a.next()).done);l=!0)if(o.push(n.value),t&&o.length===t)break}catch(i){c=!0,r=i}finally{try{l||null==a["return"]||a["return"]()}finally{if(c)throw r}}return o}}function b(e){if(Array.isArray(e))return e}function p(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var v=function(e){var t,a,s,d=Object(n["useRef"])(),m=Object(n["useContext"])(c["context"]),f=m.locale,b=Object(c["useLocaleProps"])(f,e),v=Object(c["useDemoUrl"])(b.identifier),E=b.demoUrl||v,h=(null===l["a"]||void 0===l["a"]?void 0:l["a"].location.hash)==="#".concat(b.identifier),_=1===Object.keys(b.sources).length,y=Object(c["useCodeSandbox"])((null===(t=b.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:b),k=Object(c["useRiddle"])((null===(a=b.hideActions)||void 0===a?void 0:a.includes("RIDDLE"))?null:b),g=Object(c["useMotions"])(b.motions||[],d.current),w=u(g,2),O=w[0],j=w[1],N=Object(c["useCopy"])(),x=u(N,2),C=x[0],A=x[1],S=Object(n["useState"])((function(){return b.sources._?"_":Object.keys(b.sources)[0]})),L=u(S,2),I=L[0],R=L[1],T=Object(n["useState"])(p(I,b.sources[I])),M=u(T,2),P=M[0],U=M[1],q=Object(n["useState"])(Boolean(b.defaultShowCode)),F=u(q,2),G=F[0],V=F[1],B=Object(n["useState"])(Math.random()),H=u(B,2),$=H[0],D=H[1],J=b.sources[I][P]||b.sources[I].content,K=Object(c["useTSPlaygroundUrl"])(f,J),Q=Object(n["useRef"])(),W=Object(c["usePrefersColor"])(),X=u(W,1),Z=X[0],Y=b.actionBarRender,z=void 0===Y?function(e){return e}:Y;function ee(e){R(e),U(p(e,b.sources[e]))}return Object(n["useEffect"])((function(){D(Math.random())}),[Z]),r.a.createElement("div",{style:b.style,className:[b.className,"__dumi-default-previewer",h?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:b.identifier,"data-debug":b.debug||void 0,"data-iframe":b.iframe||void 0},b.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:d,className:"__dumi-default-previewer-demo",style:{transform:b.transform?"translate(0, 0)":void 0,padding:b.compact||b.iframe&&!1!==b.compact?"0":void 0,background:b.background}},b.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(b.iframe).replace(/(\d)$/,"$1px")},key:$,src:E,ref:Q}):b.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":b.title},b.title&&r.a.createElement(c["AnchorLink"],{to:"#".concat(b.identifier)},b.title),b.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:b.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},z(r.a.createElement(r.a.Fragment,null,y&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:y}),k&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:k}),b.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:j,onClick:function(){return O()}}),b.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return D(Math.random())}}),!(null===(s=b.hideActions)||void 0===s?void 0:s.includes("EXTERNAL"))&&r.a.createElement(c["Link"],{target:"_blank",to:E},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":A,onClick:function(){return C(J)}}),"tsx"===P&&G&&r.a.createElement(c["Link"],{target:"_blank",to:K},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(G?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return V(!G)}})))),G&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!_&&r.a.createElement(o["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:I,onChange:ee},Object.keys(b.sources).map((function(e){return r.a.createElement(o["a"],{tab:"_"===e?"index.".concat(p(e,b.sources[e])):e,key:e})}))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(i["a"],{code:J,lang:P,showCopy:!1}))))};t["default"]=v},Kv4Y:function(e,t,a){"use strict";a.r(t);var n=a("1QO0"),r=a.n(n),o=a("WVuG"),l=a("GqfL"),c=a("5c5H"),i=r.a.memo((e=>{var t=e.demos,a=t["uselatest-demo01"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"uselatest"},r.a.createElement(o["AnchorLink"],{to:"#uselatest","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"useLatest"),r.a.createElement("p",null,"\u8fd4\u56de\u5f53\u524d\u6700\u65b0\u503c\u7684 Hook\uff0c\u53ef\u4ee5\u907f\u514d\u95ed\u5305\u95ee\u9898\u3002"),r.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.a.createElement(o["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},r.a.createElement(o["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),r.a.createElement(l["default"],t["uselatest-demo01"].previewerProps,r.a.createElement(a,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(o["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(c["a"],{code:"const latestValueRef = useLatest<T>(value: T): React.MutableRefObject<T>;",lang:"ts"}))))}));t["default"]=e=>{var t=r.a.useContext(o["context"]),a=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(i,{demos:a})}},MZF8:function(e,t,a){"use strict";var n=a("ogwx");a.d(t,"a",(function(){return n["b"]}));a("VCU9")}}]);