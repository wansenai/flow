var e=(e,t,i)=>new Promise(((o,n)=>{var a=e=>{try{l(i.next(e))}catch(t){n(t)}},d=e=>{try{l(i.throw(e))}catch(t){n(t)}},l=e=>e.done?o(e.value):Promise.resolve(e.value).then(a,d);l((i=i.apply(e,t)).next())}));import{_ as t}from"./TableImg.7eb6c017.js";import{f as i}from"./BasicForm.86cd97da.js";import{u as o}from"./useTable.5323312b.js";import{o as n}from"./select.c7643434.js";import{d as a}from"./table.2b83964f.js";import{k as d,r as l,K as r,o as s,n as m,q as c,Q as p}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.87ab8aa1.js";import"./index.33a0330f.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./useModal.b44b8cab.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.a66d7f9a.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0bc8da65.js";/* empty css              *//* empty css              */import"./download.5032960b.js";import"./StrengthMeter.ae9219d5.js";const u=[{title:"输入框",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:150},{title:"默认输入状态",dataIndex:"name7",editRow:!0,width:150},{title:"输入框校验",dataIndex:"name1",editRow:!0,align:"left",editRule:!0,width:150},{title:"输入框函数校验",dataIndex:"name2",editRow:!0,align:"right",editRule:t=>e(this,null,(function*(){return"2"===t?"不能输入该值":""}))},{title:"数字输入框",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:150},{title:"下拉框",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:n},width:200},{title:"日期选择",dataIndex:"date",editRow:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:150},{title:"时间选择",dataIndex:"time",editRow:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:100},{title:"勾选框",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:100},{title:"开关",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:100}];var b=d({components:{BasicTable:t,TableAction:i},setup(){const t=l(""),[i]=o({title:"可编辑行示例",api:a,columns:u,showIndexColumn:!1,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function n(e){var i;t.value=e.key,null==(i=e.onEdit)||i.call(e,!0)}function d(e){var i;t.value="",null==(i=e.onEdit)||i.call(e,!1,!1)}function r(i){return e(this,null,(function*(){var e;(yield null==(e=i.onEdit)?void 0:e.call(i,!1,!0))&&(t.value="")}))}return{registerTable:i,handleEdit:n,createActions:function(e,i){return e.editable?[{label:"保存",onClick:r.bind(null,e,i)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:d.bind(null,e,i)}}]:[{label:"编辑",disabled:!!t.value&&t.value!==e.key,onClick:n.bind(null,e)}]}}}});const f={class:"p-4"};b.render=function(e,t,i,o,n,a){const d=r("TableAction"),l=r("BasicTable");return s(),m("div",f,[c(l,{onRegister:e.registerTable},{action:p((({record:t,column:i})=>[c(d,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"])])};export default b;
