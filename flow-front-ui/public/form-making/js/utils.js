var BasePath = '/flow-front-api';
const FORM_UTILS = {

  /**
   * 获取URL上的参数
   * @param name
   * @returns {string|null}
   */
  getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(decodeURI(r[2]));
    return null;
  }
};
