var CustomForm = {
  /**
   * 父页面调用此方法给表单赋值
   * @param data
   */
  loadFormInfo: function(data) {
    const { formJson, editData } = data;
    const jsonData = formJson?JSON.parse(formJson):null;
    if(!vueObj.$el){
      vueObj = new Vue({
        el: '#app',
        data: {
          jsonData: jsonData,
          editData: {},
        },
        edit: false,
        methods: {
          handleSubmit () {
            CustomForm.submit();
          }
        },
        mounted() {
        }
      });
    }else{
      vueObj.jsonData = jsonData;
    }
  },

  // 获取表单数据
  geFormData: function(isValidate ){
    return vueObj.$refs.generateform.getData(isValidate);
  },

  // 设置表单数据
  setFormData: function(formData, isEdit) {
    vueObj.editData = formData;
    vueObj.edit = isEdit;
    setTimeout(()=>{
      vueObj.$refs.generateform.$refs.generateForm._props.disabled = !isEdit
    }, 100);
  }
};


