var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,s=(e,t,r)=>new Promise(((a,o)=>{var s=e=>{try{i(r.next(e))}catch(t){o(t)}},l=e=>{try{i(r.throw(e))}catch(t){o(t)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(s,l);i((r=r.apply(e,t)).next())}));import{_ as l,a as i}from"./useModal.11986c6c.js";import{_ as n}from"./BasicForm.f252c294.js";import{u as d}from"./useForm.7c89f4ac.js";import{a1 as c,b2 as u,k as m,r as f,u as p,f as g,K as h,o as b,n as y,Q as v,q as w,N as x}from"./vendor.9d9efc92.js";/* empty css              */import{c as j,s as P}from"./jobGradeType.183761fe.js";const I=[{title:"名称",dataIndex:"name",align:"left"},{title:"编码",dataIndex:"code",align:"left"},{title:"状态",dataIndex:"status",width:80,customRender:({record:e})=>{const t=1==~~e.status,r=t?"启用":"停用";return c(u,{color:t?"green":"red"},(()=>r))}},{title:"排序编号",dataIndex:"orderNo",width:100,align:"left"},{title:"备注",dataIndex:"note",align:"left"}],q=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/编码"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],M=[{field:"id",label:"",required:!1,component:"Input",show:!1},{field:"code",label:"编码",required:!0,component:"Input",show:!0},{field:"name",label:"名称",required:!0,component:"Input",show:!0,rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:80,message:"字符长度不能大于80！"}]},{field:"status",label:"状态",required:!1,component:"Switch",defaultValue:!0,componentProps:{checkedChildren:"启用",unCheckedChildren:"停用"}},{field:"orderNo",label:"排序编号",required:!1,component:"InputNumber",show:!0},{field:"note",label:"备注",required:!1,component:"InputTextArea",show:!0,rules:[{max:255,message:"字符长度不能大于255！"}]}];var O=m({name:"JobGradeTypeModal",components:{BasicModal:l,BasicForm:n},emits:["success","register"],setup(e,{emit:l}){const n=f(!0),[c,{resetFields:u,updateSchema:m,setFieldsValue:h,validate:b}]=d({labelWidth:100,schemas:M,showActionButtonGroup:!1}),[y,{setModalProps:v,closeModal:w}]=i((e=>s(this,null,(function*(){yield u(),v({confirmLoading:!1}),n.value=!!(null==e?void 0:e.isUpdate);let s=e.record;yield m([{field:"code",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"标识不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:40,message:"字符长度不能大于40！"},...(e={id:p(n)&&s&&s.id||"",field:"code",fieldValue:"",fieldName:"标识"},[{trigger:"blur",validator:(t,r)=>r?j({id:e.id,field:e.field,fieldValue:r,fieldName:e.fieldName}).then((t=>t?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),p(n)&&h(((e,s)=>{for(var l in s||(s={}))r.call(s,l)&&o(e,l,s[l]);if(t)for(var l of t(s))a.call(s,l)&&o(e,l,s[l]);return e})({},e.record))}))));return{registerModal:y,registerForm:c,getTitle:g((()=>p(n)?"修改":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{v({confirmLoading:!0});const e=yield b();e.status=e.status?1:0,yield P(e),w(),l("success")}finally{v({confirmLoading:!1})}}))}}}});O.render=function(e,t,r,a,o,s){const l=h("BasicForm"),i=h("BasicModal");return b(),y(i,x(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:v((()=>[w(l,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});export{_ as J,O as _,I as c,q as s};
