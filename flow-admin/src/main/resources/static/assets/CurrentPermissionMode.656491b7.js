import{a8 as s,ai as e,b1 as o}from"./index.33a0330f.js";import{k as i,aV as n,f as r,K as a,o as t,n as m,q as d,Q as c,Y as l,s as p}from"./vendor.bc3b2d68.js";/* empty css              */var u=i({name:"CurrentPermissionMode",components:{Divider:n},setup(){const i=s(),n=r((()=>i.getProjectConfig.permissionMode)),{togglePermissionMode:a}=e();return{permissionMode:n,PermissionModeEnum:o,togglePermissionMode:a}}});const f={class:"mt-2"},M=l(" 当前权限模式： "),g=l(" 切换权限模式 ");u.render=function(s,e,o,i,n,r){const u=a("a-button"),P=a("Divider");return t(),m("div",f,[M,d(u,{type:"link"},{default:c((()=>[l(p(s.permissionMode===s.PermissionModeEnum.BACK?"后台权限模式":"前端角色权限模式"),1)])),_:1}),d(u,{class:"ml-4",onClick:s.togglePermissionMode,type:"primary"},{default:c((()=>[g])),_:1},8,["onClick"]),d(P)])};export default u;
