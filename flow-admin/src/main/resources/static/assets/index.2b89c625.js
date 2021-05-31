import{_ as e}from"./TableImg.8ccd808f.js";import{f as o}from"./BasicForm.312985a0.js";import{u as t}from"./useTable.84f74a57.js";import{b as n}from"./useModal.9d70781f.js";import{_ as a,g as i,c as r,s,d}from"./LoginLogModal.5fab32a6.js";import{g as l}from"./index.f8d8fadd.js";import{P as c}from"./perEnum.9a5ef72f.js";import{_ as m}from"./Authority.vue_vue&type=script&lang.f1194055.js";import{k as u,K as p,o as f,n as h,q as b,Q as g,Y as j}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.a3596aad.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.88a1af21.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.7e403a5b.js";/* empty css              *//* empty css              */import"./download.7c99dac2.js";import"./StrengthMeter.16507ade.js";var x=u({name:"LoginLog",components:{BasicTable:e,TableAction:o,LoginLogModal:a,Authority:m},setup(){const{createMessage:e,createConfirm:o}=l(),[a,{openModal:m}]=n(),[u,{reload:p,getSelectRows:f}]=t({title:"列表",api:i,columns:r,formConfig:{labelWidth:120,schemas:s,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},rowSelection:{type:"checkbox",columnWidth:30},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:60,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{PerEnum:c,registerTable:u,registerModal:a,handleCreate:function(){m(!0,{isUpdate:!1})},handleEdit:function(e){m(!0,{record:e,isUpdate:!0})},handleDelete:function(e){d([e.id]).then((()=>{p()}))},handleDeleteAll:function(){const t=f();t&&t.length<=0?e.warn("请选择行！"):o({iconType:"warning",title:"提示",content:"确定要删除所选行吗？",onOk:()=>{return e=this,o=null,n=function*(){const e=t.map((e=>e.id));yield d(e).then((()=>{p()}))},new Promise(((t,a)=>{var i=e=>{try{s(n.next(e))}catch(o){a(o)}},r=e=>{try{s(n.throw(e))}catch(o){a(o)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(i,r);s((n=n.apply(e,o)).next())}));var e,o,n}})},handleSuccess:function(){p()}}}});const v=j(" 删除 ");x.render=function(e,o,t,n,a,i){const r=p("a-button"),s=p("Authority"),d=p("TableAction"),l=p("BasicTable"),c=p("LoginLogModal");return f(),h("div",null,[b(l,{onRegister:e.registerTable},{toolbar:g((()=>[b(s,{value:this.$options.name+":"+e.PerEnum.DELETE},{default:g((()=>[b(r,{type:"danger",onClick:e.handleDeleteAll},{default:g((()=>[v])),_:1},8,["onClick"])])),_:1},8,["value"])])),action:g((({record:o})=>[b(d,{actions:[{auth:this.$options.name+":"+e.PerEnum.DELETE,icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),b(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;
