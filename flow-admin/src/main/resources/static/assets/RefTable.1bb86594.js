import{_ as e}from"./TableImg.375209e8.js";import"./BasicForm.de2d0bb0.js";import{getBasicColumns as o,getBasicShortColumns as t}from"./tableData.83d6955e.js";import{g as n}from"./index.1f477f84.js";import{d as i}from"./table.c49c76c7.js";import{k as s,r as a,u as c,K as l,o as r,n as d,q as m,Q as f,Y as u}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.906ec90d.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./useModal.0a504584.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.55e358dc.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.ed12ce5f.js";/* empty css              *//* empty css              */import"./download.d21b7c84.js";import"./StrengthMeter.f927a9c9.js";var p=s({components:{BasicTable:e},setup(){const e=a(null),{createMessage:s}=n();function l(){const o=c(e);if(!o)throw new Error("tableAction is null");return o}return{tableRef:e,api:i,columns:o(),changeLoading:function(){l().setLoading(!0),setTimeout((()=>{l().setLoading(!1)}),1e3)},changeColumns:function(){l().setColumns(t())},reloadTable:function(){l().setColumns(o()),l().reload({page:1})},getColumn:function(){s.info("请在控制台查看！")},getTableData:function(){s.info("请在控制台查看！")},getPagination:function(){s.info("请在控制台查看！")},setPaginationInfo:function(){l().setPagination({current:2}),l().reload()},getSelectRowList:function(){s.info("请在控制台查看！")},getSelectRowKeyList:function(){s.info("请在控制台查看！")},setSelectedRowKeyList:function(){l().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){l().clearSelectedRowKeys()}}}});const b={class:"p-4"},C={class:"mb-4"},g=u(" 还原 "),j=u(" 开启loading "),k=u(" 更改Columns "),w=u(" 获取Columns "),x=u(" 获取表格数据 "),S=u(" 跳转到第2页 "),R={class:"mb-4"},_=u(" 获取选中行 "),L=u(" 获取选中行Key "),y=u(" 设置选中行 "),K=u(" 清空选中行 "),T=u(" 获取分页信息 ");p.render=function(e,o,t,n,i,s){const a=l("a-button"),c=l("BasicTable");return r(),d("div",b,[m("div",C,[m(a,{class:"mr-2",onClick:e.reloadTable},{default:f((()=>[g])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.changeLoading},{default:f((()=>[j])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.changeColumns},{default:f((()=>[k])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.getColumn},{default:f((()=>[w])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.getTableData},{default:f((()=>[x])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.setPaginationInfo},{default:f((()=>[S])),_:1},8,["onClick"])]),m("div",R,[m(a,{class:"mr-2",onClick:e.getSelectRowList},{default:f((()=>[_])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:f((()=>[L])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:f((()=>[y])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.clearSelect},{default:f((()=>[K])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.getPagination},{default:f((()=>[T])),_:1},8,["onClick"])]),m(c,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default p;
