var e=(e,o,n)=>new Promise(((t,a)=>{var i=e=>{try{s(n.next(e))}catch(o){a(o)}},l=e=>{try{s(n.throw(e))}catch(o){a(o)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(i,l);s((n=n.apply(e,o)).next())}));import{_ as o}from"./TableImg.375209e8.js";import{f as n}from"./BasicForm.de2d0bb0.js";import{u as t}from"./useTable.5c7aa523.js";import{g as a,a as i,s as l,d as s,b as r}from"./personal.891c16c1.js";import{_ as d}from"./PageWrapper.92431b9d.js";import c from"./OrgTree.6ffc64e6.js";import{b as p}from"./useModal.0a504584.js";import{_ as u,c as m,s as f}from"./PersonalModal.40c0d876.js";import g from"./index.82b7cca5.js";import h from"./index.0e0fe021.js";import{k as b,aH as j,bp as x,ca as v,aw as S,b2 as w,bw as y,bW as C,cd as I,ce as R,cf as M,r as P,u as T,l as O,m as _,K as k,o as B,n as D,q as L,Y as A,s as W,V,ah as F,x as H}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./useForm.906ec90d.js";import"./index.1f477f84.js";/* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.55e358dc.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              */import"./CountdownInput.ed12ce5f.js";/* empty css              *//* empty css              */import"./download.d21b7c84.js";import"./StrengthMeter.f927a9c9.js";import"./usePageContext.69aad0be.js";/* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.c4784bee.js";import"./useContextMenu.6d56ec4d.js";import"./dept.7bc4970e.js";import"./company.0e3fabdb.js";import"./jobGrade.8982fc72.js";import"./positionInfo.e4408fd2.js";import"./role.54587776.js";import"./CompanyTree.397332cc.js";var z=b({name:"PersonalManagement",components:{BasicTable:o,Spin:j,PageWrapper:d,OrgTree:c,PersonalModal:u,RoleSelector:g,PersonalSelector:h,TableAction:n,Avatar:x,Badge:v,Popconfirm:S,Tag:w,Image:y,DeleteOutlined:C,ManOutlined:I,WomanOutlined:R,UserOutlined:M},setup(){const[o,{openModal:n,setModalProps:d}]=p(),[c,{openModal:u,setModalProps:g}]=p(),[h,{openModal:b,setModalProps:j}]=p(),x=P({}),v=P({}),S=P(""),w=P(!1),y=P({}),[C,{reload:I,setLoading:R}]=t({title:"列表",api:a,columns:m,formConfig:{labelWidth:120,schemas:f,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},searchInfo:{showRoles:!0},size:"small",useSearchForm:!0,showIndexColumn:!1,bordered:!0,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});function M(){var e,o;let n={};"1"===(null==(e=y.value)?void 0:e.sourceType)?n={companyId:T(y).id}:"2"===(null==(o=y.value)?void 0:o.sourceType)&&(n={deptId:T(y).id}),I({searchInfo:n})}return{registerTable:C,registerRoleModal:c,registerPersonalModal:h,registerModal:o,deleteRoleLoading:v,previewImage:S,previewImageVisible:w,previewImageHandle:function(e){e&&(S.value=e,w.value=!0)},previewImageVisibleChange:function(e,o){w.value=e},handleCreate:function(){let e={};T(y)&&("1"===T(y).sourceType?e={companyId:T(y).id}:"2"===T(y).sourceType&&(e={companyId:T(y).companyId,deptId:T(y).id})),n(!0,{isUpdate:!1,record:e}),d({title:"新增人员",bodyStyle:{padding:"0px",margin:"0px"},width:800,height:400})},handleEdit:function(e){n(!0,{record:e,isUpdate:!0}),d({title:"修改人员",bodyStyle:{padding:"0px",margin:"0px"},width:800,height:420})},confirmDeleteRole:function(e,o){v.value[e]=!0,r({personalId:e,roleId:o}).then((()=>{M()})).finally((()=>{v.value[e]=!1}))},cancelDeleteRole:function(){},handleSettingRoles:function(e){x.value=e,u(!0,{personalId:x.value.id}),g({title:`给【${e.name}(${e.code})】添加角色`,bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})},handleSettingLeader:function(e){x.value=e;let o=[];e.leaderCode&&e.leaderName&&o.push({id:e.id,code:e.leaderCode,name:e.leaderName}),b(!0,{selectorProps:{multiSelect:!1,selectedList:o}}),j({title:`给【${e.name}(${e.code})】设置领导`,bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})},handleDelete:function(e){s([e.id]).then((e=>{I()}))},handleSuccess:function(){I()},handleSettingRoleSuccess:function(o){return e(this,null,(function*(){const e=o.map((e=>({id:e.id})));yield i({personalId:T(x).id,roles:e}),M()}))},handleSettingLeaderSuccess:function(o){return e(this,null,(function*(){o&&o.length>0&&l({leaderCode:o[0].code,id:T(x).id}).then((()=>{M()})).finally((()=>{}))}))},handleSelect:function(e){y.value=e,M()},doSearch:function(){I()}}}});const E=H();O("data-v-af246fc8");const U=A("新增"),$={class:"personal-roles"};_();const N=E(((e,o,n,t,a,i)=>{const l=k("OrgTree"),s=k("a-button"),r=k("TableAction"),d=k("WomanOutlined"),c=k("ManOutlined"),p=k("UserOutlined"),u=k("Avatar"),m=k("Badge"),f=k("DeleteOutlined"),g=k("Popconfirm"),h=k("Tag"),b=k("Spin"),j=k("BasicTable"),x=k("Image"),v=k("PersonalModal"),S=k("RoleSelector"),w=k("PersonalSelector"),y=k("PageWrapper");return B(),D(y,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:E((()=>[L(l,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),L(j,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:E((()=>[L(s,{type:"primary",onClick:e.handleCreate},{default:E((()=>[U])),_:1},8,["onClick"])])),action:E((({record:o})=>[L(r,{actions:[{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}],dropDownActions:[{label:"分配角色",title:"分配角色",icon:"ant-design:usergroup-add",onClick:e.handleSettingRoles.bind(null,o)},{title:"设置领导",label:"设置领导",icon:"ant-design:setting-outlined",onClick:e.handleSettingLeader.bind(null,o)}]},null,8,["actions","dropDownActions"])])),nameRender:E((({record:o})=>[L(m,null,{count:E((()=>[2===o.sex?(B(),D(d,{key:0,style:{color:"#f5222d","font-size":"12px"}})):(B(),D(c,{key:1,style:{color:"#1890ff","font-size":"12px"}}))])),default:E((()=>[L(u,{src:o.headImg,onClick:n=>e.previewImageHandle(o.headImg)},{icon:E((()=>[L(p)])),_:2},1032,["src","onClick"])])),_:2},1024),A(" "+W(o.name),1)])),rolesRender:E((({record:o})=>[L("div",$,[L(b,{spinning:!(!e.deleteRoleLoading||!e.deleteRoleLoading[o.id])&&e.deleteRoleLoading[o.id]},{default:E((()=>[(B(!0),D(V,null,F(o.roles,(n=>(B(),D(h,null,{default:E((()=>[A(W(n.name)+" ",1),L(g,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:t=>e.confirmDeleteRole(o.id,n.id),onCancel:e.cancelDeleteRole},{default:E((()=>[L(f,{color:"error",style:{color:"#d9595b"}})])),_:2},1032,["onConfirm","onCancel"])])),_:2},1024)))),256))])),_:2},1032,["spinning"])])])),_:1},8,["onRegister"]),L(x,{width:0,height:0,src:e.previewImage,preview:{visible:e.previewImageVisible,onVisibleChange:e.previewImageVisibleChange}},null,8,["src","preview"]),L(v,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),L(S,{onRegister:e.registerRoleModal,onSuccess:e.handleSettingRoleSuccess},null,8,["onRegister","onSuccess"]),L(w,{onRegister:e.registerPersonalModal,onSuccess:e.handleSettingLeaderSuccess},null,8,["onRegister","onSuccess"])])),_:1})}));z.render=N,z.__scopeId="data-v-af246fc8";export default z;
