var f=(o,l,r)=>new Promise((c,t)=>{var d=e=>{try{s(r.next(e))}catch(i){t(i)}},a=e=>{try{s(r.throw(e))}catch(i){t(i)}},s=e=>e.done?c(e.value):Promise.resolve(e.value).then(d,a);s((r=r.apply(o,l)).next())});import{az as w,a as y,e as $,c as F,v as L,h as _,aB as u,o as M,k as S,B as g,n as p,r as m,t as k,p as h,C as I,aC as N}from"./index.741c5d36.js";import{B as R,a as b}from"./index.ef1baeca.js";import{B as P}from"./BasicForm.35bf3188.js";import{u as U}from"./useForm.8dec0b63.js";import{u as V}from"./lock.0db9de73.js";import{h as z}from"./header.d801b988.js";import"./useWindowSizeFn.54947215.js";import"./FullscreenOutlined.d8f1076a.js";/* empty css              *//* empty css               */import"./index.d23d5e7f.js";import"./index.d4ff1276.js";import"./Checkbox.2841bc84.js";import"./index.5fb5b3b2.js";import"./index.abe396df.js";import"./index.73bb7fa2.js";import"./index.5fd79f94.js";import"./index.249616b7.js";import"./get.9f08d1a5.js";import"./index.4960ebac.js";import"./eagerComputed.1e0895dc.js";import"./index.46c568bc.js";import"./_baseIteratee.9655ef6b.js";import"./DeleteOutlined.d4d5ebae.js";import"./index.0f0cf900.js";import"./useRefs.31b824e4.js";import"./Form.41e509ff.js";import"./Col.ba611277.js";import"./useFlexGapSupport.28e961f9.js";import"./useSize.aa4022ca.js";import"./transButton.76f8f88c.js";import"./index.7b2c1cea.js";import"./index.847bc6c1.js";import"./index.ae783029.js";import"./uuid.2b29000c.js";import"./download.102dd35e.js";import"./base64Conver.08b9f4ec.js";import"./index.2f746864.js";import"./index.196769f5.js";import"./uniqBy.c3dbbda0.js";const D=y({name:"LockModal",components:{BasicModal:R,BasicForm:P},setup(){const{t:o}=$(),{prefixCls:l}=F("header-lock-modal"),r=L(),c=V(),t=_(()=>{var n;return(n=r.getUserInfo)==null?void 0:n.realName}),[d,{closeModal:a}]=b(),[s,{validateFields:e,resetFields:i}]=U({showActionButtonGroup:!1,schemas:[{field:"password",label:o("layout.header.lockScreenPassword"),colProps:{span:24},component:"InputPassword",required:!0}]});function v(){return f(this,null,function*(){const C=(yield e()).password;a(),c.setLockInfo({isLock:!0,pwd:C}),yield i()})}const B=_(()=>{const{avatar:n}=r.getUserInfo;return n||z});return{t:o,prefixCls:l,getRealName:t,register:d,registerForm:s,handleLock:v,avatar:B}}}),q=["src"];function A(o,l,r,c,t,d){const a=u("BasicForm"),s=u("a-button"),e=u("BasicModal");return M(),S(e,N({footer:null,title:o.t("layout.header.lockScreen")},o.$attrs,{class:o.prefixCls,onRegister:o.register}),{default:g(()=>[p("div",{class:m(`${o.prefixCls}__entry`)},[p("div",{class:m(`${o.prefixCls}__header`)},[p("img",{src:o.avatar,class:m(`${o.prefixCls}__header-img`)},null,10,q),p("p",{class:m(`${o.prefixCls}__header-name`)},k(o.getRealName),3)],2),h(a,{onRegister:o.registerForm},null,8,["onRegister"]),p("div",{class:m(`${o.prefixCls}__footer`)},[h(s,{type:"primary",block:"",class:"mt-2",onClick:o.handleLock},{default:g(()=>[I(k(o.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var So=w(D,[["render",A]]);export{So as default};