var e=(e,t,a)=>new Promise(((o,n)=>{var l=e=>{try{i(a.next(e))}catch(t){n(t)}},s=e=>{try{i(a.throw(e))}catch(t){n(t)}},i=e=>e.done?o(e.value):Promise.resolve(e.value).then(l,s);i((a=a.apply(e,t)).next())}));import{ad as t,aB as a,az as o}from"./index.fe7e6ae2.js";import{r as n,$ as l,a as s,D as i,t as r}from"./vendor.d660e98f.js";function g(g){const u=n(null),c=n(!1),d=n(null);let p;function S(){const e=s(u);return e||o("The table instance has not been obtained yet, please make sure the table is presented when performing the table operation!"),e}return[function(e,o){l((()=>{u.value=null,c.value=null})),s(c)&&t()&&e===s(u)||(u.value=e,d.value=o,g&&e.setProps(a(g)),c.value=!0,null==p||p(),p=i((()=>g),(()=>{g&&e.setProps(a(g))}),{immediate:!0,deep:!0}))},{reload:t=>e(this,null,(function*(){S().reload(t)})),setProps:e=>{S().setProps(e)},redoHeight:()=>{S().redoHeight()},setLoading:e=>{S().setLoading(e)},getDataSource:()=>S().getDataSource(),getColumns:({ignoreIndex:e=!1}={})=>{const t=S().getColumns({ignoreIndex:e})||[];return r(t)},setColumns:e=>{S().setColumns(e)},setTableData:e=>S().setTableData(e),setPagination:e=>S().setPagination(e),deleteSelectRowByKey:e=>{S().deleteSelectRowByKey(e)},getSelectRowKeys:()=>r(S().getSelectRowKeys()),getSelectRows:()=>r(S().getSelectRows()),clearSelectedRowKeys:()=>{S().clearSelectedRowKeys()},setSelectedRowKeys:e=>{S().setSelectedRowKeys(e)},getPaginationRef:()=>S().getPaginationRef(),getSize:()=>r(S().getSize()),updateTableData:(e,t,a)=>S().updateTableData(e,t,a),getRowSelection:()=>r(S().getRowSelection()),getCacheColumns:()=>r(S().getCacheColumns()),getForm:()=>s(d),setShowPagination:t=>e(this,null,(function*(){S().setShowPagination(t)})),getShowPagination:()=>r(S().getShowPagination()),expandAll:()=>{S().expandAll()},collapseAll:()=>{S().collapseAll()}}]}export{g as u};
