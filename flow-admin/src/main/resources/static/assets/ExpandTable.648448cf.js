import{_ as e}from"./TableImg.375209e8.js";import"./BasicForm.de2d0bb0.js";import{u as s}from"./useTable.5c7aa523.js";import{getBasicColumns as o}from"./tableData.83d6955e.js";import{d as r}from"./table.c49c76c7.js";import{k as i,K as t,o as a,n as d,q as n,Q as m,s as p}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.906ec90d.js";import"./index.1f477f84.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./useModal.0a504584.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.55e358dc.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.ed12ce5f.js";/* empty css              *//* empty css              */import"./download.d21b7c84.js";import"./StrengthMeter.f927a9c9.js";var c=i({components:{BasicTable:e},setup(){const[e]=s({title:"可展开表格",api:r,titleHelpMessage:"不能与scroll共用",columns:o(),rowKey:"id",canResize:!1});return{registerTable:e}}});const j={class:"p-4"};c.render=function(e,s,o,r,i,c){const b=t("BasicTable");return a(),d("div",j,[n(b,{onRegister:e.registerTable},{expandedRowRender:m((({record:e})=>[n("span",null,"No: "+p(e.no),1)])),_:1},8,["onRegister"])])};export default c;
