import{P as e}from"./index.ee54ff18.js";import{y as t,z as o,A as n,Z as i,au as r,B as s,F as a,G as d,v as l,K as p,a9 as u}from"./vendor.880b4c6c.js";import"./index.10e3b51a.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useWindowSizeFn.564cf32e.js";import"./useContentViewHeight.17c92794.js";const c={event:"mousedown",transition:400},m={beforeMount:(e,t)=>{if(!1===t.value)return;const o=e.getAttribute("ripple-background");var n,i;n=Object.keys(t.modifiers),i=c,n.forEach((e=>{isNaN(Number(e))?i.event=e:i.transition=e}));const r=o||m.background,s=m.zIndex;e.addEventListener(c.event,(t=>{!function({event:e,el:t,zIndex:o,background:n}){var i,r;const s=parseInt(getComputedStyle(t).borderWidth.replace("px","")),a=e.clientX||e.touches[0].clientX,d=e.clientY||e.touches[0].clientY,l=t.getBoundingClientRect(),{left:p,top:u}=l,{offsetWidth:m,offsetHeight:g}=t,{transition:v}=c,b=a-p,h=d-u,f=Math.max(b,m-b),x=Math.max(h,g-h),y=window.getComputedStyle(t),R=Math.sqrt(f*f+x*x),j=s>0?s:0,L=document.createElement("div"),E=document.createElement("div");L.className="ripple",Object.assign(null!=(i=L.style)?i:{},{marginTop:"0px",marginLeft:"0px",width:"1px",height:"1px",transition:`all ${v}ms cubic-bezier(0.4, 0, 0.2, 1)`,borderRadius:"50%",pointerEvents:"none",position:"relative",zIndex:null!=o?o:"9999",backgroundColor:null!=n?n:"rgba(0, 0, 0, 0.12)"}),E.className="ripple-container",Object.assign(null!=(r=E.style)?r:{},{position:"absolute",left:0-j+"px",top:0-j+"px",height:"0",width:"0",pointerEvents:"none",overflow:"hidden"});const k=t.style.position.length>0?t.style.position:getComputedStyle(t).position;"relative"!==k&&(t.style.position="relative");E.appendChild(L),t.appendChild(E),Object.assign(L.style,{marginTop:`${h}px`,marginLeft:`${b}px`});const{borderTopLeftRadius:w,borderTopRightRadius:C,borderBottomLeftRadius:T,borderBottomRightRadius:N}=y;function B(){setTimeout((()=>{L.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((()=>{var e;null==(e=null==E?void 0:E.parentNode)||e.removeChild(E)}),850),t.removeEventListener("mouseup",B,!1),t.removeEventListener("mouseleave",B,!1),t.removeEventListener("dragstart",B,!1),setTimeout((()=>{let e=!0;for(let o=0;o<t.childNodes.length;o++)"ripple-container"===t.childNodes[o].className&&(e=!1);e&&(t.style.position="static"!==k?k:"")}),c.transition+260)}Object.assign(E.style,{width:`${m}px`,height:`${g}px`,direction:"ltr",borderTopLeftRadius:w,borderTopRightRadius:C,borderBottomLeftRadius:T,borderBottomRightRadius:N}),setTimeout((()=>{var e;const t=2*R+"px";Object.assign(null!=(e=L.style)?e:{},{width:t,height:t,marginLeft:b-R+"px",marginTop:h-R+"px"})}),0),"mousedown"===e.type?(t.addEventListener("mouseup",B,!1),t.addEventListener("mouseleave",B,!1),t.addEventListener("dragstart",B,!1)):B();t.setBackground=e=>{e&&(L.style.backgroundColor=e)}}({event:t,el:e,background:r,zIndex:s})}))},updated(e,t){var o,n;if(!t.value)return void(null==(o=null==e?void 0:e.clearRipple)||o.call(e));const i=e.getAttribute("ripple-background");null==(n=null==e?void 0:e.setBackground)||n.call(e,i)}};var g=t({components:{PageWrapper:e},directives:{Ripple:m}});const v=p();o("data-v-17ea7006");const b={class:"demo-box"},h=u(" content ");n();const f=v(((e,t,o,n,p,u)=>{const c=i("PageWrapper"),m=r("ripple");return s(),a(c,{title:"Ripple示例"},{default:v((()=>[d(l("div",b,[h],512),[[m]])])),_:1})}));g.render=f,g.__scopeId="data-v-17ea7006";export default g;
