import{B as e,a as o}from"./index.5b995397.js";import{z as s,Z as t,D as a,F as r,a3 as l,w as i,a9 as n}from"./vendor.11d66826.js";import"./index.514e05b1.js";import"./useWindowSizeFn.9fecf134.js";var d=s({components:{BasicModal:e},setup(){const[e,{closeModal:s,setModalProps:t}]=o();return{register:e,closeModal:s,setModalProps:()=>{t({title:"Modal New Title"})}}}});const c=n(" 从内部关闭弹窗 "),p=n(" 从内部修改title ");d.render=function(e,o,s,n,d,u){const M=t("a-button"),m=t("BasicModal");return a(),r(m,{onRegister:e.register,title:"Modal Title",helpMessage:["提示1","提示2"],okButtonProps:{disabled:!0}},{default:l((()=>[i(M,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:l((()=>[c])),_:1},8,["onClick"]),i(M,{type:"primary",onClick:e.setModalProps},{default:l((()=>[p])),_:1},8,["onClick"])])),_:1},8,["onRegister"])};export default d;
