import{_ as e}from"./TableImg.2c9119a6.js";import"./BasicForm.19c32012.js";import{u as o}from"./useTable.d6fddac6.js";import{getBasicColumns as t,getBasicShortColumns as n}from"./tableData.3f3da3f1.js";import{h as i}from"./index.e99064e4.js";import{d as s}from"./table.a786ef49.js";import{y as a,Z as c,B as l,F as r,v as d,a2 as m,a9 as f}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.e45ae65c.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.bf73380f.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.56c740a0.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.45c1baba.js";/* empty css              *//* empty css              *//* empty css              */import"./download.1143de04.js";import"./base64Conver.bb012c73.js";import"./index.d495e6fa.js";var u=a({components:{BasicTable:e},setup(){const{createMessage:e}=i();function a(){}const[c,{setLoading:l,setColumns:r,getColumns:d,getDataSource:m,reload:f,getPaginationRef:u,setPagination:g,getSelectRows:p,getSelectRowKeys:b,setSelectedRowKeys:C,clearSelectedRowKeys:j}]=o({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:s,columns:t(),rowKey:"id",showTableSetting:!0,onChange:a,rowSelection:{type:"checkbox"},onColumnsChange:e=>{}});return{registerTable:c,changeLoading:function(){l(!0),setTimeout((()=>{l(!1)}),1e3)},changeColumns:function(){r(n())},reloadTable:function(){r(t()),f({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){g({current:2}),f()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){C(["0","1","2"])},clearSelect:function(){j()},onChange:a}}});const g={class:"p-4"},p={class:"mb-4"},b=f(" 还原 "),C=f(" 开启loading "),j=f(" 更改Columns "),k=f(" 获取Columns "),x=f(" 获取表格数据 "),S=f(" 跳转到第2页 "),w={class:"mb-4"},R=f(" 获取选中行 "),T=f(" 获取选中行Key "),_=f(" 设置选中行 "),y=f(" 清空选中行 "),h=f(" 获取分页信息 ");u.render=function(e,o,t,n,i,s){const a=c("a-button"),f=c("BasicTable");return l(),r("div",g,[d("div",p,[d(a,{class:"mr-2",onClick:e.reloadTable},{default:m((()=>[b])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.changeLoading},{default:m((()=>[C])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.changeColumns},{default:m((()=>[j])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getColumn},{default:m((()=>[k])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getTableData},{default:m((()=>[x])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.setPaginationInfo},{default:m((()=>[S])),_:1},8,["onClick"])]),d("div",w,[d(a,{class:"mr-2",onClick:e.getSelectRowList},{default:m((()=>[R])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:m((()=>[T])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:m((()=>[_])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.clearSelect},{default:m((()=>[y])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getPagination},{default:m((()=>[h])),_:1},8,["onClick"])]),d(f,{onRegister:e.registerTable},null,8,["onRegister"])])};export default u;
