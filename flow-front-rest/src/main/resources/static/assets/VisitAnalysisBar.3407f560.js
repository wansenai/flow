import{u as e}from"./useECharts.40cefb96.js";import{b as t}from"./props.f48aca0b.js";import{k as r,r as a,I as i,o as s,n as o}from"./vendor.d660e98f.js";import"./index.fe7e6ae2.js";var p=r({props:t,setup(){const t=a(null),{setOptions:r}=e(t);return i((()=>{r({tooltip:{trigger:"axis",axisPointer:{lineStyle:{width:1,color:"#019680"}}},grid:{left:"1%",right:"1%",top:"2  %",bottom:0,containLabel:!0},xAxis:{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},yAxis:{type:"value",max:8e3,splitNumber:4},series:[{data:[3e3,2e3,3333,5e3,3200,4200,3200,2100,3e3,5100,6e3,3200,4800],type:"bar",barMaxWidth:80}]})})),{chartRef:t}}});p.render=function(e,t,r,a,i,p){return s(),o("div",{ref:"chartRef",style:{height:e.height,width:e.width}},null,4)};export default p;
