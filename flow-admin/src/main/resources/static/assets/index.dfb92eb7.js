import{_ as e}from"./TableImg.840b2332.js";import{f as o}from"./BasicForm.d12ec528.js";import{u as t}from"./useTable.14907d98.js";import{b as n,d as a,p as i,c as s}from"./modelInfo.eeb56967.js";import{_ as r}from"./PageWrapper.0a593267.js";import l from"./FlowCategoryTree.4e051d39.js";import{b as d}from"./useModal.40813107.js";import{_ as c,c as m,s as p}from"./ModelInfoModal.33066020.js";import f from"./index.52c5a588.js";import{k as u,bp as b,ca as g,aw as j,b2 as h,bW as x,r as w,J as X,u as y,l as C,m as S,K as v,ar as M,w as T,o as I,n as B,q as P,x as R,Y as _}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              *//* empty css              */import{a as F}from"./app.18970e79.js";import{s as A,g as k}from"./index.68bdfa67.js";import{_ as W}from"./Authority.vue_vue&type=script&lang.8af3c9b0.js";/* empty css              *//* empty css              */import"./useForm.831c770a.js";/* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.86f4c026.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.69c99d5f.js";/* empty css              *//* empty css              */import"./download.684fb6a2.js";import"./StrengthMeter.e21abcab.js";import"./usePageContext.a9e23595.js";/* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.e79165c2.js";import"./useContextMenu.edb2fdbf.js";import"./category.2fc73b96.js";/* empty css              *//* empty css              */import"./index.5e68b19e.js";import"./index.esm.01aeab01.js";const{createMessage:O}=k();var D=u({name:"Bpmn",components:{BasicTable:e,PageWrapper:r,FlowCategoryTree:l,ModelInfoModal:c,TableAction:o,Avatar:b,Badge:g,Popconfirm:j,Tag:h,DeleteOutlined:x,Authority:W,BpmnPreviewModal:f},setup(){const e=A(),[o,{openModal:r}]=d(),[l,{openModal:c,setModalProps:f}]=d();w({});const u=w({}),b=w(!1),[g,{getForm:j,reload:h}]=t({title:"列表",api:n,columns:m,formConfig:{labelWidth:120,schemas:p,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},searchInfo:{modelType:0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,actionColumn:{width:210,align:"left",title:"操作",dataIndex:"action",slots:{customRender:"action"}}});function x(e){c(!0,{modelKey:e.modelKey,isUpdate:!0}),f({title:`预览-${e.name}`,bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"关闭"})}function C(e){r(!0,{record:e,isUpdate:!0})}function S(e){a([e.id]).then((e=>{h()}))}function v(e){b.value=!0,i(e.modelId).then((e=>{h(),O.success("发布成功！",2)})).finally((()=>{b.value=!1}))}function M(e){b.value=!0,s(e.modelId).then((e=>{h()})).finally((()=>{b.value=!1}))}return X((()=>{const{updateSchema:e}=j();F().then((o=>{e([{field:"appSn",componentProps:{options:o,labelField:"id"}}])}))})),{loadingRef:b,registerTable:g,registerBpmnPreviewModal:l,registerModal:o,handlePublish:v,handleStop:M,createActions:function(e,o){const{status:t}=e;return[{icon:"ant-design:eye",title:"预览",label:"",onClick:x.bind(null,e)},{icon:"ant-design:play-circle-filled",title:"发布",label:"",popConfirm:{title:"确认发布吗?",confirm:v.bind(null,e)},ifShow:2===t},{icon:"ant-design:stop-twotone",title:"停用",label:"",popConfirm:{title:"确认停用吗?",confirm:M.bind(null,e)},ifShow:3===t||2===t},{icon:"clarity:note-edit-line",title:"修改",label:"",onClick:C.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",title:"删除",label:"",popConfirm:{title:"是否确认删除",confirm:S.bind(null,e)}}]},handleCreate:function(){y(u).code?r(!0,{record:{categoryCode:y(u).code},isUpdate:!0}):O.warning("请选择分类！",2)},handleEdit:C,cancelDeleteRole:function(){},handleDelete:S,handleSuccess:function(){h()},openTab:function(){e("/flowable/bpmn/designer?modelId=XXXXXXXXXXXXXXXXXXXXXXXX")},handleSelect:function(e){u.value=e;let o={categoryCode:e?e.code:""};h({searchInfo:o})}}}});const E=R();C("data-v-1636c3ca");const K=_(" 新增 ");S();const U=E(((e,o,t,n,a,i)=>{const s=v("FlowCategoryTree"),r=v("a-button"),l=v("TableAction"),d=v("BasicTable"),c=v("ModelInfoModal"),m=v("BpmnPreviewModal"),p=v("PageWrapper"),f=M("loading");return T((I(),B(p,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:E((()=>[P(s,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),P(d,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:E((()=>[P(r,{type:"primary",onClick:e.handleCreate},{default:E((()=>[K])),_:1},8,["onClick"])])),action:E((({record:o,column:t})=>[P(l,{actions:e.createActions(o,t)},null,8,["actions"])])),_:1},8,["onRegister"]),P(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),P(m,{onRegister:e.registerBpmnPreviewModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1},512)),[[f,e.loadingRef]])}));D.render=U,D.__scopeId="data-v-1636c3ca";export default D;
