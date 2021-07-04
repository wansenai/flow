import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';

const list: any[] = [];
const demoList = (() => {
  const result = {
    list: list,
  };
  for (let index = 0; index < 20; index++) {
    result.list.push({
      name: `选项${index}`,
      id: `${index}`,
    });
  }
  return result;
})();

export default [
  {
    url: '/dragon-api/select/getDemoOptions',
    timeout: 2000,
    method: 'get',
    response: ({ query }) => {
      console.log(query);
      return resultSuccess(demoList);
    },
  },
] as MockMethod[];
