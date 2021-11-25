var I=Object.defineProperty;var B=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var h=(u,o,e)=>o in u?I(u,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[o]=e,E=(u,o)=>{for(var e in o||(o={}))y.call(o,e)&&h(u,e,o[e]);if(B)for(var e of B(o))M.call(o,e)&&h(u,e,o[e]);return u};var p=(u,o,e)=>new Promise((l,a)=>{var d=r=>{try{t(e.next(r))}catch(i){a(i)}},n=r=>{try{t(e.throw(r))}catch(i){a(i)}},t=r=>r.done?l(r.value):Promise.resolve(r.value).then(d,n);t((e=e.apply(u,o)).next())});import{B as j,a as A}from"./index.30115123.js";import{B as v}from"./BasicForm.6afa01de.js";import{u as x}from"./useForm.1fd322f5.js";import{c as C,s as q}from"./jobGrade.f9e59f51.js";import{_ as N}from"./index.9eb02b52.js";import{A as P,r as R,u as F,j as S,a0 as b,B as $,a1 as k,a6 as G,w as J,a4 as O}from"./vendor.7bee64cc.js";const Y=[{title:"\u540D\u79F0",dataIndex:"name",align:"left"},{title:"\u7F16\u7801",dataIndex:"code",align:"left"},{title:"\u6392\u5E8F\u53F7",dataIndex:"orderNo",width:100,align:"left"}],ee=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u7F16\u7801"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],V=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"\u540D\u79F0",required:!0,component:"Input",show:!0,rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:80,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E80\uFF01"}]},{field:"code",label:"\u7F16\u7801",required:!0,component:"Input",show:!0},{field:"typeId",label:"\u7C7B\u578BID",required:!1,component:"Input",show:!1},{field:"typeCode",label:"\u7C7B\u522B\u7F16\u7801",required:!1,component:"Input",show:!1},{field:"orderNo",label:"\u6392\u5E8F\u53F7",required:!1,component:"InputNumber",show:!0}],L=P({name:"JobGradeModal",components:{BasicModal:j,BasicForm:v},emits:["success","register"],setup(u,{emit:o}){const e=R(!0),[l,{resetFields:a,updateSchema:d,setFieldsValue:n,validate:t}]=x({labelWidth:100,schemas:V,showActionButtonGroup:!1}),r=s=>[{trigger:"blur",validator:(m,g)=>g?C({id:s.id,field:s.field,fieldValue:g,fieldName:s.fieldName}).then(f=>f?Promise.resolve():Promise.reject(s.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(f=>Promise.reject(f)):Promise.resolve()}],[i,{setModalProps:c,closeModal:w}]=A(s=>p(this,null,function*(){yield a(),c({confirmLoading:!1}),e.value=!!(s==null?void 0:s.isUpdate);let m=s.record;yield d([{field:"code",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:40,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E40\uFF01"},...r({id:F(e)&&m&&m.id||"",field:"code",fieldValue:"",fieldName:"\u6807\u8BC6"})]}]),F(e)&&n(E({},s.record))})),D=S(()=>F(e)?"\u4FEE\u6539":"\u65B0\u589E");function _(){return p(this,null,function*(){try{c({confirmLoading:!0});const s=yield t();yield q(s),w(),o("success")}finally{c({confirmLoading:!1})}})}return{registerModal:i,registerForm:l,getTitle:D,handleSubmit:_}}});function T(u,o,e,l,a,d){const n=b("BasicForm"),t=b("BasicModal");return $(),k(t,O(u.$attrs,{onRegister:u.registerModal,title:u.getTitle,onOk:u.handleSubmit}),{default:G(()=>[J(n,{onRegister:u.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var U=N(L,[["render",T]]),ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:U});export{U as J,ue as a,Y as c,ee as s};
