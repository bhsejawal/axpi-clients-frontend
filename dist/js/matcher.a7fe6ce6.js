(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["matcher"],{"07ac":function(e,t,a){var r=a("23e7"),s=a("6f53").values;r({target:"Object",stat:!0},{values:function(e){return s(e)}})},"0b90":function(e,t,a){},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},1485:function(e,t,a){"use strict";a("ddf6")},1944:function(e,t,a){"use strict";a("5889")},"1b47":function(e,t,a){"use strict";a("7ed5")},"2e6b":function(e,t,a){"use strict";a("300a")},"300a":function(e,t,a){},3683:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-popover",{attrs:{placement:"bottomLeft",trigger:"click"}},[a("template",{slot:"title"},[a("div",{staticClass:"filter-title-wrapper"},[a("div",{staticClass:"left"},[a("a-button",{attrs:{size:"small"},on:{click:function(t){return t.preventDefault(),e.clear(t)}}},[e._v("Clear")])],1),a("div",{staticClass:"center"},[e._v(" Filters ")]),a("div",{staticClass:"right"},[a("a-button",{key:e.unsavedReloadKey,attrs:{disabled:!e.hasUnsavedChanges,type:"primary",size:"small"},on:{click:e.save}},[e._v("Save ")])],1)])]),a("template",{slot:"content"},[a("div",{staticClass:"filters-inner"},[a("inline-filter",{attrs:{filters:e.filtersLocal,id:"product_type",label:"Type",type:"categorical",options:e.typeOptions},on:{"filter-updated":e.handleFilterUpdated}})],1)]),a("a-button",{attrs:{icon:"filter"}},[e._v("Filter")])],2)},s=[],n=a("7cf1"),i=a("2ef0"),c={name:"OrdersFilters",props:["filters"],components:{InlineFilter:n["a"]},data:function(){return{filtersLocal:null,hasUnsavedChangesFromEvent:!1,unsavedReloadKey:1,typeOptions:[{value:"ERP",label:"ERP"},{value:"print",label:"Print"},{value:"pos",label:"POS"},{value:"apparel",label:"Apparel"},{value:"merchandise",label:"Merchandise"},{value:"packaging",label:"Packaging"}]}},created:function(){this.filtersLocal=i.cloneDeep(this.filters)},computed:{hasUnsavedChanges:function(){var e=!1,t=i.difference(this.filters.filters_enabled,this.filtersLocal.filters_enabled),a=i.difference(this.filtersLocal.filters_enabled,this.filters.filters_enabled);return i.merge(t,a).length&&(e=!0),this.filters["product_type"]!==this.filtersLocal["product_type"]&&(e=!0),e||this.hasUnsavedChangesFromEvent}},methods:{handleFilterUpdated:function(){this.hasUnsavedChangesFromEvent=!0},incrementUnsavedReloadKey:function(){this.unsavedReloadKey+=1},clear:function(){this.filtersLocal.filters_enabled=[]},save:function(){this.$emit("set-filters",i.cloneDeep(this.filtersLocal)),this.$emit("filter-updated"),this.hasUnsavedChangesFromEvent=!1}}},o=c,d=(a("dd13"),a("2877")),l=Object(d["a"])(o,r,s,!1,null,"e7cf4886",null);t["a"]=l.exports},"36cb":function(e,t,a){"use strict";a("fad3")},"3a0b":function(e,t,a){"use strict";a("5f66")},"466d":function(e,t,a){"use strict";var r=a("d784"),s=a("825a"),n=a("50c4"),i=a("1d80"),c=a("8aa5"),o=a("14c3");r("match",1,(function(e,t,a){return[function(t){var a=i(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,a):new RegExp(t)[e](String(a))},function(e){var r=a(t,e,this);if(r.done)return r.value;var i=s(e),d=String(this);if(!i.global)return o(i,d);var l=i.unicode;i.lastIndex=0;var u,h=[],p=0;while(null!==(u=o(i,d))){var f=String(u[0]);h[p]=f,""===f&&(i.lastIndex=c(d,n(i.lastIndex),l)),p++}return 0===p?null:h}]}))},"498a":function(e,t,a){"use strict";var r=a("23e7"),s=a("58a8").trim,n=a("c8d2");r({target:"String",proto:!0,forced:n("trim")},{trim:function(){return s(this)}})},"4acd":function(e,t,a){"use strict";a("dd92")},5889:function(e,t,a){},"5f66":function(e,t,a){},"654e":function(e,t,a){"use strict";a("a54f")},"672d":function(e,t,a){"use strict";a("9caa")},"6f53":function(e,t,a){var r=a("83ab"),s=a("df75"),n=a("fc6a"),i=a("d1e7").f,c=function(e){return function(t){var a,c=n(t),o=s(c),d=o.length,l=0,u=[];while(d>l)a=o[l++],r&&!i.call(c,a)||u.push(e?[a,c[a]]:c[a]);return u}};e.exports={entries:c(!0),values:c(!1)}},"7cf1":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"filter-wrapper"},[a("div",{staticClass:"filter-header"},[a("a-checkbox",{attrs:{checked:e.isFilterEnabled},on:{change:e.toggleFilterEnabled}},[e._v(" "+e._s(e.label)+" ")])],1),e.isFilterEnabled?a("div",{staticClass:"filter"},["categorical"===e.type?a("a-select",{staticStyle:{width:"100%"},model:{value:e.details,callback:function(t){e.details=t},expression:"details"}},e._l(e.options,(function(t,r){return a("a-select-option",{key:r,attrs:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])})),1):e._e()],1):e._e()])},s=[],n=(a("caad"),a("2532"),a("2ef0")),i={name:"InlineFilter",props:["filters","id","label","type","options"],data:function(){return{details:null,watchingEnabled:!1}},created:function(){var e=this;this.details=this.filters[this.id],this.$nextTick((function(){e.watchingEnabled=!0}))},computed:{isFilterEnabled:function(){return n.includes(this.filters.filters_enabled,this.id)}},methods:{toggleFilterEnabled:function(){this.filters.filters_enabled=n.xor(this.filters.filters_enabled,[this.id]),this.$emit("filter-updated")}},watch:{details:function(e){this.watchingEnabled&&(this.filters[this.id]=e,this.$emit("filter-updated"))}}},c=i,o=(a("654e"),a("2877")),d=Object(o["a"])(c,r,s,!1,null,"3a2d8a40",null);t["a"]=d.exports},"7ed5":function(e,t,a){},"80b9":function(e,t,a){},"841c":function(e,t,a){"use strict";var r=a("d784"),s=a("825a"),n=a("1d80"),i=a("129f"),c=a("14c3");r("search",1,(function(e,t,a){return[function(t){var a=n(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,a):new RegExp(t)[e](String(a))},function(e){var r=a(t,e,this);if(r.done)return r.value;var n=s(e),o=String(this),d=n.lastIndex;i(d,0)||(n.lastIndex=0);var l=c(n,o);return i(n.lastIndex,d)||(n.lastIndex=d),null===l?-1:l.index}]}))},"9caa":function(e,t,a){},a0ed:function(e,t,a){},a54f:function(e,t,a){},ae40a:function(e,t,a){"use strict";a("a0ed")},b979:function(e,t,a){"use strict";a("80b9")},c8d2:function(e,t,a){var r=a("d039"),s=a("5899"),n="​᠎";e.exports=function(e){return r((function(){return!!s[e]()||n[e]()!=n||s[e].name!==e}))}},ce54:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"matcher"},[a("loading-screen",{attrs:{"is-loading":e.isLoadingSuppliers}}),e.order&&"order"===e.type?a("edit-order-modal",{attrs:{suppliers:e.suppliers}}):e._e(),a("a-layout",[a("a-layout",{staticStyle:{padding:"7px 30px"}},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"page-header"},[a("h1",{staticClass:"page-title"},[e._v("Orders")]),a("div",{staticClass:"actions"},["overview"!==e.currentTab?a("a-input-search",{staticStyle:{width:"200px"},attrs:{placeholder:"Search orders"},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}}):e._e(),"all-transactions"===e.currentTab?a("orders-filters",{attrs:{filters:e.filters},on:{"filter-updated":e.handleFilterUpdated,"set-filters":e.setFilters}}):e._e(),"all-transactions"===e.currentTab?a("a-button",{attrs:{icon:"plus",type:"primary",loading:e.isLoading},on:{click:e.createOrder}},[e._v("Add Order ")]):e._e()],1)]),a("a-tabs",{model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},[a("a-tab-pane",{key:"overview",attrs:{tab:"Overview"}},[a("matcher-overview")],1),a("a-tab-pane",{key:"uncategorized",attrs:{tab:"Unmatched Orders"}},[a("unmatched-orders-table",{attrs:{"search-query":e.searchQuery,"reload-key":e.reloadKey}})],1),a("a-tab-pane",{key:"all-transactions",attrs:{tab:"All Orders"}},[a("all-orders-table",{attrs:{"search-query":e.searchQuery,filters:e.filters,"reload-key":e.reloadKey},on:{"edit-order":e.editOrder}})],1)],1)],1)]),a("a-layout-sider",{style:{background:"#f7fafc",borderLeft:"1px solid #e3e8ee"},attrs:{width:"500",theme:"dark","collapsed-width":0,trigger:null,collapsible:""},model:{value:e.shouldHideSidebar,callback:function(t){e.shouldHideSidebar=t},expression:"shouldHideSidebar"}},[a("matcher-sidebar")],1)],1)],1)},s=[],n=a("5530"),i=a("2f62"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("loading-screen",{attrs:{"is-loading":e.isSaving}}),a("a-table",{staticClass:"axpi-table",attrs:{columns:e.columns,"row-key":function(e){return e.id},"data-source":e.dataToShow,pagination:e.pagination,loading:e.loading||e.searchQueryIsDirty},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"cost",fn:function(t){return a("div",{},[e._v(" "+e._s(e.formatCostInPence({cost_currency:"USD",cost:t}))+" ")])}},{key:"actions",fn:function(t,r){return a("div",{staticClass:"table-actions"},[a("a-button",{attrs:{type:"default"},on:{click:function(t){return e.selectErpOrder(r)}}},[e._v("Match")])],1)}},{key:"dropdown",fn:function(t,r){return a("div",{staticClass:"table-actions"},[a("a-dropdown",{attrs:{trigger:["click"]}},[a("a-button",{attrs:{type:"link",icon:"ellipsis"},on:{click:function(e){return e.preventDefault(),function(e){return e.preventDefault()}(e)}}}),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{staticClass:"text-danger",attrs:{href:"#"},on:{click:function(t){return e.archive(r)}}},[e._v("Archive")])])],1)],1)],1)}}])})],1)},o=[],d=(a("4de4"),a("caad"),a("2532"),a("bc3a")),l=a.n(d),u=a("81f6"),h=a("2d20"),p=a("2ef0"),f=[{title:"Name",dataIndex:"product_name",sorter:!0},{title:"Cost",dataIndex:"cost",scopedSlots:{customRender:"cost"},sorter:!0},{title:"PO Number",dataIndex:"reference_number",sorter:!0},{title:"Vendor",dataIndex:"supplier.name",sorter:!0},{title:"Vendor Product ID",dataIndex:"properties.vendor_product_id",sorter:!0},{title:"",scopedSlots:{customRender:"actions"},width:10},{title:"",scopedSlots:{customRender:"dropdown"},width:10}],v={props:["reloadKey","searchQuery"],name:"UnmatchedOrdersTable",mixins:[h["a"]],data:function(){return{data:[],pagination:{},searchQueryIsDirty:!1,loading:!1,columns:f,isSaving:!1,archived:[]}},mounted:function(){var e=this;this.fetch(),u["a"].$on("order-matched",(function(t){var a=t.erp_order_id,r=t.matches;e.data=p.reject(e.data,(function(e){return e["_id"]===a&&r.length>0})),0===e.data.length&&e.fetch()}))},beforeDestroy:function(){u["a"].$off("order-matched")},watch:{reloadKey:function(){},searchQuery:function(){this.searchQueryIsDirty=!0,this.fetch()}},computed:{dataToShow:function(){var e=this;return p.filter(this.data,(function(t){return!e.archived.includes(t["id"])}))}},methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])("matcher",{selectErpOrder:"selectErpOrder"})),{},{archive:function(e){var t=this;t.isSaving=!0,l.a.post(window.API_BASE+"/matcher/archive-order",{order_id:e["id"]}).then((function(){t.archived.push(e["id"]),t.isSaving=!1,t.$message.success("Order archived successfully")})).catch((function(e){console.log(e),t.$message.error("Error archiving order"),t.isSaving=!1}))},handleTableChange:function(e,t,a){var r=Object(n["a"])({},this.pagination);r.current=e.current,this.pagination=r,this.fetch(Object(n["a"])({results_per_page:e.pageSize,page:e.current,sortField:a.field,sortOrder:a.order},t))},determineSearchParams:function(e){var t={results_per_page:10,q:this.searchQuery};return Object(n["a"])(Object(n["a"])({},t),e)},fetch:p.debounce((function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loading=!0,l.a.post(window.API_BASE+"/matcher/get-unmatched-erp-orders",this.determineSearchParams(t)).then((function(t){var a=Object(n["a"])({},e.pagination);a.total=t.data.total,e.loading=!1,e.data=t.data.data,e.pagination=a,e.searchQueryIsDirty=!1})).catch((function(t){console.log(t),e.$message.error("Error loading orders")}))}),500),handleRecordSelected:function(e){console.log("Order selected"),console.log(e)}})},m=v,g=a("2877"),b=Object(g["a"])(m,c,o,!1,null,"586c1cf7",null),_=b.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("loading-screen",{attrs:{"is-loading":e.isSaving}}),a("a-table",{staticClass:"axpi-table",attrs:{columns:e.columns,"row-key":function(e){return e.id},"data-source":e.dataToShow,pagination:e.pagination,loading:e.loading||e.searchQueryIsDirty},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"type",fn:function(t,r){return a("div",{},[e.isErpOrder(r)?a("div",[e._v(" ERP ")]):a("div",[e._v(" "+e._s(e.formatType(t))+" ")])])}},{key:"cost",fn:function(t){return a("div",{},[e._v(" "+e._s(e.formatCostInPence({cost_currency:"USD",cost:t}))+" ")])}},{key:"status",fn:function(t,r){return a("div",{},[e.isErpOrder(r)?a("div",[a("a-badge",{attrs:{count:e.getStatus(r),"number-style":e.getStatusBadgeStyle(r)}})],1):a("div",[a("a-badge",{attrs:{count:e.getHumanReadableStatus(r.status),"number-style":e.getStatusBadgeStyle(r.status)}})],1)])}},{key:"actions",fn:function(t,r){return a("div",{staticClass:"table-actions"},[e.isErpOrder(r)?a("div",[e.hasMatches(r)?e._e():a("a-button",{attrs:{block:"",type:"default"},on:{click:function(t){return e.selectErpOrder(r)}}},[e._v("Match")]),e.hasMatches(r)?a("a-button",{attrs:{block:"",type:"primary"},on:{click:function(t){return e.selectErpOrder(r)}}},[e._v("Edit")]):e._e()],1):a("div",[e.canRequestInformation(r)?a("a-button",{attrs:{block:"",type:"default"},on:{click:function(t){return e.requestInformation(r)}}},[e._v("Request Info ")]):e._e()],1)])}},{key:"dropdown",fn:function(t,r){return a("div",{staticClass:"table-actions"},[a("a-dropdown",{attrs:{trigger:["click"]}},[a("a-button",{attrs:{type:"link",icon:"ellipsis"},on:{click:function(e){return e.preventDefault(),function(e){return e.preventDefault()}(e)}}}),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"#"},on:{click:function(t){return e.$emit("edit-order",r)}}},[e._v("Edit")])]),a("a-menu-item",[a("a",{staticClass:"text-danger",attrs:{href:"#"},on:{click:function(t){return e.archive(r)}}},[e._v("Archive")])])],1)],1)],1)}}])})],1)},S=[],O=(a("d81d"),a("7b84")),w=a("2ef0"),E=[{title:"Name",dataIndex:"product_name",sorter:!0},{title:"Type",dataIndex:"product_type",scopedSlots:{customRender:"type"}},{title:"PO Number",dataIndex:"reference_number",sorter:!0},{title:"Cost",dataIndex:"cost",scopedSlots:{customRender:"cost"},sorter:!0},{title:"Vendor",dataIndex:"supplier.name",sorter:!0},{title:"Status",scopedSlots:{customRender:"status"}},{title:"",scopedSlots:{customRender:"actions"},width:10},{title:"",scopedSlots:{customRender:"dropdown"},width:10}],I={props:["reloadKey","searchQuery","filters"],name:"AllOrdersTable",components:{LoadingScreen:O["default"]},mixins:[h["a"]],data:function(){return{data:[],pagination:{},searchQueryIsDirty:!1,loading:!1,columns:E,isSaving:!1,archived:[]}},mounted:function(){var e=this;this.fetch(),u["a"].$on("order-filter-updated",(function(){e.fetch()})),u["a"].$on("order-matched",(function(t){var a=t.order_id,r=t.matches;e.data=w.map(e.data,(function(e){return e["id"]===a?Object(n["a"])(Object(n["a"])({},e),{},{matches:r}):e}))}))},beforeDestroy:function(){u["a"].$off("order-matched")},watch:{reloadKey:function(){},orderUpdatedReloadKey:function(){this.fetch()},searchQuery:function(){this.searchQueryIsDirty=!0,this.fetch()}},computed:Object(n["a"])(Object(n["a"])({},Object(i["c"])("matcher",{orderUpdatedReloadKey:"orderUpdatedReloadKey"})),{},{dataToShow:function(){var e=this;return w.filter(this.data,(function(t){return!e.archived.includes(t["id"])}))}}),methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])("matcher",{selectErpOrder:"selectErpOrder"})),{},{canRequestInformation:function(e){return 0==e.status||1==e.status},requestInformation:function(e){var t=this;t.isRequestingInformation=!0,l.a.post(window.API_BASE+"/request-information",{ids:[e.id]}).then((function(){t.isRequestingInformation=!1,t.$message.success("Information requested successfully"),t.fetch()})).catch((function(e){console.log(e),t.isRequestingInformation=!1,t.$message.error("Error requesting information")}))},archive:function(e){var t=this;t.isSaving=!0,l.a.post(window.API_BASE+"/matcher/archive-order",{order_id:e["id"]}).then((function(){t.archived.push(e["id"]),t.isSaving=!1,t.$message.success("Order archived successfully")})).catch((function(e){console.log(e),t.$message.error("Error archiving order"),t.isSaving=!1}))},handleTableChange:function(e,t,a){var r=Object(n["a"])({},this.pagination);r.current=e.current,this.pagination=r,this.fetch(Object(n["a"])({results_per_page:e.pageSize,page:e.current,sortField:a.field,sortOrder:a.order},t))},determineSearchParams:function(e){var t=this,a={results_per_page:10,q:this.searchQuery};return this.filters&&this.filters.filters_enabled.length&&(a.filters={},w.each(this.filters.filters_enabled,(function(e){a.filters[e]=t.filters[e]}))),this.$route.query.orderId&&(a["order_id"]=this.$route.query.orderId),Object(n["a"])(Object(n["a"])({},a),e)},fetch:w.debounce((function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loading=!0,l.a.post(window.API_BASE+"/matcher/get-all-erp-orders",this.determineSearchParams(t)).then((function(t){var a=Object(n["a"])({},e.pagination);a.total=t.data.total,e.loading=!1,e.data=t.data.data,e.pagination=a,e.searchQueryIsDirty=!1})).catch((function(t){console.log(t),e.$message.error("Error loading orders")}))}),500),handleRecordSelected:function(e){console.log("Order selected"),console.log(e)},hasMatches:function(e){return!!(e.matches&&e.matches.length>0)},isErpOrder:function(e){return e.imported},getStatus:function(e){return this.hasMatches(e)?"Matched":"Unmatched"},getStatusBadgeStyle:function(e){return this.hasMatches(e)?{backgroundColor:"#46b98e"}:{backgroundColor:"#4dc8f2"}}})},C=I,M=Object(g["a"])(C,y,S,!1,null,"45bbdc6e",null),x=M.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sidebar-wrapper"},[a("div",{staticClass:"top"},[a("a-page-header",{attrs:{title:e.selectedErpOrder["product_name"]},on:{back:e.clear}}),a("a-collapse",{staticStyle:{"margin-bottom":"20px"},model:{value:e.showErpOrderDetails,callback:function(t){e.showErpOrderDetails=t},expression:"showErpOrderDetails"}},[a("a-collapse-panel",{key:"more-details",attrs:{header:"View More Details"}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("p",[a("b",[e._v("Manufacturer: ")]),a("br"),e._v(e._s(e.selectedErpOrder["manufacturer"]?e.selectedErpOrder["manufacturer"]["name"]:"-")+" ")]),a("p",[a("b",[e._v("Vendor: ")]),a("br"),e._v(e._s(e.selectedErpOrder["supplier"]?e.selectedErpOrder["supplier"]["name"]:"-")+" ")]),a("p",[a("b",[e._v("Cost: ")]),a("br"),e._v(e._s(e.formatCostInPence({cost_currency:"USD",cost:e.selectedErpOrder["cost"]}))+" ")])]),a("a-col",{attrs:{span:12}},[a("p",[a("b",[e._v("Manufacturer Part Number: ")]),a("br"),e._v(e._s(e.selectedErpOrder["properties"]["manufacturer_part_number"]?e.selectedErpOrder["properties"]["manufacturer_part_number"]:"-")+" ")]),a("p",[a("b",[e._v("Vendor Product ID: ")]),a("br"),e._v(e._s(e.selectedErpOrder["properties"]["vendor_product_id"]?e.selectedErpOrder["properties"]["vendor_product_id"]:"-")+" ")]),a("p",[a("b",[e._v("PO Number: ")]),a("br"),e._v(e._s(e.selectedErpOrder["reference_number"]?e.selectedErpOrder["reference_number"]:"-")+" ")])])],1)],1)],1),a("a-tabs",{model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},[a("a-tab-pane",{key:"suggested",attrs:{tab:"Suggested Matches"}},[a("suggested-matches")],1),a("a-tab-pane",{key:"manual",attrs:{tab:"Manual Matches"}},[a("search-products",{key:e.sidebarReloadKey})],1)],1)],1),a("div",{staticClass:"bottom"},[a("div",[a("span",[e._v(" "+e._s(e.selectedMatches.length)+" "+e._s(1===e.selectedMatches.length?"match":"matches")+" selected ")]),a("a-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"default"},on:{click:function(t){return t.preventDefault(),e.clear(t)}}},[e._v("Cancel")]),a("a-button",{attrs:{type:"primary"},on:{click:function(t){return t.preventDefault(),e.saveMatches(t)}}},[e._v("Save")])],1)])])},k=[],D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.isLoadingSuggestedMatches?a("div",{staticClass:"loading-screen"},[a("a-spin")],1):e._e(),e.isLoadingSuggestedMatches?e._e():a("div",[0===e.suggestedMatches.length?a("a-alert",{attrs:{type:"error",message:"No suggested matches",banner:""}}):e._e(),e.suggestedMatches.length?a("div",{staticClass:"wrapper"},[a("matches",{attrs:{matches:e.suggestedMatches}})],1):e._e()],1)])},L=[],T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[0===e.allMatches.length?a("a-alert",{attrs:{type:"error",message:"No matches",banner:""}}):e._e(),e.allMatches.length?a("div",{key:e.matchSelectedReloadKey,staticClass:"wrapper matches-list-wrapper"},[a("a-list",{attrs:{"item-layout":"horizontal","data-source":e.allMatches},scopedSlots:e._u([{key:"renderItem",fn:function(e){return a("match-list-item",{attrs:{"list-item":e}})}}],null,!1,4050012207)})],1):e._e()],1)},$=[],F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-list-item",[e.item?[a("toggle-match-selected-button",{attrs:{slot:"actions",match:e.item},slot:"actions"}),a("a-list-item-meta",[a("div",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.item["name"]))]),a("div",{staticClass:"product-description",attrs:{slot:"description"},slot:"description"},[e.showMoreDetails?a("div",[a("b",[e._v("Manufacturer: ")]),e._v(e._s(e.item["manufacturer"])+" "),a("br"),a("b",[e._v("Product Code: ")]),e._v(e._s(e.item["productCode"])+" "),a("br"),a("b",[e._v("Catalog Code: ")]),e._v(e._s(e.item["catalogCode"])+" "),a("br"),a("b",[e._v("Quantity: ")]),e._v(e._s(e.item["quantity"])+" "),a("br"),a("b",[e._v("Country: ")]),e._v(e._s(e.item["country"])+" "),a("br"),a("b",[e._v("Buying Unit: ")]),e._v(e._s(e.item["normalisedQuantity"]&&e.item["normalisedQuantity"]["unit"]?e.item["normalisedQuantity"]["unit"]:"-")+" "),a("br"),a("a",{staticStyle:{"margin-top":"5px"},attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.toggleShowMoreDetails(t)}}},[e._v("View less "),a("a-icon",{style:{fontSize:"10px"},attrs:{type:"up"}})],1)]):a("div",[a("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.toggleShowMoreDetails(t)}}},[e._v("View more "),a("a-icon",{style:{fontSize:"10px"},attrs:{type:"down"}})],1)])]),a("a",{attrs:{slot:"avatar",target:"_blank",href:e.item["URL"]},slot:"avatar"},[a("a-avatar",{attrs:{size:"large",src:e.getImageSrc(e.item)}})],1)])]:[e.isLoadingItem?a("a-spin"):e._e()]],2)},U=[],R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-button",{attrs:{type:e.isMatchSelected?"danger":"default"},on:{click:function(t){return t.preventDefault(),e.toggle(t)}}},[e._v(" "+e._s(e.isMatchSelected?"Unmatch":"Match")+" ")])},Q=[],A=(a("07ac"),a("ac1f"),a("466d"),a("2ef0")),P={name:"ToggleMatchSelectedButton",props:["match"],methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])("matcher",{toggleMatchSelected:"toggleMatchSelected"})),{},{toggle:function(){this.toggleMatchSelected(this.matchId)}}),computed:Object(n["a"])(Object(n["a"])({},Object(i["c"])("matcher",{selectedMatches:"selectedMatches"})),{},{matchId:function(){return"string"===typeof this.match["_id"]?this.match["_id"]:Object.values(this.match["_id"])[0]},isMatchSelected:function(){return A.includes(this.selectedMatches,this.matchId)}})},K=P,q=Object(g["a"])(K,R,Q,!1,null,"2d65452e",null),B=q.exports,N={name:"MatchListItem",props:["listItem"],data:function(){return{showMoreDetails:!1,loadedItem:null,isLoadingItem:!1}},computed:{item:function(){return"product"===this.listItem.type?this.listItem.value:this.loadedItem}},created:function(){console.log(this.listItem),"id"==this.listItem.type&&this.loadItem()},components:{ToggleMatchSelectedButton:B},methods:{getImageSrc:function(e){if(e["imageURLs"]&&e["imageURLs"].length)return e["imageURLs"][0]},toggleShowMoreDetails:function(){this.showMoreDetails=!this.showMoreDetails},loadItem:function(){var e=this,t=this;t.isLoadingItem=!0,l.a.post(window.API_BASE+"/matcher/get-product-by-id",{id:this.listItem.value}).then((function(t){e.isLoadingItem=!1,e.loadedItem=t.data})).catch((function(t){console.log(t),e.$message.error("Error loading item")}))}}},V=N,z=Object(g["a"])(V,F,U,!1,null,"83c001a6",null),H=z.exports,W=a("2ef0"),J={props:["matches","idsOfManualSelections"],name:"Matches",components:{MatchListItem:H},data:function(){return{showMoreDetailsForIds:[]}},methods:{getImageSrc:function(e){if(e["Images"]&&e["Images"].length)return e["Images"][0]},toggleShowMoreDetailsFor:function(e){this.showMoreDetailsForIds=W.xor(this.showMoreDetailsForIds,[e["_id"]])}},computed:Object(n["a"])(Object(n["a"])({},Object(i["c"])("matcher",{matchSelectedReloadKey:"matchSelectedReloadKey"})),{},{allMatches:function(){var e=[];return W.each(this.idsOfManualSelections,(function(t){e.push({type:"id",value:t})})),W.each(this.matches,(function(t){e.push({type:"product",value:t})})),e}})},G=J,X=(a("4acd"),Object(g["a"])(G,T,$,!1,null,"24bfd572",null)),Y=X.exports,Z={name:"SuggestedMatches",components:{Matches:Y},computed:Object(n["a"])({},Object(i["c"])("matcher",{selectedErpOrder:"selectedErpOrder",isLoadingSuggestedMatches:"isLoadingSuggestedMatches",suggestedMatches:"suggestedMatches"})),data:function(){return{showMoreDetailsForIds:[]}},methods:{}},ee=Z,te=(a("1b47"),a("36cb"),Object(g["a"])(ee,D,L,!1,null,"5dad8372",null)),ae=te.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-input-search",{staticStyle:{width:"100%","margin-bottom":"10px"},attrs:{placeholder:"Search products by name, product code or catalog code"},on:{search:e.search},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}}),e.isLoading||e.searchQueryIsDirty?a("div",{staticClass:"loading-screen"},[a("a-spin")],1):e._e(),e.isLoading||e.searchQueryIsDirty?e._e():a("div",[0===e.dataToShow.length&&e.searchQuery.length?a("a-alert",{attrs:{type:"error",message:"No products found",banner:""}}):e._e(),e.dataToShow.length||e.matchesSelectedManually.length?a("div",{staticClass:"wrapper"},[a("matches",{attrs:{matches:e.dataToShow,"ids-of-manual-selections":e.matchesSelectedManually}})],1):e._e()],1)],1)},se=[],ne=(a("841c"),a("498a"),a("2ef0")),ie={name:"SearchOrders",mixins:[h["a"]],data:function(){return{isLoading:!1,searchQueryIsDirty:!1,searchQuery:"",data:[]}},components:{Matches:Y},watch:{searchQuery:function(){this.searchQueryIsDirty=!0,this.search()}},computed:Object(n["a"])(Object(n["a"])({},Object(i["c"])("matcher",{matchesSelectedManually:"matchesSelectedManually"})),{},{dataToShow:function(){var e=this;return ne.filter(this.data,(function(t){return!ne.includes(e.matchesSelectedManually,Object.values(t["_id"])[0])}))}}),methods:{determineSearchParams:function(e){var t={q:this.searchQuery};return Object(n["a"])(Object(n["a"])({},t),e)},search:ne.debounce((function(e){var t=this;if(""==this.searchQuery.trim())return this.isLoading=!1,this.searchQueryIsDirty=!1,this.data=[],!1;this.isLoading=!0,l.a.post(window.API_BASE+"/matcher/search-products",this.determineSearchParams(e)).then((function(e){t.isLoading=!1,t.data=e.data,t.searchQueryIsDirty=!1})).catch((function(e){console.log(e),t.$message.error("Error loading products")}))}),500)}},ce=ie,oe=(a("3a0b"),Object(g["a"])(ce,re,se,!1,null,"41b43432",null)),de=oe.exports,le={name:"MatcherSidebar",mixins:[h["a"]],components:{SuggestedMatches:ae,SearchProducts:de},computed:Object(n["a"])(Object(n["a"])({},Object(i["c"])("matcher",{selectedErpOrder:"selectedErpOrder",selectedMatches:"selectedMatches",sidebarReloadKey:"sidebarReloadKey"})),{},{hasMatches:function(){return this.selectedMatches.length>0}}),methods:Object(n["a"])({clear:function(){this.selectErpOrder(null)}},Object(i["b"])("matcher",{selectErpOrder:"selectErpOrder",saveMatches:"saveMatches"})),data:function(){return{currentTab:"suggested",showErpOrderDetails:!1}},watch:{sidebarReloadKey:function(){this.currentTab="suggested"}}},ue=le,he=(a("ae40a"),Object(g["a"])(ue,j,k,!1,null,"24bad4f5",null)),pe=he.exports,fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.overview?e._e():a("div",[e.isLoading?a("a-spin"):a("h2",[e._v("Not loaded...")])],1),e.overview?a("div",[a("a-row",{staticClass:"header",attrs:{gutter:20}},[a("a-col",{attrs:{span:12}},[a("h2",[e._v("Total Spend")]),a("total-spend",{attrs:{overview:e.overview}})],1),a("a-col",{attrs:{span:12}},[a("h2",[e._v("Total Classified Spend")]),a("total-classified-spend",{attrs:{overview:e.overview}})],1)],1),a("div",{staticClass:"body"},[a("h2",[e._v("Classified Vendor Spend")]),a("a-card",[a("a-row",{attrs:{type:"flex",gutter:20}},[a("a-col",{attrs:{span:20}},[a("classified-vendor-spend",{attrs:{overview:e.overview}})],1),a("a-col",{attrs:{span:4}},[a("div",{staticClass:"sidebar-wrapper"},[a("stats-sidebar",{attrs:{overview:e.overview}})],1)])],1)],1)],1)],1):e._e()])},ve=[],me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",[a("a-card-grid",{staticStyle:{width:"100%"},attrs:{hoverable:!1}},[a("b",{staticClass:"spend-under-management-title"},[e._v("Spend Under Management")]),e._v(" "+e._s(e.formatCost({cost:e.overview["total_spend"]["total"],cost_currency:"USD"}))+" "),a("a-progress",{attrs:{percent:100,"success-percent":e.percentageClassified,"show-info":!1}})],1),a("a-card-grid",{staticStyle:{width:"50%","padding-top":"17px","padding-bottom":"17px"},attrs:{hoverable:!1}},[a("b",{staticClass:"classified-title"},[e._v("CLASSIFIED")]),a("a-statistic",{attrs:{value:e.classifiedSpendFormatted}})],1),a("a-card-grid",{staticStyle:{width:"50%","padding-top":"17px","padding-bottom":"17px"},attrs:{hoverable:!1}},[a("b",{staticClass:"unclassified-title"},[e._v("UNCLASSIFIED")]),a("a-statistic",{attrs:{value:e.unclassifiedSpendFormatted}})],1)],1)},ge=[],be={name:"TotalSpend",props:["overview"],mixins:[h["a"]],computed:{percentageClassified:function(){var e=this.overview["total_spend"]["total"],t=this.overview["total_spend"]["classified"];return t/e*100},classifiedSpendFormatted:function(){var e=this.overview["total_spend"]["classified"];return this.formatCost({cost:e,cost_currency:"USD"})},unclassifiedSpendFormatted:function(){var e=this.overview["total_spend"]["unclassified"];return this.formatCost({cost:e,cost_currency:"USD"})}}},_e=be,ye=(a("2e6b"),Object(g["a"])(_e,me,ge,!1,null,"35d355f4",null)),Se=ye.exports,Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",[a("a-card-grid",{staticStyle:{width:"100%"},attrs:{hoverable:!1}},[a("b",{staticClass:"spend-under-management-title"},[e._v("Matched Spend")]),e._v(" "+e._s(e.formatCost({cost:e.overview["total_classified_spend"]["total"],cost_currency:"USD"}))+" "),a("a-progress",{attrs:{percent:100,"success-percent":e.percentageAutomatic,"show-info":!1}})],1),a("a-card-grid",{staticStyle:{width:"50%","padding-top":"17px","padding-bottom":"17px"},attrs:{hoverable:!1}},[a("b",{staticClass:"classified-title"},[e._v("AUTOMATIC")]),a("a-statistic",{attrs:{value:e.automaticSpendFormatted}})],1),a("a-card-grid",{staticStyle:{width:"50%","padding-top":"17px","padding-bottom":"17px"},attrs:{hoverable:!1}},[a("b",{staticClass:"unclassified-title"},[e._v("MANUAL")]),a("a-statistic",{attrs:{value:e.manualSpendFormatted}})],1)],1)},we=[],Ee={name:"TotalSpend",props:["overview"],mixins:[h["a"]],computed:{percentageAutomatic:function(){var e=this.overview["total_classified_spend"]["total"],t=this.overview["total_classified_spend"]["automatic"];return t/e*100},automaticSpendFormatted:function(){var e=this.overview["total_classified_spend"]["automatic"];return this.formatCost({cost:e,cost_currency:"USD"})},manualSpendFormatted:function(){var e=this.overview["total_classified_spend"]["manual"];return this.formatCost({cost:e,cost_currency:"USD"})}}},Ie=Ee,Ce=(a("1485"),Object(g["a"])(Ie,Oe,we,!1,null,"538fa9d4",null)),Me=Ce.exports,xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-chart",{attrs:{forceFit:!0,renderer:"svg",height:e.height,scale:e.scale,data:e.graphData}},[a("v-tooltip"),a("v-axis"),a("v-legend"),a("v-stack-bar",{attrs:{position:"vendor*spend",color:"type"}})],1)],1)},je=[],ke=a("2ef0"),De={name:"ClassifiedVendorSpend",props:["overview"],mixins:[h["a"]],data:function(){return{height:400}},methods:{formatCostTruncated:function(e){if(e.cost){var t=e.cost_currency?e.cost_currency:"GBP";return new Intl.NumberFormat("en-US",{style:"currency",currency:t,minimumFractionDigits:0,maximumFractionDigits:2}).format(e.cost)}return e.cost}},computed:{graphData:function(){var e=this.overview["vendor_spend"]["spend"],t=[];return ke.each(e,(function(e){t.push({vendor:e["vendor"],type:"Unclassified",spend:e["unmatched"]}),t.push({vendor:e["vendor"],type:"Classified",spend:e["matched"]})})),t},scale:function(){var e=this;return[{dataKey:"vendor",type:"cat"},{dataKey:"spend",formatter:function(t){return t>1e9?e.formatCostTruncated({cost:t/1e9,cost_currency:"USD"})+"B":t>1e6?e.formatCostTruncated({cost:t/1e6,cost_currency:"USD"})+"M":e.formatCost({cost:t,cost_currency:"USD"})}}]}}},Le=De,Te=Object(g["a"])(Le,xe,je,!1,null,"4bd26056",null),$e=Te.exports,Fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},e._l(e.stats,(function(t,r){return a("div",{key:r,staticClass:"stat"},[a("a-statistic",{staticStyle:{"text-align":"right"},attrs:{title:t.title,value:e.overview["sidebar_stats"][t.value]}})],1)})),0)},Ue=[],Re={name:"StatsSidebar",props:["overview"],data:function(){return{stats:[{title:"Vendors",value:"vendors"},{title:"Vendors Managed",value:"vendors_managed"},{title:"Manufacturers",value:"manufacturers"},{title:"Spend Classified",value:"spend_classified"},{title:"Orders Classified",value:"orders_classified"}]}}},Qe=Re,Ae=(a("b979"),Object(g["a"])(Qe,Fe,Ue,!1,null,"145c5b7e",null)),Pe=Ae.exports,Ke={name:"MatcherOverview",components:{ClassifiedVendorSpend:$e,TotalClassifiedSpend:Me,TotalSpend:Se,StatsSidebar:Pe},created:function(){this.fetch()},data:function(){return{overview:null,isLoading:!1}},methods:{fetch:function(){var e=this,t=this;t.isLoading=!0,t.overview=null,l.a.get(window.API_BASE+"/matcher/overview").then((function(e){t.overview=e.data,t.isLoading=!1})).catch((function(a){console.log(a),t.isLoading=!1,e.$message.error("Error loading overview")}))}}},qe=Ke,Be=(a("1944"),Object(g["a"])(qe,fe,ve,!1,null,"22a308ed",null)),Ne=Be.exports,Ve=a("3683"),ze=a("655a"),He={name:"Specifications",computed:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(i["c"])("matcher",{selectedErpOrder:"selectedErpOrder",reloadKey:"reloadKey"})),Object(i["c"])("orderEditor",{order:"order",type:"type",isLoading:"isLoading"})),{},{shouldHideSidebar:function(){return null==this.selectedErpOrder}}),components:{UnmatchedOrdersTable:_,AllOrdersTable:x,MatcherSidebar:pe,MatcherOverview:Ne,OrdersFilters:Ve["a"],EditOrderModal:ze["a"]},data:function(){return{isLoadingSuppliers:!1,suppliers:[],currentTab:"overview",searchQuery:"",filters:{filters_enabled:{}}}},created:function(){this.loadSuppliers(),this.$route.query.orderId&&(this.currentTab="all-transactions")},methods:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(i["b"])("orderEditor",{createOrder:"createOrder",setWizardStage:"setWizardStage",loadOrder:"loadOrder"})),Object(i["b"])("matcher",{selectErpOrder:"selectErpOrder"})),{},{editOrder:function(e){this.setWizardStage(0),this.loadOrder(e.id)},loadSuppliers:function(){var e=this;e.isLoadingSuppliers=!0,l.a.get(window.API_BASE+"/suppliers").then((function(t){e.suppliers=t.data,e.isLoadingSuppliers=!1})).catch((function(t){console.log(t),e.isLoadingSuppliers=!1,e.$message.error("Error loading suppliers")}))},setFilters:function(e){this.filters=e},handleFilterUpdated:function(){u["a"].$emit("order-filter-updated")}})},We=He,Je=(a("672d"),Object(g["a"])(We,r,s,!1,null,"387efd56",null));t["default"]=Je.exports},dd13:function(e,t,a){"use strict";a("0b90")},dd92:function(e,t,a){},ddf6:function(e,t,a){},fad3:function(e,t,a){}}]);
//# sourceMappingURL=matcher.a7fe6ce6.js.map