import{f as e,ag as s}from"./index.dd44fc8e.js";import a from"./QuickNav.d0b0719e.js";import{k as t,bn as r,r as n,K as o,o as d,n as i,q as m,s as c}from"./vendor.d660e98f.js";/* empty css              */import{h as l}from"./header.d801b988.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./data.108c606b.js";import"./process.f0749243.js";var f=t({components:{Avatar:r,QuickNav:a},setup(){const a=e(),t=n(),r=n(!1);return n(new Date),t.value=a.getUserInfo||{},{headerImg:l,loading:r,loginUser:t,currentDate:s(new Date)}}});const p={class:"lg:flex"},u={class:"md:ml-6 flex flex-col justify-center md:mt-0 mt-2"},x={class:"md:text-lg text-md"},g={class:"text-secondary"},j={class:"flex-1 md:mt-0 mt-4"};f.render=function(e,s,a,t,r,n){const l=o("Avatar"),f=o("QuickNav");return d(),i("div",p,[m(l,{src:e.headerImg,size:72,class:"!mx-auto !block"},null,8,["src"]),m("div",u,[m("h1",x,c(e.loginUser.name),1),m("span",g,c(e.currentDate)+"，晴，20℃ - 32℃！ ",1)]),m("div",j,[m(f,{loading:e.loading,class:"enter-y"},null,8,["loading"])])])};export default f;
