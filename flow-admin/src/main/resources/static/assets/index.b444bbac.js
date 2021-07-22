var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(t,l,n)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[l]=n,s=(e,t)=>{for(var l in t||(t={}))o.call(t,l)&&r(e,l,t[l]);if(n)for(var l of n(t))a.call(t,l)&&r(e,l,t[l]);return e},i=(e,n)=>t(e,l(n)),c=(e,t,l)=>new Promise(((n,o)=>{var a=e=>{try{s(l.next(e))}catch(t){o(t)}},r=e=>{try{s(l.throw(e))}catch(t){o(t)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(a,r);s((l=l.apply(e,t)).next())}));import{e as u,m as d,ax as p,ae as f,C as g,D as h,V as m,c as b,ay as y,i as v,av as C,ah as H,au as M,w as S}from"./index.0bb7f928.js";import{a5 as k,u as F,j as O,G as B,n as P,bo as w,a9 as x,r as T,bL as j,i as W,C as $,I as N,a0 as R,J as E,K as A,at as V,o as I,m as L,Q as _,w as D,R as q,bc as z,bd as X,bM as Y,V as G,X as J,N as K,Y as Q,q as U,a6 as Z,ao as ee,a2 as te,b1 as le,ah as ne,z as oe,t as ae,b0 as re,_ as se}from"./vendor.686fd1d4.js";import{u as ie}from"./useWindowSizeFn.d82e06bf.js";const{t:ce}=u(),ue={visible:{type:Boolean},scrollTop:{type:Boolean,default:!0},height:{type:Number},minHeight:{type:Number},draggable:{type:Boolean,default:!0},centered:{type:Boolean},cancelText:{type:String,default:ce("common.cancelText")},okText:{type:String,default:ce("common.okText")},closeFunc:Function},de=Object.assign({},ue,{defaultFullscreen:{type:Boolean},canFullscreen:{type:Boolean,default:!0},wrapperFooterOffset:{type:Number,default:0},helpMessage:[String,Array],useWrapper:{type:Boolean,default:!0},loading:{type:Boolean},loadingTip:{type:String},showCancelBtn:{type:Boolean,default:!0},showOkBtn:{type:Boolean,default:!0},wrapperProps:Object,afterClose:Function,bodyStyle:Object,closable:{type:Boolean,default:!0},closeIcon:Object,confirmLoading:{type:Boolean},destroyOnClose:{type:Boolean},footer:Object,getContainer:Function,mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},maskStyle:Object,okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,title:{type:String},visible:{type:Boolean},width:[String,Number],wrapClassName:{type:String},zIndex:{type:Number}});function pe(e){const t=(e,t)=>getComputedStyle(e)[t],l=l=>{if(!l)return;l.setAttribute("data-drag",F(e.draggable));const n=l.querySelector(".ant-modal-header"),o=l.querySelector(".ant-modal");n&&o&&F(e.draggable)&&(n.style.cursor="move",n.onmousedown=e=>{if(!e)return;const l=e.clientX,n=e.clientY,a=document.body.clientWidth,r=document.documentElement.clientHeight,s=o.offsetWidth,i=o.offsetHeight,c=o.offsetLeft,u=a-o.offsetLeft-s,d=o.offsetTop,p=r-o.offsetTop-i,f=t(o,"left"),g=t(o,"top");let h=+f,m=+g;f.includes("%")?(h=+document.body.clientWidth*(+f.replace(/%/g,"")/100),m=+document.body.clientHeight*(+g.replace(/%/g,"")/100)):(h=+f.replace(/px/g,""),m=+g.replace(/px/g,"")),document.onmousemove=function(e){let t=e.clientX-l,a=e.clientY-n;-t>c?t=-c:t>u&&(t=u),-a>d?a=-d:a>p&&(a=p),o.style.cssText+=`;left:${t+h}px;top:${a+m}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})};k((()=>{F(e.visible)&&F(e.draggable)&&d((()=>{(()=>{const n=document.querySelectorAll(".ant-modal-wrap");for(const o of Array.from(n)){if(!o)continue;const n=t(o,"display"),a=o.getAttribute("data-drag");"none"!==n&&(null===a||F(e.destroyOnClose))&&l(o)}})()}),30)}))}var fe=O({name:"Modal",inheritAttrs:!1,props:de,setup(e,{slots:t}){const{visible:l,draggable:n,destroyOnClose:o}=B(e),a=f();return pe({visible:l,destroyOnClose:o,draggable:n}),()=>{let l;const n=s(s({},F(a)),e);return P(x,n,"function"==typeof(o=l=p(t))||"[object Object]"===Object.prototype.toString.call(o)&&!w(o)?l:{default:()=>[l]});var o}}});const ge=Symbol();function he(){return h(ge)}var me=O({name:"ModalWrapper",components:{ScrollContainer:m},inheritAttrs:!1,props:{loading:{type:Boolean},useWrapper:{type:Boolean,default:!0},modalHeaderHeight:{type:Number,default:57},modalFooterHeight:{type:Number,default:74},minHeight:{type:Number,default:200},height:{type:Number},footerOffset:{type:Number,default:0},visible:{type:Boolean},fullScreen:{type:Boolean},loadingTip:{type:String}},emits:["height-change","ext-height"],setup(e,{emit:t}){const l=T(null),n=T(null),o=T(0),a=T(0);let r=0;ie(i.bind(null,!1)),j(n,(()=>{i()}),{attributes:!0,subtree:!0}),g({redoModalHeight:i},ge);const s=W((()=>({minHeight:`${e.minHeight}px`,[e.fullScreen?"height":"maxHeight"]:`${F(o)}px`})));function i(){return c(this,null,(function*(){if(!e.visible)return;const a=F(l);if(!a)return;const s=a.$el.parentElement;if(s){s.style.padding="0",yield E();try{const l=s.parentElement&&s.parentElement.parentElement;if(!l)return;const a=getComputedStyle(l).top,i=Number.parseInt(a);let c=window.innerHeight-2*i+(e.footerOffset||0)-e.modalFooterHeight-e.modalHeaderHeight;i<40&&(c-=26),yield E();const u=F(n);if(!u)return;yield E(),r=u.scrollHeight,e.fullScreen?o.value=window.innerHeight-e.modalFooterHeight-e.modalHeaderHeight-28:o.value=e.height?e.height:r>c?c:r,t("height-change",F(o))}catch(i){}}}))}return k((()=>{e.useWrapper&&i()})),$((()=>e.fullScreen),(e=>{i(),e?a.value=o.value:o.value=a.value})),N((()=>{const{modalHeaderHeight:l,modalFooterHeight:n}=e;t("ext-height",l+n)})),R((()=>{})),{wrapperRef:l,spinRef:n,spinStyle:s,scrollTop:function(){return c(this,null,(function*(){E((()=>{var e;const t=F(l);t&&(null==(e=null==t?void 0:t.scrollTo)||e.call(t,0))}))}))},setModalHeight:i}}});me.render=function(e,t,l,n,o,a){const r=A("ScrollContainer"),s=V("loading");return I(),L(r,{ref:"wrapperRef"},{default:_((()=>[D(P("div",{ref:"spinRef",style:e.spinStyle,"loading-tip":e.loadingTip},[q(e.$slots,"default")],12,["loading-tip"]),[[s,e.loading]])])),_:3},512)};var be=O({name:"ModalClose",components:{FullscreenExitOutlined:z,FullscreenOutlined:X,CloseOutlined:Y},props:{canFullscreen:{type:Boolean,default:!0},fullScreen:{type:Boolean}},emits:["cancel","fullscreen"],setup(e,{emit:t}){const{prefixCls:l}=b("basic-modal-close");return{getClass:W((()=>[l,`${l}--custom`,{[`${l}--can-full`]:e.canFullscreen}])),prefixCls:l,handleCancel:function(e){t("cancel",e)},handleFullScreen:function(e){null==e||e.stopPropagation(),null==e||e.preventDefault(),t("fullscreen")}}}});be.render=function(e,t,l,n,o,a){const r=A("FullscreenExitOutlined"),s=A("FullscreenOutlined"),i=A("CloseOutlined");return I(),L("div",{class:e.getClass},[e.canFullscreen?(I(),L(G,{key:0},[e.fullScreen?(I(),L(r,{key:0,role:"full",onClick:e.handleFullScreen},null,8,["onClick"])):(I(),L(s,{key:1,role:"close",onClick:e.handleFullScreen},null,8,["onClick"]))],64)):J("",!0),P(i,{onClick:e.handleCancel},null,8,["onClick"])],2)};var ye=O({name:"BasicModalFooter",props:de,emits:["ok","cancel"],setup:(e,{emit:t})=>({handleOk:function(e){t("ok",e)},handleCancel:function(e){t("cancel",e)}})});ye.render=function(e,t,l,n,o,a){const r=A("a-button");return I(),L("div",null,[q(e.$slots,"insertFooter"),e.showCancelBtn?(I(),L(r,K({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:_((()=>[Q(U(e.cancelText),1)])),_:1},16,["onClick"])):J("",!0),q(e.$slots,"centerFooter"),e.showOkBtn?(I(),L(r,K({key:1,type:e.okType,onClick:e.handleOk,loading:e.confirmLoading},e.okButtonProps),{default:_((()=>[Q(U(e.okText),1)])),_:1},16,["type","onClick","loading"])):J("",!0),q(e.$slots,"appendFooter")])};var ve=O({name:"BasicModalHeader",components:{BasicTitle:y},props:{helpMessage:{type:[String,Array]},title:{type:String}}});ve.render=function(e,t,l,n,o,a){const r=A("BasicTitle");return I(),L(r,{helpMessage:e.helpMessage},{default:_((()=>[Q(U(e.title),1)])),_:1},8,["helpMessage"])};var Ce=O({name:"BasicModal",components:{Modal:fe,ModalWrapper:me,ModalClose:be,ModalFooter:ye,ModalHeader:ve},inheritAttrs:!1,props:de,emits:["visible-change","height-change","cancel","ok","register","update:visible"],setup(e,{emit:t,attrs:l}){const n=T(!1),o=T(null),a=T(null),r=T(0),u={setModalProps:function(e){if(o.value=C(F(o)||{},e),!Reflect.has(e,"visible"))return;n.value=!!e.visible},emitVisible:void 0,redoModalHeight:()=>{E((()=>{F(a)&&F(a).setModalHeight()}))}},d=te();d&&t("register",u,d.uid);const p=W((()=>s(s({},e),F(o)))),{handleFullScreen:f,getWrapClassName:g,fullScreenRef:h}=function(e){const t=T(!1);return{getWrapClassName:W((()=>{const l=F(e.wrapClassName)||"";return F(t)?`fullscreen-modal ${l} `:F(l)})),handleFullScreen:function(e){e&&e.stopPropagation(),t.value=!F(t)},fullScreenRef:t}}({modalWrapperRef:a,extHeightRef:r,wrapClassName:Z(p.value,"wrapClassName")}),m=W((()=>{const e=i(s({},F(p)),{visible:F(n),okButtonProps:void 0,cancelButtonProps:void 0,title:void 0});return i(s({},e),{wrapClassName:F(g)})})),b=W((()=>{const e=s(s({},l),F(m));return F(h)?ee(e,"height"):e})),y=W((()=>{if(!F(h))return F(m).height}));return k((()=>{n.value=!!e.visible,h.value=!!e.defaultFullscreen})),$((()=>F(n)),(l=>{var n;t("visible-change",l),t("update:visible",l),d&&(null==(n=u.emitVisible)||n.call(u,l,d.uid)),E((()=>{e.scrollTop&&l&&F(a)&&F(a).scrollTop()}))}),{immediate:!1}),{handleCancel:function(l){return c(this,null,(function*(){if(null==l||l.stopPropagation(),e.closeFunc&&v(e.closeFunc)){const t=yield e.closeFunc();n.value=!t}else n.value=!1,t("cancel",l)}))},getBindValue:b,getProps:m,handleFullScreen:f,fullScreenRef:h,getMergeProps:p,handleOk:function(e){t("ok",e)},visibleRef:n,omit:ee,modalWrapperRef:a,handleExtHeight:function(e){r.value=e},handleHeightChange:function(e){t("height-change",e)},handleTitleDbClick:function(t){e.canFullscreen&&(t.stopPropagation(),f(t))},getWrapperHeight:y}}});Ce.render=function(e,t,l,n,o,a){const r=A("ModalClose"),s=A("ModalHeader"),i=A("ModalFooter"),c=A("ModalWrapper"),u=A("Modal");return I(),L(u,e.getBindValue,le({default:_((()=>[P(c,K({useWrapper:e.getProps.useWrapper,footerOffset:e.wrapperFooterOffset,fullScreen:e.fullScreenRef,ref:"modalWrapperRef",loading:e.getProps.loading,"loading-tip":e.getProps.loadingTip,minHeight:e.getProps.minHeight,height:e.getWrapperHeight,visible:e.visibleRef,modalFooterHeight:void 0===e.footer||e.footer?void 0:0},e.omit(e.getProps.wrapperProps,"visible","height","modalFooterHeight"),{onExtHeight:e.handleExtHeight,onHeightChange:e.handleHeightChange}),{default:_((()=>[q(e.$slots,"default")])),_:3},16,["useWrapper","footerOffset","fullScreen","loading","loading-tip","minHeight","height","visible","modalFooterHeight","onExtHeight","onHeightChange"])])),_:2},[e.$slots.closeIcon?void 0:{name:"closeIcon",fn:_((()=>[P(r,{canFullscreen:e.getProps.canFullscreen,fullScreen:e.fullScreenRef,onCancel:e.handleCancel,onFullscreen:e.handleFullScreen},null,8,["canFullscreen","fullScreen","onCancel","onFullscreen"])]))},e.$slots.title?void 0:{name:"title",fn:_((()=>[P(s,{helpMessage:e.getProps.helpMessage,title:e.getMergeProps.title,onDblclick:e.handleTitleDbClick},null,8,["helpMessage","title","onDblclick"])]))},e.$slots.footer?void 0:{name:"footer",fn:_((()=>[P(i,K(e.getProps,{onOk:e.handleOk,onCancel:e.handleCancel}),le({_:2},[ne(Object.keys(e.$slots),(t=>({name:t,fn:_((l=>[q(e.$slots,t,l)]))})))]),1040,["onOk","onCancel"])]))},ne(Object.keys(e.omit(e.$slots,"default")),(t=>({name:t,fn:_((l=>[q(e.$slots,t,l)]))})))]),1040)};const He=oe({}),Me=oe({});function Se(){const e=T(null),t=T(!1),l=T("");const n=()=>{const t=F(e);return t||M("useModal instance is undefined!"),t};return[function(n,o){if(!te())throw new Error("useModal() can only be used inside setup() or functional components!");l.value=o,R((()=>{e.value=null,t.value=!1,He[F(l)]=null})),F(t)&&H()&&n===F(e)||(e.value=n,n.emitVisible=(e,t)=>{Me[t]=e})},{setModalProps:e=>{var t;null==(t=n())||t.setModalProps(e)},getVisible:W((()=>Me[~~F(l)])),redoModalHeight:()=>{var e,t;null==(t=null==(e=n())?void 0:e.redoModalHeight)||t.call(e)},openModal:(e=!0,t,o=!0)=>{var a;if(null==(a=n())||a.setModalProps({visible:e}),!t)return;const r=F(l);if(o)return He[r]=null,void(He[r]=ae(t));re(ae(He[r]),ae(t))||(He[r]=ae(t))},closeModal:()=>{var e;null==(e=n())||e.setModalProps({visible:!1})}}]}const ke=e=>{const t=T(null),l=te(),n=T(""),o=()=>{const e=F(t);return e||M("useModalInner instance is undefined!"),e};return k((()=>{const t=He[F(n)];t&&e&&v(e)&&E((()=>{e(t)}))})),[(e,o)=>{se((()=>{t.value=null})),n.value=o,t.value=e,null==l||l.emit("register",e,o)},{changeLoading:(e=!0)=>{var t;null==(t=o())||t.setModalProps({loading:e})},getVisible:W((()=>Me[~~F(n)])),changeOkLoading:(e=!0)=>{var t;null==(t=o())||t.setModalProps({confirmLoading:e})},closeModal:()=>{var e;null==(e=o())||e.setModalProps({visible:!1})},setModalProps:e=>{var t;null==(t=o())||t.setModalProps(e)},redoModalHeight:()=>{var e;const t=null==(e=o())?void 0:e.redoModalHeight;t&&t()}}]},Fe=S(Ce);export{Fe as B,ke as a,Se as b,he as u};