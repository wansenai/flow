var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n;import i from"./Step1.bc9e710d.js";import p from"./Step2.6ee7d2a4.js";import a from"./Step3.019032bd.js";import{_ as s}from"./PageWrapper.d199a033.js";import{k as d,c9 as c,r as m,A as l,H as u,l as f,m as j,K as b,o as x,n as S,x as v,q as P,w as h,v as y,X as g}from"./vendor.9d9efc92.js";/* empty css              */import"./BasicForm.4b5e3079.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.734d8392.js";import"./CountdownInput.b71977b9.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.b121dc3d.js";import"./useWindowSizeFn.0534066c.js";/* empty css              *//* empty css              */import"./download.48c86db0.js";import"./StrengthMeter.14956067.js";import"./useForm.c00e8219.js";import"./data.2505cb7f.js";/* empty css              *//* empty css              */import"./usePageContext.2e777b50.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var N=d({components:{Step1:i,Step2:p,Step3:a,PageWrapper:s,[c.name]:c,[c.Step.name]:c.Step},setup(){const e=m(0),i=l({initSetp2:!1,initSetp3:!1});return((e,i)=>{for(var p in i||(i={}))r.call(i,p)&&o(e,p,i[p]);if(t)for(var p of t(i))n.call(i,p)&&o(e,p,i[p]);return e})({current:e,handleStep1Next:function(t){e.value++,i.initSetp2=!0},handleStep2Next:function(t){e.value++,i.initSetp3=!0},handleRedo:function(){e.value=0,i.initSetp2=!1,i.initSetp3=!1},handleStepPrev:function(){e.value--}},u(i))}});const w=v();f("data-v-3b1653d3");const O={class:"step-form-form"},_={class:"mt-5"};j();const k=w(((e,t,r,n,o,i)=>{const p=b("a-step"),a=b("a-steps"),s=b("Step1"),d=b("Step2"),c=b("Step3"),m=b("PageWrapper");return x(),S(m,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:w((()=>[P("div",O,[P(a,{current:e.current},{default:w((()=>[P(p,{title:"填写转账信息"}),P(p,{title:"确认转账信息"}),P(p,{title:"完成"})])),_:1},8,["current"])]),P("div",_,[h(P(s,{onNext:e.handleStep1Next},null,8,["onNext"]),[[y,0===e.current]]),e.initSetp2?h((x(),S(d,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[y,1===e.current]]):g("",!0),e.initSetp3?h((x(),S(c,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[y,2===e.current]]):g("",!0)])])),_:1})}));N.render=k,N.__scopeId="data-v-3b1653d3";export default N;