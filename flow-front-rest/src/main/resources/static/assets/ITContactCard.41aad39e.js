import{k as t,bm as e,bs as r,ac as a,r as s,K as n,o as i,n as l,P as o,q as d,N as p,X as u}from"./vendor.0482ef83.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{m}from"./index.ac2432bc.js";const c=[{id:"1",title:"邮件服务器宕机",url:"#"},{id:"2",title:"登陆错误——登陆一直显示登录中状态",url:"#"},{id:"3",title:"视频会议-服务连接失败-检查软件设置是否正确、外网连接是否正常",url:"#"}];var b=t({components:{Card:e,List:r,ListItem:r.Item,ListItemMeta:r.Item.Meta,Icon:m,Input:a,InputSearch:a.Search},setup(t){const e=s("");return{items:c,wikiInput:e,onSearch:function(){}}}});const f=u("更多"),x=d("p",null,[u(" 桌面运维："),d("br"),u(" 张三，0000-88888888"),d("br"),u(" 李四，0000-55555555"),d("br")],-1),I=d("p",null,[u(" 流程运维："),d("br"),u(" 王五，0000-99999999"),d("br"),u(" 赵六，0000-66666666"),d("br")],-1),j=d("p",null,[u(" 流程运维："),d("br"),u(" 田七，0000-99999999"),d("br"),u(" 刘八，0000-66666666"),d("br")],-1),k=u("问题反馈"),y=u("我的问题");b.render=function(t,e,r,a,s,u){const m=n("a-button"),c=n("Card");return i(),l(c,p({title:"联系我们"},t.$attrs,{"body-style":"padding-top:16px"}),{extra:o((()=>[d(m,{type:"link",size:"small"},{default:o((()=>[f])),_:1})])),default:o((()=>[d("div",null,[x,I,j,d(m,{type:"primary",block:""},{default:o((()=>[k])),_:1}),d(m,{block:"",class:"mt-2"},{default:o((()=>[y])),_:1})])])),_:1},16)};export default b;
