import{a as o,x as u,a9 as l,i as s,l as m,C as p,p as d,bp as c,k as f}from"./index.e61ad282.js";import{C as h}from"./index.c938a7eb.js";import"./index.f066cc44.js";/* empty css               */import{u as g}from"./useECharts.69afdc50.js";import"./index.8e210a09.js";import"./index.6d7de824.js";import"./Col.f72eb8d0.js";import"./useFlexGapSupport.ed2a5fc1.js";import"./useRefs.0c428178.js";import"./PlusOutlined.e602ccf2.js";const A=o({__name:"SalesProductPie",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=e,a=u(null),{setOptions:r}=g(a);return l(()=>t.loading,()=>{t.loading||r({tooltip:{trigger:"item"},series:[{name:"\u8BBF\u95EE\u6765\u6E90",type:"pie",radius:"80%",center:["50%","50%"],color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],data:[{value:500,name:"\u7535\u5B50\u4EA7\u54C1"},{value:310,name:"\u670D\u88C5"},{value:274,name:"\u5316\u5986\u54C1"},{value:400,name:"\u5BB6\u5C45"}].sort(function(i,n){return i.value-n.value}),roseType:"radius",animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*400}}]})},{immediate:!0}),(i,n)=>(s(),m(f(h),{title:"\u6210\u4EA4\u5360\u6BD4",loading:e.loading},{default:p(()=>[d("div",{ref_key:"chartRef",ref:a,style:c({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{A as default};
