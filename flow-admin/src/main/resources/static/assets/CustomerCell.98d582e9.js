import{_ as e,a as t}from"./TableImg.840b2332.js";import"./BasicForm.d12ec528.js";import{u as s}from"./useTable.14907d98.js";import{k as i,b2 as o,K as d,o as a,n as r,q as n,Q as m,Y as c,s as p}from"./vendor.9d9efc92.js";/* empty css              */import{d as l}from"./table.95360230.js";/* empty css              *//* empty css              */import"./useForm.831c770a.js";import"./index.68bdfa67.js";/* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./useModal.40813107.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.86f4c026.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.69c99d5f.js";/* empty css              *//* empty css              */import"./download.684fb6a2.js";import"./StrengthMeter.e21abcab.js";const b=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"分类",dataIndex:"category",width:80,align:"center",defaultHidden:!0,slots:{customRender:"category"}},{title:"姓名",dataIndex:"name",width:120},{title:"头像",dataIndex:"img",width:120,slots:{customRender:"img"}},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",slots:{customRender:"no"}},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}];var u=i({components:{BasicTable:e,TableImg:t,Tag:o},setup(){const[e]=s({title:"自定义列内容",api:l,columns:b,bordered:!0,showTableSetting:!0});return{registerTable:e}}});const j={class:"p-4"};u.render=function(e,t,s,i,o,l){const b=d("Tag"),u=d("TableImg"),f=d("BasicTable");return a(),r("div",j,[n(f,{onRegister:e.registerTable},{id:m((({record:e})=>[c(" ID: "+p(e.id),1)])),no:m((({record:e})=>[n(b,{color:"green"},{default:m((()=>[c(p(e.no),1)])),_:2},1024)])),img:m((()=>[n(u,{imgList:["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216"]},null,8,["imgList"])])),category:m((({record:e})=>[n(b,{color:"green"},{default:m((()=>[c(p(e.no),1)])),_:2},1024)])),_:1},8,["onRegister"])])};export default u;
