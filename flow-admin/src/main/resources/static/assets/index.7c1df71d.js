import{B as M}from"./TableImg.6b85bf08.js";import{l as S}from"./BasicForm.d8aa86d3.js";import{u as D}from"./useTable.60e7369f.js";import{b as E,d as T,p as A,c as k}from"./modelInfo.d01b2d1f.js";import{P as R}from"./index.4dfdb4ab.js";import $ from"./FlowCategoryTree.76d0e156.js";import{b}from"./index.4ff668bf.js";import{M as W,c as z,s as H}from"./ModelInfoModal.dbc02515.js";import O from"./index.e5350d71.js";import{az as U,a as K,fD as G,b0 as L,x as s,an as N,aB as V,bT as j,z as q,i as J,l as Q,C as Y,k as B,fk as Z,fl as ee,H as te,p as oe}from"./index.ef013507.js";import{T as ie}from"./index.0b0495b0.js";import{A as ne}from"./index.0210df95.js";import{B as re}from"./index.eaeab232.js";import{a as ae}from"./app.cfa1de76.js";import{A as le}from"./index.6208cf3a.js";import{D as se}from"./DeleteOutlined.fda42126.js";import"./index.64234a26.js";import"./Checkbox.d561740d.js";import"./index.d845ac75.js";import"./index.4dfcf0e9.js";import"./eagerComputed.487f958f.js";import"./useForm.d7bb3373.js";import"./index.4822de2c.js";import"./index.7f88299e.js";import"./uuid.2b29000c.js";import"./index.ac5849f2.js";import"./_baseIteratee.39b06e56.js";import"./get.fbc063d7.js";import"./index.7e4b5f10.js";import"./useRefs.5ed2b70f.js";import"./Form.36fbea16.js";import"./Col.55ed0272.js";import"./useFlexGapSupport.e51c8524.js";import"./useSize.55446702.js";import"./useWindowSizeFn.37be93ea.js";import"./index.8a7cb11f.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.01e40c90.js";import"./FullscreenOutlined.d97e6502.js";import"./index.27c2d820.js";import"./fromPairs.84aabb58.js";import"./scrollTo.f0dd617b.js";/* empty css              *//* empty css               */import"./index.0e08ed6e.js";import"./transButton.750f7635.js";import"./index.edd8ff4a.js";import"./index.0bfe1343.js";import"./download.c25570af.js";import"./base64Conver.08b9f4ec.js";import"./index.30e1f68c.js";import"./index.4e2ec58e.js";import"./uniqBy.4bac5850.js";import"./index.1eabbb9a.js";import"./useContentViewHeight.d02bb685.js";import"./ArrowLeftOutlined.5616a4a1.js";import"./index.412dcca9.js";import"./index.154de31a.js";import"./useContextMenu.eed63f27.js";import"./category.2f13f220.js";import"./index.b8eef46c.js";import"./throttleByAnimationFrame.6373151a.js";import"./index.9f038960.js";import"./index.esm.01aeab01.js";const{createMessage:C}=te(),pe=K({name:"Bpmn",components:{BasicTable:M,PageWrapper:R,FlowCategoryTree:$,ModelInfoModal:W,TableAction:S,Avatar:ne,Badge:re,Popconfirm:G,Tag:ie,DeleteOutlined:se,Authority:le,BpmnPreviewModal:O},setup(){const t=L(),[p,{openModal:a}]=b(),[m,{openModal:u,setModalProps:c}]=b();s({});const n=s({}),o=s(!1),[_,{getForm:v,reload:r}]=D({title:"\u5217\u8868",api:E,columns:z,formConfig:{labelWidth:120,schemas:H,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},searchInfo:{modelType:0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,actionColumn:{width:210,align:"left",title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});N(()=>{const{updateSchema:e}=v();ae().then(i=>{e([{field:"appSn",componentProps:{options:i,labelField:"id"}}])})});function X(){if(!B(n).code){C.warning("\u8BF7\u9009\u62E9\u5206\u7C7B\uFF01",2);return}a(!0,{record:{categoryCode:B(n).code},isUpdate:!0})}function w(e,i){const{status:l}=e;return[{icon:"ant-design:eye",title:"\u9884\u89C8",label:"",onClick:F.bind(null,e)},{icon:"ant-design:play-circle-filled",title:"\u53D1\u5E03",label:"",popConfirm:{title:"\u786E\u8BA4\u53D1\u5E03\u5417?",confirm:h.bind(null,e),placement:"left"},ifShow:l===2},{icon:"ant-design:stop-twotone",title:"\u505C\u7528",label:"",popConfirm:{title:"\u786E\u8BA4\u505C\u7528\u5417?",confirm:g.bind(null,e),placement:"left"},ifShow:l===3||l===2},{icon:"clarity:note-edit-line",title:"\u4FEE\u6539",label:"",onClick:d.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",title:"\u5220\u9664",label:"",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:f.bind(null,e),placement:"left"}}]}function F(e){u(!0,{modelKey:e.modelKey,isUpdate:!0}),c({title:`\u9884\u89C8-${e.name}`,bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"\u5173\u95ED"})}function d(e){a(!0,{record:e,isUpdate:!0})}function y(){t("/flowable/bpmn/designer?modelId=XXXXXXXXXXXXXXXXXXXXXXXX")}function f(e){T([e.id]).then(i=>{r()})}function h(e){o.value=!0,A(e.modelId).then(i=>{r(),C.success("\u53D1\u5E03\u6210\u529F\uFF01",2)}).finally(()=>{o.value=!1})}function g(e){o.value=!0,k(e.modelId).then(i=>{r()}).finally(()=>{o.value=!1})}function x(){r()}function P(){}function I(e){n.value=e;let i={categoryCode:e?e.code:""};r({searchInfo:i})}return{loadingRef:o,registerTable:_,registerBpmnPreviewModal:m,registerModal:p,handlePublish:h,handleStop:g,createActions:w,handleCreate:X,handleEdit:d,cancelDeleteRole:P,handleDelete:f,handleSuccess:x,openTab:y,handleSelect:I}}}),me=t=>(Z("data-v-17001607"),t=t(),ee(),t),ue=me(()=>oe("div",{style:{"font-size":"30px",padding:"100px",color:"#aaa","text-align":"center"}}," \u656C\u8BF7\u671F\u5F85\uFF01 ",-1));function ce(t,p,a,m,u,c){const n=V("PageWrapper"),o=j("loading");return q((J(),Q(n,{dense:"",contentFullHeight:"",fixedHeight:""},{default:Y(()=>[ue]),_:1})),[[o,t.loadingRef]])}var Ft=U(pe,[["render",ce],["__scopeId","data-v-17001607"]]);export{Ft as default};
