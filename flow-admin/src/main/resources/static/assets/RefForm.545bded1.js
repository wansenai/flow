import{_ as e}from"./BasicForm.312985a0.js";import{ae as s,g as o}from"./index.f8d8fadd.js";import{_ as t}from"./PageWrapper.30f94524.js";import{k as l,r as a,K as i,o as n,n as r,Q as p,q as c,Y as d}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.7e403a5b.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              */import"./useModal.9d70781f.js";import"./useWindowSizeFn.ade0e88c.js";/* empty css              *//* empty css              */import"./download.7c99dac2.js";import"./StrengthMeter.16507ade.js";import"./usePageContext.03c6eac3.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.06aaefd7.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var u=l({components:{BasicForm:e,CollapseContainer:s,PageWrapper:t},setup(){const e=a(null),{createMessage:s}=o();return{formElRef:e,schemas:m,handleSubmit:e=>{s.success("click search,values:"+JSON.stringify(e))},setProps(s){const o=e.value;o&&o.setProps(s)}}}});const f={class:"mb-4"},b=d(" 更改labelWidth "),P=d(" 还原labelWidth "),C=d(" 更改Size "),j=d(" 还原Size "),h=d(" 禁用表单 "),k=d(" 解除禁用 "),_=d(" 紧凑表单 "),x=d(" 还原正常间距 "),v=d(" 操作按钮位置 "),S={class:"mb-4"},g=d(" 隐藏操作按钮 "),B=d(" 显示操作按钮 "),w=d(" 隐藏重置按钮 "),W=d(" 显示重置按钮 "),O=d(" 隐藏查询按钮 "),R=d(" 显示查询按钮 "),z=d(" 修改重置按钮 "),F=d(" 修改查询按钮 ");u.render=function(e,s,o,t,l,a){const d=i("a-button"),m=i("BasicForm"),u=i("CollapseContainer"),G=i("PageWrapper");return n(),r(G,{title:"Ref操作示例"},{default:p((()=>[c("div",f,[c(d,{onClick:s[1]||(s[1]=s=>e.setProps({labelWidth:150})),class:"mr-2"},{default:p((()=>[b])),_:1}),c(d,{onClick:s[2]||(s[2]=s=>e.setProps({labelWidth:120})),class:"mr-2"},{default:p((()=>[P])),_:1}),c(d,{onClick:s[3]||(s[3]=s=>e.setProps({size:"large"})),class:"mr-2"},{default:p((()=>[C])),_:1}),c(d,{onClick:s[4]||(s[4]=s=>e.setProps({size:"default"})),class:"mr-2"},{default:p((()=>[j])),_:1}),c(d,{onClick:s[5]||(s[5]=s=>e.setProps({disabled:!0})),class:"mr-2"},{default:p((()=>[h])),_:1}),c(d,{onClick:s[6]||(s[6]=s=>e.setProps({disabled:!1})),class:"mr-2"},{default:p((()=>[k])),_:1}),c(d,{onClick:s[7]||(s[7]=s=>e.setProps({compact:!0})),class:"mr-2"},{default:p((()=>[_])),_:1}),c(d,{onClick:s[8]||(s[8]=s=>e.setProps({compact:!1})),class:"mr-2"},{default:p((()=>[x])),_:1}),c(d,{onClick:s[9]||(s[9]=s=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:p((()=>[v])),_:1})]),c("div",S,[c(d,{onClick:s[10]||(s[10]=s=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:p((()=>[g])),_:1}),c(d,{onClick:s[11]||(s[11]=s=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:p((()=>[B])),_:1}),c(d,{onClick:s[12]||(s[12]=s=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:p((()=>[w])),_:1}),c(d,{onClick:s[13]||(s[13]=s=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:p((()=>[W])),_:1}),c(d,{onClick:s[14]||(s[14]=s=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:p((()=>[O])),_:1}),c(d,{onClick:s[15]||(s[15]=s=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:p((()=>[R])),_:1}),c(d,{onClick:s[16]||(s[16]=s=>e.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:p((()=>[z])),_:1}),c(d,{onClick:s[17]||(s[17]=s=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:p((()=>[F])),_:1})]),c(u,{title:"使用ref调用表单内部函数示例"},{default:p((()=>[c(m,{schemas:e.schemas,ref:"formElRef",labelWidth:100,onSubmit:e.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default u;
