import{_ as e}from"./TableImg.c2ee46d9.js";import{f as o}from"./BasicForm.524807c9.js";import{u as t}from"./useTable.6e49eb25.js";import{_ as n,g as i,c as a,s,d as r}from"./SystemConfigModal.2779742d.js";import{b as d}from"./useModal.c77d4797.js";import{k as c,K as l,o as m,n as u,q as f,Q as p,Y as b}from"./vendor.d159a66e.js";/* empty css              *//* empty css              */import"./useForm.42988639.js";import"./index.efe55fc0.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.aa1e233c.js";import"./onMountedOrActivated.40a48c91.js";/* empty css              */import"./useSortable.cbdef1fa.js";import"./useExpose.0ecfeadd.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.a65a0b71.js";/* empty css              *//* empty css              */import"./download.6f1d4bdf.js";import"./StrengthMeter.5a4aeb4a.js";var j=c({name:"SystemConfig",components:{BasicTable:e,TableAction:o,SystemConfigModal:n},setup(){const[e,{openModal:o}]=d(),[n,{reload:c}]=t({title:"列表",api:i,columns:a,formConfig:{labelWidth:120,schemas:s,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!0,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:n,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e){e={pid:e.id},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){r([e.id]).then((()=>{c()}))},handleSuccess:function(){c()},doSearch:function(){c()}}}});const h=b(" 新增 ");j.render=function(e,o,t,n,i,a){const s=l("a-button"),r=l("TableAction"),d=l("BasicTable"),c=l("SystemConfigModal");return m(),u("div",null,[f(d,{onRegister:e.registerTable},{toolbar:p((()=>[f(s,{type:"primary",onClick:e.handleCreate},{default:p((()=>[h])),_:1},8,["onClick"])])),action:p((({record:o})=>[f(r,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),f(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default j;
