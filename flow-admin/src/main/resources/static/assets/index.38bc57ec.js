import{_ as e}from"./TableImg.44575666.js";import{f as o}from"./BasicForm.52dd7a78.js";import{u as t}from"./useTable.9cfd2432.js";import{a as i}from"./system.c335b09c.js";import{b as n}from"./useModal.a73129f6.js";import{_ as s,c as a,s as r}from"./DeptModal.1f4cea98.js";import{k as d,K as c,o as l,n as m,q as p,Q as u,Y as f}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.141421b5.js";import"./index.f72cd585.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.13695b66.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8664b7cc.js";/* empty css              *//* empty css              */import"./download.a0c19fe1.js";import"./StrengthMeter.d8342dd8.js";var b=d({name:"DeptManagement",components:{BasicTable:e,DeptModal:s,TableAction:o},setup(){const[e,{openModal:o}]=n(),[s,{reload:d}]=t({title:"部门列表",api:i,columns:a,formConfig:{labelWidth:120,schemas:r,autoSubmitOnEnter:!0},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:s,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){d()}}}});const j=f(" 新增部门 ");b.render=function(e,o,t,i,n,s){const a=c("a-button"),r=c("TableAction"),d=c("BasicTable"),f=c("DeptModal");return l(),m("div",null,[p(d,{onRegister:e.registerTable},{toolbar:u((()=>[p(a,{type:"primary",onClick:e.handleCreate},{default:u((()=>[j])),_:1},8,["onClick"])])),action:u((({record:o})=>[p(r,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),p(f,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default b;
