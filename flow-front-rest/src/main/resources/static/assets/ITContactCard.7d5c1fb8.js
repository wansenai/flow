import{k as t,bm as e,bs as r,ac as a,r as s,K as n,o as i,n as d,P as l,q as o,N as p,X as u}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{m}from"./index.e2ea082d.js";const b=[{id:"1",title:"邮件服务器宕机",url:"#"},{id:"2",title:"登陆错误——登陆一直显示登录中状态",url:"#"},{id:"3",title:"视频会议-服务连接失败-检查软件设置是否正确、外网连接是否正常",url:"#"}];var c=t({components:{Card:e,List:r,ListItem:r.Item,ListItemMeta:r.Item.Meta,Icon:m,Input:a,InputSearch:a.Search},setup(t){const e=s("");return{items:b,wikiInput:e,onSearch:function(){}}}});const f=u("更多"),x=o("p",null,[u(" 桌面运维："),o("br"),u(" 张三，0000-88888888"),o("br"),u(" 李四，0000-55555555"),o("br")],-1),I=o("p",null,[u(" 流程运维："),o("br"),u(" 王五，0000-99999999"),o("br"),u(" 赵六，0000-66666666"),o("br")],-1),j=o("p",null,[u(" 流程运维："),o("br"),u(" 田七，0000-99999999"),o("br"),u(" 刘八，0000-66666666"),o("br")],-1),k=u("问题反馈"),y=u("我的问题");c.render=function(t,e,r,a,s,u){const m=n("a-button"),b=n("Card");return i(),d(b,p({title:"联系我们"},t.$attrs,{"body-style":"padding-top:16px"}),{extra:l((()=>[o(m,{type:"link",size:"small"},{default:l((()=>[f])),_:1})])),default:l((()=>[o("div",null,[x,I,j,o(m,{type:"primary",block:""},{default:l((()=>[k])),_:1}),o(m,{block:"",class:"mt-2"},{default:l((()=>[y])),_:1})])])),_:1},16)};export default c;
