import{_ as e,a as t}from"./TableImg.c292f6c6.js";import"./BasicForm.8dd34761.js";import{u as i}from"./useTable.28113166.js";import{y as s,b5 as a,bt as d,Z as r,B as o,F as n,v as m,a2 as c,a9 as l,J as p}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import{d as b}from"./table.69ec72a6.js";/* empty css              *//* empty css              */import"./useForm.ba0f60da.js";import"./index.63ccfb82.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.0433a71f.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.7fdc4a8b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b3d678de.js";/* empty css              *//* empty css              *//* empty css              */import"./download.41df5c96.js";import"./base64Conver.bb012c73.js";import"./index.c6f733ce.js";const f=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"头像",dataIndex:"avatar",width:100,slots:{customRender:"avatar"}},{title:"分类",dataIndex:"category",width:80,align:"center",defaultHidden:!0,slots:{customRender:"category"}},{title:"姓名",dataIndex:"name",width:120},{title:"图片列表1",dataIndex:"imgArr",helpMessage:["这是简单模式的图片列表","只会显示一张在表格中","但点击可预览多张图片"],width:140,slots:{customRender:"img"}},{title:"照片列表2",dataIndex:"imgs",width:160,slots:{customRender:"imgs"}},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",slots:{customRender:"no"}},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}];var x=s({components:{BasicTable:e,TableImg:t,Tag:a,Avatar:d},setup(){const[e]=i({title:"自定义列内容",titleHelpMessage:"表格中所有头像、图片均为mock生成，仅用于演示图片占位",api:b,columns:f,bordered:!0,showTableSetting:!0});return{registerTable:e}}});const j={class:"p-4"};x.render=function(e,t,i,s,a,d){const b=r("Tag"),f=r("Avatar"),x=r("TableImg"),g=r("BasicTable");return o(),n("div",j,[m(g,{onRegister:e.registerTable},{id:c((({record:e})=>[l(" ID: "+p(e.id),1)])),no:c((({record:e})=>[m(b,{color:"green"},{default:c((()=>[l(p(e.no),1)])),_:2},1024)])),avatar:c((({record:e})=>[m(f,{size:60,src:e.avatar},null,8,["src"])])),img:c((({text:e})=>[m(x,{size:60,simpleShow:!0,imgList:e},null,8,["imgList"])])),imgs:c((({text:e})=>[m(x,{size:60,imgList:e},null,8,["imgList"])])),category:c((({record:e})=>[m(b,{color:"green"},{default:c((()=>[l(p(e.no),1)])),_:2},1024)])),_:1},8,["onRegister"])])};export default x;