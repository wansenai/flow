import{a as $,b9 as y,az as k,aB as n,i as s,l as c,C as r,j as p,aE as m,G as _,s as o,q as x,p as l,t as i,D as d,m as g}from"./index.e61ad282.js";import{L as u}from"./index.b6575784.js";/* empty css               */import{T as B}from"./index.6e0a0264.js";import{articleList as T,actions as M}from"./data.658fb0ea.js";import"./Col.f72eb8d0.js";import"./useFlexGapSupport.ed2a5fc1.js";import"./eagerComputed.d3c262c3.js";const N=$({components:{List:u,ListItem:u.Item,ListItemMeta:u.Item.Meta,Tag:B,Icon:y},setup(){return{prefixCls:"account-center-article",list:T,actions:M}}});function V(e,b,h,z,A,D){const f=n("Tag"),C=n("ListItemMeta"),I=n("Icon"),L=n("ListItem"),v=n("List");return s(),c(v,{"item-layout":"vertical",class:o(e.prefixCls)},{default:r(()=>[(s(!0),p(_,null,m(e.list,a=>(s(),c(L,{key:a.title},{default:r(()=>[x(C,null,{description:r(()=>[l("div",{class:o(`${e.prefixCls}__content`)},i(a.content),3)]),title:r(()=>[l("p",{class:o(`${e.prefixCls}__title`)},i(a.title),3),l("div",null,[(s(!0),p(_,null,m(a.description,t=>(s(),c(f,{key:t,class:"mb-2"},{default:r(()=>[d(i(t),1)]),_:2},1024))),128))])]),_:2},1024),l("div",null,[(s(!0),p(_,null,m(e.actions,t=>(s(),p("div",{key:t.text,class:o(`${e.prefixCls}__action`)},[t.icon?(s(),c(I,{key:0,class:o(`${e.prefixCls}__action-icon`),icon:t.icon,color:t.color},null,8,["class","icon","color"])):g("",!0),d(" "+i(t.text),1)],2))),128)),l("span",{class:o(`${e.prefixCls}__time`)},i(a.time),3)])]),_:2},1024))),128))]),_:1},8,["class"])}var J=k(N,[["render",V],["__scopeId","data-v-67062fde"]]);export{J as default};
