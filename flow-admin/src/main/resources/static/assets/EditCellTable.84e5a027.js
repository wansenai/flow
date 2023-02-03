var m=(t,n,r)=>new Promise((d,a)=>{var p=e=>{try{u(r.next(e))}catch(i){a(i)}},o=e=>{try{u(r.throw(e))}catch(i){a(i)}},u=e=>e.done?d(e.value):Promise.resolve(e.value).then(p,o);u((r=r.apply(t,n)).next())});import{B as s}from"./TableImg.6b85bf08.js";import"./BasicForm.d8aa86d3.js";import{u as c}from"./useTable.60e7369f.js";import{o as l,t as C}from"./tree.140cadb1.js";import{d as F}from"./table.664f3fbc.js";import{az as E,a as f,aB as b,i as B,j as h,q as D,bV as A,H as w}from"./index.ef013507.js";import{P as x}from"./index.7e4b5f10.js";import"./index.64234a26.js";import"./Checkbox.d561740d.js";import"./index.d845ac75.js";import"./index.4dfcf0e9.js";import"./eagerComputed.487f958f.js";import"./useForm.d7bb3373.js";import"./index.4dfdb4ab.js";import"./index.1eabbb9a.js";import"./index.0210df95.js";import"./useSize.55446702.js";import"./useWindowSizeFn.37be93ea.js";import"./useContentViewHeight.d02bb685.js";import"./ArrowLeftOutlined.5616a4a1.js";import"./index.412dcca9.js";import"./transButton.750f7635.js";import"./index.4822de2c.js";import"./index.7f88299e.js";import"./index.0b0495b0.js";import"./uuid.2b29000c.js";import"./index.ac5849f2.js";import"./_baseIteratee.39b06e56.js";import"./get.fbc063d7.js";import"./DeleteOutlined.fda42126.js";import"./Form.36fbea16.js";import"./Col.55ed0272.js";import"./useFlexGapSupport.e51c8524.js";import"./index.4ff668bf.js";import"./FullscreenOutlined.d97e6502.js";import"./index.8a7cb11f.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.01e40c90.js";import"./index.27c2d820.js";import"./fromPairs.84aabb58.js";import"./scrollTo.f0dd617b.js";import"./index.eaeab232.js";/* empty css              *//* empty css               */import"./index.0e08ed6e.js";import"./index.edd8ff4a.js";import"./index.0bfe1343.js";import"./download.c25570af.js";import"./base64Conver.08b9f4ec.js";import"./index.30e1f68c.js";import"./useRefs.5ed2b70f.js";import"./index.4e2ec58e.js";import"./uniqBy.4bac5850.js";const I=[{title:"\u8F93\u5165\u6846",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"\u9ED8\u8BA4\u8F93\u5165\u72B6\u6001",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"\u8F93\u5165\u6846\u6821\u9A8C",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"\u8F93\u5165\u6846\u51FD\u6570\u6821\u9A8C",dataIndex:"name2",edit:!0,editRule:t=>m(void 0,null,function*(){return t==="2"?"\u4E0D\u80FD\u8F93\u5165\u8BE5\u503C":""}),width:200},{title:"\u6570\u5B57\u8F93\u5165\u6846",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200,editComponentProps:()=>({max:100,min:0}),editRender:({text:t})=>A(x,{percent:Number(t)})},{title:"\u4E0B\u62C9\u6846",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:l,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9\u6811",dataIndex:"name8",edit:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:C,resultField:"list"},width:200},{title:"\u65E5\u671F\u9009\u62E9",dataIndex:"date",edit:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:200},{title:"\u65F6\u95F4\u9009\u62E9",dataIndex:"time",edit:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:200},{title:"\u52FE\u9009\u6846",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:t=>t?"\u662F":"\u5426",width:200},{title:"\u5F00\u5173",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:t=>t?"\u5F00":"\u5173",width:200},{title:"\u5355\u9009\u6846",dataIndex:"radio1",edit:!0,editComponent:"RadioGroup",editComponentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},width:200},{title:"\u5355\u9009\u6309\u94AE\u6846",dataIndex:"radio2",edit:!0,editComponent:"RadioButtonGroup",editComponentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},width:200},{title:"\u8FDC\u7A0B\u5355\u9009\u6846",dataIndex:"radio3",edit:!0,editComponent:"ApiRadioGroup",editComponentProps:{api:l,resultField:"list",labelField:"name",valueField:"id"},width:200}],_=f({components:{BasicTable:s},setup(){const[t]=c({title:"\u53EF\u7F16\u8F91\u5355\u5143\u683C\u793A\u4F8B",api:F,columns:I,showIndexColumn:!1,bordered:!0}),{createMessage:n}=w();function r({record:o,index:u,key:e,value:i}){return!1}function d({value:o,key:u,id:e}){return n.loading({content:`\u6B63\u5728\u6A21\u62DF\u4FDD\u5B58${u}`,key:"_save_fake_data",duration:0}),new Promise(i=>{setTimeout(()=>{o===""?(n.error({content:"\u4FDD\u5B58\u5931\u8D25\uFF1A\u4E0D\u80FD\u4E3A\u7A7A",key:"_save_fake_data",duration:2}),i(!1)):(n.success({content:`\u8BB0\u5F55${e}\u7684${u}\u5DF2\u4FDD\u5B58`,key:"_save_fake_data",duration:2}),i(!0))},2e3)})}function a(Rt){return m(this,arguments,function*({record:o,index:u,key:e,value:i}){return yield d({id:o.id,key:e,value:i})})}function p(){}return{registerTable:t,handleEditEnd:r,handleEditCancel:p,beforeEditSubmit:a}}}),v={class:"p-4"};function P(t,n,r,d,a,p){const o=b("BasicTable");return B(),h("div",v,[D(o,{onRegister:t.registerTable,onEditEnd:t.handleEditEnd,onEditCancel:t.handleEditCancel,beforeEditSubmit:t.beforeEditSubmit},null,8,["onRegister","onEditEnd","onEditCancel","beforeEditSubmit"])])}var gt=E(_,[["render",P]]);export{gt as default};