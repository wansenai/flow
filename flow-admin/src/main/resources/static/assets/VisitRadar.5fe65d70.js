import{a as r,x as i,a9 as u,i as l,l as s,C as m,p as d,bp as n,k as p}from"./index.ef013507.js";import{C as f}from"./index.0a407472.js";import"./index.09ae92e2.js";/* empty css               */import{u as c}from"./useECharts.3f03c88a.js";import"./index.c6737256.js";import"./index.4e2ec58e.js";import"./Col.55ed0272.js";import"./useFlexGapSupport.e51c8524.js";import"./useRefs.5ed2b70f.js";import"./PlusOutlined.95fc7300.js";const A=r({__name:"VisitRadar",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(t){const a=t,e=i(null),{setOptions:o}=c(e);return u(()=>a.loading,()=>{a.loading||o({legend:{bottom:0,data:["\u8BBF\u95EE","\u8D2D\u4E70"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{text:"\u7535\u8111",max:100},{text:"\u5145\u7535\u5668",max:100},{text:"\u8033\u673A",max:100},{text:"\u624B\u673A",max:100},{text:"Ipad",max:100},{text:"\u8033\u673A",max:100}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"\u8BBF\u95EE",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"\u8D2D\u4E70",itemStyle:{color:"#5ab1ef"}}]}]})},{immediate:!0}),(h,x)=>(l(),s(p(f),{title:"\u8F6C\u5316\u7387",loading:t.loading},{default:m(()=>[d("div",{ref_key:"chartRef",ref:e,style:n({width:t.width,height:t.height})},null,4)]),_:1},8,["loading"]))}});export{A as default};
