import{a as k,aJ as Q,c as Z,h as w,aK as ee,az as B,aB as _,o as C,i as N,p as o,B as $,aF as te,F as ne,aE as oe,k as T,aG as ae,aC as R,aD as re,r as se,x as ie,w as O,M as le,j as g,c9 as ce,C as X,dc as ue,dd as me,f8 as de,f9 as ge}from"./index.e1964776.js";import{I as W}from"./index.657a2808.js";import{P as fe}from"./index.7347be3d.js";import"./index.59303775.js";import"./index.e2fe3f97.js";import"./useSize.5fbb5cc9.js";import"./eagerComputed.83fd49b0.js";import"./useWindowSizeFn.a30c5409.js";import"./useContentViewHeight.f1248c0f.js";import"./ArrowLeftOutlined.093ec11d.js";import"./index.32320e40.js";import"./transButton.2db6a2b1.js";const pe=k({name:"ImagePreview",components:{Image:W,PreviewGroup:W.PreviewGroup},props:{functional:Q.bool,imageList:{type:Array}},setup(n){const{prefixCls:u}=Z("image-preview"),l=w(()=>{const{imageList:s}=n;return s?s.map(t=>ee(t)?{src:t,placeholder:!1}:t):[]});return{prefixCls:u,getImageList:l}}});function ve(n,u,l,s,t,h){const d=_("Image"),p=_("PreviewGroup");return C(),N("div",{class:se(n.prefixCls)},[o(p,null,{default:$(()=>[!n.imageList||n.$slots.default?te(n.$slots,"default",{key:0}):(C(!0),N(ne,{key:1},oe(n.getImageList,c=>(C(),T(d,ae(R({key:c.src},c)),re({_:2},[c.placeholder?{name:"placeholder",fn:$(()=>[o(d,R(c,{src:c.placeholder,preview:!1}),null,16,["src"])]),key:"0"}:void 0]),1040))),128))]),_:3})],2)}var _e=B(pe,[["render",ve]]),he="/assets/resume.6e209205.svg",Ie="/assets/p-rotate.1d232189.svg",Le="/assets/scale.8d8ebde4.svg",we="/assets/unscale.99ad049c.svg",Ce="/assets/unrotate.f9dd5a27.svg",f=function(n){return n[n.LOADING=0]="LOADING",n[n.DONE=1]="DONE",n[n.FAIL=2]="FAIL",n}(f||{});const $e={show:{type:Boolean,default:!1},imageList:{type:[Array],default:null},index:{type:Number,default:0},scaleStep:{type:Number},defaultWidth:{type:Number},maskClosable:{type:Boolean},rememberState:{type:Boolean}},r="img-preview";var Se=k({name:"ImagePreview",props:$e,emits:["img-load","img-error"],setup(n,{expose:u,emit:l}){const s=new Map,t=ie({currentUrl:"",imgScale:1,imgRotate:0,imgTop:0,imgLeft:0,status:f.LOADING,currentIndex:0,moveX:0,moveY:0,show:n.show}),h=O(null),d=O(null);function p(){Y();const{index:e,imageList:a}=n;if(!a||!a.length)throw new Error("imageList is undefined");t.currentIndex=e,P(a[e])}function c(){t.imgScale=1,t.imgRotate=0,t.imgTop=0,t.imgLeft=0}function Y(){const e=g(h);!e||(e.onmousewheel=S,document.body.addEventListener("DOMMouseScroll",S),document.ondragstart=function(){return!1})}const I=w(()=>{var a;const e=(a=n==null?void 0:n.scaleStep)!=null?a:0;return(e!=null?e:0>0)?e/100:t.imgScale/10});function S(e){e=e||window.event,e.delta=e.wheelDelta||-e.detail,e.preventDefault(),e.delta>0&&L(I.value),e.delta<0&&L(-I.value)}function L(e){t.imgScale<=.2&&e<0||(t.imgScale+=e*.1,t.imgScale<0&&(t.imgScale=.02))}function F(e){t.imgRotate+=e}function U(){const e=g(d);!e||(e.onmousemove=null)}function P(e){t.status=f.LOADING;const a=new Image;a.src=e,a.onload=i=>{if(t.currentUrl!==e){const m=i.composedPath();if(n.rememberState){s.set(t.currentUrl,{scale:t.imgScale,top:t.imgTop,left:t.imgLeft,rotate:t.imgRotate});const v=s.get(e);v?(t.imgScale=v.scale,t.imgTop=v.top,t.imgRotate=v.rotate,t.imgLeft=v.left):(c(),n.defaultWidth&&(t.imgScale=n.defaultWidth/m[0].naturalWidth))}else n.defaultWidth&&(t.imgScale=n.defaultWidth/m[0].naturalWidth);m&&l("img-load",{index:t.currentIndex,dom:m[0],url:e})}t.currentUrl=e,t.status=f.DONE},a.onerror=i=>{const m=i.composedPath();m&&l("img-error",{index:t.currentIndex,dom:m[0],url:e}),t.status=f.FAIL}}function A(e){e&&e.stopPropagation(),b()}function b(){t.show=!1,document.body.removeEventListener("DOMMouseScroll",S),document.ondragstart=null}function D(){c()}u({resume:D,close:b,prev:x.bind(null,"left"),next:x.bind(null,"right"),setScale:e=>{e>0&&e<=10&&(t.imgScale=e)},setRotate:e=>{t.imgRotate=e}});function x(e){const{currentIndex:a}=t,{imageList:i}=n;e==="left"&&(t.currentIndex--,a<=0&&(t.currentIndex=i.length-1)),e==="right"&&(t.currentIndex++,a>=i.length-1&&(t.currentIndex=0)),P(i[t.currentIndex])}function z(e){e=e||window.event,t.moveX=e.clientX,t.moveY=e.clientY;const a=g(d);a&&(a.onmousemove=j)}function j(e){e=e||window.event,e.preventDefault();const a=e.clientX-t.moveX,i=e.clientY-t.moveY;t.imgLeft+=a,t.imgTop+=i,t.moveX=e.clientX,t.moveY=e.clientY}const V=w(()=>{const{imgScale:e,imgRotate:a,imgTop:i,imgLeft:m}=t;return{transform:`scale(${e}) rotate(${a}deg)`,marginTop:`${i}px`,marginLeft:`${m}px`,maxWidth:n.defaultWidth?"unset":"100%"}}),E=w(()=>{const{imageList:e}=n;return e.length>1});le(()=>{n.show&&p(),n.imageList&&c()});const J=e=>{n.maskClosable&&e.target&&e.target.classList.contains(`${r}-content`)&&A(e)},K=()=>o("div",{class:`${r}__close`,onClick:A},[o(ce,{class:`${r}__close-icon`},null)]),q=()=>{if(!g(E))return null;const{currentIndex:e}=t,{imageList:a}=n;return o("div",{class:`${r}__index`},[e+1,X(" / "),a.length])},H=()=>o("div",{class:`${r}__controller`},[o("div",{class:`${r}__controller-item`,onClick:()=>L(-I.value)},[o("img",{src:we},null)]),o("div",{class:`${r}__controller-item`,onClick:()=>L(I.value)},[o("img",{src:Le},null)]),o("div",{class:`${r}__controller-item`,onClick:D},[o("img",{src:he},null)]),o("div",{class:`${r}__controller-item`,onClick:()=>F(-90)},[o("img",{src:Ce},null)]),o("div",{class:`${r}__controller-item`,onClick:()=>F(90)},[o("img",{src:Ie},null)])]),M=e=>g(E)?o("div",{class:[`${r}__arrow`,e],onClick:()=>x(e)},[e==="left"?o(ue,null,null):o(me,null,null)]):null;return()=>t.show&&o("div",{class:r,ref:h,onMouseup:U,onClick:J},[o("div",{class:`${r}-content`},[o("img",{style:g(V),class:[`${r}-image`,t.status===f.DONE?"":"hidden"],ref:d,src:t.currentUrl,onMousedown:z},null),K(),q(),H(),M("left"),M("right")])])}});let y=null;function xe(n){var s;if(!de)return;const u={},l=document.createElement("div");return Object.assign(u,{show:!0,index:0,scaleStep:100},n),y=o(Se,u),ge(y,l),document.body.appendChild(l),(s=y.component)==null?void 0:s.exposed}const G=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"],ye=k({components:{PageWrapper:fe,ImagePreview:_e},setup(){function n(){xe({imageList:G,defaultWidth:700,rememberState:!0,onImgLoad:({index:l,url:s,dom:t})=>{l+1,`${s}`}})}return{imgList:G,openImg:n}}});function ke(n,u,l,s,t,h){const d=_("ImagePreview"),p=_("a-button"),c=_("PageWrapper");return C(),T(c,{title:"\u56FE\u7247\u9884\u89C8\u793A\u4F8B"},{default:$(()=>[o(d,{imageList:n.imgList},null,8,["imageList"]),o(p,{onClick:n.openImg,type:"primary"},{default:$(()=>[X("\u65E0\u9884\u89C8\u56FE")]),_:1},8,["onClick"])]),_:1})}var Be=B(ye,[["render",ke]]);export{Be as default};
