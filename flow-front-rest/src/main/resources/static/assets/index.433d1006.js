import{_ as e}from"./TableImg.d975601e.js";import"./useForm.d555d56b.js";import{u as s}from"./useTable.b099d30d.js";import{P as o}from"./index.3e5e5108.js";import{y as t,aX as a,b6 as r,am as n,bn as i,c3 as d,bk as m,Z as p,B as c,F as u,a1 as j,v as b,a8 as f,J as l}from"./vendor.3dc066e5.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{todoTableSchema as x,searchFormSchema as h}from"./data.59a6f3c8.js";import g from"./ProcessHeader.d2074b3d.js";import I from"./LaunchButton.928a5d2e.js";import{a as T,h as B}from"./process.424afad8.js";/* empty css              */import"./index.b41e2c0e.js";/* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.308e6090.js";import"./index.b437b00c.js";import"./onMountedOrActivated.c01d8630.js";import"./useSortable.be81b66a.js";/* empty css              *//* empty css              */import"./index.82d0d758.js";import"./download.55ddd36a.js";import"./index.c14dc721.js";/* empty css              *//* empty css              */import"./useContentViewHeight.16e0f08b.js";var P=t({components:{BasicTable:e,ProcessHeader:g,LaunchButton:I,PageWrapper:o,[a.name]:a,[r.name]:r,AEmpty:n,[i.name]:i,[i.Item.name]:i.Item,[d.name]:d,[d.Step.name]:d.Step,[m.name]:m,[m.TabPane.name]:m.TabPane},setup(){const[e,{getForm:o}]=s({api:T,title:"",columns:x,formConfig:{labelWidth:120,schemas:h,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,pagination:!0,showIndexColumn:!0,canResize:!1});return B().then((e=>{const{updateSchema:s}=o();s({field:"appSn",componentProps:{options:e}})})),{registerTodoTable:e}}});const S={class:"m-1 desc-wrap process"};P.render=function(e,s,o,t,a,r){const n=p("launch-button"),i=p("process-header"),d=p("router-link"),m=p("BasicTable"),x=p("PageWrapper");return c(),u(x,{title:"流程中心",contentBackground:"",class:"!mt-4"},{extra:j((()=>[b(n)])),footer:j((()=>[b(i,{current:"todo"})])),default:j((()=>[b("div",S,[b(m,{onRegister:e.registerTodoTable},{nameRender:j((({record:e})=>[b(d,{to:`/process/approve/${e.processDefinitionKey}?taskId=${e.taskId}&procInstId=${e.processInstanceId}&businessKey=${e.businessKey}`},{default:j((()=>[f(l(e.formName),1)])),_:2},1032,["to"])])),_:1},8,["onRegister"])])])),_:1})};export default P;
