import{u as t}from"./useECharts.55ed4b32.js";import{b as e}from"./props.f48aca0b.js";import{z as r,r as a,X as i,D as s,F as o}from"./vendor.11d66826.js";import"./index.1bc1d740.js";var p=r({props:e,setup(){const e=a(null),{setOptions:r}=t(e);return i((()=>{r({tooltip:{trigger:"axis",axisPointer:{lineStyle:{width:1,color:"#019680"}}},grid:{left:"1%",right:"1%",top:"2  %",bottom:0,containLabel:!0},xAxis:{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},yAxis:{type:"value",max:8e3,splitNumber:4},series:[{data:[3e3,2e3,3333,5e3,3200,4200,3200,2100,3e3,5100,6e3,3200,4800],type:"bar",barMaxWidth:80}]})})),{chartRef:e}}});p.render=function(t,e,r,a,i,p){return s(),o("div",{ref:"chartRef",style:{height:t.height,width:t.width}},null,4)};export default p;
