import{B as b}from"./TableImg.0ddee7b2.js";import"./useForm.a695ce24.js";import{u as g}from"./useTable.8bd50aaa.js";import{P as T}from"./index.a1475d48.js";import{L as B,a as k,aF as e,o as n,i as c,z as t,m as a,l as x,B as y,t as P,j as v}from"./index.1ef32c91.js";import{T as r}from"./index.26a0bf38.js";import{todoTableSchema as C,searchFormSchema as $}from"./data.b75801bb.js";import I from"./ProcessHeader.0ffcc85f.js";import S from"./LaunchButton.e7051819.js";import{a as N,n as w}from"./process.78689059.js";import"./index.b16dcce6.js";import"./index.086de617.js";import"./index.2ec369e2.js";import"./index.0273a40a.js";import"./get.386a6e4e.js";import"./useWindowSizeFn.bdd6b031.js";import"./index.192e4e3c.js";import"./FullscreenOutlined.342c70dd.js";import"./index.eb1ace44.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.d2289ef6.js";import"./eagerComputed.0cb4d82e.js";import"./scrollTo.52721e5b.js";import"./index.c8814b75.js";import"./index.62db5d30.js";import"./index.47cfff6d.js";import"./useFlexGapSupport.0db0d170.js";import"./_baseIteratee.e7ae1d8e.js";import"./useSize.a6a316da.js";import"./index.aa203d79.js";import"./transButton.247ac1dd.js";import"./index.ec67ae3a.js";import"./useRefs.5083d02e.js";import"./download.ab358637.js";import"./index.76df47e2.js";import"./ClockCircleOutlined.6900dd4a.js";import"./index.dd31a320.js";import"./uniqBy.4de9f103.js";import"./index.543d24de.js";import"./index.77f5c683.js";import"./useContentViewHeight.686f3dd4.js";import"./ArrowLeftOutlined.e6a77d03.js";import"./index.abc98ec8.js";const F=k({components:{BasicTable:b,ProcessHeader:I,LaunchButton:S,PageWrapper:T,[r.name]:r,[r.TabPane.name]:r.TabPane},setup(){const[s,{getForm:p}]=g({api:N,title:"",columns:C,formConfig:{labelWidth:120,schemas:$,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,pagination:!0,showIndexColumn:!0,canResize:!1});return w().then(i=>{const{updateSchema:m}=p();m({field:"appSn",componentProps:{options:i}})}),{registerTodoTable:s}}}),A={class:"mt-2 desc-wrap process"};function D(s,p,i,m,R,V){const u=e("launch-button"),l=e("process-header"),d=e("router-link"),_=e("BasicTable"),f=e("PageWrapper");return n(),c(f,{title:"\u6D41\u7A0B\u4E2D\u5FC3",class:"!mt-4 process-list-container"},{extra:t(()=>[a(u)]),footer:t(()=>[a(l,{current:"todo"})]),default:t(()=>[x("div",A,[a(_,{onRegister:s.registerTodoTable},{bodyCell:t(({column:h,record:o})=>[h.key==="formName"?(n(),c(d,{key:0,to:`/process/approve/${o.processDefinitionKey}?taskId=${o.taskId}&procInstId=${o.processInstanceId}&businessKey=${o.businessKey}`},{default:t(()=>[y(P(o.formName),1)]),_:2},1032,["to"])):v("",!0)]),_:1},8,["onRegister"])])]),_:1})}var $o=B(F,[["render",D]]);export{$o as default};
