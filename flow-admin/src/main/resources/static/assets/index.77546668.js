import{_ as e}from"./BasicForm.52dd7a78.js";import{u as o}from"./useForm.141421b5.js";import t from"./PersonTable.e7517dc1.js";import{_ as r}from"./PageWrapper.c247b944.js";import{k as s,b3 as n,r as i,l as a,m as l,K as p,o as d,n as c,x as m,q as f,Y as u}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f72cd585.js";import"./CountdownInput.8664b7cc.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.a73129f6.js";import"./useWindowSizeFn.ade0e88c.js";/* empty css              *//* empty css              */import"./download.a0c19fe1.js";import"./StrengthMeter.d8342dd8.js";import"./TableImg.44575666.js";import"./onMountedOrActivated.06aaefd7.js";import"./useSortable.13695b66.js";import"./useExpose.c4c32617.js";import"./useTable.9cfd2432.js";import"./usePageContext.8ab99773.js";/* empty css              *//* empty css              */const b=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],j=[{label:"私密",value:"1"},{label:"公开",value:"2"}],P=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:b},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:b},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:j},required:!0,colProps:{offset:2}}],x=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:b},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:b},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:j},required:!0,colProps:{offset:2}}];var g=s({components:{BasicForm:e,PersonTable:t,PageWrapper:r,[n.name]:n},setup(){const e=i(null),[t,{validate:r}]=o({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1}),[s,{validate:n}]=o({baseColProps:{span:6},schemas:x,showActionButtonGroup:!1});return{register:t,registerTask:s,submitAll:function(){return o=this,t=null,s=function*(){try{e.value;const[o,t]=yield Promise.all([r(),n()])}catch(o){}},new Promise(((e,r)=>{var n=e=>{try{a(s.next(e))}catch(o){r(o)}},i=e=>{try{a(s.throw(e))}catch(o){r(o)}},a=o=>o.done?e(o.value):Promise.resolve(o.value).then(n,i);a((s=s.apply(o,t)).next())}));var o,t,s},tableRef:e}}});const v=m();a("data-v-3e634f2a");const h=u(" 提交 ");l();const q=v(((e,o,t,r,s,n)=>{const i=p("BasicForm"),a=p("a-card"),l=p("PersonTable"),m=p("a-button"),u=p("PageWrapper");return d(),c(u,{class:"high-form",title:"高级表单",contentBackground:"",content:" 高级表单常见于一次性输入和提交大批量数据的场景。",contentClass:"p-4"},{rightFooter:v((()=>[f(m,{type:"primary",onClick:e.submitAll},{default:v((()=>[h])),_:1},8,["onClick"])])),default:v((()=>[f(a,{title:"仓库管理",bordered:!1},{default:v((()=>[f(i,{onRegister:e.register},null,8,["onRegister"])])),_:1}),f(a,{title:"任务管理",bordered:!1,class:"mt-5"},{default:v((()=>[f(i,{onRegister:e.registerTask},null,8,["onRegister"])])),_:1}),f(a,{title:"成员管理",bordered:!1,class:"mt-5"},{default:v((()=>[f(l,{ref:"tableRef"},null,512)])),_:1})])),_:1})}));g.render=q,g.__scopeId="data-v-3e634f2a";export default g;
