import{I as e}from"./index.c9b18906.js";import{_ as t}from"./TableImg.5453971a.js";import"./BasicForm.f252c294.js";import{_ as s}from"./PageWrapper.e77aca1b.js";import{k as o,r as a,K as r,o as i,n as c,Q as n,q as d,V as m,ah as p,Y as u}from"./vendor.9d9efc92.js";import"./index.6992208b.js";import"./createAsyncComponent.c931d453.js";/* empty css              *//* empty css              */import"./useForm.7c89f4ac.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./useModal.11986c6c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.e73ef165.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.14e97884.js";/* empty css              *//* empty css              */import"./download.f95f58dd.js";import"./StrengthMeter.505415db.js";import"./usePageContext.87ea5c45.js";/* empty css              *//* empty css              */var l=o({components:{BasicTable:t,ImpExcel:e,PageWrapper:s},setup(){const e=a([]);return{loadDataSuccess:function(t){e.value=[];for(const s of t){const{header:t,results:o,meta:{sheetName:a}}=s,r=[];for(const e of t)r.push({title:e,dataIndex:e});e.value.push({title:a,dataSource:o,columns:r})}},tableListRef:e}}});const f=u(" 导入Excel ");l.render=function(e,t,s,o,a,u){const l=r("a-button"),j=r("ImpExcel"),b=r("BasicTable"),x=r("PageWrapper");return i(),c(x,{title:"excel数据导入示例"},{default:n((()=>[d(j,{onSuccess:e.loadDataSuccess},{default:n((()=>[d(l,{class:"m-3"},{default:n((()=>[f])),_:1})])),_:1},8,["onSuccess"]),(i(!0),c(m,null,p(e.tableListRef,((e,t)=>(i(),c(b,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])),_:1})};export default l;
