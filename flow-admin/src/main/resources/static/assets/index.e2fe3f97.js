import{a as D,w as f,K as J,h as K,cJ as U,Z as V,aO as X,a9 as A,an as C,O as Z,c8 as $,U as s,p as d,_ as S,cj as q,H as G}from"./index.e1964776.js";import{u as Q}from"./useSize.5fbb5cc9.js";import{e as Y}from"./eagerComputed.83fd49b0.js";var ee=function(){return{prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:function(){return"default"}},src:String,srcset:String,icon:G.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}},ae=D({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:ee(),slots:["icon"],setup:function(e,E){var y=E.slots,g=E.attrs,m=f(!0),O=f(!1),h=f(1),p=f(null),x=f(null),_=J("avatar",e),I=_.prefixCls,R=Q(),n=K(function(){return e.size==="default"?R.value:e.size}),T=U(),c=Y(function(){if(V(e.size)==="object"){var r=X.find(function(t){return T.value[t]}),a=e.size[r];return a}}),W=function(a){return c.value?{width:"".concat(c.value,"px"),height:"".concat(c.value,"px"),lineHeight:"".concat(c.value,"px"),fontSize:"".concat(a?c.value/2:18,"px")}:{}},z=function(){if(!(!p.value||!x.value)){var a=p.value.offsetWidth,t=x.value.offsetWidth;if(a!==0&&t!==0){var l=e.gap,o=l===void 0?4:l;o*2<t&&(h.value=t-o*2<a?(t-o*2)/a:1)}}},k=function(){var a=e.loadError,t=a==null?void 0:a();t!==!1&&(m.value=!1)};return A(function(){return e.src},function(){C(function(){m.value=!0,h.value=1})}),A(function(){return e.gap},function(){C(function(){z()})}),Z(function(){C(function(){z(),O.value=!0})}),function(){var r,a,t=e.shape,l=e.src,o=e.alt,w=e.srcset,H=e.draggable,N=e.crossOrigin,u=$(y,e,"icon"),i=I.value,B=(r={},s(r,"".concat(g.class),!!g.class),s(r,i,!0),s(r,"".concat(i,"-lg"),n.value==="large"),s(r,"".concat(i,"-sm"),n.value==="small"),s(r,"".concat(i,"-").concat(t),t),s(r,"".concat(i,"-image"),l&&m.value),s(r,"".concat(i,"-icon"),u),r),M=typeof n.value=="number"?{width:"".concat(n.value,"px"),height:"".concat(n.value,"px"),lineHeight:"".concat(n.value,"px"),fontSize:u?"".concat(n.value/2,"px"):"18px"}:{},j=(a=y.default)===null||a===void 0?void 0:a.call(y),v;if(l&&m.value)v=d("img",{draggable:H,src:l,srcset:w,onError:k,alt:o,crossorigin:N},null);else if(u)v=u;else if(O.value||h.value!==1){var b="scale(".concat(h.value,") translateX(-50%)"),F={msTransform:b,WebkitTransform:b,transform:b},L=typeof n.value=="number"?{lineHeight:"".concat(n.value,"px")}:{};v=d(q,{onResize:z},{default:function(){return[d("span",{class:"".concat(i,"-string"),ref:p,style:S(S({},L),F)},[j])]}})}else v=d("span",{class:"".concat(i,"-string"),ref:p,style:{opacity:0}},[j]);return d("span",S(S({},g),{},{ref:x,class:B,style:[M,W(!!u),g.style]}),[v])}}}),se=ae;export{se as A};
