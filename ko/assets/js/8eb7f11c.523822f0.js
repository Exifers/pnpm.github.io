"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6909],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),m=l,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(k,a(a({ref:n},s),{},{components:t})):r.createElement(k,a({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9406:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>c,toc:()=>s,default:()=>u});var r=t(9518),l=t(7344),i=(t(9496),t(9613)),a=["components"],p={id:"exec",title:"pnpm exec"},o=void 0,c={unversionedId:"cli/exec",id:"version-6.x/cli/exec",title:"pnpm exec",description:"\ud504\ub85c\uc81d\ud2b8 \ubc94\uc704\uc5d0\uc11c \uc178 \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-6.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/ko/cli/exec",editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"6.x",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"version-6.x/docs",previous:{title:"pnpm test",permalink:"/ko/cli/test"},next:{title:"pnpm dlx",permalink:"/ko/cli/dlx"}},s=[{value:"Examples",id:"examples",children:[],level:2},{value:"\uc635\uc158",id:"\uc635\uc158",children:[{value:"--recursive, -r",id:"--recursive--r",children:[{value:"Examples",id:"examples-1",children:[],level:4}],level:3},{value:"--parallel",id:"--parallel",children:[],level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],d={toc:s};function u(e){var n=e.components,t=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8 \ubc94\uc704\uc5d0\uc11c \uc178 \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"node_modules/.bin"),"\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),"\uc5d0 \ucd94\uac00\ub418\ubbc0\ub85c, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm exec")," \uc5d0\uc11c\ub294 \uc758\uc874\uc131 \uba85\ub839\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8\uc758 \uc885\uc18d\uc131\uc73c\ub85c Jest\uac00 \uc788\ub294 \uacbd\uc6b0 Jest\ub97c \uc804\uc5ed\uc801\uc73c\ub85c \uc124\uce58\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e8\uc9c0 ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm exec"),"\uc744 \uc2e4\ud589\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"exec")," \ubd80\ubd84\uc740 \uc0ac\uc2e4 \uc120\ud0dd \uc0ac\ud56d\uc774\ubbc0\ub85c \ub0b4\uc7a5\ub41c pnpm \uba85\ub839\uacfc \ucd9c\ub3d9\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \uc2e4\ud589\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,i.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Added in: v2.9.0"),(0,i.kt)("p",null,"\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 \ub0b4\uc758 \ubaa8\ub4e0 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc178 \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"The name of the current package is available through the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0 onwards)."),(0,i.kt)("h4",{id:"examples-1"},"Examples"),(0,i.kt)("p",null,"Prune ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," installations for all packages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,i.kt)("p",null,"View package information for all packages. This should be used with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"-c"),") option for the environment variable to work."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,i.kt)("h3",{id:"--parallel"},"--parallel"),(0,i.kt)("p",null,"Added in: v5.1.0"),(0,i.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,i.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,i.kt)("p",null,"Added in: v6.31.0"),(0,i.kt)("p",null,"Runs the command inside of a shell. Uses ",(0,i.kt)("inlineCode",{parentName:"p"},"/bin/sh")," on UNIX and ",(0,i.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," on Windows."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ko/filtering"},"\ud544\ud130\ub9c1\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694.")))}u.isMDXComponent=!0}}]);