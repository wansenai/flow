import{_ as e}from"./useModal.a510cdd9.js";import{_ as t,u as s}from"./useDescription.3764ad2f.js";import{d as o}from"./index.e2ea082d.js";import{getDescSchema as r}from"./data.e52306eb.js";import{k as a,K as i,o as n,n as d,P as c,q as m,N as p}from"./vendor.d660e98f.js";import"./useWindowSizeFn.4f1b8c18.js";/* empty css              *//* empty css              */var f=a({name:"ErrorLogDetailModal",components:{BasicModal:e,Description:t},props:{info:{type:Object,default:null}},setup(){const{t:e}=o(),[t]=s({column:2,schema:r()});return{register:t,useI18n:o,t:e}}});f.render=function(e,t,s,o,r,a){const f=i("Description"),l=i("BasicModal");return n(),d(l,p({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:c((()=>[m(f,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default f;
