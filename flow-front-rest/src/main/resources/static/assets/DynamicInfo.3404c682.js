import{y as t,b6 as a,bw as e,aU as s,aT as i,Z as o,B as r,F as d,a1 as n,v as m,J as l,a0 as c,a8 as p}from"./vendor.3dc066e5.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{_ as u}from"./index.06582e88.js";var f=t({props:{dataSource:Array},components:{Card:a,List:e,ListItem:e.Item,ListItemMeta:e.Item.Meta,Icon:u,Row:s,Col:i},setup:t=>({items:t.dataSource})});const x=p("更多"),I={class:""},j={class:"content"};f.render=function(t,a,e,s,i,p){const u=o("a-button"),f=o("ListItem"),y=o("List"),b=o("Card");return r(),d(b,c({title:"新闻动态"},t.$attrs,{bodyStyle:"padding-top:0;"}),{extra:n((()=>[m(u,{type:"link",size:"small"},{default:n((()=>[x])),_:1})])),default:n((()=>[m(y,{"item-layout":"horizontal","data-source":t.items},{renderItem:n((({item:t})=>[m(f,{class:"custom-list-item"},{actions:n((()=>[m("span",I,l(t.date),1)])),default:n((()=>[m("div",j,[m("a",{href:"/",title:t.title},l(t.title),9,["title"])])])),_:2},1024)])),_:1},8,["data-source"])])),_:1},16)};export default f;
