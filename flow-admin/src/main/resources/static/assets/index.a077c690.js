import{B as f}from"./TableImg.513742d5.js";import{T as b}from"./BasicForm.0ba2e15f.js";import{u as j}from"./useTable.6e5baa13.js";import{S as h,g as C,c as x,s as g,d as S}from"./SystemConfigModal.fb929666.js";import{b as _}from"./index.c505e96f.js";import{_ as B}from"./index.e84e956c.js";import{A as T,a0 as i,B as y,D as w,w as s,a6 as c,ae as E}from"./vendor.5879c5ca.js";/* empty css                *//* empty css              */import"./useForm.696aa965.js";import"./index.ea14bdae.js";/* empty css                *//* empty css                */import"./useWindowSizeFn.6a6adedd.js";import"./useContentViewHeight.ccc8749b.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.2b29000c.js";/* empty css               */import"./useSortable.a10c06e7.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.8b70aabd.js";/* empty css                *//* empty css                *//* empty css                */import"./download.e6dbd100.js";import"./base64Conver.bb012c73.js";import"./index.e83a4b09.js";const F=T({name:"SystemConfig",components:{BasicTable:f,TableAction:b,SystemConfigModal:h},setup(){const[o,{openModal:t}]=_(),[m,{reload:n}]=j({title:"\u5217\u8868",api:C,columns:x,formConfig:{labelWidth:120,schemas:g,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!0,actionColumn:{width:100,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});function u(){t(!0,{isUpdate:!1})}function p(e){t(!0,{record:e,isUpdate:!0})}function a(e){e={pid:e.id},t(!0,{record:e,isUpdate:!0})}function r(e){S([e.id]).then(()=>{n()})}function d(){n()}function l(){n()}return{registerTable:m,registerModal:o,handleCreate:u,handleEdit:p,handleCreateChild:a,handleDelete:r,handleSuccess:l,doSearch:d}}}),M=E(" \u65B0\u589E ");function v(o,t,m,n,u,p){const a=i("a-button"),r=i("TableAction"),d=i("BasicTable"),l=i("SystemConfigModal");return y(),w("div",null,[s(d,{onRegister:o.registerTable},{toolbar:c(()=>[s(a,{type:"primary",onClick:o.handleCreate},{default:c(()=>[M]),_:1},8,["onClick"])]),action:c(({record:e})=>[s(r,{actions:[{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,e)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,e)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),s(l,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var le=B(F,[["render",v]]);export{le as default};