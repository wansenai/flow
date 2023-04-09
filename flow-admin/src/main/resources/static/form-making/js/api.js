var BasePath = '/dragon-api';
const FORM_API = {
  SAVE_FORM_INFO: '/flow/form/formInfo/saveOrUpdate',
  GET_MODELINFO_BY_ID: '/flow/form/formInfo/getModelInfoById'
};

axios.defaults.baseURL = BasePath;

function saveFormInfo(formInfoData){
  return axios.post(FORM_API.SAVE_FORM_INFO, formInfoData);
}

function getModelInfoById(id){
  return axios.get(FORM_API.GET_MODELINFO_BY_ID + '?id=' + id);
}
