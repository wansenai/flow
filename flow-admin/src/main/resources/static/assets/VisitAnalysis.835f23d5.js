var l=Object.defineProperty;var r=Object.getOwnPropertySymbols;var n=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var s=(a,e,t)=>e in a?l(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,i=(a,e)=>{for(var t in e||(e={}))n.call(e,t)&&s(a,t,e[t]);if(r)for(var t of r(e))p.call(e,t)&&s(a,t,e[t]);return a};import{u as c}from"./useECharts.69afdc50.js";import{b as h}from"./props.f48aca0b.js";import{a as y,x as m,o as u,i as f,j as d,bp as b}from"./index.e61ad282.js";const k=y({__name:"VisitAnalysis",props:i({},h),setup(a){const e=m(null),{setOptions:t}=c(e);return u(()=>{t({tooltip:{trigger:"axis",axisPointer:{lineStyle:{width:1,color:"#019680"}}},xAxis:{type:"category",boundaryGap:!1,data:["6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],splitLine:{show:!0,lineStyle:{width:1,type:"solid",color:"rgba(226,226,226,0.5)"}},axisTick:{show:!1}},yAxis:[{type:"value",max:8e4,splitNumber:4,axisTick:{show:!1},splitArea:{show:!0,areaStyle:{color:["rgba(255,255,255,0.2)","rgba(226,226,226,0.2)"]}}}],grid:{left:"1%",right:"1%",top:"2  %",bottom:0,containLabel:!0},series:[{smooth:!0,data:[111,222,4e3,18e3,33333,55555,66666,33333,14e3,36e3,66666,44444,22222,11111,4e3,2e3,500,333,222,111],type:"line",areaStyle:{},itemStyle:{color:"#5ab1ef"}},{smooth:!0,data:[33,66,88,333,3333,5e3,18e3,3e3,1200,13e3,22e3,11e3,2221,1201,390,198,60,30,22,11],type:"line",areaStyle:{},itemStyle:{color:"#019680"}}]})}),(o,g)=>(f(),d("div",{ref_key:"chartRef",ref:e,style:b({height:o.height,width:o.width})},null,4))}});export{k as default};
