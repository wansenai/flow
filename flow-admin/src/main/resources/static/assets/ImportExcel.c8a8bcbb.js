import{I as e}from"./index.db726c21.js";import{_ as t}from"./TableImg.44575666.js";import"./BasicForm.52dd7a78.js";import{_ as s}from"./PageWrapper.c247b944.js";import{k as o,r as a,K as r,o as i,n as d,Q as n,q as c,V as m,ah as p,Y as u}from"./vendor.bc3b2d68.js";import"./index.f72cd585.js";import"./createAsyncComponent.d1e6eb80.js";/* empty css              *//* empty css              */import"./useForm.141421b5.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./useModal.a73129f6.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.13695b66.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8664b7cc.js";/* empty css              *//* empty css              */import"./download.a0c19fe1.js";import"./StrengthMeter.d8342dd8.js";import"./usePageContext.8ab99773.js";/* empty css              *//* empty css              */var l=o({components:{BasicTable:t,ImpExcel:e,PageWrapper:s},setup(){const e=a([]);return{loadDataSuccess:function(t){e.value=[];for(const s of t){const{header:t,results:o,meta:{sheetName:a}}=s,r=[];for(const e of t)r.push({title:e,dataIndex:e});e.value.push({title:a,dataSource:o,columns:r})}},tableListRef:e}}});const f=u(" 导入Excel ");l.render=function(e,t,s,o,a,u){const l=r("a-button"),j=r("ImpExcel"),b=r("BasicTable"),x=r("PageWrapper");return i(),d(x,{title:"excel数据导入示例"},{default:n((()=>[c(j,{onSuccess:e.loadDataSuccess},{default:n((()=>[c(l,{class:"m-3"},{default:n((()=>[f])),_:1})])),_:1},8,["onSuccess"]),(i(!0),d(m,null,p(e.tableListRef,((e,t)=>(i(),d(b,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])),_:1})};export default l;
