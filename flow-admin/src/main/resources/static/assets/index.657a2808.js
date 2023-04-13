import{e7 as qe,e8 as Je,w as P,x as de,_ as o,O as be,ce as Re,ap as Ee,U,a6 as Ke,L as Qe,h as s,a as se,Z as Oe,cp as Ve,a8 as ue,a9 as J,M as et,dX as tt,p as u,F as Ge,e9 as rt,T as re,dk as te,c1 as Ae,a2 as nt,ea as at,c4 as Ie,H as it,S as ot,s as me,c9 as lt,dc as ut,dd as st,K as Te,d as vt,df as je,d$ as ct}from"./index.e1964776.js";var ft="[object Number]";function dt(r){return typeof r=="number"||qe(r)&&Je(r)==ft}function mt(){var r=document.documentElement.clientWidth,e=window.innerHeight||document.documentElement.clientHeight;return{width:r,height:e}}function Ue(r){var e=r.getBoundingClientRect(),t=document.documentElement;return{left:e.left+(window.pageXOffset||t.scrollLeft)-(t.clientLeft||document.body.clientLeft||0),top:e.top+(window.pageYOffset||t.scrollTop)-(t.clientTop||document.body.clientTop||0)}}function gt(r){var e=P(null),t=de(o({},r)),n=P([]),a=function(p){e.value===null&&(n.value=[],e.value=Re(function(){var m;n.value.forEach(function(L){m=o(o({},m),L)}),Ee(t,m),e.value=null})),n.value.push(p)};return be(function(){e.value&&Re.cancel(e.value)}),[t,a]}function ke(r,e,t,n){var a=e+t,i=(t-n)/2;if(t>n){if(e>0)return U({},r,i);if(e<0&&a<n)return U({},r,-i)}else if(e<0||a>n)return U({},r,e<0?i:-i);return{}}function pt(r,e,t,n){var a=mt(),i=a.width,p=a.height,m=null;return r<=i&&e<=p?m={x:0,y:0}:(r>i||e>p)&&(m=o(o({},ke("x",t,r,i)),ke("y",n,e,p))),m}var Ne=Symbol("previewGroupContext"),ye={provide:function(e){Ke(Ne,e)},inject:function(){return Qe(Ne,{isPreviewGroup:P(!1),previewUrls:s(function(){return new Map}),setPreviewUrls:function(){},current:P(null),setCurrent:function(){},setShowPreview:function(){},setMousePosition:function(){},registerImage:null,rootClassName:""})}},wt=se({compatConfig:{MODE:3},name:"PreviewGroup",inheritAttrs:!1,props:{previewPrefixCls:String,preview:{type:[Boolean,Object],default:!0},icons:{type:Object,default:function(){return{}}}},setup:function(e,t){var n=t.slots,a=s(function(){var d={visible:void 0,onVisibleChange:function(){},getContainer:void 0,current:0};return Oe(e.preview)==="object"?We(e.preview,d):d}),i=de(new Map),p=P(),m=s(function(){return a.value.visible}),L=s(function(){return a.value.getContainer}),A=function(v,M){var C,N;(C=(N=a.value).onVisibleChange)===null||C===void 0||C.call(N,v,M)},b=Ve(!!m.value,{value:m,onChange:A}),h=ue(b,2),T=h[0],g=h[1],y=P(null),K=s(function(){return m.value!==void 0}),H=s(function(){return Array.from(i.keys())}),O=s(function(){return H.value[a.value.current]}),j=s(function(){return new Map(Array.from(i).filter(function(d){var v=ue(d,2),M=v[1].canPreview;return!!M}).map(function(d){var v=ue(d,2),M=v[0],C=v[1].url;return[M,C]}))}),z=function(v,M){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;i.set(v,{url:M,canPreview:C})},k=function(v){p.value=v},x=function(v){y.value=v},S=function(v,M){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,N=function(){i.delete(v)};return i.set(v,{url:M,canPreview:C}),N},D=function(v){v==null||v.stopPropagation(),g(!1),x(null)};return J(O,function(d){k(d)},{immediate:!0,flush:"post"}),et(function(){T.value&&K.value&&k(O.value)},{flush:"post"}),ye.provide({isPreviewGroup:P(!0),previewUrls:j,setPreviewUrls:z,current:p,setCurrent:k,setShowPreview:g,setMousePosition:x,registerImage:S}),function(){var d=Ee({},(tt(a.value),a.value));return u(Ge,null,[n.default&&n.default(),u(He,o(o({},d),{},{"ria-hidden":!T.value,visible:T.value,prefixCls:e.previewPrefixCls,onClose:D,mousePosition:y.value,src:j.value.get(p.value),icons:e.icons,getContainer:L.value}),null)])}}}),Ze=wt,B={x:0,y:0},ht=o(o({},rt()),{},{src:String,alt:String,rootClassName:String,icons:{type:Object,default:function(){return{}}}}),Ct=se({compatConfig:{MODE:3},name:"Preview",inheritAttrs:!1,props:ht,emits:["close","afterClose"],setup:function(e,t){var n=t.emit,a=t.attrs,i=de(e.icons),p=i.rotateLeft,m=i.rotateRight,L=i.zoomIn,A=i.zoomOut,b=i.close,h=i.left,T=i.right,g=P(1),y=P(0),K=gt(B),H=ue(K,2),O=H[0],j=H[1],z=function(){return n("close")},k=P(),x=de({originX:0,originY:0,deltaX:0,deltaY:0}),S=P(!1),D=ye.inject(),d=D.previewUrls,v=D.current,M=D.isPreviewGroup,C=D.setCurrent,N=s(function(){return d.value.size}),R=s(function(){return Array.from(d.value.keys())}),I=s(function(){return R.value.indexOf(v.value)}),ge=s(function(){return M.value?d.value.get(v.value):e.src}),ne=s(function(){return M.value&&N.value>1}),ae=P({wheelDirection:0}),F=function(){g.value=1,y.value=0,j(B),n("afterClose")},W=function(){g.value++,j(B)},ie=function(){g.value>1&&g.value--,j(B)},f=function(){y.value+=90},w=function(){y.value-=90},_=function(l){l.preventDefault(),l.stopPropagation(),I.value>0&&C(R.value[I.value-1])},E=function(l){l.preventDefault(),l.stopPropagation(),I.value<N.value-1&&C(R.value[I.value+1])},V=re(U({},"".concat(e.prefixCls,"-moving"),S.value)),pe="".concat(e.prefixCls,"-operations-operation"),ve="".concat(e.prefixCls,"-operations-icon"),we=[{icon:b,onClick:z,type:"close"},{icon:L,onClick:W,type:"zoomIn"},{icon:A,onClick:ie,type:"zoomOut",disabled:s(function(){return g.value===1})},{icon:m,onClick:f,type:"rotateRight"},{icon:p,onClick:w,type:"rotateLeft"}],oe=function(){if(e.visible&&S.value){var l=k.value.offsetWidth*g.value,$=k.value.offsetHeight*g.value,X=Ue(k.value),G=X.left,Y=X.top,Z=y.value%180!==0;S.value=!1;var Q=pt(Z?$:l,Z?l:$,G,Y);Q&&j(o({},Q))}},he=function(l){l.button===0&&(l.preventDefault(),l.stopPropagation(),x.deltaX=l.pageX-O.x,x.deltaY=l.pageY-O.y,x.originX=O.x,x.originY=O.y,S.value=!0)},ce=function(l){e.visible&&S.value&&j({x:l.pageX-x.deltaX,y:l.pageY-x.deltaY})},fe=function(l){if(!!e.visible){l.preventDefault();var $=l.deltaY;ae.value={wheelDirection:$}}},Ce=function(l){!e.visible||!ne.value||(l.preventDefault(),l.keyCode===Ie.LEFT?I.value>0&&C(R.value[I.value-1]):l.keyCode===Ie.RIGHT&&I.value<N.value-1&&C(R.value[I.value+1]))},Pe=function(){e.visible&&(g.value!==1&&(g.value=1),(O.x!==B.x||O.y!==B.y)&&j(B))},le=function(){};return be(function(){J([function(){return e.visible},S],function(){le();var c,l,$=te(window,"mouseup",oe,!1),X=te(window,"mousemove",ce,!1),G=te(window,"wheel",fe,{passive:!1}),Y=te(window,"keydown",Ce,!1);try{window.top!==window.self&&(c=te(window.top,"mouseup",oe,!1),l=te(window.top,"mousemove",ce,!1))}catch(Z){}le=function(){$.remove(),X.remove(),G.remove(),Y.remove(),c&&c.remove(),l&&l.remove()}},{flush:"post",immediate:!0}),J([ae],function(){var c=ae.value.wheelDirection;c>0?ie():c<0&&W()})}),Ae(function(){le()}),function(){var c=e.visible,l=e.prefixCls,$=e.rootClassName;return u(at,o(o({},a),{},{transitionName:"zoom",maskTransitionName:"fade",closable:!1,keyboard:!0,prefixCls:l,onClose:z,afterClose:F,visible:c,wrapClassName:V,rootClassName:$,getContainer:e.getContainer}),{default:function(){return[u("ul",{class:"".concat(e.prefixCls,"-operations")},[we.map(function(G){var Y=G.icon,Z=G.onClick,Q=G.type,ee=G.disabled;return u("li",{class:re(pe,U({},"".concat(e.prefixCls,"-operations-operation-disabled"),ee&&(ee==null?void 0:ee.value))),onClick:Z,key:Q},[nt(Y,{class:ve})])})]),u("div",{class:"".concat(e.prefixCls,"-img-wrapper"),style:{transform:"translate3d(".concat(O.x,"px, ").concat(O.y,"px, 0)")}},[u("img",{onMousedown:he,onDblclick:Pe,ref:k,class:"".concat(e.prefixCls,"-img"),src:ge.value,alt:e.alt,style:{transform:"scale3d(".concat(g.value,", ").concat(g.value,", 1) rotate(").concat(y.value,"deg)")}},null)]),ne.value&&u("div",{class:re("".concat(e.prefixCls,"-switch-left"),U({},"".concat(e.prefixCls,"-switch-left-disabled"),I.value<=0)),onClick:_},[h]),ne.value&&u("div",{class:re("".concat(e.prefixCls,"-switch-right"),U({},"".concat(e.prefixCls,"-switch-right-disabled"),I.value>=N.value-1)),onClick:E},[T])]}})}}}),He=Ct,Pt=["icons","maskClassName"],Fe=function(){return{src:String,wrapperClassName:String,wrapperStyle:{type:Object,default:void 0},rootClassName:String,prefixCls:String,previewPrefixCls:String,previewMask:{type:[Boolean,Function],default:void 0},placeholder:it.any,fallback:String,preview:{type:[Boolean,Object],default:!0},onClick:{type:Function},onError:{type:Function}}},We=function(e,t){var n=o({},e);return Object.keys(t).forEach(function(a){e[a]===void 0&&(n[a]=t[a])}),n},bt=0,Xe=se({compatConfig:{MODE:3},name:"Image",inheritAttrs:!1,props:Fe(),emits:["click","error"],setup:function(e,t){var n=t.attrs,a=t.slots,i=t.emit,p=s(function(){return e.prefixCls}),m=s(function(){return"".concat(p.value,"-preview")}),L=s(function(){var f={visible:void 0,onVisibleChange:function(){},getContainer:void 0};return Oe(e.preview)==="object"?We(e.preview,f):f}),A=s(function(){var f;return(f=L.value.src)!==null&&f!==void 0?f:e.src}),b=s(function(){return e.placeholder&&e.placeholder!==!0||a.placeholder}),h=s(function(){return L.value.visible}),T=s(function(){return L.value.getContainer}),g=s(function(){return h.value!==void 0}),y=function(w,_){var E,V;(E=(V=L.value).onVisibleChange)===null||E===void 0||E.call(V,w,_)},K=Ve(!!h.value,{value:h,onChange:y}),H=ue(K,2),O=H[0],j=H[1];J(O,function(f,w){y(f,w)});var z=P(b.value?"loading":"normal");J(function(){return e.src},function(){z.value=b.value?"loading":"normal"});var k=P(null),x=s(function(){return z.value==="error"}),S=ye.inject(),D=S.isPreviewGroup,d=S.setCurrent,v=S.setShowPreview,M=S.setMousePosition,C=S.registerImage,N=P(bt++),R=s(function(){return e.preview&&!x.value}),I=function(){z.value="normal"},ge=function(w){z.value="error",i("error",w)},ne=function(w){if(!g.value){var _=Ue(w.target),E=_.left,V=_.top;D.value?(d(N.value),M({x:E,y:V})):k.value={x:E,y:V}}D.value?v(!0):j(!0),i("click",w)},ae=function(){j(!1),g.value||(k.value=null)},F=P(null);J(function(){return F},function(){z.value==="loading"&&F.value.complete&&(F.value.naturalWidth||F.value.naturalHeight)&&I()});var W=function(){};be(function(){J([A,R],function(){if(W(),!D.value)return function(){};W=C(N.value,A.value,R.value),R.value||W()},{flush:"post",immediate:!0})}),Ae(function(){W()});var ie=function(w){return dt(w)?w+"px":w};return function(){var f=e.prefixCls,w=e.wrapperClassName,_=e.fallback,E=e.src,V=e.placeholder,pe=e.wrapperStyle,ve=e.rootClassName,we=n.width,oe=n.height,he=n.crossorigin,ce=n.decoding,fe=n.alt,Ce=n.sizes,Pe=n.srcset,le=n.usemap,c=n.class,l=n.style,$=L.value,X=$.icons,G=$.maskClassName,Y=ot($,Pt),Z=re(f,w,ve,U({},"".concat(f,"-error"),x.value)),Q=x.value&&_?_:A.value,ee={crossorigin:he,decoding:ce,alt:fe,sizes:Ce,srcset:Pe,usemap:le,class:re("".concat(f,"-img"),U({},"".concat(f,"-img-placeholder"),V===!0),c),style:o({height:oe},l)};return u(Ge,null,[u("div",{class:Z,onClick:R.value?ne:function(Be){i("click",Be)},style:o({width:ie(we),height:ie(oe)},pe)},[u("img",o(o(o({},ee),x.value&&_?{src:_}:{onLoad:I,onError:ge,src:E}),{},{ref:F}),null),z.value==="loading"&&u("div",{"aria-hidden":"true",class:"".concat(f,"-placeholder")},[V||a.placeholder&&a.placeholder()]),a.previewMask&&R.value&&u("div",{class:["".concat(f,"-mask"),G]},[a.previewMask()])]),!D.value&&R.value&&u(He,o(o({},Y),{},{"aria-hidden":!O.value,visible:O.value,prefixCls:m.value,onClose:ae,mousePosition:k.value,src:Q,alt:fe,getContainer:T.value,icons:X,rootClassName:ve}),null)])}}});Xe.PreviewGroup=Ze;var Ot=Xe,yt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"},xt=yt;function $e(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.forEach(function(a){St(r,a,t[a])})}return r}function St(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var xe=function(e,t){var n=$e({},e,t.attrs);return u(me,$e({},n,{icon:xt}),null)};xe.displayName="RotateLeftOutlined";xe.inheritAttrs=!1;var Mt=xe,Lt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"},Rt=Lt;function ze(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.forEach(function(a){It(r,a,t[a])})}return r}function It(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Se=function(e,t){var n=ze({},e,t.attrs);return u(me,ze({},n,{icon:Rt}),null)};Se.displayName="RotateRightOutlined";Se.inheritAttrs=!1;var jt=Se,kt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"},Nt=kt;function De(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.forEach(function(a){$t(r,a,t[a])})}return r}function $t(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Me=function(e,t){var n=De({},e,t.attrs);return u(me,De({},n,{icon:Nt}),null)};Me.displayName="ZoomInOutlined";Me.inheritAttrs=!1;var zt=Me,Dt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"},_t=Dt;function _e(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.forEach(function(a){Et(r,a,t[a])})}return r}function Et(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Le=function(e,t){var n=_e({},e,t.attrs);return u(me,_e({},n,{icon:_t}),null)};Le.displayName="ZoomOutOutlined";Le.inheritAttrs=!1;var Vt=Le,Ye={rotateLeft:u(Mt,null,null),rotateRight:u(jt,null,null),zoomIn:u(zt,null,null),zoomOut:u(Vt,null,null),close:u(lt,null,null),left:u(ut,null,null),right:u(st,null,null)},Gt=se({compatConfig:{MODE:3},name:"AImagePreviewGroup",inheritAttrs:!1,props:{previewPrefixCls:String},setup:function(e,t){var n=t.attrs,a=t.slots,i=Te("image",e),p=i.getPrefixCls,m=s(function(){return p("image-preview",e.previewPrefixCls)});return function(){return u(Ze,o(o({},o(o({},n),e)),{},{icons:Ye,previewPrefixCls:m.value}),a)}}}),At=Gt,q=se({name:"AImage",inheritAttrs:!1,props:Fe(),setup:function(e,t){var n=t.slots,a=t.attrs,i=Te("image",e),p=i.prefixCls,m=i.rootPrefixCls,L=i.configProvider,A=s(function(){var b=e.preview;if(b===!1)return b;var h=Oe(b)==="object"?b:{};return o(o({icons:Ye},h),{},{transitionName:je(m.value,"zoom",h.transitionName),maskTransitionName:je(m.value,"fade",h.maskTransitionName)})});return function(){var b,h=((b=L.locale)===null||b===void 0?void 0:b.Image)||vt.Image,T=function(){return u("div",{class:"".concat(p.value,"-mask-info")},[u(ct,null,null),h==null?void 0:h.preview])},g=e.previewMask,y=g===void 0?n.previewMask||T:g;return u(Ot,o(o({},o(o(o({},a),e),{},{prefixCls:p.value})),{},{preview:A.value}),o(o({},n),{},{previewMask:typeof y=="function"?y:null}))}}});q.PreviewGroup=At;q.install=function(r){return r.component(q.name,q),r.component(q.PreviewGroup.name,q.PreviewGroup),r};var Ut=q;export{Ut as I,Ue as g};
