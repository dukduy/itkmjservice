(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{8850:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[n("div",{staticClass:"row q-col-gutter-sm q-ma-xs q-mr-sm"},[n("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},[n("q-card",{attrs:{flat:"",bordered:""}},[n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("เพิ่ม/แก้ไข")])]),n("q-separator",{attrs:{inset:""}}),n("q-card-section",[n("q-list",[n("q-item",[n("q-item-section",[n("q-item-label",{staticClass:"q-pb-xs"},[e._v("คีย์")]),n("q-input",{attrs:{dense:"",outlined:"",readonly:!e.modeadd,label:"คีย์"},on:{keypress:function(e){return 65<=e.which&&e.which<=90||e.which>=48&&e.which<=57||e.preventDefault()}},model:{value:e.currentdimensions.Num,callback:function(t){e.$set(e.currentdimensions,"Num",t)},expression:"currentdimensions.Num"}})],1)],1),n("q-item",[n("q-item-section",[n("q-item-label",{staticClass:"q-pb-xs"},[e._v("ชื่อแผนก")]),n("q-input",{attrs:{dense:"",outlined:"",label:"ชื่อแผนก"},model:{value:e.currentdimensions.Description,callback:function(t){e.$set(e.currentdimensions,"Description",t)},expression:"currentdimensions.Description"}})],1)],1),n("q-item",[n("q-item-section",[n("q-item-label",{staticClass:"q-pb-xs"},[e._v("กลุ่มงาน")]),n("q-select",{attrs:{dense:"",outlined:"",label:"กลุ่มงาน",options:e.companygroups,"option-label":"Name","option-value":"Companygroupid","emit-value":"","map-options":"",behavior:"menu"},model:{value:e.currentdimensions.Companygroupid,callback:function(t){e.$set(e.currentdimensions,"Companygroupid",t)},expression:"currentdimensions.Companygroupid"}})],1)],1),n("q-item",[n("q-item-section",[n("q-item-label",{staticClass:"q-pb-xs"},[e._v("ไซต์")]),n("q-select",{attrs:{dense:"",outlined:"",label:"ไซต์",options:e.companyinfoes,"option-label":"Name","option-value":"Dataareaid","emit-value":"","map-options":"",behavior:"menu"},model:{value:e.currentdimensions.Dataareaid,callback:function(t){e.$set(e.currentdimensions,"Dataareaid",t)},expression:"currentdimensions.Dataareaid"}})],1)],1)],1)],1),n("q-card-actions",{staticClass:"q-mr-md",attrs:{align:"right"}},[e.modeadd?n("q-btn",{staticClass:"q-pl-md q-pr-md",attrs:{outline:"",label:"เพิ่ม",color:"primary",disable:!e.currentdimensions.Num||!e.currentdimensions.Description||!e.currentdimensions.Dataareaid},on:{click:function(t){return e.Createdimensions(e.currentdimensions)}}}):n("q-btn",{staticClass:"q-pl-md q-pr-md",attrs:{outline:"",label:"อัพเดท",color:"primary",disable:!e.currentdimensions.Description||!e.currentdimensions.Num||!e.currentdimensions.Dataareaid},on:{click:function(t){return e.Updatedimensions(e.currentdimensions)}}})],1)],1)],1),n("div",{staticClass:"col-lg-8 col-md-8 col-sm-12 col-xs-12"},[n("q-card",{attrs:{flat:"",bordered:""}},[n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("แผนก")])]),n("q-separator",{attrs:{inset:""}}),n("q-card-section",[n("q-table",{attrs:{data:e.alldimensions,flat:"","hide-bottom":"","hide-header":"grid"===e.mode,columns:e.columns,selection:"single",selected:e.selected,"row-key":"Num",filter:e.filter,grid:"grid"==e.mode,pagination:e.pagination},on:{"update:selected":function(t){e.selected=t},"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top-right",fn:function(t){return[n("q-input",{attrs:{borderless:"",dense:"",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!0),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),"list"===e.mode?n("q-btn",{attrs:{flat:"",round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:t.toggleFullscreen}},[n("q-tooltip",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{disable:e.$q.platform.is.mobile}},[e._v(e._s(t.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"))])],1):e._e(),t.inFullscreen?e._e():n("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"grid"===e.mode?"list":"grid_on"},on:{click:function(t){e.mode="grid"===e.mode?"list":"grid",e.separator="grid"===e.mode?"none":"horizontal"}}},[n("q-tooltip",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{disable:e.$q.platform.is.mobile}},[e._v(e._s("grid"===e.mode?"List":"Grid"))])],1)]}},{key:"body-cell-Companygroupid",fn:function(t){return[n("q-td",{attrs:{props:t}},[e._v("\n                "+e._s(e.companygroups.find((function(e){return e.Companygroupid===t.row.Companygroupid})).Name)+"\n              ")])]}},{key:"body-cell-Closed",fn:function(t){return[n("q-td",{attrs:{props:t}},[n("q-btn",{attrs:{round:"",dense:"",size:"xs"},on:{click:function(n){t.row.Closed=t.row.Closed?0:1,e.Updatedimensions(t.row)}}},[n("q-icon",{attrs:{name:t.row.Closed?"clear":"check",color:t.row.Closed?"red":"green"}})],1)],1)]}}])})],1)],1)],1)])])},o=[],a=(n("456d"),n("8a81"),n("d25f"),n("9986"),n("8e6e"),n("9523")),s=n.n(a),r=n("bd4c"),l=n("2f62");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={name:"Dimensions",data:function(){return{modeadd:!0,mode:"list",pagination:{rowsPerPage:0},filter:"",alldimensions:[],selected:[],currentdimensions:{Num:"",Description:"",Companygroupid:"",Closed:0,Dataareaid:"",Modifieddatetime:new Date},columns:[{name:"Num",label:"คีย์",align:"left",field:"Num",sortable:!0},{name:"Description",label:"ชื่อแผนก",align:"left",field:"Description",sortable:!0},{name:"Companygroupid",label:"กลุ่มงาน",align:"left",field:"Companygroupid",sortable:!0},{name:"Closed",label:"ใช้",align:"center",field:"Closed",sortable:!0},{name:"Dataareaid",label:"ไซต์",align:"left",field:"Dataareaid",sortable:!0},{name:"Modifieddatetime",label:"แก้ไขล่าสุด",align:"left",field:"Modifieddatetime",format:function(e){return r["b"].formatDate(e,"YY/MM/DD HH:mm")},sortable:!0}],companygroups:[],companyinfoes:[]}},created:function(){this.LoadData()},methods:c(c({},Object(l["b"])("inventproduct",["getcompanygroups","getcompanyinfoes","getdimensions","createdimensions","updatedimensions"])),{},{LoadData:function(){var e=this;this.$q.loading.show(),this.getcompanygroups().then((function(t){var n=t.data;return e.companygroups=n,e.getcompanyinfoes()})).then((function(t){var n=t.data;return e.companyinfoes=n,e.getdimensions()})).then((function(t){var n=t.status,i=t.data;200===n&&(e.alldimensions=i),e.$q.loading.hide(),e.timer=void 0})).catch((function(t){e.$q.loading.hide(),e.timer=void 0,console.log(t.response),e.$q.notify({icon:"done",color:"red",message:t.response.data.message})}))},Createdimensions:function(e){var t=this;this.$q.loading.show(),this.createdimensions(e).then((function(e){var n=e.data;t.alldimensions.unshift(n),t.selected=[],t.$q.notify("อัพเดทเรียบร้อย"),t.$q.loading.hide(),t.timer=void 0})).catch((function(e){t.$q.loading.hide(),t.timer=void 0,console.log(e.response),t.$q.notify({icon:"done",color:"red",message:e.response.data.message})}))},Updatedimensions:function(e){var t=this;this.$q.loading.show(),this.updatedimensions(e).then((function(){t.$q.notify("อัพเดทเรียบร้อย"),t.$q.loading.hide(),t.timer=void 0})).catch((function(e){t.$q.loading.hide(),t.timer=void 0,console.log(e.response),t.$q.notify({icon:"done",color:"red",message:e.response.data.message})}))}}),watch:{selected:function(e){e.length>0?(this.modeadd=!1,this.currentdimensions=e[0]):(this.modeadd=!0,this.currentdimensions={Num:"",Description:"",Companygroupid:"",Closed:0,Dataareaid:"",Modifieddatetime:new Date})}}},u=m,p=n("2877"),f=n("9989"),g=n("f09f"),b=n("a370"),q=n("eb85"),h=n("1c1c"),v=n("66e5"),y=n("4074"),C=n("0170"),w=n("27f9"),D=n("ddd8"),$=n("4b7e"),k=n("9c40"),_=n("eaac"),x=n("0016"),O=n("05c0"),Q=n("db86"),N=n("7f67"),j=n("eebe"),P=n.n(j),S=Object(p["a"])(u,i,o,!1,null,null,null);t["default"]=S.exports;P()(S,"components",{QPage:f["a"],QCard:g["a"],QCardSection:b["a"],QSeparator:q["a"],QList:h["a"],QItem:v["a"],QItemSection:y["a"],QItemLabel:C["a"],QInput:w["a"],QSelect:D["a"],QCardActions:$["a"],QBtn:k["a"],QTable:_["a"],QIcon:x["a"],QTooltip:O["a"],QTd:Q["a"]}),P()(S,"directives",{ClosePopup:N["a"]})}}]);