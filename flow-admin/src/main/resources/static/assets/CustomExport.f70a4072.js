import{_ as e}from"./TableImg.7eb6c017.js";import"./BasicForm.86cd97da.js";import{E as o}from"./index.10f2c972.js";import{c as a,d as t,j as s}from"./data.b6179191.js";import{b as r}from"./useModal.b44b8cab.js";import{_ as i}from"./PageWrapper.ba7be9e5.js";import{k as n,K as d,o as p,n as c,Q as m,q as j,Y as b}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.87ab8aa1.js";import"./index.33a0330f.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.a66d7f9a.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0bc8da65.js";/* empty css              *//* empty css              */import"./download.5032960b.js";import"./StrengthMeter.ae9219d5.js";import"./createAsyncComponent.2cc595b8.js";import"./usePageContext.a11cc1be.js";/* empty css              *//* empty css              */var l=n({components:{BasicTable:e,ExpExcelModel:o,PageWrapper:i},setup(){const[e,{openModal:o}]=r();return{defaultHeader:function({filename:e,bookType:o}){s({data:t,filename:e,write2excelOpts:{bookType:o}})},columns:a,data:t,register:e,openModal:o}}});const f=b(" 导出 ");l.render=function(e,o,a,t,s,r){const i=d("a-button"),n=d("BasicTable"),b=d("ExpExcelModel"),l=d("PageWrapper");return p(),c(l,{title:"导出示例",content:"可以选择导出格式"},{default:m((()=>[j(n,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:m((()=>[j(i,{onClick:e.openModal},{default:m((()=>[f])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),j(b,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])),_:1})};export default l;
