import{_ as e}from"./TableImg.8ccd808f.js";import{f as o}from"./BasicForm.312985a0.js";import{u as t}from"./useTable.84f74a57.js";import{g as n,d as i}from"./app.e011c3b5.js";import{c as a,s}from"./app.data.002d43de.js";import r from"./AppModal.f3369143.js";import d from"./SecretKeyModal.eb38e8da.js";import{b as c}from"./useModal.9d70781f.js";import{k as l,K as p,o as m,n as u,q as f,Q as b,Y as j}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.a3596aad.js";import"./index.f8d8fadd.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.88a1af21.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.7e403a5b.js";/* empty css              *//* empty css              */import"./download.7c99dac2.js";import"./StrengthMeter.16507ade.js";/* empty css              */var h=l({name:"App",components:{BasicTable:e,TableAction:o,AppModal:r,SecretKeyModal:d},setup(){const[e,{openModal:o}]=c(),[r,{openModal:d,setModalProps:l}]=c(),[p,{reload:m}]=t({title:"列表",api:n,columns:a,formConfig:{labelWidth:100,schemas:s,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!0,actionColumn:{width:140,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:p,registerModal:e,registerSecretKeyModal:r,handleCloseFunc:function(){return m(),Promise.resolve(!0)},handleCreate:function(){o(!0,{isUpdate:!1})},handleEditSecretKey:function(e){d(!0,{record:e,isUpdate:!0}),l({title:`修改【${e.name}】的密钥`,showOkBtn:!1,cancelText:"关闭"})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){i([e.id]).then((()=>{m()}))},handleSuccess:function(){m()},handleUpdateSecretKeySuccess:function(){m()}}}});const S=j(" 新增 ");h.render=function(e,o,t,n,i,a){const s=p("a-button"),r=p("TableAction"),d=p("BasicTable"),c=p("AppModal"),l=p("SecretKeyModal");return m(),u("div",null,[f(d,{onRegister:e.registerTable},{toolbar:b((()=>[f(s,{type:"primary",onClick:e.handleCreate},{default:b((()=>[S])),_:1},8,["onClick"])])),action:b((({record:o})=>[f(r,{actions:[{title:"编辑密钥",icon:"ant-design:eye-outlined",onClick:e.handleEditSecretKey.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),f(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),f(l,{onRegister:e.registerSecretKeyModal,onSuccess:e.handleUpdateSecretKeySuccess,closeFunc:e.handleCloseFunc},null,8,["onRegister","onSuccess","closeFunc"])])};export default h;
