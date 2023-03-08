<template>
  <CollapseContainer title="登录页配置" :canExpan="false">
    <a-row :gutter="24">
      <Popover placement="right">
        <template #content>
          <div class="tooltip-popover-content">
            <img src="../../../assets/images/help/tooltip-app-name.png" />
          </div>
        </template>
        <a-col :span="13">
          <div class="mb-2 mt-4">登录页面标题</div>
          <a-input />
        </a-col>
      </Popover>

      <Popover placement="right">
        <template #content>
          <div class="tooltip-popover-content">
            <img src="../../../assets/images/help/tooltip-app-name.png" />
          </div>
        </template>
        <a-col :span="13">
          <div class="mb-2 mt-4">登录页面副标题</div>
          <a-input />
        </a-col>
      </Popover>

      <Popover placement="right">
        <template #content>
          <div class="tooltip-popover-content">
            <img src="../../../assets/images/help/tooltip-app-name.png" />
          </div>
        </template>
        <a-col :span="13">
          <div class="change-logo">
            <div class="mb-2 mt-4">登录页图片</div>
            <Upload style="margin: auto;"
                    name="avatar"
                    list-type="picture-card"
                    class="login-box-uploader"
                    :show-upload-list="false"
                    :before-upload="beforeUpload"
                    :multiple="false"
            >
              <img v-if="appLogo" :src="appLogo" alt="avatar" />
              <div v-else>
                <plus-outlined ></plus-outlined>
                <div class="ant-upload-text">上传</div>
              </div>
            </Upload>
          </div>
        </a-col>
      </Popover>

      <Popover placement="right">
        <template #content>
          <div class="tooltip-popover-content">
            <img src="../../../assets/images/help/tooltip-app-name.png" />
          </div>
        </template>
        <a-col :span="13">
          <div class="change-logo">
            <div class="mb-2 mt-4">登录页面背景图</div>
            <Upload style="margin: auto;"
                    name="avatar"
                    list-type="picture-card"
                    class="login-bg-uploader"
                    :show-upload-list="false"
                    :before-upload="beforeUpload"
                    :multiple="false"
            >
              <img v-if="appLogo" :src="appLogo" alt="avatar" />
              <div v-else>
                <plus-outlined ></plus-outlined>
                <div class="ant-upload-text">上传</div>
              </div>
            </Upload>
          </div>
        </a-col>
      </Popover>
    </a-row>
    <Button type="primary" @click="handleSubmit"> 更新基本信息 </Button>
  </CollapseContainer>
</template>
<script lang="ts">
import { Button, Row, Col, Upload, Popover } from 'ant-design-vue';
import { computed, ref, defineComponent, onMounted } from 'vue';
import { BasicForm, useForm } from '/@/components/Form/index';
import { CollapseContainer } from '/@/components/Container';
import { CropperAvatar } from '/@/components/Cropper';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';

import { useMessage } from '/@/hooks/web/useMessage';

import headerImg from '/@/assets/images/header.jpg';
import { accountInfoApi } from '/@/api/demo/account';
import { baseSetschemas } from './data';
import { useUserStore } from '/@/store/modules/user';
import { uploadApi } from '/@/api/sys/upload';

export default defineComponent({
  components: {
    BasicForm, PlusOutlined, Upload, Popover,
    CollapseContainer,
    Button,
    ARow: Row,
    ACol: Col,
    CropperAvatar,
  },
  setup() {
    const { createMessage } = useMessage();
    const userStore = useUserStore();
    const appLogo = ref();
    const [register, { setFieldsValue }] = useForm({
      labelWidth: 120,
      schemas: baseSetschemas,
      showActionButtonGroup: false,
    });

    onMounted(async () => {
      const data = await accountInfoApi();
      setFieldsValue(data);
    });

    const avatar = computed(() => {
      const { avatar } = userStore.getUserInfo;
      return avatar || headerImg;
    });

    function updateAvatar(src: string) {
      const userinfo = userStore.getUserInfo;
      userinfo.avatar = src;
      userStore.setUserInfo(userinfo);
    }

    // 解析为base64位
    const getBase64 = (img, callback) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => callback(reader.result));
      // 读取文件
      reader.readAsDataURL(img);
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
    }

    return {
      avatar,
      register,
      beforeUpload,
      appLogo,
      uploadApi: uploadApi as any,
      updateAvatar,
      handleSubmit: () => {
        createMessage.success('更新成功！');
      },
    };
  },
});
</script>

<style lang="less">
.login-box-uploader {
  .ant-upload.ant-upload-select-picture-card{
    width: 270px;
    height: 140px;
  }
  img {
    display: block;
    margin-bottom: 15px;
    border-radius: 50%;
  }
}
.login-bg-uploader {
  .ant-upload.ant-upload-select-picture-card{
    width: 700px;
    height: 400px;
  }
  img {
    display: block;
    margin-bottom: 15px;
    border-radius: 50%;
  }
}
</style>
