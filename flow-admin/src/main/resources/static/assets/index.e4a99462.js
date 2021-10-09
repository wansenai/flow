import{_ as e}from"./TableImg.c9ed598a.js";import{g as o}from"./BasicForm.ae4250e1.js";import{u as n}from"./useTable.26f8956b.js";import{b as t,d as i,p as a,c as s}from"./modelInfo.9e72d062.js";import{P as r}from"./index.1d9afa2c.js";import d from"./FlowCategoryTree.8cebafd7.js";import{b as l}from"./index.5b995397.js";import{_ as c,c as m,s as p}from"./ModelInfoModal.6a3b547e.js";import f from"./index.17ee6b05.js";import{z as u,bs as b,bW as j,az as g,b4 as h,c0 as x,r as w,Y as X,u as C,A as y,B as S,Z as v,au as M,G as T,D as B,F as I,w as F,K as P,a9 as R}from"./vendor.11d66826.js";/* empty css              *//* empty css              *//* empty css              */import{a as A}from"./app.ea9c5bd1.js";import{r as _,h as k}from"./index.514e05b1.js";import{A as W}from"./index.89e0d22c.js";/* empty css              *//* empty css              */import"./useForm.213a5276.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.9fecf134.js";import"./onMountedOrActivated.17f3c81d.js";/* empty css              */import"./useSortable.6a86578b.js";/* empty css              *//* empty css              *//* empty css              */import"./index.6b57f630.js";/* empty css              *//* empty css              *//* empty css              */import"./download.0adfd0af.js";import"./base64Conver.bb012c73.js";import"./index.ceaa815e.js";/* empty css              */import"./useContentViewHeight.b2883a86.js";import"./Tree.vue_vue&type=style&index=0&lang.4dde5251.js";import"./useContextMenu.cc93e9bb.js";import"./category.57166445.js";/* empty css              *//* empty css              */import"./index.50dfe382.js";import"./index.esm.01aeab01.js";const{createMessage:D}=k();var O=u({name:"Bpmn",components:{BasicTable:e,PageWrapper:r,FlowCategoryTree:d,ModelInfoModal:c,TableAction:o,Avatar:b,Badge:j,Popconfirm:g,Tag:h,DeleteOutlined:x,Authority:W,BpmnPreviewModal:f},setup(){const e=_(),[o,{openModal:r}]=l(),[d,{openModal:c,setModalProps:f}]=l();w({});const u=w({}),b=w(!1),[j,{getForm:g,reload:h}]=n({title:"列表",api:t,columns:m,formConfig:{labelWidth:120,schemas:p,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},searchInfo:{modelType:0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,actionColumn:{width:210,align:"left",title:"操作",dataIndex:"action",slots:{customRender:"action"}}});function x(e){c(!0,{modelKey:e.modelKey,isUpdate:!0}),f({title:`预览-${e.name}`,bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"关闭"})}function y(e){r(!0,{record:e,isUpdate:!0})}function S(e){i([e.id]).then((e=>{h()}))}function v(e){b.value=!0,a(e.modelId).then((e=>{h(),D.success("发布成功！",2)})).finally((()=>{b.value=!1}))}function M(e){b.value=!0,s(e.modelId).then((e=>{h()})).finally((()=>{b.value=!1}))}return X((()=>{const{updateSchema:e}=g();A().then((o=>{e([{field:"appSn",componentProps:{options:o,labelField:"id"}}])}))})),{loadingRef:b,registerTable:j,registerBpmnPreviewModal:d,registerModal:o,handlePublish:v,handleStop:M,createActions:function(e,o){const{status:n}=e;return[{icon:"ant-design:eye",tooltip:"流程图预览",label:"",onClick:x.bind(null,e)},{icon:"ant-design:play-circle-filled",tooltip:"发布",label:"",popConfirm:{title:"确认发布吗?",confirm:v.bind(null,e)},ifShow:2===n},{icon:"ant-design:stop-twotone",tooltip:"停用",label:"",popConfirm:{title:"确认停用吗?",confirm:M.bind(null,e)},ifShow:3===n||2===n},{icon:"clarity:note-edit-line",tooltip:"修改",label:"",onClick:y.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"删除",label:"",popConfirm:{title:"是否确认删除",confirm:S.bind(null,e)}}]},handleCreate:function(){C(u).code?r(!0,{record:{categoryCode:C(u).code},isUpdate:!0}):D.warning("请选择分类！",2)},handleEdit:y,cancelDeleteRole:function(){},handleDelete:S,handleSuccess:function(){h()},openTab:function(){e("/flowable/bpmn/designer?modelId=XXXXXXXXXXXXXXXXXXXXXXXX")},handleSelect:function(e){u.value=e;let o={categoryCode:e?e.code:""};h({searchInfo:o})}}}});const z=P();y("data-v-cd2ca054");const H=R(" 新增 ");S();const K=z(((e,o,n,t,i,a)=>{const s=v("FlowCategoryTree"),r=v("a-button"),d=v("TableAction"),l=v("BasicTable"),c=v("ModelInfoModal"),m=v("BpmnPreviewModal"),p=v("PageWrapper"),f=M("loading");return T((B(),I(p,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:z((()=>[F(s,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),F(l,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:z((()=>[F(r,{type:"primary",onClick:e.handleCreate},{default:z((()=>[H])),_:1},8,["onClick"])])),action:z((({record:o,column:n})=>[F(d,{actions:e.createActions(o,n)},null,8,["actions"])])),_:1},8,["onRegister"]),F(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),F(m,{onRegister:e.registerBpmnPreviewModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1},512)),[[f,e.loadingRef]])}));O.render=K,O.__scopeId="data-v-cd2ca054";export default O;
