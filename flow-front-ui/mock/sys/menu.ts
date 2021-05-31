import { resultSuccess } from '../_util';
import { MockMethod } from 'vite-plugin-mock';

// single
const dashboardRoute = {
  path: '/workbench',
  name: 'workbench',
  component: '/dashboard/workbench/index',
  meta: {
    title: '工作台',
    affix: true,
    icon: 'bx:bx-home',
  },
};
// single
const hrServiceRoute = {
  path: '/hr-service',
  name: 'hrService',
  component: '/dashboard/hr-service/index',
  meta: {
    title: 'HR服务',
    affix: true,
    icon: 'bx:bx-home',
  },
};

// single
const itServiceRoute = {
  path: '/it-service',
  name: 'itService',
  component: '/dashboard/it-service/index',
  meta: {
    title: 'IT服务',
    affix: true,
    icon: 'bx:bx-home',
  },
};

// single
const fncServiceRoute = {
  path: '/fnc-service',
  name: 'fncService',
  component: '/dashboard/fnc-service/index',
  meta: {
    title: '财务服务',
    affix: true,
    icon: 'bx:bx-home',
  },
};

// single
const newsNoticeRoute = {
  path: '/news-notice',
  name: 'newsNotice',
  component: '/dashboard/news-notice/index',
  meta: {
    title: '新闻公告',
    affix: true,
    icon: 'bx:bx-home',
  },
};

const frontRoute = {
  path: 'front',
  name: 'PermissionFrontDemo',
  component: '/dashboard/workbench/index',
  meta: {
    title: 'HR服务',
  },
  children: [
    {
      path: 'page',
      name: 'FrontPageAuth',
      component: '/demo/permission/front/index',
      meta: {
        title: 'routes.demo.permission.frontPage',
      },
    },
    {
      path: 'btn',
      name: 'FrontBtnAuth',
      component: '/demo/permission/front/Btn',
      meta: {
        title: 'routes.demo.permission.frontBtn',
      },
    },
    {
      path: 'auth-pageA',
      name: 'FrontAuthPageA',
      component: '/demo/permission/front/AuthPageA',
      meta: {
        title: 'routes.demo.permission.frontTestA',
      },
    },
    {
      path: 'auth-pageB',
      name: 'FrontAuthPageB',
      component: '/demo/permission/front/AuthPageB',
      meta: {
        title: 'routes.demo.permission.frontTestB',
      },
    },
  ],
};
const backRoute = {
  path: 'back',
  name: 'PermissionBackDemo',
  meta: {
    title: 'routes.demo.permission.back',
  },

  children: [
    {
      path: 'page',
      name: 'BackAuthPage',
      component: '/demo/permission/back/index',
      meta: {
        title: 'routes.demo.permission.backPage',
      },
    },
    {
      path: 'btn',
      name: 'BackAuthBtn',
      component: '/demo/permission/back/Btn',
      meta: {
        title: 'routes.demo.permission.backBtn',
      },
    },
  ],
};
const authRoute = {
  path: '/permission',
  name: 'Permission',
  component: 'LAYOUT',
  redirect: '/permission/front/page',
  meta: {
    icon: 'carbon:user-role',
    title: 'routes.demo.permission.permission',
  },
  children: [frontRoute, backRoute],
};

const authRoute1 = {
  path: '/permission',
  name: 'Permission',
  component: 'LAYOUT',
  redirect: '/permission/front/page',
  meta: {
    icon: 'carbon:user-role',
    title: 'routes.demo.permission.permission',
  },
  children: [backRoute],
};

const levelRoute = {
  path: '/level',
  name: 'Level',
  component: 'LAYOUT',
  redirect: '/level/menu1/menu1-1',
  meta: {
    icon: 'carbon:user-role',
    title: 'routes.demo.level.level',
  },

  children: [
    {
      path: 'menu1',
      name: 'Menu1Demo',
      meta: {
        title: 'Menu1',
      },
      children: [
        {
          path: 'menu1-1',
          name: 'Menu11Demo',
          meta: {
            title: 'Menu1-1',
          },
          children: [
            {
              path: 'menu1-1-1',
              name: 'Menu111Demo',
              component: '/demo/level/Menu111',
              meta: {
                title: 'Menu111',
              },
            },
          ],
        },
        {
          path: 'menu1-2',
          name: 'Menu12Demo',
          component: '/demo/level/Menu12',
          meta: {
            title: 'Menu1-2',
          },
        },
      ],
    },
    {
      path: 'menu2',
      name: 'Menu2Demo',
      component: '/demo/level/Menu2',
      meta: {
        title: 'Menu2',
      },
    },
  ],
};
const secondRoute = [
  {
    path: '/process',
    name: 'Process',
    component: 'LAYOUT',
    redirect: '/process/todo',
    meta: {
      icon: 'carbon:user-role',
      title: '流程中心',
      hideMenu: true,
    },

    children: [
      {
        path: 'todo',
        name: 'Todo',
        component: '/process/todo/index',
        meta: {
          title: '待办',
          hideMenu: true,
        },
      },
      {
        path: 'have-down',
        name: 'HaveDown',
        component: '/process/have-down/index',
        meta: {
          title: '已办',
          hideMenu: true,
        },
      },
      {
        path: 'launched',
        name: 'Launched',
        component: '/process/launched/index',
        meta: {
          title: '已发',
          hideMenu: true,
        },
      },
      {
        path: 'launch',
        name: 'Launch',
        component: '/process/launch/index',
        meta: {
          title: '发起',
          hideMenu: true,
        },
      },
    ],
  }
];
export default [
  {
    url: '/basic-api/getMenuListById',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const { id } = query;
      if (!id || id === '1') {
        return resultSuccess([dashboardRoute, hrServiceRoute, itServiceRoute, fncServiceRoute, newsNoticeRoute, ...secondRoute]);
      }
      if (id === '2') {
        return resultSuccess([dashboardRoute, authRoute1, levelRoute]);
      }
    },
  },
] as MockMethod[];
