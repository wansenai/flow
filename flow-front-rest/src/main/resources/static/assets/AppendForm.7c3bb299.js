var B=(t,a,r)=>new Promise((s,i)=>{var e=o=>{try{n(r.next(o))}catch(l){i(l)}},p=o=>{try{n(r.throw(o))}catch(l){i(l)}},n=o=>o.done?s(o.value):Promise.resolve(o.value).then(e,p);n((r=r.apply(t,a)).next())});import{B as $,w as P}from"./useForm.3471eae6.js";import{L as g,a as h,cM as F,I as _,ew as k,v as I,aF as u,o as d,i as f,z as m,m as b,B as C,j as v}from"./index.c57fe5f3.js";import{P as y}from"./index.3848c581.js";import"./index.2d2cf5d8.js";import"./index.293bd36c.js";import"./useFlexGapSupport.98fd76c0.js";import"./_baseIteratee.dee2c06b.js";import"./get.3a02c577.js";import"./useSize.21a58576.js";import"./index.ff970ca1.js";import"./index.de3e4c67.js";import"./index.9aeebd75.js";import"./index.30feb700.js";import"./index.4e0b3e92.js";import"./index.4c4a19fa.js";import"./eagerComputed.0a66574f.js";import"./transButton.eef0876e.js";import"./index.31823370.js";import"./index.2d15e188.js";import"./useWindowSizeFn.79f9ec92.js";import"./FullscreenOutlined.b80e75d8.js";import"./useRefs.f276032e.js";import"./download.380b75fd.js";import"./index.4cf3e8f8.js";import"./ClockCircleOutlined.4668fdd4.js";import"./index.837c71ef.js";import"./uniqBy.d4a6eb1d.js";import"./index.76280d33.js";import"./index.57fcc66b.js";import"./useContentViewHeight.8526963a.js";import"./ArrowLeftOutlined.2479d1c9.js";import"./index.3e3a0ce4.js";const S=h({components:{BasicForm:$,CollapseContainer:F,PageWrapper:y,[_.name]:_,Button:k},setup(){const[t,{appendSchemaByField:a,removeSchemaByFiled:r,validate:s}]=P({schemas:[{field:"field0a",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});function i(){return B(this,null,function*(){try{const o=yield s()}catch(o){}})}const e=I(1);function p(){a({field:`field${e.value}a`,component:"Input",label:"\u5B57\u6BB5"+e.value,colProps:{span:8},required:!0},""),a({field:`field${e.value}b`,component:"Input",label:"\u5B57\u6BB5"+e.value,colProps:{span:8},required:!0},""),a({field:`${e.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),e.value++}function n(o){r([`field${o}a`,`field${o}b`,`${o}`]),e.value--}return{register:t,handleSubmit:i,add:p,del:n}}});function q(t,a,r,s,i,e){const p=u("Button"),n=u("BasicForm"),o=u("CollapseContainer"),l=u("PageWrapper");return d(),f(l,{title:"\u8868\u5355\u589E\u5220\u793A\u4F8B"},{default:m(()=>[b(o,{title:"\u8868\u5355\u589E\u5220"},{default:m(()=>[b(n,{onRegister:t.register,onSubmit:t.handleSubmit},{add:m(({field:c})=>[Number(c)===0?(d(),f(p,{key:0,onClick:t.add},{default:m(()=>[C("+")]),_:1},8,["onClick"])):v("",!0),c>0?(d(),f(p,{key:1,onClick:w=>t.del(c)},{default:m(()=>[C("-")]),_:2},1032,["onClick"])):v("",!0)]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var so=g(S,[["render",q]]);export{so as default};