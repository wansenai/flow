import{a8 as e,X as t}from"./index.f8d8fadd.js";import{f as a,a as n,bi as o,u as s,t as u}from"./vendor.bc3b2d68.js";function r(){const t=e();return{setMultipleTabSetting:function(e){t.setProjectConfig({multiTabsSetting:e})},getShowMultipleTab:a((()=>t.getMultiTabsSetting.show)),getShowQuick:a((()=>t.getMultiTabsSetting.showQuick)),getShowRedo:a((()=>t.getMultiTabsSetting.showRedo)),getShowFold:a((()=>t.getMultiTabsSetting.showFold))}}function i(){const e=n(),{currentRoute:i}=e,{getShowMultipleTab:g}=r(),c=t(),l=a((()=>f(u(e.getRoutes()))||[])),m=a((()=>c.getTabList.reduce(((e,t)=>(t.meta&&Reflect.has(t.meta,"frameSrc")&&e.push(t.name),e)),[])));function f(e){let t=[];for(const a of e){const{meta:{frameSrc:e}={},children:n}=a;e&&t.push(a),n&&n.length&&t.push(...f(n))}return t=o(t,"name"),t}return{hasRenderFrame:function(t){return s(g)?s(m).includes(t):e.currentRoute.value.name===t},getFramePages:l,showIframe:function(e){return e.name===s(i).name},getAllFramePages:f}}export{r as a,i as u};
