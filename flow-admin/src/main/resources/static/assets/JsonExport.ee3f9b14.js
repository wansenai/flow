import{_ as e}from"./TableImg.840b2332.js";import"./BasicForm.d12ec528.js";import"./index.68e55c9a.js";import{c as a,d as t,j as o}from"./data.9a8c36c3.js";import{_ as s}from"./PageWrapper.0a593267.js";import{k as i,K as r,o as n,n as d,Q as m,q as c,Y as p}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.831c770a.js";import"./index.68bdfa67.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./useModal.40813107.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.86f4c026.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.69c99d5f.js";/* empty css              *//* empty css              */import"./download.684fb6a2.js";import"./StrengthMeter.e21abcab.js";import"./createAsyncComponent.7f6a6f6f.js";import"./usePageContext.a9e23595.js";/* empty css              *//* empty css              */var f=i({components:{BasicTable:e,PageWrapper:s},setup:()=>({defaultHeader:function(){o({data:t,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){o({data:t,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:a,data:t})});const j=p(" 导出：默认头部 "),u=p(" 导出：自定义头部 ");f.render=function(e,a,t,o,s,i){const p=r("a-button"),f=r("BasicTable"),l=r("PageWrapper");return n(),d(l,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:m((()=>[c(f,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:m((()=>[c(p,{onClick:e.defaultHeader},{default:m((()=>[j])),_:1},8,["onClick"]),c(p,{onClick:e.customHeader},{default:m((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default f;
