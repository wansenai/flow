import{k as e,bm as t,bs as s,r as a,K as r,o as i,n as o,P as n,q as d,X as m,s as c,N as p}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{recruitTableSchema as b,trainTableSchema as u,dynamicInfoItems as f}from"./data.06c5ab46.js";import{h as l}from"./header.d801b988.js";import{m as j}from"./index.ee676e78.js";import{_ as I}from"./TableImg.a511f9b3.js";import"./useForm.aaf83584.js";import{u as y}from"./useTable.0d7aec25.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.4f1b8c18.js";import"./useModal.47c80e94.js";import"./onMountedOrActivated.a3bdff8d.js";/* empty css              */import"./useSortable.9da73453.js";/* empty css              */import"./CountdownInput.8522e4d7.js";import"./download.d883da4b.js";import"./StrengthMeter.30de6605.js";const g=[{key:"recruit",tab:"招聘"},{key:"train",tab:"培训"}];var x=e({components:{Card:t,List:s,ListItem:s.Item,ListItemMeta:s.Item.Meta,Icon:j,BasicTable:I},setup(e){const t=a("recruit"),[s]=y({title:"",columns:b,useSearchForm:!1,pagination:!0,showIndexColumn:!0,canResize:!1}),[r]=y({title:"",columns:u,useSearchForm:!1,pagination:!0,showIndexColumn:!0,canResize:!1});return{items:f,onTabChange:(e,s)=>{t.value=e},headerImg:l,activeKey:t,registerRecruitTable:s,registerTrainTable:r,tabList:g}}});const T=m("更多"),K={key:0},h={key:1};x.render=function(e,t,s,a,b,u){const f=r("a-button"),l=r("router-link"),j=r("BasicTable"),I=r("Card");return i(),o(I,p(e.$attrs,{tabList:e.tabList,activeTabKey:e.activeKey,onTabChange:t[1]||(t[1]=t=>e.onTabChange(t,"todo")),bodyStyle:"padding-top:0;"}),{tabBarExtraContent:n((()=>[d(f,{type:"link",size:"small"},{default:n((()=>[T])),_:1})])),default:n((()=>["recruit"===e.activeKey?(i(),o("p",K,[d(j,{onRegister:e.registerRecruitTable,class:"mt-0"},{nameRender:n((({record:e})=>[d(l,{to:`/process/approve/${e.processDefinitionKey}?taskId=${e.taskId}&procInstId=${e.processInstanceId}&businessKey=${e.businessKey}`},{default:n((()=>[m(c(e.formName),1)])),_:2},1032,["to"])])),_:1},8,["onRegister"])])):(i(),o("p",h,[d(j,{onRegister:e.registerTrainTable},{nameRender:n((({record:e})=>[d(l,{to:`/process/view/${e.processDefinitionKey}?taskId=${e.taskId}&procInstId=${e.processInstanceId}&businessKey=${e.businessKey}`},{default:n((()=>[m(c(e.formName),1)])),_:2},1032,["to"])])),_:1},8,["onRegister"])]))])),_:1},16,["tabList","activeTabKey"])};export default x;
