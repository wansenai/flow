import{_ as e}from"./TableImg.2c9119a6.js";import"./BasicForm.19c32012.js";import{getBasicColumns as o,getBasicShortColumns as t}from"./tableData.3f3da3f1.js";import{h as i}from"./index.e99064e4.js";import{d as n}from"./table.a786ef49.js";import{y as a,r as s,u as c,Z as l,B as r,F as f,v as m,a2 as d,a9 as u}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.e45ae65c.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.bf73380f.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.56c740a0.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.45c1baba.js";/* empty css              *//* empty css              *//* empty css              */import"./download.1143de04.js";import"./base64Conver.bb012c73.js";import"./index.d495e6fa.js";var p=a({components:{BasicTable:e},setup(){const e=s(null),{createMessage:a}=i();function l(){const o=c(e);if(!o)throw new Error("tableAction is null");return o}return{tableRef:e,api:n,columns:o(),changeLoading:function(){l().setLoading(!0),setTimeout((()=>{l().setLoading(!1)}),1e3)},changeColumns:function(){l().setColumns(t())},reloadTable:function(){l().setColumns(o()),l().reload({page:1})},getColumn:function(){a.info("请在控制台查看！")},getTableData:function(){a.info("请在控制台查看！")},getPagination:function(){a.info("请在控制台查看！")},setPaginationInfo:function(){l().setPagination({current:2}),l().reload()},getSelectRowList:function(){a.info("请在控制台查看！")},getSelectRowKeyList:function(){a.info("请在控制台查看！")},setSelectedRowKeyList:function(){l().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){l().clearSelectedRowKeys()}}}});const b={class:"p-4"},C={class:"mb-4"},j=u(" 还原 "),g=u(" 开启loading "),k=u(" 更改Columns "),x=u(" 获取Columns "),w=u(" 获取表格数据 "),R=u(" 跳转到第2页 "),S={class:"mb-4"},_=u(" 获取选中行 "),y=u(" 获取选中行Key "),L=u(" 设置选中行 "),T=u(" 清空选中行 "),v=u(" 获取分页信息 ");p.render=function(e,o,t,i,n,a){const s=l("a-button"),c=l("BasicTable");return r(),f("div",b,[m("div",C,[m(s,{class:"mr-2",onClick:e.reloadTable},{default:d((()=>[j])),_:1},8,["onClick"]),m(s,{class:"mr-2",onClick:e.changeLoading},{default:d((()=>[g])),_:1},8,["onClick"]),m(s,{class:"mr-2",onClick:e.changeColumns},{default:d((()=>[k])),_:1},8,["onClick"]),m(s,{class:"mr-2",onClick:e.getColumn},{default:d((()=>[x])),_:1},8,["onClick"]),m(s,{class:"mr-2",onClick:e.getTableData},{default:d((()=>[w])),_:1},8,["onClick"]),m(s,{class:"mr-2",onClick:e.setPaginationInfo},{default:d((()=>[R])),_:1},8,["onClick"])]),m("div",S,[m(s,{class:"mr-2",onClick:e.getSelectRowList},{default:d((()=>[_])),_:1},8,["onClick"]),m(s,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:d((()=>[y])),_:1},8,["onClick"]),m(s,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:d((()=>[L])),_:1},8,["onClick"]),m(s,{class:"mr-2",onClick:e.clearSelect},{default:d((()=>[T])),_:1},8,["onClick"]),m(s,{class:"mr-2",onClick:e.getPagination},{default:d((()=>[v])),_:1},8,["onClick"])]),m(c,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default p;