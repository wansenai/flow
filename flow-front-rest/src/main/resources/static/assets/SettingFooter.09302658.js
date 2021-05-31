import{F as e,c as t,d as a,V as s,f as o,U as n,aV as l,a3 as r,aO as c,aP as i,g as d}from"./index.ee676e78.js";import{k as u,c8 as g,bc as f,a as p,K as C,o as y,n as m,q as S,X as k,s as h,x}from"./vendor.d660e98f.js";var R=u({name:"SettingFooter",components:{CopyOutlined:g,RedoOutlined:f},setup(){const u=e(),{prefixCls:g}=t("setting-footer"),{t:f}=a(),{createSuccessModal:C,createMessage:y}=d(),m=s(),S=o(),k=n();return{prefixCls:g,t:f,handleCopy:function(){const{isSuccessRef:e}=l(JSON.stringify(p(k.getProjectConfig),null,2));p(e)&&C({title:f("layout.setting.operatingTitle"),content:f("layout.setting.operatingContent")})},handleResetSetting:function(){try{k.setProjectConfig(r);const{colorWeak:e,grayMode:t}=r;c(e),i(t),y.success(f("layout.setting.resetSuccess"))}catch(e){y.error(e)}},handleClearAndRedo:function(){localStorage.clear(),k.resetAllState(),u.resetState(),m.resetState(),S.resetState(),location.reload()}}}});const O=x(),b=O(((e,t,a,s,o,n)=>{const l=C("CopyOutlined"),r=C("a-button"),c=C("RedoOutlined");return y(),m("div",{class:e.prefixCls},[S(r,{type:"primary",block:"",onClick:e.handleCopy},{default:O((()=>[S(l,{class:"mr-2"}),k(" "+h(e.t("layout.setting.copyBtn")),1)])),_:1},8,["onClick"]),S(r,{color:"warning",block:"",onClick:e.handleResetSetting,class:"my-3"},{default:O((()=>[S(c,{class:"mr-2"}),k(" "+h(e.t("common.resetText")),1)])),_:1},8,["onClick"]),S(r,{color:"error",block:"",onClick:e.handleClearAndRedo},{default:O((()=>[S(c,{class:"mr-2"}),k(" "+h(e.t("layout.setting.clearBtn")),1)])),_:1},8,["onClick"])],2)}));R.render=b,R.__scopeId="data-v-c36cd858";export default R;
