(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5fac"],{"YP4+":function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=[{label:"constant.enabled",value:"1"},{label:"constant.disabled",value:"0"}]},ZySA:function(e,t,a){"use strict";var n=a("6ZY3"),l=a.n(n),i=(a("jUE0"),{bind:function(e,t){e.addEventListener("click",function(a){var n=l()({},t.value),i=l()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),r=i.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var s=r.getBoundingClientRect(),o=r.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":((o=document.createElement("span")).className="waves-ripple",o.style.height=o.style.width=Math.max(s.width,s.height)+"px",r.appendChild(o)),i.type){case"center":o.style.top=s.height/2-o.offsetHeight/2+"px",o.style.left=s.width/2-o.offsetWidth/2+"px";break;default:o.style.top=a.pageY-s.top-o.offsetHeight/2-document.body.scrollTop+"px",o.style.left=a.pageX-s.left-o.offsetWidth/2-document.body.scrollLeft+"px"}return o.style.backgroundColor=i.color,o.className="waves-ripple z-active",!1}},!1)}}),r=function(e){e.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(r)),i.install=r;t.a=i},cJY6:function(e,t,a){"use strict";a.r(t);var n=a("6ZY3"),l=a.n(n),i=a("ny1n"),r=a("ZySA"),s=a("YP4+"),o={name:"userList",directives:{waves:r.a},data:function(){var e=this;return{list:null,total:null,listLoading:!0,roles:null,listQuery:{pageNo:1,pageSize:10},status:s.a,temp:{id:"",name:"",remarks:"",email:"",mobile:"",phone:"",loginName:"",role:[]},dialogFormVisible:!1,dialogStatus:"",rules:{loginName:[{required:!0,message:this.$t("user.validation.requiredLoginName"),trigger:"blur"},{validator:function(t,a,n){if(""!==a){var l={loginName:e.temp.loginName,edit:"create"===e.dialogStatus?"false":"true",userId:e.temp.id};Object(i.f)(l).then(function(e){e.data&&n(new Error),n()}).catch(function(e){})}else n()},message:this.$t("user.validation.existsLoginName"),trigger:"blur"}],password:[{required:!0,message:this.$t("user.validation.requiredPassword"),trigger:"blur"}],email:[{required:!0,message:this.$t("user.validation.requiredEmail"),trigger:"blur"}],mobile:[{required:!0,message:this.$t("user.validation.requiredMobile"),trigger:"blur"}],name:[{required:!0,message:this.$t("user.validation.requiredName"),trigger:"blur"}]}}},created:function(){document.title=this.$t("route."+this.$route.meta.title),this.getUserList()},methods:{getUserList:function(){var e=this;this.listLoading=!0,Object(i.o)(this.listQuery).then(function(t){e.list=t.data.users,e.total=t.data.total,setTimeout(function(){e.listLoading=!1},1500)}).catch(function(t){e.listLoading=!1,console.log(t)})},getRoleList:function(){var e=this;Object(i.m)({page:0}).then(function(t){e.roles=t.data.roles,e.roles&&e.roles.forEach(function(e){e.label=e.name,e.value=e.id})}).catch(function(e){console.log(e)})},handleFilter:function(){this.listQuery.pageNo=1,this.getUserList()},handleSizeChange:function(e){this.listQuery.pageSize=e,this.getUserList()},handleCurrentChange:function(e){this.listQuery.pageNo=e,this.getUserList()},resetTemp:function(){this.temp={id:"",loginName:"",remarks:"",name:"",email:"",phone:"",mobile:"",role:[]}},handleCreate:function(){var e=this;this.resetTemp(),this.getRoleList(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},createData:function(){var e=this;this.$refs.dataForm.validate(function(t){t?Object(i.d)(e.temp).then(function(t){e.dialogFormVisible=!1,e.getUserList()}).catch(function(e){console.log("d")}):console.log("1")})},handleUpdate:function(e){var t=this;this.getRoleList();var a=l()({},e),n=[];a.roles&&(n=a.roles.split(",")),this.temp={id:a.id,loginName:a.loginName,remarks:a.remarks,name:a.name,email:a.email,phone:a.phone,mobile:a.mobile,role:n},this.temp.isEditPassword=!1,this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},updateData:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){var a=l()({},e.temp);Object(i.r)(a).then(function(t){e.dialogFormVisible=!1,e.getUserList()}).catch(function(e){console.log(e)})}})},handleDelete:function(e){var t=this,a=this;this.$confirm(this.$t("warning.text"),this.$t("warning.tips"),{confirmButtonText:this.$t("table.confirm"),cancelButtonText:this.$t("table.cancel"),type:"warning"}).then(function(){Object(i.i)(e.id).then(function(e){t.$message({type:"success",message:a.$t("warning.success")}),t.getUserList()}).catch(function(e){console.log(e)})}).catch(function(){t.$message({type:"info",message:a.$t("warning.fault")})})}}},u=a("ZrdR"),c=Object(u.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("user.table.loginName")},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.listQuery.loginName,callback:function(t){e.$set(e.listQuery,"loginName",t)},expression:"listQuery.loginName"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("user.table.mobile")},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.listQuery.mobile,callback:function(t){e.$set(e.listQuery,"mobile",t)},expression:"listQuery.mobile"}}),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},attrs:{placeholder:e.$t("user.table.enable"),clearable:""},on:{change:e.handleFilter},model:{value:e.listQuery.enable,callback:function(t){e.$set(e.listQuery,"enable",t)},expression:"listQuery.enable"}},e._l(e.status,function(t){return a("el-option",{key:t.key,attrs:{label:e.$t(t.label),value:t.value}})})),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("\n      "+e._s(e.$t("table.search"))+"\n    ")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(e._s(e.$t("table.add"))+"\n    ")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"index",label:e.$t("table.id"),width:"50"}}),e._v(" "),a("el-table-column",{attrs:{width:"220px",align:"center",label:e.$t("user.table.loginName")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.loginName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:e.$t("user.table.name")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"200px",align:"center",label:e.$t("user.table.email")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{width:"200px","white-space":"nowrap","text-overflow":"ellipsis",overflow:"hidden"},attrs:{title:t.row.email}},[e._v(e._s(t.row.email))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"150px",align:"center",label:e.$t("user.table.mobile")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.mobile))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"100px",align:"center",label:e.$t("user.table.enable")},scopedSlots:e._u([{key:"default",fn:function(t){return["1"===t.row.enabled?a("span",[e._v(e._s(e.$t("user.enabled")))]):e._e(),e._v(" "),"2"===t.row.enabled?a("span",[e._v(e._s(e.$t("user.disabled")))]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"160px",align:"center",label:e.$t("user.table.createDate")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.$getTime(t.row.createDate)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:e.$t("table.actions"),width:"200","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleUpdate(t.row)}}},[e._v(e._s(e.$t("table.edit")))]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.row)}}},[e._v(e._s(e.$t("table.delete"))+"\n        ")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"","current-page":e.listQuery.pageNo,"page-sizes":[10,20,30,50],"page-size":e.listQuery.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"create"===e.dialogStatus?e.$t("user.create"):e.$t("user.update"),visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"right","label-width":"120px"}},[a("el-form-item",{attrs:{label:e.$t("user.table.loginName"),prop:"loginName"}},[a("el-input",{model:{value:e.temp.loginName,callback:function(t){e.$set(e.temp,"loginName",t)},expression:"temp.loginName"}})],1),e._v(" "),"create"===e.dialogStatus?a("el-form-item",{attrs:{label:e.$t("user.table.password"),prop:"password"}},[a("el-input",{model:{value:e.temp.password,callback:function(t){e.$set(e.temp,"password",t)},expression:"temp.password"}})],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:e.$t("user.table.name"),prop:"name"}},[a("el-input",{model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("user.table.mobile"),prop:"mobile"}},[a("el-input",{model:{value:e.temp.mobile,callback:function(t){e.$set(e.temp,"mobile",t)},expression:"temp.mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("user.table.phone"),prop:"phone"}},[a("el-input",{model:{value:e.temp.phone,callback:function(t){e.$set(e.temp,"phone",t)},expression:"temp.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("user.table.email"),prop:"email"}},[a("el-input",{model:{value:e.temp.email,callback:function(t){e.$set(e.temp,"email",t)},expression:"temp.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("user.table.role"),prop:"role"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",placeholder:"请选择"},model:{value:e.temp.role,callback:function(t){e.$set(e.temp,"role",t)},expression:"temp.role"}},e._l(e.roles,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("user.table.remarks")}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"Please input"},model:{value:e.temp.remarks,callback:function(t){e.$set(e.temp,"remarks",t)},expression:"temp.remarks"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("user.cancel")))]),e._v(" "),"create"==e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("user.confirm")))]):a("el-button",{attrs:{type:"primary"},on:{click:e.updateData}},[e._v(e._s(e.$t("user.confirm")))])],1)],1)],1)},[],!1,null,null,null);c.options.__file="userList.vue";t.default=c.exports},jUE0:function(e,t,a){},ny1n:function(e,t,a){"use strict";a.d(t,"o",function(){return l}),a.d(t,"d",function(){return i}),a.d(t,"r",function(){return r}),a.d(t,"f",function(){return s}),a.d(t,"i",function(){return o}),a.d(t,"m",function(){return u}),a.d(t,"b",function(){return c}),a.d(t,"q",function(){return d}),a.d(t,"h",function(){return m}),a.d(t,"k",function(){return p}),a.d(t,"a",function(){return f}),a.d(t,"p",function(){return h}),a.d(t,"g",function(){return b}),a.d(t,"j",function(){return g}),a.d(t,"l",function(){return v}),a.d(t,"e",function(){return y}),a.d(t,"n",function(){return w}),a.d(t,"c",function(){return _});var n=a("t3Un");function l(e){return Object(n.a)({url:"/users/getUsers",method:"post",data:e})}function i(e){return Object(n.a)({url:"/users/add",method:"post",data:e})}function r(e){return Object(n.a)({url:"/users",method:"put",data:e})}function s(e){return Object(n.a)({url:"/users/checkUser",method:"post",data:e})}function o(e){return Object(n.a)({url:"/users/"+e,method:"delete"})}function u(e){return Object(n.a)({url:"/roles/getRoles",method:"post",data:e})}function c(e){return Object(n.a)({url:"/roles/",method:"post",data:e})}function d(e){return Object(n.a)({url:"/roles/",method:"put",data:e})}function m(e){return Object(n.a)({url:"/roles/"+e,method:"delete"})}function p(e){return Object(n.a)({url:"/menu/tree",method:"post",data:e})}function f(e){return Object(n.a)({url:"/menu",method:"post",data:e})}function h(e){return Object(n.a)({url:"/menu",method:"put",data:e})}function b(e){return Object(n.a)({url:"/menu/"+e,method:"delete"})}function g(e){return Object(n.a)({url:"/menu/isChild/"+e,method:"get"})}function v(e){return Object(n.a)({url:"/roles/menu/"+e,method:"get"})}function y(e,t){return Object(n.a)({url:"/roles/authorization/"+e,method:"post",data:t})}function w(e){return Object(n.a)({url:"/schedule/getSchedules",method:"post",data:e})}function _(e){return Object(n.a)({url:"/schedule/",method:"post",data:e})}}}]);