import{B as l}from"./TableImg.b1df3b1e.js";import"./BasicForm.e5f615e6.js";import{u as n}from"./useTable.5fdb73d4.js";import{getBasicColumns as c,getTreeTableData as d}from"./tableData.38d0f3c2.js";import{az as C,a as _,aB as a,o as b,i as f,p as t,B as r,C as s}from"./index.e1964776.js";import"./index.25019af6.js";import"./Checkbox.e5f92db0.js";import"./index.3a164815.js";import"./index.b3d10dbf.js";import"./eagerComputed.83fd49b0.js";import"./useForm.0cbae54a.js";import"./index.7347be3d.js";import"./index.59303775.js";import"./index.e2fe3f97.js";import"./useSize.5fbb5cc9.js";import"./useWindowSizeFn.a30c5409.js";import"./useContentViewHeight.f1248c0f.js";import"./ArrowLeftOutlined.093ec11d.js";import"./index.32320e40.js";import"./transButton.2db6a2b1.js";import"./index.99ffc75a.js";import"./index.c8515968.js";import"./index.1b277829.js";import"./uuid.2b29000c.js";import"./index.fc9b4c53.js";import"./_baseIteratee.ad9ab737.js";import"./get.6b7894e0.js";import"./DeleteOutlined.5791f905.js";import"./index.c908afe0.js";import"./useRefs.766f225b.js";import"./Form.e643baa9.js";import"./Col.e011966c.js";import"./useFlexGapSupport.5550da35.js";import"./index.88470e0c.js";import"./FullscreenOutlined.449a4f2d.js";import"./index.41617e4d.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.d4489345.js";import"./index.657a2808.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.23acaebd.js";import"./index.2d431917.js";/* empty css              *//* empty css               */import"./index.db622673.js";import"./index.8373f7dc.js";import"./index.27e2f730.js";import"./download.6d3644ac.js";import"./base64Conver.08b9f4ec.js";import"./index.bc6756fd.js";import"./index.ec5c8d0f.js";import"./uniqBy.fd3e0b27.js";const T=_({components:{BasicTable:l},setup(){const[o,{expandAll:e,collapseAll:i}]=n({title:"\u6811\u5F62\u8868\u683C",isTreeTable:!0,rowSelection:{type:"checkbox",getCheckboxProps(p){return p.id==="0"?{disabled:!0}:{disabled:!1}}},titleHelpMessage:"\u6811\u5F62\u7EC4\u4EF6\u4E0D\u80FD\u548C\u5E8F\u5217\u53F7\u5217\u540C\u65F6\u5B58\u5728",columns:c(),dataSource:d(),rowKey:"id"});return{register:o,expandAll:e,collapseAll:i}}}),B={class:"p-4"};function g(o,e,i,p,k,E){const m=a("a-button"),u=a("BasicTable");return b(),f("div",B,[t(u,{onRegister:o.register},{toolbar:r(()=>[t(m,{type:"primary",onClick:o.expandAll},{default:r(()=>[s("\u5C55\u5F00\u5168\u90E8")]),_:1},8,["onClick"]),t(m,{type:"primary",onClick:o.collapseAll},{default:r(()=>[s("\u6298\u53E0\u5168\u90E8")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])])}var Eo=C(T,[["render",g]]);export{Eo as default};
