import{k as t,aI as n,bp as o,K as e,o as s,n as a,P as i,q as r}from"./vendor.0482ef83.js";import{j as c}from"./index.bfefd9f4.js";var u=t({name:"ActionButtons",components:{Button:n,LeftOutlined:o},setup(t,{emit:n}){const o=c();return{doBack:function(){history.state.back?history.back():o("/process/launch")}}}});u.render=function(t,n,o,c,u,f){const d=e("LeftOutlined"),k=e("Button");return s(),a(k,{onClick:t.doBack,type:"link",title:"返回"},{icon:i((()=>[r(d)])),_:1},8,["onClick"])};export default u;
