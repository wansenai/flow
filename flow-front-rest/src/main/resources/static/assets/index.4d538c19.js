import{_ as e}from"./TableImg.6aad73d2.js";import"./useForm.168d35a0.js";import{u as a}from"./useTable.68bf052d.js";import{_ as s}from"./PageWrapper.bf8b0064.js";import{k as o,aT as t,bm as r,af as n,bi as i,b_ as d,bd as m,K as p,o as c,n as u,P as f,q as b,X as j,s as l}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{haveDownTableSchema as x,searchFormSchema as h}from"./data.66752124.js";import g from"./ProcessHeader.d4005cec.js";import w from"./LaunchButton.b18ed4ed.js";import{b as I,h as P}from"./process.8a42e76d.js";/* empty css              */import"./index.e2ea082d.js";/* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.4f1b8c18.js";import"./useModal.a510cdd9.js";import"./onMountedOrActivated.a3bdff8d.js";import"./useSortable.ab79833a.js";/* empty css              */import"./CountdownInput.d5a0767d.js";import"./download.1a585a2f.js";import"./StrengthMeter.6622ea04.js";import"./usePageContext.8ac4efa6.js";/* empty css              *//* empty css              *//* empty css              */var v=o({components:{BasicTable:e,ProcessHeader:g,LaunchButton:w,PageWrapper:s,[t.name]:t,[r.name]:r,AEmpty:n,[i.name]:i,[i.Item.name]:i.Item,[d.name]:d,[d.Step.name]:d.Step,[m.name]:m,[m.TabPane.name]:m.TabPane},setup(){const[e,{getForm:s}]=a({api:I,title:"",columns:x,formConfig:{labelWidth:120,schemas:h,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,pagination:!0,showIndexColumn:!0,canResize:!1});return P().then((e=>{const{updateSchema:a}=s();a({field:"appSn",componentProps:{options:e}})})),{registerHaveDownTable:e}}});const S={class:"m-1 desc-wrap process"};v.render=function(e,a,s,o,t,r){const n=p("launch-button"),i=p("process-header"),d=p("router-link"),m=p("BasicTable"),x=p("PageWrapper");return c(),u(x,{title:"流程中心",contentBackground:"",class:"!mt-4"},{extra:f((()=>[b(n)])),footer:f((()=>[b(i,{current:"have-down"})])),default:f((()=>[b("div",S,[b(m,{onRegister:e.registerHaveDownTable},{nameRender:f((({record:e})=>[b(d,{to:`/process/view/${e.processDefinitionKey}?taskId=${e.taskId}&procInstId=${e.processInstanceId}&businessKey=${e.businessKey}`},{default:f((()=>[j(l(e.formName),1)])),_:2},1032,["to"])])),_:1},8,["onRegister"])])])),_:1})};export default v;
