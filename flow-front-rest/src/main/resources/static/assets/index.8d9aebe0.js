var e=(e,t,n)=>new Promise(((o,a)=>{var s=e=>{try{l(n.next(e))}catch(t){a(t)}},i=e=>{try{l(n.throw(e))}catch(t){a(t)}},l=e=>e.done?o(e.value):Promise.resolve(e.value).then(s,i);l((n=n.apply(e,t)).next())}));import{_ as t,b as n}from"./useModal.47c80e94.js";import{_ as o}from"./PageWrapper.df7b7946.js";import{k as a,bg as s,aG as i,ad as l,aI as r,bS as u,bU as c,bX as d,bY as m,bZ as p,r as f,f as v,l as g,m as h,K as y,o as b,n as x,q as w,X as M,s as I,S as j,ag as P,W as _,N as C,x as E}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              */import k from"./index.dddfca0b.js";import{c as O,a as z,t as B,b as T,V as R}from"./Viewer.fd8523c8.js";import{e as S,l as Z,f as K}from"./process.c572ca0f.js";import"./index.ee676e78.js";import"./useWindowSizeFn.4f1b8c18.js";import"./usePageContext.741f964f.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a3bdff8d.js";var N=/^djs-cursor-.*$/;function W(e){var t=O(document.body);t.removeMatching(N),e&&t.add("djs-cursor-"+e)}function q(e,t){return{x:e.x-t.x,y:e.y-t.y}}function A(e,t){var n;function o(o){var a,s=n.start,i=n.button,l=B(o),r=q(l,s);(!n.dragging&&(a=r,Math.sqrt(Math.pow(a.x,2)+Math.pow(a.y,2))>15)&&(n.dragging=!0,0===i&&function(e,t){function n(){return!1}t=t||"element.click",e.once(t,5e3,n)}(e),W("grab")),n.dragging)&&(r=q(l,n.last||n.start),t.scroll({dx:r.x,dy:r.y}),n.last=l);o.preventDefault()}function a(e){T.unbind(document,"mousemove",o),T.unbind(document,"mouseup",a),n=null,W(null)}e.on("element.mousedown",500,(function(e){return function(e){if(z(e.target,".djs-draggable"))return;var t=e.button;if(t>=2||e.ctrlKey||e.shiftKey||e.altKey)return;return n={button:t,start:B(e)},T.bind(document,"mousemove",o),T.bind(document,"mouseup",a),!0}(e.originalEvent)})),this.isActive=function(){return!!n}}A.$inject=["eventBus","canvas"];var D={__init__:["moveCanvas"],moveCanvas:["type",A]};let G=null;var L=a({props:{title:{type:String,default:"流程预览"}},name:"BpmnPreview",components:{BasicModal:t,PageWrapper:o,Tag:s,Spin:i,Popover:l,Button:r,RadioButtonGroup:r.RadioButtonGroup,FramePage:k,Space:u,Affix:c,PlusCircleOutlined:d,MinusCircleOutlined:m,OneToOneOutlined:p},setup(t,{emit:o}){const a=f(),s=f(),i=f(""),l=f(!1),r=f(""),u=f(1);let c=[],d=[],m={};const p=f({});let g="";const[h,{changeLoading:y}]=n((t=>e(this,null,(function*(){const{modelKey:n,procInstId:o}=t;g=o,y(!0);try{yield function(t,n){return e(this,null,(function*(){G&&G.destroy(),G=new R({container:document.getElementById("bpmnCanvas"),width:"100%",additionalModules:[D]}),n?S({procInstId:n}).then((e=>{r.value=e.modelName||"",d=e.highLightedFlows,c=e.activeActivityIds,G&&x(e.modelXml)})).finally((()=>{})):Z({modelKey:t}).then((e=>{r.value=e.mldelName||"",G&&x(e.modelXml)})).finally((()=>{}))}))}(n,o)}finally{y(!1)}})))),b=v((()=>"流程图-"+r.value));function x(e){const t=function(e,t,n){let o=[],a="<"+t+"[^<>]*?\\s"+n+"=['\"]?(.*?)['\"]?\\s.*?>",s=e.match(new RegExp(a,"gi"));return s&&s.forEach((e=>{e&&o.push(e)})),o}(e,"exclusiveGateway","id");let n=e;t&&t.length>0&&t.forEach((e=>{const t=new RegExp('id="(.+?)"').exec(e);t&&t[1]&&(n=n.replace('bpmnElement="'+t[1]+'"','bpmnElement="'+t[1]+'" isMarkerVisible="true"'))})),G.importXML(n,(function(e){e||function(){const e=G.get("canvas");e.zoom("fit-viewport","auto"),function(e){c&&c.length>0&&c.forEach((t=>{e.addMarker(t,"highlight");const n=document.querySelector(".highlight").querySelector(".djs-visual rect");n&&n.setAttribute("stroke-dasharray","4,4")}));d&&d.length>0&&d.forEach((t=>{e.addMarker(t,"highlight-line")}))}(e),function(){const e=G.get("eventBus"),t=G.get("overlays");e.on("element.hover",(e=>{"bpmn:UserTask"===e.element.type&&g&&(m[e.element.id]?w(m[e.element.id],e,t):K({procInstId:g,elementId:e.element.id}).then((n=>{m[e.element.id]=n,w(n,e,t)})))})),e.on("element.out",(e=>{e.element.type,t.clear()}))}()}()}))}function w(e,t,n){const o=document.createElement("div");p.value=e;const a=document.querySelector(".flowMsgPopover");o.innerHTML=a.innerHTML,o.className="tipBox",o.style.width="260px",o.style.background="rgba(255, 255, 255, .6)",n.add(e.id,{position:{top:t.element.height,left:0},html:o})}return{defaultZoom:u,registerModal:h,flowMsgPopover:s,popoverVisible:l,triggerEl:a,getTitle:b,detailInfo:p,previewUrl:i,processZoomIn:function(e=.1){let t=Math.floor(100*u.value+100*e)/100;if(t>4)throw new Error("[Process Designer Warn ]: The zoom ratio cannot be greater than 4");u.value=t,G.get("canvas").zoom(u.value)},processZoomOut:function(e=.1){let t=Math.floor(100*u.value-100*e)/100;if(t<.2)throw new Error("[Process Designer Warn ]: The zoom ratio cannot be less than 0.2");u.value=t,G.get("canvas").zoom(u.value)},processReZoom:function(){u.value=1,G.get("canvas").zoom("fit-viewport","auto")}}}});const X=E();g("data-v-04305891");const V={style:{position:"absolute",left:"10px",top:"10px","z-index":"999"}},F={class:"containers",ref:"container"},U={class:"popover-title"},$=M(" 审批人员：");h();const H=X(((e,t,n,o,a,s)=>{const i=y("MinusCircleOutlined"),l=y("Button"),r=y("PlusCircleOutlined"),u=y("OneToOneOutlined"),c=y("RadioButtonGroup"),d=y("Tag"),m=y("Popover"),p=y("BasicModal");return b(),x(p,C({wrapClassName:"bpmn-viewer-container"},e.$attrs,{onRegister:e.registerModal,title:e.getTitle}),{default:X((()=>[w("div",V,[w(c,{value:"center"},{default:X((()=>[w(l,{value:"small",title:"缩小视图",style:{width:"40px"},size:"small",onClick:t[1]||(t[1]=t=>e.processZoomOut())},{icon:X((()=>[w(i)])),_:1}),w(l,{value:"default",size:"small",style:{width:"50px"}},{default:X((()=>[M(I(Math.floor(10*e.defaultZoom*10)+"%"),1)])),_:1}),w(l,{value:"large",title:"放大视图",style:{width:"40px"},size:"small",onClick:t[2]||(t[2]=t=>e.processZoomIn())},{icon:X((()=>[w(r)])),_:1}),w(l,{value:"center",title:"重置视图并居中",style:{width:"40px"},size:"small",onClick:t[3]||(t[3]=t=>e.processReZoom())},{default:X((()=>[w(u)])),_:1})])),_:1})]),w("div",F,[w("div",{id:"bpmnCanvas",class:"canvas",ref:"bpmnCanvas",style:{width:100*e.scale+"%",height:100*e.scale+"%"}},null,4)],512),w(m,{overlayClassName:"flowMsgPopover",ref:"flowMsgPopover",visible:!0},{title:X((()=>[w("h1",U,I(e.detailInfo.name),1)])),content:X((()=>[w("p",null,[$,e.detailInfo.approver?(b(!0),x(j,{key:0},P(e.detailInfo.approver.split(";"),(e=>(b(),x(d,{color:"processing",style:{"margin-right":"4px","margin-bottom":"4px"},key:e},{default:X((()=>[M(I(e),1)])),_:2},1024)))),128)):_("",!0)]),w("p",null,"节点类型："+I(e.detailInfo.nodeType||""),1),w("p",null,"节点状态："+I(e.detailInfo.status||""),1),w("p",null,"开始时间："+I(e.detailInfo.startDate||""),1),w("p",null,"结束时间："+I(e.detailInfo.endDate||""),1),w("p",null,"审批耗时："+I(e.detailInfo.duration||""),1)])),_:1},512)])),_:1},16,["onRegister","title"])}));L.render=H,L.__scopeId="data-v-04305891";export default L;
