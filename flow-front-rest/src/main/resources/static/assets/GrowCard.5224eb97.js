import{B as t,m as a}from"./index.ee676e78.js";import{c as o}from"./createAsyncComponent.876e5416.js";import{k as e,bg as l,bm as s,K as n,o as i,n as r,S as c,ag as d,P as u,q as m,X as p,s as f}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */const x=o((()=>t((()=>import("./CountTo.6bd7b4a3.js")),["/assets/CountTo.6bd7b4a3.js","/assets/index.ee676e78.js","/assets/index.37e6979f.css","/assets/vendor.d660e98f.js","/assets/vendor.859e9874.css"]))),g=[{title:"访问数",icon:"visit-count|svg",value:2e3,total:12e4,color:"green",action:"月"},{title:"成交额",icon:"total-sales|svg",value:2e4,total:5e5,color:"blue",action:"月"},{title:"下载数",icon:"download-count|svg",value:8e3,total:12e4,color:"orange",action:"周"},{title:"成交数",icon:"transaction|svg",value:5e3,total:5e4,color:"purple",action:"年"}];var v=e({components:{CountTo:x,Tag:l,Card:s,Icon:a},setup:()=>({growCardList:g})});const j={class:"md:flex"},b={class:"py-4 px-4 flex justify-between"},C={class:"p-2 px-4 flex justify-between"};v.render=function(t,a,o,e,l,s){const x=n("Tag"),g=n("CountTo"),v=n("Icon"),w=n("Card");return i(),r("div",j,[(i(!0),r(c,null,d(t.growCardList,((a,o)=>(i(),r(w,{key:a.title,size:"small",loading:t.$attrs.loading,title:a.title,class:["md:w-1/4 w-full !md:mt-0 !mt-4",[o+1<4&&"!md:mr-4"]],canExpan:!1},{extra:u((()=>[m(x,{color:a.color},{default:u((()=>[p(f(a.action),1)])),_:2},1032,["color"])])),default:u((()=>[m("div",b,[m(g,{prefix:"$",startVal:1,endVal:a.value,class:"text-2xl"},null,8,["endVal"]),m(v,{icon:a.icon,size:40},null,8,["icon"])]),m("div",C,[m("span",null,"总"+f(a.title),1),m(g,{prefix:"$",startVal:1,endVal:a.total},null,8,["endVal"])])])),_:2},1032,["loading","title","class"])))),128))])};export default v;
