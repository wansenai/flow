import{_ as e}from"./BasicForm.86cd97da.js";import{u as a}from"./useForm.87ab8aa1.js";import{ae as o,ao as t}from"./index.33a0330f.js";import{k as n,ad as i,r,K as s,o as d,n as l,Q as p,q as c,X as m,Y as u}from"./vendor.bc3b2d68.js";import{_ as f}from"./PageWrapper.ba7be9e5.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0bc8da65.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.b44b8cab.js";import"./useWindowSizeFn.ade0e88c.js";/* empty css              *//* empty css              */import"./download.5032960b.js";import"./StrengthMeter.ae9219d5.js";import"./usePageContext.a11cc1be.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.06aaefd7.js";var b=n({components:{BasicForm:e,CollapseContainer:o,PageWrapper:f,[i.name]:i,Button:t},setup(){const[e,{appendSchemaByField:o,removeSchemaByFiled:t,validate:n}]=a({schemas:[{field:"field0a",component:"Input",label:"字段0",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"字段0",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});const i=r(1);return{register:e,handleSubmit:function(){return e=this,a=null,o=function*(){try{yield n()}catch(e){}},new Promise(((t,n)=>{var i=e=>{try{s(o.next(e))}catch(a){n(a)}},r=e=>{try{s(o.throw(e))}catch(a){n(a)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(i,r);s((o=o.apply(e,a)).next())}));var e,a,o},add:function(){o({field:`field${i.value}a`,component:"Input",label:"字段"+i.value,colProps:{span:8},required:!0},""),o({field:`field${i.value}b`,component:"Input",label:"字段"+i.value,colProps:{span:8},required:!0},""),o({field:`${i.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),i.value++},del:function(e){t([`field${e}a`,`field${e}b`,`${e}`]),i.value--}}}});const j=u("+"),x=u("-");b.render=function(e,a,o,t,n,i){const r=s("Button"),u=s("BasicForm"),f=s("CollapseContainer"),b=s("PageWrapper");return d(),l(b,{title:"表单增删示例"},{default:p((()=>[c(f,{title:"表单增删"},{default:p((()=>[c(u,{onRegister:e.register,onSubmit:e.handleSubmit},{add:p((({field:a})=>[0===Number(a)?(d(),l(r,{key:0,onClick:e.add},{default:p((()=>[j])),_:1},8,["onClick"])):m("",!0),a>0?(d(),l(r,{key:1,onClick:o=>e.del(a)},{default:p((()=>[x])),_:2},1032,["onClick"])):m("",!0)])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default b;
