import{_ as e}from"./TableImg.840b2332.js";import{f as o}from"./BasicForm.d12ec528.js";import{u as t}from"./useTable.14907d98.js";import{j as i,k as n,l as a,m as r}from"./dictionary.1c333251.js";import{_ as s}from"./PageWrapper.0a593267.js";import{g as c}from"./index.68bdfa67.js";import{b as d}from"./useModal.40813107.js";import l from"./DictionaryModal.8caaf427.js";import{k as p,r as m,K as u,o as f,n as b,q as j,Q as h,X as g,Y as y}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.831c770a.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.86f4c026.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.69c99d5f.js";/* empty css              *//* empty css              */import"./download.684fb6a2.js";import"./StrengthMeter.e21abcab.js";import"./usePageContext.a9e23595.js";/* empty css              *//* empty css              */const{createMessage:w}=c();var x=p({name:"DictionaryTable",components:{BasicTable:e,DictionaryModal:l,PageWrapper:s,TableAction:o},setup(e,{emit:o}){const[s,{openModal:c,setModalProps:l}]=d(),p=m(""),[u,{reload:f,setProps:b,setTableData:j,setSelectedRowKeys:h}]=t({title:"列表",api:i,columns:n,formConfig:{labelWidth:120,schemas:a,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},immediate:!1,clickToRowSelect:!0,rowSelection:{type:"radio",columnWidth:40},useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!0,pagination:!0,rowKey:"id",actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:u,registerModal:s,dictTypeId:p,handleDeleteStop:function(e,o){o.stopPropagation()},clickDictionary:function(e){h(e.id),o("handleSelect",e.id)},changeDictionary:function({keys:e,rows:t}){o("handleSelect",t[0].id)},filterByDictType:function(e){p.value=e,b({searchInfo:{dicTypeId:e}}),f({page:1})},cleanTableData:function(){j([]),p.value=""},handleCreate:function(){""!==p.value?(l({title:"新增字典"}),c(!0,{record:{dicTypeId:p.value},isUpdate:!1})):w.warning("请选择数据类型！",2)},handleEdit:function(e,o){o.stopPropagation(),l({title:"修改字典"}),c(!0,{record:e,isUpdate:!0})},handleDelete:function(e){r(e.id).then((()=>{f()}))},handleSuccess:function(){f()}}}});const S={class:"bg-white m-4 mr-0 overflow-hidden dictionary"},T=y("新增");x.render=function(e,o,t,i,n,a){const r=u("a-button"),s=u("TableAction"),c=u("BasicTable"),d=u("DictionaryModal");return f(),b("div",S,[j(c,{onRegister:e.registerTable,onRowClick:e.clickDictionary,onSelectionChange:e.changeDictionary,class:"w-4/4 xl:w-5/5"},{toolbar:h((()=>[""!==e.dictTypeId?(f(),b(r,{key:0,type:"primary",onClick:e.handleCreate},{default:h((()=>[T])),_:1},8,["onClick"])):g("",!0)])),action:h((({record:o})=>[j(s,{actions:[{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",onClick:e.handleDeleteStop.bind(null,o),popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister","onRowClick","onSelectionChange"]),j(d,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;
