import{_ as e}from"./TableImg.5453971a.js";import"./BasicForm.f252c294.js";import{u as s}from"./useTable.da9f7dda.js";import{getBasicColumns as o}from"./tableData.83d6955e.js";import{d as r}from"./table.6b4349a4.js";import{k as i,K as t,o as a,n as d,q as n,Q as m,s as p}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.7c89f4ac.js";import"./index.6992208b.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./useModal.11986c6c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.e73ef165.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.14e97884.js";/* empty css              *//* empty css              */import"./download.f95f58dd.js";import"./StrengthMeter.505415db.js";var c=i({components:{BasicTable:e},setup(){const[e]=s({title:"可展开表格",api:r,titleHelpMessage:"不能与scroll共用",columns:o(),rowKey:"id",canResize:!1});return{registerTable:e}}});const j={class:"p-4"};c.render=function(e,s,o,r,i,c){const f=t("BasicTable");return a(),d("div",j,[n(f,{onRegister:e.registerTable},{expandedRowRender:m((({record:e})=>[n("span",null,"No: "+p(e.no),1)])),_:1},8,["onRegister"])])};export default c;
