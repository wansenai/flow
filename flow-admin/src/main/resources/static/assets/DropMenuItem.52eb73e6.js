import{y as e,ay as n,j as s,ad as t,Z as o,B as a,F as r,a2 as i,v as c,J as l}from"./vendor.880b4c6c.js";import{_ as u,p as m}from"./index.10e3b51a.js";var p=e({name:"DropdownMenuItem",components:{MenuItem:n.Item,Icon:u},props:{key:m.string,text:m.string,icon:m.string},setup(e){const n=t();return{itemKey:s((()=>{var s,t;return e.key||(null==(t=null==(s=null==n?void 0:n.vnode)?void 0:s.props)?void 0:t.key)}))}}});const d={class:"flex items-center"};p.render=function(e,n,s,t,u,m){const p=o("Icon"),v=o("MenuItem");return a(),r(v,{key:e.itemKey},{default:i((()=>[c("span",d,[c(p,{icon:e.icon,class:"mr-1"},null,8,["icon"]),c("span",null,l(e.text),1)])])),_:1})};export default p;
