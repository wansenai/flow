var L=Object.defineProperty,O=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var v=(e,t,o)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,E=(e,t)=>{for(var o in t||(t={}))$.call(t,o)&&v(e,o,t[o]);if(F)for(var o of F(t))U.call(t,o)&&v(e,o,t[o]);return e},_=(e,t)=>O(e,R(t));var g=(e,t,o)=>new Promise((m,n)=>{var c=i=>{try{p(o.next(i))}catch(s){n(s)}},l=i=>{try{p(o.throw(i))}catch(s){n(s)}},p=i=>i.done?m(i.value):Promise.resolve(i.value).then(c,l);p((o=o.apply(e,t)).next())});import{B as A,a as G}from"./index.ef1baeca.js";import{B as D}from"./BasicForm.35bf3188.js";import{u as I}from"./useForm.8dec0b63.js";import{b as N}from"./account.data.f4f07ca4.js";import{b as P}from"./account.31719e7c.js";import{g as T}from"./group.aec57a08.js";import{az as V,a as j,cX as z,w as B,j as M,h as W,aB as h,o as X,k as q,B as b,p as C,aC as H}from"./index.741c5d36.js";import"./useWindowSizeFn.54947215.js";import"./FullscreenOutlined.d8f1076a.js";/* empty css              *//* empty css               */import"./index.d23d5e7f.js";import"./index.d4ff1276.js";import"./Checkbox.2841bc84.js";import"./index.5fb5b3b2.js";import"./index.abe396df.js";import"./index.73bb7fa2.js";import"./index.5fd79f94.js";import"./index.249616b7.js";import"./get.9f08d1a5.js";import"./index.4960ebac.js";import"./eagerComputed.1e0895dc.js";import"./index.46c568bc.js";import"./_baseIteratee.9655ef6b.js";import"./DeleteOutlined.d4d5ebae.js";import"./index.0f0cf900.js";import"./useRefs.31b824e4.js";import"./Form.41e509ff.js";import"./Col.ba611277.js";import"./useFlexGapSupport.28e961f9.js";import"./useSize.aa4022ca.js";import"./transButton.76f8f88c.js";import"./index.7b2c1cea.js";import"./index.847bc6c1.js";import"./index.ae783029.js";import"./uuid.2b29000c.js";import"./download.102dd35e.js";import"./base64Conver.08b9f4ec.js";import"./index.2f746864.js";import"./index.196769f5.js";import"./uniqBy.c3dbbda0.js";const J=j({name:"AccountModal",components:{BasicModal:A,BasicForm:D,Select:z},emits:["success","register"],setup(e,{emit:t}){const o=B(!0),m=B([]),n=B("\u8BBE\u7F6E\u7EC4"),[c,{setFieldsValue:l,updateSchema:p,resetFields:i,validate:s}]=I({labelWidth:100,schemas:N,showActionButtonGroup:!1,actionColOptions:{span:23}}),[d,{setModalProps:u,closeModal:S}]=G(r=>g(this,null,function*(){i(),u({confirmLoading:!1,title:"\u7ED9\u8D26\u53F7\u3010"+r.record.realName+"("+r.record.username+")\u3011\u8BBE\u7F6E\u7EC4"}),o.value=!!(r!=null&&r.isUpdate);const f=yield T();if(f.forEach(a=>{a.label=a.name,a.value=a.id}),m.value=f,M(o)){let a=r.record.groups||[];a=a.map(y=>y.id),l(_(E({},r.record),{groups:a}))}}));let w=W(()=>M(o)?n.value:"\u65B0\u589E");function k(){return g(this,null,function*(){try{u({confirmLoading:!0});const r=yield s();r.groups=r.groups.map(f=>({id:f})),r.userId=r.id,delete r.id,yield P(r),S(),t("success")}finally{u({confirmLoading:!1})}})}return{registerModal:d,registerForm:c,getTitle:w,groupOptions:m,handleSubmit:k}}});function K(e,t,o,m,n,c){const l=h("Select"),p=h("BasicForm"),i=h("BasicModal");return X(),q(i,H(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:b(()=>[C(p,{onRegister:e.registerForm},{groups:b(({model:s,field:d})=>[C(l,{value:s[d],"onUpdate:value":u=>s[d]=u,mode:"multiple",style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u7EC4","option-label-prop":"label",options:e.groupOptions},null,8,["value","onUpdate:value","options"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var Po=V(J,[["render",K]]);export{Po as default};