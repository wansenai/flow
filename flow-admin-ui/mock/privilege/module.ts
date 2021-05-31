import { MockMethod } from 'vite-plugin-mock';
import {resultPageSuccess, resultSuccess} from '../_util';

const moduleList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      id: `${index}`,
      name: '@cword(4,10)',
      url: '@cword(4,10)',
      sn: '@cword(4,10)',
      status: '@cword(4,10)',
      image: '@cword(4,10)',
      orderNo: `${index + 1}`,
      pid: '@cword(4,10)',
      appId: '@cword(4,10)',
      state: '@cword(4,10)',
      component: '@cword(4,10)',
      createTime: '@datetime',
      'status|1': ['0', '1'],
    });
  }
  return result;
})();

const priValList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      id: `${index}`,
      appId: '@cword(4,10)',
      position: `${index + 1}`,
      name: '@cword(4,10)',
      orderNo: `${index + 1}`,
      remark: '@cword(4,10)',
    });
  }
  return result;
})();

export default [
  {
    url: '/dragon-api/flow/privilege/module/getModules',
    timeout: 100,
    method: 'post',
    response: () => {
      return resultSuccess(moduleList);
    },
  },
  {
    url: '/dragon-api/flow/privilege/module/getAllPriVal',
    timeout: 100,
    method: 'post',
    response: () => {
      return resultSuccess(priValList);
    },
  },
  {
    url: '/dragon-api/flow/privilege/module/saveOrUpdate',
    method: 'post',
    response: () => {
      return resultSuccess('保存成功');
    },
  },,
  {
    url: '/dragon-api/flow/privilege/module/delete',
    method: 'post',
    response: () => {
      return resultSuccess('删除成功');
    },
  },
] as MockMethod[];
