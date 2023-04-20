var L=Object.defineProperty,O=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var v=(e,t,o)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,E=(e,t)=>{for(var o in t||(t={}))$.call(t,o)&&v(e,o,t[o]);if(F)for(var o of F(t))U.call(t,o)&&v(e,o,t[o]);return e},_=(e,t)=>O(e,R(t));var g=(e,t,o)=>new Promise((m,n)=>{var c=i=>{try{p(o.next(i))}catch(s){n(s)}},l=i=>{try{p(o.throw(i))}catch(s){n(s)}},p=i=>i.done?m(i.value):Promise.resolve(i.value).then(c,l);p((o=o.apply(e,t)).next())});import{B as A,a as G}from"./index.61c914e7.js";import{B as D}from"./BasicForm.d977d74c.js";import{u as I}from"./useForm.d5452096.js";import{b as N}from"./account.data.a7c025a5.js";import{b as P}from"./account.a010f74c.js";import{g as T}from"./group.d69e8062.js";import{az as V,a as j,cX as z,w as B,j as M,h as W,aB as h,o as X,k as q,B as b,p as C,aC as H}from"./index.7ea10544.js";import"./useWindowSizeFn.3dc14e02.js";import"./FullscreenOutlined.8864dded.js";/* empty css              *//* empty css               */import"./index.5d6fdc93.js";import"./index.e5a472bb.js";import"./Checkbox.fc744a85.js";import"./index.f8eff8ab.js";import"./index.6954dcaa.js";import"./index.cca6a300.js";import"./index.c247c1b6.js";import"./index.c6794bd1.js";import"./get.4066932b.js";import"./index.60e2cd93.js";import"./eagerComputed.087e7096.js";import"./index.c5147852.js";import"./_baseIteratee.31b374d5.js";import"./DeleteOutlined.f1932d42.js";import"./index.e40c323f.js";import"./useRefs.08da6c2b.js";import"./Form.6886a72a.js";import"./Col.a6a2600f.js";import"./useFlexGapSupport.5af5008f.js";import"./useSize.b4cfb06d.js";import"./transButton.331b5127.js";import"./index.a8777167.js";import"./index.d3af8cb2.js";import"./index.32756aa0.js";import"./uuid.2b29000c.js";import"./download.bfb09172.js";import"./base64Conver.08b9f4ec.js";import"./index.245189e1.js";import"./index.2f8b90c5.js";import"./uniqBy.fea10226.js";const J=j({name:"AccountModal",components:{BasicModal:A,BasicForm:D,Select:z},emits:["success","register"],setup(e,{emit:t}){const o=B(!0),m=B([]),n=B("\u8BBE\u7F6E\u7EC4"),[c,{setFieldsValue:l,updateSchema:p,resetFields:i,validate:s}]=I({labelWidth:100,schemas:N,showActionButtonGroup:!1,actionColOptions:{span:23}}),[d,{setModalProps:u,closeModal:S}]=G(r=>g(this,null,function*(){i(),u({confirmLoading:!1,title:"\u7ED9\u8D26\u53F7\u3010"+r.record.realName+"("+r.record.username+")\u3011\u8BBE\u7F6E\u7EC4"}),o.value=!!(r!=null&&r.isUpdate);const f=yield T();if(f.forEach(a=>{a.label=a.name,a.value=a.id}),m.value=f,M(o)){let a=r.record.groups||[];a=a.map(y=>y.id),l(_(E({},r.record),{groups:a}))}}));let w=W(()=>M(o)?n.value:"\u65B0\u589E");function k(){return g(this,null,function*(){try{u({confirmLoading:!0});const r=yield s();r.groups=r.groups.map(f=>({id:f})),r.userId=r.id,delete r.id,yield P(r),S(),t("success")}finally{u({confirmLoading:!1})}})}return{registerModal:d,registerForm:c,getTitle:w,groupOptions:m,handleSubmit:k}}});function K(e,t,o,m,n,c){const l=h("Select"),p=h("BasicForm"),i=h("BasicModal");return X(),q(i,H(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:b(()=>[C(p,{onRegister:e.registerForm},{groups:b(({model:s,field:d})=>[C(l,{value:s[d],"onUpdate:value":u=>s[d]=u,mode:"multiple",style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u7EC4","option-label-prop":"label",options:e.groupOptions},null,8,["value","onUpdate:value","options"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var Po=V(J,[["render",K]]);export{Po as default};