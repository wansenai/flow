import{_ as e}from"./TableImg.8ccd808f.js";import{f as o}from"./BasicForm.312985a0.js";import{u as n}from"./useTable.84f74a57.js";import{g as t,d as i}from"./company.792f147b.js";import{_ as a,c as s,s as r}from"./CompanyModal.77e0511a.js";import{g as d}from"./index.f8d8fadd.js";import{b as l}from"./useModal.9d70781f.js";import{k as c,K as m,o as p,n as u,q as f,Q as b,Y as j}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.a3596aad.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.88a1af21.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.7e403a5b.js";/* empty css              *//* empty css              */import"./download.7c99dac2.js";import"./StrengthMeter.16507ade.js";const{createMessage:h}=d();var g=c({name:"Company",components:{BasicTable:e,TableAction:o,CompanyModal:a},setup(){const[e,{openModal:o}]=l(),[a,{reload:d}]=n({title:"列表",api:t,columns:s,formConfig:{labelWidth:120,schemas:r,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,canColDrag:!0,pagination:!1,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:a,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e,n){n.stopPropagation(),o(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,n){n.stopPropagation(),e={pid:e.id},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){e.children&&e.children.length>0?h.warning("有子节点，不能删除！"):i([e.id]).then((e=>{d()}))},handleSuccess:function(){d()},doSearch:function(){d()}}}});const C=j(" 新增 ");g.render=function(e,o,n,t,i,a){const s=m("a-button"),r=m("TableAction"),d=m("BasicTable"),l=m("CompanyModal");return p(),u("div",null,[f(d,{onRegister:e.registerTable},{toolbar:b((()=>[f(s,{type:"primary",onClick:e.handleCreate},{default:b((()=>[C])),_:1},8,["onClick"])])),action:b((({record:o})=>[f(r,{actions:[{title:"添加子公司",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),f(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default g;
