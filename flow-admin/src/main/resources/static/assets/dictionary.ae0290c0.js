import{dP as u}from"./index.e61ad282.js";const s=[{title:"\u540D\u79F0",dataIndex:"cname",align:"left"},{title:"\u7F16\u7801",dataIndex:"code",width:120,align:"left"}],n=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u6807\u8BC6"},labelWidth:60,colProps:{span:16}}],i=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"dicTypeId",label:"dicTypeId",required:!1,component:"Input",show:!1,colProps:{span:24}},{field:"cname",label:"\u540D\u79F0",component:"Input",required:!0,rules:[{whitespace:!0,required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp("^.{1,60}$"),type:"string",message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E60\uFF01"}],colProps:{span:24}},{field:"code",label:"\u7F16\u7801",component:"Input",colProps:{span:24}},{label:"\u5907\u6CE8",field:"remark",component:"InputTextArea",colProps:{span:24}}],r=[{title:"\u540D\u79F0",dataIndex:"cname",align:"left"},{title:"\u7F16\u7801",dataIndex:"code",width:120,align:"left"},{title:"\u6392\u5E8F\u7F16\u53F7",dataIndex:"orderNo",width:80,align:"left"}],d=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u6807\u8BC6"},labelWidth:60,colProps:{span:16}}],c=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"mainId",label:"mainId",required:!1,component:"Input",show:!1},{field:"cname",label:"\u540D\u79F0",component:"Input",required:!0,rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:60,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E60\uFF01"}],colProps:{span:24}},{field:"code",label:"\u7F16\u7801",component:"Input",colProps:{span:24}},{field:"orderNo",label:"\u6392\u5E8F\u53F7",required:!1,component:"InputNumber"}],p=e=>{const a=e&&{pageNum:e.pageNum,pageSize:e.pageSize};let t=e||{};t&&(delete t.pageNum,delete t.pageSize);const o={query:a,entity:t};return u.post({url:"/flow/base/dictionary/getPagerModel",params:o})},m=e=>{const a=e&&{pageNum:e.pageNum,pageSize:e.pageSize};let t=e||{};t&&(delete t.pageNum,delete t.pageSize);const o={query:a,entity:t};return u.post({url:"/flow/base/dicItem/getPagerModel",params:o})},f=e=>u.post({url:"/flow/base/dictionary/saveOrUpdate",params:e}),F=e=>u.post({url:"/flow/base/dicItem/saveOrUpdate",params:e}),I=e=>u.post({url:"/flow/base/dictionary/delete/",params:e}),g=e=>u.post({url:"/flow/base/dicItem/delete/",params:e}),y=e=>u.post({url:"/flow/base/dictionary/checkEntityExist",params:e}),E=e=>u.post({url:"/flow/base/dicItem/checkEntityExist",params:e});export{m as a,d as b,E as c,c as d,g as e,i as f,y as g,f as h,r as i,p as j,s as k,n as l,I as m,F as s};
