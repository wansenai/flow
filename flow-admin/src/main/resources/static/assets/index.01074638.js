import{_ as e}from"./TableImg.840b2332.js";import{f as o}from"./BasicForm.d12ec528.js";import{u as t}from"./useTable.14907d98.js";import{b as i}from"./useModal.40813107.js";import{_ as n,c as a,s as r}from"./JobGradeTypeModal.22914946.js";import{a as s,d}from"./jobGradeType.1c48f182.js";import{k as c,K as l,o as m,n as p,q as u,Q as b,Y as f}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.831c770a.js";import"./index.68bdfa67.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.86f4c026.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.69c99d5f.js";/* empty css              *//* empty css              */import"./download.684fb6a2.js";import"./StrengthMeter.e21abcab.js";var j=c({name:"JobGradeType",components:{BasicTable:e,TableAction:o,JobGradeTypeModal:n},setup(){const[e,{openModal:o}]=i(),[n,{reload:c}]=t({title:"列表",api:s,columns:a,formConfig:{labelWidth:120,schemas:r,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,pagination:!1,showIndexColumn:!1,isTreeTable:!0,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:n,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){d(e.id).then((()=>{c()}))},handleSuccess:function(){c()}}}});const h=f(" 新增 ");j.render=function(e,o,t,i,n,a){const r=l("a-button"),s=l("TableAction"),d=l("BasicTable"),c=l("JobGradeTypeModal");return m(),p("div",null,[u(d,{onRegister:e.registerTable},{toolbar:b((()=>[u(r,{type:"primary",onClick:e.handleCreate},{default:b((()=>[h])),_:1},8,["onClick"])])),action:b((({record:o})=>[u(s,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),u(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default j;
