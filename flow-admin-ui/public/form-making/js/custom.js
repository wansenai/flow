var CustomForm = {
  init: function () {
    this.modelKey = FORM_UTILS.getQueryString('modelKey');
    this.id = FORM_UTILS.getQueryString('id');
    this.procInstId = FORM_UTILS.getQueryString('procInstId');

    const isDev = FORM_UTILS.getQueryString('isDev');
    if('false' == isDev){
      BasePath = '';
    }

    if(this.id){
      getModelInfoById(this.id).then(res=>{
        console.log('=====================>>>>>>>>>>>>', res);
      });
    }
  },

  // 异步保存数据！ formstatus（1草稿；2流程发起）
  genSaveData: function(dt, formStatus){
    var formData = {defaultFormDataVo: {code: this.bizId}, makFormDataVo: dt};
    // formDraftStatus: 1草稿；2已发起流程
    const data = {dataJson: JSON.stringify(formData), formDraftStatus: formStatus, modelKey: this.modelKey};

    return data;
  },

  submit: function(){
    // 数据验证
    if(!vueObj.modelKey){
      console.warn('modelKey不能为空！');
      vueObj.$message({
        showClose: true,
        message: 'modelKey不能为空！',
        type: 'error'
      });
      return;
    }
    if(!vueObj.modelName){
      console.warn('modelKey不能为空！');
      vueObj.$message({
        showClose: true,
        message: 'modelKey不能为空！',
        type: 'error'
      });
      return;
    }
    const formJson = vueObj.$refs.makingform.getJSON();

    const formInfo = {
      formJson: JSON.stringify(formJson),
      modelKey: vueObj.modelKey,
      modelName: vueObj.modelName
    }

    window.parent.submitFormInfo(formInfo);
  },

  /**
   * 父页面调用此方法给表单赋值
   * @param data
   */
  loadFormInfo: function(data) {
    const { formJson, modelKey, modelName } = data;
    const jsonData = formJson?JSON.parse(formJson):null;
    if(!vueObj.$el){
      vueObj = new Vue({
        el: '#app',
        data: {
          jsonData: jsonData,
          editData: {},
          modelKey: modelKey,
          modelName: modelName,
        },
        edit: false,
        methods: {
          handleSubmit () {
            CustomForm.submit();
          }
        },
        mounted() {
          this.$refs.makingform.clear();
          if(jsonData){
            this.$refs.makingform.setJSON(jsonData)
          }
        },
        watch: {
          'jsonData': {
            handler(newVal, oldVal) {
              console.log(JSON.stringify(newVal));
              this.$refs.makingform.clear();
              if(newVal){
                this.$refs.makingform.setJSON(newVal)
              }
            },
            deep: true,
            immediate: true
          }
        }
      });
    }else{
      vueObj.jsonData = jsonData;
      vueObj.modelKey = modelKey;
      vueObj.modelName = modelName;
    }
  }
};


