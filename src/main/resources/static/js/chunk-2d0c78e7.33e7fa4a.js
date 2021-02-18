(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c78e7"],{"50b8":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12,offset:6}},[a("h2",[e._v("在线获取 SharePoint SiteId 小工具")]),a("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form}},[a("el-form-item",{staticClass:"box animate__animated animate__fadeInUp",attrs:{label:"版本"}},[a("el-radio",{attrs:{label:"Standard"},on:{change:e.changeType},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[e._v("国际版")]),a("el-radio",{attrs:{label:"China"},on:{change:e.changeType},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[e._v("世纪互联")])],1),a("el-form-item",{staticClass:"box animate__animated animate__fadeInUp",attrs:{label:"AccessToken",prop:"accessToken"}},[a("el-input",{attrs:{placeholder:"请输入 AccessToken"},model:{value:e.form.accessToken,callback:function(t){e.$set(e.form,"accessToken",t)},expression:"form.accessToken"}}),a("el-link",{directives:[{name:"show",rawName:"v-show",value:"Standard"===e.form.type,expression:"form.type === 'Standard'"}],attrs:{target:"_blank",icon:"el-icon-link",href:e.$http.defaults.baseURL+"/onedrive/authorize"}},[e._v("前往获取令牌 (国际版)")]),a("el-link",{directives:[{name:"show",rawName:"v-show",value:"China"===e.form.type,expression:"form.type === 'China'"}],attrs:{target:"_blank",icon:"el-icon-link",href:e.$http.defaults.baseURL+"/onedrive/china-authorize"}},[e._v("前往获取令牌 (世纪互联)")])],1),a("el-form-item",{staticClass:"box animate__animated animate__fadeInUp",attrs:{label:"SharePoint 域名",prop:"domainPrefix"}},[a("el-input",{attrs:{placeholder:"请输入 SharePoint 域名"},model:{value:e.form.domainPrefix,callback:function(t){e.$set(e.form,"domainPrefix",t)},expression:"form.domainPrefix"}},[a("template",{slot:"append"},[e._v(".sharepoint."+e._s(e.form.domainType))])],2)],1),a("el-form-item",{staticClass:"box animate__animated animate__fadeInUp",attrs:{label:"站点名称",prop:"domainPrefix"}},[a("template",{slot:"label"},[a("span",[e._v("站点名称")]),a("span",{staticClass:"zfile-word-aux"},[e._v("（网址上域名后面的 /sites/xxx 或/teams/xxx）")])]),a("el-input",{attrs:{placeholder:"请输入站点名称"},model:{value:e.form.siteName,callback:function(t){e.$set(e.form,"siteName",t)},expression:"form.siteName"}})],2),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.submitForm("form")}}},[e._v("获取 SiteId")])],1),e.siteId?a("el-form-item",{staticClass:"box animate__animated animate__fadeInUp",attrs:{label:"SiteID"}},[a("el-input",{attrs:{type:"small"},model:{value:e.siteId,callback:function(t){e.siteId=t},expression:"siteId"}},[a("el-tooltip",{staticClass:"item",attrs:{slot:"append",effect:"dark",content:"复制",placement:"bottom"},slot:"append"},[a("el-button",{staticStyle:{"font-size":"20px"},attrs:{type:"small",icon:"el-icon-copy-document"},on:{click:function(t){return e.copyText(e.siteId)}}})],1)],1)],1):e._e()],1)],1)],1)},n=[],i={name:"SharePointSiteId",data:function(){return{form:{type:"Standard",accessToken:"",domainPrefix:"",siteName:"/sites/xxx",domainType:"com"},siteId:"",rules:{accessToken:[{required:!0,message:"AccessToken 不能为空",trigger:"change"}],domainPrefix:[{required:!0,message:"SharePoint 域名不能为空",trigger:"change"}],siteName:[{required:!0,message:"请输入管理员密码",trigger:"change"}]},loading:!1}},watch:{"form.type":function(){this.form.accessToken&&this.getDomainPrefix()},"form.accessToken":function(){this.form.accessToken&&this.getDomainPrefix()}},methods:{getDomainPrefix:function(){var e=this;this.$http.post("/sharepoint/getDomainPrefix",this.form).then((function(t){0===t.data.code&&(e.form.domainPrefix=t.data.data)}))},copyText:function(e){var t=this;this.$copyText(e).then((function(){t.$message.success("复制成功")}),(function(){t.$message.error("复制失败")}))},changeType:function(){"Standard"===this.form.type?this.form.domainType="com":"China"===this.form.type&&(this.form.domainType="cn")},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return t.loading=!1,!1;t.loading=!0,t.$http.post("/sharepoint/getSiteId",t.form).then((function(e){0===e.data.code?t.siteId=e.data.data:t.$message.error("获取失败"),t.loading=!1}))}))}}},s=i,r=a("2877"),l=Object(r["a"])(s,o,n,!1,null,"dfff4432",null);t["default"]=l.exports}}]);