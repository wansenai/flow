var h=(t,r,e)=>new Promise((a,m)=>{var u=n=>{try{o(e.next(n))}catch(s){m(s)}},l=n=>{try{o(e.throw(n))}catch(s){m(s)}},o=n=>n.done?a(n.value):Promise.resolve(n.value).then(u,l);o((e=e.apply(t,r)).next())});import{P as D}from"./index.a1475d48.js";import{eQ as v,h as B,L,a as A,eR as C,v as F,bA as P,bQ as T,aF as c,o as E,i as R,z as i,m as p,B as d,t as b,l as _,E as S}from"./index.1ef32c91.js";import k from"./ActionButtons.d2919386.js";import w from"./FormContainer.953b0519.js";import x from"./BaseActionButtons.e9bd5ea8.js";import M from"./ProcessBackButton.b1d5423d.js";import{S as N}from"./index.ec67ae3a.js";import{T as $}from"./index.0273a40a.js";import I from"./ProcessHeader.0ffcc85f.js";import{c as K,m as V}from"./process.78689059.js";import"./index.543d24de.js";import"./index.77f5c683.js";import"./useSize.a6a316da.js";import"./eagerComputed.0cb4d82e.js";import"./useWindowSizeFn.bdd6b031.js";import"./useContentViewHeight.686f3dd4.js";import"./ArrowLeftOutlined.e6a77d03.js";import"./index.abc98ec8.js";import"./transButton.247ac1dd.js";import"./index.a54b5642.js";import"./index.47cfff6d.js";import"./useFlexGapSupport.0db0d170.js";import"./index.5d552d6b.js";import"./CopyOutlined.cad4027c.js";import"./index.eb1ace44.js";import"./index.d359de6a.js";import"./index.47decea0.js";import"./get.386a6e4e.js";import"./index.dd31a320.js";import"./index.192e4e3c.js";import"./FullscreenOutlined.342c70dd.js";import"./index.5f5cdc49.js";import"./index.50e58482.js";import"./throttleByAnimationFrame.7a634f82.js";import"./Viewer.ca2e1abd.js";import"./ApartmentOutlined.67eadc11.js";import"./index.26a0bf38.js";import"./useRefs.5083d02e.js";import"./index.c8814b75.js";function W(t){let r,e=document.body;if(Reflect.has(t,"target")||Reflect.has(t,"props")){const o=t;r=o.props||{},e=o.target||document.body}else r=t;const a=v(r,void 0,!0);return[()=>{const o=B(e);!o||a.open(o)},()=>{a.close()},o=>{a.setTip(o)}]}const Q=A({components:{ProcessHeader:I,PageWrapper:D,FormContainer:w,ActionButtons:k,BaseActionButtons:x,ProcessBackButton:M,Space:N,Tag:$,Loading:C},setup(){const t=F(),r=F({}),{createMessage:e}=S(),a=P(),{currentRoute:m}=T(),{params:{modelKey:u}}=B(m),[l,o]=W({tip:"\u63D0\u4EA4\u4E2D..."});K({modelKey:u}).then(s=>{r.value=s});function n(){return h(this,null,function*(){l();const s=yield B(t).getFormData(!0),g=yield V({formData:JSON.stringify(s),processDefinitionKey:u}),{data:f}=g;f.success?(e.success(f.msg),setTimeout(()=>{o(),a("/process/launched")},500)):(o(),e.error(f.msg))})}return{modelBaseInfo:r,formContainerRef:t,doLaunch:n}}}),z={class:"pb-2"},G={class:"desc-wrap"};function H(t,r,e,a,m,u){const l=c("ProcessBackButton"),o=c("BaseActionButtons"),n=c("action-buttons"),s=c("Tag"),g=c("Space"),f=c("FormContainer"),y=c("PageWrapper");return E(),R(y,{class:"!mt-4 process-container",loading:!0},{title:i(()=>[p(l),d(" "+b(t.modelBaseInfo.name||"-")+" ",1),p(o)]),extra:i(()=>[p(n,{onDoLaunch:t.doLaunch},null,8,["onDoLaunch"])]),footer:i(()=>[_("div",z,[p(g,null,{default:i(()=>[_("span",null,[d(" \u6D41\u7A0BBP\uFF1A"),p(s,null,{default:i(()=>[d("\u5F20\u4E09")]),_:1})]),_("span",null,[d(" \u5F52\u5C5E\u90E8\u95E8\uFF1A"),p(s,null,{default:i(()=>[d("\u674E\u56DB")]),_:1})])]),_:1})])]),default:i(()=>[_("div",G,[p(f,{ref:"formContainerRef"},null,512)])]),_:1})}var wo=L(Q,[["render",H]]);export{wo as default};
