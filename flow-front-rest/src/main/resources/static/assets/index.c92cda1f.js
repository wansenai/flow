import{k as e,a0 as i,bg as t,K as s,o as n,n as r,P as l,q as o,s as a,X as p}from"./vendor.d660e98f.js";/* empty css              */import{_ as c}from"./PageWrapper.5ef0540d.js";import{_ as u,u as d}from"./useDescription.db4d223f.js";import{G as g,D as m,S as v}from"./siteSetting.136c2269.js";import"./index.dd44fc8e.js";import"./usePageContext.913e3c16.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a3bdff8d.js";/* empty css              */var f=e({name:"AboutPage",components:{Description:u,PageWrapper:c},setup(){const{pkg:e,lastBuildTime:s}={pkg:{dependencies:{"@iconify/iconify":"^2.0.1","@vueuse/core":"^4.11.1","@zxcvbn-ts/core":"^0.3.0","ant-design-vue":"2.1.2",axios:"^0.21.1","crypto-js":"^4.0.0",echarts:"^5.1.1","lodash-es":"^4.17.21",mockjs:"^1.1.0",nprogress:"^0.2.0","path-to-regexp":"^6.2.0",pinia:"2.0.0-alpha.13",qrcode:"^1.4.4",sortablejs:"^1.13.0",vue:"3.0.11","vue-i18n":"9.1.6","vue-json-pretty":"^2.0.2","vue-router":"^4.0.8","vue-types":"^3.0.2","bpmn-js":"^8.6.0","camunda-bpmn-moddle":"^5.1.2"},devDependencies:{"@commitlint/cli":"^12.1.4","@commitlint/config-conventional":"^12.1.4","@iconify/json":"^1.1.349","@purge-icons/generated":"^0.7.0","@types/codemirror":"^5.60.0","@types/crypto-js":"^4.0.1","@types/fs-extra":"^9.0.11","@types/inquirer":"^7.3.1","@types/lodash-es":"^4.17.4","@types/mockjs":"^1.0.3","@types/nprogress":"^0.2.0","@types/qrcode":"^1.4.0","@types/qs":"^6.9.6","@types/sortablejs":"^1.10.6","@typescript-eslint/eslint-plugin":"^4.25.0","@typescript-eslint/parser":"^4.25.0","@vitejs/plugin-legacy":"^1.4.0","@vitejs/plugin-vue":"^1.2.2","@vitejs/plugin-vue-jsx":"^1.1.4","@vue/compiler-sfc":"3.0.11",autoprefixer:"^10.2.6",commitizen:"^4.2.4","conventional-changelog-cli":"^2.1.1","cross-env":"^7.0.3",dotenv:"^10.0.0",eslint:"^7.27.0","eslint-config-prettier":"^8.3.0","eslint-define-config":"^1.0.8","eslint-plugin-prettier":"^3.4.0","eslint-plugin-vue":"^7.9.0",esno:"^0.5.0","fs-extra":"^10.0.0","http-server":"^0.12.3",husky:"^6.0.0",inquirer:"^8.1.0","is-ci":"^3.0.0",less:"^4.1.1","lint-staged":"^11.0.0",postcss:"^8.3.0",prettier:"^2.3.0","pretty-quick":"^3.1.0",rimraf:"^3.0.2","rollup-plugin-visualizer":"5.5.0",stylelint:"^13.13.1","stylelint-config-prettier":"^8.0.2","stylelint-config-standard":"^22.0.0","stylelint-order":"^4.1.0","ts-node":"^10.0.0",typescript:"4.3.2",vite:"2.3.3","vite-plugin-compression":"^0.2.5","vite-plugin-html":"^2.0.7","vite-plugin-imagemin":"^0.3.2","vite-plugin-mock":"^2.5.4","vite-plugin-purge-icons":"^0.7.0","vite-plugin-pwa":"^0.7.3","vite-plugin-style-import":"^0.10.1","vite-plugin-svg-icons":"^0.6.1","vite-plugin-theme":"^0.8.0","vite-plugin-windicss":"^0.16.5","vue-eslint-parser":"^7.6.0","vue-tsc":"^0.1.6"},name:"Flow-Front",version:"2.3.0"},lastBuildTime:"2021-05-30 23:47:28"},{dependencies:n,devDependencies:r,name:l,version:o}=e,a=[],p=[],c=e=>s=>i(t,{color:e},(()=>s)),u=e=>t=>i("a",{href:t,target:"_blank"},e),f=[{label:"版本",field:"version",render:c("blue")},{label:"最后编译时间",field:"lastBuildTime",render:c("blue")},{label:"文档地址",field:"doc",render:u("文档地址")},{label:"预览地址",field:"preview",render:u("预览地址")},{label:"Github",field:"github",render:u("Github")}],y={version:o,lastBuildTime:s,doc:m,preview:v,github:g};Object.keys(n).forEach((e=>{a.push({field:e,label:e})})),Object.keys(r).forEach((e=>{p.push({field:e,label:e})}));const[b]=d({title:"生产环境依赖",data:n,schema:a,column:3}),[j]=d({title:"开发环境依赖",data:r,schema:p,column:3}),[h]=d({title:"项目信息",data:y,schema:f,column:2});return{register:b,registerDev:j,infoRegister:h,name:l,GITHUB_URL:g}}});const y={class:"flex justify-between items-center"},b={class:"flex-1"},j=p(" 是一个基于Vue3.0、Vite、 Ant-Design-Vue 、TypeScript 的后台解决方案，目标是为中大型项目开发,提供现成的开箱解决方案及丰富的示例,原则上不会限制任何代码用于商用。 ");f.render=function(e,i,t,p,c,u){const d=s("Description"),g=s("PageWrapper");return n(),r(g,{title:"关于"},{headerContent:l((()=>[o("div",y,[o("span",b,[o("a",{href:e.GITHUB_URL,target:"_blank"},a(e.name),9,["href"]),j])])])),default:l((()=>[o(d,{onRegister:e.infoRegister,class:"enter-y"},null,8,["onRegister"]),o(d,{onRegister:e.register,class:"my-4 enter-y"},null,8,["onRegister"]),o(d,{onRegister:e.registerDev,class:"enter-y"},null,8,["onRegister"])])),_:1})};export default f;
