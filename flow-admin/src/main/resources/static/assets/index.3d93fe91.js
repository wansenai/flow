import{_ as e}from"./TableImg.840b2332.js";import{f as o}from"./BasicForm.d12ec528.js";import{u as t}from"./useTable.14907d98.js";import{g as a,d as i}from"./jobGrade.c1dac3e6.js";import{_ as n}from"./PageWrapper.0a593267.js";import s from"./JobGradeTypeList.a642f87b.js";import{b as r}from"./useModal.40813107.js";import{_ as d,c,s as l}from"./JobGradeModal.90e4894e.js";import{k as p,aw as m,r as u,u as f,K as b,o as j,n as x,Q as g,q as h,Y as C}from"./vendor.9d9efc92.js";import{g as w}from"./index.68bdfa67.js";/* empty css              *//* empty css              */import"./useForm.831c770a.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.86f4c026.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.69c99d5f.js";/* empty css              *//* empty css              */import"./download.684fb6a2.js";import"./StrengthMeter.e21abcab.js";import"./usePageContext.a9e23595.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.e79165c2.js";import"./useContextMenu.edb2fdbf.js";import"./jobGradeType.1c48f182.js";const{createMessage:S}=w();var T=p({name:"JobGrade",components:{BasicTable:e,PageWrapper:n,JobGradeTypeList:s,JobGradeModal:d,TableAction:o,Popconfirm:m},setup(){const[e,{openModal:o,setModalProps:n}]=r(),s=u({}),[d,{reload:p}]=t({title:"列表",api:a,immediate:!1,columns:c,formConfig:{labelWidth:120,schemas:l,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,pagination:!1,showIndexColumn:!1,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});function m(e){s.value=e;let o={typeId:e?e.id:""};p({searchInfo:o})}return{registerTable:d,registerModal:e,handleCreate:function(){f(s).code?(n({title:"新增职级"}),o(!0,{record:{typeId:f(s).id,typeCode:f(s).code},isUpdate:!0})):S.warning("请选择分类！",2)},handleEdit:function(e){n({title:"修改职级"}),o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){i(e.id).then((()=>{p()}))},handleSuccess:function(){m(s.value)},handleSelect:m}}});const y=C("新增");T.render=function(e,o,t,a,i,n){const s=b("JobGradeTypeList"),r=b("a-button"),d=b("TableAction"),c=b("BasicTable"),l=b("JobGradeModal"),p=b("PageWrapper");return j(),x(p,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:g((()=>[h(s,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),h(c,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:g((()=>[h(r,{type:"primary",onClick:e.handleCreate},{default:g((()=>[y])),_:1},8,["onClick"])])),action:g((({record:o})=>[h(d,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),h(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default T;
