import{_ as e}from"./TableImg.c9ed598a.js";import{g as o}from"./BasicForm.ae4250e1.js";import{u as i}from"./useTable.26f8956b.js";import{c as t}from"./system.d1d684a8.js";import{u as r}from"./index.5f372b37.js";import{_ as n,c as s,s as a}from"./RoleDrawer.bb5f4767.js";import{z as d,Z as c,D as l,F as m,w as p,a3 as f,a9 as u}from"./vendor.11d66826.js";/* empty css              *//* empty css              */import"./useForm.213a5276.js";import"./index.514e05b1.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.9fecf134.js";import"./index.5b995397.js";import"./onMountedOrActivated.17f3c81d.js";/* empty css              */import"./useSortable.6a86578b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.6b57f630.js";/* empty css              *//* empty css              *//* empty css              */import"./download.0adfd0af.js";import"./base64Conver.bb012c73.js";import"./index.ceaa815e.js";/* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.4dde5251.js";import"./useContextMenu.cc93e9bb.js";var b=d({name:"RoleManagement",components:{BasicTable:e,RoleDrawer:n,TableAction:o},setup(){const[e,{openDrawer:o}]=r(),[n,{reload:d}]=i({title:"角色列表",api:t,columns:s,formConfig:{labelWidth:120,schemas:a},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:n,registerDrawer:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){d()}}}});const j=u(" 新增角色 ");b.render=function(e,o,i,t,r,n){const s=c("a-button"),a=c("TableAction"),d=c("BasicTable"),u=c("RoleDrawer");return l(),m("div",null,[p(d,{onRegister:e.registerTable},{toolbar:f((()=>[p(s,{type:"primary",onClick:e.handleCreate},{default:f((()=>[j])),_:1},8,["onClick"])])),action:f((({record:o})=>[p(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),p(u,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default b;