import{B as D}from"./TableImg.8ad498cd.js";import{l as T}from"./BasicForm.027cbf67.js";import{u as y}from"./useTable.7536e350.js";import{g as b,d as g}from"./dept.ee76c2af.js";import{P as _}from"./index.c79f76d5.js";import w from"./DictTypeTree.c947ef83.js";import B from"./DictionaryTable.78bcd658.js";import C from"./DictionaryItemTable.7b6fc8ae.js";import{az as S,a as x,x as f,aB as i,i as F,l as v,C as I,q as c,H as R}from"./index.e61ad282.js";import{b as M}from"./index.a492e5cd.js";import{k as H,l as P}from"./dictionary.ae0290c0.js";import"./index.ce1ab63a.js";import"./Checkbox.bb68ead3.js";import"./index.99ef178c.js";import"./index.d92fc3ac.js";import"./eagerComputed.d3c262c3.js";import"./useForm.81406efc.js";import"./index.8f86dec4.js";import"./index.9f299dd3.js";import"./index.6e0a0264.js";import"./uuid.2b29000c.js";import"./index.6749d186.js";import"./_baseIteratee.7ece590b.js";import"./get.bca7403a.js";import"./DeleteOutlined.3b47e95d.js";import"./index.114515de.js";import"./useRefs.0c428178.js";import"./Form.8b25370b.js";import"./Col.f72eb8d0.js";import"./useFlexGapSupport.ed2a5fc1.js";import"./useSize.5a37866d.js";import"./useWindowSizeFn.27de1b1b.js";import"./index.9f50e000.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.5bbc1139.js";import"./FullscreenOutlined.3a424424.js";import"./index.e8295ad9.js";import"./fromPairs.84aabb58.js";import"./scrollTo.e9bc7999.js";import"./index.ba1457ae.js";/* empty css              *//* empty css               */import"./index.9233793b.js";import"./transButton.2c723edc.js";import"./index.8ba0bfed.js";import"./index.dbdde179.js";import"./download.810571da.js";import"./base64Conver.08b9f4ec.js";import"./index.ebd81f61.js";import"./index.6d7de824.js";import"./uniqBy.8c214189.js";import"./index.769e0bcb.js";import"./index.f6c9d1b9.js";import"./useContentViewHeight.34702d2a.js";import"./ArrowLeftOutlined.0e95a5b3.js";import"./index.5621adef.js";import"./index.0ba11515.js";import"./useContextMenu.87346ca1.js";import"./dicType.d4a63538.js";import"./DictionaryModal.5bb172e9.js";import"./constantEnum.bf6653fb.js";import"./DictionaryItemModal.1d2fb5d2.js";const{createMessage:W}=R(),$=x({components:{BasicTable:D,PageWrapper:_,DictTypeTree:w,DictionaryTable:B,DictionaryItemTable:C,TableAction:T},setup(){const[o,{openModal:a}]=M(),r=f(),e=f(),[u,{reload:n}]=y({title:"\u5217\u8868",api:b,columns:H,formConfig:{labelWidth:120,schemas:P,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,pagination:!1,actionColumn:{width:150,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});function m(){a(!0,{isUpdate:!1})}function p(t){a(!0,{record:t,isUpdate:!0})}function l(t){if(t.children&&t.children.length>0){W.warning("\u6709\u5B50\u8282\u70B9\uFF0C\u4E0D\u80FD\u5220\u9664\uFF01");return}g([t.id]).then(()=>{n()})}function s(){n()}function d(t=""){t?(r.value.filterByDictType(t),e.value.cleanTableData()):r.value.cleanTableData()}function h(t){t?e.value.filterByDict(t):e.value.cleanTableData()}return{dictionaryRef:r,dictionaryItemRef:e,registerTable:u,registerModal:o,handleCreate:m,handleEdit:p,handleDictSelect:h,handleDelete:l,handleSuccess:s,handleDictTypeSelect:d}}});function k(o,a,r,e,u,n){const m=i("DictTypeTree"),p=i("DictionaryTable"),l=i("DictionaryItemTable"),s=i("PageWrapper");return F(),v(s,{dense:"",contentFullHeight:"",contentClass:"flex",class:"p-4"},{default:I(()=>[c(m,{class:"w-1/5 xl:w-1/5",onSelect:o.handleDictTypeSelect},null,8,["onSelect"]),c(p,{ref:"dictionaryRef",onHandleSelect:o.handleDictSelect,class:"w-2/5 xl:w-2/5 ml-2 mr-2"},null,8,["onHandleSelect"]),c(l,{ref:"dictionaryItemRef",class:"w-2/5 xl:w-2/5"},null,512)]),_:1})}var jt=S($,[["render",k]]);export{jt as default};
