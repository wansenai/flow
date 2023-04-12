import{L as _,a as h,b1 as k,v,aF as i,o as r,i as C,z as o,m as s,B as n,f,t as g,aG as $}from"./index.ad5d3368.js";import{C as K}from"./index.584f65b7.js";import"./index.d37dee69.js";import"./index.1bc3394f.js";import{L as m}from"./index.746b5548.js";import{todoTableSchema as B,haveDownTableSchema as L,dynamicInfoItems as w}from"./data.303a4478.js";import{h as D}from"./header.d801b988.js";import{B as R}from"./TableImg.150ac154.js";import"./useForm.0d8eb9ff.js";import{u as y}from"./useTable.cecac68f.js";import{a as F,b as S}from"./process.4bbfb3c2.js";import"./index.079b218a.js";import"./index.eda90618.js";import"./useRefs.78d96779.js";import"./useFlexGapSupport.75a62d21.js";import"./eagerComputed.f76a85b9.js";import"./index.05897428.js";import"./index.6fe17fad.js";import"./index.db644a38.js";import"./index.8771f033.js";import"./index.07d0350c.js";import"./useSize.eed19aca.js";import"./useWindowSizeFn.c895093f.js";import"./useContentViewHeight.a15e882a.js";import"./ArrowLeftOutlined.1072a2d2.js";import"./index.5201732f.js";import"./transButton.70514f39.js";import"./index.f286757b.js";import"./index.4d61bc1b.js";import"./index.83357e8e.js";import"./get.0ca0e90e.js";import"./index.fc8e6058.js";import"./FullscreenOutlined.30839594.js";import"./index.ef8c7e52.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.a8863f26.js";import"./scrollTo.58675936.js";import"./index.49ad744d.js";import"./_baseIteratee.1bcd72d2.js";import"./index.f3ce20b1.js";import"./index.595fe7af.js";import"./download.7bdf07a8.js";import"./index.31718ebb.js";import"./ClockCircleOutlined.88d817cb.js";import"./uniqBy.2d4e52d3.js";const z=[{key:"todo",tab:"\u5F85\u529E"},{key:"haveDown",tab:"\u5DF2\u529E"}],E=h({components:{Card:K,List:m,ListItem:m.Item,ListItemMeta:m.Item.Meta,Icon:k,BasicTable:R},setup(e){const a=v("todo"),[p]=y({api:F,title:"",columns:B,useSearchForm:!1,pagination:!0,showIndexColumn:!0,canResize:!1}),[c]=y({api:S,title:"",columns:L,useSearchForm:!1,pagination:!0,showIndexColumn:!0,canResize:!1});return{items:w,onTabChange:(l,u)=>{a.value=l},headerImg:D,activeKey:a,registerTodoTable:p,registerHaveDownTable:c,tabList:z}}}),M={key:0},N={key:1};function P(e,a,p,c,I,l){const u=i("a-button"),d=i("router-link"),b=i("BasicTable"),T=i("Card");return r(),C(T,$(e.$attrs,{tabList:e.tabList,activeTabKey:e.activeKey,onTabChange:a[0]||(a[0]=t=>e.onTabChange(t,"todo")),bodyStyle:"padding-top:0;"}),{tabBarExtraContent:o(()=>[s(u,{type:"link",size:"small"},{default:o(()=>[n("\u66F4\u591A")]),_:1})]),default:o(()=>[e.activeKey==="todo"?(r(),f("p",M,[s(b,{onRegister:e.registerTodoTable,class:"mt-0"},{nameRender:o(({record:t})=>[s(d,{to:`/process/approve/${t.processDefinitionKey}?taskId=${t.taskId}&procInstId=${t.processInstanceId}&businessKey=${t.businessKey}`},{default:o(()=>[n(g(t.formName),1)]),_:2},1032,["to"])]),_:1},8,["onRegister"])])):(r(),f("p",N,[s(b,{onRegister:e.registerHaveDownTable},{nameRender:o(({record:t})=>[s(d,{to:`/process/view/${t.processDefinitionKey}?taskId=${t.taskId}&procInstId=${t.processInstanceId}&businessKey=${t.businessKey}`},{default:o(()=>[n(g(t.formName),1)]),_:2},1032,["to"])]),_:1},8,["onRegister"])]))]),_:1},16,["tabList","activeTabKey"])}var Dt=_(E,[["render",P]]);export{Dt as default};