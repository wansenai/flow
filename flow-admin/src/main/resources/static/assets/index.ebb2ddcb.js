var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n;import a from"./Step1.dc0a51b3.js";import i from"./Step2.82932841.js";import p from"./Step3.7ba3abc0.js";import{_ as s}from"./PageWrapper.30f94524.js";import{k as d,c9 as c,r as m,A as f,H as l,l as u,m as j,K as b,o as x,n as S,x as v,q as P,w as h,v as y,X as g}from"./vendor.bc3b2d68.js";/* empty css              */import"./BasicForm.312985a0.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f8d8fadd.js";import"./CountdownInput.7e403a5b.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.9d70781f.js";import"./useWindowSizeFn.ade0e88c.js";/* empty css              *//* empty css              */import"./download.7c99dac2.js";import"./StrengthMeter.16507ade.js";import"./useForm.a3596aad.js";import"./data.2505cb7f.js";/* empty css              *//* empty css              */import"./usePageContext.03c6eac3.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.06aaefd7.js";var N=d({components:{Step1:a,Step2:i,Step3:p,PageWrapper:s,[c.name]:c,[c.Step.name]:c.Step},setup(){const e=m(0),a=f({initSetp2:!1,initSetp3:!1});return((e,a)=>{for(var i in a||(a={}))r.call(a,i)&&o(e,i,a[i]);if(t)for(var i of t(a))n.call(a,i)&&o(e,i,a[i]);return e})({current:e,handleStep1Next:function(t){e.value++,a.initSetp2=!0},handleStep2Next:function(t){e.value++,a.initSetp3=!0},handleRedo:function(){e.value=0,a.initSetp2=!1,a.initSetp3=!1},handleStepPrev:function(){e.value--}},l(a))}});const w=v();u("data-v-3b1653d3");const O={class:"step-form-form"},_={class:"mt-5"};j();const k=w(((e,t,r,n,o,a)=>{const i=b("a-step"),p=b("a-steps"),s=b("Step1"),d=b("Step2"),c=b("Step3"),m=b("PageWrapper");return x(),S(m,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:w((()=>[P("div",O,[P(p,{current:e.current},{default:w((()=>[P(i,{title:"填写转账信息"}),P(i,{title:"确认转账信息"}),P(i,{title:"完成"})])),_:1},8,["current"])]),P("div",_,[h(P(s,{onNext:e.handleStep1Next},null,8,["onNext"]),[[y,0===e.current]]),e.initSetp2?h((x(),S(d,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[y,1===e.current]]):g("",!0),e.initSetp3?h((x(),S(c,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[y,2===e.current]]):g("",!0)])])),_:1})}));N.render=k,N.__scopeId="data-v-3b1653d3";export default N;
