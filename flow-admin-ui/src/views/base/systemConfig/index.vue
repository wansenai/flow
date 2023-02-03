<template>
  <PageWrapper
    title="系统配置"
    contentBackground
    content=""
    contentClass="p-4 "
  >


    <Row type="flex" style="flex-wrap: nowrap;">
      <Col flex="150px">网站ICON设置：</Col>
      <Col flex="auto" class="icon-box">
        <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
        <Upload style="margin: auto;"
                name="avatar"
                list-type="picture-card"
                class="avatar-uploader"
                :show-upload-list="false"
                :before-upload="beforeUpload"
                :multiple="false"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <plus-outlined ></plus-outlined>
            <div class="ant-upload-text">上传ICON</div>
          </div>
        </Upload>
      </Col>
    </Row>

    <Row type="flex" style="flex-wrap: nowrap;">
      <Col flex="150px">系统LOGO设置：</Col>
      <Col flex="auto" class="icon-box">
        <Upload style="margin: auto;"
                name="avatar"
                list-type="picture-card"
                class="avatar-uploader"
                :show-upload-list="false"
                :before-upload="beforeUpload"
                :multiple="false"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <plus-outlined ></plus-outlined>
            <div class="ant-upload-text">上传ICON</div>
          </div>
        </Upload>
      </Col>
    </Row>

    <Row type="flex" style="flex-wrap: nowrap;">
      <Col flex="150px">登录页背景设置：</Col>
      <Col flex="auto" class="icon-box">
        <Upload style="margin: auto;"
                name="avatar"
                list-type="picture-card"
                class="avatar-uploader"
                :show-upload-list="false"
                :before-upload="beforeUpload"
                :multiple="false"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <plus-outlined ></plus-outlined>
            <div class="ant-upload-text">上传ICON</div>
          </div>
        </Upload>
      </Col>
    </Row>


    <br/><br/><br/>
    系统名称
    <!--    <BasicForm @register="register" />-->

  </PageWrapper>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Upload, Row, Col } from 'ant-design-vue';
  import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getSystemConfigListByPage } from '/@/api/base/systemConfig';
  import { useMessage } from '/@/hooks/web/useMessage';

  import { columns, searchFormSchema } from './systemConfig.data';
  import SystemConfigModal from './SystemConfigModal.vue';

  import { useModal } from '/@/components/Modal';
  import { deleteByIds } from '/@/api/base/systemConfig';

  export default defineComponent({
    name: 'SystemConfig',
    components: {
      PlusOutlined, LoadingOutlined, Row, Col,
      Upload,
      BasicTable,
      TableAction,
      SystemConfigModal,
      PageWrapper
    },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const imageUrl = ref<string>('');
      const { createMessage } = useMessage();

      const [registerTable, { reload }] = useTable({
        title: '列表',
        api: getSystemConfigListByPage,
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
        showIndexColumn: true,
        actionColumn: {
          width: 100,
          title: '操作',
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
      // 解析为base64位
      const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        // 读取文件
        reader.readAsDataURL(img);
      }
      function handleCreateChild(record: Recordable) {
        record = {pid: record.id};
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
      const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          createMessage.error("只允许上传JPG图片！");
          return false;
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          createMessage.error("图片不能大于2MB！");
          return false;
        }
        getBase64(file, imgUrl => {
            imageUrl.value = imgUrl;
          }
        );
        return false;
      };
      function doSearch() {
        reload();
      }

      function handleSuccess() {
        setTimeout(()=>{
          reload();
        }, 200);
      }

      return {
        beforeUpload,
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleCreateChild,
        handleDelete,
        handleSuccess,
        doSearch,
        imageUrl,
      };
    },
  });
</script>
<style lang="less">
.icon-box{

}
</style>
