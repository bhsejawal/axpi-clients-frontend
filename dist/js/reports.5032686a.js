(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["reports"],{"0c03":function(e,t,a){},ac01:function(e,t,a){},bd86:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"reports"},[a("div",{staticClass:"page-header"},[a("h1",{staticClass:"page-title"},[e._v("API Keys")]),a("div",{staticClass:"actions"},[a("create-api-key-modal",{on:{"api-key-created":e.handleApiKeyCreated}})],1)]),a("api-keys-table",{key:e.updateKey})],1)},n=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("loading-screen",{attrs:{"is-loading":e.isDeleting}}),a("a-table",{staticClass:"axpi-table",attrs:{columns:e.columns,"data-source":e.apiKeys},scopedSlots:e._u([{key:"issued_at",fn:function(t){return a("div",{},[e._v(" "+e._s(e.displayTimestamp(t))+" ")])}},{key:"last_used",fn:function(t){return a("div",{},[e._v(" "+e._s(t?e.displayTimestamp(t):"-")+" ")])}},{key:"actions",fn:function(t,s){return[a("a-dropdown",{attrs:{trigger:["click"]}},[a("a-button",{attrs:{type:"link",icon:"ellipsis"},on:{click:function(e){return e.preventDefault(),function(e){return e.preventDefault()}(e)}}}),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{staticClass:"text-danger",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.revokeKey(s)}}},[e._v("Revoke")])])],1)],1)]}}])})],1)},o=[],r=a("bc3a"),l=a.n(r),c=a("6e12"),u=[{title:"Name",dataIndex:"name"},{title:"Issued At",dataIndex:"created_at",scopedSlots:{customRender:"issued_at"}},{title:"Last Used",dataIndex:"last_used_at",scopedSlots:{customRender:"last_used"}},{title:"Abilities",dataIndex:"abilities"},{title:"",scopedSlots:{customRender:"actions"},width:10}],d={name:"ApiKeysTable",props:[],mixins:[c["a"]],data:function(){return{isLoading:!1,columns:u,apiKeys:[],isDeleting:!1}},created:function(){this.fetch()},methods:{fetch:function(){var e=this;e.isLoading=!0,l.a.get(window.API_COMMON_BASE+"/developers/tokens").then((function(t){e.isLoading=!1,e.apiKeys=t.data})).catch((function(t){e.isLoading=!1,e.$message.error("Error loading API keys"),console.log(t)}))},revokeKey:function(e){var t=this;t.isDeleting=!0,l.a.delete(window.API_COMMON_BASE+"/developers/tokens/"+e.id).then((function(){t.isDeleting=!1,t.$message.success("API key revoked successfully"),t.fetch()})).catch((function(e){t.isDeleting=!1,t.$message.error("Error revoking API keys"),console.log(e)}))}}},p=d,v=a("2877"),m=Object(v["a"])(p,i,o,!1,null,"3d83ee58",null),f=m.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-button",{attrs:{icon:"plus",type:"primary"},on:{click:e.showModal}},[e._v(" Create API Key ")]),a("a-modal",{attrs:{title:"Create API Token",visible:e.visible,"confirm-loading":e.isSaving},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("div",{staticClass:"create-api-key-modal-inner"},[e.token?e._e():a("a-form",{attrs:{layout:"vertical"}},[a("a-form-item",{attrs:{label:"Token Name"}},[a("a-input",{attrs:{size:"large",value:e.name},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1),e.token?a("div",[a("p",[e._v("Your API token is:")]),a("p",[a("b",[e._v(" "+e._s(e.token.plainTextToken)+" ")])]),a("p",[e._v(" Please copy this token now as you will not be able to see it again. ")])]):e._e()],1)])],1)},k=[],g=(a("b0c0"),{data:function(){return{name:"",visible:!1,isSaving:!1,token:null}},methods:{showModal:function(){this.visible=!0,this.token=null},handleOk:function(){var e=this;return this.token?(this.token=null,this.visible=!1,!1):0===this.name.length?(this.$message.info("Please provide a token name"),!1):(this.isSaving=!0,void l.a.post(window.API_COMMON_BASE+"/developers/tokens",{name:this.name}).then((function(t){e.isSaving=!1,e.$message.success("API key created successfully"),e.$emit("api-key-created"),e.name="",e.token=t.data})).catch((function(t){console.log(t),e.$message.error("An error occurred while creating API token"),e.isSaving=!1})))},handleCancel:function(){this.name="",this.visible=!1}}}),y=g,_=(a("e28d"),Object(v["a"])(y,h,k,!1,null,null,null)),b=_.exports,A={name:"Reports",computed:{},components:{ApiKeysTable:f,CreateApiKeyModal:b},data:function(){return{updateKey:1}},methods:{handleApiKeyCreated:function(){this.updateKey+=1}}},C=A,w=Object(v["a"])(C,s,n,!1,null,null,null);t["default"]=w.exports},c11b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"reports"},[a("div",{staticClass:"page-header"},[a("h1",{staticClass:"page-title"},[e._v("Reports")]),a("div",{staticClass:"actions"},[a("a-button",{attrs:{icon:"filter"}},[e._v("Filter")])],1)]),a("reports-grid")],1)},n=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"reports-grid"},[a("a-row",{attrs:{gutter:20}},[a("a-col",{attrs:{span:6}},[a("router-link",{attrs:{to:"/reports/roche"}},[a("a-card",{attrs:{hoverable:""}},[a("img",{attrs:{slot:"cover",alt:"report",src:"/img/reports/overview.png"},slot:"cover"}),a("a-card-meta",{attrs:{title:"Roche POC Report"}},[a("template",{slot:"description"},[e._v(" 05/07/2021 ")])],2)],1)],1)],1)],1)],1)},o=[],r={name:"ReportsGrid"},l=r,c=(a("e7ed"),a("2877")),u=Object(c["a"])(l,i,o,!1,null,null,null),d=u.exports,p={name:"Reports",computed:{},components:{ReportsGrid:d},data:function(){return{}}},v=p,m=Object(c["a"])(v,s,n,!1,null,null,null);t["default"]=m.exports},e28d:function(e,t,a){"use strict";a("0c03")},e7ed:function(e,t,a){"use strict";a("ac01")}}]);
//# sourceMappingURL=reports.5032686a.js.map