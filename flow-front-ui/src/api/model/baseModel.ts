export interface BasicPageParams {
  pageNum: number;
  pageSize: number;
}

export interface CheckExistParams {
  id: string;
  field: string;
  fieldName: string;
  fieldValue: string;
}

export interface BasicFetchResult<T extends any> {
  rows: T;
  total: number;
}

export interface BasicPageSearchParams<T extends any> {
  query: BasicPageParams;
  entity: T;
}
