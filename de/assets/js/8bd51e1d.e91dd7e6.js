"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1046],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=l,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5301:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>u});var r=t(9518),l=t(7344),o=(t(9496),t(9613)),a=["components"],i={id:"exec",title:"pnpm exec"},p=void 0,c={unversionedId:"cli/exec",id:"version-6.x/cli/exec",title:"pnpm exec",description:"Execute a shell command in scope of a project.",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-6.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/de/cli/exec",editUrl:"https://crowdin.com/project/pnpm/de",tags:[],version:"6.x",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"version-6.x/docs",previous:{title:"pnpm test",permalink:"/de/cli/test"},next:{title:"pnpm dlx",permalink:"/de/cli/dlx"}},s=[{value:"Examples",id:"examples",children:[],level:2},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[{value:"Examples",id:"examples-1",children:[],level:4}],level:3},{value:"--parallel",id:"--parallel",children:[],level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],d={toc:s};function u(e){var n=e.components,t=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Execute a shell command in scope of a project."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," is added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),", so ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm exec")," allows executing commands of dependencies."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"If you have Jest as a dependency of your project, there is no need to install Jest globally, just run it with ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm exec"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," part is actually optional when the command is not in conflict with a builtin pnpm command, so you may also just run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"Added in: v2.9.0"),(0,o.kt)("p",null,"Execute the shell command in every project of the workspace."),(0,o.kt)("p",null,"The name of the current package is available through the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0 onwards)."),(0,o.kt)("h4",{id:"examples-1"},"Examples"),(0,o.kt)("p",null,"Prune ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," installations for all packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,o.kt)("p",null,"View package information for all packages. This should be used with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"-c"),") option for the environment variable to work."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,o.kt)("h3",{id:"--parallel"},"--parallel"),(0,o.kt)("p",null,"Added in: v5.1.0"),(0,o.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,o.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,o.kt)("p",null,"Added in: v6.31.0"),(0,o.kt)("p",null,"Runs the command inside of a shell. Uses ",(0,o.kt)("inlineCode",{parentName:"p"},"/bin/sh")," on UNIX and ",(0,o.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," on Windows."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/de/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0}}]);