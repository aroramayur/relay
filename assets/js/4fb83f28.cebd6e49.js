(self.webpackChunk=self.webpackChunk||[]).push([[17105],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,y=u["".concat(d,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68629:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(44256),i=n(67294);function r(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var o=function(){var e=i.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:r},"Filing a task"))},s=function(){return i.createElement(l,null,i.createElement(d,null),i.createElement(o,null))},c=function(){return i.createElement(l,null,i.createElement(o,null))};const p=function(){return(0,a.fbContent)({internal:i.createElement(s,null),external:i.createElement(c,null)})}},6924:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>u,toc:()=>m,default:()=>h});var a,i=n(22122),r=n(19756),l=(n(67294),n(3905)),o=n(68629),d=n(44256),s=["components"],c={id:"client-only-data",title:"Client-Only Data",slug:"/guided-tour/updating-data/client-only-data/",description:"Relay guide to client-only data",keywords:["client-only"]},p=void 0,u={unversionedId:"guided-tour/updating-data/client-only-data",id:"guided-tour/updating-data/client-only-data",isDocsHomePage:!1,title:"Client-Only Data",description:"Relay guide to client-only data",source:"@site/docs/guided-tour/updating-data/client-only-data.md",sourceDirName:"guided-tour/updating-data",slug:"/guided-tour/updating-data/client-only-data/",permalink:"/docs/next/guided-tour/updating-data/client-only-data/",editUrl:"https://github.com/facebook/relay/tree/main/website/docs/guided-tour/updating-data/client-only-data.md",version:"current",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1640735256,formattedLastUpdatedAt:"12/28/2021",frontMatter:{id:"client-only-data",title:"Client-Only Data",slug:"/guided-tour/updating-data/client-only-data/",description:"Relay guide to client-only data",keywords:["client-only"]},sidebar:"docs",previous:{title:"Local Data Updates",permalink:"/docs/next/guided-tour/updating-data/local-data-updates/"},next:{title:"Retaining Queries",permalink:"/docs/next/guided-tour/accessing-data-without-react/retaining-queries/"}},m=[{value:"Client-Only Data (Client Schema Extensions)",id:"client-only-data-client-schema-extensions",children:[{value:"Extending Existing Types",id:"extending-existing-types",children:[]},{value:"Adding New Types",id:"adding-new-types",children:[]},{value:"Reading Client-Only Data",id:"reading-client-only-data",children:[]},{value:"Updating Client-Only Data",id:"updating-client-only-data",children:[]}]}],y=(a="FbClientOnlyDataDir",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),g={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"client-only-data-client-schema-extensions"},"Client-Only Data (Client Schema Extensions)"),(0,l.kt)("p",null,"Relay provides the ability to extend the GraphQL schema ",(0,l.kt)("em",{parentName:"p"},"on the client")," (i.e. in the browser), via client schema extensions, in order to model data that only needs to be created, read and updated on the client. This can be useful to add small pieces of information to data that is fetched from the server, or to entirely model client-specific state to be stored and managed by Relay."),(0,l.kt)("p",null,"Client schema extensions allows you to modify existing types on the schema (e.g. by adding new fields to a type), or to create entirely new types that only exist in the client."),(0,l.kt)("h3",{id:"extending-existing-types"},"Extending Existing Types"),(0,l.kt)(d.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,l.kt)("p",null,"In order to extend an existing type, add a ",(0,l.kt)("inlineCode",{parentName:"p"},".graphql")," file to the appropriate schema extension directory (depending on the repo):")),(0,l.kt)(d.OssOnly,{mdxType:"OssOnly"},(0,l.kt)("p",null,"In order to extend an existing type, add a ",(0,l.kt)("inlineCode",{parentName:"p"},".graphql")," file to your appropriate source (",(0,l.kt)("inlineCode",{parentName:"p"},"--src"),") directory:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"extend type Comment {\n  is_new_comment: Boolean\n}\n")),(0,l.kt)(d.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,l.kt)(y,{mdxType:"FbClientOnlyDataDir"})),(0,l.kt)(d.OssOnly,{mdxType:"OssOnly"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In this example, we're using the ",(0,l.kt)("inlineCode",{parentName:"li"},"extend")," keyword to extend an existing type, and we're adding a new field, ",(0,l.kt)("inlineCode",{parentName:"li"},"is_new_comment")," to the existing ",(0,l.kt)("inlineCode",{parentName:"li"},"Comment")," type, which we will be able to ",(0,l.kt)("a",{parentName:"li",href:"#reading-client-only-data"},"read")," in our components, and ",(0,l.kt)("a",{parentName:"li",href:"#updating-client-only-data"},"update")," when necessary using normal Relay APIs; you might imagine that we might use this field to render a different visual treatment for a comment if it's new, and we might set it when creating a new comment."))),(0,l.kt)("h3",{id:"adding-new-types"},"Adding New Types"),(0,l.kt)("p",null,"You can define types using the same regular GraphQL syntax, by defining it inside a ",(0,l.kt)("inlineCode",{parentName:"p"},".graphql")," file in  ",(0,l.kt)("inlineCode",{parentName:"p"},"html/js/relay/schema/"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"# You can define more than one type in a single file\nenum FetchStatus {\n  FETCHED\n  PENDING\n  ERRORED\n}\n\n\ntype FetchState {\n  # You can reuse client types to define other types\n  status: FetchStatus\n\n  # You can also reference regular server types\n  started_by: User!\n}\n\nextend type Item {\n  # You can extend server types with client-only types\n  fetch_state: FetchState\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In this contrived example, we're defining 2 new client-only types, and ",(0,l.kt)("inlineCode",{parentName:"li"},"enum")," and a regular ",(0,l.kt)("inlineCode",{parentName:"li"},"type"),". Note that they can reference themselves as normal, and reference regular server defined types. Also note that we can extend server types and add fields that are of our client-only types."),(0,l.kt)("li",{parentName:"ul"},"As mentioned previously, we will be able to ",(0,l.kt)("a",{parentName:"li",href:"#reading-client-only-data"},"read")," and ",(0,l.kt)("a",{parentName:"li",href:"#updating-client-only-data"},"update")," this data normally via Relay APIs.")),(0,l.kt)("h3",{id:"reading-client-only-data"},"Reading Client-Only Data"),(0,l.kt)("p",null,"We can read client-only data be selecting it inside ",(0,l.kt)("a",{parentName:"p",href:"../../rendering/fragments/"},"fragments")," or ",(0,l.kt)("a",{parentName:"p",href:"../../rendering/queries/"},"queries")," as normal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const data = *useFragment*(\n  graphql`\n    fragment CommentComponent_comment on Comment {\n\n      # We can select client-only fields as we would any other field\n      is_new_comment\n\n      body {\n        text\n      }\n    }\n  `,\n  props.user,\n);\n")),(0,l.kt)("h3",{id:"updating-client-only-data"},"Updating Client-Only Data"),(0,l.kt)("p",null,"In order to update client-only data, you can do so regularly inside ",(0,l.kt)("a",{parentName:"p",href:"../graphql-mutations/"},"mutation")," or ",(0,l.kt)("a",{parentName:"p",href:"../graphql-subscriptions/"},"subscription")," updaters, or by using our primitives for doing ",(0,l.kt)("a",{parentName:"p",href:"../local-data-updates/"},"local updates")," to the store."),(0,l.kt)(o.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);