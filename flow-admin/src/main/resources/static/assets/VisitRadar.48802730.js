import{A as u,r as s,S as d,B as n,a1 as l,a6 as m,H as c,X as h,u as x,bb as f}from"./vendor.7bee64cc.js";/* empty css               *//* empty css               *//* empty css               */import{u as p}from"./useECharts.173a2213.js";import"./index.9eb02b52.js";const j=u({props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(t){const e=t,a=s(null),{setOptions:i}=p(a);return d(()=>e.loading,()=>{e.loading||i({legend:{bottom:0,data:["\u8BBF\u95EE","\u8D2D\u4E70"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{text:"\u7535\u8111",max:100},{text:"\u5145\u7535\u5668",max:100},{text:"\u8033\u673A",max:100},{text:"\u624B\u673A",max:100},{text:"Ipad",max:100},{text:"\u8033\u673A",max:100}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"\u8BBF\u95EE",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"\u8D2D\u4E70",itemStyle:{color:"#5ab1ef"}}]}]})},{immediate:!0}),(g,b)=>(n(),l(x(f),{title:"\u8F6C\u5316\u7387",loading:t.loading},{default:m(()=>[c("div",{ref:(o,r)=>{r.chartRef=o,a.value=o},style:h({width:t.width,height:t.height})},null,4)]),_:1},8,["loading"]))}});export{j as default};
