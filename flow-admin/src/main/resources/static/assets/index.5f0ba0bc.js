var e=(e,n,a)=>new Promise(((t,o)=>{var l=e=>{try{r(a.next(e))}catch(n){o(n)}},s=e=>{try{r(a.throw(e))}catch(n){o(n)}},r=e=>e.done?t(e.value):Promise.resolve(e.value).then(l,s);r((a=a.apply(e,n)).next())}));import{z as n,ak as a,bk as t,aV as o,aU as l,r as s,u as r,A as i,B as d,Z as c,D as m,F as p,w as u,K as f,a9 as h}from"./vendor.11d66826.js";/* empty css              *//* empty css              */import{ag as g}from"./index.514e05b1.js";import{a as b}from"./download.0adfd0af.js";import{T as C}from"./index.4830a130.js";import{_ as y}from"./TableImg.c9ed598a.js";import{_ as T,h as N}from"./BasicForm.ae4250e1.js";import{u as v}from"./useTable.26f8956b.js";import{u as x}from"./useForm.213a5276.js";import"./base64Conver.bb012c73.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./onMountedOrActivated.17f3c81d.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.9fecf134.js";import"./index.5b995397.js";/* empty css              */import"./useSortable.6a86578b.js";/* empty css              *//* empty css              *//* empty css              */import"./index.6b57f630.js";/* empty css              */import"./index.ceaa815e.js";const w=[{field:"dbName",component:"Input",label:"数据库",labelWidth:80,componentProps:{defaultValue:"flow-6.6"},colProps:{span:6}},{field:"tableName",component:"Input",label:"表名",labelWidth:80,colProps:{span:6},required:!0,componentProps:({formModel:n,formActionType:a})=>({placeholder:"值改变时执行查询,查看控制台",onChange:a=>e(this,null,(function*(){let e=a.target.value;e=e.replace("tbl_","");let t=e.split("_");t=t.map((e=>e.toLowerCase().replace(/( |^)[a-z]/g,(e=>e.toUpperCase()))));const o=t.join(""),l=t;l[0]=l[0].toLowerCase(),n.className=o,n.lowerClassName=l.join("")}))})},{field:"module",component:"Input",label:"模块",labelWidth:80,colProps:{span:6},required:!0},{field:"className",component:"Input",label:"类名",labelWidth:80,colProps:{span:6},required:!0},{field:"lowerClassName",component:"Input",label:"类名小写",labelWidth:80,colProps:{span:6},required:!0},{field:"showLeftTree",component:"Switch",label:"显示左侧树",colProps:{span:2},labelWidth:80,componentProps:({formActionType:e})=>({onChange:n=>{e.updateSchema([{field:"leftTree",show:n}])}})},{field:"leftTree",component:"Select",label:"左侧树",show:!1,colProps:{span:8},componentProps:{options:[{label:"公司树",value:"CompanyTree",key:"CompanyTree"},{label:"组织树",value:"OrgTree",key:"OrgTree"},{label:"流程分类树",value:"FlowCategoryTree",key:"FlowCategoryTree"}]}}];const $=e=>{let n=e.split("_");n=n.map((e=>e.toLowerCase().replace(/( |^)[a-z]/g,(e=>e.toUpperCase()))));const a=n;return a[0]=a[0].toLowerCase(),a.join("")},M={varchar:"Input",int:"InputNumber",date:"DatePicker",timestamp:"DatePicker"},P=[];for(const W of N)P.push({label:W[0],value:W[0]});const S=[{title:"字段名",dataIndex:"columnName",width:150,align:"left"},{title:"数据类型",dataIndex:"dataType",width:80,align:"left"},{title:"描述",dataIndex:"comment",editRule:!0,edit:!0,align:"left",editComponentProps:{}},{title:"控件类型",dataIndex:"formType",edit:!0,editRule:!0,editComponent:"Select",editComponentProps:{options:P},width:180,align:"left"},{title:"验证规则",dataIndex:"ruleType",edit:!0,align:"left",editComponent:"Select",editComponentProps:{options:[{label:"名称",value:"name"},{label:"标识",value:"code"},{label:"备注",value:"remark"}]},width:140},{title:"是否必填",dataIndex:"required",edit:!0,align:"left",editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:120},{title:"表格显示",dataIndex:"showInTable",edit:!0,align:"left",editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:120},{title:"表单显示",dataIndex:"showInForm",edit:!0,align:"left",editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:120},{title:"字段长度",dataIndex:"fieldLength",width:80,align:"left"},{title:"默认值",dataIndex:"defaultValue",width:80,align:"left"}];var E=n({components:{BasicTable:y,BasicForm:T,Tinymce:C,Input:a,TextArea:a.TextArea,CollapseContainer:g,Tabs:t,TabPane:t.TabPane,[o.name]:o,[l.name]:l},setup(){const n=s({}),a=s(""),t=s(""),o=s(""),l=s(""),i=s(""),d=s("id\tvarchar\tNO\t40\t\t\\N\tPRI\nname\tvarchar\tYES\t32\t名称\t\\N\t\nurl\tvarchar\tYES\t128\t链接\t\\N\t\nsn\tvarchar\tYES\t64\t标识\t\\N\tMUL\ncomponent\tvarchar\tYES\t120\t组件\t\\N\t\nstatus\tint\tYES\t\\N\t是否启用 ： 1启用；0禁用\t\\N\t\nstate\tvarchar\tYES\t100\t存放该模块有哪些权限值可选\t\\N\t\nimage\tvarchar\tYES\t200\t图片路径\t\\N\t\norder_no\tint\tYES\t\\N\t模块的排序号\t\\N\t\npid\tvarchar\tYES\t40\t父模块id\t\\N\t\napp_id\tvarchar\tYES\t40\t系统id\t\\N\t\nis_show\tint\tYES\t\\N\t\t1\t\ncreate_time\ttimestamp\tYES\t\\N\t创建时间\t\\N\t\ncreator\tvarchar\tYES\t32\t创建人\t\\N\t\nupdate_time\ttimestamp\tYES\t\\N\t更新时间\t\\N\t\nupdator\tvarchar\tYES\t32\t更新人\t\\N\t\ndel_flag\tint\tYES\t\\N\t删除标识0:删除1：存在\t1\t"),[c,{updateSchema:m,setProps:p,validate:u}]=x({labelWidth:120,schemas:w,showAdvancedButton:!1,showSubmitButton:!0,showActionButtonGroup:!0,showResetButton:!1,actionColOptions:{span:24},submitButtonOptions:{text:"提交"},submitFunc:function(){return e(this,null,(function*(){try{const e=yield u();n.value=e,e.fields=g();let s="";s=e.showLeftTree?(e=>{let n="";return"CompanyTree"===e.leftTree?n="companyId":"OrgTree"===e.leftTree?n="deptId":"FlowCategoryTree"===e.leftTree&&(n="categoryId"),`<template>\n  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">\n    <${e.leftTree} class="w-1/4 xl:w-1/5" @select="handleSelect" />\n    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5">\n      <template #toolbar>\n        <a-button type="primary" @click="handleCreate">新增</a-button>\n      </template>\n      <template #action="{ record }">\n        <TableAction\n          :actions="[\n            {\n              icon: 'clarity:note-edit-line',\n              onClick: handleEdit.bind(null, record),\n            },\n            {\n              icon: 'ant-design:delete-outlined',\n              color: 'error',\n              popConfirm: {\n                title: '是否确认删除',\n                confirm: handleDelete.bind(null, record),\n              },\n            },\n          ]"\n        />\n      </template>\n    </BasicTable>\n    <${e.className}Modal @register="registerModal" @success="handleSuccess" />\n  </PageWrapper>\n</template>\n<script lang="ts">\n  import { defineComponent, ref, unref } from 'vue';\n  import { BasicTable, useTable, TableAction } from '/@/components/Table';\n  import { get${e.className}ListByPage, deleteByIds } from '/@/api/${e.module}/${e.lowerClassName}';\n  import { PageWrapper } from '/@/components/Page';\n  import ${e.leftTree} from '/@/views/compaonents/leftTree/${e.leftTree}.vue';\n  import { useModal } from '/@/components/Modal';\n  import ${e.className}Modal from './${e.className}Modal.vue';\n  import { Popconfirm } from "ant-design-vue";\n\n  import { columns, searchFormSchema } from './${e.lowerClassName}.data';\n  import { useMessage } from '/@/hooks/web/useMessage';\n\n  const { createMessage } = useMessage();\n\n  export default defineComponent({\n    name: '${e.className}',\n    components: { BasicTable, PageWrapper, ${e.leftTree}, ${e.className}Modal, TableAction, Popconfirm,\n    },\n    setup() {\n      const [registerModal, { openModal }] = useModal();\n      const currentTreeNode = ref<Recordable>({});\n\n      const [registerTable, { reload }] = useTable({\n        title: '列表',\n        api: get${e.className}ListByPage,\n        columns,\n        formConfig: {\n          labelWidth: 120,\n          schemas: searchFormSchema,\n          showAdvancedButton: false,\n          showResetButton: false,\n        },\n        canColDrag: true,\n        useSearchForm: true,\n        bordered: true,\n        showIndexColumn: false,\n        actionColumn: {\n          width: 100,\n          title: '操作',\n          dataIndex: 'action',\n          slots: { customRender: 'action' },\n          fixed: false,\n        },\n      });\n\n      function handleCreate() {\n        if(!unref(currentTreeNode).code){\n          createMessage.warning("请选择分类！", 2)\n          return;\n        }\n        openModal(true, {\n          record:{categoryCode: unref(currentTreeNode).code},\n          isUpdate: true,\n        });\n      }\n\n      function handleEdit(record: Recordable) {\n        openModal(true, {\n          record,\n          isUpdate: true,\n        });\n      }\n\n      function handleDelete(record: Recordable) {\n        deleteByIds([record.id]).then(() => {\n          reload();\n        });\n      }\n\n      function handleSuccess() {\n        reload();\n      }\n\n      function handleSelect(node:any) {\n        currentTreeNode.value = node;\n        let searchInfo = {${n}: node?node.code:''};\n        reload({ searchInfo });\n      }\n\n      return {\n        registerTable,\n        registerModal,\n        handleCreate,\n        handleEdit,\n        handleDelete,\n        handleSuccess,\n        handleSelect,\n      };\n    },\n  });\n<\/script>`})(e):(e=>`<template>\n  <div>\n    <BasicTable @register="registerTable">\n      <template #toolbar>\n        <a-button type="primary" @click="handleCreate"> 新增 </a-button>\n      </template>\n      <template #action="{ record }">\n        <TableAction\n          :actions="[\n            {\n              icon: 'clarity:note-edit-line',\n              onClick: handleEdit.bind(null, record),\n            },\n            {\n              icon: 'ant-design:delete-outlined',\n              color: 'error',\n              popConfirm: {\n                title: '是否确认删除',\n                confirm: handleDelete.bind(null, record),\n              },\n            },\n          ]"\n        />\n      </template>\n    </BasicTable>\n    <${e.className}Modal @register="registerModal" @success="handleSuccess" />\n  </div>\n</template>\n<script lang="ts">\n  import { defineComponent } from 'vue';\n  import { BasicTable, useTable, TableAction } from '/@/components/Table';\n  import { useModal } from '/@/components/Modal';\n  import { columns, searchFormSchema } from './${e.lowerClassName}.data';\n  import ${e.className}Modal from './${e.className}Modal.vue';\n  import { get${e.className}ListByPage, deleteByIds } from '/@/api/${e.module}/${e.lowerClassName}';\n\n  export default defineComponent({\n    name: '${e.className}',\n    components: { BasicTable, TableAction, ${e.className}Modal },\n    setup() {\n      const [registerModal, { openModal }] = useModal();\n      const [registerTable, { reload }] = useTable({\n        title: '列表',\n        api: get${e.className}ListByPage,\n        columns,\n        formConfig: {\n          labelWidth: 120,\n          schemas: searchFormSchema,\n          showAdvancedButton: false,\n          showResetButton: false,\n          autoSubmitOnEnter: true,\n        },\n        canColDrag: true,\n        useSearchForm: true,\n        bordered: true,\n        showIndexColumn: false,\n        actionColumn: {\n          width: 100,\n          title: '操作',\n          dataIndex: 'action',\n          slots: { customRender: 'action' },\n          fixed: false,\n        },\n      });\n\n      function handleCreate() {\n        openModal(true, {\n          isUpdate: false,\n        });\n      }\n\n      function handleEdit(record: Recordable) {\n        openModal(true, {\n          record,\n          isUpdate: true,\n        });\n      }\n\n      function handleDelete(record: Recordable) {\n        deleteByIds([record.id]).then(() => {\n          reload();\n        });\n      }\n\n      function handleSuccess() {\n        reload();\n      }\n\n      return {\n        registerTable,\n        registerModal,\n        handleCreate,\n        handleEdit,\n        handleDelete,\n        handleSuccess,\n      };\n    },\n  });\n<\/script>`)(e),a.value=s,t.value=(e=>{const n=e.fields,a=n.filter((e=>e.showInTable)).map((e=>`\n  {\n    title: '${e.comment}',\n    dataIndex: '${e.fieldName}',\n    width: 100,\n    align: 'left',\n  }`)),t=n.filter((e=>e.showInForm)).map((e=>`\n  {\n    field: '${e.fieldName}',\n    label: '${e.comment}',\n    required: ${e.required?"true":"false"},\n    component: '${e.formType}',\n    show: ${e.isPrimary?"false":"true"},\n    ${(e=>{let n="";return"name"===e.ruleType?n=`rules: [{\n        required: ${e.required?"true":"false"},\n        whitespace: true,\n        message: '${e.comment}不能为空！',\n      },\n      {\n        max: ${e.fieldLength},\n        message: '字符长度不能大于${e.fieldLength}！',\n      }],`:"remark"===e.ruleType&&(n=`rules: [{\n        max: ${e.fieldLength},\n        message: '字符长度不能大于${e.fieldLength}！',\n      }],`),n})(e)}\n  }`));return`import { BasicColumn } from '/@/components/Table';\nimport { FormSchema } from '/@/components/Table';\nimport { h } from 'vue';\nimport { Tag } from 'ant-design-vue';\nexport const columns: BasicColumn[] = [\n  ${a.join(",")}\n];\n\nexport const searchFormSchema: FormSchema[] = [\n  {\n    field: 'keyword',\n    label: '关键字',\n    component: 'Input',\n    componentProps: {\n      placeholder: '请输入名称/编码',\n    },\n    labelWidth: 60,\n    colProps: {span: 6, lg:{span: 6, offset:0}, sm:{span: 10, offset: 0}, xs:{span: 16, offset: 0}},\n  },\n];\n\nexport const formSchema: FormSchema[] = [\n  ${t.join(",")}\n];`})(e),o.value=(e=>`<template>\n  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">\n    <BasicForm @register="registerForm" />\n  </BasicModal>\n</template>\n<script lang="ts">\n  import { defineComponent, ref, computed, unref } from 'vue';\n  import { BasicModal, useModalInner } from '/@/components/Modal';\n  import { BasicForm, Rule, useForm } from '/@/components/Form';\n  import { formSchema } from './${e.lowerClassName}.data';\n  import { saveOrUpdate, checkEntityExist } from '/@/api/${e.module}/${e.lowerClassName}';\n  import {CheckExistParams} from "/@/api/model/baseModel";\n\n  export default defineComponent({\n    name: '${e.className}Modal',\n    components: { BasicModal, BasicForm },\n    emits: ['success', 'register'],\n    setup(_, { emit }) {\n      const isUpdate = ref(true);\n\n      const [registerForm, { resetFields, updateSchema, setFieldsValue, validate }] = useForm({\n        labelWidth: 100,\n        schemas: formSchema,\n        showActionButtonGroup: false,\n      });\n\n      const getBaseDynamicRules = (params: CheckExistParams)=>{\n        return [\n          {\n            trigger: 'blur',\n            validator: (_, value)=>{\n              if(value){\n                return checkEntityExist({id: params.id, field: params.field, fieldValue: value, fieldName:params.fieldName}).then(res=>{\n                  if(res){\n                    return Promise.resolve();\n                  }else{\n                    return Promise.reject(params.fieldName + "已存在，请修改！")\n                  }\n                }).catch((res)=>{\n                  return Promise.reject(res)\n                })\n              }else{\n                return Promise.resolve();\n              }\n            }\n          }\n        ] as Rule[];\n      }\n\n      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {\n        await resetFields();\n        setModalProps({ confirmLoading: false });\n        isUpdate.value = !!data?.isUpdate;\n        let formData = data.record;\n\n        ${(e=>{const n=e.fields,a=[];let t="";return n.forEach((e=>{if("code"===e.type){const n=`\n        {\n          field: '${e.fieldName}',\n          dynamicRules: () => {\n            return [\n              {\n                required: true,\n                whitespace: true,\n                message: '${e.comment}不能为空！',\n              },\n              {\n                pattern: new RegExp('^[0-9a-zA-Z_]{1,}$'),\n                type: 'string',\n                message: '请输入英文或数字！',\n              },\n              {\n                max: ${e.fieldLength},\n                message: '字符长度不能大于${e.fieldLength}！',\n              }\n              ...getBaseDynamicRules({id: unref(isUpdate)&&formData&&formData.id||"", field: '${e.fieldName}', fieldValue: "", fieldName:'${e.comment}'}),\n            ];\n          },\n        },\n        \n      `;a.push(n)}})),a.length>0&&(t=`\n      await updateSchema([\n        ${a.join("")}\n      ]);\n    `),t})(e)}\n        \n        if (unref(isUpdate)) {\n          setFieldsValue({\n            ...data.record,\n          });\n        }\n      });\n\n      const getTitle = computed(() => (!unref(isUpdate) ? '新增' : '修改'));\n\n      async function handleSubmit() {\n        try {\n          const values = await validate();\n          setModalProps({ confirmLoading: true });\n          await saveOrUpdate(values);\n          closeModal();\n          emit('success');\n        } finally {\n          setModalProps({ confirmLoading: false });\n        }\n      }\n\n      return { registerModal, registerForm, getTitle, handleSubmit };\n    },\n  });\n<\/script>`)(e),l.value=(e=>`import {defHttp} from '/@/utils/http/axios';\nimport {BasicPageSearchParams, CheckExistParams} from "/@/api/model/baseModel";\nimport {${e.className}Info, ${e.className}Params, ${e.className}PageListGetResultModel, ${e.className}PageParams} from "./model/${e.lowerClassName}Model";\n\nenum Api {\n  ${e.className}PageList = '/flow/${e.module}/${e.lowerClassName}/getPagerModel',\n  SaveOrUpdate = '/flow/${e.module}/${e.lowerClassName}/saveOrUpdate',\n  Delete = '/flow/${e.module}/${e.lowerClassName}/delete',\n  CheckEntityExist = '/flow/${e.module}/${e.lowerClassName}/checkEntityExist',\n}\n\nexport const get${e.className}ListByPage = (params?: ${e.className}Params) => {\n  const query = params&&{pageNum: params.pageNum, pageSize: params.pageSize};\n  let entity = params||{};\n  if(entity){\n    delete entity['pageNum'];\n    delete entity['pageSize'];\n  }\n  const queryParam = {query, entity} as BasicPageSearchParams<${e.className}PageParams>;\n  return defHttp.post<${e.className}PageListGetResultModel>({ url: Api.${e.className}PageList, params: queryParam });\n\n};\n\nexport const saveOrUpdate = (params?: ${e.className}Info) =>\n  defHttp.post<${e.className}Info>({url: Api.SaveOrUpdate, params});\n\nexport const checkEntityExist = (params?: CheckExistParams) =>\n  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });\n\nexport const deleteByIds = (params?: Array<string>) =>\n  defHttp.post<${e.className}Info>({url: Api.Delete, params});\n`)(e),i.value=(e=>{const n=e.fields.filter((e=>e.showInTable)).map((e=>(e=>{return`${e.fieldName}?: ${n=e.dataType,"varchar"===n?"string":"int"===n?"number":"any"};\n  `;var n})(e)));return`import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';\n\nexport type ${e.className}Params = {\n  keyword?: string;\n};\n\nexport type ${e.className}PageParams = BasicPageParams & ${e.className}Params;\n\nexport type ${e.className}Info = {\n  ${n.join("")}\n};\n\n/**\n * @description: Request list return value\n */\nexport type ${e.className}PageListGetResultModel = BasicFetchResult<${e.className}Info>;\n`})(e)}catch(e){}}))}}),[f,{setTableData:h,getDataSource:g}]=v({title:"数字库字段",columns:S,pagination:!1,showIndexColumn:!1,bordered:!0});return{handleEditEnd:function({record:e,index:n,key:a,value:t}){},handleEditCancel:function(){},registerTable:f,formData:n,tableStrData:d,modalVueCode:o,handleModalDownByData:function(){b(o.value,r(n).className+"Modal.vue")},handleDataTsDownByData:function(){b(t.value,r(n).lowerClassName+".data.ts")},handleModelTsDownByData:function(){b(l.value,r(n).lowerClassName+".ts")},handleApiTsDownByData:function(){b(i.value,r(n).lowerClassName+"Model.ts")},indexVueCode:a,dataTsCode:t,apiTsCode:l,modelTsCode:i,genColumnList:function(){const e=d.value.split("\n").map((e=>{let n=e.split("\t");n=n.map((e=>"\\N"===e?"":e));const[a,t,o,l,s,r,i]=n;let d="";-1!==a.indexOf("name")&&(d="name"),-1===a.indexOf("sn")&&-1===a.indexOf("code")||(d="code"),-1===a.indexOf("remark")&&-1===a.indexOf("note")&&-1===a.indexOf("desc")||(d="remark");let c="create_time"!==a&&"creator"!==a&&"update_time"!==a&&"updator"!==a&&"del_flag"!==a;return{columnName:a,fieldName:$(a),dataType:t,ruleType:d,formType:M[t],required:"NO"===o,showInTable:"PRI"!==i&&"del_flag"!==a,showInForm:c,fieldLength:l,comment:s,defaultValue:r,isPrimary:"PRI"===i}}));h(e)},handleDownByData:function(){b(a.value,"index.vue")},registerForm:c,prefixCls:"account-center"}}});const B=f();i("data-v-1bbe51cd");const I=h(" SELECT c.COLUMN_NAME, c.DATA_TYPE, c.IS_NULLABLE, c.CHARACTER_MAXIMUM_LENGTH, c.COLUMN_COMMENT, c.COLUMN_DEFAULT, c.COLUMN_KEY FROM information_schema.columns AS c WHERE c.table_schema = 'flow-6.6' AND c.table_name = 'tbl_privilege_login_log' ORDER BY c.ORDINAL_POSITION; "),_=h("解析字段"),D=h("index.vue文件下载 "),k=u("br",null,null,-1),F=h("data.ts文件下载 "),L=u("br",null,null,-1),j=h("Modal.vue文件下载 "),A=u("br",null,null,-1),R=h("api.ts文件下载 "),U=u("br",null,null,-1),O=h("Model.ts文件下载 "),Y=u("br",null,null,-1);d();const V=B(((e,n,a,t,o,l)=>{const s=c("a-col"),r=c("a-row"),i=c("TextArea"),d=c("a-button"),f=c("BasicTable"),h=c("BasicForm"),g=c("TabPane"),b=c("Tabs");return m(),p("div",{class:e.prefixCls},[u(r,{class:`${e.prefixCls}-top`},{default:B((()=>[u(s,{span:24,class:`${e.prefixCls}-col`},{default:B((()=>[I])),_:1},8,["class"])])),_:1},8,["class"]),u(r,{class:`${e.prefixCls}-top`},{default:B((()=>[u(s,{span:24,class:`${e.prefixCls}-col`},{default:B((()=>[u(i,{value:e.tableStrData,"onUpdate:value":n[1]||(n[1]=n=>e.tableStrData=n),autoSize:""},null,8,["value"]),u(d,{type:"primary",class:"my-4",onClick:e.genColumnList},{default:B((()=>[_])),_:1},8,["onClick"])])),_:1},8,["class"])])),_:1},8,["class"]),u(r,{class:`${e.prefixCls}-top`},{default:B((()=>[u(s,{span:24,class:`${e.prefixCls}-col`},{default:B((()=>[u(f,{onRegister:e.registerTable,onEditEnd:e.handleEditEnd,onEditCancel:e.handleEditCancel},null,8,["onRegister","onEditEnd","onEditCancel"])])),_:1},8,["class"])])),_:1},8,["class"]),u(r,{class:`${e.prefixCls}-top`},{default:B((()=>[u(s,{span:24,class:`${e.prefixCls}-col`},{default:B((()=>[u(h,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},8,["class"])])),_:1},8,["class"]),u("div",{class:`${e.prefixCls}-bottom`},[u(b,null,{default:B((()=>[u(g,{tab:"index.vue",key:"1"},{default:B((()=>[u(d,{type:"primary",class:"my-4",onClick:e.handleDownByData},{default:B((()=>[D])),_:1},8,["onClick"]),k,u(i,{value:e.indexVueCode,"onUpdate:value":n[2]||(n[2]=n=>e.indexVueCode=n),autoSize:""},null,8,["value"])])),_:1}),u(g,{tab:"data.ts",key:"2"},{default:B((()=>[u(d,{type:"primary",class:"my-4",onClick:e.handleDataTsDownByData},{default:B((()=>[F])),_:1},8,["onClick"]),L,u(i,{value:e.dataTsCode,"onUpdate:value":n[3]||(n[3]=n=>e.dataTsCode=n),autoSize:""},null,8,["value"])])),_:1}),u(g,{tab:"Modal.vue",key:"3"},{default:B((()=>[u(d,{type:"primary",class:"my-4",onClick:e.handleModalDownByData},{default:B((()=>[j])),_:1},8,["onClick"]),A,u(i,{value:e.modalVueCode,"onUpdate:value":n[4]||(n[4]=n=>e.modalVueCode=n),autoSize:""},null,8,["value"])])),_:1}),u(g,{tab:"api.ts",key:"4"},{default:B((()=>[u(d,{type:"primary",class:"my-4",onClick:e.handleApiTsDownByData},{default:B((()=>[R])),_:1},8,["onClick"]),U,u(i,{value:e.apiTsCode,"onUpdate:value":n[5]||(n[5]=n=>e.apiTsCode=n),autoSize:""},null,8,["value"])])),_:1}),u(g,{tab:"model.ts",key:"5"},{default:B((()=>[u(d,{type:"primary",class:"my-4",onClick:e.handleModelTsDownByData},{default:B((()=>[O])),_:1},8,["onClick"]),Y,u(i,{value:e.modelTsCode,"onUpdate:value":n[6]||(n[6]=n=>e.modelTsCode=n),autoSize:""},null,8,["value"])])),_:1})])),_:1})],2)],2)}));E.render=V,E.__scopeId="data-v-1bbe51cd";export default E;
