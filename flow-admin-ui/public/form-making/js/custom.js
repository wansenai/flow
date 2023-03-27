var CustomForm = {
  init: function () {
    this.modelKey = FORM_UTILS.getQueryString('modelKey');
    this.bizId = FORM_UTILS.getQueryString('bizId');
    this.procInstId = FORM_UTILS.getQueryString('procInstId');

    const isDev = FORM_UTILS.getQueryString('isDev');
    if('false' == isDev){
      BasePath = '';
    }

    loadCustomFormInfo({formJson: '{}'});
    /*if(!this.modelKey){
      console.warn('modelKey不能为空！');
      vueObj.$message({
        showClose: true,
        message: 'modelKey不能为空！',
        type: 'error'
      });
    }*/


  },

// 异步保存数据！ formstatus（1草稿；2流程发起）
  genSaveData: function(dt, formStatus){
    var formData = {defaultFormDataVo: {code: this.bizId}, makFormDataVo: dt};
    // formDraftStatus: 1草稿；2已发起流程
    const data = {dataJson: JSON.stringify(formData), formDraftStatus: formStatus, modelKey: this.modelKey};

    return data;
  },

  // 自定义表单数据提交
  getFormData:function(formStatus){
    var _this = this;
    var validStatus = formStatus == '2';
    try{
      return vueObj.$refs.generateForm.getData(validStatus).then(data => {
        var returnData = _this.genSaveData(data, formStatus);
        return Promise.resolve(returnData);
      }).catch(e => {
        return Promise.reject(e);
      });
    }catch(e){
      return Promise.reject("获取自定义表单数据异常！");
    }
  }
};

/**
 * 父页面调用此方法获取表单的值
 * 获取自定义表单的数据
 * @param formStatus
 * @returns {*}
 */
function getCustomFormData(formStatus){
  return CustomForm.getFormData(formStatus);
}

/**
 * 父页面调用此方法给表单赋值
 * @param data
 */
function loadCustomFormInfo(data) {
  const { formJson } = data;
  const jsonData = JSON.parse(formJson);

  vueObj = new Vue({
    el: '#app',
    data: {
      jsonData: jsonData,
      editData: {},
      remoteFuncs: {

      },
      dynamicData: {

      }
    },
    edit: false,
    methods: {
      handleSubmit () {
        CustomForm.submit();
      }
    }
  });

  // vueObj.$refs.generateForm.setData(formDatas);
}
