<template>
  <div :class="prefixCls">
    <a-row :class="`${prefixCls}-top`">
      <a-col :span="24" :class="`${prefixCls}-col`">
        SELECT
          c.COLUMN_NAME,
          c.DATA_TYPE,
          c.IS_NULLABLE,
          c.CHARACTER_MAXIMUM_LENGTH,
          c.COLUMN_COMMENT,
          c.COLUMN_DEFAULT,
          c.COLUMN_KEY
        FROM information_schema.columns AS c WHERE  c.table_schema = 'flow-6.6' AND c.table_name = 'tbl_privilege_login_log' ORDER BY c.ORDINAL_POSITION;
      </a-col>
    </a-row>
    <a-row :class="`${prefixCls}-top`">
      <a-col :span="24" :class="`${prefixCls}-col`">
        <TextArea v-model:value="tableStrData" autoSize />
        <a-button type="primary" class="my-4" @click="genColumnList">解析字段</a-button>
      </a-col>
    </a-row>
    <a-row :class="`${prefixCls}-top`">
      <a-col :span="24" :class="`${prefixCls}-col`">
        <BasicTable
          @register="registerTable"
          @edit-end="handleEditEnd"
          @edit-cancel="handleEditCancel"
        />
      </a-col>
    </a-row>
    <a-row :class="`${prefixCls}-top`">
      <a-col :span="24" :class="`${prefixCls}-col`">
        <BasicForm @register="registerForm"  />
      </a-col>
    </a-row>
    <div :class="`${prefixCls}-bottom`">
      <Tabs>
        <TabPane tab="index.vue" key="1">
          <a-button type="primary" class="my-4" @click="handleDownByData">index.vue文件下载 </a-button>
          <br/>
          <TextArea v-model:value="indexVueCode" autoSize />
        </TabPane>
        <TabPane tab="data.ts" key="2">
          <a-button type="primary" class="my-4" @click="handleDataTsDownByData">data.ts文件下载 </a-button>
          <br/>
          <TextArea v-model:value="dataTsCode" autoSize />
        </TabPane>
        <TabPane tab="Modal.vue" key="3">
          <a-button type="primary" class="my-4" @click="handleModalDownByData">Modal.vue文件下载 </a-button>
          <br/>
          <TextArea v-model:value="modalVueCode" autoSize />
        </TabPane>
        <TabPane tab="api.ts" key="4">
          <a-button type="primary" class="my-4" @click="handleApiTsDownByData">api.ts文件下载 </a-button>
          <br/>
          <TextArea v-model:value="apiTsCode" autoSize />
        </TabPane>
        <TabPane tab="model.ts" key="5">
          <a-button type="primary" class="my-4" @click="handleModelTsDownByData">Model.ts文件下载 </a-button>
          <br/>
          <TextArea v-model:value="modelTsCode" autoSize />
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script lang="ts">
  import { Tag, Tabs, Row, Col, Input } from 'ant-design-vue';
  import { defineComponent, ref, unref } from 'vue';
  import { CollapseContainer } from '/@/components/Container/index';
  import {
    downloadByData,
  } from '/@/utils/file/download';
  import { Tinymce } from '/@/components/Tinymce/index';
  import { BasicTable, useTable, BasicColumn } from '/@/components/Table';

  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { schemas } from './codingForm.data';
  import genIndexVueCode  from './index_vue';
  import genIndexVueLeftTreeCode  from './index_vue_left_tree';
  import genDataTsCode  from './data_ts';
  import genModalVueCode  from './Modal_vue';
  import genApiTsCode  from './api_ts';
  import genModelTsCode  from './Model_ts';
  import {componentMap} from "/@/components/Form/src/componentMap";
  import {columnName2FieldName} from "/@/views/demo/coding/utils";

  const dataTypeMap = {
    'varchar': 'Input',
    'int': 'InputNumber',
    'date': 'DatePicker',
    'timestamp': 'DatePicker',
  }

  const componentItems = [];

  for(const key of componentMap){
    componentItems.push({label: key[0], value: key[0]});
  }

  const columns: BasicColumn[] = [
    {
      title: '字段名',
      dataIndex: 'columnName',
      width: 150,
      align:"left",
    },
    {
      title: '数据类型',
      dataIndex: 'dataType',
      width: 80,
      align:"left",
    },
    {
      title: '描述',
      dataIndex: 'comment',
      // 默认必填校验
      editRule: true,
      edit: true,
      align:"left",
      editComponentProps: {

      },
    },
    {
      title: '控件类型',
      dataIndex: 'formType',
      edit: true,
      // 默认必填校验
      editRule: true,
      editComponent: 'Select',
      editComponentProps: {
        options: componentItems,
      },
      width: 180,
      align:"left",
    },
    {
      title: '验证规则',
      dataIndex: 'ruleType',
      edit: true,
      align:"left",
      editComponent: 'Select',
      editComponentProps: {
        options: [
          {
            label: '名称',
            value: 'name',
          },
          {
            label: '标识',
            value: 'code',
          },
          {
            label: '备注',
            value: 'remark',
          },
        ],
      },
      width: 140,
    },
    {
      title: '是否必填',
      dataIndex: 'required',
      edit: true,
      align:"left",
      editComponent: 'Checkbox',
      editValueMap: (value) => {
        return value ? '是' : '否';
      },
      width: 120,
    },
    {
      title: '表格显示',
      dataIndex: 'showInTable',
      edit: true,
      align:"left",
      editComponent: 'Checkbox',
      editValueMap: (value) => {
        return value ? '是' : '否';
      },
      width: 120,
    },
    {
      title: '表单显示',
      dataIndex: 'showInForm',
      edit: true,
      align:"left",
      editComponent: 'Checkbox',
      editValueMap: (value) => {
        return value ? '是' : '否';
      },
      width: 120,
    },
    {
      title: '字段长度',
      dataIndex: 'fieldLength',
      width: 80,
      align:"left",
    },
    {
      title: '默认值',
      dataIndex: 'defaultValue',
      width: 80,
      align:"left",
    },
  ];
  export default defineComponent({
    components: {
      BasicTable,
      BasicForm,
      Tinymce,
      Input,
      TextArea: Input.TextArea,
      CollapseContainer,
      Tabs,
      TabPane: Tabs.TabPane,
      [Row.name]: Row,
      [Col.name]: Col,
    },
    setup() {
      const formData = ref<object>({});
      const indexVueCode = ref<string>('');
      const dataTsCode = ref<string>('');
      const modalVueCode = ref<string>('');
      const apiTsCode = ref<string>('');
      const modelTsCode = ref<string>('');
      const tableStrData = ref<string>('id\tvarchar\tNO\t40\t\t\\N\tPRI\n' +
        'name\tvarchar\tYES\t32\t名称\t\\N\t\n' +
        'url\tvarchar\tYES\t128\t链接\t\\N\t\n' +
        'sn\tvarchar\tYES\t64\t标识\t\\N\tMUL\n' +
        'component\tvarchar\tYES\t120\t组件\t\\N\t\n' +
        'status\tint\tYES\t\\N\t是否启用 ： 1启用；0禁用\t\\N\t\n' +
        'state\tvarchar\tYES\t100\t存放该模块有哪些权限值可选\t\\N\t\n' +
        'image\tvarchar\tYES\t200\t图片路径\t\\N\t\n' +
        'order_no\tint\tYES\t\\N\t模块的排序号\t\\N\t\n' +
        'pid\tvarchar\tYES\t40\t父模块id\t\\N\t\n' +
        'app_id\tvarchar\tYES\t40\t系统id\t\\N\t\n' +
        'is_show\tint\tYES\t\\N\t\t1\t\n' +
        'create_time\ttimestamp\tYES\t\\N\t创建时间\t\\N\t\n' +
        'creator\tvarchar\tYES\t32\t创建人\t\\N\t\n' +
        'update_time\ttimestamp\tYES\t\\N\t更新时间\t\\N\t\n' +
        'updator\tvarchar\tYES\t32\t更新人\t\\N\t\n' +
        'del_flag\tint\tYES\t\\N\t删除标识0:删除1：存在\t1\t');

      const [registerForm, {updateSchema, setProps, validate }] = useForm({
        labelWidth: 120,
        schemas,
        showAdvancedButton: false,
        showSubmitButton: true,
        showActionButtonGroup: true,
        showResetButton: false,
        actionColOptions: {
          span: 24,
        },
        submitButtonOptions:{
          text:'提交'
        },
        submitFunc: submitForm
      });

      const [registerTable, {setTableData, getDataSource}] = useTable({
        title: '数字库字段',
        // api: demoListApi,
        columns: columns,
        pagination: false,
        showIndexColumn: false,
        bordered: true,
      });

      function handleEditEnd({ record, index, key, value }: Recordable) {
        console.log(record, index, key, value);
      }

      function handleEditCancel() {
        console.log('cancel');
      }

      async function submitForm() {
        try {
          const values = await validate();
          // indexVueRef.value.changeFormData(values);
          formData.value = values;
          values.fields = getDataSource();

          let indexCode = '';
          if(values.showLeftTree){
            indexCode = genIndexVueLeftTreeCode(values);
          }else{
            indexCode = genIndexVueCode(values);
          }

          indexVueCode.value = indexCode;
          dataTsCode.value = genDataTsCode(values);
          modalVueCode.value = genModalVueCode(values);

          apiTsCode.value = genApiTsCode(values);
          modelTsCode.value = genModelTsCode(values);
          console.log(values.fields);
        } catch (error) {}
      }

      function handleDownByData() {
        downloadByData(indexVueCode.value, 'index.vue');
      }

      function genColumnList() {
        const fieldsArr = tableStrData.value.split('\n');
        const tableData = fieldsArr.map(item=>{
          let fieldValueArr = item.split('\t');
          fieldValueArr = fieldValueArr.map(item=>{
            return item==='\\N'?'':item;
          });
          const [columnName, dataType, isNullable, fieldLength, comment, defaultValue, columnKey ] = fieldValueArr;
          // id	varchar	NO	40		\N	PRI
          let ruleType = '';
          if(columnName.indexOf('name') !== -1){
            ruleType = 'name';
          }
          if(columnName.indexOf('sn') !== -1 || columnName.indexOf('code') !== -1){
            ruleType = 'code';
          }
          if(columnName.indexOf('remark') !== -1 || columnName.indexOf('note') !== -1 || columnName.indexOf('desc') !== -1){
            ruleType = 'remark';
          }
          let showInForm = columnName !== 'create_time'
            &&columnName !=='creator'
            &&columnName !=='update_time'
            &&columnName !=='updator'
            &&columnName !=='del_flag';
          return {columnName,
            fieldName: columnName2FieldName(columnName),
            dataType,
            ruleType: ruleType,
            formType: dataTypeMap[dataType],
            required: isNullable==='NO',
            showInTable: columnKey!=='PRI'&&columnName!=='del_flag',
            showInForm: showInForm,
            fieldLength,
            comment,
            defaultValue,
            isPrimary: columnKey==='PRI'
          };
        });
        setTableData(tableData);
        console.log(tableStrData.value);

      }
      function handleModalDownByData() {
        downloadByData(modalVueCode.value, unref(formData).className + 'Modal.vue');
      }
      function handleDataTsDownByData() {
        downloadByData(dataTsCode.value, unref(formData).lowerClassName+'.data.ts');
      }

      function handleModelTsDownByData() {
        downloadByData(apiTsCode.value, unref(formData).lowerClassName+'.ts');
      }

      function handleApiTsDownByData() {
        downloadByData(modelTsCode.value, unref(formData).lowerClassName+'Model.ts');
      }

      return {
        handleEditEnd,
        handleEditCancel,
        registerTable,
        formData,
        tableStrData,
        modalVueCode,
        handleModalDownByData,
        handleDataTsDownByData,
        handleModelTsDownByData,
        handleApiTsDownByData,
        indexVueCode,
        dataTsCode,
        apiTsCode,
        modelTsCode,
        genColumnList,
        handleDownByData,
        registerForm,
        prefixCls: 'account-center',
      };
    },
  });
</script>
<style lang="less" scoped>
  .account-center {
    &-col:not(:last-child) {
      padding: 0 10px;

      &:not(:last-child) {
        border-right: 1px dashed rgb(206, 206, 206, 0.5);
      }
    }

    &-top {
      padding: 10px;
      margin: 16px 16px 12px 16px;
      background: #fff;
      border-radius: 3px;

      &__avatar {
        text-align: center;

        img {
          border-radius: 50%;
        }

        span {
          display: block;
          font-size: 20px;
          font-weight: 500;
        }

        div {
          margin-top: 3px;
          font-size: 12px;
        }
      }

      &__detail {
        padding-left: 20px;
        margin-top: 15px;
      }

      &__team {
        &-item {
          display: inline-block;
          padding: 4px 24px;
        }

        span {
          margin-left: 3px;
        }
      }
    }

    &-bottom {
      padding: 10px;
      margin: 0 16px 16px 16px;
      background: #fff;
      border-radius: 3px;
    }
  }
</style>
