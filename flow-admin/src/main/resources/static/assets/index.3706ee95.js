import{_ as e}from"./TableImg.5453971a.js";import{f as o}from"./BasicForm.f252c294.js";import{u as t}from"./useTable.da9f7dda.js";import{_ as i,g as n,c as a,s as r,d as s}from"./AreaModal.9c452816.js";import{g as d}from"./index.6992208b.js";import{b as l}from"./useModal.11986c6c.js";import{k as c,K as p,o as m,n as u,q as f,Q as b,Y as j}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.7c89f4ac.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.e73ef165.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.14e97884.js";/* empty css              *//* empty css              */import"./download.f95f58dd.js";import"./StrengthMeter.505415db.js";const{createMessage:g}=d();var h=c({name:"Area",components:{BasicTable:e,TableAction:o,AreaModal:i},setup(){const[e,{openModal:o,setModalProps:i}]=l(),[d,{reload:c}]=t({title:"列表",api:n,columns:a,formConfig:{labelWidth:120,schemas:r,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,isTreeTable:!0,canColDrag:!0,pagination:!1,useSearchForm:!0,showTableSetting:!1,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:d,registerModal:e,handleCreate:function(){i({title:"新增区域"}),o(!0,{isUpdate:!1})},handleEdit:function(e,t){t.stopPropagation(),i({title:"修改区域"}),o(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,t){t.stopPropagation(),i({title:"新增【"+e.name+"】的子区域"}),e={pcode:e.code},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e,o){o.stopPropagation(),e.children&&e.children.length>0?g.warning("有子节点，不能删除！"):s(e.code).then((()=>{c()}))},handleSuccess:function(){c()},doSearch:function(){c()}}}});const x=j(" 新增 ");h.render=function(e,o,t,i,n,a){const r=p("a-button"),s=p("TableAction"),d=p("BasicTable"),l=p("AreaModal");return m(),u("div",null,[f(d,{onRegister:e.registerTable},{toolbar:b((()=>[f(r,{type:"primary",onClick:e.handleCreate},{default:b((()=>[x])),_:1},8,["onClick"])])),action:b((({record:o})=>[f(s,{actions:[{title:"添加子节点",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),f(l,{onRegister:e.registerModal},null,8,["onRegister"])])};export default h;
