import{_ as e}from"./TableImg.8ccd808f.js";import{f as o}from"./BasicForm.312985a0.js";import{u as i}from"./useTable.84f74a57.js";import{j as t,k as a,l as n,m as r}from"./dictionary.3236cca5.js";import{_ as s}from"./PageWrapper.30f94524.js";import{g as c}from"./index.f8d8fadd.js";import{b as d}from"./useModal.9d70781f.js";import l from"./DictionaryModal.3a0726a7.js";import{k as m,r as p,K as u,o as f,n as b,q as j,Q as h,X as g,Y as y}from"./vendor.bc3b2d68.js";/* empty css              *//* empty css              */import"./useForm.a3596aad.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.ade0e88c.js";import"./onMountedOrActivated.06aaefd7.js";/* empty css              */import"./useSortable.88a1af21.js";import"./useExpose.c4c32617.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.7e403a5b.js";/* empty css              *//* empty css              */import"./download.7c99dac2.js";import"./StrengthMeter.16507ade.js";import"./usePageContext.03c6eac3.js";/* empty css              *//* empty css              */const{createMessage:w}=c();var x=m({name:"DictionaryTable",components:{BasicTable:e,DictionaryModal:l,PageWrapper:s,TableAction:o},setup(e,{emit:o}){const[s,{openModal:c}]=d(),l=p(""),[m,{reload:u,setProps:f,setTableData:b,setSelectedRowKeys:j}]=i({title:"列表",api:t,columns:a,formConfig:{labelWidth:120,schemas:n,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},immediate:!1,clickToRowSelect:!0,rowSelection:{type:"radio",columnWidth:40},useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!0,pagination:!0,rowKey:"id",actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:m,registerModal:s,dictTypeId:l,handleDeleteStop:function(e,o){o.stopPropagation()},clickDictionary:function(e){j(e.id),o("handleSelect",e.id)},changeDictionary:function({keys:e,rows:i}){o("handleSelect",i[0].id)},filterByDictType:function(e){l.value=e,f({searchInfo:{dicTypeId:e}}),u({page:1})},cleanTableData:function(){b([]),l.value=""},handleCreate:function(){""!==l.value?c(!0,{record:{dicTypeId:l.value},isUpdate:!1}):w.warning("请选择数据类型！",2)},handleEdit:function(e,o){o.stopPropagation(),c(!0,{record:e,isUpdate:!0})},handleDelete:function(e){r(e.id).then((()=>{u()}))},handleSuccess:function(){u()}}}});const S={class:"bg-white m-4 mr-0 overflow-hidden dictionary"},T=y("新增");x.render=function(e,o,i,t,a,n){const r=u("a-button"),s=u("TableAction"),c=u("BasicTable"),d=u("DictionaryModal");return f(),b("div",S,[j(c,{onRegister:e.registerTable,onRowClick:e.clickDictionary,onSelectionChange:e.changeDictionary,class:"w-4/4 xl:w-5/5"},{toolbar:h((()=>[""!==e.dictTypeId?(f(),b(r,{key:0,type:"primary",onClick:e.handleCreate},{default:h((()=>[T])),_:1},8,["onClick"])):g("",!0)])),action:h((({record:o})=>[j(s,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",onClick:e.handleDeleteStop.bind(null,o),popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister","onRowClick","onSelectionChange"]),j(d,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;
