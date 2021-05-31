var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,l=(e,t,a)=>new Promise(((o,r)=>{var l=e=>{try{s(a.next(e))}catch(t){r(t)}},n=e=>{try{s(a.throw(e))}catch(t){r(t)}},s=e=>e.done?o(e.value):Promise.resolve(e.value).then(l,n);s((a=a.apply(e,t)).next())}));import{_ as n,a as s}from"./useModal.b44b8cab.js";import{_ as i}from"./BasicForm.86cd97da.js";import{u as d}from"./useForm.87ab8aa1.js";import{a1 as c,b2 as p,k as u,r as m,f,u as b,K as g,o as v,n as y,Q as h,q as P,N as j}from"./vendor.bc3b2d68.js";/* empty css              */import{a as w}from"./system.5d31f0fc.js";const x=[{title:"部门名称",dataIndex:"deptName",width:160,align:"left"},{title:"排序",dataIndex:"orderNo",width:50},{title:"状态",dataIndex:"status",width:80,customRender:({record:e})=>{const t=0==~~e.status,a=t?"启用":"停用";return c(p,{color:t?"green":"red"},(()=>a))}},{title:"创建时间",dataIndex:"createTime",width:180},{title:"备注",dataIndex:"remark"}],I=[{field:"deptName",label:"部门名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]},colProps:{span:8}}],F=[{field:"deptName",label:"部门名称",component:"Input",required:!0},{field:"parentDept",label:"上级部门",component:"TreeSelect",componentProps:{replaceFields:{title:"deptName",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"orderNo",label:"排序",component:"InputNumber",required:!0},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]},required:!0},{label:"备注",field:"remark",component:"InputTextArea"}];var M=u({name:"DeptModal",components:{BasicModal:n,BasicForm:i},emits:["success","register"],setup(e,{emit:n}){const i=m(!0),[c,{resetFields:p,setFieldsValue:u,updateSchema:g,validate:v}]=d({labelWidth:100,schemas:F,showActionButtonGroup:!1}),[y,{setModalProps:h,closeModal:P}]=s((e=>l(this,null,(function*(){p(),h({confirmLoading:!1}),i.value=!!(null==e?void 0:e.isUpdate),b(i)&&u(((e,l)=>{for(var n in l||(l={}))a.call(l,n)&&r(e,n,l[n]);if(t)for(var n of t(l))o.call(l,n)&&r(e,n,l[n]);return e})({},e.record));const l=yield w();g({field:"parentDept",componentProps:{treeData:l}})}))));return{registerModal:y,registerForm:c,getTitle:f((()=>b(i)?"编辑部门":"新增部门")),handleSubmit:function(){return l(this,null,(function*(){try{yield v();h({confirmLoading:!0}),P(),n("success")}finally{h({confirmLoading:!1})}}))}}}});M.render=function(e,t,a,o,r,l){const n=g("BasicForm"),s=g("BasicModal");return v(),y(s,j(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:h((()=>[P(n,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M});export{O as D,M as _,x as c,I as s};
