import{_ as e}from"./TableImg.44575666.js";import{f as n}from"./BasicForm.52dd7a78.js";import{u as o}from"./useTable.9cfd2432.js";import{k as t,K as i,o as a,n as d,q as r,Q as s,Y as l}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.141421b5.js";import"./index.f72cd585.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./useModal.a73129f6.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.13695b66.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8664b7cc.js";/* empty css              *//* empty css              */import"./download.a0c19fe1.js";import"./StrengthMeter.d8342dd8.js";const c=[{title:"成员姓名",dataIndex:"name",editRow:!0},{title:"工号",dataIndex:"no",editRow:!0},{title:"所属部门",dataIndex:"dept",editRow:!0}],m=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var u=t({components:{BasicTable:e,TableAction:n},setup(){const[e,{getDataSource:n}]=o({columns:c,showIndexColumn:!1,dataSource:m,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function t(e){var n;null==(n=e.onEdit)||n.call(e,!0)}function i(e){var o;if(null==(o=e.onEdit)||o.call(e,!1),e.isNew){const o=n(),t=o.findIndex((n=>n.key===e.key));o.splice(t,1)}}function a(e){var n;null==(n=e.onEdit)||n.call(e,!1,!0)}return{registerTable:e,handleEdit:t,createActions:function(e,n){return e.editable?[{label:"保存",onClick:a.bind(null,e,n)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:i.bind(null,e,n)}}]:[{label:"编辑",onClick:t.bind(null,e)},{label:"删除"}]},handleAdd:function(){const e=n(),o={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};e.push(o)},getDataSource:n,handleEditChange:function(e){}}}});const p=l(" 新增成员 ");u.render=function(e,n,o,t,l,c){const m=i("TableAction"),u=i("BasicTable"),b=i("a-button");return a(),d("div",null,[r(u,{onRegister:e.registerTable,onEditChange:e.handleEditChange},{action:s((({record:n,column:o})=>[r(m,{actions:e.createActions(n,o)},null,8,["actions"])])),_:1},8,["onRegister","onEditChange"]),r(b,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:s((()=>[p])),_:1},8,["onClick"])])};export default u;
