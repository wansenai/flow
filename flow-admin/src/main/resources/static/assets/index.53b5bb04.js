import{_ as e}from"./TableImg.2c9119a6.js";import{g as o}from"./BasicForm.19c32012.js";import{u as t}from"./useTable.d6fddac6.js";import{g as n,d as i}from"./app.41d0824b.js";import{c as s,s as r}from"./app.data.0ae848be.js";import a from"./AppModal.99ffeedf.js";import d from"./SecretKeyModal.f913539e.js";import{b as c}from"./index.bf73380f.js";import{y as l,Z as p,B as m,F as u,v as f,a2 as b,a9 as j}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.e45ae65c.js";import"./index.e99064e4.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.56c740a0.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.45c1baba.js";/* empty css              *//* empty css              *//* empty css              */import"./download.1143de04.js";import"./base64Conver.bb012c73.js";import"./index.d495e6fa.js";/* empty css              */var h=l({name:"App",components:{BasicTable:e,TableAction:o,AppModal:a,SecretKeyModal:d},setup(){const[e,{openModal:o}]=c(),[a,{openModal:d,setModalProps:l}]=c(),[p,{reload:m}]=t({title:"列表",api:n,columns:s,formConfig:{labelWidth:100,schemas:r,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!0,actionColumn:{width:140,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:p,registerModal:e,registerSecretKeyModal:a,handleCloseFunc:function(){return m(),Promise.resolve(!0)},handleCreate:function(){o(!0,{isUpdate:!1})},handleEditSecretKey:function(e){d(!0,{record:e,isUpdate:!0}),l({title:`修改【${e.name}】的密钥`,showOkBtn:!1,cancelText:"关闭"})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){i([e.id]).then((()=>{m()}))},handleSuccess:function(){m()},handleUpdateSecretKeySuccess:function(){m()}}}});const x=j(" 新增 ");h.render=function(e,o,t,n,i,s){const r=p("a-button"),a=p("TableAction"),d=p("BasicTable"),c=p("AppModal"),l=p("SecretKeyModal");return m(),u("div",null,[f(d,{onRegister:e.registerTable},{toolbar:b((()=>[f(r,{type:"primary",onClick:e.handleCreate},{default:b((()=>[x])),_:1},8,["onClick"])])),action:b((({record:o})=>[f(a,{actions:[{tooltip:"查看密钥",icon:"ant-design:key-outlined",onClick:e.handleEditSecretKey.bind(null,o)},{tooltip:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),f(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),f(l,{onRegister:e.registerSecretKeyModal,onSuccess:e.handleUpdateSecretKeySuccess,closeFunc:e.handleCloseFunc},null,8,["onRegister","onSuccess","closeFunc"])])};export default h;
