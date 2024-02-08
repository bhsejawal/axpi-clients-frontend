(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["account"],{"385b":function(a,e,s){},"77be":function(a,e,s){"use strict";s.r(e);var r=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"account"},[a._m(0),s("a-descriptions",{attrs:{column:1,bordered:""}},[s("a-descriptions-item",{attrs:{label:"Name"}},[a._v(" "+a._s(a.user.name)+" ")]),s("a-descriptions-item",{attrs:{label:"Email"}},[s("span",{staticClass:"margin-right"},[a._v(a._s(a.user.email))])]),s("a-descriptions-item",{attrs:{label:"Actions"}},[s("a-button",{staticClass:"margin-right",attrs:{type:"primary"},on:{click:a.openChangeEmailModal}},[a._v("Change Email")]),s("a-modal",{attrs:{title:"Change Email",footer:null},model:{value:a.changeEmailModalVisible,callback:function(e){a.changeEmailModalVisible=e},expression:"changeEmailModalVisible"}},[s("change-email-form",{on:{"email-changed":a.closeChangeEmailModal}})],1),s("a-button",{attrs:{type:"primary"},on:{click:a.openChangePasswordModal}},[a._v("Change Password")]),s("a-modal",{attrs:{title:"Change Password",footer:null},model:{value:a.changePasswordModalVisible,callback:function(e){a.changePasswordModalVisible=e},expression:"changePasswordModalVisible"}},[s("change-password-form",{on:{"password-changed":a.closeChangePasswordModal}})],1)],1)],1)],1)},n=[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"page-header"},[s("h1",{staticClass:"page-title"},[a._v("Manage Account")])])}],t=s("5530"),i=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("a-form",{attrs:{layout:"vertical"}},[s("errors",{attrs:{"error-list":a.serverErrors}}),s("loading-screen",{attrs:{"is-loading":a.isSaving}}),s("a-form-item",{attrs:{label:"Current Password"}},[s("a-input",{attrs:{size:"large",type:"password"},model:{value:a.currentPassword,callback:function(e){a.currentPassword=e},expression:"currentPassword"}})],1),s("a-form-item",{attrs:{label:"New Password"}},[s("a-input",{attrs:{size:"large",type:"password"},model:{value:a.newPassword,callback:function(e){a.newPassword=e},expression:"newPassword"}})],1),s("a-form-item",{attrs:{label:"Confirm New Password"}},[s("a-input",{attrs:{size:"large",type:"password"},model:{value:a.newPasswordConfirmation,callback:function(e){a.newPasswordConfirmation=e},expression:"newPasswordConfirmation"}})],1),s("a-button",{attrs:{type:"primary",size:"large"},on:{click:a.resetPassword}},[a._v("Reset Password")])],1)},o=[],l=s("bc3a"),c=s.n(l),m=s("d9a4"),d=s("df21"),u={name:"ChangePasswordForm",mixins:[m["a"]],components:{Errors:d["a"]},data:function(){return{currentPassword:"",newPassword:"",newPasswordConfirmation:"",isSaving:!1,serverErrors:[]}},methods:{validateForm:function(){return this.currentPassword?this.newPassword?this.newPasswordConfirmation?this.newPassword===this.newPasswordConfirmation||(this.$message.error("New password and password confirmation don't match"),!1):(this.$message.error("Please confirm your new password"),!1):(this.$message.error("Please enter a new password"),!1):(this.$message.error("Please enter your current password"),!1)},resetPassword:function(){var a=this,e=this;if(e.serverErrors=[],!1===e.validateForm())return!1;c.a.post(window.API_COMMON_BASE+"/account/change-password",{current_password:e.currentPassword,new_password:e.newPassword,new_password_confirmation:e.newPasswordConfirmation}).then((function(){e.isSaving=!1,a.$message.success("Password changed successfully!"),a.newPassword="",a.newPasswordConfirmation="",a.currentPassword="",a.$emit("password-changed")})).catch((function(a){console.log(a),e.isSaving=!1,e.setErrors(a)})),e.isSaving=!0}}},w=u,h=s("2877"),f=Object(h["a"])(w,i,o,!1,null,"dde3fb66",null),g=f.exports,p=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("a-form",{attrs:{layout:"vertical"}},[s("errors",{attrs:{"error-list":a.serverErrors}}),s("loading-screen",{attrs:{"is-loading":a.isSaving}}),s("a-form-item",{attrs:{label:"Current Email"}},[s("a-input",{attrs:{size:"large",type:"text"},model:{value:a.currentEmail,callback:function(e){a.currentEmail=e},expression:"currentEmail"}})],1),s("a-form-item",{attrs:{label:"New Email"}},[s("a-input",{attrs:{size:"large",type:"text"},model:{value:a.newEmail,callback:function(e){a.newEmail=e},expression:"newEmail"}})],1),s("a-form-item",{attrs:{label:"Confirm New Email"}},[s("a-input",{attrs:{size:"large",type:"text"},model:{value:a.newEmailConfirmation,callback:function(e){a.newEmailConfirmation=e},expression:"newEmailConfirmation"}})],1),s("a-button",{attrs:{type:"primary",size:"large"},on:{click:a.resetEmail}},[a._v("Change Email")])],1)},E=[],P={name:"ChangeEmailForm",mixins:[m["a"]],components:{Errors:d["a"]},data:function(){return{currentEmail:"",newEmail:"",newEmailConfirmation:"",isSaving:!1,serverErrors:[]}},methods:{validateForm:function(){return this.currentEmail?this.newEmail?this.newEmailConfirmation?this.newEmail===this.newEmailConfirmation||(this.$message.error("New email and email confirmation don't match"),!1):(this.$message.error("Please confirm your new email"),!1):(this.$message.error("Please enter a new email"),!1):(this.$message.error("Please enter your current email"),!1)},resetEmail:function(){var a=this,e=this;if(e.serverErrors=[],!1===e.validateForm())return!1;c.a.post(window.API_COMMON_BASE+"/account/change-email",{current_email:e.currentEmail,new_email:e.newEmail,new_email_confirmation:e.newEmailConfirmation}).then((function(){e.isSaving=!1,a.$message.success("Email changed successfully!"),a.newEmail="",a.newEmailConfirmation="",a.currentEmail="",a.$emit("email-changed")})).catch((function(a){console.log(a),e.isSaving=!1,e.setErrors(a)})),e.isSaving=!0}}},b=P,v=Object(h["a"])(b,p,E,!1,null,"0f2ac1f2",null),C=v.exports,_=s("2f62"),M={components:{ChangePasswordForm:g,ChangeEmailForm:C},data:function(){return{changePasswordModalVisible:!1,changeEmailModalVisible:!1}},computed:Object(t["a"])({},Object(_["c"])("auth",{user:"user"})),methods:{openChangePasswordModal:function(){this.changePasswordModalVisible=!0},closeChangePasswordModal:function(){this.changePasswordModalVisible=!1},openChangeEmailModal:function(){this.changeEmailModalVisible=!0},closeChangeEmailModal:function(){this.changeEmailModalVisible=!1}}},y=M,x=(s("f867"),Object(h["a"])(y,r,n,!1,null,"7b198f74",null));e["default"]=x.exports},f867:function(a,e,s){"use strict";s("385b")}}]);
//# sourceMappingURL=account.a9fe08e7.js.map