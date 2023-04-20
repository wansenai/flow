import { defHttp } from '/@/utils/http/axios';
import { getMenuListResultModel } from './model/menuModel';

enum Api {
  GetMenuList = '/getMenuList',
}

/**
 * @description: Get user menu based on id
 */

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
    title: '人资频道',
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
    title: 'IT频道',
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
    title: '财务频道',
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
        path: ':currentKey',
        name: 'ProcessList',
        component: '/process/index',
        meta: {
          title: '流程列表',
          hideMenu: true,
        },
      },

      {
        path: 'approve/:modelKey',
        name: 'Approve',
        component: '/process/actions/approve',
        meta: {
          title: '审批',
          hideMenu: true,
        },
      },

      {
        path: 'launch/:modelKey',
        name: 'LaunchForm',
        component: '/process/actions/launch',
        meta: {
          title: '发起',
          hideMenu: true,
        },
      },

      {
        path: 'view/:modelKey',
        name: 'ViewForm',
        component: '/process/actions/view',
        meta: {
          title: '流程查看',
          hideMenu: true,
        },
      },
      {
        path: 'actions',
        name: 'Actions',
        component: '/process/actions/index',
        meta: {
          title: '发起',
          hideMenu: true,
        },
        children: [
          {
            path: 'leave',
            name: 'Leave1',
            component: '/process-form/leave/index',
            meta: {
              title: '请假流程',
              hideMenu: true,
            }
          }
        ],
      }
    ],
  }
];

export const getMenuList = () => {
  const routers = [dashboardRoute, hrServiceRoute, itServiceRoute, fncServiceRoute, newsNoticeRoute, ...secondRoute];
  return Promise.resolve(JSON.parse(JSON.stringify(routers)));
};
