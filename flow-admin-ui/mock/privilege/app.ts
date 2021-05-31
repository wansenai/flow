import { MockMethod } from 'vite-plugin-mock';
import {resultPageSuccess, resultSuccess} from '../_util';

const appList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      id: `${index}`,
      name: '@cword(4,8)',
      sn: '@cword(4,10)',
      url: '@url',
      indexUrl: '@url',
      image: '@url',
      note: '@cword(10,20)',
      orderNo: `${index + 1}`,
      createTime: '@datetime',
      'status|1': ['0', '1'],
    });
  }
  return result;
})();

export default [
  {
    url: '/dragon-api/flow/base/app/getPagerModel',
    timeout: 100,
    method: 'post',
    response: ({ query }) => {
      const { pageNum = 1, pageSize = 20 } = query;
      return resultPageSuccess(pageNum, pageSize, appList);
    },
  },
  {
    url: '/dragon-api/flow/base/app/saveOrUpdate',
    method: 'post',
    response: () => {
      return resultSuccess('保存成功');
    },
  },
  {
    url: '/dragon-api/flow/base/app/delete',
    method: 'post',
    response: () => {
      return resultSuccess('删除成功');
    },
  },
] as MockMethod[];
