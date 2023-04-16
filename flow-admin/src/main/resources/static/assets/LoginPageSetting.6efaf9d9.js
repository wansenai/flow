var B=(s,l,u)=>new Promise((f,d)=>{var g=r=>{try{n(u.next(r))}catch(o){d(o)}},c=r=>{try{n(u.throw(r))}catch(o){d(o)}},n=r=>r.done?f(r.value):Promise.resolve(r.value).then(g,c);n((u=u.apply(s,l)).next())});import{az as C,a as E,br as y,cE as U,D as A,v as w,w as L,O as k,h as P,aB as i,o as _,k as S,B as t,p as e,n as a,i as v,C as M,G as D}from"./index.bbfb8c5d.js";/* empty css               */import{U as I}from"./index.d0de3318.js";import"./index.21d11494.js";import{B as R}from"./BasicForm.bc1bc2ec.js";import{u as O}from"./useForm.35a2e1b5.js";import{a as V}from"./index.954f6b75.js";import{h as $}from"./header.d801b988.js";import{a as x}from"./account.6765451b.js";import{b as G}from"./data.2a2e7f44.js";import{u as J}from"./upload.3d2578b9.js";import{_ as h}from"./tooltip-app-name.12932009.js";import{P as N}from"./PlusOutlined.72af47df.js";import{R as z,C as j}from"./index.5796c3bd.js";import"./_baseIteratee.6836a2b9.js";import"./get.476f8b78.js";import"./DeleteOutlined.426a7a56.js";import"./Form.64d057a8.js";import"./Col.bf638c61.js";import"./useFlexGapSupport.ae09cf13.js";import"./useSize.2da926c0.js";import"./useRefs.c946e576.js";/* empty css              */import"./index.eb776706.js";import"./index.08f5b20b.js";import"./Checkbox.6b0f0619.js";import"./index.932444ce.js";import"./index.bd278e5f.js";import"./index.e860cc21.js";import"./index.ba9876ed.js";import"./index.53f3ac38.js";import"./index.424465cb.js";import"./eagerComputed.2918d49d.js";import"./transButton.15723253.js";import"./index.dbc537d6.js";import"./index.56ac9033.js";import"./useWindowSizeFn.daa22200.js";import"./FullscreenOutlined.7b1f5985.js";import"./index.1311bc71.js";import"./index.59bf1cba.js";import"./uuid.2b29000c.js";import"./download.4c3fda74.js";import"./base64Conver.08b9f4ec.js";import"./index.5d0a6eed.js";import"./uniqBy.16bfb902.js";import"./index.8643b1cc.js";import"./index.40637d17.js";const T=E({components:{BasicForm:R,PlusOutlined:N,Upload:I,Popover:y,CollapseContainer:U,Button:A,ARow:z,ACol:j,CropperAvatar:V},setup(){const{createMessage:s}=D(),l=w(),u=L(),[f,{setFieldsValue:d}]=O({labelWidth:120,schemas:G,showActionButtonGroup:!1});k(()=>B(this,null,function*(){const o=yield x();d(o)}));const g=P(()=>{const{avatar:o}=l.getUserInfo;return o||$});function c(o){const p=l.getUserInfo;p.avatar=o,l.setUserInfo(p)}const n=(o,p)=>{const m=new FileReader;m.addEventListener("load",()=>p(m.result)),m.readAsDataURL(o)};return{avatar:g,register:f,beforeUpload:o=>o.type==="image/jpeg"||o.type==="image/png"?o.size/1024/1024<2?(n(o,F=>{imageUrl.value=F}),!1):(s.error("\u56FE\u7247\u4E0D\u80FD\u5927\u4E8E2MB\uFF01"),!1):(s.error("\u53EA\u5141\u8BB8\u4E0A\u4F20JPG\u56FE\u7247\uFF01"),!1),appLogo:u,uploadApi:J,updateAvatar:c,handleSubmit:()=>{s.success("\u66F4\u65B0\u6210\u529F\uFF01")}}}}),W=a("div",{class:"tooltip-popover-content"},[a("img",{src:h})],-1),q=a("div",{class:"mb-2 mt-4"},"\u767B\u5F55\u9875\u9762\u6807\u9898",-1),H=a("div",{class:"tooltip-popover-content"},[a("img",{src:h})],-1),K=a("div",{class:"mb-2 mt-4"},"\u767B\u5F55\u9875\u9762\u526F\u6807\u9898",-1),Q=a("div",{class:"tooltip-popover-content"},[a("img",{src:h})],-1),X={class:"change-logo"},Y=a("div",{class:"mb-2 mt-4"},"\u767B\u5F55\u9875\u56FE\u7247",-1),Z=["src"],oo={key:1},to=a("div",{class:"ant-upload-text"},"\u4E0A\u4F20",-1),eo=a("div",{class:"tooltip-popover-content"},[a("img",{src:h})],-1),ao={class:"change-logo"},so=a("div",{class:"mb-2 mt-4"},"\u767B\u5F55\u9875\u9762\u80CC\u666F\u56FE",-1),ro=["src"],no={key:1},po=a("div",{class:"ant-upload-text"},"\u4E0A\u4F20",-1);function io(s,l,u,f,d,g){const c=i("a-input"),n=i("a-col"),r=i("Popover"),o=i("plus-outlined"),p=i("Upload"),m=i("a-row"),F=i("Button"),b=i("CollapseContainer");return _(),S(b,{title:"\u767B\u5F55\u9875\u914D\u7F6E",canExpan:!1},{default:t(()=>[e(m,{gutter:24},{default:t(()=>[e(r,{placement:"right"},{content:t(()=>[W]),default:t(()=>[e(n,{span:13},{default:t(()=>[q,e(c)]),_:1})]),_:1}),e(r,{placement:"right"},{content:t(()=>[H]),default:t(()=>[e(n,{span:13},{default:t(()=>[K,e(c)]),_:1})]),_:1}),e(r,{placement:"right"},{content:t(()=>[Q]),default:t(()=>[e(n,{span:13},{default:t(()=>[a("div",X,[Y,e(p,{style:{margin:"auto"},name:"avatar","list-type":"picture-card",class:"login-box-uploader","show-upload-list":!1,"before-upload":s.beforeUpload,multiple:!1},{default:t(()=>[s.appLogo?(_(),v("img",{key:0,src:s.appLogo,alt:"avatar"},null,8,Z)):(_(),v("div",oo,[e(o),to]))]),_:1},8,["before-upload"])])]),_:1})]),_:1}),e(r,{placement:"right"},{content:t(()=>[eo]),default:t(()=>[e(n,{span:13},{default:t(()=>[a("div",ao,[so,e(p,{style:{margin:"auto"},name:"avatar","list-type":"picture-card",class:"login-bg-uploader","show-upload-list":!1,"before-upload":s.beforeUpload,multiple:!1},{default:t(()=>[s.appLogo?(_(),v("img",{key:0,src:s.appLogo,alt:"avatar"},null,8,ro)):(_(),v("div",no,[e(o),po]))]),_:1},8,["before-upload"])])]),_:1})]),_:1})]),_:1}),e(F,{type:"primary",onClick:s.handleSubmit},{default:t(()=>[M(" \u66F4\u65B0\u57FA\u672C\u4FE1\u606F ")]),_:1},8,["onClick"])]),_:1})}var st=C(T,[["render",io]]);export{st as default};