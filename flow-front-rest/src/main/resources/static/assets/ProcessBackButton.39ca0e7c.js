import{k as t,aI as n,bp as o,K as e,o as s,n as a,P as c,q as i}from"./vendor.d660e98f.js";import{j as r}from"./index.dd44fc8e.js";var u=t({name:"ActionButtons",components:{Button:n,LeftOutlined:o},setup(t,{emit:n}){const o=r();return{doBack:function(){history.state.back?history.back():o("/process/launch")}}}});u.render=function(t,n,o,r,u,d){const f=e("LeftOutlined"),k=e("Button");return s(),a(k,{onClick:t.doBack,type:"link",title:"返回"},{icon:c((()=>[i(f)])),_:1},8,["onClick"])};export default u;
