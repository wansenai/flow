interface GroupItem {
  title: string;
  icon: string;
  color: string;
  desc?: string;
}

interface NavItem {
  title: string;
  sn?: string;
  icon: string;
  color: string;
  url?: string;
  badgeCount?: number;
}

interface DynamicInfoItem {
  id: string;
  title: string;
  hasRead: boolean;
  date: string;
  url: string;
}

export const navItems: NavItem[] = [
  {
    title: '日程',
    icon: 'ion:calendar',
    color: '#e18525',
  },
  {
    title: '通讯录',
    icon: 'ion:ios-people',
    // color: '#e18525',
    color: '#e18525',
  },
  {
    title: '待办事项',
    sn: 'todo',
    icon: 'ion:android-chat',
    color: '#e18525',
    url: '/process/todo',
    badgeCount: 0,
  },
  {
    title: '流程中心',
    icon: 'ion:network',
    color: '#e18525',
    url: '/process/launch',
  },
  {
    title: '我和邮箱',
    icon: 'ion:email-unread',
    color: '#1fdaca',
  },
];

export const bannerList:[] = [
  {
    id: '1',
    title: '奋力打造践行习近平新时代中国特色社会主义思想重要阵地',
    imgSrc: '/resource/temp/imgs/banners/banner-1.jpg',
    url: '',
  },
  {
    id: '2',
    title: '抢抓机遇巩固优势推动公司高质量发展',
    imgSrc: '/resource/temp/imgs/banners/banner-2.jpg',
    url: '',
  },
  {
    id: '3',
    title: '中国石化位居2020年中央企业品牌建设能力排行榜第一',
    imgSrc: '/resource/temp/imgs/banners/banner-3.jpg',
    url: '',
  },
];

export const noticeInfoItems: DynamicInfoItem[] = [
  {
    id: 'dynamic-avatar-1|svg',
    title: `上海石化1000吨/年碳纤维装置进入开车准备阶段`,
    date: '2021-05-20',
    hasRead: true,
    url: `#`,
  },
  {
    id: 'dynamic-avatar-1|svg11',
    title: `中国石化2020年半年度报告`,
    date: '2021-05-20',
    hasRead: true,
    url: `#`,
  },
  {
    id: 'dynamic-avatar-1|svg1221',
    title: `2019年集团公司年报`,
    date: '2021-05-20',
    hasRead: true,
    url: `#`,
  },
  {
    id: 'dynamic-avatar-2|svg',
    title: `集团公司2019年社会责任报告`,
    date: '2021-05-20',
    hasRead: true,
    url: '#',
  },
  {
    id: 'dynamic-avatar-3|svg',
    title: `中国石化发布民企清欠专项工作拖欠线索信访联系方式`,
    date: '2021-05-20',
    hasRead: true,
    url: '#',
  },
  {
    id: 'dynamic-avatar-4|svg',
    title: `中国石化集团销售实业有限公司声明`,
    date: '2021-05-20',
    hasRead: true,
    url: '#',
  },
];


export const dynamicInfoItems: DynamicInfoItem[] = [
  {
    id: 'dynamic-avatar-1|svg',
    title: `构建多元化选人用人监督机制 着力推动形成良好政治生态`,
    date: '2021-05-28',
    hasRead: true,
    url: `#`,
  },
  {
    id: 'dynamic-avatar-4|svg',
    title: `奋力打造践行习近平新时代中国特色社会主义思想重要阵地`,
    date: '2021-05-26',
    hasRead: true,
    url: '#',
  },
  {
    id: 'dynamic-avatar-2|svg',
    title: `集团公司首次举办碳达峰碳中和专题培训`,
    date: '2021-05-24',
    hasRead: true,
    url: '#',
  },
  {
    id: 'dynamic-avatar-3|svg',
    title: `镇海炼化开源节流增效益目标任务完成过半`,
    date: '2021-05-23',
    hasRead: true,
    url: '#',
  },
  {
    id: 'dynamic-avatar-5|svg',
    title: `中国石化天津南港高端新材料项目集群开工`,
    date: '2021-05-23',
    hasRead: true,
    url: '#',
  },
  {
    id: 'dynamic-avatar-5|svg',
    title: `胜利油田推进对标世界一流管理提升行动`,
    date: '2021-05-20',
    hasRead: true,
    url: '#',
  },
];



export const groupItems: [] = [
  {
    title: '综合管理平台',
    icon: 'ion:cube',
    color: '#e18525',
    // desc: '集统一身份认证，权限管理，敏捷开发为一体的综合平台',
  },
  {
    title: '财务系统',
    icon: 'ion:umbrella',
    color: '#3fb27f',
    // desc: '打通企业从申请、审批、交易、报告全流程的自动化场景应用',
  },
  {
    title: 'HR系统',
    icon: 'ion:person-stalker',
    color: '#e18525',
    // desc: '实现组织人事管理,考勤管理,薪酬管理等人才管理信息化',
  },
  {
    title: '资产系统',
    icon: 'ion:ios-briefcase',
    color: '#3fb27f',
    // desc: '只为解决传统模式下盘点难的问题。',
  },
  {
    title: 'CRM系统',
    icon: 'ion:ios-flask',
    color: '#e18525',
    // desc: '实现潜客挖掘,销售跟单,合同管理,售后服务,销售漏斗',
  },
  {
    title: 'MDM系统',
    icon: 'ion:planet',
    color: '#3fb27f',
    // desc: '提供全面的主数据整合方案, 可管理,整合,分析及标准化数据。',
  },
];
