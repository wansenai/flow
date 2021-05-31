import{_ as e}from"./TableImg.7eb6c017.js";import{f as o}from"./BasicForm.86cd97da.js";import{u as i}from"./useTable.5323312b.js";import{g as t,d as a}from"./account.03e1e588.js";import{_ as n}from"./PageWrapper.ba7be9e5.js";import{b as s}from"./useModal.b44b8cab.js";import r from"./AccountModal.0ed8ff71.js";import d from"./PasswordModal.f6a4a159.js";import c from"./SetGroupModal.4cd3ed34.js";import{c as l,s as u}from"./account.data.952bd624.js";import{k as p,bp as m,bw as b,cf as f,r as g,K as j,o as h,n as w,q as S,Q as v,Y as M}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./useForm.87ab8aa1.js";import"./index.33a0330f.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.a66d7f9a.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              */import"./CountdownInput.0bc8da65.js";/* empty css              *//* empty css              */import"./download.5032960b.js";import"./StrengthMeter.ae9219d5.js";import"./usePageContext.a11cc1be.js";/* empty css              */import"./group.3f46d09b.js";var x=p({name:"Account",components:{BasicTable:e,PageWrapper:n,AccountModal:r,PasswordModal:d,SetGroupModal:c,TableAction:o,Avatar:m,Image:b,UserOutlined:f},setup(){const[e,{openModal:o}]=s(),[n,{openModal:r}]=s(),[d,{openModal:c}]=s(),p=g(""),m=g(!1),[b,{reload:f}]=i({title:"列表",api:t,columns:l,formConfig:{labelWidth:120,schemas:u,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:b,registerModal:e,registerPasswordModal:n,registerSetGroupModal:d,previewImage:p,previewImageVisible:m,previewImageHandle:function(e){e&&(p.value=e,m.value=!0)},previewImageVisibleChange:function(e,o){m.value=e},handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleSetPassword:function(e){r(!0,{record:e,isUpdate:!0})},handleSetGroup:function(e){c(!0,{record:e,isUpdate:!0})},handleDelete:function(e){a([e.id]).then((e=>{f()}))},handleSuccess:function(){f()},handlePasswordSuccess:function(){f()},handleSetGroupSuccess:function(){f()}}}});const C=M(" 新增 "),I={style:{width:"0",height:"0",overflow:"hidden"}};x.render=function(e,o,i,t,a,n){const s=j("a-button"),r=j("TableAction"),d=j("UserOutlined"),c=j("Avatar"),l=j("BasicTable"),u=j("Image"),p=j("AccountModal"),m=j("PasswordModal"),b=j("SetGroupModal");return h(),w("div",null,[S(l,{onRegister:e.registerTable},{toolbar:v((()=>[S(s,{type:"primary",onClick:e.handleCreate},{default:v((()=>[C])),_:1},8,["onClick"])])),action:v((({record:o})=>[S(r,{actions:[{title:"分配组",icon:"ant-design:usergroup-add",onClick:e.handleSetGroup.bind(null,o)},{title:"设置密码",icon:"ant-design:setting-outlined",onClick:e.handleSetPassword.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),imageRender:v((({record:o})=>[S(c,{src:o.image,onClick:i=>e.previewImageHandle(o.image)},{icon:v((()=>[S(d)])),_:2},1032,["src","onClick"])])),_:1},8,["onRegister"]),S("div",I,[S(u,{width:0,height:0,src:e.previewImage,preview:{visible:e.previewImageVisible,onVisibleChange:e.previewImageVisibleChange}},null,8,["src","preview"])]),S(p,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),S(m,{onRegister:e.registerPasswordModal,onSuccess:e.handlePasswordSuccess},null,8,["onRegister","onSuccess"]),S(b,{onRegister:e.registerSetGroupModal,onSuccess:e.handleSetGroupSuccess},null,8,["onRegister","onSuccess"])])};export default x;
