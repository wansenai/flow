import{_ as e}from"./TableImg.f7de9836.js";import"./BasicForm.49b9f6b2.js";import"./index.8707028f.js";import{c as i,d as o,j as t}from"./data.4c5a82c7.js";import{P as a}from"./index.9f071deb.js";import{j as s,K as d,o as r,m as n,Q as m,n as c,Y as p}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.bcbbeb77.js";import"./index.0bb7f928.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.b444bbac.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.146ae02b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b52b2976.js";/* empty css              *//* empty css              *//* empty css              */import"./download.e39a543f.js";import"./base64Conver.bb012c73.js";import"./index.19c34870.js";import"./useContentViewHeight.099c9658.js";/* empty css              *//* empty css              */var f=s({components:{BasicTable:e,PageWrapper:a},setup:()=>({defaultHeader:function(){t({data:o,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){t({data:o,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:i,data:o})});const j=p(" 导出：默认头部 "),b=p(" 导出：自定义头部 ");f.render=function(e,i,o,t,a,s){const p=d("a-button"),f=d("BasicTable"),u=d("PageWrapper");return r(),n(u,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:m((()=>[c(f,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:m((()=>[c(p,{onClick:e.defaultHeader},{default:m((()=>[j])),_:1},8,["onClick"]),c(p,{onClick:e.customHeader},{default:m((()=>[b])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default f;