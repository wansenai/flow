import{D as e}from"./index.e57d5265.js";import{_ as a}from"./TableImg.2184ae21.js";import"./BasicForm.f3cb7023.js";import{u as t}from"./useTable.e98ad9ef.js";import{P as i}from"./index.cf1d4223.js";import{y as r,aZ as o,Z as s,B as n,F as d,v as m,K as c}from"./vendor.880b4c6c.js";/* empty css              */import{refundTableData as p,refundTableSchema as f,refundTimeTableSchema as l,refundTimeTableData as u,refundSchema as j,refundData as b,personSchema as x,personData as g}from"./data.a6a4d2fe.js";import"./index.a33a5e4d.js";/* empty css              *//* empty css              *//* empty css              */import"./useForm.c6cb6ef5.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.98d9f37c.js";import"./onMountedOrActivated.8f899bfb.js";import"./useSortable.1c9ace8f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.08ac3aaf.js";/* empty css              *//* empty css              *//* empty css              */import"./download.2ac02f88.js";import"./base64Conver.bb012c73.js";import"./index.ce488518.js";/* empty css              *//* empty css              */import"./useContentViewHeight.d4b428eb.js";var h=r({components:{Description:e,BasicTable:a,PageWrapper:i,[o.name]:o},setup(){const[e]=t({title:"退货商品",dataSource:p,columns:f,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let a=0,t=0;return e.forEach((e=>{a+=e.t5,t+=e.t6})),[{t1:"总计",t5:a,t6:t}]}}),[a]=t({title:"退货进度",columns:l,pagination:!1,dataSource:u,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:a,refundSchema:j,refundData:b,personSchema:x,personData:g}}});const T=c("data-v-109959ad"),S=T(((e,a,t,i,r,o)=>{const c=s("Description"),p=s("a-divider"),f=s("BasicTable"),l=s("PageWrapper");return n(),d(l,{title:"基础详情页",contentBackground:""},{default:T((()=>[m(c,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),m(p),m(c,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),m(p),m(f,{onRegister:e.registerRefundTable},null,8,["onRegister"]),m(p),m(f,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=S,h.__scopeId="data-v-109959ad";export default h;
