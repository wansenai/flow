import{z as e,bk as a,b8 as t,r,Z as s,D as n,F as o,a3 as i,w as d,a6 as c,ao as u,J as p,a8 as l,a9 as y}from"./vendor.11d66826.js";import{P as m}from"./index.1d9afa2c.js";import{r as f,a6 as b}from"./index.514e05b1.js";/* empty css              *//* empty css              *//* empty css              */import"./onMountedOrActivated.17f3c81d.js";import"./useWindowSizeFn.9fecf134.js";import"./useContentViewHeight.b2883a86.js";const k=e({name:"AccountDetail",components:{PageWrapper:m,ATabs:a,ATabPane:a.TabPane},setup(){var e;const a=t(),s=f(),n=r(null==(e=a.params)?void 0:e.id),o=r("detail"),{setTitle:i}=b();return i("详情：用户"+n.value),{userId:n,currentKey:o,goBack:function(){s("/system/account")}}}}),v=y(" 禁用账号 "),g=y(" 修改密码 "),j={class:"pt-4 m-4 desc-wrap"};k.render=function(e,a,t,r,y,m){const f=s("a-button"),b=s("a-tab-pane"),k=s("a-tabs"),K=s("PageWrapper");return n(),o(K,{title:"用户"+e.userId+"的资料",content:"这是用户资料详情页面。本页面仅用于演示相同路由在tab中打开多个页面并且显示不同的数据",contentBackground:"",onBack:e.goBack},{extra:i((()=>[d(f,{type:"primary",danger:""},{default:i((()=>[v])),_:1}),d(f,{type:"primary"},{default:i((()=>[g])),_:1})])),footer:i((()=>[d(k,{"default-active-key":"detail",activeKey:e.currentKey,"onUpdate:activeKey":a[1]||(a[1]=a=>e.currentKey=a)},{default:i((()=>[d(b,{key:"detail",tab:"用户资料"}),d(b,{key:"logs",tab:"操作日志"})])),_:1},8,["activeKey"])])),default:i((()=>[d("div",j,["detail"==e.currentKey?(n(),o(c,{key:0},u(10,(a=>d("div",{key:a},"这是用户"+p(e.userId)+"资料Tab",1))),64)):l("",!0),"logs"==e.currentKey?(n(),o(c,{key:1},u(10,(a=>d("div",{key:a},"这是用户"+p(e.userId)+"操作日志Tab",1))),64)):l("",!0)])])),_:1},8,["title","onBack"])};export default k;
