(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e90fd61a"],{"0aac":function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"e",(function(){return s})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return c}));var n=r("b775");function o(e){return Object(n["a"])({url:"/sys/permission",params:e})}function i(e){return Object(n["a"])({url:"/sys/permission",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/sys/permission/".concat(e.id),method:"put",data:e})}function a(e){return Object(n["a"])({url:"/sys/permission/".concat(e),method:"delete"})}function c(e){return Object(n["a"])({url:"/sys/permission/".concat(e)})}},"0ccb":function(e,t,r){var n=r("50c4"),o=r("1148"),i=r("1d80"),s=Math.ceil,a=function(e){return function(t,r,a){var c,l,u=String(i(t)),d=u.length,f=void 0===a?" ":String(a),p=n(r);return p<=d||""==f?u:(c=p-d,l=o.call(f,s(c/f.length)),l.length>c&&(l=l.slice(0,c)),e?u+l:l+u)}};e.exports={start:a(!1),end:a(!0)}},1148:function(e,t,r){"use strict";var n=r("a691"),o=r("1d80");e.exports="".repeat||function(e){var t=String(o(this)),r="",i=n(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(r+=t);return r}},1276:function(e,t,r){"use strict";var n=r("d784"),o=r("44e7"),i=r("825a"),s=r("1d80"),a=r("4840"),c=r("8aa5"),l=r("50c4"),u=r("14c3"),d=r("9263"),f=r("d039"),p=[].push,h=Math.min,g=4294967295,m=!f((function(){return!RegExp(g,"y")}));n("split",2,(function(e,t,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var n=String(s(this)),i=void 0===r?g:r>>>0;if(0===i)return[];if(void 0===e)return[n];if(!o(e))return t.call(n,e,i);var a,c,l,u=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,m=new RegExp(e.source,f+"g");while(a=d.call(m,n)){if(c=m.lastIndex,c>h&&(u.push(n.slice(h,a.index)),a.length>1&&a.index<n.length&&p.apply(u,a.slice(1)),l=a[0].length,h=c,u.length>=i))break;m.lastIndex===a.index&&m.lastIndex++}return h===n.length?!l&&m.test("")||u.push(""):u.push(n.slice(h)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var o=s(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,o,r):n.call(String(o),t,r)},function(e,o){var s=r(n,e,this,o,n!==t);if(s.done)return s.value;var d=i(e),f=String(this),p=a(d,RegExp),b=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),y=new p(m?d:"^(?:"+d.source+")",v),w=void 0===o?g:o>>>0;if(0===w)return[];if(0===f.length)return null===u(y,f)?[f]:[];var x=0,R=0,k=[];while(R<f.length){y.lastIndex=m?R:0;var j,O=u(y,m?f:f.slice(R));if(null===O||(j=h(l(y.lastIndex+(m?0:R)),f.length))===x)R=c(f,R,b);else{if(k.push(f.slice(x,R)),k.length===w)return k;for(var P=1;P<=O.length-1;P++)if(k.push(O[P]),k.length===w)return k;R=x=j}}return k.push(f.slice(x)),k}]}),!m)},"25f0":function(e,t,r){"use strict";var n=r("6eeb"),o=r("825a"),i=r("d039"),s=r("ad6d"),a="toString",c=RegExp.prototype,l=c[a],u=i((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=a;(u||d)&&n(RegExp.prototype,a,(function(){var e=o(this),t=String(e.source),r=e.flags,n=String(void 0===r&&e instanceof RegExp&&!("flags"in c)?s.call(e):r);return"/"+t+"/"+n}),{unsafe:!0})},"4d90":function(e,t,r){"use strict";var n=r("23e7"),o=r("0ccb").start,i=r("9a0c");n({target:"String",proto:!0,forced:i},{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"53ca":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0");function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}},7424:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"setting-container"},[r("div",{staticClass:"app-container"},[r("el-card",[r("el-tabs",[r("el-tab-pane",{attrs:{label:"角色管理"}},[r("el-row",{staticStyle:{padding:"10px 0"}},[e.checkPermission("p-ro-add")?r("el-button",{attrs:{icon:"el-icon-plus",size:"small",type:"primary"},on:{click:function(t){e.show=!0}}},[e._v(" 新增角色 ")]):e._e()],1),r("el-table",{attrs:{data:e.list}},[r("el-table-column",{attrs:{label:"序号",type:"index",width:"120"}}),r("el-table-column",{attrs:{label:"角色名称",prop:"name",width:"240"}}),r("el-table-column",{attrs:{label:"描述",prop:"description"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("el-button",{attrs:{size:"small",type:"success"},on:{click:function(t){return e.openPerDialog(n.id)}}},[e._v(" 分配权限 ")]),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.editRole(n)}}},[e._v(" 编辑 ")]),r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.delRole(n.id)}}},[e._v(" 删除 ")])]}}])})],1),r("el-row",{staticStyle:{height:"60px"},attrs:{type:"flex",justify:"center",align:"middle"}},[r("el-pagination",{attrs:{"current-page":e.query.page,"page-size":e.query.pagesize,total:e.total,layout:"prev,pager,next"},on:{"current-change":e.changePage}})],1)],1),r("el-tab-pane",{attrs:{label:"公司信息"}},[r("h1",[e._v("The Shy")])])],1)],1)],1),r("el-dialog",{attrs:{title:e.roleForm.id?"编辑角色":"新增角色",visible:e.show,width:"40%"},on:{"update:visible":function(t){e.show=t},close:e.close}},[r("el-form",{ref:"roleForm",attrs:{model:e.roleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[r("el-input",{model:{value:e.roleForm.name,callback:function(t){e.$set(e.roleForm,"name",t)},expression:"roleForm.name"}})],1),r("el-form-item",{attrs:{label:"角色描述",prop:"description"}},[r("el-input",{model:{value:e.roleForm.description,callback:function(t){e.$set(e.roleForm,"description",t)},expression:"roleForm.description"}})],1)],1),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.show=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addRoles}},[e._v("确定")])],1)],1),r("AssignPermission",{ref:"Pers",attrs:{"show-role-per":e.showRolePer},on:{"update:showRolePer":function(t){e.showRolePer=t},"update:show-role-per":function(t){e.showRolePer=t}}})],1)},o=[],i=r("1da1"),s=(r("96cf"),r("90e7")),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"分配权限(一级为路由页面查看权限-二级为按钮操作权限)",visible:e.showRolePer},on:{close:e.closeAssignDialog},scopedSlots:e._u([{key:"footer",fn:function(){return[r("el-button",{on:{click:function(t){return e.$emit("update:showRolePer",!1)}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.savePermiss}},[e._v("确定")])]},proxy:!0}])},[r("el-row",[r("el-tree",{ref:"tree",attrs:{data:e.list,"node-key":"id",props:{label:"name"},"show-checkbox":!0,"highlight-current":!0,"check-strictly":!0,"default-expand-all":!0}})],1)],1)},c=[],l=r("0aac"),u=r("ed08"),d={props:{showRolePer:{type:Boolean,default:!1}},data:function(){return{list:[],roleDetail:[],roleId:""}},created:function(){this.getPermissionList()},methods:{closeAssignDialog:function(){this.$emit("update:showRolePer",!1),this.roleDetail=[]},getPermissionList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["d"])();case 2:r=t.sent,e.list=Object(u["c"])(r);case 4:case"end":return t.stop()}}),t)})))()},getPerDetail:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(s["d"])(e);case 2:n=r.sent,console.log("当前角色的详情",n),t.$refs.tree.setCheckedKeys(n.permIds),t.roleId=e;case 6:case"end":return r.stop()}}),r)})))()},savePermiss:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["b"])({id:e.roleId,permIds:e.$refs.tree.getCheckedKeys()});case 2:e.$message.success("分配成功"),e.$emit("update:showRolePer",!1);case 4:case"end":return t.stop()}}),t)})))()}}},f=d,p=r("2877"),h=Object(p["a"])(f,a,c,!1,null,"39fdc72a",null),g=h.exports,m={components:{AssignPermission:g},data:function(){return{list:[],query:{page:1,pagesize:10},total:0,show:!1,showRolePer:!1,roleForm:{name:"",description:""},rules:{name:[{required:!0,message:"角色名称不能为空",trigger:"blur"}],description:[{required:!0,message:"角色描述不能为空",trigger:"blur"}]}}},created:function(){this.getRoleList()},methods:{openPerDialog:function(e){console.log("当前点击的角色",e),this.showRolePer=!0,this.$refs.Pers.getPerDetail(e)},getRoleList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["e"])(e.query);case 2:r=t.sent,n=r.total,o=r.rows,e.total=n,e.list=o;case 7:case"end":return t.stop()}}),t)})))()},changePage:function(e){this.query.page=e,this.getRoleList()},delRole:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$confirm("确认删除吗？");case 3:return r.next=5,Object(s["c"])(e);case 5:t.query.page=1,t.getRoleList(),t.$message.success("删除成功"),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log("点击取消");case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},addRoles:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$refs.roleForm.validate();case 3:if(!e.roleForm.id){t.next=8;break}return t.next=6,Object(s["f"])(e.roleForm);case 6:t.next=10;break;case 8:return t.next=10,Object(s["a"])(e.roleForm);case 10:e.query.page=1,e.getRoleList(),e.show=!1,e.$message.success("操作成功"),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](0),console.dir(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))()},close:function(){console.log("弹层关闭"),this.$refs.roleForm.resetFields(),this.roleForm={name:"",description:""}},editRole:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("当前编辑的角色数据：",e),r.next=3,Object(s["d"])(e.id);case 3:n=r.sent,t.roleForm=n,t.show=!0;case 6:case"end":return r.stop()}}),r)})))()}}},b=m,v=Object(p["a"])(b,n,o,!1,null,"61f57f59",null);t["default"]=v.exports},"90e7":function(e,t,r){"use strict";r.d(t,"e",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return s})),r.d(t,"d",(function(){return a})),r.d(t,"f",(function(){return c})),r.d(t,"b",(function(){return l}));var n=r("b775");function o(e){return Object(n["a"])({url:"/sys/role",params:e})}function i(e){return Object(n["a"])({url:"/sys/role/".concat(e),method:"delete"})}function s(e){return Object(n["a"])({url:"/sys/role",data:e,method:"post"})}function a(e){return Object(n["a"])({url:"/sys/role/".concat(e)})}function c(e){return Object(n["a"])({url:"/sys/role/".concat(e.id),data:e,method:"put"})}function l(e){return Object(n["a"])({url:"/sys/role/assignPrem",method:"put",data:e})}},"9a0c":function(e,t,r){var n=r("342f");e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},ed08:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return s}));var n=r("53ca");r("ac1f"),r("00b4"),r("d3b7"),r("25f0"),r("5319"),r("4d90"),r("1276"),r("159b");function o(e,t){if(0===arguments.length||!e)return null;var r,o=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(n["a"])(e)?r=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),r=new Date(e));var i={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()},s=o.replace(/{([ymdhisa])+}/g,(function(e,t){var r=i[t];return"a"===t?["日","一","二","三","四","五","六"][r]:r.toString().padStart(2,"0")}));return s}function i(e){var t=[],r={};return e.forEach((function(e){r[e.id]=e})),e.forEach((function(e){if("-1"!==e.id){var n=r[e.pid];n?(n.children||(n.children=[]),n.children.push(e)):t.push(e)}})),t}function s(e,t){var r=new Date(24*(e-1)*36e5+1);r.setYear(r.getFullYear()-70);var n=r.getFullYear()+"",o=r.getMonth()+1+"",i=r.getDate()+"";return t&&1===t.length?n+t+o+t+i:n+(o<10?"0"+o:o)+(i<10?"0"+i:i)}}}]);