import{q as t,b2 as e}from"./vendor.bc3b2d68.js";/* empty css              */import{aZ as a,d as r}from"./index.33a0330f.js";const{t:d}=r();function n(){return[{dataIndex:"type",title:d("sys.errorLog.tableColumnType"),width:80,customRender:({text:r})=>{const d=r===a.VUE?"green":r===a.RESOURCE?"cyan":r===a.PROMISE?"blue":a.AJAX?"red":"purple";return t(e,{color:d},{default:()=>r})}},{dataIndex:"url",title:"URL",width:200},{dataIndex:"time",title:d("sys.errorLog.tableColumnDate"),width:160},{dataIndex:"file",title:d("sys.errorLog.tableColumnFile"),width:200},{dataIndex:"name",title:"Name",width:200},{dataIndex:"message",title:d("sys.errorLog.tableColumnMsg"),width:300},{dataIndex:"stack",title:d("sys.errorLog.tableColumnStackMsg")}]}function o(){return n().map((t=>({field:t.dataIndex,label:t.title})))}export{n as getColumns,o as getDescSchema};
