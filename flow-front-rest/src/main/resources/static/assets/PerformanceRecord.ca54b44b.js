import{k as e,bm as a,r as t,D as o,K as i,o as n,n as r,P as d,q as l}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              */import{u as s}from"./useECharts.2d5d69a7.js";import"./index.dd44fc8e.js";var f=e({components:{Card:a},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const a=t(null),{setOptions:i}=s(a);return o((()=>e.loading),(()=>{e.loading||i({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{show:!0,orient:"vertical",left:"right",data:["S","A","B","C","D","E"]},series:[{color:["#00eebb","#ffeebb","#ff6600","#b6a2de","#fbb000","#00c7c9"],name:"个人绩效",type:"pie",avoidLabelOverlap:!1,itemStyle:{borderRadius:4,borderColor:"#fff",borderWidth:2},label:{show:!0,position:"left"},emphasis:{label:{show:!0,fontSize:"12",fontWeight:"bold"},shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"},labelLine:{show:!1},data:[{value:1048,name:"S"},{value:735,name:"A"},{value:580,name:"B"},{value:484,name:"C"},{value:334,name:"D"},{value:484,name:"E"}],animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return 100*Math.random()}}]})}),{immediate:!0}),{chartRef:a}}});f.render=function(e,a,t,o,s,f){const m=i("Card");return n(),r(m,{title:"个人绩效",loading:e.loading},{default:d((()=>[l("div",{ref:"chartRef",style:{width:e.width,height:e.height}},null,4)])),_:1},8,["loading"])};export default f;
