import{k as e,bm as s,bs as t,r as o,K as a,o as r,n as i,P as n,q as d,X as m,s as p,N as c}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{todoTableSchema as b,haveDownTableSchema as f,dynamicInfoItems as u}from"./data.06c5ab46.js";import{h as l}from"./header.d801b988.js";import{m as j}from"./index.21f8a12f.js";import{_ as I}from"./TableImg.35f1bee6.js";import"./useForm.87d4ef16.js";import{u as y}from"./useTable.c93b5e32.js";import{a as g,b as x}from"./process.277f848b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.4f1b8c18.js";import"./useModal.f5d94e37.js";import"./onMountedOrActivated.a3bdff8d.js";/* empty css              */import"./useSortable.0b13751b.js";/* empty css              */import"./CountdownInput.9b3564b9.js";import"./download.03309c9a.js";import"./StrengthMeter.10576816.js";const T=[{key:"todo",tab:"待办"},{key:"haveDown",tab:"已办"}];var v=e({components:{Card:s,List:t,ListItem:t.Item,ListItemMeta:t.Item.Meta,Icon:j,BasicTable:I},setup(e){const s=o("todo"),[t]=y({api:g,title:"",columns:b,useSearchForm:!1,pagination:!0,showIndexColumn:!0,canResize:!1}),[a]=y({api:x,title:"",columns:f,useSearchForm:!1,pagination:!0,showIndexColumn:!0,canResize:!1});return{items:u,onTabChange:(e,t)=>{s.value=e},headerImg:l,activeKey:s,registerTodoTable:t,registerHaveDownTable:a,tabList:T}}});const h=m("更多"),K={key:0},k={key:1};v.render=function(e,s,t,o,b,f){const u=a("a-button"),l=a("router-link"),j=a("BasicTable"),I=a("Card");return r(),i(I,c(e.$attrs,{tabList:e.tabList,activeTabKey:e.activeKey,onTabChange:s[1]||(s[1]=s=>e.onTabChange(s,"todo")),bodyStyle:"padding-top:0;"}),{tabBarExtraContent:n((()=>[d(u,{type:"link",size:"small"},{default:n((()=>[h])),_:1})])),default:n((()=>["todo"===e.activeKey?(r(),i("p",K,[d(j,{onRegister:e.registerTodoTable,class:"mt-0"},{nameRender:n((({record:e})=>[d(l,{to:`/process/approve/${e.processDefinitionKey}?taskId=${e.taskId}&procInstId=${e.processInstanceId}&businessKey=${e.businessKey}`},{default:n((()=>[m(p(e.formName),1)])),_:2},1032,["to"])])),_:1},8,["onRegister"])])):(r(),i("p",k,[d(j,{onRegister:e.registerHaveDownTable},{nameRender:n((({record:e})=>[d(l,{to:`/process/view/${e.processDefinitionKey}?taskId=${e.taskId}&procInstId=${e.processInstanceId}&businessKey=${e.businessKey}`},{default:n((()=>[m(p(e.formName),1)])),_:2},1032,["to"])])),_:1},8,["onRegister"])]))])),_:1},16,["tabList","activeTabKey"])};export default v;
