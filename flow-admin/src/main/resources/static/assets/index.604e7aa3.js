import{B as g}from"./TableImg.3ff4c1b4.js";import{l as B}from"./BasicForm.bc1bc2ec.js";import{u as b}from"./useTable.dffabf3f.js";import{A,g as F,c as T,s as E,d as k}from"./AreaModal.4fc1447d.js";import{az as _,a as D,aB as r,o as C,i as M,p as c,B as d,C as S,k as w,l as y,G as R}from"./index.bbfb8c5d.js";import{b as P}from"./index.56ac9033.js";import"./index.08f5b20b.js";import"./Checkbox.6b0f0619.js";import"./index.932444ce.js";import"./index.424465cb.js";import"./eagerComputed.2918d49d.js";import"./useForm.35a2e1b5.js";import"./index.6f4a9d56.js";import"./index.b7fa4bcc.js";import"./index.8643b1cc.js";import"./useSize.2da926c0.js";import"./useWindowSizeFn.daa22200.js";import"./useContentViewHeight.ce579b14.js";import"./ArrowLeftOutlined.32f822b8.js";import"./index.40637d17.js";import"./transButton.15723253.js";import"./index.e860cc21.js";import"./index.ba9876ed.js";import"./index.bd278e5f.js";import"./uuid.2b29000c.js";import"./index.d0de3318.js";import"./_baseIteratee.6836a2b9.js";import"./get.476f8b78.js";import"./DeleteOutlined.426a7a56.js";import"./index.21d11494.js";import"./useRefs.c946e576.js";import"./Form.64d057a8.js";import"./Col.bf638c61.js";import"./useFlexGapSupport.ae09cf13.js";import"./index.eb776706.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.566a8b2c.js";import"./FullscreenOutlined.7b1f5985.js";import"./index.59bf1cba.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.1bc5bfb7.js";import"./index.a824713f.js";/* empty css              *//* empty css               */import"./index.53f3ac38.js";import"./index.dbc537d6.js";import"./index.1311bc71.js";import"./download.4c3fda74.js";import"./base64Conver.08b9f4ec.js";import"./index.5d0a6eed.js";import"./index.5796c3bd.js";import"./uniqBy.16bfb902.js";import"./constantEnum.bf6653fb.js";const{createMessage:v}=R(),$=D({name:"Area",components:{BasicTable:g,TableAction:B,AreaModal:A},setup(){const[e,{openModal:i,setModalProps:a}]=P(),[f,{reload:n}]=b({title:"\u5217\u8868",api:F,columns:T,formConfig:{labelWidth:120,schemas:E,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,isTreeTable:!0,canColDrag:!0,pagination:!1,useSearchForm:!0,showTableSetting:!1,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action",fixed:!1}});function h(){a({title:"\u65B0\u589E\u533A\u57DF"}),i(!0,{isUpdate:!1})}function u(t,o){o.stopPropagation(),a({title:"\u4FEE\u6539\u533A\u57DF"}),i(!0,{record:t,isUpdate:!0})}function s(t,o){o.stopPropagation(),a({title:"\u65B0\u589E\u3010"+t.name+"\u3011\u7684\u5B50\u533A\u57DF"}),t={pcode:t.code},i(!0,{record:t,isUpdate:!0})}function l(t,o){if(o.stopPropagation(),t.children&&t.children.length>0){v.warning("\u6709\u5B50\u8282\u70B9\uFF0C\u4E0D\u80FD\u5220\u9664\uFF01");return}k(t.code).then(()=>{n()})}function p(){n()}function m(){setTimeout(()=>{n()},200)}return{registerTable:f,registerModal:e,handleCreate:h,handleEdit:u,handleCreateChild:s,handleDelete:l,handleSuccess:m,doSearch:p}}});function x(e,i,a,f,n,h){const u=r("a-button"),s=r("TableAction"),l=r("BasicTable"),p=r("AreaModal");return C(),M("div",null,[c(l,{onRegister:e.registerTable},{toolbar:d(()=>[c(u,{type:"primary",onClick:e.handleCreate},{default:d(()=>[S(" \u65B0\u589E ")]),_:1},8,["onClick"])]),bodyCell:d(({column:m,record:t})=>[m.key==="action"?(C(),w(s,{key:0,actions:[{tooltip:"\u6DFB\u52A0\u5B50\u8282\u70B9",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,t)},{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",onClick:o=>{o.stopPropagation()},popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,t),placement:"left"}}]},null,8,["actions"])):y("",!0)]),_:1},8,["onRegister"]),c(p,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var xt=_($,[["render",x]]);export{xt as default};