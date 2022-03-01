(self.webpackChunk=self.webpackChunk||[]).push([[11858],{3905:(e,t,r)=>{"use strict";r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>f,mdx:()=>w,useMDXComponents:()=>d,withMDXComponents:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){return function(t){var r=d(t.components);return n.createElement(e,o({},t,{components:r}))}},d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=d(r),f=a,m=s["".concat(i,".").concat(f)]||s[f]||p[f]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function w(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36742:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(79973),a=r(67294),o=r(73727),i=r(52263),l=r(13919),u=r(10412),c=(0,a.createContext)({collectLink:function(){}}),s=r(44996),d=r(18780),f=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const p=function(e){var t,r,p=e.isNavLink,m=e.to,w=e.href,v=e.activeClassName,g=e.isActive,h=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,b=void 0===y||y,k=(0,n.Z)(e,f),x=(0,i.default)().siteConfig,O=x.trailingSlash,E=x.baseUrl,C=(0,s.useBaseUrlUtils)().withBaseUrl,j=(0,a.useContext)(c),N=m||w,P=(0,l.Z)(N),R=null==N?void 0:N.replace("pathname://",""),U=void 0!==R?(r=R,b&&function(e){return e.startsWith("/")}(r)?C(r):r):void 0;U&&P&&(U=(0,d.applyTrailingSlash)(U,{trailingSlash:O,baseUrl:E}));var T=(0,a.useRef)(!1),D=p?o.OL:o.rU,M=u.default.canUseIntersectionObserver,_=(0,a.useRef)();(0,a.useEffect)((function(){return!M&&P&&null!=U&&window.docusaurus.prefetch(U),function(){M&&_.current&&_.current.disconnect()}}),[_,U,M,P]);var B=null!==(t=null==U?void 0:U.startsWith("#"))&&void 0!==t&&t,S=!U||!P||B;return U&&P&&!B&&!h&&j.collectLink(U),S?a.createElement("a",Object.assign({href:U},N&&!P&&{target:"_blank",rel:"noopener noreferrer"},k)):a.createElement(D,Object.assign({},k,{onMouseEnter:function(){T.current||null==U||(window.docusaurus.preload(U),T.current=!0)},innerRef:function(e){var t,r;M&&e&&P&&(t=e,r=function(){null!=U&&window.docusaurus.prefetch(U)},_.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.current.unobserve(t),_.current.disconnect(),r())}))})),_.current.observe(t))},to:U||""},p&&{isActive:g,activeClassName:v}))}},13919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>a})},44996:(e,t,r)=>{"use strict";r.r(t),r.d(t,{useBaseUrlUtils:()=>o,default:()=>i});var n=r(52263),a=r(13919);function o(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,l=void 0!==i&&i,u=o.absolute,c=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(l)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+s:s}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var a,o=e.split(/[#?]/)[0],i="/"===o||o===n?o:(a=o,r?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(o,i)}},18780:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var o=r(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(o).default}})},29964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},68629:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(36742),a=r(44256),o=r(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),t)}var u=function(){var e=o.useState(!1),t=e[0],r=e[1],n=function(e){r(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},s=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},d=function(){return o.createElement(l,null,o.createElement(c,null),o.createElement(u,null),o.createElement(s,null))},f=function(){return o.createElement(l,null,o.createElement(u,null),o.createElement(s,null))};const p=function(){return(0,a.fbContent)({internal:o.createElement(d,null),external:o.createElement(f,null)})}},80905:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>d,metadata:()=>f,toc:()=>p,default:()=>v});var n,a=r(74034),o=r(79973),i=(r(67294),r(3905)),l=r(68629),u=r(44256),c=["components"],s={id:"workflow",title:"Workflow",slug:"/guided-tour/workflow/",description:"Relay guide to workflow",keywords:["workflow","compiler"]},d=void 0,f={unversionedId:"guided-tour/workflow",id:"guided-tour/workflow",isDocsHomePage:!1,title:"Workflow",description:"Relay guide to workflow",source:"@site/docs/guided-tour/workflow.md",sourceDirName:"guided-tour",slug:"/guided-tour/workflow/",permalink:"/docs/next/guided-tour/workflow/",editUrl:"https://github.com/facebook/relay/tree/main/website/docs/guided-tour/workflow.md",tags:[],version:"current",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1646166644,formattedLastUpdatedAt:"3/1/2022",frontMatter:{id:"workflow",title:"Workflow",slug:"/guided-tour/workflow/",description:"Relay guide to workflow",keywords:["workflow","compiler"]},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/next/guided-tour/"},next:{title:"Queries",permalink:"/docs/next/guided-tour/rendering/queries/"}},p=[],m=(n="FbWorkflow",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),w={toc:p};function v(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.mdx)("wrapper",(0,a.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(u.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(m,{mdxType:"FbWorkflow"})),(0,i.mdx)(u.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("p",null,"Before we can get started writing Relay code, we need to make sure to ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"../../getting-started/installation-and-setup/#set-up-relay-compiler"},"setup the Relay Compiler")),"."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"../../guides/compiler/"},"Relay Compiler"))," will analyze any ",(0,i.mdx)("inlineCode",{parentName:"p"},"graphql")," literals inside your Javascript code, and produce a set of artifacts that are used by Relay at runtime, when the application is running on the browser."),(0,i.mdx)("p",null,"So whenever we're developing Relay components, for example by writing ",(0,i.mdx)("a",{parentName:"p",href:"../rendering/fragments/"},"Fragments")," or ",(0,i.mdx)("a",{parentName:"p",href:"../rendering/queries/"},"Queries"),", we will need to run the Relay Compiler:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn run relay\n")),(0,i.mdx)("p",null,"Or we can run it in watch mode, so the artifacts are re-generated as we update our source code:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn run relay --watch\n"))),(0,i.mdx)(l.Z,{mdxType:"DocsRating"}))}v.isMDXComponent=!0}}]);