import{D as e}from"./index.77244347.js";import{P as a}from"./index.dfbcae78.js";import{u as t}from"./useDescription.7b752459.js";import{z as s,Z as r,D as i,F as n,a3 as o,w as l}from"./vendor.11d66826.js";import"./index.1bc1d740.js";/* empty css              *//* empty css              *//* empty css              */import"./onMountedOrActivated.17f3c81d.js";import"./useWindowSizeFn.9fecf134.js";import"./useContentViewHeight.a8198af7.js";const m={username:"test",nickName:"VB",age:"123",phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},c=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,a)=>`${a.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}];var d=s({components:{Description:e,PageWrapper:a},setup(){const[e]=t({title:"useDescription",data:m,schema:c}),[a]=t({title:"无边框",bordered:!1,data:m,schema:c});return{mockData:m,schema:c,register:e,register1:a}}});d.render=function(e,a,t,s,m,c){const d=r("Description"),p=r("PageWrapper");return i(),n(p,{title:"详情组件示例"},{default:o((()=>[l(d,{title:"基础示例",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),l(d,{class:"mt-4",title:"垂直示例",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),l(d,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),l(d,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])])),_:1})};export default d;
