import{y as e,aV as a,aW as t,aX as s,aN as l,aY as o,ak as n,aZ as i,a_ as r,a$ as d,b0 as c,b1 as u,b2 as m,r as g,N as f,j as p,t as y,u as x,Z as h,B as b,F,G as S,H as _,v,a2 as L,a9 as w,J as C,b3 as k,a7 as E}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{_ as I,u as T,a as D,L as R,b as j}from"./LoginFormTitle.daa071d1.js";import{c as G,f as M,e as P,h as B}from"./index.10e3b51a.js";var z=e({name:"LoginForm",components:{[a.name]:a,[t.name]:t,Checkbox:s,Button:l,Form:o,FormItem:o.Item,Input:n,Divider:i,LoginFormTitle:I,InputPassword:n.Password,GithubFilled:r,WechatFilled:d,AlipayCircleFilled:c,GoogleCircleFilled:u,TwitterCircleFilled:m},setup(){const{t:e}=P(),{notification:a,createErrorModal:t}=B(),{prefixCls:s}=G("login"),l=M(),{setLoginState:o,getLoginState:n}=T(),{getFormRules:i}=D(),r=g(),d=g(!1),c=g(!1),u=f({account:"10101",password:"888888"}),{validForm:m}=j(r),h=p((()=>x(n)===R.LOGIN));return{t:e,prefixCls:s,formRef:r,formData:u,getFormRules:i,rememberMe:c,handleLogin:function(){return o=this,n=null,i=function*(){const o=yield m();if(o)try{d.value=!0;const t=yield l.login(y({password:o.password,username:o.account,mode:"none"}));t&&a.success({message:e("sys.login.loginSuccessTitle"),description:`${e("sys.login.loginSuccessDesc")}: ${t.realName}`,duration:3})}catch(n){t({title:e("sys.api.errorTip"),content:n.message||e("sys.api.networkExceptionMsg"),getContainer:()=>document.body.querySelector(`.${s}`)||document.body})}finally{d.value=!1}},new Promise(((e,a)=>{var t=e=>{try{l(i.next(e))}catch(t){a(t)}},s=e=>{try{l(i.throw(e))}catch(t){a(t)}},l=a=>a.done?e(a.value):Promise.resolve(a.value).then(t,s);l((i=i.apply(o,n)).next())}));var o,n,i},loading:d,setLoginState:o,LoginStateEnum:R,getShow:h}}});z.render=function(e,a,t,s,l,o){const n=h("LoginFormTitle"),i=h("Input"),r=h("FormItem"),d=h("InputPassword"),c=h("Checkbox"),u=h("ACol"),m=h("Button"),g=h("ARow"),f=h("Divider"),p=h("GithubFilled"),y=h("WechatFilled"),x=h("AlipayCircleFilled"),I=h("GoogleCircleFilled"),T=h("TwitterCircleFilled"),D=h("Form");return b(),F(E,null,[S(v(n,{class:"enter-x"},null,512),[[_,e.getShow]]),S(v(D,{class:"p-4 enter-x",model:e.formData,rules:e.getFormRules,ref:"formRef",onKeypress:k(e.handleLogin,["enter"])},{default:L((()=>[v(r,{name:"account",class:"enter-x"},{default:L((()=>[v(i,{size:"large",value:e.formData.account,"onUpdate:value":a[1]||(a[1]=a=>e.formData.account=a),placeholder:e.t("sys.login.userName")},null,8,["value","placeholder"])])),_:1}),v(r,{name:"password",class:"enter-x"},{default:L((()=>[v(d,{size:"large",visibilityToggle:"",value:e.formData.password,"onUpdate:value":a[2]||(a[2]=a=>e.formData.password=a),placeholder:e.t("sys.login.password")},null,8,["value","placeholder"])])),_:1}),v(g,{class:"enter-x"},{default:L((()=>[v(u,{span:12},{default:L((()=>[v(r,null,{default:L((()=>[v(c,{checked:e.rememberMe,"onUpdate:checked":a[3]||(a[3]=a=>e.rememberMe=a),size:"small"},{default:L((()=>[w(C(e.t("sys.login.rememberMe")),1)])),_:1},8,["checked"])])),_:1})])),_:1}),v(u,{span:12},{default:L((()=>[v(r,{style:{"text-align":"right"}},{default:L((()=>[v(m,{type:"link",size:"small",onClick:a[4]||(a[4]=a=>e.setLoginState(e.LoginStateEnum.RESET_PASSWORD))},{default:L((()=>[w(C(e.t("sys.login.forgetPassword")),1)])),_:1})])),_:1})])),_:1})])),_:1}),v(r,{class:"enter-x"},{default:L((()=>[v(m,{type:"primary",size:"large",block:"",onClick:e.handleLogin,loading:e.loading},{default:L((()=>[w(C(e.t("sys.login.loginButton")),1)])),_:1},8,["onClick","loading"])])),_:1}),v(g,{class:"enter-x"},{default:L((()=>[v(u,{xs:24,md:8},{default:L((()=>[v(m,{block:"",onClick:a[5]||(a[5]=a=>e.setLoginState(e.LoginStateEnum.MOBILE))},{default:L((()=>[w(C(e.t("sys.login.mobileSignInFormTitle")),1)])),_:1})])),_:1}),v(u,{md:8,xs:24,class:"!my-2 md:!my-0 xs:mx-0 md:mx-2"},{default:L((()=>[v(m,{block:"",onClick:a[6]||(a[6]=a=>e.setLoginState(e.LoginStateEnum.QR_CODE))},{default:L((()=>[w(C(e.t("sys.login.qrSignInFormTitle")),1)])),_:1})])),_:1}),v(u,{md:7,xs:24},{default:L((()=>[v(m,{block:"",onClick:a[7]||(a[7]=a=>e.setLoginState(e.LoginStateEnum.REGISTER))},{default:L((()=>[w(C(e.t("sys.login.registerButton")),1)])),_:1})])),_:1})])),_:1}),v(f,{class:"enter-x"},{default:L((()=>[w(C(e.t("sys.login.otherSignIn")),1)])),_:1}),v("div",{class:["flex justify-evenly enter-x",`${e.prefixCls}-sign-in-way`]},[v(p),v(y),v(x),v(I),v(T)],2)])),_:1},8,["model","rules","onKeypress"]),[[_,e.getShow]])],64)};export default z;
