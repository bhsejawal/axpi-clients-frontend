(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-supplier"],{"0d6c":function(e,t,r){},2059:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("loading-screen",{attrs:{"is-loading":e.isLoading}}),e.supplier?r("a-page-header",{attrs:{title:e.supplier.name},on:{back:e.backToAllSuppliers}}):e._e(),e.supplier?r("div",{staticClass:"page-body"},e._l(e.supplier.factories,(function(e,t){return r("supplier-factory-details",{key:t,attrs:{factory:e}})})),1):e._e()],1)},a=[],i=r("53ca"),n=r("bc3a"),o=r.n(n),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{"margin-bottom":"35px"}},[r("a-descriptions",{attrs:{column:1,title:e.title,bordered:""}},[r("a-descriptions-item",{attrs:{label:"Location"}},[e._l(e.factory.addresses,(function(t,s){return r("div",{key:s},[e._v(" "+e._s(e.formatAddress(t))+" ")])})),0===e.factory.addresses.length?r("div",[e._v(" No address provided ")]):e._e()],2),r("a-descriptions-item",{attrs:{label:"Accreditations"}},[e._l(e.factory.accreditations,(function(t,s){return r("div",{key:s,staticClass:"mb-2"},[e._v(" "+e._s(t.name)+" ("+e._s(t.type)+") ")])})),0===e.factory.accreditations.length?r("div",[e._v(" No accreditations ")]):e._e()],2)],1)],1)},l=[],p=(r("b0c0"),r("c8c8")),d={name:"SupplierFactoryDetails",props:["factory"],mixins:[p["a"]],computed:{title:function(){return"Factory: "+this.factory.name}}},u=d,f=r("2877"),m=Object(f["a"])(u,c,l,!1,null,"2767fb26",null),b=m.exports,v=r("2ef0"),g={name:"Show",components:{SupplierFactoryDetails:b},data:function(){return{supplier:null,isLoading:!1,serverErrors:[]}},created:function(){this.loadSupplier(this.$route.params.id)},methods:{backToAllSuppliers:function(){this.$router.push("/suppliers")},loadSupplier:function(e){var t=this;t.order=null,t.isLoading=!0,o.a.get(window.API_BASE+"/suppliers/"+e).then((function(e){t.isLoading=!1,t.supplier=e.data})).catch((function(e){var r;t.isLoading=!1,t.$message.error("Error loading supplier"),console.log(e),r=e.response&&e.response.data&&"object"===Object(i["a"])(e.response.data)?v.flatten(v.toArray(e.response.data.errors)):["Something went wrong. Please try again."],t.serverErrors=r}))}}},y=g,_=(r("6c8b"),Object(f["a"])(y,s,a,!1,null,"84f81eb6",null));t["default"]=_.exports},"6c8b":function(e,t,r){"use strict";r("0d6c")}}]);
//# sourceMappingURL=view-supplier.a2a64cb5.js.map