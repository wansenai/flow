var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l;import{p as a,j as i,aR as c}from"./index.f8d8fadd.js";import{k as u,r as d,f as p,I as m,J as f,a0 as b,u as y,q as v,aV as h,V as x,av as j,bm as w,aI as O,a2 as I}from"./vendor.bc3b2d68.js";/* empty css              */const E={width:a.number.def(156),customEvent:{type:Object,default:null},styles:a.style,showIcon:a.bool.def(!0),axis:{type:Object,default:()=>({x:0,y:0})},items:{type:Array,default:()=>[]}};const g=e=>{const{item:t}=e;return v("span",{style:"display: inline-block; width: 100%; ",class:"px-4",onClick:e.handler.bind(null,t)},[e.showIcon&&t.icon&&v(i,{class:"mr-2",icon:t.icon},null),v("span",null,[t.label])])};var k=u({name:"ContextMenu",props:E,setup(e){const a=d(null),i=d(!1),c=p((()=>{const{axis:a,items:i,styles:c,width:u}=e,{x:d,y:p}=a||{x:0,y:0},m=40*(i||[]).length,f=u,b=document.body,y=b.clientWidth<d+f?d-f:d,v=b.clientHeight<p+m?p-m:p;return h=((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&r(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&r(e,n,t[n]);return e})({},c),t(h,n({width:`${u}px`,left:`${y+1}px`,top:`${v+1}px`}));var h}));function u(e,t){const{handler:n,disabled:l}=e;l||(i.value=!1,null==t||t.stopPropagation(),null==t||t.preventDefault(),null==n||n())}function O(t){return t.map((t=>{const{disabled:n,label:l,children:o,divider:s=!1}=t,r=s?v(h,{key:`d-${l}`},null):null;return o&&0!==o.length?y(i)?v(j.SubMenu,{key:l,disabled:n,popupClassName:"context-menu__popup"},{title:()=>v(g,{showIcon:e.showIcon,item:t,handler:u},null),default:()=>O(o)}):null:v(x,null,[v(j.Item,{disabled:n,class:"context-menu__item",key:l},{default:()=>[v(g,{showIcon:e.showIcon,item:t,handler:u},null)]}),r])}))}return m((()=>{f((()=>i.value=!0))})),b((()=>{const e=y(a);e&&document.body.removeChild(e)})),()=>{let t;const{items:n}=e;return y(i)?v(j,{inlineIndent:12,mode:"vertical",class:"context-menu",ref:a,style:y(c)},"function"==typeof(l=t=O(n))||"[object Object]"===Object.prototype.toString.call(l)&&!w(l)?t:{default:()=>[t]}):null;var l}}});const L={domList:[],resolve:()=>{}},P=function(e){const{event:t}=e||{};if(t&&(null==t||t.preventDefault()),c)return new Promise((n=>{const l=document.body,o=document.createElement("div"),s={};e.styles&&(s.styles=e.styles),e.items&&(s.items=e.items),e.event&&(s.customEvent=t,s.axis={x:t.clientX,y:t.clientY});const r=v(k,s);O(r,o);const a=function(){L.resolve("")};L.domList.push(o);const i=function(){L.domList.forEach((e=>{try{e&&l.removeChild(e)}catch(t){}})),l.removeEventListener("click",a),l.removeEventListener("scroll",a)};L.resolve=function(...e){i(),n(e[0])},i(),l.appendChild(o),l.addEventListener("click",a),l.addEventListener("scroll",a)}))},C=function(){L&&(L.resolve(""),L.domList=[])};function $(e=!0){return I()&&e&&b((()=>{C()})),[P,C]}export{$ as u};
