var e=Object.defineProperty,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,t=(o,a,n)=>a in o?e(o,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[a]=n;import{aU as i,aV as r}from"./index.33a0330f.js";import{u as l,k as s,bz as p,r as d,A as c,H as u,K as m,ar as g,w as f,o as b,n as y,Q as L,q as C,Y as v}from"./vendor.bc3b2d68.js";import{_ as j}from"./PageWrapper.ba7be9e5.js";/* empty css              */import"./usePageContext.a11cc1be.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.06aaefd7.js";function k(e){let o,a=document.body;if(Reflect.has(e,"target")||Reflect.has(e,"props")){const n=e;o=n.props||{},a=n.target||document.body}else o=e;const n=i(o,void 0,!0);return[()=>{const e=l(a);e&&n.open(e)},()=>{n.close()}]}var F=s({components:{Loading:r,PageWrapper:j,[p.name]:p},setup(){const e=d(null),i=d(!1),r=c({absolute:!1,loading:!1,tip:"加载中..."}),[l,s]=k({tip:"加载中..."}),[p,m]=k({target:e,props:{tip:"加载中...",absolute:!0}});function g(e){r.absolute=e,r.loading=!0,setTimeout((()=>{r.loading=!1}),2e3)}return((e,i)=>{for(var r in i||(i={}))a.call(i,r)&&t(e,r,i[r]);if(o)for(var r of o(i))n.call(i,r)&&t(e,r,i[r]);return e})({openCompFullLoading:function(){g(!1)},openFnFullLoading:function(){l(),setTimeout((()=>{s()}),2e3)},openFnWrapLoading:function(){p(),setTimeout((()=>{m()}),2e3)},openCompAbsolute:function(){g(!0)},wrapEl:e,loadingRef:i,openDirectiveLoading:function(){i.value=!0,setTimeout((()=>{i.value=!1}),2e3)}},u(r))}});const O={ref:"wrapEl"},P=v(" 全屏 Loading "),_=v(" 容器内 Loading "),w=v(" 全屏 Loading "),x=v(" 容器内 Loading "),W=v(" 打开指令Loading ");F.render=function(e,o,a,n,t,i){const r=m("a-alert"),l=m("a-button"),s=m("Loading"),p=m("PageWrapper"),d=g("loading");return f((b(),y(p,{"loading-tip":"加载中...",title:"Loading组件示例"},{default:L((()=>[C("div",O,[C(r,{message:"组件方式"}),C(l,{class:"my-4 mr-4",type:"primary",onClick:e.openCompFullLoading},{default:L((()=>[P])),_:1},8,["onClick"]),C(l,{class:"my-4",type:"primary",onClick:e.openCompAbsolute},{default:L((()=>[_])),_:1},8,["onClick"]),C(s,{loading:e.loading,absolute:e.absolute,tip:e.tip},null,8,["loading","absolute","tip"]),C(r,{message:"函数方式"}),C(l,{class:"my-4 mr-4",type:"primary",onClick:e.openFnFullLoading},{default:L((()=>[w])),_:1},8,["onClick"]),C(l,{class:"my-4",type:"primary",onClick:e.openFnWrapLoading},{default:L((()=>[x])),_:1},8,["onClick"]),C(r,{message:"指令方式"}),C(l,{class:"my-4 mr-4",type:"primary",onClick:e.openDirectiveLoading},{default:L((()=>[W])),_:1},8,["onClick"])],512)])),_:1},512)),[[d,e.loadingRef]])};export default F;
