import{B as d}from"./TableImg.8ad498cd.js";import"./BasicForm.027cbf67.js";import{u as F}from"./useTable.7536e350.js";import{getBasicColumns as h,getFormConfig as _}from"./tableData.38d0f3c2.js";import{az as k,a as B,x as C,aB as m,i as p,l as b,C as t,D as s,q as a,j as c,G as y,p as E,t as T}from"./index.e61ad282.js";import{A}from"./index.dbdde179.js";import{d as D}from"./table.e3fea2b5.js";import"./index.ce1ab63a.js";import"./Checkbox.bb68ead3.js";import"./index.99ef178c.js";import"./index.d92fc3ac.js";import"./eagerComputed.d3c262c3.js";import"./useForm.81406efc.js";import"./index.c79f76d5.js";import"./index.769e0bcb.js";import"./index.f6c9d1b9.js";import"./useSize.5a37866d.js";import"./useWindowSizeFn.27de1b1b.js";import"./useContentViewHeight.34702d2a.js";import"./ArrowLeftOutlined.0e95a5b3.js";import"./index.5621adef.js";import"./transButton.2c723edc.js";import"./index.8f86dec4.js";import"./index.9f299dd3.js";import"./index.6e0a0264.js";import"./uuid.2b29000c.js";import"./index.6749d186.js";import"./_baseIteratee.7ece590b.js";import"./get.bca7403a.js";import"./DeleteOutlined.3b47e95d.js";import"./index.114515de.js";import"./useRefs.0c428178.js";import"./Form.8b25370b.js";import"./Col.f72eb8d0.js";import"./useFlexGapSupport.ed2a5fc1.js";import"./index.a492e5cd.js";import"./FullscreenOutlined.3a424424.js";import"./index.9f50e000.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.5bbc1139.js";import"./index.e8295ad9.js";import"./fromPairs.84aabb58.js";import"./scrollTo.e9bc7999.js";import"./index.ba1457ae.js";/* empty css              *//* empty css               */import"./index.9233793b.js";import"./index.8ba0bfed.js";import"./download.810571da.js";import"./base64Conver.08b9f4ec.js";import"./index.ebd81f61.js";import"./index.6d7de824.js";import"./uniqBy.8c214189.js";const S=B({components:{BasicTable:d,AAlert:A},setup(){const o=C([]),[e,{getForm:n}]=F({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:D,columns:h(),useSearchForm:!0,formConfig:_(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id",rowSelection:{type:"checkbox",selectedRowKeys:o,onChange:r}});function u(){n().getFieldsValue()}function r(i){o.value=i}return{registerTable:e,getFormValues:u,checkedKeys:o,onSelectChange:r}}}),w={key:1};function V(o,e,n,u,r,i){const l=m("a-button"),f=m("a-alert"),g=m("BasicTable");return p(),b(g,{onRegister:o.registerTable},{"form-custom":t(()=>[s(" custom-slot ")]),headerTop:t(()=>[a(f,{type:"info","show-icon":""},{message:t(()=>[o.checkedKeys.length>0?(p(),c(y,{key:0},[E("span",null,"\u5DF2\u9009\u4E2D"+T(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),a(l,{type:"link",onClick:e[0]||(e[0]=K=>o.checkedKeys=[]),size:"small"},{default:t(()=>[s("\u6E05\u7A7A")]),_:1})],64)):(p(),c("span",w,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:t(()=>[a(l,{type:"primary",onClick:o.getFormValues},{default:t(()=>[s("\u83B7\u53D6\u8868\u5355\u6570\u636E")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}var $o=k(S,[["render",V]]);export{$o as default};
