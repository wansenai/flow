import{_ as t}from"./useModal.9d70781f.js";import{_ as e}from"./Description.vue_vue&type=script&lang.1a91b957.js";import{u as s}from"./useDescription.844b8d19.js";import{d as o}from"./index.f8d8fadd.js";import{getDescSchema as r}from"./data.0c0097d3.js";import{k as i,K as a,o as n,n as d,Q as p,q as c,N as m}from"./vendor.bc3b2d68.js";import"./useWindowSizeFn.ade0e88c.js";/* empty css              *//* empty css              */var f=i({name:"ErrorLogDetailModal",components:{BasicModal:t,Description:e},props:{info:{type:Object,default:null}},setup(){const{t:t}=o(),[e]=s({column:2,schema:r()});return{register:e,useI18n:o,t:t}}});f.render=function(t,e,s,o,r,i){const f=a("Description"),l=a("BasicModal");return n(),d(l,m({width:800,title:t.t("sys.errorLog.tableActionDesc")},t.$attrs),{default:p((()=>[c(f,{data:t.info,onRegister:t.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default f;
