import{I as e}from"./index.3d608905.js";import{_ as t}from"./TableImg.2c9119a6.js";import"./BasicForm.19c32012.js";import{P as s}from"./index.16a907f1.js";import{y as o,r as a,Z as i,B as r,F as n,a2 as c,v as d,a7 as m,ao as p,a9 as f}from"./vendor.880b4c6c.js";import"./index.e99064e4.js";import"./index.bf73380f.js";import"./useWindowSizeFn.564cf32e.js";import"./useForm.e45ae65c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.56c740a0.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.45c1baba.js";/* empty css              *//* empty css              *//* empty css              */import"./download.1143de04.js";import"./base64Conver.bb012c73.js";import"./index.d495e6fa.js";/* empty css              *//* empty css              */import"./useContentViewHeight.c21e2e51.js";var u=o({components:{BasicTable:t,ImpExcel:e,PageWrapper:s},setup(){const e=a([]);return{loadDataSuccess:function(t){e.value=[];for(const s of t){const{header:t,results:o,meta:{sheetName:a}}=s,i=[];for(const e of t)i.push({title:e,dataIndex:e});e.value.push({title:a,dataSource:o,columns:i})}},tableListRef:e}}});const l=f(" 导入Excel ");u.render=function(e,t,s,o,a,f){const u=i("a-button"),j=i("ImpExcel"),x=i("BasicTable"),b=i("PageWrapper");return r(),n(b,{title:"excel数据导入示例"},{default:c((()=>[d(j,{onSuccess:e.loadDataSuccess},{default:c((()=>[d(u,{class:"m-3"},{default:c((()=>[l])),_:1})])),_:1},8,["onSuccess"]),(r(!0),n(m,null,p(e.tableListRef,((e,t)=>(r(),n(x,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])),_:1})};export default u;
