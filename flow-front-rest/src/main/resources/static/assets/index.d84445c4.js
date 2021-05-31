var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,i=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))a.call(t,n)&&s(e,n,t[n]);return e},r=(e,l)=>t(e,n(l));import{k as u,f as E,K as _,o as d,n as g,S as c,Q as O,N as S,P as T,X as p,s as A,W as C,c3 as N,q as M,bb as D,r as R,a as f,t as m,a4 as I,D as b,J as y,a1 as H,aq as h,a$ as L,w as v,ag as U,A as w,Z as B,a_ as P,aT as F}from"./vendor.d660e98f.js";import{u as x}from"./index.4ee0beb4.js";import{d as G,p as W,c as k,aq as $,L as X,aa as j,aA as K,am as V,h as Q,ad as Y,az as z,B as Z,aI as q,aJ as J,aK as ee,M as te,l as ne,aL as le,X as oe,U as ae,aM as se,aN as ie,K as re,aO as ue,aP as Ee,aQ as _e,aR as de,W as ge,n as ce,O as Oe,b as Se,aS as Te,aT as pe,aU as Ae,m as Ce}from"./index.fe7e6ae2.js";/* empty css              */import{c as Ne}from"./createAsyncComponent.d2690156.js";const{t:Me}=G(),De={confirmLoading:W.bool,showCancelBtn:W.bool.def(!0),cancelButtonProps:Object,cancelText:W.string.def(Me("common.cancelText")),showOkBtn:W.bool.def(!0),okButtonProps:Object,okText:W.string.def(Me("common.okText")),okType:W.string.def("primary"),showFooter:W.bool,footerHeight:{type:[String,Number],default:60}},Re=i({isDetail:W.bool,title:W.string.def(""),loadingText:W.string,showDetailBack:W.bool.def(!0),visible:W.bool,loading:W.bool,maskClosable:W.bool.def(!0),getContainer:{type:[Object,String]},scrollOptions:{type:Object,default:null},closeFunc:{type:[Function,Object],default:null},triggerWindowResize:W.bool,destroyOnClose:W.bool},De);var fe=u({name:"BasicDrawerFooter",props:r(i({},De),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:t}){const{prefixCls:n}=k("basic-drawer-footer");return{handleOk:function(){t("ok")},prefixCls:n,handleClose:function(){t("close")},getStyle:E((()=>{const t=`${e.height}`;return{height:t,lineHeight:t}}))}}});fe.render=function(e,t,n,l,o,a){const s=_("a-button");return e.showFooter||e.$slots.footer?(d(),g("div",{key:0,class:e.prefixCls,style:e.getStyle},[e.$slots.footer?O(e.$slots,"footer",{key:1}):(d(),g(c,{key:0},[O(e.$slots,"insertFooter"),e.showCancelBtn?(d(),g(s,S({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:T((()=>[p(A(e.cancelText),1)])),_:1},16,["onClick"])):C("",!0),O(e.$slots,"centerFooter"),e.showOkBtn?(d(),g(s,S({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:T((()=>[p(A(e.okText),1)])),_:1},16,["type","onClick","loading"])):C("",!0),O(e.$slots,"appendFooter")],64))],6)):C("",!0)};var me=u({name:"BasicDrawerHeader",components:{BasicTitle:$,ArrowLeftOutlined:N},props:{isDetail:W.bool,showDetailBack:W.bool,title:W.string},emits:["close"],setup(e,{emit:t}){const{prefixCls:n}=k("basic-drawer-header");return{prefixCls:n,handleClose:function(){t("close")}}}});const Ie={key:1};me.render=function(e,t,n,l,o,a){const s=_("BasicTitle"),i=_("ArrowLeftOutlined");return e.isDetail?(d(),g("div",{key:1,class:[e.prefixCls,`${e.prefixCls}--detail`]},[M("span",{class:`${e.prefixCls}__twrap`},[e.showDetailBack?(d(),g("span",{key:0,onClick:t[1]||(t[1]=(...t)=>e.handleClose&&e.handleClose(...t))},[M(i,{class:`${e.prefixCls}__back`},null,8,["class"])])):C("",!0),e.title?(d(),g("span",Ie,A(e.title),1)):C("",!0)],2),M("span",{class:`${e.prefixCls}__toolbar`},[O(e.$slots,"titleToolbar")],2)],2)):(d(),g(s,{key:0,class:e.prefixCls},{default:T((()=>[O(e.$slots,"title"),p(" "+A(e.$slots.title?"":e.title),1)])),_:3},8,["class"]))};var be=u({components:{Drawer:D,ScrollContainer:X,DrawerFooter:fe,DrawerHeader:me},inheritAttrs:!1,props:Re,emits:["visible-change","ok","close","register"],setup(e,{emit:t}){const n=R(!1),l=j(),o=R(null),{t:a}=G(),{prefixVar:s,prefixCls:u}=k("basic-drawer"),_={setDrawerProps:function(e){o.value=K(f(o)||{},e),Reflect.has(e,"visible")&&(n.value=!!e.visible)},emitVisible:void 0},d=H();d&&t("register",_,d.uid);const g=E((()=>K(m(e),f(o)))),c=E((()=>{const e=r(i(i({placement:"right"},f(l)),f(g)),{visible:f(n)});e.title=void 0;const{isDetail:t,width:o,wrapClassName:a,getContainer:E}=e;if(t){o||(e.width="100%");const t=`${u}__detail`;e.wrapClassName=a?`${a} ${t}`:t,E||(e.getContainer=`.${s}-layout-content`)}return e})),O=E((()=>i(i({},l),f(c)))),S=E((()=>{const{footerHeight:e,showFooter:t}=f(c);return t&&e?V(e)?`${e}px`:`${e.replace("px","")}px`:"0px"})),T=E((()=>({position:"relative",height:`calc(100% - ${f(S)})`}))),p=E((()=>{var e;return!!(null==(e=f(c))?void 0:e.loading)}));return I((()=>{n.value=e.visible})),b((()=>n.value),(e=>{y((()=>{var n;t("visible-change",e),d&&(null==(n=_.emitVisible)||n.call(_,e,d.uid))}))})),{onClose:function(e){return l=this,o=null,a=function*(){const{closeFunc:l}=f(c);if(t("close",e),l&&Q(l)){const e=yield l();n.value=!e}else n.value=!1},new Promise(((t,n)=>{var s=t=>{try{r(a.next(t))}catch(e){n(e)}},i=t=>{try{r(a.throw(t))}catch(e){n(e)}},r=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,i);r((a=a.apply(l,o)).next())}));var l,o,a},t:a,prefixCls:u,getMergeProps:g,getScrollContentStyle:T,getProps:c,getLoading:p,getBindValues:O,getFooterHeight:S,handleOk:function(){t("ok")}}}});be.render=function(e,t,n,l,o,a){const s=_("DrawerHeader"),i=_("ScrollContainer"),r=_("DrawerFooter"),u=_("Drawer"),E=h("loading");return d(),g(u,S({class:e.prefixCls,onClose:e.onClose},e.getBindValues),L({default:T((()=>[v(M(i,{style:e.getScrollContentStyle,"loading-tip":e.loadingText||e.t("common.loadingText")},{default:T((()=>[O(e.$slots,"default")])),_:3},8,["style","loading-tip"]),[[E,e.getLoading]]),M(r,S(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),L({_:2},[U(Object.keys(e.$slots),(t=>({name:t,fn:T((n=>[O(e.$slots,t,n)]))})))]),1040,["onClose","onOk","height"])])),_:2},[e.$slots.title?{name:"title",fn:T((()=>[O(e.$slots,"title")]))}:{name:"title",fn:T((()=>[M(s,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:T((()=>[O(e.$slots,"titleToolbar")])),_:1},8,["title","isDetail","showDetailBack","onClose"])]))}]),1040,["class","onClose"])};const ye=w({}),He=w({});const he=Ne((()=>Z((()=>import("./TypePicker.165893ce.js")),["/assets/TypePicker.165893ce.js","/assets/TypePicker.3c54ced2.css","/assets/vendor.d660e98f.js","/assets/vendor.859e9874.css","/assets/index.fe7e6ae2.js","/assets/index.37e6979f.css"]))),Le=Ne((()=>Z((()=>import("./ThemeColorPicker.ea718de2.js")),["/assets/ThemeColorPicker.ea718de2.js","/assets/ThemeColorPicker.3e893b67.css","/assets/index.35476bad.css","/assets/index.6d85b653.css","/assets/index.fe7e6ae2.js","/assets/index.37e6979f.css","/assets/vendor.d660e98f.js","/assets/vendor.859e9874.css","/assets/index.4ee0beb4.js","/assets/index.189f624f.css","/assets/createAsyncComponent.d2690156.js","/assets/index.8363e6ca.js","/assets/index.0b21aa7b.css","/assets/useWindowSizeFn.4f1b8c18.js","/assets/usePageContext.a4ed025e.js","/assets/useSortable.f32532ef.js","/assets/lock.6b90cbc9.js"]))),ve=Ne((()=>Z((()=>import("./SettingFooter.ad0aca27.js")),["/assets/SettingFooter.ad0aca27.js","/assets/SettingFooter.92900cc7.css","/assets/index.fe7e6ae2.js","/assets/index.37e6979f.css","/assets/vendor.d660e98f.js","/assets/vendor.859e9874.css"]))),Ue=Ne((()=>Z((()=>import("./SwitchItem.4b6e6a5f.js")),["/assets/SwitchItem.4b6e6a5f.js","/assets/SwitchItem.6322350a.css","/assets/index.5d7f7715.css","/assets/index.35476bad.css","/assets/index.6d85b653.css","/assets/vendor.d660e98f.js","/assets/vendor.859e9874.css","/assets/index.fe7e6ae2.js","/assets/index.37e6979f.css","/assets/index.4ee0beb4.js","/assets/index.189f624f.css","/assets/createAsyncComponent.d2690156.js","/assets/index.8363e6ca.js","/assets/index.0b21aa7b.css","/assets/useWindowSizeFn.4f1b8c18.js","/assets/usePageContext.a4ed025e.js","/assets/useSortable.f32532ef.js","/assets/lock.6b90cbc9.js"]))),we=Ne((()=>Z((()=>import("./SelectItem.108c3cf7.js")),["/assets/SelectItem.108c3cf7.js","/assets/SelectItem.9d41e7fc.css","/assets/index.35476bad.css","/assets/index.6d85b653.css","/assets/vendor.d660e98f.js","/assets/vendor.859e9874.css","/assets/index.fe7e6ae2.js","/assets/index.37e6979f.css","/assets/index.4ee0beb4.js","/assets/index.189f624f.css","/assets/createAsyncComponent.d2690156.js","/assets/index.8363e6ca.js","/assets/index.0b21aa7b.css","/assets/useWindowSizeFn.4f1b8c18.js","/assets/usePageContext.a4ed025e.js","/assets/useSortable.f32532ef.js","/assets/lock.6b90cbc9.js"]))),Be=Ne((()=>Z((()=>import("./InputNumberItem.898156f1.js")),["/assets/InputNumberItem.898156f1.js","/assets/InputNumberItem.581e9e46.css","/assets/index.19838f8b.css","/assets/index.35476bad.css","/assets/index.6d85b653.css","/assets/vendor.d660e98f.js","/assets/vendor.859e9874.css","/assets/index.fe7e6ae2.js","/assets/index.37e6979f.css","/assets/index.4ee0beb4.js","/assets/index.189f624f.css","/assets/createAsyncComponent.d2690156.js","/assets/index.8363e6ca.js","/assets/index.0b21aa7b.css","/assets/useWindowSizeFn.4f1b8c18.js","/assets/usePageContext.a4ed025e.js","/assets/useSortable.f32532ef.js","/assets/lock.6b90cbc9.js"]))),{t:Pe}=G();var Fe,xe;(xe=Fe||(Fe={}))[xe.CHANGE_LAYOUT=0]="CHANGE_LAYOUT",xe[xe.CHANGE_THEME_COLOR=1]="CHANGE_THEME_COLOR",xe[xe.CHANGE_THEME=2]="CHANGE_THEME",xe[xe.MENU_HAS_DRAG=3]="MENU_HAS_DRAG",xe[xe.MENU_ACCORDION=4]="MENU_ACCORDION",xe[xe.MENU_TRIGGER=5]="MENU_TRIGGER",xe[xe.MENU_TOP_ALIGN=6]="MENU_TOP_ALIGN",xe[xe.MENU_COLLAPSED=7]="MENU_COLLAPSED",xe[xe.MENU_COLLAPSED_SHOW_TITLE=8]="MENU_COLLAPSED_SHOW_TITLE",xe[xe.MENU_WIDTH=9]="MENU_WIDTH",xe[xe.MENU_SHOW_SIDEBAR=10]="MENU_SHOW_SIDEBAR",xe[xe.MENU_THEME=11]="MENU_THEME",xe[xe.MENU_SPLIT=12]="MENU_SPLIT",xe[xe.MENU_FIXED=13]="MENU_FIXED",xe[xe.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE=14]="MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE",xe[xe.MENU_TRIGGER_MIX_SIDEBAR=15]="MENU_TRIGGER_MIX_SIDEBAR",xe[xe.MENU_FIXED_MIX_SIDEBAR=16]="MENU_FIXED_MIX_SIDEBAR",xe[xe.HEADER_SHOW=17]="HEADER_SHOW",xe[xe.HEADER_THEME=18]="HEADER_THEME",xe[xe.HEADER_FIXED=19]="HEADER_FIXED",xe[xe.HEADER_SEARCH=20]="HEADER_SEARCH",xe[xe.TABS_SHOW_QUICK=21]="TABS_SHOW_QUICK",xe[xe.TABS_SHOW_REDO=22]="TABS_SHOW_REDO",xe[xe.TABS_SHOW=23]="TABS_SHOW",xe[xe.TABS_SHOW_FOLD=24]="TABS_SHOW_FOLD",xe[xe.LOCK_TIME=25]="LOCK_TIME",xe[xe.FULL_CONTENT=26]="FULL_CONTENT",xe[xe.CONTENT_MODE=27]="CONTENT_MODE",xe[xe.SHOW_BREADCRUMB=28]="SHOW_BREADCRUMB",xe[xe.SHOW_BREADCRUMB_ICON=29]="SHOW_BREADCRUMB_ICON",xe[xe.GRAY_MODE=30]="GRAY_MODE",xe[xe.COLOR_WEAK=31]="COLOR_WEAK",xe[xe.SHOW_LOGO=32]="SHOW_LOGO",xe[xe.SHOW_FOOTER=33]="SHOW_FOOTER",xe[xe.ROUTER_TRANSITION=34]="ROUTER_TRANSITION",xe[xe.OPEN_PROGRESS=35]="OPEN_PROGRESS",xe[xe.OPEN_PAGE_LOADING=36]="OPEN_PAGE_LOADING",xe[xe.OPEN_ROUTE_TRANSITION=37]="OPEN_ROUTE_TRANSITION";const Ge=[{value:q.FULL,label:Pe("layout.setting.contentModeFull")},{value:q.FIXED,label:Pe("layout.setting.contentModeFixed")}],We=[{value:J.CENTER,label:Pe("layout.setting.topMenuAlignRight")},{value:J.START,label:Pe("layout.setting.topMenuAlignLeft")},{value:J.END,label:Pe("layout.setting.topMenuAlignCenter")}],ke=[ee.ZOOM_FADE,ee.FADE,ee.ZOOM_OUT,ee.FADE_SIDE,ee.FADE_BOTTOM,ee.FADE_SCALE].map((e=>({label:e,value:e}))),$e=[{title:Pe("layout.setting.menuTypeSidebar"),mode:te.INLINE,type:ne.SIDEBAR},{title:Pe("layout.setting.menuTypeMix"),mode:te.INLINE,type:ne.MIX},{title:Pe("layout.setting.menuTypeTopMenu"),mode:te.HORIZONTAL,type:ne.TOP_MENU},{title:Pe("layout.setting.menuTypeMixSidebar"),mode:te.INLINE,type:ne.MIX_SIDEBAR}],Xe=[{value:le.HOVER,label:Pe("layout.setting.triggerHover")},{value:le.CLICK,label:Pe("layout.setting.triggerClick")}];function je(e,t){const n=ae(),l=function(e,t){const n=ae(),{getThemeColor:l,getDarkMode:o}=re();switch(e){case Fe.CHANGE_LAYOUT:const{mode:e,type:a,split:s}=t;return{menuSetting:i({mode:e,type:a,collapsed:!1,show:!0,hidden:!1},void 0===s?{split:s}:{})};case Fe.CHANGE_THEME_COLOR:return l.value===t?{}:(de(t),{themeColor:t});case Fe.CHANGE_THEME:return o.value===t||_e(t),{};case Fe.MENU_HAS_DRAG:return{menuSetting:{canDrag:t}};case Fe.MENU_ACCORDION:return{menuSetting:{accordion:t}};case Fe.MENU_TRIGGER:return{menuSetting:{trigger:t}};case Fe.MENU_TOP_ALIGN:return{menuSetting:{topMenuAlign:t}};case Fe.MENU_COLLAPSED:return{menuSetting:{collapsed:t}};case Fe.MENU_WIDTH:return{menuSetting:{menuWidth:t}};case Fe.MENU_SHOW_SIDEBAR:return{menuSetting:{show:t}};case Fe.MENU_COLLAPSED_SHOW_TITLE:return{menuSetting:{collapsedShowTitle:t}};case Fe.MENU_THEME:return ie(t),{menuSetting:{bgColor:t}};case Fe.MENU_SPLIT:return{menuSetting:{split:t}};case Fe.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:return{menuSetting:{closeMixSidebarOnChange:t}};case Fe.MENU_FIXED:return{menuSetting:{fixed:t}};case Fe.MENU_TRIGGER_MIX_SIDEBAR:return{menuSetting:{mixSideTrigger:t}};case Fe.MENU_FIXED_MIX_SIDEBAR:return{menuSetting:{mixSideFixed:t}};case Fe.OPEN_PAGE_LOADING:return n.setPageLoading(!1),{transitionSetting:{openPageLoading:t}};case Fe.ROUTER_TRANSITION:return{transitionSetting:{basicTransition:t}};case Fe.OPEN_ROUTE_TRANSITION:return{transitionSetting:{enable:t}};case Fe.OPEN_PROGRESS:return{transitionSetting:{openNProgress:t}};case Fe.LOCK_TIME:return{lockTime:t};case Fe.FULL_CONTENT:return{fullContent:t};case Fe.CONTENT_MODE:return{contentMode:t};case Fe.SHOW_BREADCRUMB:return{showBreadCrumb:t};case Fe.SHOW_BREADCRUMB_ICON:return{showBreadCrumbIcon:t};case Fe.GRAY_MODE:return Ee(t),{grayMode:t};case Fe.SHOW_FOOTER:return{showFooter:t};case Fe.COLOR_WEAK:return ue(t),{colorWeak:t};case Fe.SHOW_LOGO:return{showLogo:t};case Fe.TABS_SHOW_QUICK:return{multiTabsSetting:{showQuick:t}};case Fe.TABS_SHOW:return{multiTabsSetting:{show:t}};case Fe.TABS_SHOW_REDO:return{multiTabsSetting:{showRedo:t}};case Fe.TABS_SHOW_FOLD:return{multiTabsSetting:{showFold:t}};case Fe.HEADER_THEME:return se(t),{headerSetting:{bgColor:t}};case Fe.HEADER_SEARCH:return{headerSetting:{showSearch:t}};case Fe.HEADER_FIXED:return{headerSetting:{fixed:t}};case Fe.HEADER_SHOW:return{headerSetting:{show:t}};default:return{}}}(e,t);n.setProjectConfig(l),e===Fe.CHANGE_THEME&&(se(),ie())}const{t:Ke}=G();var Ve=u({name:"SettingDrawer",setup(e,{attrs:t}){const{getContentMode:n,getShowFooter:l,getShowBreadCrumb:o,getShowBreadCrumbIcon:a,getShowLogo:s,getFullContent:i,getColorWeak:r,getGrayMode:u,getLockTime:_,getShowDarkModeToggle:d,getThemeColor:g}=re(),{getOpenPageLoading:O,getBasicTransition:T,getEnableTransition:p,getOpenNProgress:A}=ge(),{getIsHorizontal:C,getShowMenu:N,getMenuType:D,getTrigger:R,getCollapsedShowTitle:m,getMenuFixed:I,getCollapsed:b,getCanDrag:y,getTopMenuAlign:H,getAccordion:h,getMenuWidth:L,getMenuBgColor:v,getIsTopMenu:U,getSplit:w,getIsMixSidebar:B,getCloseMixSidebarOnChange:P,getMixSideTrigger:G,getMixSideFixed:W}=ce(),{getShowHeader:k,getFixed:$,getHeaderBgColor:X,getShowSearch:j}=Oe(),{getShowMultipleTab:K,getShowQuick:V,getShowRedo:Q,getShowFold:Y}=x(),z=E((()=>f(N)&&!f(C)));function Z(){let e=f(R);const t=(l=f(w),[{value:oe.NONE,label:Pe("layout.setting.menuTriggerNone")},{value:oe.FOOTER,label:Pe("layout.setting.menuTriggerBottom")},...l?[]:[{value:oe.HEADER,label:Pe("layout.setting.menuTriggerTop")}]]);var l;return t.some((t=>t.value===e))||(e=oe.FOOTER),M(c,null,[M(Ue,{title:Ke("layout.setting.splitMenu"),event:Fe.MENU_SPLIT,def:f(w),disabled:!f(z)||f(D)!==ne.MIX},null),M(Ue,{title:Ke("layout.setting.mixSidebarFixed"),event:Fe.MENU_FIXED_MIX_SIDEBAR,def:f(W),disabled:!f(B)},null),M(Ue,{title:Ke("layout.setting.closeMixSidebarOnChange"),event:Fe.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE,def:f(P),disabled:!f(B)},null),M(Ue,{title:Ke("layout.setting.menuCollapse"),event:Fe.MENU_COLLAPSED,def:f(b),disabled:!f(z)},null),M(Ue,{title:Ke("layout.setting.menuDrag"),event:Fe.MENU_HAS_DRAG,def:f(y),disabled:!f(z)},null),M(Ue,{title:Ke("layout.setting.menuSearch"),event:Fe.HEADER_SEARCH,def:f(j),disabled:!f(k)},null),M(Ue,{title:Ke("layout.setting.menuAccordion"),event:Fe.MENU_ACCORDION,def:f(h),disabled:!f(z)},null),M(Ue,{title:Ke("layout.setting.collapseMenuDisplayName"),event:Fe.MENU_COLLAPSED_SHOW_TITLE,def:f(m),disabled:!f(z)||!f(b)||f(B)},null),M(Ue,{title:Ke("layout.setting.fixedHeader"),event:Fe.HEADER_FIXED,def:f($),disabled:!f(k)},null),M(Ue,{title:Ke("layout.setting.fixedSideBar"),event:Fe.MENU_FIXED,def:f(I),disabled:!f(z)||f(B)},null),M(we,{title:Ke("layout.setting.mixSidebarTrigger"),event:Fe.MENU_TRIGGER_MIX_SIDEBAR,def:f(G),options:Xe,disabled:!f(B)},null),M(we,{title:Ke("layout.setting.topMenuLayout"),event:Fe.MENU_TOP_ALIGN,def:f(H),options:We,disabled:!f(k)||f(w)||!f(U)&&!f(w)||f(B)},null),M(we,{title:Ke("layout.setting.menuCollapseButton"),event:Fe.MENU_TRIGGER,def:e,options:t,disabled:!f(z)||f(B)},null),M(we,{title:Ke("layout.setting.contentMode"),event:Fe.CONTENT_MODE,def:f(n),options:Ge},null),M(Be,{title:Ke("layout.setting.autoScreenLock"),min:0,event:Fe.LOCK_TIME,defaultValue:f(_),formatter:e=>0===parseInt(e)?`0(${Ke("layout.setting.notAutoScreenLock")})`:`${e}${Ke("layout.setting.minute")}`},null),M(Be,{title:Ke("layout.setting.expandedMenuWidth"),max:600,min:100,step:10,event:Fe.MENU_WIDTH,disabled:!f(z),defaultValue:f(L),formatter:e=>`${parseInt(e)}px`},null)])}return()=>M(be,S(t,{title:Ke("layout.setting.drawerTitle"),width:330,wrapClassName:"setting-drawer"}),{default:()=>[f(d)&&M(F,null,{default:()=>Ke("layout.setting.darkMode")}),f(d)&&M(Se,{class:"mx-auto"},null),M(F,null,{default:()=>Ke("layout.setting.navMode")}),M(c,null,[M(he,{menuTypeList:$e,handler:e=>{je(Fe.CHANGE_LAYOUT,{mode:e.mode,type:e.type,split:!f(C)&&void 0})},def:f(D)},null)]),M(F,null,{default:()=>Ke("layout.setting.sysTheme")}),M(Le,{colorList:Te,def:f(g),event:Fe.CHANGE_THEME_COLOR},null),M(F,null,{default:()=>Ke("layout.setting.headerTheme")}),M(Le,{colorList:pe,def:f(X),event:Fe.HEADER_THEME},null),M(F,null,{default:()=>Ke("layout.setting.sidebarTheme")}),M(Le,{colorList:Ae,def:f(v),event:Fe.MENU_THEME},null),M(F,null,{default:()=>Ke("layout.setting.interfaceFunction")}),Z(),M(F,null,{default:()=>Ke("layout.setting.interfaceDisplay")}),M(c,null,[M(Ue,{title:Ke("layout.setting.breadcrumb"),event:Fe.SHOW_BREADCRUMB,def:f(o),disabled:!f(k)},null),M(Ue,{title:Ke("layout.setting.breadcrumbIcon"),event:Fe.SHOW_BREADCRUMB_ICON,def:f(a),disabled:!f(k)},null),M(Ue,{title:Ke("layout.setting.tabs"),event:Fe.TABS_SHOW,def:f(K)},null),M(Ue,{title:Ke("layout.setting.tabsRedoBtn"),event:Fe.TABS_SHOW_REDO,def:f(Q),disabled:!f(K)},null),M(Ue,{title:Ke("layout.setting.tabsQuickBtn"),event:Fe.TABS_SHOW_QUICK,def:f(V),disabled:!f(K)},null),M(Ue,{title:Ke("layout.setting.tabsFoldBtn"),event:Fe.TABS_SHOW_FOLD,def:f(Y),disabled:!f(K)},null),M(Ue,{title:Ke("layout.setting.sidebar"),event:Fe.MENU_SHOW_SIDEBAR,def:f(N),disabled:f(C)},null),M(Ue,{title:Ke("layout.setting.header"),event:Fe.HEADER_SHOW,def:f(k)},null),M(Ue,{title:"Logo",event:Fe.SHOW_LOGO,def:f(s),disabled:f(B)},null),M(Ue,{title:Ke("layout.setting.footer"),event:Fe.SHOW_FOOTER,def:f(l)},null),M(Ue,{title:Ke("layout.setting.fullContent"),event:Fe.FULL_CONTENT,def:f(i)},null),M(Ue,{title:Ke("layout.setting.grayMode"),event:Fe.GRAY_MODE,def:f(u)},null),M(Ue,{title:Ke("layout.setting.colorWeak"),event:Fe.COLOR_WEAK,def:f(r)},null)]),M(F,null,{default:()=>Ke("layout.setting.animation")}),M(c,null,[M(Ue,{title:Ke("layout.setting.progress"),event:Fe.OPEN_PROGRESS,def:f(A)},null),M(Ue,{title:Ke("layout.setting.switchLoading"),event:Fe.OPEN_PAGE_LOADING,def:f(O)},null),M(Ue,{title:Ke("layout.setting.switchAnimation"),event:Fe.OPEN_ROUTE_TRANSITION,def:f(p)},null),M(we,{title:Ke("layout.setting.animationType"),event:Fe.ROUTER_TRANSITION,def:f(T),options:ke,disabled:!f(p)},null)]),M(F,null,null),M(ve,null,null)]})}}),Qe=u({name:"SettingButton",components:{SettingDrawer:Ve,Icon:Ce},setup(){const[e,{openDrawer:t}]=function(){const e=R(null),t=R(!1),n=R(""),l=()=>{const t=f(e);return t||z("useDrawer instance is undefined!"),t};return[function(l,o){B((()=>{e.value=null,t.value=null,ye[f(n)]=null})),f(t)&&Y()&&l===f(e)||(n.value=o,e.value=l,t.value=!0,l.emitVisible=(e,t)=>{He[t]=e})},{setDrawerProps:e=>{var t;null==(t=l())||t.setDrawerProps(e)},getVisible:E((()=>He[~~f(n)])),openDrawer:(e=!0,t,o=!0)=>{var a;if(null==(a=l())||a.setDrawerProps({visible:e}),t)return o?(ye[f(n)]=null,void(ye[f(n)]=m(t))):void(P(m(ye[f(n)]),m(t))||(ye[f(n)]=m(t)))}}]}();return{register:e,openDrawer:t}}});Qe.render=function(e,t,n,l,o,a){const s=_("Icon"),i=_("SettingDrawer");return d(),g("div",{onClick:t[1]||(t[1]=(...t)=>e.openDrawer&&e.openDrawer(...t))},[M(s,{icon:"ion:settings-outline"}),M(i,{onRegister:e.register},null,8,["onRegister"])])};var Ye=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Qe});export{je as b,Ye as i};
