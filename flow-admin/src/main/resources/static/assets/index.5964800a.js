import{_ as e}from"./TableImg.44575666.js";import{f as o}from"./BasicForm.52dd7a78.js";import{u as i}from"./useTable.9cfd2432.js";import{g as t,d as n}from"./account.62c6a151.js";import{_ as s}from"./PageWrapper.c247b944.js";import{b as a}from"./useModal.a73129f6.js";import r from"./AccountModal.35ff8660.js";import d from"./PasswordModal.6ccbdd6a.js";import c from"./SetGroupModal.1de16c4c.js";import{c as l,s as u}from"./account.data.952bd624.js";import{k as p,bp as m,bw as f,cf as g,r as b,K as j,o as h,n as w,q as S,Q as v,Y as M}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./useForm.141421b5.js";import"./index.f72cd585.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.13695b66.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              */import"./CountdownInput.8664b7cc.js";/* empty css              *//* empty css              */import"./download.a0c19fe1.js";import"./StrengthMeter.d8342dd8.js";import"./usePageContext.8ab99773.js";/* empty css              */import"./group.0a65c3a4.js";var x=p({name:"Account",components:{BasicTable:e,PageWrapper:s,AccountModal:r,PasswordModal:d,SetGroupModal:c,TableAction:o,Avatar:m,Image:f,UserOutlined:g},setup(){const[e,{openModal:o}]=a(),[s,{openModal:r}]=a(),[d,{openModal:c}]=a(),p=b(""),m=b(!1),[f,{reload:g}]=i({title:"列表",api:t,columns:l,formConfig:{labelWidth:120,schemas:u,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:f,registerModal:e,registerPasswordModal:s,registerSetGroupModal:d,previewImage:p,previewImageVisible:m,previewImageHandle:function(e){e&&(p.value=e,m.value=!0)},previewImageVisibleChange:function(e,o){m.value=e},handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleSetPassword:function(e){r(!0,{record:e,isUpdate:!0})},handleSetGroup:function(e){c(!0,{record:e,isUpdate:!0})},handleDelete:function(e){n([e.id]).then((e=>{g()}))},handleSuccess:function(){g()},handlePasswordSuccess:function(){g()},handleSetGroupSuccess:function(){g()}}}});const C=M(" 新增 "),I={style:{width:"0",height:"0",overflow:"hidden"}};x.render=function(e,o,i,t,n,s){const a=j("a-button"),r=j("TableAction"),d=j("UserOutlined"),c=j("Avatar"),l=j("BasicTable"),u=j("Image"),p=j("AccountModal"),m=j("PasswordModal"),f=j("SetGroupModal");return h(),w("div",null,[S(l,{onRegister:e.registerTable},{toolbar:v((()=>[S(a,{type:"primary",onClick:e.handleCreate},{default:v((()=>[C])),_:1},8,["onClick"])])),action:v((({record:o})=>[S(r,{actions:[{title:"分配组",icon:"ant-design:usergroup-add",onClick:e.handleSetGroup.bind(null,o)},{title:"设置密码",icon:"ant-design:setting-outlined",onClick:e.handleSetPassword.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),imageRender:v((({record:o})=>[S(c,{src:o.image,onClick:i=>e.previewImageHandle(o.image)},{icon:v((()=>[S(d)])),_:2},1032,["src","onClick"])])),_:1},8,["onRegister"]),S("div",I,[S(u,{width:0,height:0,src:e.previewImage,preview:{visible:e.previewImageVisible,onVisibleChange:e.previewImageVisibleChange}},null,8,["src","preview"])]),S(p,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),S(m,{onRegister:e.registerPasswordModal,onSuccess:e.handlePasswordSuccess},null,8,["onRegister","onSuccess"]),S(f,{onRegister:e.registerSetGroupModal,onSuccess:e.handleSetGroupSuccess},null,8,["onRegister","onSuccess"])])};export default x;
