/**
 * @description: 配置默认排序号相关属性
 */
export enum OrderNoDefaultEnum {
  VALUE = 100,
  MAX = 999999999,
  MIN = -999999999,
}

/**
 * @description: 配置默认描述字段
 */
export enum RemarkDefaultEnum {
  MIN_ROWS = 2,
  MAX_ROWS = 8,
}

export enum FormValidPatternEnum {
  SN = '^[0-9a-zA-Z\-_]{1,}$',
  URL = '',
  EMAIL = '^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$',
  MOBILE = '^(1[0-9])\\d{9}$',

}

/**
 * @description:  contentTyp
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
