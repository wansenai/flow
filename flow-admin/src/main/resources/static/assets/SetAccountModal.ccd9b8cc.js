var y=Object.defineProperty,A=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var v=(e,t,o)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,F=(e,t)=>{for(var o in t||(t={}))O.call(t,o)&&v(e,o,t[o]);if(h)for(var o of h(t))U.call(t,o)&&v(e,o,t[o]);return e},_=(e,t)=>A(e,L(t));var g=(e,t,o)=>new Promise((m,u)=>{var c=s=>{try{n(o.next(s))}catch(a){u(a)}},l=s=>{try{n(o.throw(s))}catch(a){u(a)}},n=s=>s.done?m(s.value):Promise.resolve(s.value).then(c,l);n((o=o.apply(e,t)).next())});import{B as $,a as R}from"./index.56ac9033.js";import{B as D}from"./BasicForm.bc1bc2ec.js";import{u as G}from"./useForm.35a2e1b5.js";import{a as I}from"./group.data.540472c0.js";import{e as N}from"./account.9042b7bc.js";import{b as P}from"./group.e2ba5e5a.js";import{az as T,a as V,cX as j,w as M,j as S,h as z,aB as B,o as W,k as X,B as b,p as w,aC as q}from"./index.bbfb8c5d.js";import"./useWindowSizeFn.daa22200.js";import"./FullscreenOutlined.7b1f5985.js";/* empty css              *//* empty css               */import"./index.eb776706.js";import"./index.08f5b20b.js";import"./Checkbox.6b0f0619.js";import"./index.932444ce.js";import"./index.bd278e5f.js";import"./index.e860cc21.js";import"./index.ba9876ed.js";import"./index.53f3ac38.js";import"./get.476f8b78.js";import"./index.424465cb.js";import"./eagerComputed.2918d49d.js";import"./index.d0de3318.js";import"./_baseIteratee.6836a2b9.js";import"./DeleteOutlined.426a7a56.js";import"./index.21d11494.js";import"./useRefs.c946e576.js";import"./Form.64d057a8.js";import"./Col.bf638c61.js";import"./useFlexGapSupport.ae09cf13.js";import"./useSize.2da926c0.js";import"./transButton.15723253.js";import"./index.dbc537d6.js";import"./index.1311bc71.js";import"./index.59bf1cba.js";import"./uuid.2b29000c.js";import"./download.4c3fda74.js";import"./base64Conver.08b9f4ec.js";import"./index.5d0a6eed.js";import"./index.5796c3bd.js";import"./uniqBy.16bfb902.js";const H=V({name:"SetAccountModal",components:{BasicModal:$,BasicForm:D,Select:j},emits:["success","register"],setup(e,{emit:t}){const o=M(!0),m=M([]),[u,{setFieldsValue:c,updateSchema:l,resetFields:n,validate:s}]=G({labelWidth:100,schemas:I,showActionButtonGroup:!1,actionColOptions:{span:23}}),[a,{setModalProps:p,closeModal:f}]=R(r=>g(this,null,function*(){n(),p({confirmLoading:!1,title:"\u7ED9\u7EC4\u3010"+r.record.name+"("+r.record.sn+")\u3011\u5206\u914D\u7528\u6237"}),o.value=!!(r!=null&&r.isUpdate);const d=yield N();if(d.forEach(i=>{i.label=i.realName+"("+i.username+")",i.value=i.id}),m.value=d,S(o)){let i=r.record.users||[];i=i.map(k=>k.id),c(_(F({},r.record),{users:i}))}}));let E=z(()=>S(o)?"\u4FEE\u6539":"\u65B0\u589E");function C(){return g(this,null,function*(){try{p({confirmLoading:!0});const r=yield s();r.users=r.users.map(d=>({id:d})),r.groupId=r.id,delete r.id,yield P(r),f(),t("success")}finally{p({confirmLoading:!1})}})}return{registerModal:a,registerForm:u,getTitle:E,accountOptions:m,handleSubmit:C}}});function J(e,t,o,m,u,c){const l=B("Select"),n=B("BasicForm"),s=B("BasicModal");return W(),X(s,q(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:b(()=>[w(n,{onRegister:e.registerForm},{users:b(({model:a,field:p})=>[w(l,{value:a[p],"onUpdate:value":f=>a[p]=f,mode:"multiple",style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u7528\u6237","option-label-prop":"label",options:e.accountOptions},null,8,["value","onUpdate:value","options"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var No=T(H,[["render",J]]);export{No as default};