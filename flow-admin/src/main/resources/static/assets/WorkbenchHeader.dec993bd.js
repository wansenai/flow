import{y as s,bt as e,j as a,Z as t,B as r,F as l,v as n,J as c,bu as d}from"./vendor.880b4c6c.js";/* empty css              */import{f as x}from"./index.a33a5e4d.js";import{h as i}from"./header.d801b988.js";var o=s({components:{Avatar:e},setup(){const s=x();return{userinfo:a((()=>s.getUserInfo)),headerImg:i}}});const m={class:"lg:flex"},f={class:"md:ml-6 flex flex-col justify-center md:mt-0 mt-2"},p={class:"md:text-lg text-md"},u=n("span",{class:"text-secondary"}," 今日晴，20℃ - 32℃！ ",-1),v=d('<div class="flex flex-1 justify-end md:mt-0 mt-4"><div class="flex flex-col justify-center text-right"><span class="text-secondary"> 待办 </span><span class="text-2xl">2/10</span></div><div class="flex flex-col justify-center text-right md:mx-16 mx-12"><span class="text-secondary"> 项目 </span><span class="text-2xl">8</span></div><div class="flex flex-col justify-center text-right md:mr-10 mr-4"><span class="text-secondary"> 团队 </span><span class="text-2xl">300</span></div></div>',1);o.render=function(s,e,a,d,x,i){const o=t("Avatar");return r(),l("div",m,[n(o,{src:s.userinfo.avatar||s.headerImg,size:72,class:"!mx-auto !block"},null,8,["src"]),n("div",f,[n("h1",p,"早安, "+c(s.userinfo.realName)+", 开始您一天的工作吧！",1),u]),v])};export default o;
