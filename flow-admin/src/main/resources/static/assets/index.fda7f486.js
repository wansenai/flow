import{_ as e}from"./TableImg.8ccd808f.js";import{f as o}from"./BasicForm.312985a0.js";import{u as t}from"./useTable.84f74a57.js";import{b as i}from"./useModal.9d70781f.js";import{_ as n,c as a,s}from"./PositionSeqModal.bf5fd56f.js";import{g as r,d}from"./positionSeq.5bdefe0c.js";import{g as l}from"./index.f8d8fadd.js";import{k as c,K as p,o as m,n as u,q as f,Q as b,Y as j}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.a3596aad.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.88a1af21.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.7e403a5b.js";/* empty css              *//* empty css              */import"./download.7c99dac2.js";import"./StrengthMeter.16507ade.js";const{createMessage:h}=l();var g=c({name:"PositionSeq",components:{BasicTable:e,TableAction:o,PositionSeqModal:n},setup(){const[e,{openModal:o}]=i(),[n,{reload:l}]=t({title:"列表",api:r,columns:a,formConfig:{labelWidth:120,schemas:s,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,canColDrag:!0,pagination:!1,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:n,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e,t){t.stopPropagation(),o(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,t){t.stopPropagation(),e={pid:e.id},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){e.children&&e.children.length>0?h.warning("有子节点，不能删除！"):d([e.id]).then((e=>{l()}))},handleSuccess:function(){l()},doSearch:function(){l()}}}});const x=j(" 新增 ");g.render=function(e,o,t,i,n,a){const s=p("a-button"),r=p("TableAction"),d=p("BasicTable"),l=p("PositionSeqModal");return m(),u("div",null,[f(d,{onRegister:e.registerTable},{toolbar:b((()=>[f(s,{type:"primary",onClick:e.handleCreate},{default:b((()=>[x])),_:1},8,["onClick"])])),action:b((({record:o})=>[f(r,{actions:[{title:"添加子序列",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),f(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default g;
