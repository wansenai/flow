import{_ as e}from"./TableImg.7eb6c017.js";import{f as o}from"./BasicForm.86cd97da.js";import{u as t}from"./useTable.5323312b.js";import{_ as n,g as i,c as a,s,d as r}from"./SystemConfigModal.0533d98b.js";import{b as d}from"./useModal.b44b8cab.js";import{k as c,K as l,o as m,n as u,q as p,Q as f,Y as b}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.87ab8aa1.js";import"./index.33a0330f.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.a66d7f9a.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0bc8da65.js";/* empty css              *//* empty css              */import"./download.5032960b.js";import"./StrengthMeter.ae9219d5.js";var j=c({name:"SystemConfig",components:{BasicTable:e,TableAction:o,SystemConfigModal:n},setup(){const[e,{openModal:o}]=d(),[n,{reload:c}]=t({title:"列表",api:i,columns:a,formConfig:{labelWidth:120,schemas:s,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!0,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:n,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e){e={pid:e.id},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){r([e.id]).then((()=>{c()}))},handleSuccess:function(){c()},doSearch:function(){c()}}}});const h=b(" 新增 ");j.render=function(e,o,t,n,i,a){const s=l("a-button"),r=l("TableAction"),d=l("BasicTable"),c=l("SystemConfigModal");return m(),u("div",null,[p(d,{onRegister:e.registerTable},{toolbar:f((()=>[p(s,{type:"primary",onClick:e.handleCreate},{default:f((()=>[h])),_:1},8,["onClick"])])),action:f((({record:o})=>[p(r,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),p(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default j;
