import{C as t}from"./index.bcd14792.js";import{_ as a}from"./index.e99064e4.js";import{y as o,b5 as e,b6 as l,Z as s,B as n,F as i,a7 as r,ao as c,a2 as d,v as u,a9 as p,J as m}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */const x=[{title:"访问数",icon:"visit-count|svg",value:2e3,total:12e4,color:"green",action:"月"},{title:"成交额",icon:"total-sales|svg",value:2e4,total:5e5,color:"blue",action:"月"},{title:"下载数",icon:"download-count|svg",value:8e3,total:12e4,color:"orange",action:"周"},{title:"成交数",icon:"transaction|svg",value:5e3,total:5e4,color:"purple",action:"年"}];var f=o({components:{CountTo:t,Tag:e,Card:l,Icon:a},setup:()=>({growCardList:x})});const v={class:"md:flex"},g={class:"py-4 px-4 flex justify-between"},b={class:"p-2 px-4 flex justify-between"};f.render=function(t,a,o,e,l,x){const f=s("Tag"),j=s("CountTo"),w=s("Icon"),C=s("Card");return n(),i("div",v,[(n(!0),i(r,null,c(t.growCardList,((a,o)=>(n(),i(C,{key:a.title,size:"small",loading:t.$attrs.loading,title:a.title,class:["md:w-1/4 w-full md:!mt-0 !mt-4",[o+1<4&&"md:!mr-4"]],canExpan:!1},{extra:d((()=>[u(f,{color:a.color},{default:d((()=>[p(m(a.action),1)])),_:2},1032,["color"])])),default:d((()=>[u("div",g,[u(j,{prefix:"$",startVal:1,endVal:a.value,class:"text-2xl"},null,8,["endVal"]),u(w,{icon:a.icon,size:40},null,8,["icon"])]),u("div",b,[u("span",null,"总"+m(a.title),1),u(j,{prefix:"$",startVal:1,endVal:a.total},null,8,["endVal"])])])),_:2},1032,["loading","title","class"])))),128))])};export default f;
