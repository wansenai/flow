import{k as t,bm as e,bs as a,K as s,o as r,n as i,P as n,q as o,X as d,s as m,N as l}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{dynamicInfoItems as c}from"./data.06c5ab46.js";import{h as p}from"./header.d801b988.js";import{m as f}from"./index.e2ea082d.js";/* empty css              */var u=t({props:{dataSource:Array},components:{Card:e,List:a,ListItem:a.Item,ListItemMeta:a.Item.Meta,Icon:f},setup:t=>({items:c,headerImg:p})});const I=d("更多");u.render=function(t,e,a,c,p,f){const u=s("a-button"),j=s("Icon"),x=s("ListItemMeta"),L=s("ListItem"),b=s("List"),M=s("Card");return r(),i(M,l({title:"最新动态"},t.$attrs),{extra:n((()=>[o(u,{type:"link",size:"small"},{default:n((()=>[I])),_:1})])),default:n((()=>[o(b,{"item-layout":"horizontal","data-source":t.items},{renderItem:n((({item:t})=>[o(L,null,{default:n((()=>[o(x,null,{description:n((()=>[d(m(t.date),1)])),title:n((()=>[d(m(t.name)+" ",1),o("span",{innerHTML:t.desc},null,8,["innerHTML"])])),avatar:n((()=>[o(j,{icon:t.avatar,size:30},null,8,["icon"])])),_:2},1024)])),_:2},1024)])),_:1},8,["data-source"])])),_:1},16)};export default u;
