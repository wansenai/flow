var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,o=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))r.call(t,a)&&s(e,a,t[a]);return e},i=(e,l)=>t(e,a(l));import{c as p,i as c,ae as u,af as d,ag as f,w as b}from"./index.081912a1.js";import{j as m,r as y,i as j,u as O,n as v,bn as x,bo as g,N as h,bp as w}from"./vendor.686fd1d4.js";/* empty css              */const P=b(m({name:"Description",props:{useCollapse:{type:Boolean,default:!0},title:{type:String,default:""},size:{type:String,validator:e=>["small","default","middle",void 0].includes(e),default:"small"},bordered:{type:Boolean,default:!0},column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:{type:Object}},emits:["register"],setup(e,{slots:t,emit:a}){const l=y(null),{prefixCls:n}=p("description"),r=u(),s=j((()=>o(o({},e),O(l)))),b=j((()=>i(o({},O(s)),{title:void 0}))),m=j((()=>!!O(s).title)),P=j((()=>o({canExpand:!1},O(b).collapseOptions))),S=j((()=>o(o({},O(r)),O(b))));function C({label:e,labelMinWidth:t,labelStyle:a}){if(!a&&!t)return e;const l=i(o({},a),{minWidth:`${t}px `});return v("div",{style:l},[e])}const D=()=>{let e;return v(x,h({class:`${n}`},O(S)),"function"==typeof(t=e=function(){const{schema:e,data:t}=O(b);return O(e).map((e=>{const{render:a,field:l,span:n,show:r,contentMinWidth:s}=e;if(r&&c(r)&&!r(t))return null;const o=()=>{var e;const t=null==(e=O(b))?void 0:e.data;if(!t)return null;const n=w(t,l);return c(a)?a(n,t):null!=n?n:""},i=s;return v(x.Item,{label:C(e),key:l,span:n},{default:()=>s?v("div",{style:{minWidth:`${i}px`}},[o()]):o()})})).filter((e=>!!e))}())||"[object Object]"===Object.prototype.toString.call(t)&&!g(t)?e:{default:()=>[e]});var t};return a("register",{setDescProps:function(e){l.value=o(o({},O(l)),e)}}),()=>O(m)?(()=>{const a=e.useCollapse?D():v("div",null,[D()]);if(!e.useCollapse)return a;const{canExpand:l,helpMessage:n}=O(P),{title:r}=O(s);return v(f,{title:r,canExpan:l,helpMessage:n},{default:()=>a,action:()=>d(t,"action")})})():D()}}));export{P as D};