(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"5pq4":function(e,t,n){},A9BD:function(e,t,n){},GqfL:function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),r=n.n(a),l=n("VqeS"),o=n("MZF8"),c=n("WVuG"),i=n("5c5H");n("5pq4");function u(e,t){return E(e)||f(e,t)||d(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function f(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){c=!0,r=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function E(e){if(Array.isArray(e))return e}function b(e,t){var n,a=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return a||(a=t.tsx?"tsx":"jsx"),a}var p=function(e){var t,n,s,d=Object(a["useRef"])(),m=Object(a["useContext"])(c["context"]),f=m.locale,E=Object(c["useLocaleProps"])(f,e),p=Object(c["useDemoUrl"])(E.identifier),v=E.demoUrl||p,h=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(E.identifier),y=1===Object.keys(E.sources).length,_=Object(c["useCodeSandbox"])((null===(t=E.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:E),g=Object(c["useRiddle"])((null===(n=E.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:E),k=Object(c["useMotions"])(E.motions||[],d.current),w=u(k,2),O=w[0],j=w[1],A=Object(c["useCopy"])(),N=u(A,2),S=N[0],x=N[1],C=Object(a["useState"])((function(){return E.sources._?"_":Object.keys(E.sources)[0]})),L=u(C,2),I=L[0],R=L[1],M=Object(a["useState"])(b(I,E.sources[I])),z=u(M,2),T=z[0],F=z[1],U=Object(a["useState"])(Boolean(E.defaultShowCode)),P=u(U,2),B=P[0],q=P[1],D=Object(a["useState"])(Math.random()),G=u(D,2),$=G[0],H=G[1],V=E.sources[I][T]||E.sources[I].content,W=Object(c["useTSPlaygroundUrl"])(f,V),J=Object(a["useRef"])(),Q=Object(c["usePrefersColor"])(),X=u(Q,1),Z=X[0],K=E.actionBarRender,Y=void 0===K?function(e){return e}:K;function ee(e){R(e),F(b(e,E.sources[e]))}return Object(a["useEffect"])((function(){H(Math.random())}),[Z]),r.a.createElement("div",{style:E.style,className:[E.className,"__dumi-default-previewer",h?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:E.identifier,"data-debug":E.debug||void 0,"data-iframe":E.iframe||void 0},E.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:d,className:"__dumi-default-previewer-demo",style:{transform:E.transform?"translate(0, 0)":void 0,padding:E.compact||E.iframe&&!1!==E.compact?"0":void 0,background:E.background}},E.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(E.iframe).replace(/(\d)$/,"$1px")},key:$,src:v,ref:J}):E.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":E.title},E.title&&r.a.createElement(c["AnchorLink"],{to:"#".concat(E.identifier)},E.title),E.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:E.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},Y(r.a.createElement(r.a.Fragment,null,_&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:_}),g&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:g}),E.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:j,onClick:function(){return O()}}),E.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return H(Math.random())}}),!(null===(s=E.hideActions)||void 0===s?void 0:s.includes("EXTERNAL"))&&r.a.createElement(c["Link"],{target:"_blank",to:v},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":x,onClick:function(){return S(V)}}),"tsx"===T&&B&&r.a.createElement(c["Link"],{target:"_blank",to:W},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(B?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return q(!B)}})))),B&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!y&&r.a.createElement(l["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:I,onChange:ee},Object.keys(E.sources).map((function(e){return r.a.createElement(l["a"],{tab:"_"===e?"index.".concat(b(e,E.sources[e])):e,key:e})}))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(i["a"],{code:V,lang:T,showCopy:!1}))))};t["default"]=p},MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},ReUR:function(e,t,n){"use strict";var a=n("1QO0"),r=n.n(a),l=n("bIC1"),o=n.n(l);n("A9BD");function c(e,t){return m(e)||d(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){c=!0,r=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function m(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=Object(a["useRef"])(),l=Object(a["useState"])(!1),i=c(l,2),u=i[0],s=i[1],d=Object(a["useState"])(!1),m=c(d,2),f=m[0],E=m[1];return Object(a["useEffect"])((function(){var e=n.current,t=o()((function(){s(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":f||void 0},r.a.createElement("table",null,t)))};t["a"]=f},Tx3m:function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),r=n.n(a),l=n("WVuG"),o=n("GqfL"),c=n("5c5H"),i=n("ReUR"),u=r.a.memo((e=>{var t=e.demos,n=t["usememoizedfn-demo01"].component,a=t["usememoizedfn-demo02"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"usememoizedfn"},r.a.createElement(l["AnchorLink"],{to:"#usememoizedfn","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"useMemoizedFn"),r.a.createElement("p",null,"\u6301\u4e45\u5316 function \u7684 Hook\uff0c\u7406\u8bba\u4e0a\uff0c\u53ef\u4ee5\u4f7f\u7528 useMemoizedFn \u5b8c\u5168\u4ee3\u66ff useCallback\u3002"),r.a.createElement("p",null,"\u5728\u67d0\u4e9b\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528 useCallback \u6765\u8bb0\u4f4f\u4e00\u4e2a\u51fd\u6570\uff0c\u4f46\u662f\u5728\u7b2c\u4e8c\u4e2a\u53c2\u6570 deps \u53d8\u5316\u65f6\uff0c\u4f1a\u91cd\u65b0\u751f\u6210\u51fd\u6570\uff0c\u5bfc\u81f4\u51fd\u6570\u5730\u5740\u53d8\u5316\u3002"),r.a.createElement(c["a"],{code:"const [state, setState] = useState('');\n\n// \u5728 state \u53d8\u5316\u65f6\uff0cfunc \u5730\u5740\u4f1a\u53d8\u5316\nconst fun = useCallback(\n  () => {\n    console.log(state);\n  }, \n  [state]\n);",lang:"ts"}),r.a.createElement("p",null,"\u4f7f\u7528 useMemoizedFn\uff0c\u53ef\u4ee5\u7701\u7565\u7b2c\u4e8c\u4e2a\u53c2\u6570 deps\uff0c\u540c\u65f6\u4fdd\u8bc1\u51fd\u6570\u5730\u5740\u6c38\u8fdc\u4e0d\u4f1a\u53d8\u5316\u3002"),r.a.createElement(c["a"],{code:"const [state, setState] = useState('');\n\n// fun \u5730\u5740\u6c38\u8fdc\u4e0d\u4f1a\u53d8\u5316\nconst fun = useMemoizedFn(\n  () => {\n    console.log(state);\n  }\n);",lang:"ts"}),r.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.a.createElement(l["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},r.a.createElement(l["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),r.a.createElement(o["default"],t["usememoizedfn-demo01"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"\u6027\u80fd\u63d0\u5347"},r.a.createElement(l["AnchorLink"],{to:"#\u6027\u80fd\u63d0\u5347","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u6027\u80fd\u63d0\u5347")),r.a.createElement(o["default"],t["usememoizedfn-demo02"].previewerProps,r.a.createElement(a,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(c["a"],{code:"const fn = useMemoizedFn<T>(fn: T): T;",lang:"ts"}),r.a.createElement("h3",{id:"params"},r.a.createElement(l["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Params"),r.a.createElement(i["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"fn"),r.a.createElement("td",null,"\u9700\u8981\u6301\u4e45\u5316\u7684\u51fd\u6570"),r.a.createElement("td",null,r.a.createElement("code",null,"(...args: any[]) => any")),r.a.createElement("td",null,"-")))),r.a.createElement("h3",{id:"result"},r.a.createElement(l["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Result"),r.a.createElement(i["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"fn"),r.a.createElement("td",null,"\u5f15\u7528\u5730\u5740\u6c38\u8fdc\u4e0d\u4f1a\u53d8\u5316\u7684 fn"),r.a.createElement("td",null,r.a.createElement("code",null,"(...args: any[]) => any"))))))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(u,{demos:n})}}}]);