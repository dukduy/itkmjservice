(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{0:function(t,e,a){t.exports=a("2f39")},"0047":function(t,e,a){},"2f39":function(t,e,a){"use strict";a.r(e);var r=a("c973"),n=a.n(r),o=a("a34a"),i=a.n(o),u=(a("a481"),a("5c7d"),a("573e"),a("7d6e"),a("e54f"),a("985d"),a("0047"),a("b6d8"),a("2b0e")),p=a("1f91"),s=a("42d2"),c=a("b05d"),l=a("714f"),m=a("7f67"),f=a("2a19"),d=a("436b"),h=a("f508");u["a"].use(c["a"],{config:{},lang:p["a"],iconSet:s["a"],directives:{Ripple:l["a"],ClosePopup:m["a"]},plugins:{Notify:f["a"],Dialog:d["a"],Loading:h["a"]}});var g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"q-app"}},[a("router-view")],1)},v=[],b={name:"App"},y=b,S=(a("5c0b"),a("2877")),E=Object(S["a"])(y,g,v,!1,null,null,null),k=E.exports,P=a("2f62"),O=a("0e44"),w=function(){return{mainmenuselected:[],mainmenufavorites:[]}},T={mainmenuselected:function(t){return t.mainmenuselected},mainmenufavorites:function(t){return t.mainmenufavorites}},R=T,K=(a("f751"),a("7514"),a("20d6"),{SET_MAINMENUSELECTED:function(t,e){t.mainmenuselected=Object.assign([],e)},SET_MAINMENUFAVORITES:function(t,e){t.mainmenufavorites.find((function(t){return t.route===e.route}))||t.mainmenufavorites.push(e)},CUT_MAINMENUFAVORITES:function(t,e){var a=t.mainmenufavorites.findIndex((function(t){return t.route===e.route}));t.mainmenufavorites.splice(a,1)}}),N=K,x=a("bc3a"),A=a.n(x),I=function(t){var e={headers:{}};return t&&(e.headers=Object.assign({},e.headers,{Authorization:"bearer ".concat(t.TOKEN)})),A.a.create(e)},U={getcompanyinfoes:function(t){var e=t.rootState;return I(e.auth).get("/inventproductapi/api/Companyinfoes")},updatecompanyinfoes:function(t,e){var a=t.rootState;return I(a.auth).post("/inventproductapi/api/Companyinfoes/update",e)},getcompanygroups:function(t){var e=t.rootState;return I(e.auth).get("/inventproductapi/api/companygroups")},createcompanygroups:function(t,e){var a=t.rootState;return I(a.auth).post("/inventproductapi/api/companygroups",e)},updatecompanygroups:function(t,e){var a=t.rootState;return I(a.auth).post("/inventproductapi/api/companygroups/update",e)},deletecompanygroups:function(t,e){var a=t.rootState;return I(a.auth).post("/inventproductapi/api/companygroups/delete/".concat(e.Companygroupid))},getdimensions:function(t){var e=t.rootState;return I(e.auth).get("/inventproductapi/api/dimensions")},createdimensions:function(t,e){var a=t.rootState;return I(a.auth).post("/inventproductapi/api/dimensions",e)},updatedimensions:function(t,e){var a=t.rootState;return I(a.auth).post("/inventproductapi/api/dimensions/update",e)},getempltablespagination:function(t,e){var a=t.rootState;return I(a.auth).get("/inventproductapi/api/empltables/pagination",{params:e})},getempltablessearch:function(t,e){var a=t.rootState,r=e.query,n=e.data;return I(a.auth).post("/inventproductapi/api/empltables/search",n,{params:r})},createempltables:function(t,e){var a=t.rootState;return I(a.auth).post("/inventproductapi/api/empltables",e)},updateempltables:function(t,e){var a=t.rootState;return I(a.auth).post("/inventproductapi/api/empltables/update",e)},getinventitemgroups:function(t){var e=t.rootState;return I(e.auth).get("/inventproductapi/api/Inventitemgroups")},createinventitemgroups:function(t,e){var a=t.rootState;return I(a.auth).post("/inventproductapi/api/Inventitemgroups",e)},updateinventitemgroups:function(t,e){var a=t.rootState;return I(a.auth).post("/inventproductapi/api/Inventitemgroups/update",e)},getinventbrands:function(t){var e=t.rootState;return I(e.auth).get("/inventproductapi/api/inventbrands")},createinventbrands:function(t,e){var a=t.rootState;return I(a.auth).post("/inventproductapi/api/inventbrands",e)},updateinventbrands:function(t,e){var a=t.rootState;return I(a.auth).post("/inventproductapi/api/inventbrands/update",e)},getinventgroups:function(t){var e=t.rootState;return I(e.auth).get("/inventproductapi/api/inventgroups")},createinventgroups:function(t,e){var a=t.rootState;return I(a.auth).post("/inventproductapi/api/inventgroups",e)},updateinventgroups:function(t,e){var a=t.rootState;return I(a.auth).post("/inventproductapi/api/inventgroups/update",e)}},_=U,F={namespaced:!0,getters:R,mutations:N,actions:_,state:w},G=function(){return{}},L={},C=L,j={},q=j,D=function(t){var e={headers:{}};return t&&(e.headers=Object.assign({},e.headers,{Authorization:"bearer ".concat(t.TOKEN)})),A.a.create(e)},M={getagenttypes:function(t){var e=t.rootState;return D(e.auth).get("/retailareaapi/api/agenttypes")},createagenttypes:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/agenttypes",e)},updateagenttypes:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/agenttypes/update",e)},deleteagenttypes:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/agenttypes/delete/".concat(e.Agenttypeid))},getagentgrouptypes:function(t){var e=t.rootState;return D(e.auth).get("/retailareaapi/api/agentgrouptypes")},createagentgrouptypes:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/agentgrouptypes",e)},updateagentgrouptypes:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/agentgrouptypes/update",e)},deleteagentgrouptypes:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/agentgrouptypes/delete/".concat(e.Agentgrouptypeid))},gettourtypes:function(t){var e=t.rootState;return D(e.auth).get("/retailareaapi/api/tourtypes")},createtourtypes:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/tourtypes",e)},updatetourtypes:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/tourtypes/update",e)},deletetourtypes:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/tourtypes/delete/".concat(e.Tourtypeid))},getcartypes:function(t){var e=t.rootState;return D(e.auth).get("/retailareaapi/api/cartypes")},createcartypes:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/cartypes",e)},updatecartypes:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/cartypes/update",e)},deletecartypes:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/cartypes/delete/".concat(e.Cartypeid))},getratebonus:function(t){var e=t.rootState;return D(e.auth).get("/retailareaapi/api/ratebonus")},createratebonus:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/ratebonus",e)},updateratebonus:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/ratebonus/update",e)},deleteratebonus:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/ratebonus/delete/".concat(e.Ratebonusid))},getcustinvoicemarks:function(t){var e=t.rootState;return D(e.auth).get("/retailareaapi/api/custinvoicemarks")},createcustinvoicemarks:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/custinvoicemarks",e)},updatecustinvoicemarks:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/custinvoicemarks/update",e)},deletecustinvoicemarks:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/custinvoicemarks/delete/".concat(e.Custinvoicemarkid))},getcommissiontypes:function(t){var e=t.rootState;return D(e.auth).get("/retailareaapi/api/commissiontypes")},createcommissiontypes:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/commissiontypes",e)},updatecommissiontypes:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/commissiontypes/update",e)},deletecommissiontypes:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/commissiontypes/delete/".concat(e.Commissiontypeid))},getcommissionsets:function(t){var e=t.rootState;return D(e.auth).get("/retailareaapi/api/commissionsets")},updatecommissionsets:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/commissionsets/update",e)},getagenttables:function(t,e){var a=t.rootState;return D(a.auth).get("/retailareaapi/api/agenttables/".concat(e))},getagenttablespagination:function(t,e){var a=t.rootState;return D(a.auth).get("/retailareaapi/api/agenttables/pagination",{params:e})},getagenttablesbirthday:function(t,e){var a=t.rootState;return D(a.auth).get("/retailareaapi/api/agenttables/birthday",{params:e})},createagenttables:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/agenttables",e)},uploadimageagenttables:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/agenttables/uploadimage",e)},createandconfirmagenttables:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/agenttables/createandconfirm",e)},updateagenttables:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/agenttables/update",e)},deleteagenttables:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/agenttables/delete/".concat(e.Agentid))},confirminfoagenttables:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/agenttables/confirminfo/".concat(e.Agentid))},bonusstartagenttables:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/agenttables/bonusstart/".concat(e.Agentid))},getgroupshoptablespagination:function(t,e){var a=t.rootState;return D(a.auth).get("/retailareaapi/api/groupshoptables/pagination",{params:e})},getgroupshoptables:function(t,e){var a=t.rootState,r=e.Groupshopid;return D(a.auth).get("/retailareaapi/api/groupshoptables/".concat(r))},getgroupshoptablesbyquery:function(t,e){var a=t.rootState;return D(a.auth).get("/retailareaapi/api/groupshoptables/query",{params:e})},getgroupshopcommissionlines:function(t,e){var a=t.rootState,r=e.Paymenttypeid,n=e.Agentid,o=e.query;return D(a.auth).get("/retailareaapi/api/groupshopcommissionlines/".concat(r,"/").concat(n),{params:o})},getgroupshopcommissionlinesbygroupidbyagentid:function(t,e){var a=t.rootState,r=e.Groupshopid,n=e.Agentid;return D(a.auth).get("/retailareaapi/api/groupshopcommissionlines/bygroupshopidbyagentid/".concat(r,"/").concat(n))},getgroupshopcommissionlinesamountbygroupshop:function(t,e){var a=t.rootState,r=e.Groupshopid;return D(a.auth).get("/retailareaapi/api/groupshopcommissionlines/getamountbygroupshop/".concat(r))},creategroupshopcommissionlines:function(t,e){var a=t.rootState,r=e.Groupshopid;return D(a.auth).post("/retailareaapi/api/groupshopcommissionlines/createbygroupshopid/".concat(r))},creategroupshoptables:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/groupshoptables",e)},updategroupshoptables:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/groupshoptables/update",e)},deletegroupshoptables:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/groupshoptables/delete/".concat(e.Groupshopid))},confirminfogroupshoptables:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/groupshoptables/confirminfo/".concat(e.Groupshopid))},creategroupshopagentlines:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/groupshopagentlines",e)},updategroupshopagentlines:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/groupshopagentlines/update",e)},deletegroupshopagentlines:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/groupshopagentlines/delete/".concat(e.Groupshopid,"/").concat(e.Agentid))},getgroupshopagentvehiclelines:function(t,e){var a=t.rootState;return D(a.auth).get("/retailareaapi/api/groupshopagentvehiclelines/".concat(e.Groupshopid,"/").concat(e.Agentid))},creategroupshopagentvehiclelines:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/groupshopagentvehiclelines",e)},updategroupshopagentvehiclelines:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/groupshopagentvehiclelines/update",e)},deletegroupshopagentvehiclelines:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/groupshopagentvehiclelines/delete/".concat(e.Groupshopid,"/").concat(e.Agentid,"/").concat(e.Linenum))},getpaymenttypes:function(t){var e=t.rootState;return D(e.auth).get("/retailareaapi/api/paymenttypes")},createpaymenttypes:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/paymenttypes",e)},updatepaymenttypes:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/paymenttypes/update",e)},deletepaymenttypes:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/paymenttypes/delete/".concat(e.Paymenttypeid))},createpaymentcommissions:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/paymentcommissions",e)},deletepaymentcommissions:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/paymentcommissions/delete/".concat(e.Paymenttypeid,"/").concat(e.Commissiontypeid))},getpaymenttablespagination:function(t,e){var a=t.rootState;return D(a.auth).get("/retailareaapi/api/paymenttables/pagination",{params:e})},createppaymenttables:function(t,e){var a=t.rootState;return D(a.auth).post("/retailareaapi/api/paymenttables",e)}},V=M,H={namespaced:!0,getters:C,mutations:q,actions:V,state:G},$=(a("06db"),a("551c"),a("2fdb"),a("6762"),a("6d67"),function(t){var e={headers:{}};return t&&(e.headers=Object.assign({},e.headers,{Authorization:"bearer ".concat(t.TOKEN)})),A.a.create(e)}),z=function(t){var e=t.error,a=t.commit;return 401===e.response.status&&a("RESET_TOKEN"),Promise.reject(e)},J={TOKEN:null,REFRESHTOKENS:null,PROFILE:null},B={SET_TOKEN:function(t,e){var a=e.TOKEN,r=e.REFRESHTOKENS;t.TOKEN=a,t.REFRESHTOKENS=r},SET_PROFILE:function(t,e){var a=e.PROFILE;t.PROFILE=a},RESET_TOKEN:function(t){t.TOKEN=null,t.REFRESHTOKENS=null,t.PROFILE=null}},Q={userlogin:function(t,e){var a=t.state,r=t.commit,n=e.email,o=e.password;return $(a).post("/inventproductapi.auth/api/v1/identity/login",{EMAIL:n,PASSWORD:o}).then((function(t){var e=t.data;return r("SET_TOKEN",e),$(a).get("/inventproductapi.auth/api/v1/identity/profile")})).then((function(t){var e=t.status,a=t.data;return r("SET_PROFILE",{PROFILE:a}),{status:e,data:a}})).catch((function(t){return z({error:t,commit:r})}))},userlogout:function(t){var e=t.commit;e("RESET_TOKEN")},userchangepassword:function(t,e){var a=t.state,r=t.commit;return $(a).post("/inventproductapi.auth/api/v1/identity/changepassword",{},{params:e}).then((function(t){var e=t.data;r("SET_TOKEN",e)})).catch((function(t){return z({error:t,commit:r})}))},userresetpassword:function(t,e){var a=t.state;t.commit;return $(a).post("/inventproductapi.auth/api/user/resetpassword",e)},getusergroup:function(t){var e=t.state;return $(e).get("/inventproductapi.auth/api/usergroups")},createusergroup:function(t,e){var a=t.state;return $(a).post("/inventproductapi.auth/api/usergroups",e)},updateusergroup:function(t,e){var a=t.state;return $(a).post("/inventproductapi.auth/api/usergroups/update",e)},deleteusergroup:function(t,e){var a=t.state,r=e.Groupid;return $(a).post("/inventproductapi.auth/api/usergroups/delete/".concat(r))},getbackofficerestrict:function(t){var e=t.state;return $(e).get("/inventproductapi.auth/api/backofficerestrict")},createbackofficerestrict:function(t,e){var a=t.state,r=e.Keyname,n=e.Description;return $(a).post("/inventproductapi.auth/api/backofficerestrict",{Keyname:r,Description:n})},updatebackofficerestrict:function(t,e){var a=t.state,r=e.Keyname,n=e.Description;return $(a).post("/inventproductapi.auth/api/backofficerestrict/update",{Keyname:r,Description:n})},deletebackofficerestrict:function(t,e){var a=t.state,r=e.Keyname,n=e.Description;return $(a).post("/inventproductapi.auth/api/backofficerestrict/delete/".concat(r),{Keyname:r,Description:n})},getusergroupbackofficerestrict:function(t,e){var a=t.state,r=e.Groupid;return $(a).get("/inventproductapi.auth/api/Usergroupbackofficerestricts/".concat(r))},createusergroupbackofficerestrict:function(t,e){var a=t.state,r=e.Groupid,n=e.Keyname;return $(a).post("/inventproductapi.auth/api/Usergroupbackofficerestricts/".concat(r,"/").concat(n))},deleteusergroupbackofficerestrict:function(t,e){var a=t.state,r=e.Groupid,n=e.Keyname;return $(a).post("/inventproductapi.auth/api/Usergroupbackofficerestricts/delete/".concat(r,"/").concat(n))},getuserinid:function(t,e){var a=t.state,r=t.commit,n=e.query,o=e.data;return $(a).post("/inventproductapi.auth/api/user/inid",o,{params:n}).catch((function(t){return z({error:t,commit:r})}))},getuserpagination:function(t,e){var a=t.state,r=t.commit;return $(a).get("/inventproductapi.auth/api/user/pagination",{params:e}).catch((function(t){return z({error:t,commit:r})}))},createuser:function(t,e){var a=t.state;return $(a).post("/inventproductapi.auth/api/User",e)},updateuser:function(t,e){var a=t.state;return $(a).post("/inventproductapi.auth/api/User/update",e)},deleteuser:function(t,e){var a=t.state,r=e.Id;return $(a).post("/inventproductapi.auth/api/User/delete/".concat(r))},getusergroupbackoffice:function(t,e){var a=t.state,r=e.Groupid;return $(a).get("/inventproductapi.auth/api/Usergroupbackoffices/".concat(r))},createusergroupbackoffice:function(t,e){var a=t.state,r=e.Groupid,n=e.Userid;return $(a).post("/inventproductapi.auth/api/Usergroupbackoffices/".concat(n,"/").concat(r))},deleteusergroupbackoffice:function(t,e){var a=t.state,r=e.Groupid,n=e.Userid;return $(a).post("/inventproductapi.auth/api/Usergroupbackoffices/delete/".concat(n,"/").concat(r))}},W={isAuthenticated:function(t){return!!t.TOKEN},profile:function(t){return t.PROFILE},canaccress:function(t){return function(e){var a=t.PROFILE?t.PROFILE.Usergroupbackofficerestrict:[];return e.some((function(t){return a.map((function(t){return t.Keyname})).includes(t.toUpperCase())}))}}},X={namespaced:!0,state:J,mutations:B,actions:Q,getters:W};u["a"].use(P["a"]);var Y=function(){var t=new P["a"].Store({modules:{inventproduct:F,auth:X,retailarea:H},plugins:[Object(O["a"])()],strict:!1});return t},Z=a("8c4f"),tt=[{path:"/auth",name:"auth",component:function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,"89ed"))},children:[{path:"",name:"Login",component:function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,"013f"))}}]},{path:"/",alias:"/Home",name:"MainLayout",component:function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,"713b"))},meta:{authRequired:!0},children:[{path:"/",alias:"main",component:function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,"e5ee"))}},{path:"/backofficerestrict",meta:{restrict:"mnbackofficerestrict"},component:function(){return Promise.all([a.e(0),a.e(14)]).then(a.bind(null,"c3e9"))}},{path:"/usergroup",meta:{restrict:"mnusergroup"},component:function(){return Promise.all([a.e(0),a.e(16)]).then(a.bind(null,"c60c"))}},{path:"/usergroupbackofficerestricts",meta:{restrict:"mnusergroupbackofficerestricts"},component:function(){return Promise.all([a.e(0),a.e(17)]).then(a.bind(null,"c372"))}},{path:"/user",meta:{restrict:"mnuser"},component:function(){return Promise.all([a.e(0),a.e(15)]).then(a.bind(null,"7f10"))}},{path:"/companyinfo",meta:{restrict:"mncompanyinfo"},component:function(){return Promise.all([a.e(0),a.e(11)]).then(a.bind(null,"7a8c"))}},{path:"/companygroup",meta:{restrict:"mncompanygroup"},component:function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,"60d8"))}},{path:"/dimensions",meta:{restrict:"mndimensions"},component:function(){return Promise.all([a.e(0),a.e(12)]).then(a.bind(null,"8850"))}},{path:"/empltables",meta:{restrict:"mnempltables"},component:function(){return Promise.all([a.e(0),a.e(13)]).then(a.bind(null,"ce51"))}},{path:"/inventitemgroup",component:function(){return Promise.all([a.e(0),a.e(18)]).then(a.bind(null,"f26d"))}},{path:"/agenttype",meta:{restrict:"mncommissionset"},component:function(){return Promise.all([a.e(0),a.e(22)]).then(a.bind(null,"7d32"))}},{path:"/agentgrouptype",meta:{restrict:"mncommissionset"},component:function(){return Promise.all([a.e(0),a.e(20)]).then(a.bind(null,"9f1c"))}},{path:"/commissiontype",meta:{restrict:"mncommissionset"},component:function(){return Promise.all([a.e(0),a.e(25)]).then(a.bind(null,"99e0"))}},{path:"/tourtype",meta:{restrict:"mncommissionset"},component:function(){return Promise.all([a.e(0),a.e(29)]).then(a.bind(null,"5702"))}},{path:"/cartype",meta:{restrict:"mncommissionset"},component:function(){return Promise.all([a.e(0),a.e(23)]).then(a.bind(null,"86ff"))}},{path:"/ratebonus",meta:{restrict:"mncommissionset"},component:function(){return Promise.all([a.e(0),a.e(28)]).then(a.bind(null,"60cd"))}},{path:"/commissionset",meta:{restrict:"mncommissionset"},component:function(){return Promise.all([a.e(0),a.e(24)]).then(a.bind(null,"8781"))}},{path:"/custinvoicemark",meta:{restrict:"mncommissionset"},component:function(){return Promise.all([a.e(0),a.e(26)]).then(a.bind(null,"8d80"))}},{path:"/agenttable",meta:{restrict:"mnagenttable"},component:function(){return Promise.all([a.e(0),a.e(1),a.e(21)]).then(a.bind(null,"fac0"))}},{path:"/groupshoptable",meta:{restrict:"mngroupshoptable"},component:function(){return Promise.all([a.e(0),a.e(1),a.e(6)]).then(a.bind(null,"b3a1"))}},{path:"/paymenttable",meta:{restrict:"mnpaymenttable"},component:function(){return Promise.all([a.e(0),a.e(1),a.e(27)]).then(a.bind(null,"6403"))}},{path:"/reportviewer",component:function(){return a.e(19).then(a.bind(null,"8afe"))}}]}];tt.push({path:"*",component:function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,"e51e"))}});var et=tt;u["a"].use(Z["a"]);var at=function(){var t=new Z["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:et,mode:"hash",base:"/agent/"});return t},rt=function(){return nt.apply(this,arguments)};function nt(){return nt=n()(i.a.mark((function t(){var e,a,r;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("function"!==typeof Y){t.next=6;break}return t.next=3,Y({Vue:u["a"]});case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=Y;case 7:if(e=t.t0,"function"!==typeof at){t.next=14;break}return t.next=11,at({Vue:u["a"],store:e});case 11:t.t1=t.sent,t.next=15;break;case 14:t.t1=at;case 15:return a=t.t1,e.$router=a,r={router:a,store:e,render:function(t){return t(k)}},r.el="#q-app",t.abrupt("return",{app:r,store:e,router:a});case 20:case"end":return t.stop()}}),t)}))),nt.apply(this,arguments)}a("6b54");var ot=a("bf15"),it=a("1dce"),ut=a.n(it),pt=a("c537"),st=a.n(pt),ct=a("7898"),lt=a.n(ct),mt={name:"_blank",specs:["fullscreen=yes","titlebar=yes","scrollbars=yes"],styles:["https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css","https://unpkg.com/kidlat-css/css/kidlat.css"]};u["a"].use(lt.a,mt),u["a"].use(ot["a"]),u["a"].use(ut.a),u["a"].use(st.a);var ft=function(t,e){t=t.toString();while(t.length<(e||2))t="0"+t;return t};u["a"].prototype.$PadNumber=ft;var dt=function(t,e){var a=t.reduce((function(t,e){var a=(t[e.label]=e.field,t);return a}),{}),r={json_fields:a,json_data:e,json_meta:[[{key:"charset",value:"utf-8"}]]};return r};u["a"].prototype.$ExportExcel=dt;var ht=function(){var t=n()(i.a.mark((function t(e){var a,r;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.router,r=e.store,e.Vue,a.beforeEach((function(t,e,a){var n=t.matched.some((function(t){return t.meta.authRequired})),o=r.getters["auth/isAuthenticated"];if(console.log("Route Auth",n),console.log("Isauthen",o),n&&o){var i=r.getters["auth/canaccress"],u=t.matched.some((function(t){return t.meta.restrict})),p=t.matched.some((function(t){return i([t.meta&&t.meta.restrict?t.meta.restrict:""])}));console.log("restrict",u,p),u&&!p?a({path:"/norestrict"}):a()}else n&&!o?a({path:"/auth"}):a()}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),gt=a("9ce1");function vt(){return bt.apply(this,arguments)}function bt(){return bt=n()(i.a.mark((function t(){var e,a,r,n,o,p,s,c,l;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,rt();case 2:e=t.sent,a=e.app,r=e.store,n=e.router,o=!0,p=function(t){o=!1,window.location.href=t},s=window.location.href.replace(window.location.origin,""),c=[void 0,ht,gt["default"]],l=0;case 11:if(!(!0===o&&l<c.length)){t.next=29;break}if("function"===typeof c[l]){t.next=14;break}return t.abrupt("continue",26);case 14:return t.prev=14,t.next=17,c[l]({app:a,router:n,store:r,Vue:u["a"],ssrContext:null,redirect:p,urlPath:s});case 17:t.next=26;break;case 19:if(t.prev=19,t.t0=t["catch"](14),!t.t0||!t.t0.url){t.next=24;break}return window.location.href=t.t0.url,t.abrupt("return");case 24:return console.error("[Quasar] boot error:",t.t0),t.abrupt("return");case 26:l++,t.next=11;break;case 29:if(!1!==o){t.next=31;break}return t.abrupt("return");case 31:new u["a"](a);case 32:case"end":return t.stop()}}),t,null,[[14,19]])}))),bt.apply(this,arguments)}vt()},"5c0b":function(t,e,a){"use strict";var r=a("ffd0"),n=a.n(r);n.a},ffd0:function(t,e,a){}},[[0,3,0]]]);