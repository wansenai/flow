import{u as e}from"./useECharts.562314f8.js";import{g as t}from"./data.29a5f341.js";import{y as a,r,X as o,B as i,F as l}from"./vendor.880b4c6c.js";import"./index.10e3b51a.js";var s=a({props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const a=r(null),{setOptions:i,echarts:l}=e(a),{barData:s,lineData:c,category:n}=t;return o((()=>{i({backgroundColor:"#0f375f",tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,backgroundColor:"#333"}}},legend:{data:["line","bar"],textStyle:{color:"#ccc"}},xAxis:{data:n,axisLine:{lineStyle:{color:"#ccc"}}},yAxis:{splitLine:{show:!1},axisLine:{lineStyle:{color:"#ccc"}}},series:[{name:"line",type:"line",smooth:!0,showAllSymbol:"auto",symbol:"emptyCircle",symbolSize:15,data:c},{name:"bar",type:"bar",barWidth:10,itemStyle:{borderRadius:5,color:new l.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#14c8d4"},{offset:1,color:"#43eec6"}])},data:s},{name:"line",type:"bar",barGap:"-100%",barWidth:10,itemStyle:{color:new l.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(20,200,212,0.5)"},{offset:.2,color:"rgba(20,200,212,0.2)"},{offset:1,color:"rgba(20,200,212,0)"}])},z:-12,data:c},{name:"dotted",type:"pictorialBar",symbol:"rect",itemStyle:{color:"#0f375f"},symbolRepeat:!0,symbolSize:[12,4],symbolMargin:1,z:-10,data:c}]})})),{chartRef:a}}});s.render=function(e,t,a,r,o,s){return i(),l("div",{ref:"chartRef",style:{height:e.height,width:e.width}},null,4)};export default s;
