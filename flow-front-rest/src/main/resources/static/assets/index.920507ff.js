import{B as b}from"./TableImg.de209ce9.js";import"./useForm.7c0bdf24.js";import{u as g}from"./useTable.25843a9c.js";import{P as T}from"./index.874a1287.js";import{L as B,a as k,aF as e,o as n,i as c,z as t,m as a,l as x,B as y,t as P,j as v}from"./index.72db8407.js";import{T as r}from"./index.a3257fd9.js";import{todoTableSchema as C,searchFormSchema as $}from"./data.cbc43c17.js";import I from"./ProcessHeader.b73f1c2a.js";import S from"./LaunchButton.64f46cfe.js";import{a as N,n as w}from"./process.dd434e1e.js";import"./index.e6389b66.js";import"./index.36485229.js";import"./index.749aa331.js";import"./index.3f09cbf1.js";import"./get.e445709e.js";import"./useWindowSizeFn.de59245c.js";import"./index.c8942ff6.js";import"./FullscreenOutlined.9ae4cdf6.js";import"./index.9c574014.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.bf887c4f.js";import"./eagerComputed.0db327f8.js";import"./scrollTo.fb2911f3.js";import"./index.c93d4b04.js";import"./index.707d7df2.js";import"./index.8b7903b4.js";import"./useFlexGapSupport.fbfe2813.js";import"./_baseIteratee.d6fc2b22.js";import"./useSize.540680fe.js";import"./index.6fb43bc1.js";import"./transButton.fa38355c.js";import"./index.fae68114.js";import"./useRefs.a6f29f73.js";import"./download.6d890c70.js";import"./index.76c88f70.js";import"./ClockCircleOutlined.2dda8149.js";import"./index.bb8df062.js";import"./uniqBy.ce71960e.js";import"./index.1644c3be.js";import"./index.778de78a.js";import"./useContentViewHeight.e9d9b7fd.js";import"./ArrowLeftOutlined.e4cf2a58.js";import"./index.dfa59e10.js";const F=k({components:{BasicTable:b,ProcessHeader:I,LaunchButton:S,PageWrapper:T,[r.name]:r,[r.TabPane.name]:r.TabPane},setup(){const[s,{getForm:p}]=g({api:N,title:"",columns:C,formConfig:{labelWidth:120,schemas:$,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,pagination:!0,showIndexColumn:!0,canResize:!1});return w().then(i=>{const{updateSchema:m}=p();m({field:"appSn",componentProps:{options:i}})}),{registerTodoTable:s}}}),A={class:"mt-2 desc-wrap process"};function D(s,p,i,m,R,V){const u=e("launch-button"),l=e("process-header"),d=e("router-link"),_=e("BasicTable"),f=e("PageWrapper");return n(),c(f,{title:"\u6D41\u7A0B\u4E2D\u5FC3",class:"!mt-4 process-list-container"},{extra:t(()=>[a(u)]),footer:t(()=>[a(l,{current:"todo"})]),default:t(()=>[x("div",A,[a(_,{onRegister:s.registerTodoTable},{bodyCell:t(({column:h,record:o})=>[h.key==="formName"?(n(),c(d,{key:0,to:`/process/approve/${o.processDefinitionKey}?taskId=${o.taskId}&procInstId=${o.processInstanceId}&businessKey=${o.businessKey}`},{default:t(()=>[y(P(o.formName),1)]),_:2},1032,["to"])):v("",!0)]),_:1},8,["onRegister"])])]),_:1})}var $o=B(F,[["render",D]]);export{$o as default};