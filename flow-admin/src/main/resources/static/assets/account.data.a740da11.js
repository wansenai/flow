import{ae as e,b4 as t}from"./vendor.11d66826.js";/* empty css              */const a=[{title:"头像",dataIndex:"image",width:80,align:"center",slots:{customRender:"imageRender"}},{title:"用户名",dataIndex:"username",width:120,align:"left"},{title:"姓名",dataIndex:"realName",width:120,align:"left"},{title:"工号",dataIndex:"userNo",width:120,align:"left"},{title:"手机",dataIndex:"mobile",width:120,align:"left"},{title:"邮箱",dataIndex:"email",width:120,align:"left"},{title:"性别",dataIndex:"sex",width:50,customRender:({record:a})=>{const l=1==~~a.sex,n=l?"男":"女";return e(t,{color:l?"green":"red"},(()=>n))}},{title:"所属组",dataIndex:"groups",align:"left",customRender:({record:a})=>{const l=a.groups;return l&&l.map((a=>e(t,{color:"green",style:{marginRight:"5px"}},(()=>a.name))))||[]}}],l=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入账号名/姓名/手机"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],n=[{field:"id",label:"ID",component:"Input",show:!1},{field:"username",label:"用户名",component:"Input",required:!0,colProps:{span:16}},{field:"realName",label:"姓名",component:"Input",required:!0,rules:[{required:!0,whitespace:!0,message:"姓名不能为空！"},{max:20,message:"字符长度不能大于20！"}],colProps:{span:16}},{field:"headImg",label:"",component:"Input",slot:"headImg",colProps:{style:"margin: auto;position: absolute;right: -100px;",span:10}},{field:"sex",label:"性别",component:"RadioButtonGroup",defaultValue:1,componentProps:{options:[{label:"男",value:1},{label:"女",value:0}]}},{field:"userNo",label:"工号",component:"Input",required:!0},{label:"手机",field:"mobile",component:"Input",required:!0},{label:"邮箱",field:"email",component:"Input",required:!1}],o=[{field:"id",label:"ID",component:"Input",show:!1},{field:"passwordNew",label:"密码",component:"StrengthMeter",componentProps:{placeholder:"密码"},rules:[{required:!0,whitespace:!0,message:"请输入密码！"},{pattern:new RegExp("[^\\u4e00-\\u9fa5]+"),type:"string",message:"密码不能输入汉字！"},{min:6,max:32,message:"长度必需在6-32之间！"}]},{field:"confirmPassword",label:"确认密码",component:"InputPassword",dynamicRules:({values:e})=>[{required:!0,validator:(t,a)=>a?a!==e.passwordNew?Promise.reject("两次输入的密码不一致!"):Promise.resolve():Promise.reject("确认密码不能为空")},{pattern:new RegExp("[^\\u4e00-\\u9fa5]+"),type:"string",message:"密码不能输入汉字！"},{min:6,max:32,message:"长度必需在6-32之间！"}]}],s=[{field:"id",label:"ID",component:"Input",show:!1},{label:"选择组",field:"groups",slot:"groups",component:"Input",labelWidth:50}];export{n as a,s as b,a as c,o as p,l as s};
