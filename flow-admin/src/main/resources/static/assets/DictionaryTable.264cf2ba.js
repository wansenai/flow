import{_ as e}from"./TableImg.a2bdf37d.js";import{f as o}from"./BasicForm.a5827375.js";import{u as i}from"./useTable.87c711db.js";import{j as t,k as n,l as a,m as r}from"./dictionary.9de16acb.js";import{_ as s}from"./PageWrapper.cdcc7f53.js";import{g as d}from"./index.bafd7c31.js";import{b as c}from"./useModal.5da775c6.js";import l from"./DictionaryModal.2b05ec0b.js";import{k as m,r as p,K as u,o as f,n as b,q as j,Q as h,X as g,Y as y}from"./vendor.d159a66e.js";/* empty css              *//* empty css              */import"./useForm.823d07cd.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.aa1e233c.js";import"./onMountedOrActivated.40a48c91.js";/* empty css              */import"./useSortable.eabf1042.js";import"./useExpose.0ecfeadd.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.94d45b12.js";/* empty css              *//* empty css              */import"./download.9743db94.js";import"./StrengthMeter.44711fa4.js";import"./usePageContext.58f59678.js";/* empty css              *//* empty css              */const{createMessage:w}=d();var x=m({name:"DictionaryTable",components:{BasicTable:e,DictionaryModal:l,PageWrapper:s,TableAction:o},setup(e,{emit:o}){const[s,{openModal:d}]=c(),l=p(""),[m,{reload:u,setProps:f,setTableData:b,setSelectedRowKeys:j}]=i({title:"列表",api:t,columns:n,formConfig:{labelWidth:120,schemas:a,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},immediate:!1,clickToRowSelect:!0,rowSelection:{type:"radio",columnWidth:40},useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!0,pagination:!0,rowKey:"id",actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:m,registerModal:s,dictTypeId:l,handleDeleteStop:function(e,o){o.stopPropagation()},clickDictionary:function(e){j(e.id),o("handleSelect",e.id)},changeDictionary:function({keys:e,rows:i}){o("handleSelect",i[0].id)},filterByDictType:function(e){l.value=e,f({searchInfo:{dicTypeId:e}}),u({page:1})},cleanTableData:function(){b([]),l.value=""},handleCreate:function(){""!==l.value?d(!0,{record:{dicTypeId:l.value},isUpdate:!1}):w.warning("请选择数据类型！",2)},handleEdit:function(e,o){o.stopPropagation(),d(!0,{record:e,isUpdate:!0})},handleDelete:function(e){r(e.id).then((()=>{u()}))},handleSuccess:function(){u()}}}});const S={class:"bg-white m-4 mr-0 overflow-hidden dictionary"},T=y("新增");x.render=function(e,o,i,t,n,a){const r=u("a-button"),s=u("TableAction"),d=u("BasicTable"),c=u("DictionaryModal");return f(),b("div",S,[j(d,{onRegister:e.registerTable,onRowClick:e.clickDictionary,onSelectionChange:e.changeDictionary,class:"w-4/4 xl:w-5/5"},{toolbar:h((()=>[""!==e.dictTypeId?(f(),b(r,{key:0,type:"primary",onClick:e.handleCreate},{default:h((()=>[T])),_:1},8,["onClick"])):g("",!0)])),action:h((({record:o})=>[j(s,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",onClick:e.handleDeleteStop.bind(null,o),popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister","onRowClick","onSelectionChange"]),j(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;
