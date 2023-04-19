var CustomForm = {

  submit: function(){
    // 数据验证
    try {
      vueObj.$refs.formBaseInfoRef.validate(valid => {
        if (valid) {
          const formJson = vueObj.$refs.makingform.getJSON();
          if (!formJson.list || formJson.list.length <= 0) {
            vueObj.$message({
              showClose: true,
              message: '请添加字段！',
              type: 'warning',
              offset: 40,
              duration: 1000
            });
            return;
          }
          const formInfo = {
            formJson: JSON.stringify(formJson),
            ...vueObj.baseInfo
          }
          const loading = vueObj.$loading({
            lock: true,
            text: '正在保存...',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.1)'
          });
          window.parent.submitFormInfo(formInfo).then(res=>{
            vueObj.modelKeyDisabled = true;
            setTimeout(()=>{
              loading.close();
            }, 500);
          }).catch(e=>{
            loading.close();
          });
        }
      });
    } catch (e) {
      console.error(e);
      vueObj.$message({
        showClose: true,
        message: '保存异常！',
        offset: 40,
        type: 'error'
      });
    }
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
          modelKeyDisabled: !!modelKey,
          baseInfo: {modelName: modelName, modelKey: modelKey},
          formBaseInfoRules: {
            modelName: [
              {required: true, message: '请输入表单名称', trigger: 'blur'},
              {min: 1, max: 64, message: '长度在 1 到 64 个字符', trigger: 'blur'},
              { pattern: "^[^\\s]*$", message: '不允许输入空格符号' }
            ],
            modelKey: [
              {required: true, message: '请输入表单标识', trigger: 'blur'},
              {min: 1, max: 32, message: '长度在 1 到 32 个字符', trigger: 'blur'},
              {pattern: '^[a-zA-Z_]{1,}[0-9a-zA-Z_]{1,}$', message: '请输入英文或数字且以英文或下划线开头！'}
            ],
          }
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
          /*'jsonData': {
            handler(newVal, oldVal) {
              if(newVal){
                setTimeout(()=>{
                  this.$refs.makingform.clear();
                  if (newVal) {
                    this.$refs.makingform.setJSON(newVal)
                  }
                }, 200);
              }
            },
            deep: true,
            immediate: true
          }*/
        }
      });
    }else{
      vueObj.jsonData = jsonData;
      vueObj.baseInfo = {modelName, modelKey}
      vueObj.modelKey = modelKey;
      vueObj.modelName = modelName;
    }
  }
};


