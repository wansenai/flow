import{_ as e,u as a,a as o,b as s,L as t}from"./LoginFormTitle.2d1a2bbe.js";import{k as l,aI as r,aS as n,ac as i,aR as d,r as m,A as c,f as u,a as p,K as f,o as g,n as h,q as v,P as w,X as y,s as x,S as k,W as b}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              */import{_ as D}from"./StrengthMeter.30de6605.js";import{_ as I}from"./CountdownInput.8522e4d7.js";import{d as _}from"./index.ee676e78.js";var F=l({name:"RegisterPasswordForm",components:{Button:r,Form:n,FormItem:n.Item,Input:i,InputPassword:i.Password,Checkbox:d,StrengthMeter:D,CountdownInput:I,LoginFormTitle:e},setup(){const{t:e}=_(),{handleBackLogin:l,getLoginState:r}=a(),n=m(),i=m(!1),d=c({account:"",password:"",confirmPassword:"",mobile:"",sms:"",policy:!1}),{getFormRules:f}=o(d),{validForm:g}=s(n);return{t:e,formRef:n,formData:d,getFormRules:f,handleRegister:function(){return e=this,a=null,o=function*(){yield g()},new Promise(((s,t)=>{var l=e=>{try{n(o.next(e))}catch(a){t(a)}},r=e=>{try{n(o.throw(e))}catch(a){t(a)}},n=e=>e.done?s(e.value):Promise.resolve(e.value).then(l,r);n((o=o.apply(e,a)).next())}));var e,a,o},loading:i,handleBackLogin:l,getShow:u((()=>p(r)===t.REGISTER))}}});F.render=function(e,a,o,s,t,l){const r=f("LoginFormTitle"),n=f("Input"),i=f("FormItem"),d=f("CountdownInput"),m=f("StrengthMeter"),c=f("InputPassword"),u=f("Checkbox"),p=f("Button"),D=f("Form");return e.getShow?(g(),h(k,{key:0},[v(r,{class:"enter-x"}),v(D,{class:"p-4 enter-x",model:e.formData,rules:e.getFormRules,ref:"formRef"},{default:w((()=>[v(i,{name:"account",class:"enter-x"},{default:w((()=>[v(n,{size:"large",value:e.formData.account,"onUpdate:value":a[1]||(a[1]=a=>e.formData.account=a),placeholder:e.t("sys.login.userName")},null,8,["value","placeholder"])])),_:1}),v(i,{name:"mobile",class:"enter-x"},{default:w((()=>[v(n,{size:"large",value:e.formData.mobile,"onUpdate:value":a[2]||(a[2]=a=>e.formData.mobile=a),placeholder:e.t("sys.login.mobile")},null,8,["value","placeholder"])])),_:1}),v(i,{name:"sms",class:"enter-x"},{default:w((()=>[v(d,{size:"large",value:e.formData.sms,"onUpdate:value":a[3]||(a[3]=a=>e.formData.sms=a),placeholder:e.t("sys.login.smsCode")},null,8,["value","placeholder"])])),_:1}),v(i,{name:"password",class:"enter-x"},{default:w((()=>[v(m,{size:"large",value:e.formData.password,"onUpdate:value":a[4]||(a[4]=a=>e.formData.password=a),placeholder:e.t("sys.login.password")},null,8,["value","placeholder"])])),_:1}),v(i,{name:"confirmPassword",class:"enter-x"},{default:w((()=>[v(c,{size:"large",visibilityToggle:"",value:e.formData.confirmPassword,"onUpdate:value":a[5]||(a[5]=a=>e.formData.confirmPassword=a),placeholder:e.t("sys.login.confirmPassword")},null,8,["value","placeholder"])])),_:1}),v(i,{class:"enter-x",name:"policy"},{default:w((()=>[v(u,{checked:e.formData.policy,"onUpdate:checked":a[6]||(a[6]=a=>e.formData.policy=a),size:"small"},{default:w((()=>[y(x(e.t("sys.login.policy")),1)])),_:1},8,["checked"])])),_:1}),v(p,{type:"primary",class:"enter-x",size:"large",block:"",onClick:e.handleRegister,loading:e.loading},{default:w((()=>[y(x(e.t("sys.login.registerButton")),1)])),_:1},8,["onClick","loading"]),v(p,{size:"large",block:"",class:"enter-x mt-4",onClick:e.handleBackLogin},{default:w((()=>[y(x(e.t("sys.login.backSignIn")),1)])),_:1},8,["onClick"])])),_:1},8,["model","rules"])],64)):b("",!0)};export default F;
