var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,r=(e,r)=>{for(var n in r||(r={}))a.call(r,n)&&l(e,n,r[n]);if(t)for(var n of t(r))o.call(r,n)&&l(e,n,r[n]);return e},n=(e,t,a)=>new Promise(((o,l)=>{var r=e=>{try{d(a.next(e))}catch(t){l(t)}},n=e=>{try{d(a.throw(e))}catch(t){l(t)}},d=e=>e.done?o(e.value):Promise.resolve(e.value).then(r,n);d((a=a.apply(e,t)).next())}));import{_ as d,a as s}from"./useModal.9d70781f.js";import{_ as i}from"./BasicForm.312985a0.js";import{u as p}from"./useForm.a3596aad.js";import{a1 as m,b2 as c,k as u,bV as f,bu as g,by as b,r as y,u as h,f as P,K as I,o as v,n as w,Q as x,q as j,N as R}from"./vendor.bc3b2d68.js";/* empty css              */import{az as F,aO as N,g as O}from"./index.f8d8fadd.js";import{a as C}from"./dept.050d01b8.js";import{g as M}from"./company.792f147b.js";import{c as _,e as k}from"./personal.7f43d641.js";import"./uuid.c53863e7.js";/* empty css              */import{a as q}from"./jobGrade.5334b110.js";import{g as D}from"./positionInfo.2c45b784.js";const S=[{title:"姓名",dataIndex:"name",width:120,align:"left",slots:{customRender:"nameRender"}},{title:"工号",dataIndex:"code",width:100,align:"left"},{title:"状态",dataIndex:"status",width:60,customRender:({record:e})=>{const t=1==~~e.status,a=t?"在职":"离职";return m(c,{color:t?"green":"red"},(()=>a))}},{title:"邮箱",dataIndex:"email",width:120,align:"left"},{title:"手机",dataIndex:"mobile",width:120,align:"left"},{title:"部门",dataIndex:"deptName",width:120,align:"left"},{title:"公司",dataIndex:"companyName",width:120,align:"left"},{title:"上级领导",dataIndex:"leaderName",width:140,align:"left",customRender:({record:e})=>e.leaderCode?`${e.leaderName||""}[${e.leaderCode}]`:"未设置"},{title:"角色",dataIndex:"roles",width:300,align:"left",slots:{customRender:"rolesRender"}},{title:"离职日期",dataIndex:"leaveDate",width:100,customRender:({text:e})=>e?F(e):""},{title:"创建时间",dataIndex:"createTime",width:130,customRender:({text:e})=>e?N(e):""}],B=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入姓名/工号/手机/邮箱"},labelWidth:60,colProps:{span:8,lg:{span:8,offset:0},sm:{span:14,offset:0},xs:{span:16,offset:0}}}],T=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"姓名",component:"Input",required:!0,colProps:{span:9},rules:[{required:!0,whitespace:!0,message:"姓名不能为空！"},{max:20,message:"字符长度不能大于20！"}]},{field:"code",label:"工号",component:"Input",required:!0,colProps:{span:9}},{field:"headImg",label:"",component:"Input",slot:"headImg",colProps:{style:"margin: auto;position: absolute;right: 0;",span:5}},{field:"sex",label:"性别",component:"RadioButtonGroup",defaultValue:1,componentProps:{options:[{label:"男",value:1},{label:"女",value:2}]}},{field:"jobGradeCode",label:"职级",component:"TreeSelect",colProps:{span:9},componentProps:{treeNodeFilterProp:"showName",replaceFields:{title:"showName",key:"id",value:"id"},getPopupContainer:()=>document.body}},{field:"positionCode",label:"岗位",component:"TreeSelect",colProps:{span:9},componentProps:{treeNodeFilterProp:"showName",replaceFields:{title:"showName",key:"id",value:"id"},getPopupContainer:()=>document.body}},{field:"companyId",label:"所属公司",component:"TreeSelect",colProps:{span:9},componentProps:{treeNodeFilterProp:"cname",replaceFields:{title:"cname",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"deptId",label:"所属部门",component:"TreeSelect",colProps:{span:9},componentProps:{treeNodeFilterProp:"name",replaceFields:{title:"name",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{label:"手机",field:"mobile",component:"Input",required:!0,colProps:{span:9},rules:[{required:!0,whitespace:!0,message:"手机不能为空！"},{pattern:new RegExp("^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$"),type:"string",message:"请输入正确的手机号！"},{max:32,message:"字符长度不能大于32！"}]},{label:"邮箱",field:"email",component:"Input",colProps:{span:9},rules:[{pattern:new RegExp("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$"),type:"string",message:"请输入正确的邮箱地址！"},{max:256,message:"字符长度不能大于256！"}]},{field:"status",label:"在职状态",component:"RadioButtonGroup",defaultValue:1,componentProps:{options:[{label:"在职",value:1},{label:"离职",value:0}]}},{label:"地址",field:"address",component:"InputTextArea",rules:[{max:400,message:"字符长度不能大于400！"}]}];var U=u({name:"PersonalModal",components:{BasicModal:d,BasicForm:i,PlusOutlined:f,LoadingOutlined:g,Upload:b},emits:["success","register"],setup(e,{emit:t}){const a=y(!0),o=y(""),{createMessage:l}=O(),[d,{setFieldsValue:i,updateSchema:m,resetFields:c,validate:u}]=p({labelWidth:100,schemas:T,showActionButtonGroup:!1,actionColOptions:{span:23}}),[f,{setModalProps:g,closeModal:b,changeLoading:I}]=s((e=>n(this,null,(function*(){I(!0),c(),g({confirmLoading:!1}),a.value=!!(null==e?void 0:e.isUpdate);const t=yield M(),l=yield q(),n=yield D();let d=e.record;if(yield m([{field:"jobGradeCode",componentProps:{treeData:l}},{field:"positionCode",componentProps:{treeData:n}},{field:"companyId",componentProps:{treeData:t,onChange:e=>{m([{field:"deptId",componentProps:{treeData:[]}}]),i({deptId:""}),e&&C({companyId:e}).then((e=>{m([{field:"deptId",componentProps:{treeData:e}}])}))}}},{field:"code",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"工号不能为空！"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"请输入英文或数字！"},{max:32,message:"字符长度不能大于32！"},...(e={id:h(a)&&d&&d.id||"",field:"code",fieldValue:"",fieldName:"工号"},[{trigger:"blur",validator:(t,a)=>a?_({id:e.id,field:e.field,fieldValue:a,fieldName:e.fieldName}).then((t=>t?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}}]),h(a)){const t=yield C({companyId:e.record.companyId});m([{field:"deptId",componentProps:{treeData:t}}]),i(r({},e.record)),o.value=e.record.headImg}else{if(d.companyId){const e=yield C({companyId:d.companyId});m([{field:"deptId",componentProps:{treeData:e}}]),i(r({},d))}o.value=""}I(!1)})))),v=P((()=>h(a)?"编辑":"新增"));return{registerModal:f,registerForm:d,getTitle:v,imageUrl:o,handleSubmit:function(){return n(this,null,(function*(){try{g({confirmLoading:!0});const e=yield u();e.headImg=o.value,yield k(e),b(),t("success")}finally{g({confirmLoading:!1})}}))},beforeUpload:e=>{if(!("image/jpeg"===e.type||"image/png"===e.type))return l.error("只允许上传JPG图片！"),!1;return e.size/1024/1024<2?(((e,t)=>{const a=new FileReader;a.addEventListener("load",(()=>t(a.result))),a.readAsDataURL(e)})(e,(e=>{o.value=e})),!1):(l.error("图片不能大于2MB！"),!1)}}}});const G={key:1},L=j("div",{class:"ant-upload-text"},"上传头像",-1);U.render=function(e,t,a,o,l,r){const n=I("plus-outlined"),d=I("Upload"),s=I("BasicForm"),i=I("BasicModal");return v(),w(i,R(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:x((()=>[j(s,{onRegister:e.registerForm},{headImg:x((({model:t,field:a})=>[j(d,{style:{margin:"auto"},name:"avatar","list-type":"picture-card",class:"avatar-uploader","show-upload-list":!1,"before-upload":e.beforeUpload,multiple:!1},{default:x((()=>[e.imageUrl?(v(),w("img",{key:0,src:e.imageUrl,alt:"avatar"},null,8,["src"])):(v(),w("div",G,[j(n),L]))])),_:1},8,["before-upload"])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:U});export{V as P,U as _,S as c,B as s};
