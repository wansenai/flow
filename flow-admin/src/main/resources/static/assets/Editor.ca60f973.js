import{B as m}from"./BasicForm.6afa01de.js";import{_ as d,ah as u,h as c}from"./index.9eb02b52.js";import{T as l}from"./index.08e7dd63.js";import{P as j}from"./index.77f474a0.js";import{A as x,a0 as s,B as f,a1 as C,a6 as i,w as n,z as b}from"./vendor.7bee64cc.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.1445cecb.js";/* empty css                *//* empty css                *//* empty css                */import"./index.30115123.js";import"./useWindowSizeFn.30e15ddc.js";/* empty css                */import"./uuid.2b29000c.js";import"./download.78bd314d.js";import"./base64Conver.bb012c73.js";import"./index.83641cbd.js";/* empty css                *//* empty css                */import"./useContentViewHeight.52836077.js";const h=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:t})=>b(l,{value:e[t],onChange:o=>{e[t]=o}})}],_=x({components:{BasicForm:m,CollapseContainer:u,PageWrapper:j},setup(){const{createMessage:e}=c();return{schemas:h,handleSubmit:t=>{e.success("click search,values:"+JSON.stringify(t))}}}});function B(e,t,o,g,v,F){const r=s("BasicForm"),a=s("CollapseContainer"),p=s("PageWrapper");return f(),C(p,{title:"\u5BCC\u6587\u672C\u5D4C\u5165\u8868\u5355\u793A\u4F8B"},{default:i(()=>[n(a,{title:"\u5BCC\u6587\u672C\u8868\u5355"},{default:i(()=>[n(r,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var Y=d(_,[["render",B]]);export{Y as default};
