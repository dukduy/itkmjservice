(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"86ff":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("div",{staticClass:"row q-col-gutter-sm q-ma-xs q-mr-sm"},[a("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[a("q-card",{attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("เพิ่ม/แก้ไข")])]),a("q-separator",{attrs:{inset:""}}),a("q-card-section",[a("q-list",[a("q-item",[a("q-item-section",[a("q-item-label",{staticClass:"q-pb-xs"},[e._v("คีย์")]),a("q-input",{attrs:{dense:"",outlined:"",readonly:"",label:"คีย์"},model:{value:e.currentcartype.Cartypeid,callback:function(t){e.$set(e.currentcartype,"Cartypeid",e._n(t))},expression:"currentcartype.Cartypeid"}})],1)],1),a("q-item",[a("q-item-section",[a("q-item-label",{staticClass:"q-pb-xs"},[e._v("ชื่อ")]),a("q-input",{attrs:{dense:"",outlined:"",label:"ชื่อ"},model:{value:e.currentcartype.Name,callback:function(t){e.$set(e.currentcartype,"Name",t)},expression:"currentcartype.Name"}})],1)],1),a("q-item",[a("q-item-section",[a("q-item-label",{staticClass:"q-pb-xs"},[e._v("อัตราค่าคอมฯ")]),a("q-input",{attrs:{dense:"",outlined:"",label:"อัตราค่าคอมฯ"},model:{value:e.currentcartype.Commissionrate,callback:function(t){e.$set(e.currentcartype,"Commissionrate",e._n(t))},expression:"currentcartype.Commissionrate"}})],1)],1)],1)],1),a("q-card-actions",{staticClass:"q-mr-md",attrs:{align:"right"}},[e.modeadd?a("q-btn",{staticClass:"q-pl-md q-pr-md",attrs:{outline:"",label:"เพิ่ม",color:"primary",disable:!e.currentcartype.Name},on:{click:function(t){return e.Createcartypes(e.currentcartype)}}}):a("q-btn",{staticClass:"q-pl-md q-pr-md",attrs:{outline:"",label:"อัพเดท",color:"primary",disable:!e.currentcartype.Name},on:{click:function(t){return e.Updatecartypes(e.currentcartype)}}})],1)],1)],1),a("div",{staticClass:"col-lg-8 col-md-8 col-sm-12 col-xs-12"},[a("q-card",{attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("เรท-สัญชาติ")])]),a("q-separator",{attrs:{inset:""}}),a("q-card-section",[a("q-table",{attrs:{data:e.allcartypes,flat:"","hide-bottom":"","hide-header":"grid"===e.mode,columns:e.columns,selection:"single",selected:e.selected,"row-key":"Cartypeid",filter:e.filter,grid:"grid"==e.mode,pagination:e.pagination},on:{"update:selected":function(t){e.selected=t},"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top-right",fn:function(t){return[a("q-input",{attrs:{borderless:"",dense:"",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!0),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),"list"===e.mode?a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:t.toggleFullscreen}},[a("q-tooltip",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{disable:e.$q.platform.is.mobile}},[e._v(e._s(t.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"))])],1):e._e(),t.inFullscreen?e._e():a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"grid"===e.mode?"list":"grid_on"},on:{click:function(t){e.mode="grid"===e.mode?"list":"grid",e.separator="grid"===e.mode?"none":"horizontal"}}},[a("q-tooltip",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{disable:e.$q.platform.is.mobile}},[e._v(e._s("grid"===e.mode?"List":"Grid"))])],1)]}},{key:"body-cell-Action",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("div",[a("q-btn",{attrs:{dense:"",flat:"",outline:"",color:"red",icon:"delete"},on:{click:function(a){return e.Deletecartypes(t.row)}}})],1)])]}}])})],1)],1)],1)])])},i=[],n=(a("456d"),a("8a81"),a("d25f"),a("9986"),a("8e6e"),a("9523")),o=a.n(n),s=(a("20d6"),a("2f62"));function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={name:"Cartype",data:function(){return{modeadd:!0,mode:"list",pagination:{rowsPerPage:0},filter:"",allcartypes:[],selected:[],currentcartype:{Cartypeid:0,Name:"",Commissionrate:0,Modefiedby:"",Modefieddatetime:new Date},columns:[{name:"Cartypeid",label:"คีย์",align:"left",field:"Cartypeid",sortable:!0},{name:"Name",label:"ชื่อ",align:"left",field:"Name",sortable:!0},{name:"Commissionrate",label:"ค่าคอมฯ/คัน",align:"left",field:"Commissionrate",sortable:!0},{name:"Action",field:"Action"}]}},created:function(){this.LoadData()},methods:l(l({},Object(s["b"])("retailarea",["getcartypes","createcartypes","updatecartypes","deletecartypes"])),{},{LoadData:function(){var e=this;this.$q.loading.show(),this.getcartypes().then((function(t){var a=t.status,r=t.data;200===a&&(e.allcartypes=r,e.$q.loading.hide(),e.timer=void 0)}))},Createcartypes:function(e){var t=this;this.$q.loading.show(),this.createcartypes(e).then((function(e){e.status;var a=e.data;t.allcartypes.unshift(a),t.selected=[],t.$q.notify("อัพเดทเรียบร้อย"),t.$q.loading.hide(),t.timer=void 0})).catch((function(e){t.$q.loading.hide(),t.timer=void 0,console.log(e.response),t.$q.notify({icon:"done",color:"red",message:e.response.data.message})}))},Updatecartypes:function(e){var t=this;this.$q.loading.show(),this.updatecartypes(e).then((function(){t.$q.notify("อัพเดทเรียบร้อย"),t.$q.loading.hide(),t.timer=void 0})).catch((function(e){t.$q.loading.hide(),t.timer=void 0,console.log(e.response),t.$q.notify({icon:"done",color:"red",message:e.response.data.message})}))},Deletecartypes:function(e){var t=this;this.$q.loading.show(),this.deletecartypes(e).then((function(e){var a=e.data;t.allcartypes.splice(t.allcartypes.findIndex((function(e){return e.Cartypeid===a.Cartypeid})),1),t.selected=[],t.$q.notify("อัพเดทเรียบร้อย"),t.$q.loading.hide(),t.timer=void 0})).catch((function(e){t.$q.loading.hide(),t.timer=void 0,console.log(e.response),t.$q.notify({icon:"done",color:"red",message:e.response.data.message})}))}}),watch:{selected:function(e){e.length>0?(this.modeadd=!1,this.currentcartype=e[0]):(this.modeadd=!0,this.currentcartype={Cartypeid:0,Name:"",Commissionrate:0,Modefiedby:"",Modefieddatetime:new Date})}}},p=d,u=a("2877"),m=a("9989"),f=a("f09f"),y=a("a370"),b=a("eb85"),q=a("1c1c"),g=a("66e5"),h=a("4074"),v=a("0170"),C=a("27f9"),w=a("4b7e"),$=a("9c40"),O=a("eaac"),_=a("0016"),x=a("05c0"),k=a("db86"),Q=a("7f67"),j=a("eebe"),P=a.n(j),N=Object(u["a"])(p,r,i,!1,null,null,null);t["default"]=N.exports;P()(N,"components",{QPage:m["a"],QCard:f["a"],QCardSection:y["a"],QSeparator:b["a"],QList:q["a"],QItem:g["a"],QItemSection:h["a"],QItemLabel:v["a"],QInput:C["a"],QCardActions:w["a"],QBtn:$["a"],QTable:O["a"],QIcon:_["a"],QTooltip:x["a"],QTd:k["a"]}),P()(N,"directives",{ClosePopup:Q["a"]})}}]);