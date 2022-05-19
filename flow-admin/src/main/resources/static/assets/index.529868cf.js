import{B as M}from"./TableImg.513742d5.js";import{T as S}from"./BasicForm.0ba2e15f.js";import{u as P}from"./useTable.6e5baa13.js";import{b as T,d as E,p as A,c as D}from"./modelInfo.0ee666a4.js";import{P as k}from"./index.ea14bdae.js";import $ from"./FlowCategoryTree.cf4b4feb.js";import{b as h}from"./index.c505e96f.js";import{M as R,c as W,s as H}from"./ModelInfoModal.b7e076d4.js";import O from"./index.cc463aeb.js";import{A as U,bA as z,c2 as K,aE as L,ba as N,c8 as V,r as d,$ as G,a0 as q,bo as J,F as Q,B as Y,a1 as Z,a6 as ee,u as j,L as te,N as oe,H as ne}from"./vendor.5879c5ca.js";/* empty css               *//* empty css                *//* empty css                */import{a as ae}from"./app.7e52d780.js";import{_ as ie,r as se,h as re}from"./index.e84e956c.js";import{A as de}from"./index.7819e97f.js";/* empty css                *//* empty css              */import"./useForm.696aa965.js";/* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./useWindowSizeFn.6a6adedd.js";/* empty css               */import"./useSortable.a10c06e7.js";/* empty css                *//* empty css               *//* empty css               */import"./index.8b70aabd.js";/* empty css                *//* empty css                *//* empty css                */import"./download.e6dbd100.js";import"./base64Conver.bb012c73.js";import"./index.e83a4b09.js";/* empty css                */import"./useContentViewHeight.ccc8749b.js";import"./Tree.vue_vue_type_style_index_0_lang.128b82eb.js";import"./useContextMenu.44cd9a61.js";import"./category.add32850.js";/* empty css                *//* empty css                */import"./index.33ed2912.js";import"./index.esm.01aeab01.js";const{createMessage:x}=re(),le=U({name:"Bpmn",components:{BasicTable:M,PageWrapper:k,FlowCategoryTree:$,ModelInfoModal:R,TableAction:S,Avatar:z,Badge:K,Popconfirm:L,Tag:N,DeleteOutlined:V,Authority:de,BpmnPreviewModal:O},setup(){const t=se(),[l,{openModal:s}]=h(),[u,{openModal:p,setModalProps:c}]=h();d({});const a=d({}),o=d(!1),[_,{getForm:C,reload:i}]=P({title:"\u5217\u8868",api:T,columns:W,formConfig:{labelWidth:120,schemas:H,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},searchInfo:{modelType:0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,actionColumn:{width:210,align:"left",title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});G(()=>{const{updateSchema:e}=C();ae().then(n=>{e([{field:"appSn",componentProps:{options:n,labelField:"id"}}])})});function v(){if(!j(a).code){x.warning("\u8BF7\u9009\u62E9\u5206\u7C7B\uFF01",2);return}s(!0,{record:{categoryCode:j(a).code},isUpdate:!0})}function B(e,n){const{status:r}=e;return[{icon:"ant-design:eye",title:"\u9884\u89C8",label:"",onClick:w.bind(null,e)},{icon:"ant-design:play-circle-filled",title:"\u53D1\u5E03",label:"",popConfirm:{title:"\u786E\u8BA4\u53D1\u5E03\u5417?",confirm:b.bind(null,e)},ifShow:r===2},{icon:"ant-design:stop-twotone",title:"\u505C\u7528",label:"",popConfirm:{title:"\u786E\u8BA4\u505C\u7528\u5417?",confirm:g.bind(null,e)},ifShow:r===3||r===2},{icon:"clarity:note-edit-line",title:"\u4FEE\u6539",label:"",onClick:m.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",title:"\u5220\u9664",label:"",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:f.bind(null,e)}}]}function w(e){p(!0,{modelKey:e.modelKey,isUpdate:!0}),c({title:`\u9884\u89C8-${e.name}`,bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"\u5173\u95ED"})}function m(e){s(!0,{record:e,isUpdate:!0})}function F(){t("/flowable/bpmn/designer?modelId=XXXXXXXXXXXXXXXXXXXXXXXX")}function f(e){E([e.id]).then(n=>{i()})}function b(e){o.value=!0,A(e.modelId).then(n=>{i(),x.success("\u53D1\u5E03\u6210\u529F\uFF01",2)}).finally(()=>{o.value=!1})}function g(e){o.value=!0,D(e.modelId).then(n=>{i()}).finally(()=>{o.value=!1})}function X(){i()}function y(){}function I(e){a.value=e;let n={categoryCode:e?e.code:""};i({searchInfo:n})}return{loadingRef:o,registerTable:_,registerBpmnPreviewModal:u,registerModal:l,handlePublish:b,handleStop:g,createActions:B,handleCreate:v,handleEdit:m,cancelDeleteRole:y,handleDelete:f,handleSuccess:X,openTab:F,handleSelect:I}}}),ue=t=>(te("data-v-ff135daa"),t=t(),oe(),t),pe=ue(()=>ne("div",{style:{"font-size":"30px",padding:"100px",color:"#aaa","text-align":"center"}}," \u656C\u8BF7\u671F\u5F85\uFF01 ",-1));function ce(t,l,s,u,p,c){const a=q("PageWrapper"),o=J("loading");return Q((Y(),Z(a,{dense:"",contentFullHeight:"",fixedHeight:""},{default:ee(()=>[pe]),_:1},512)),[[o,t.loadingRef]])}var at=ie(le,[["render",ce],["__scopeId","data-v-ff135daa"]]);export{at as default};