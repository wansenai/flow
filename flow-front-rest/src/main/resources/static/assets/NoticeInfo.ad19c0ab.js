import{k as t,bm as e,bs as s,K as a,o as i,n as o,P as r,q as d,s as n,N as m,X as l}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{m as c}from"./index.ee676e78.js";var p=t({props:{dataSource:Array},components:{Card:e,List:s,ListItem:s.Item,ListItemMeta:s.Item.Meta,Icon:c},setup:t=>({items:t.dataSource})});const f=l("更多"),u={class:""},x={class:"content"};p.render=function(t,e,s,l,c,p){const I=a("a-button"),j=a("ListItem"),b=a("List"),y=a("Card");return i(),o(y,m({title:"通知公告"},t.$attrs,{bodyStyle:"padding-top:0;"}),{extra:r((()=>[d(I,{type:"link",size:"small"},{default:r((()=>[f])),_:1})])),default:r((()=>[d(b,{"item-layout":"horizontal","data-source":t.items},{renderItem:r((({item:t})=>[d(j,{class:"custom-list-item"},{actions:r((()=>[d("span",u,n(t.date),1)])),default:r((()=>[d("div",x,[d("a",{href:"/",title:t.title},n(t.title),9,["title"])])])),_:2},1024)])),_:1},8,["data-source"])])),_:1},16)};export default p;
