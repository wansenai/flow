import{_ as e}from"./Description.vue_vue&type=script&lang.e46d8195.js";import{_ as t}from"./TableImg.840b2332.js";import"./BasicForm.d12ec528.js";import{u as r}from"./useTable.14907d98.js";import{_ as a}from"./PageWrapper.0a593267.js";import{k as o,aV as s,K as i,o as n,n as d,x as m,q as p}from"./vendor.9d9efc92.js";/* empty css              */import{refundSchema as c,refundData as u,personSchema as l,personData as f,refundTableData as j,refundTableSchema as b,refundTimeTableSchema as x,refundTimeTableData as g}from"./data.8b4562f5.js";/* empty css              */import"./index.68bdfa67.js";/* empty css              *//* empty css              */import"./useForm.831c770a.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./useModal.40813107.js";import"./onMountedOrActivated.b73559bc.js";import"./useSortable.86f4c026.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.69c99d5f.js";/* empty css              *//* empty css              */import"./download.684fb6a2.js";import"./StrengthMeter.e21abcab.js";import"./usePageContext.a9e23595.js";/* empty css              *//* empty css              *//* empty css              */var h=o({components:{Description:e,BasicTable:t,PageWrapper:a,[s.name]:s},setup(){const[e]=r({title:"退货商品",dataSource:j,columns:b,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let t=0,r=0;return e.forEach((e=>{t+=e.t5,r+=e.t6})),[{t1:"总计",t5:t,t6:r}]}}),[t]=r({title:"退货进度",columns:x,pagination:!1,dataSource:g,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:t,refundSchema:c,refundData:u,personSchema:l,personData:f}}});const S=m(),T=S(((e,t,r,a,o,s)=>{const m=i("Description"),c=i("a-divider"),u=i("BasicTable"),l=i("PageWrapper");return n(),d(l,{title:"基础详情页",contentBackground:""},{default:S((()=>[p(m,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),p(c),p(m,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),p(c),p(u,{onRegister:e.registerRefundTable},null,8,["onRegister"]),p(c),p(u,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=T,h.__scopeId="data-v-109959ad";export default h;
