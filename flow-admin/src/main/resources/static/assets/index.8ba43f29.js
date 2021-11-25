var S=(e,a,s)=>new Promise((l,t)=>{var f=r=>{try{m(s.next(r))}catch(p){t(p)}},u=r=>{try{m(s.throw(r))}catch(p){t(p)}},m=r=>r.done?l(r.value):Promise.resolve(r.value).then(f,u);m((s=s.apply(e,a)).next())});import{A as Q,ao as k,br as L,b8 as j,b7 as R,r as F,a0 as C,B as ee,D as ae,w as o,a6 as n,K as h,H as B,u as w,ae as E,L as te,N as oe}from"./vendor.7bee64cc.js";/* empty css               *//* empty css               */import{_ as se,ah as le}from"./index.9eb02b52.js";import{a as N}from"./download.78bd314d.js";import{T as ne}from"./index.08e7dd63.js";import{B as re}from"./TableImg.73863b69.js";import{i as ue,B as ie}from"./BasicForm.6afa01de.js";import{u as de}from"./useTable.7c1e4a10.js";import{u as ce}from"./useForm.1fd322f5.js";import"./base64Conver.bb012c73.js";/* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./index.77f474a0.js";/* empty css                *//* empty css                */import"./useWindowSizeFn.30e15ddc.js";import"./useContentViewHeight.52836077.js";/* empty css                *//* empty css              *//* empty css                *//* empty css                *//* empty css               */import"./index.30115123.js";/* empty css               */import"./useSortable.dd731734.js";/* empty css                *//* empty css                *//* empty css               */import"./index.1445cecb.js";/* empty css                */import"./index.83641cbd.js";const me=[{field:"dbName",component:"Input",label:"\u6570\u636E\u5E93",labelWidth:80,componentProps:{defaultValue:"flow-6.6"},colProps:{span:6}},{field:"tableName",component:"Input",label:"\u8868\u540D",labelWidth:80,colProps:{span:6},required:!0,componentProps:({formModel:e,formActionType:a})=>({placeholder:"\u503C\u6539\u53D8\u65F6\u6267\u884C\u67E5\u8BE2,\u67E5\u770B\u63A7\u5236\u53F0",onChange:s=>S(void 0,null,function*(){let l=s.target.value;l=l.replace("tbl_","");let t=l.split("_");t=t.map(m=>m.toLowerCase().replace(/( |^)[a-z]/g,r=>r.toUpperCase()));const f=t.join(""),u=t;u[0]=u[0].toLowerCase(),e.className=f,e.lowerClassName=u.join("")})})},{field:"module",component:"Input",label:"\u6A21\u5757",labelWidth:80,colProps:{span:6},required:!0},{field:"className",component:"Input",label:"\u7C7B\u540D",labelWidth:80,colProps:{span:6},required:!0},{field:"lowerClassName",component:"Input",label:"\u7C7B\u540D\u5C0F\u5199",labelWidth:80,colProps:{span:6},required:!0},{field:"showLeftTree",component:"Switch",label:"\u663E\u793A\u5DE6\u4FA7\u6811",colProps:{span:2},labelWidth:80,componentProps:({formActionType:e})=>({onChange:a=>{e.updateSchema([{field:"leftTree",show:a}])}})},{field:"leftTree",component:"Select",label:"\u5DE6\u4FA7\u6811",show:!1,colProps:{span:8},componentProps:{options:[{label:"\u516C\u53F8\u6811",value:"CompanyTree",key:"CompanyTree"},{label:"\u7EC4\u7EC7\u6811",value:"OrgTree",key:"OrgTree"},{label:"\u6D41\u7A0B\u5206\u7C7B\u6811",value:"FlowCategoryTree",key:"FlowCategoryTree"}]}}];var pe=e=>`<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> \u65B0\u589E </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              popConfirm: {
                title: '\u662F\u5426\u786E\u8BA4\u5220\u9664',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <${e.className}Modal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useModal } from '/@/components/Modal';
  import { columns, searchFormSchema } from './${e.lowerClassName}.data';
  import ${e.className}Modal from './${e.className}Modal.vue';
  import { get${e.className}ListByPage, deleteByIds } from '/@/api/${e.module}/${e.lowerClassName}';

  export default defineComponent({
    name: '${e.className}',
    components: { BasicTable, TableAction, ${e.className}Modal },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '\u5217\u8868',
        api: get${e.className}ListByPage,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          showAdvancedButton: false,
          showResetButton: false,
          autoSubmitOnEnter: true,
        },
        canColDrag: true,
        useSearchForm: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 100,
          title: '\u64CD\u4F5C',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: false,
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        deleteByIds([record.id]).then(() => {
          reload();
        });
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
      };
    },
  });
<\/script>`,fe=e=>{let a="";return e.leftTree==="CompanyTree"?a="companyId":e.leftTree==="OrgTree"?a="deptId":e.leftTree==="FlowCategoryTree"&&(a="categoryId"),`<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <${e.leftTree} class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">\u65B0\u589E</a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              popConfirm: {
                title: '\u662F\u5426\u786E\u8BA4\u5220\u9664',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <${e.className}Modal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { get${e.className}ListByPage, deleteByIds } from '/@/api/${e.module}/${e.lowerClassName}';
  import { PageWrapper } from '/@/components/Page';
  import ${e.leftTree} from '/@/views/compaonents/leftTree/${e.leftTree}.vue';
  import { useModal } from '/@/components/Modal';
  import ${e.className}Modal from './${e.className}Modal.vue';
  import { Popconfirm } from "ant-design-vue";

  import { columns, searchFormSchema } from './${e.lowerClassName}.data';
  import { useMessage } from '/@/hooks/web/useMessage';

  const { createMessage } = useMessage();

  export default defineComponent({
    name: '${e.className}',
    components: { BasicTable, PageWrapper, ${e.leftTree}, ${e.className}Modal, TableAction, Popconfirm,
    },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const currentTreeNode = ref<Recordable>({});

      const [registerTable, { reload }] = useTable({
        title: '\u5217\u8868',
        api: get${e.className}ListByPage,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          showAdvancedButton: false,
          showResetButton: false,
        },
        canColDrag: true,
        useSearchForm: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 100,
          title: '\u64CD\u4F5C',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: false,
        },
      });

      function handleCreate() {
        if(!unref(currentTreeNode).code){
          createMessage.warning("\u8BF7\u9009\u62E9\u5206\u7C7B\uFF01", 2)
          return;
        }
        openModal(true, {
          record:{categoryCode: unref(currentTreeNode).code},
          isUpdate: true,
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        deleteByIds([record.id]).then(() => {
          reload();
        });
      }

      function handleSuccess() {
        reload();
      }

      function handleSelect(node:any) {
        currentTreeNode.value = node;
        let searchInfo = {${a}: node?node.code:''};
        reload({ searchInfo });
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleSelect,
      };
    },
  });
<\/script>`};const he=e=>{let a="";debugger;return e.ruleType==="name"?a=`rules: [{
        required: ${e.required?"true":"false"},
        whitespace: true,
        message: '${e.comment}\u4E0D\u80FD\u4E3A\u7A7A\uFF01',
      },
      {
        max: ${e.fieldLength},
        message: '\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${e.fieldLength}\uFF01',
      }],`:e.ruleType==="remark"&&(a=`rules: [{
        max: ${e.fieldLength},
        message: '\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${e.fieldLength}\uFF01',
      }],`),a};var Ce=e=>{const a=e.fields,s=a.filter(t=>t.showInTable).map(t=>`
  {
    title: '${t.comment}',
    dataIndex: '${t.fieldName}',
    width: 100,
    align: 'left',
  }`),l=a.filter(t=>t.showInForm).map(t=>`
  {
    field: '${t.fieldName}',
    label: '${t.comment}',
    required: ${t.required?"true":"false"},
    component: '${t.formType}',
    show: ${t.isPrimary?"false":"true"},
    ${he(t)}
  }`);return`import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
export const columns: BasicColumn[] = [
  ${s.join(",")}
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'keyword',
    label: '\u5173\u952E\u5B57',
    component: 'Input',
    componentProps: {
      placeholder: '\u8BF7\u8F93\u5165\u540D\u79F0/\u7F16\u7801',
    },
    labelWidth: 60,
    colProps: {span: 6, lg:{span: 6, offset:0}, sm:{span: 10, offset: 0}, xs:{span: 16, offset: 0}},
  },
];

export const formSchema: FormSchema[] = [
  ${l.join(",")}
];`};const ge=e=>{const a=e.fields,s=[];let l="";return a.forEach(t=>{if(t.type==="code"){const f=`
        {
          field: '${t.fieldName}',
          dynamicRules: () => {
            return [
              {
                required: true,
                whitespace: true,
                message: '${t.comment}\u4E0D\u80FD\u4E3A\u7A7A\uFF01',
              },
              {
                pattern: new RegExp('^[0-9a-zA-Z_]{1,}$'),
                type: 'string',
                message: '\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01',
              },
              {
                max: ${t.fieldLength},
                message: '\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${t.fieldLength}\uFF01',
              }
              ...getBaseDynamicRules({id: unref(isUpdate)&&formData&&formData.id||"", field: '${t.fieldName}', fieldValue: "", fieldName:'${t.comment}'}),
            ];
          },
        },
        
      `;s.push(f)}}),s.length>0&&(l=`
      await updateSchema([
        ${s.join("")}
      ]);
    `),l};var be=e=>`<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, Rule, useForm } from '/@/components/Form';
  import { formSchema } from './${e.lowerClassName}.data';
  import { saveOrUpdate, checkEntityExist } from '/@/api/${e.module}/${e.lowerClassName}';
  import {CheckExistParams} from "/@/api/model/baseModel";

  export default defineComponent({
    name: '${e.className}Modal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);

      const [registerForm, { resetFields, updateSchema, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        schemas: formSchema,
        showActionButtonGroup: false,
      });

      const getBaseDynamicRules = (params: CheckExistParams)=>{
        return [
          {
            trigger: 'blur',
            validator: (_, value)=>{
              if(value){
                return checkEntityExist({id: params.id, field: params.field, fieldValue: value, fieldName:params.fieldName}).then(res=>{
                  if(res){
                    return Promise.resolve();
                  }else{
                    return Promise.reject(params.fieldName + "\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")
                  }
                }).catch((res)=>{
                  return Promise.reject(res)
                })
              }else{
                return Promise.resolve();
              }
            }
          }
        ] as Rule[];
      }

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        await resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        let formData = data.record;

        ${ge(e)}
        
        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '\u65B0\u589E' : '\u4FEE\u6539'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          await saveOrUpdate(values);
          closeModal();
          emit('success');
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
<\/script>`,Fe=e=>`import {defHttp} from '/@/utils/http/axios';
import {BasicPageSearchParams, CheckExistParams} from "/@/api/model/baseModel";
import {${e.className}Info, ${e.className}Params, ${e.className}PageListGetResultModel, ${e.className}PageParams} from "./model/${e.lowerClassName}Model";

enum Api {
  ${e.className}PageList = '/flow/${e.module}/${e.lowerClassName}/getPagerModel',
  SaveOrUpdate = '/flow/${e.module}/${e.lowerClassName}/saveOrUpdate',
  Delete = '/flow/${e.module}/${e.lowerClassName}/delete',
  CheckEntityExist = '/flow/${e.module}/${e.lowerClassName}/checkEntityExist',
}

export const get${e.className}ListByPage = (params?: ${e.className}Params) => {
  const query = params&&{pageNum: params.pageNum, pageSize: params.pageSize};
  let entity = params||{};
  if(entity){
    delete entity['pageNum'];
    delete entity['pageSize'];
  }
  const queryParam = {query, entity} as BasicPageSearchParams<${e.className}PageParams>;
  return defHttp.post<${e.className}PageListGetResultModel>({ url: Api.${e.className}PageList, params: queryParam });

};

export const saveOrUpdate = (params?: ${e.className}Info) =>
  defHttp.post<${e.className}Info>({url: Api.SaveOrUpdate, params});

export const checkEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });

export const deleteByIds = (params?: Array<string>) =>
  defHttp.post<${e.className}Info>({url: Api.Delete, params});
`;const Ee=e=>e==="varchar"?"string":e==="int"?"number":"any",Be=e=>`${e.fieldName}?: ${Ee(e.dataType)};
  `;var Te=e=>{const s=e.fields.filter(l=>l.showInTable).map(l=>Be(l));return`import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type ${e.className}Params = {
  keyword?: string;
};

export type ${e.className}PageParams = BasicPageParams & ${e.className}Params;

export type ${e.className}Info = {
  ${s.join("")}
};

/**
 * @description: Request list return value
 */
export type ${e.className}PageListGetResultModel = BasicFetchResult<${e.className}Info>;
`};const Ne=e=>{let a=e.split("_");a=a.map(l=>l.toLowerCase().replace(/( |^)[a-z]/g,t=>t.toUpperCase()));const s=a;return s[0]=s[0].toLowerCase(),s.join("")};const ye={varchar:"Input",int:"InputNumber",date:"DatePicker",timestamp:"DatePicker"},U=[];for(const e of ue)U.push({label:e[0],value:e[0]});const ve=[{title:"\u5B57\u6BB5\u540D",dataIndex:"columnName",width:150,align:"left"},{title:"\u6570\u636E\u7C7B\u578B",dataIndex:"dataType",width:80,align:"left"},{title:"\u63CF\u8FF0",dataIndex:"comment",editRule:!0,edit:!0,align:"left",editComponentProps:{}},{title:"\u63A7\u4EF6\u7C7B\u578B",dataIndex:"formType",edit:!0,editRule:!0,editComponent:"Select",editComponentProps:{options:U},width:180,align:"left"},{title:"\u9A8C\u8BC1\u89C4\u5219",dataIndex:"ruleType",edit:!0,align:"left",editComponent:"Select",editComponentProps:{options:[{label:"\u540D\u79F0",value:"name"},{label:"\u6807\u8BC6",value:"code"},{label:"\u5907\u6CE8",value:"remark"}]},width:140},{title:"\u662F\u5426\u5FC5\u586B",dataIndex:"required",edit:!0,align:"left",editComponent:"Checkbox",editValueMap:e=>e?"\u662F":"\u5426",width:120},{title:"\u8868\u683C\u663E\u793A",dataIndex:"showInTable",edit:!0,align:"left",editComponent:"Checkbox",editValueMap:e=>e?"\u662F":"\u5426",width:120},{title:"\u8868\u5355\u663E\u793A",dataIndex:"showInForm",edit:!0,align:"left",editComponent:"Checkbox",editValueMap:e=>e?"\u662F":"\u5426",width:120},{title:"\u5B57\u6BB5\u957F\u5EA6",dataIndex:"fieldLength",width:80,align:"left"},{title:"\u9ED8\u8BA4\u503C",dataIndex:"defaultValue",width:80,align:"left"}],we=Q({components:{BasicTable:re,BasicForm:ie,Tinymce:ne,Input:k,TextArea:k.TextArea,CollapseContainer:le,Tabs:L,TabPane:L.TabPane,[j.name]:j,[R.name]:R},setup(){const e=F({}),a=F(""),s=F(""),l=F(""),t=F(""),f=F(""),u=F(`id	varchar	NO	40		\\N	PRI
name	varchar	YES	32	\u540D\u79F0	\\N	
url	varchar	YES	128	\u94FE\u63A5	\\N	
sn	varchar	YES	64	\u6807\u8BC6	\\N	MUL
component	varchar	YES	120	\u7EC4\u4EF6	\\N	
status	int	YES	\\N	\u662F\u5426\u542F\u7528 \uFF1A 1\u542F\u7528\uFF1B0\u7981\u7528	\\N	
state	varchar	YES	100	\u5B58\u653E\u8BE5\u6A21\u5757\u6709\u54EA\u4E9B\u6743\u9650\u503C\u53EF\u9009	\\N	
image	varchar	YES	200	\u56FE\u7247\u8DEF\u5F84	\\N	
order_no	int	YES	\\N	\u6A21\u5757\u7684\u6392\u5E8F\u53F7	\\N	
pid	varchar	YES	40	\u7236\u6A21\u5757id	\\N	
app_id	varchar	YES	40	\u7CFB\u7EDFid	\\N	
is_show	int	YES	\\N		1	
create_time	timestamp	YES	\\N	\u521B\u5EFA\u65F6\u95F4	\\N	
creator	varchar	YES	32	\u521B\u5EFA\u4EBA	\\N	
update_time	timestamp	YES	\\N	\u66F4\u65B0\u65F6\u95F4	\\N	
updator	varchar	YES	32	\u66F4\u65B0\u4EBA	\\N	
del_flag	int	YES	\\N	\u5220\u9664\u6807\u8BC60:\u5220\u96641\uFF1A\u5B58\u5728	1	`),[m,{updateSchema:r,setProps:p,validate:$}]=ce({labelWidth:120,schemas:me,showAdvancedButton:!1,showSubmitButton:!0,showActionButtonGroup:!0,showResetButton:!1,actionColOptions:{span:24},submitButtonOptions:{text:"\u63D0\u4EA4"},submitFunc:O}),[x,{setTableData:g,getDataSource:M}]=de({title:"\u6570\u5B57\u5E93\u5B57\u6BB5",columns:ve,pagination:!1,showIndexColumn:!1,bordered:!0});function c({record:i,index:b,key:P,value:T}){console.log(i,b,P,T)}function D(){console.log("cancel")}function O(){return S(this,null,function*(){try{const i=yield $();e.value=i,i.fields=M();let b="";i.showLeftTree?b=fe(i):b=pe(i),a.value=b,s.value=Ce(i),l.value=be(i),t.value=Fe(i),f.value=Te(i),console.log(i.fields)}catch(i){}})}function V(){N(a.value,"index.vue")}function Y(){const b=u.value.split(`
`).map(P=>{let T=P.split("	");T=T.map(I=>I==="\\N"?"":I);const[d,A,G,K,X,Z,_]=T;let v="";d.indexOf("name")!==-1&&(v="name"),(d.indexOf("sn")!==-1||d.indexOf("code")!==-1)&&(v="code"),(d.indexOf("remark")!==-1||d.indexOf("note")!==-1||d.indexOf("desc")!==-1)&&(v="remark");let J=d!=="create_time"&&d!=="creator"&&d!=="update_time"&&d!=="updator"&&d!=="del_flag";return{columnName:d,fieldName:Ne(d),dataType:A,ruleType:v,formType:ye[A],required:G==="NO",showInTable:_!=="PRI"&&d!=="del_flag",showInForm:J,fieldLength:K,comment:X,defaultValue:Z,isPrimary:_==="PRI"}});g(b),console.log(u.value)}function W(){N(l.value,w(e).className+"Modal.vue")}function q(){N(s.value,w(e).lowerClassName+".data.ts")}function z(){N(t.value,w(e).lowerClassName+".ts")}function H(){N(f.value,w(e).lowerClassName+"Model.ts")}return{handleEditEnd:c,handleEditCancel:D,registerTable:x,formData:e,tableStrData:u,modalVueCode:l,handleModalDownByData:W,handleDataTsDownByData:q,handleModelTsDownByData:z,handleApiTsDownByData:H,indexVueCode:a,dataTsCode:s,apiTsCode:t,modelTsCode:f,genColumnList:Y,handleDownByData:V,registerForm:m,prefixCls:"account-center"}}}),y=e=>(te("data-v-1bbe51cd"),e=e(),oe(),e),$e=E(" SELECT c.COLUMN_NAME, c.DATA_TYPE, c.IS_NULLABLE, c.CHARACTER_MAXIMUM_LENGTH, c.COLUMN_COMMENT, c.COLUMN_DEFAULT, c.COLUMN_KEY FROM information_schema.columns AS c WHERE c.table_schema = 'flow-6.6' AND c.table_name = 'tbl_privilege_login_log' ORDER BY c.ORDINAL_POSITION; "),xe=E("\u89E3\u6790\u5B57\u6BB5"),Me=E("index.vue\u6587\u4EF6\u4E0B\u8F7D "),Pe=y(()=>B("br",null,null,-1)),Se=E("data.ts\u6587\u4EF6\u4E0B\u8F7D "),Ae=y(()=>B("br",null,null,-1)),_e=E("Modal.vue\u6587\u4EF6\u4E0B\u8F7D "),Ie=y(()=>B("br",null,null,-1)),ke=E("api.ts\u6587\u4EF6\u4E0B\u8F7D "),Le=y(()=>B("br",null,null,-1)),je=E("Model.ts\u6587\u4EF6\u4E0B\u8F7D "),Re=y(()=>B("br",null,null,-1));function Ue(e,a,s,l,t,f){const u=C("a-col"),m=C("a-row"),r=C("TextArea"),p=C("a-button"),$=C("BasicTable"),x=C("BasicForm"),g=C("TabPane"),M=C("Tabs");return ee(),ae("div",{class:h(e.prefixCls)},[o(m,{class:h(`${e.prefixCls}-top`)},{default:n(()=>[o(u,{span:24,class:h(`${e.prefixCls}-col`)},{default:n(()=>[$e]),_:1},8,["class"])]),_:1},8,["class"]),o(m,{class:h(`${e.prefixCls}-top`)},{default:n(()=>[o(u,{span:24,class:h(`${e.prefixCls}-col`)},{default:n(()=>[o(r,{value:e.tableStrData,"onUpdate:value":a[0]||(a[0]=c=>e.tableStrData=c),autoSize:""},null,8,["value"]),o(p,{type:"primary",class:"my-4",onClick:e.genColumnList},{default:n(()=>[xe]),_:1},8,["onClick"])]),_:1},8,["class"])]),_:1},8,["class"]),o(m,{class:h(`${e.prefixCls}-top`)},{default:n(()=>[o(u,{span:24,class:h(`${e.prefixCls}-col`)},{default:n(()=>[o($,{onRegister:e.registerTable,onEditEnd:e.handleEditEnd,onEditCancel:e.handleEditCancel},null,8,["onRegister","onEditEnd","onEditCancel"])]),_:1},8,["class"])]),_:1},8,["class"]),o(m,{class:h(`${e.prefixCls}-top`)},{default:n(()=>[o(u,{span:24,class:h(`${e.prefixCls}-col`)},{default:n(()=>[o(x,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},8,["class"])]),_:1},8,["class"]),B("div",{class:h(`${e.prefixCls}-bottom`)},[o(M,null,{default:n(()=>[o(g,{tab:"index.vue",key:"1"},{default:n(()=>[o(p,{type:"primary",class:"my-4",onClick:e.handleDownByData},{default:n(()=>[Me]),_:1},8,["onClick"]),Pe,o(r,{value:e.indexVueCode,"onUpdate:value":a[1]||(a[1]=c=>e.indexVueCode=c),autoSize:""},null,8,["value"])]),_:1}),o(g,{tab:"data.ts",key:"2"},{default:n(()=>[o(p,{type:"primary",class:"my-4",onClick:e.handleDataTsDownByData},{default:n(()=>[Se]),_:1},8,["onClick"]),Ae,o(r,{value:e.dataTsCode,"onUpdate:value":a[2]||(a[2]=c=>e.dataTsCode=c),autoSize:""},null,8,["value"])]),_:1}),o(g,{tab:"Modal.vue",key:"3"},{default:n(()=>[o(p,{type:"primary",class:"my-4",onClick:e.handleModalDownByData},{default:n(()=>[_e]),_:1},8,["onClick"]),Ie,o(r,{value:e.modalVueCode,"onUpdate:value":a[3]||(a[3]=c=>e.modalVueCode=c),autoSize:""},null,8,["value"])]),_:1}),o(g,{tab:"api.ts",key:"4"},{default:n(()=>[o(p,{type:"primary",class:"my-4",onClick:e.handleApiTsDownByData},{default:n(()=>[ke]),_:1},8,["onClick"]),Le,o(r,{value:e.apiTsCode,"onUpdate:value":a[4]||(a[4]=c=>e.apiTsCode=c),autoSize:""},null,8,["value"])]),_:1}),o(g,{tab:"model.ts",key:"5"},{default:n(()=>[o(p,{type:"primary",class:"my-4",onClick:e.handleModelTsDownByData},{default:n(()=>[je]),_:1},8,["onClick"]),Re,o(r,{value:e.modelTsCode,"onUpdate:value":a[5]||(a[5]=c=>e.modelTsCode=c),autoSize:""},null,8,["value"])]),_:1})]),_:1})],2)],2)}var Ea=se(we,[["render",Ue],["__scopeId","data-v-1bbe51cd"]]);export{Ea as default};
