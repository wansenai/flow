var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,r=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(a)for(var n of a(t))l.call(t,n)&&c(e,n,t[n]);return e},o=(e,a)=>t(e,n(a)),i=(e,t,n)=>new Promise(((a,s)=>{var l=e=>{try{r(n.next(e))}catch(t){s(t)}},c=e=>{try{r(n.throw(e))}catch(t){s(t)}},r=e=>e.done?a(e.value):Promise.resolve(e.value).then(l,c);r((n=n.apply(e,t)).next())}));import{u as d,_ as u}from"./TableImg.87557236.js";import{f as p}from"./useForm.d464ef6e.js";import{a0 as y,k as h,at as m,au as f,ac as b,f as v,F as k,l as x,m as K,K as g,o as L,n as _,Q as C,W as S,X as A,s as j,q as E,ar as T,S as I,ag as w,x as N,a as D,al as P,r as M,I as B,J as O,$,aT as R,bj as U,aH as F,a1 as H,A as X,t as Y,aK as W,a4 as z,D as q,w as G,v as J,b$ as Q,N as V,af as Z,bk as ee,c0 as te,bJ as ne,bs as ae,aQ as se,aP as le,bm as ce,bi as re,b_ as oe,bd as ie}from"./vendor.0482ef83.js";import{i as de,m as ue,aq as pe,p as ye,d as he,aE as me,aF as fe,c as be,h as ve,aC as ke,L as xe,aG as Ke,ab as ge,z as Le}from"./index.ac2432bc.js";/* empty css              */import{_ as _e}from"./PageWrapper.ffc84022.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{searchFormSchema as Ce,cardList as Se}from"./data.35c8f9ea.js";import Ae from"./ProcessHeader.e556e508.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.3a3072fc.js";import"./useModal.a78b6185.js";import"./onMountedOrActivated.66cf4856.js";import"./useSortable.6ab30817.js";/* empty css              */import"./CountdownInput.7188c3ee.js";import"./download.5b7f75e0.js";import"./StrengthMeter.0ef83710.js";import"./usePageContext.f06b7ee4.js";/* empty css              *//* empty css              *//* empty css              */import"./process.86354d09.js";const je=({icon:e})=>e?de(e)?y(ue,{icon:e,class:"mr-1"}):ue:null;var Ee,Te;(Te=Ee||(Ee={}))[Te.SELECT_ALL=0]="SELECT_ALL",Te[Te.UN_SELECT_ALL=1]="UN_SELECT_ALL",Te[Te.EXPAND_ALL=2]="EXPAND_ALL",Te[Te.UN_EXPAND_ALL=3]="UN_EXPAND_ALL",Te[Te.CHECK_STRICTLY=4]="CHECK_STRICTLY",Te[Te.CHECK_UN_STRICTLY=5]="CHECK_UN_STRICTLY";var Ie=h({name:"BasicTreeHeader",components:{BasicTitle:pe,Icon:ue,Dropdown:m,Menu:f,MenuItem:f.Item,MenuDivider:f.Divider,InputSearch:b.Search},props:{helpMessage:{type:[String,Array],default:""},title:ye.string,toolbar:ye.bool,checkable:ye.bool,search:ye.bool,checkAll:ye.func,expandAll:ye.func},emits:["strictly-change","search"],setup(e,{emit:t}){const{t:n}=he(),a=v((()=>{const{checkable:t}=e,a=[{label:n("component.tree.expandAll"),value:Ee.EXPAND_ALL},{label:n("component.tree.unExpandAll"),value:Ee.UN_EXPAND_ALL,divider:t}];return t?[{label:n("component.tree.selectAll"),value:Ee.SELECT_ALL},{label:n("component.tree.unSelectAll"),value:Ee.UN_SELECT_ALL,divider:t},...a,{label:n("component.tree.checkStrictly"),value:Ee.CHECK_STRICTLY},{label:n("component.tree.checkUnStrictly"),value:Ee.CHECK_UN_STRICTLY}]:a}));const s=k((function(e){t("search",e)}),200);return{t:n,toolbarList:a,handleMenuClick:function(n){var a,s,l,c;const{key:r}=n;switch(r){case Ee.SELECT_ALL:null==(a=e.checkAll)||a.call(e,!0);break;case Ee.UN_SELECT_ALL:null==(s=e.checkAll)||s.call(e,!1);break;case Ee.EXPAND_ALL:null==(l=e.expandAll)||l.call(e,!0);break;case Ee.UN_EXPAND_ALL:null==(c=e.expandAll)||c.call(e,!1);break;case Ee.CHECK_STRICTLY:t("strictly-change",!1);break;case Ee.CHECK_UN_STRICTLY:t("strictly-change",!0)}},handleSearch:function(e){s(e.target.value)}}}});const we=N();x("data-v-c31eb57c");const Ne={class:"flex px-2 py-1.5 items-center basic-tree-header"},De={key:2,class:"flex flex-1 justify-end items-center cursor-pointer"},Pe={key:0,class:"mr-1 w-2/3"};K();const Me=we(((e,t,n,a,s,l)=>{const c=g("BasicTitle"),r=g("InputSearch"),o=g("Icon"),i=g("MenuItem"),d=g("MenuDivider"),u=g("Menu"),p=g("Dropdown");return L(),_("div",Ne,[e.$slots.headerTitle?C(e.$slots,"headerTitle",{key:0},void 0,!0):S("",!0),!e.$slots.headerTitle&&e.title?(L(),_(c,{key:1,helpMessage:e.helpMessage},{default:we((()=>[A(j(e.title),1)])),_:1},8,["helpMessage"])):S("",!0),e.search||e.toolbar?(L(),_("div",De,[e.search?(L(),_("div",Pe,[E(r,{placeholder:e.t("common.searchText"),size:"small",allowClear:"",onChange:e.handleSearch},null,8,["placeholder","onChange"])])):S("",!0),e.toolbar?(L(),_(p,{key:1,onClick:t[1]||(t[1]=T((()=>{}),["prevent"]))},{overlay:we((()=>[E(u,{onClick:e.handleMenuClick},{default:we((()=>[(L(!0),_(I,null,w(e.toolbarList,(e=>(L(),_(I,{key:e.value},[E(i,{key:e.value},{default:we((()=>[A(j(e.label),1)])),_:2},1040),e.divider?(L(),_(d,{key:0})):S("",!0)],64)))),128))])),_:1},8,["onClick"])])),default:we((()=>[E(o,{icon:"ion:ellipsis-vertical"})])),_:1})):S("",!0)])):S("",!0)])}));Ie.render=Me,Ie.__scopeId="data-v-c31eb57c";const Be={width:ye.number.def(156),customEvent:{type:Object,default:null},styles:ye.style,showIcon:ye.bool.def(!0),axis:{type:Object,default:()=>({x:0,y:0})},items:{type:Array,default:()=>[]}};const Oe=e=>{const{item:t}=e;return E("span",{style:"display: inline-block; width: 100%; ",class:"px-4",onClick:e.handler.bind(null,t)},[e.showIcon&&t.icon&&E(ue,{class:"mr-2",icon:t.icon},null),E("span",null,[t.label])])};var $e=h({name:"ContextMenu",props:Be,setup(e){const t=M(null),n=M(!1),a=v((()=>{const{axis:t,items:n,styles:a,width:s}=e,{x:l,y:c}=t||{x:0,y:0},i=40*(n||[]).length,d=s,u=document.body,p=u.clientWidth<l+d?l-d:l,y=u.clientHeight<c+i?c-i:c;return o(r({},a),{width:`${s}px`,left:`${p+1}px`,top:`${y+1}px`})}));function s(e,t){const{handler:a,disabled:s}=e;s||(n.value=!1,null==t||t.stopPropagation(),null==t||t.preventDefault(),null==a||a())}function l(t){return t.map((t=>{const{disabled:a,label:c,children:r,divider:o=!1}=t,i=o?E(R,{key:`d-${c}`},null):null;return r&&0!==r.length?D(n)?E(f.SubMenu,{key:c,disabled:a,popupClassName:"context-menu__popup"},{title:()=>E(Oe,{showIcon:e.showIcon,item:t,handler:s},null),default:()=>l(r)}):null:E(I,null,[E(f.Item,{disabled:a,class:"context-menu__item",key:c},{default:()=>[E(Oe,{showIcon:e.showIcon,item:t,handler:s},null)]}),i])}))}return B((()=>{O((()=>n.value=!0))})),$((()=>{const e=D(t);e&&document.body.removeChild(e)})),()=>{let s;const{items:c}=e;return D(n)?E(f,{inlineIndent:12,mode:"vertical",class:"context-menu",ref:t,style:D(a)},"function"==typeof(r=s=l(c))||"[object Object]"===Object.prototype.toString.call(r)&&!U(r)?s:{default:()=>[s]}):null;var r}}});const Re={domList:[],resolve:()=>{}},Ue=function(e){const{event:t}=e||{};if(t&&(null==t||t.preventDefault()),fe)return new Promise((n=>{const a=document.body,s=document.createElement("div"),l={};e.styles&&(l.styles=e.styles),e.items&&(l.items=e.items),e.event&&(l.customEvent=t,l.axis={x:t.clientX,y:t.clientY});const c=E($e,l);F(c,s);const r=function(){Re.resolve("")};Re.domList.push(s);const o=function(){Re.domList.forEach((e=>{try{e&&a.removeChild(e)}catch(t){}})),a.removeEventListener("click",r),a.removeEventListener("scroll",r)};Re.resolve=function(...e){o(),n(e[0])},o(),a.appendChild(s),a.addEventListener("click",r),a.addEventListener("scroll",r)}))},Fe=function(){Re&&(Re.resolve(""),Re.domList=[])};var He=h({name:"BasicTree",inheritAttrs:!1,props:{value:{type:[Object,Array]},renderIcon:{type:Function},helpMessage:{type:[String,Array],default:""},title:ye.string,toolbar:ye.bool,search:ye.bool,checkStrictly:ye.bool,clickRowToExpand:ye.bool.def(!0),checkable:ye.bool.def(!1),replaceFields:{type:Object},treeData:{type:Array},actionList:{type:Array,default:()=>[]},expandedKeys:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]},checkedKeys:{type:Array,default:()=>[]},beforeRightClick:{type:Function,default:null},rightMenuList:{type:Array}},emits:["update:expandedKeys","update:selectedKeys","update:value","change","check"],setup(e,{attrs:t,slots:n,emit:a}){const s=X({checkStrictly:e.checkStrictly,expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],checkedKeys:e.checkedKeys||[]}),l=X({startSearch:!1,searchData:[]}),c=M([]),[u]=function(e=!0){return H()&&e&&$((()=>{Fe()})),[Ue,Fe]}(),{prefixCls:p}=be("basic-tree"),y=v((()=>{const{replaceFields:t}=e;return r({children:"children",title:"title",key:"key"},t)})),h=v((()=>{let n=o(r(r({blockNode:!0},t),e),{expandedKeys:s.expandedKeys,selectedKeys:s.selectedKeys,checkedKeys:s.checkedKeys,checkStrictly:s.checkStrictly,replaceFields:D(y),"onUpdate:expandedKeys":e=>{s.expandedKeys=e,a("update:expandedKeys",e)},"onUpdate:selectedKeys":e=>{s.selectedKeys=e,a("update:selectedKeys",e)},onCheck:(e,t)=>{s.checkedKeys=e;const n=Y(e);a("update:value",n),a("check",n,t)},onRightClick:L});return n=W(n,"treeData","class"),n})),m=v((()=>l.startSearch?l.searchData:D(c))),f=v((()=>{var e;return l.startSearch&&0===(null==(e=l.searchData)?void 0:e.length)})),{deleteNodeByKey:b,insertNodeByKey:k,filterByLevel:x,updateNodeByKey:K,getAllKeys:g}=function(e,t){return{deleteNodeByKey:function n(a,s){if(!a)return;const l=s||D(e),{key:c,children:r}=D(t);if(r&&c)for(let e=0;e<l.length;e++){const t=l[e],s=t[r];if(t[c]===a){l.splice(e,1);break}s&&s.length&&n(a,t[r])}},insertNodeByKey:function({parentKey:n=null,node:a,push:s="push"}){const l=P(D(e));if(!n)return l[s](a),void(e.value=l);const{key:c,children:r}=D(t);r&&c&&(me(l,(e=>{e[c]===n&&(e[r]=e[r]||[],e[r][s](a))})),e.value=l)},filterByLevel:function n(a=1,s,l=1){if(!a)return[];const c=[],r=s||D(e)||[];for(let e=0;e<r.length;e++){const s=r[e],{key:o,children:i}=D(t),d=o?s[o]:"",u=i?s[i]:[];c.push(d),u&&u.length&&l<a&&(l+=1,c.push(...n(a,u,l)))}return c},updateNodeByKey:function n(a,s,l){if(!a)return;const c=l||D(e),{key:o,children:i}=D(t);if(i&&o)for(let e=0;e<c.length;e++){const t=c[e],l=t[i];if(t[o]===a){c[e]=r(r({},c[e]),s);break}l&&l.length&&n(a,s,t[i])}},getAllKeys:function n(a){const s=[],l=a||D(e),{key:c,children:r}=D(t);if(!r||!c)return s;for(let e=0;e<l.length;e++){const t=l[e];s.push(t[c]);const a=t[r];a&&a.length&&s.push(...n(a))}return s}}}(c,y);function L(t){return i(this,arguments,(function*({event:t,node:n}){var a;const{rightMenuList:s=[],beforeRightClick:l}=e;let c={event:t,items:[]};if(l&&ve(l)){let e=yield l(n,t);Array.isArray(e)?c.items=e:Object.assign(c,e)}else c.items=s;(null==(a=c.items)?void 0:a.length)&&u(c)}))}function _(e){s.expandedKeys=e}function C(e){s.checkedKeys=e?g():[]}function S(e){s.expandedKeys=e?g():[]}function A(e){s.checkStrictly=e}function j(e){if(!e)return void(l.startSearch=!1);l.startSearch=!0;const{title:t}=D(y);l.searchData=Ke(D(c),(n=>{var a,s;return null!=(s=null==(a=n[t])?void 0:a.includes(e))&&s}),D(y))}function T(t,n){if(e.clickRowToExpand&&n&&0!==n.length)if(s.expandedKeys.includes(t)){const e=[...s.expandedKeys],n=e.findIndex((e=>e===t));-1!==n&&e.splice(n,1),_(e)}else _([...s.expandedKeys,t])}z((()=>{c.value=e.treeData})),z((()=>{s.expandedKeys=e.expandedKeys})),z((()=>{s.selectedKeys=e.selectedKeys})),z((()=>{s.checkedKeys=e.checkedKeys})),q((()=>e.value),(()=>{s.checkedKeys=Y(e.value||[])})),q((()=>s.checkedKeys),(()=>{const e=Y(s.checkedKeys);a("update:value",e),a("change",e)})),z((()=>{s.checkStrictly=e.checkStrictly}));function w(t){const{actionList:n}=e;if(n&&0!==n.length)return n.map(((e,n)=>{var a;let s=!0;return ve(e.show)?s=null==(a=e.show)?void 0:a.call(e,t):Le(e.show)&&(s=e.show),s?E("span",{key:n,class:`${p}__action`},[e.render(t)]):null}))}function N({data:t,level:a}){return t?t.map((t=>{const{title:s,key:l,children:c}=D(y),i=W(t,"title"),d=function(t,n){return!n&&e.renderIcon&&ve(e.renderIcon)?e.renderIcon(t):n}(o(r({},t),{level:a}),t.icon),u=ee(t,c)||[];return E(Q.TreeNode,V(i,{node:Y(t),key:ee(t,l)}),{title:()=>{var e;return E("span",{class:`${p}-title pl-2`,onClick:T.bind(null,t[l],t[c])},[(null==n?void 0:n.title)?ge(n,"title",t):E(I,null,[d&&E(je,{icon:d},null),E("span",{class:(null==(e=D(h))?void 0:e.blockNode)?`${p}__content`:""},[ee(t,s)]),E("span",{class:`${p}__actions`},[w(o(r({},t),{level:a}))])])])},default:()=>N({data:u,level:a+1})})})):null}return d({setExpandedKeys:_,getExpandedKeys:function(){return s.expandedKeys},setSelectedKeys:function(e){s.selectedKeys=e},getSelectedKeys:function(){return s.selectedKeys},setCheckedKeys:function(e){s.checkedKeys=e},getCheckedKeys:function(){return s.checkedKeys},insertNodeByKey:k,deleteNodeByKey:b,updateNodeByKey:K,checkAll:C,expandAll:S,filterByLevel:e=>{s.expandedKeys=x(e)}}),()=>{let a;const{title:s,helpMessage:l,toolbar:c,search:o,checkable:i}=e,d=s||c||o||n.headerTitle;return E("div",{class:[p,"h-full",t.class]},[d&&E(Ie,{checkable:i,checkAll:C,expandAll:S,title:s,search:o,toolbar:c,helpMessage:l,onStrictlyChange:A,onSearch:j},(u=a=ke(n),"function"==typeof u||"[object Object]"===Object.prototype.toString.call(u)&&!U(u)?a:{default:()=>[a]})),G(E(xe,{style:{height:"calc(100% - 38px)"}},{default:()=>[E(Q,V(D(h),{showIcon:!1}),r({default:()=>N({data:D(m),level:1})},ke(n)))]}),[[J,!D(f)]]),G(E(Z,{class:"!mt-4"},null),[[J,D(f)]])]);var u}}}),Xe=h({components:{Icon:te,Progress:ne,PageWrapper:_e,BasicForm:p,[ae.name]:ae,[ae.Item.name]:ae.Item,AListItemMeta:ae.Item.Meta,[se.name]:se,[le.name]:le,BasicTree:He,BasicTable:u,ProcessHeader:Ae,[R.name]:R,[ce.name]:ce,AEmpty:Z,[re.name]:re,[re.Item.name]:re.Item,[oe.name]:oe,[oe.Step.name]:oe.Step,[ie.name]:ie,[ie.TabPane.name]:ie.TabPane},setup(){const e=M([]),t=M();return e.value.push({id:"common",name:"通用流程",children:[{id:"hr",name:"HR通用流程"},{id:"finance",name:"发文流程"},{id:"fawu",name:"监管部流程"},{id:"gongguan",name:"工管流程"}]}),e.value.push({id:"jituan",name:"集团总部",children:[{id:"gongdi",name:"工地流程"}]}),{treeData:e,searchFormSchema:Ce,prefixCls:"list-basic",list:Se,categoryTree:t,pagination:{show:!0,pageSize:3}}}});const Ye=N();x("data-v-792431d4");const We={key:0,class:"extra"},ze={class:"description"};K();const qe=Ye(((e,t,n,a,s,l)=>{const c=g("process-header"),r=g("BasicTree"),o=g("BasicForm"),i=g("router-link"),d=g("a-list-item-meta"),u=g("a-list-item"),p=g("a-list"),y=g("PageWrapper");return L(),_(y,{title:"流程中心",contentClass:"flex",contentBackground:"",class:"!mt-4"},{footer:Ye((()=>[E(c,{current:"launch"})])),default:Ye((()=>[E(r,{title:"流程分类",clickRowToExpand:!0,treeData:e.treeData,replaceFields:{key:"id",title:"name"},onSelect:e.handleSelect,class:"w-1/4 xl:w-1/5 mt-2",ref:"categoryTree",expandedKeys:["jituan","common"],selectedKeys:["common"]},null,8,["treeData","onSelect"]),E("div",{class:["w-3/4 xl:w-4/5 !mt-4",`${e.prefixCls}__content`]},[E(o,{class:`${e.prefixCls}__header-form`,labelWidth:100,schemas:e.searchFormSchema,showActionButtonGroup:!1},null,8,["class","schemas"]),E(p,{pagination:e.pagination},{default:Ye((()=>[(L(!0),_(I,null,w(e.list,(e=>(L(),_(u,{key:e.id,class:"list"},{default:Ye((()=>[E(d,null,{title:Ye((()=>[E(i,{to:`/process/launch/${e.modelKey}`},{default:Ye((()=>[E("span",null,j(e.title),1),e.extra?(L(),_("div",We,j(e.extra),1)):S("",!0)])),_:2},1032,["to"])])),description:Ye((()=>[E("div",ze,j(e.description),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["pagination"])],2)])),_:1})}));Xe.render=qe,Xe.__scopeId="data-v-792431d4";export default Xe;
