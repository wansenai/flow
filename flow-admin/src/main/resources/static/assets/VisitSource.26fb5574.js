import{k as e,b3 as a,r as t,D as i,K as n,o,n as r,Q as d,q as l}from"./vendor.d159a66e.js";/* empty css              *//* empty css              *//* empty css              */import{u as s}from"./useECharts.eacad7ce.js";import"./index.efe55fc0.js";var m=e({components:{Card:a},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const a=t(null),{setOptions:n}=s(a);return i((()=>e.loading),(()=>{e.loading||n({tooltip:{trigger:"item"},legend:{bottom:"1%",left:"center"},series:[{color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],name:"访问来源",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"12",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"搜索引擎"},{value:735,name:"直接访问"},{value:580,name:"邮件营销"},{value:484,name:"联盟广告"}],animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return 100*Math.random()}}]})}),{immediate:!0}),{chartRef:a}}});m.render=function(e,a,t,i,s,m){const p=n("Card");return o(),r(p,{title:"访问来源",loading:e.loading},{default:d((()=>[l("div",{ref:"chartRef",style:{width:e.width,height:e.height}},null,4)])),_:1},8,["loading"])};export default m;
