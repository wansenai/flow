import{z as t,b5 as a,r as e,Q as d,Z as o,D as r,F as i,a3 as s,w as l}from"./vendor.11d66826.js";/* empty css              *//* empty css              *//* empty css              */import{u as n}from"./useECharts.55ed4b32.js";import"./index.1bc1d740.js";var m=t({components:{Card:a},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(t){const a=e(null),{setOptions:o}=n(a);return d((()=>t.loading),(()=>{t.loading||o({legend:{bottom:0,data:["访问","购买"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{text:"电脑",max:100},{text:"充电器",max:100},{text:"耳机",max:100},{text:"手机",max:100},{text:"Ipad",max:100},{text:"耳机",max:100}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"访问",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"购买",itemStyle:{color:"#5ab1ef"}}]}]})}),{immediate:!0}),{chartRef:a}}});m.render=function(t,a,e,d,n,m){const p=o("Card");return r(),i(p,{title:"转化率",loading:t.loading},{default:s((()=>[l("div",{ref:"chartRef",style:{width:t.width,height:t.height}},null,4)])),_:1},8,["loading"])};export default m;
