import{_ as e}from"./TableImg.8375efce.js";import{f as o}from"./BasicForm.d46fdf93.js";import{u as t}from"./useTable.035abbde.js";import{b as n,d as a,p as i,c as s}from"./modelInfo.b7e1bfc8.js";import{_ as r}from"./PageWrapper.fad7568d.js";import l from"./FlowCategoryTree.23aed651.js";import{b as d}from"./useModal.8b30048f.js";import{_ as c,c as p,s as m}from"./ModelInfoModal.e2e9737e.js";import f from"./index.1084d4c1.js";import{k as u,bp as b,ca as g,aw as j,b2 as h,bW as x,r as w,J as X,u as y,l as C,m as S,K as M,ar as v,w as T,o as I,n as B,q as P,x as R,Y as _}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              *//* empty css              */import{a as F}from"./app.c0d4f7cb.js";import{s as A,g as k}from"./index.10276049.js";import{_ as W}from"./Authority.vue_vue&type=script&lang.124668b3.js";/* empty css              *//* empty css              */import"./useForm.02d3ecdf.js";/* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.477f53a7.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.22be6abe.js";/* empty css              *//* empty css              */import"./download.ec87ce83.js";import"./StrengthMeter.a88f057e.js";import"./usePageContext.d3e060c8.js";/* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.3cec66ad.js";import"./useContextMenu.7703cf03.js";import"./category.f561ac06.js";/* empty css              *//* empty css              */import"./index.f13db4a3.js";import"./index.esm.01aeab01.js";const{createMessage:O}=k();var D=u({name:"Bpmn",components:{BasicTable:e,PageWrapper:r,FlowCategoryTree:l,ModelInfoModal:c,TableAction:o,Avatar:b,Badge:g,Popconfirm:j,Tag:h,DeleteOutlined:x,Authority:W,BpmnPreviewModal:f},setup(){const e=A(),[o,{openModal:r}]=d(),[l,{openModal:c,setModalProps:f}]=d();w({});const u=w({}),b=w(!1),[g,{getForm:j,reload:h}]=t({title:"列表",api:n,columns:p,formConfig:{labelWidth:120,schemas:m,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},searchInfo:{flowableModelType:0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,actionColumn:{width:210,align:"left",title:"操作",dataIndex:"action",slots:{customRender:"action"}}});function x(e){c(!0,{modelKey:e.modelKey,isUpdate:!0}),f({title:`预览-${e.name}`,bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"关闭"})}function C(e){r(!0,{record:e,isUpdate:!0})}function S(e){a([e.id]).then((e=>{h()}))}function M(e){b.value=!0,i(e.modelId).then((e=>{h(),O.success("发布成功！",2)})).finally((()=>{b.value=!1}))}function v(e){b.value=!0,s(e.modelId).then((e=>{h()})).finally((()=>{b.value=!1}))}return X((()=>{const{updateSchema:e}=j();F().then((o=>{e([{field:"appSn",componentProps:{options:o,labelField:"id"}}])}))})),{loadingRef:b,registerTable:g,registerBpmnPreviewModal:l,registerModal:o,handlePublish:M,handleStop:v,createActions:function(e,o){const{status:t}=e;return[{icon:"ant-design:eye",title:"预览",label:"",onClick:x.bind(null,e)},{icon:"ant-design:play-circle-filled",title:"发布",label:"",popConfirm:{title:"确认发布吗?",confirm:M.bind(null,e)},ifShow:2===t},{icon:"ant-design:stop-twotone",title:"停用",label:"",popConfirm:{title:"确认停用吗?",confirm:v.bind(null,e)},ifShow:3===t||2===t},{icon:"clarity:note-edit-line",title:"修改",label:"",onClick:C.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",title:"删除",label:"",popConfirm:{title:"是否确认删除",confirm:S.bind(null,e)}}]},handleCreate:function(){y(u).code?r(!0,{record:{categoryCode:y(u).code},isUpdate:!0}):O.warning("请选择分类！",2)},handleEdit:C,cancelDeleteRole:function(){},handleDelete:S,handleSuccess:function(){h()},openTab:function(){e("/flowable/bpmn/designer?modelId=XXXXXXXXXXXXXXXXXXXXXXXX")},handleSelect:function(e){u.value=e;let o={categoryCode:e?e.code:""};h({searchInfo:o})}}}});const E=R();C("data-v-df4a0f1a");const K=_(" 新增 ");S();const U=E(((e,o,t,n,a,i)=>{const s=M("FlowCategoryTree"),r=M("a-button"),l=M("TableAction"),d=M("BasicTable"),c=M("ModelInfoModal"),p=M("BpmnPreviewModal"),m=M("PageWrapper"),f=v("loading");return T((I(),B(m,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:E((()=>[P(s,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),P(d,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:E((()=>[P(r,{type:"primary",onClick:e.handleCreate},{default:E((()=>[K])),_:1},8,["onClick"])])),action:E((({record:o,column:t})=>[P(l,{actions:e.createActions(o,t)},null,8,["actions"])])),_:1},8,["onRegister"]),P(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),P(p,{onRegister:e.registerBpmnPreviewModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1},512)),[[f,e.loadingRef]])}));D.render=U,D.__scopeId="data-v-df4a0f1a";export default D;