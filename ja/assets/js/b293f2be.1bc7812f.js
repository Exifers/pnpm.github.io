"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1752],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(t),m=l,f=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=s;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5989:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>c,toc:()=>d,default:()=>s});var r=t(9518),l=t(7344),i=(t(9496),t(9613)),a=["components"],p={id:"exec",title:"pnpm exec"},o=void 0,c={unversionedId:"cli/exec",id:"cli/exec",title:"pnpm exec",description:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30b9\u30b3\u30fc\u30d7\u3067\u30b7\u30a7\u30eb\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/ja/next/cli/exec",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"docs",previous:{title:"pnpm test",permalink:"/ja/next/cli/test"},next:{title:"pnpm dlx",permalink:"/ja/next/cli/dlx"}},d=[{value:"\u5177\u4f53\u4f8b",id:"\u5177\u4f53\u4f8b",children:[],level:2},{value:"\u5f15\u6570",id:"\u5f15\u6570",children:[{value:"--recursive, -r",id:"--recursive--r",children:[{value:"\u4f8b",id:"\u4f8b",children:[],level:4}],level:3},{value:"--parallel",id:"--parallel",children:[],level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],u={toc:d};function s(e){var n=e.components,t=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30b9\u30b3\u30fc\u30d7\u3067\u30b7\u30a7\u30eb\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u74b0\u5883\u5909\u6570",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),"\u306b",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules/.bin"),"\u3092\u8ffd\u52a0\u3057\u305f\u72b6\u614b\u3067\u5b9f\u884c\u3059\u308b\u305f\u3081\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm exec"),"\u306f\u4f9d\u5b58\u95a2\u4fc2\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u542b\u307e\u308c\u308b\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u5177\u4f53\u4f8b"},"\u5177\u4f53\u4f8b"),(0,i.kt)("p",null,"\u3042\u306a\u305f\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f9d\u5b58\u95a2\u4fc2\u306bJest\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u306a\u3089\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm exec"),"\u3067\u5b9f\u884c\u3059\u308b\u3060\u3051\u3067\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,i.kt)("p",null,"\u5b9f\u969b\u306e\u3068\u3053\u308d\u30b5\u30d6\u30b3\u30de\u30f3\u30c9\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"exec"),"\u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3059\u3002\u5b9f\u884c\u3059\u308b\u30b3\u30de\u30f3\u30c9\u304cpnpm\u306e\u7d44\u307f\u8fbc\u307f\u30b3\u30de\u30f3\u30c9\u3068\u885d\u7a81\u3057\u306a\u3044\u5834\u5408\u3001\u305d\u306e\u307e\u307e\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,i.kt)("h2",{id:"\u5f15\u6570"},"\u5f15\u6570"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.9.0"),(0,i.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u30b7\u30a7\u30eb\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u73fe\u5728\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u540d\u524d\u306f\u3001\u74b0\u5883\u5909\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (pnpm v2.22.0 \u4ee5\u964d\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u307e\u3059) \u3067\u53c2\u7167\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("h4",{id:"\u4f8b"},"\u4f8b"),(0,i.kt)("p",null,"Prune ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," installations for all packages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,i.kt)("p",null,"View package information for all packages. This should be used with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"-c"),") option for the environment variable to work."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,i.kt)("h3",{id:"--parallel"},"--parallel"),(0,i.kt)("p",null,"Added in: v5.1.0"),(0,i.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,i.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,i.kt)("p",null,"Added in: v6.31.0"),(0,i.kt)("p",null,"Runs the command inside of a shell. Uses ",(0,i.kt)("inlineCode",{parentName:"p"},"/bin/sh")," on UNIX and ",(0,i.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," on Windows."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ja/next/filtering"},"Read more about filtering.")))}s.isMDXComponent=!0}}]);