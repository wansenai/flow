import{_ as e}from"./TableImg.aa3bf976.js";import{g as o}from"./BasicForm.d6bc90d8.js";import{u as t}from"./useTable.2b02bf57.js";import{a as n,d as i}from"./group.fafe4ba7.js";import{c as s,s as a}from"./group.data.4afe2e54.js";import r from"./GroupModal.1856eb98.js";import d from"./SetAccountModal.76059039.js";import c from"./SetAclModal.a0521707.js";import{b as l}from"./index.116df12f.js";import{A as u}from"./index.4c0b20b6.js";import{P as m}from"./perEnum.9a5ef72f.js";import{y as p,Z as f,B as b,F as j,v as h,a2 as S,a9 as A}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.1b895cf0.js";import"./index.10e3b51a.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.6ed16464.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.981ceacd.js";/* empty css              *//* empty css              *//* empty css              */import"./download.db26d4fe.js";import"./base64Conver.bb012c73.js";import"./index.f38aca4b.js";import"./account.0e802c7e.js";import"./AclCheckboxGroup.c7238fd0.js";var g=p({name:"Group",components:{BasicTable:e,TableAction:o,GroupModal:r,SetAccountModal:d,SetAclModal:c,Authority:u},setup(){const[e,{openModal:o}]=l(),[r,{openModal:d}]=l(),[c,{openModal:u,setModalProps:p}]=l(),[f,{reload:b}]=t({title:"列表",api:n,columns:s,formConfig:{labelWidth:120,schemas:a,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,rowSelection:!1,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{PerEnum:m,registerTable:f,registerModal:e,registerSetAccountModal:r,registerSetAclModal:c,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleAcl:function(e){u(!0,{record:e,isUpdate:!0}),p({bodyStyle:{padding:"0px",margin:"0px"},width:800,height:400,showOkBtn:!1,cancelText:"关闭"})},handleAddUser:function(e){d(!0,{record:e,isUpdate:!0})},handleDelete:function(e){i([e.id]).then((e=>{b()}))},handleSuccess:function(){b()},handleSetAccountSuccess:function(){b()},handleSetAclSuccess:function(){b()}}}});const x=A(" 新增");g.render=function(e,o,t,n,i,s){const a=f("a-button"),r=f("Authority"),d=f("TableAction"),c=f("BasicTable"),l=f("GroupModal"),u=f("SetAccountModal"),m=f("SetAclModal");return b(),j("div",null,[h(c,{onRegister:e.registerTable},{toolbar:S((()=>[h(r,{value:this.$options.name+":"+e.PerEnum.ADD},{default:S((()=>[h(a,{type:"primary",onClick:e.handleCreate},{default:S((()=>[x])),_:1},8,["onClick"])])),_:1},8,["value"])])),action:S((({record:o})=>[h(d,{actions:[{auth:this.$options.name+":"+e.PerEnum.AUTH,tooltip:"分配权限",icon:"ant-design:safety",onClick:e.handleAcl.bind(null,o)},{auth:this.$options.name+":"+e.PerEnum.AUTH,tooltip:"分配用户",icon:"ant-design:user-add",onClick:e.handleAddUser.bind(null,o)},{tooltip:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),h(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),h(u,{onRegister:e.registerSetAccountModal,onSuccess:e.handleSetAccountSuccess},null,8,["onRegister","onSuccess"]),h(m,{onRegister:e.registerSetAclModal,onSuccess:e.handleSetAclSuccess},null,8,["onRegister","onSuccess"])])};export default g;
