import{ax as u}from"./index.9eb02b52.js";const l=[{title:"\u540D\u79F0",dataIndex:"cname",align:"left"},{title:"\u7F16\u7801",dataIndex:"code",width:120,align:"left"}],s=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u6807\u8BC6"},labelWidth:60,colProps:{span:16}}],r=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"dicTypeId",label:"dicTypeId",required:!1,component:"Input",show:!1},{field:"cname",label:"\u540D\u79F0",component:"Input",required:!0,rules:[{whitespace:!0,required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp("^.{1,60}$"),type:"string",message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E60\uFF01"}]},{field:"code",label:"\u7F16\u7801",component:"Input"},{label:"\u5907\u6CE8",field:"remark",component:"InputTextArea"}],d=[{title:"\u540D\u79F0",dataIndex:"cname",align:"left"},{title:"\u7F16\u7801",dataIndex:"code",width:120,align:"left"},{title:"\u6392\u5E8F\u7F16\u53F7",dataIndex:"orderNo",width:80,align:"left"}],c=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u6807\u8BC6"},labelWidth:60,colProps:{span:16}}],m=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"mainId",label:"mainId",required:!1,component:"Input",show:!1},{field:"cname",label:"\u540D\u79F0",component:"Input",required:!0,rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:60,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E60\uFF01"}]},{field:"code",label:"\u7F16\u7801",component:"Input"},{field:"orderNo",label:"\u6392\u5E8F\u53F7",required:!1,component:"InputNumber"}];var t;(function(e){e.DictionaryPageList="/flow/base/dictionary/getPagerModel",e.DictionaryItemPageList="/flow/base/dicItem/getPagerModel",e.SaveOrUpdate="/flow/base/dictionary/saveOrUpdate",e.SaveOrUpdateItem="/flow/base/dicItem/saveOrUpdate",e.Delete="/flow/base/dictionary/delete",e.DeleteItem="/flow/base/dicItem/delete",e.CheckEntityExist="/flow/base/dictionary/checkEntityExist",e.CheckDictItemEntityExist="/flow/base/dicItem/checkEntityExist"})(t||(t={}));const p=e=>{const i=e&&{pageNum:e.pageNum,pageSize:e.pageSize};let a=e||{};a&&(delete a.pageNum,delete a.pageSize);const n={query:i,entity:a};return u.post({url:t.DictionaryPageList,params:n})},I=e=>{const i=e&&{pageNum:e.pageNum,pageSize:e.pageSize};let a=e||{};a&&(delete a.pageNum,delete a.pageSize);const n={query:i,entity:a};return u.post({url:t.DictionaryItemPageList,params:n})},f=e=>u.post({url:t.SaveOrUpdate,params:e}),F=e=>u.post({url:t.SaveOrUpdateItem,params:e}),g=e=>u.post({url:t.Delete+"/",params:e}),y=e=>u.post({url:t.DeleteItem+"/",params:e}),E=e=>u.post({url:t.CheckEntityExist,params:e}),D=e=>u.post({url:t.CheckDictItemEntityExist,params:e});export{I as a,c as b,D as c,m as d,y as e,r as f,E as g,f as h,d as i,p as j,l as k,s as l,g as m,F as s};
