(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"5awE":function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),r=n.n(a),l=n("WVuG"),c=n("GqfL"),o=n("5c5H"),i=n("ReUR"),u=r.a.memo((e=>{var t=e.demos,n=t["docs-demo01-5"].component,a=t["docs-demo02-3"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"useeventtarget"},r.a.createElement(l["AnchorLink"],{to:"#useeventtarget","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"useEventTarget"),r.a.createElement("p",null,"\u5e38\u89c1\u8868\u5355\u63a7\u4ef6(\u901a\u8fc7 e.target.value \u83b7\u53d6\u8868\u5355\u503c) \u7684 onChange \u8ddf value \u903b\u8f91\u5c01\u88c5\uff0c\u652f\u6301\u81ea\u5b9a\u4e49\u503c\u8f6c\u6362\u548c\u91cd\u7f6e\u529f\u80fd\u3002"),r.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.a.createElement(l["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},r.a.createElement(l["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),r.a.createElement(c["default"],t["docs-demo01-5"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"\u81ea\u5b9a\u4e49\u8f6c\u6362\u51fd\u6570"},r.a.createElement(l["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u8f6c\u6362\u51fd\u6570","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u8f6c\u6362\u51fd\u6570")),r.a.createElement(c["default"],t["docs-demo02-3"].previewerProps,r.a.createElement(a,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(o["a"],{code:"const [value, { onChange, reset }  ] = useEventTarget<T, U>(Options<T, U>);",lang:"typescript"}),r.a.createElement("h3",{id:"result"},r.a.createElement(l["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Result"),r.a.createElement(i["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"value"),r.a.createElement("td",null,"\u8868\u5355\u63a7\u4ef6\u7684\u503c"),r.a.createElement("td",null,r.a.createElement("code",null,"T"))),r.a.createElement("tr",null,r.a.createElement("td",null,"onChange"),r.a.createElement("td",null,"\u8868\u5355\u63a7\u4ef6\u503c\u53d1\u751f\u53d8\u5316\u65f6\u5019\u7684\u56de\u8c03"),r.a.createElement("td",null,r.a.createElement("code",null,"(e: ","{"," target: ","{"," value: T ","}"," ","}",") => void"))),r.a.createElement("tr",null,r.a.createElement("td",null,"reset"),r.a.createElement("td",null,"\u91cd\u7f6e\u51fd\u6570"),r.a.createElement("td",null,r.a.createElement("code",null,"() => void"))))),r.a.createElement("h3",{id:"options"},r.a.createElement(l["AnchorLink"],{to:"#options","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Options"),r.a.createElement(i["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"initialValue"),r.a.createElement("td",null,"\u53ef\u9009\u9879, \u521d\u59cb\u503c"),r.a.createElement("td",null,r.a.createElement("code",null,"T")),r.a.createElement("td",null,"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"transformer"),r.a.createElement("td",null,"\u53ef\u9009\u9879\uff0c\u53ef\u81ea\u5b9a\u4e49\u56de\u8c03\u503c\u7684\u8f6c\u5316"),r.a.createElement("td",null,r.a.createElement("code",null,"(value: U) => T")),r.a.createElement("td",null,"-")))))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(u,{demos:n})}},"5pq4":function(e,t,n){},A9BD:function(e,t,n){},GqfL:function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),r=n.n(a),l=n("VqeS"),c=n("MZF8"),o=n("WVuG"),i=n("5c5H");n("5pq4");function u(e,t){return E(e)||f(e,t)||s(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function f(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){o=!0,r=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw r}}return l}}function E(e){if(Array.isArray(e))return e}function v(e,t){var n,a=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return a||(a=t.tsx?"tsx":"jsx"),a}var b=function(e){var t,n,d,s=Object(a["useRef"])(),m=Object(a["useContext"])(o["context"]),f=m.locale,E=Object(o["useLocaleProps"])(f,e),b=Object(o["useDemoUrl"])(E.identifier),p=E.demoUrl||b,h=(null===c["a"]||void 0===c["a"]?void 0:c["a"].location.hash)==="#".concat(E.identifier),y=1===Object.keys(E.sources).length,_=Object(o["useCodeSandbox"])((null===(t=E.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:E),g=Object(o["useRiddle"])((null===(n=E.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:E),w=Object(o["useMotions"])(E.motions||[],s.current),k=u(w,2),O=k[0],j=k[1],A=Object(o["useCopy"])(),N=u(A,2),x=N[0],C=N[1],S=Object(a["useState"])((function(){return E.sources._?"_":Object.keys(E.sources)[0]})),L=u(S,2),I=L[0],T=L[1],R=Object(a["useState"])(v(I,E.sources[I])),U=u(R,2),M=U[0],P=U[1],B=Object(a["useState"])(Boolean(E.defaultShowCode)),q=u(B,2),D=q[0],F=q[1],G=Object(a["useState"])(Math.random()),V=u(G,2),$=V[0],W=V[1],H=E.sources[I][M]||E.sources[I].content,J=Object(o["useTSPlaygroundUrl"])(f,H),Q=Object(a["useRef"])(),z=Object(o["usePrefersColor"])(),X=u(z,1),Z=X[0],K=E.actionBarRender,Y=void 0===K?function(e){return e}:K;function ee(e){T(e),P(v(e,E.sources[e]))}return Object(a["useEffect"])((function(){W(Math.random())}),[Z]),r.a.createElement("div",{style:E.style,className:[E.className,"__dumi-default-previewer",h?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:E.identifier,"data-debug":E.debug||void 0,"data-iframe":E.iframe||void 0},E.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:s,className:"__dumi-default-previewer-demo",style:{transform:E.transform?"translate(0, 0)":void 0,padding:E.compact||E.iframe&&!1!==E.compact?"0":void 0,background:E.background}},E.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(E.iframe).replace(/(\d)$/,"$1px")},key:$,src:p,ref:Q}):E.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":E.title},E.title&&r.a.createElement(o["AnchorLink"],{to:"#".concat(E.identifier)},E.title),E.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:E.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},Y(r.a.createElement(r.a.Fragment,null,_&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:_}),g&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:g}),E.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:j,onClick:function(){return O()}}),E.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return W(Math.random())}}),!(null===(d=E.hideActions)||void 0===d?void 0:d.includes("EXTERNAL"))&&r.a.createElement(o["Link"],{target:"_blank",to:p},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":C,onClick:function(){return x(H)}}),"tsx"===M&&D&&r.a.createElement(o["Link"],{target:"_blank",to:J},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(D?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return F(!D)}})))),D&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!y&&r.a.createElement(l["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:I,onChange:ee},Object.keys(E.sources).map((function(e){return r.a.createElement(l["a"],{tab:"_"===e?"index.".concat(v(e,E.sources[e])):e,key:e})}))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(i["a"],{code:H,lang:M,showCopy:!1}))))};t["default"]=b},MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},ReUR:function(e,t,n){"use strict";var a=n("1QO0"),r=n.n(a),l=n("bIC1"),c=n.n(l);n("A9BD");function o(e,t){return m(e)||s(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){o=!0,r=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw r}}return l}}function m(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=Object(a["useRef"])(),l=Object(a["useState"])(!1),i=o(l,2),u=i[0],d=i[1],s=Object(a["useState"])(!1),m=o(s,2),f=m[0],E=m[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){d(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":f||void 0},r.a.createElement("table",null,t)))};t["a"]=f}}]);