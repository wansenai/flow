import{k as e,bn as s,bm as t,br as a,r,K as n,o as d,n as o,P as l,q as m,s as i,N as c,X as f}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{f as u}from"./index.fe7e6ae2.js";import{h as x}from"./header.d801b988.js";var p=e({components:{Avatar:s,Card:t,Badge:a},setup(){const e=u(),s=r();return r(!1),r(new Date),s.value=e.getUserInfo||{},{headerImg:x,loginUser:s}}});const g={class:"md:ml-6 flex flex-col justify-center md:mt-0 !mt-4"},j={class:"md:text-lg text-md",style:{"text-align":"center"}},b=m("span",{class:"text-secondary"},"公司：中国石化-湖南石化",-1),v=m("span",{class:"text-secondary"},"部门：市场营销部",-1),y={class:"md:ml-6 flex justify-center md:mt-0 !mt-4"},h=f("我的考勤"),k=f("异常处理");p.render=function(e,s,t,a,r,f){const u=n("Avatar"),x=n("a-button"),p=n("Badge"),U=n("Card");return d(),o(U,c({title:""},e.$attrs),{default:l((()=>[m("div",null,[m(u,{src:e.headerImg,size:72,class:"!mx-auto !block"},null,8,["src"]),m("div",g,[m("h1",j,i(e.loginUser.name)+"("+i(e.loginUser.code)+")",1),b,v]),m("div",y,[m(x,{type:"link"},{default:l((()=>[h])),_:1}),m(p,{count:"5",offset:[-8,0]},{default:l((()=>[m(x,{type:"link"},{default:l((()=>[k])),_:1})])),_:1})])])])),_:1},16)};export default p;
