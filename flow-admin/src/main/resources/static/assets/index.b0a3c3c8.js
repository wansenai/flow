import{P as e}from"./index.ee54ff18.js";import{_ as s}from"./BasicForm.d6bc90d8.js";import{u as r}from"./useForm.1b895cf0.js";import{y as t,Z as i,B as o,F as n,a2 as a,v as d,a9 as c}from"./vendor.880b4c6c.js";import"./index.10e3b51a.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useWindowSizeFn.564cf32e.js";import"./useContentViewHeight.17c92794.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.981ceacd.js";/* empty css              *//* empty css              *//* empty css              */import"./index.116df12f.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.db26d4fe.js";import"./base64Conver.bb012c73.js";import"./index.f38aca4b.js";const m=[{field:"passwordOld",label:"当前密码",component:"InputPassword",required:!0},{field:"passwordNew",label:"新密码",component:"StrengthMeter",componentProps:{placeholder:"新密码"},rules:[{required:!0,message:"请输入新密码"}]},{field:"confirmPassword",label:"确认密码",component:"InputPassword",dynamicRules:({values:e})=>[{required:!0,validator:(s,r)=>r?r!==e.passwordNew?Promise.reject("两次输入的密码不一致!"):Promise.resolve():Promise.reject("不能为空")}]}];var l=t({name:"ChangePassword",components:{BasicForm:s,PageWrapper:e},setup(){const[e,{validate:s,resetFields:t}]=r({size:"large",labelWidth:100,showActionButtonGroup:!1,schemas:m});return{register:e,resetFields:t,handleSubmit:function(){return e=this,r=null,t=function*(){try{const e=yield s(),{passwordOld:r,passwordNew:t}=e}catch(e){}},new Promise(((s,i)=>{var o=e=>{try{a(t.next(e))}catch(s){i(s)}},n=e=>{try{a(t.throw(e))}catch(s){i(s)}},a=e=>e.done?s(e.value):Promise.resolve(e.value).then(o,n);a((t=t.apply(e,r)).next())}));var e,r,t}}}});const p={class:"py-8 bg-white flex flex-col justify-center items-center"},f={class:"flex justify-center"},u=c(" 重置 "),j=c(" 确认 ");l.render=function(e,s,r,t,c,m){const l=i("BasicForm"),b=i("a-button"),x=i("PageWrapper");return o(),n(x,{title:"修改当前用户密码",content:"修改成功后会自动退出当前登录！"},{default:a((()=>[d("div",p,[d(l,{onRegister:e.register},null,8,["onRegister"]),d("div",f,[d(b,{onClick:e.resetFields},{default:a((()=>[u])),_:1},8,["onClick"]),d(b,{class:"!ml-4",type:"primary",onClick:e.handleSubmit},{default:a((()=>[j])),_:1},8,["onClick"])])])])),_:1})};export default l;
