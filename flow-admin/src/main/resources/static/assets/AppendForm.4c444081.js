import{_ as e}from"./BasicForm.950a284a.js";import{u as o}from"./useForm.7635a38a.js";import{ag as a,aq as i}from"./index.1bc1d740.js";import{z as t,ak as n,r,Z as s,D as d,F as l,a3 as p,w as c,a8 as m,a9 as f}from"./vendor.11d66826.js";import{P as u}from"./index.dfbcae78.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.c48a0e31.js";/* empty css              *//* empty css              *//* empty css              */import"./index.037585c2.js";import"./useWindowSizeFn.9fecf134.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.aa9819c7.js";import"./base64Conver.bb012c73.js";import"./index.a66557fe.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.17f3c81d.js";import"./useContentViewHeight.a8198af7.js";var b=t({components:{BasicForm:e,CollapseContainer:a,PageWrapper:u,[n.name]:n,Button:i},setup(){const[e,{appendSchemaByField:a,removeSchemaByFiled:i,validate:t}]=o({schemas:[{field:"field0a",component:"Input",label:"字段0",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"字段0",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});const n=r(1);return{register:e,handleSubmit:function(){return e=this,o=null,a=function*(){try{yield t()}catch(e){}},new Promise(((i,t)=>{var n=e=>{try{s(a.next(e))}catch(o){t(o)}},r=e=>{try{s(a.throw(e))}catch(o){t(o)}},s=e=>e.done?i(e.value):Promise.resolve(e.value).then(n,r);s((a=a.apply(e,o)).next())}));var e,o,a},add:function(){a({field:`field${n.value}a`,component:"Input",label:"字段"+n.value,colProps:{span:8},required:!0},""),a({field:`field${n.value}b`,component:"Input",label:"字段"+n.value,colProps:{span:8},required:!0},""),a({field:`${n.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),n.value++},del:function(e){i([`field${e}a`,`field${e}b`,`${e}`]),n.value--}}}});const j=f("+"),x=f("-");b.render=function(e,o,a,i,t,n){const r=s("Button"),f=s("BasicForm"),u=s("CollapseContainer"),b=s("PageWrapper");return d(),l(b,{title:"表单增删示例"},{default:p((()=>[c(u,{title:"表单增删"},{default:p((()=>[c(f,{onRegister:e.register,onSubmit:e.handleSubmit},{add:p((({field:o})=>[0===Number(o)?(d(),l(r,{key:0,onClick:e.add},{default:p((()=>[j])),_:1},8,["onClick"])):m("",!0),o>0?(d(),l(r,{key:1,onClick:a=>e.del(o)},{default:p((()=>[x])),_:2},1032,["onClick"])):m("",!0)])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default b;
