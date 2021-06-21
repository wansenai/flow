var e=Object.defineProperty,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,t=(a,i,r)=>i in a?e(a,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[i]=r,s=(e,a,i)=>new Promise(((r,t)=>{var s=e=>{try{d(i.next(e))}catch(a){t(a)}},o=e=>{try{d(i.throw(e))}catch(a){t(a)}},d=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,o);d((i=i.apply(e,a)).next())}));import{_ as o,a as d}from"./useModal.0a504584.js";import{_ as l}from"./BasicForm.de2d0bb0.js";import{u as n}from"./useForm.906ec90d.js";import{k as m,bV as c,bu as u,by as p,r as f,u as g,f as b,l as y,m as j,K as v,o as x,n as w,q as h,N as R,x as P}from"./vendor.9d9efc92.js";import"./uuid.c53863e7.js";/* empty css              */import{g as F}from"./index.1f477f84.js";import{a as M}from"./account.data.be685cbd.js";import{c as O,s as N}from"./account.7500948a.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.ed12ce5f.js";/* empty css              *//* empty css              *//* empty css              */import"./download.d21b7c84.js";import"./StrengthMeter.f927a9c9.js";var U=m({name:"AccountModal",components:{BasicModal:o,BasicForm:l,PlusOutlined:c,LoadingOutlined:u,Upload:p},emits:["success","register"],setup(e,{emit:o}){const l=f(!0),m=f(""),{createMessage:c}=F(),[u,{setFieldsValue:p,updateSchema:y,resetFields:j,validate:v}]=n({labelWidth:100,schemas:M,showActionButtonGroup:!1,actionColOptions:{span:23}}),x=e=>[{trigger:"blur",validator:(a,i)=>i?O({id:e.id,field:e.field,fieldValue:i,fieldName:e.fieldName}).then((a=>a?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}],[w,{setModalProps:h,closeModal:R}]=d((e=>s(this,null,(function*(){yield j(),h({confirmLoading:!1}),l.value=!!(null==e?void 0:e.isUpdate);let s=e.record;yield y([{field:"username",dynamicRules:()=>[{required:!0,whitespace:!0,message:"用户名不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:30,message:"字符长度不能大于30！"},...x({id:g(l)&&s&&s.id||"",field:"username",fieldValue:"",fieldName:"用户名"})]},{field:"userNo",dynamicRules:()=>[{required:!0,whitespace:!0,message:"工号不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:32,message:"字符长度不能大于32！"},...x({id:g(l)&&s&&s.id||"",field:"userNo",fieldValue:"",fieldName:"工号"})]},{field:"mobile",dynamicRules:()=>[{required:!0,whitespace:!0,message:"手机不能为空！"},{pattern:new RegExp("^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$"),type:"string",message:"请输入正确的手机号！"},{max:32,message:"字符长度不能大于32！"},...x({id:g(l)&&s&&s.id||"",field:"mobile",fieldValue:"",fieldName:"手机号"})]},{field:"email",dynamicRules:()=>[{pattern:new RegExp("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$"),type:"string",message:"请输入正确的邮箱地址！"},{max:256,message:"字符长度不能大于256！"},...x({id:g(l)&&s&&s.id||"",field:"email",fieldValue:"",fieldName:"邮箱"})]}]),m.value=e.record.image,p(((e,s)=>{for(var o in s||(s={}))i.call(s,o)&&t(e,o,s[o]);if(a)for(var o of a(s))r.call(s,o)&&t(e,o,s[o]);return e})({},e.record))})))),P=b((()=>g(l)?"修改":"新增"));return{registerModal:w,registerForm:u,getTitle:P,imageUrl:m,handleSubmit:function(){return s(this,null,(function*(){try{h({confirmLoading:!0});const e=yield v();e.image=m.value,yield N(e),R(),o("success")}finally{h({confirmLoading:!1})}}))},beforeUpload:e=>{if(!("image/jpeg"===e.type||"image/png"===e.type))return c.error("只允许上传JPG图片！"),!1;return e.size/1024/1024<2?(((e,a)=>{const i=new FileReader;i.addEventListener("load",(()=>a(i.result))),i.readAsDataURL(e)})(e,(e=>{m.value=e})),!1):(c.error("图片不能大于2MB！"),!1)}}}});const _=P();y("data-v-722d420c");const B={key:1},V=h("div",{class:"ant-upload-text"},"上传头像",-1);j();const E=_(((e,a,i,r,t,s)=>{const o=v("plus-outlined"),d=v("Upload"),l=v("BasicForm"),n=v("BasicModal");return x(),w(n,R(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:_((()=>[h(l,{onRegister:e.registerForm,class:"accountForm"},{headImg:_((({model:a,field:i})=>[h(d,{style:{margin:"auto"},name:"avatar","list-type":"picture-card",class:"avatar-uploader","show-upload-list":!1,"before-upload":e.beforeUpload,multiple:!1},{default:_((()=>[e.imageUrl?(x(),w("img",{key:0,src:e.imageUrl,alt:"avatar"},null,8,["src"])):(x(),w("div",B,[h(o),V]))])),_:1},8,["before-upload"])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])}));U.render=E,U.__scopeId="data-v-722d420c";export default U;
