import{j as n}from"./index.51c58f14.js";import{k as o,K as t,o as a,n as c,P as s,X as e}from"./vendor.d660e98f.js";var r=o({name:"ActionButtons",components:{},setup(o,{emit:t}){const a=n();return{doLaunch:function(){t("doLaunch")},doSave:function(){},doBack:function(){history.state.back?history.back():a("/process/launch")}}}});const u=e(" 提交 ");r.render=function(n,o,e,r,i,d){const f=t("a-button");return a(),c(f,{type:"primary",onClick:n.doLaunch},{default:s((()=>[u])),_:1},8,["onClick"])};export default r;
