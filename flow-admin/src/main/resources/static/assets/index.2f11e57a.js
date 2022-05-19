import{B as _}from"./TableImg.513742d5.js";import{T as x}from"./BasicForm.0ba2e15f.js";import{u as T}from"./useTable.6e5baa13.js";import{g as C}from"./system.a847d282.js";import{P as S}from"./index.ea14bdae.js";import F from"./DeptTree.2dbd0e34.js";import{b as w}from"./index.c505e96f.js";import{A as B,c as A,s as D}from"./AccountModal.001ecf4f.js";import{_ as M,r as y}from"./index.e84e956c.js";import{A as I,P as E,a0 as t,B as k,a1 as v,a6 as a,w as s,ae as R}from"./vendor.5879c5ca.js";/* empty css                *//* empty css              */import"./useForm.696aa965.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.2b29000c.js";import"./useWindowSizeFn.6a6adedd.js";/* empty css               */import"./useSortable.a10c06e7.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.8b70aabd.js";/* empty css                *//* empty css                *//* empty css                */import"./download.e6dbd100.js";import"./base64Conver.bb012c73.js";import"./index.e83a4b09.js";/* empty css                *//* empty css                */import"./useContentViewHeight.ccc8749b.js";import"./Tree.vue_vue_type_style_index_0_lang.128b82eb.js";import"./useContextMenu.44cd9a61.js";const P=I({name:"AccountManagement",components:{BasicTable:_,PageWrapper:S,DeptTree:F,AccountModal:B,TableAction:x},setup(){const o=y(),[b,{openModal:i}]=w(),r=E({}),[j,{reload:c,updateTableDataRecord:l}]=T({title:"\u8D26\u53F7\u5217\u8868",api:C,rowKey:"id",columns:A,formConfig:{labelWidth:120,schemas:D,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(e){return console.log("handleSearchInfoFn",e),e},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});function d(){i(!0,{isUpdate:!1})}function u(e){console.log(e),i(!0,{record:e,isUpdate:!0})}function p(e){console.log(e)}function m({isUpdate:e,values:h}){if(e){const g=l(h.id,h);console.log(g)}else c()}function f(e=""){r.deptId=e,c()}function n(e){o("/system/account_detail/"+e.id)}return{registerTable:j,registerModal:b,handleCreate:d,handleEdit:u,handleDelete:p,handleSuccess:m,handleSelect:f,handleView:n,searchInfo:r}}}),V=R("\u65B0\u589E\u8D26\u53F7");function W(o,b,i,r,j,c){const l=t("DeptTree"),d=t("a-button"),u=t("TableAction"),p=t("BasicTable"),m=t("AccountModal"),f=t("PageWrapper");return k(),v(f,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:a(()=>[s(l,{class:"w-1/4 xl:w-1/5",onSelect:o.handleSelect},null,8,["onSelect"]),s(p,{onRegister:o.registerTable,class:"w-3/4 xl:w-4/5",searchInfo:o.searchInfo},{toolbar:a(()=>[s(d,{type:"primary",onClick:o.handleCreate},{default:a(()=>[V]),_:1},8,["onClick"])]),action:a(({record:n})=>[s(u,{actions:[{icon:"clarity:info-standard-line",tooltip:"\u67E5\u770B\u7528\u6237\u8BE6\u60C5",onClick:o.handleView.bind(null,n)},{icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91\u7528\u6237\u8D44\u6599",onClick:o.handleEdit.bind(null,n)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"\u5220\u9664\u6B64\u8D26\u53F7",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,n)}}]},null,8,["actions"])]),_:1},8,["onRegister","searchInfo"]),s(m,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var Te=M(P,[["render",W]]);export{Te as default};