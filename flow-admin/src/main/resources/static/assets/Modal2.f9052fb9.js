import{_ as e,a as s}from"./useModal.40813107.js";import{k as o,K as t,o as a,n as r,Q as l,q as i,N as n,Y as d}from"./vendor.9d9efc92.js";import"./index.68bdfa67.js";import"./useWindowSizeFn.0534066c.js";var c=o({components:{BasicModal:e},setup(){const[e,{closeModal:o,setModalProps:t}]=s();return{register:e,closeModal:o,setModalProps:()=>{t({title:"Modal New Title"})}}}});const p=d(" 从内部关闭弹窗 "),M=d(" 从内部修改title ");c.render=function(e,s,o,d,c,u){const m=t("a-button"),f=t("BasicModal");return a(),r(f,n(e.$attrs,{onRegister:e.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:l((()=>[i(m,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:l((()=>[p])),_:1},8,["onClick"]),i(m,{type:"primary",onClick:e.setModalProps},{default:l((()=>[M])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default c;
