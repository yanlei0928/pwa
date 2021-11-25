(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["deliveryHistory"],{"55d5":function(t,e,n){},5837:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"delivery-history"},[n("van-nav-bar",{staticClass:"van-app",attrs:{title:t.$t("FundsRate"),"left-arrow":""},on:{"click-left":t.goBack}}),n("div",{staticClass:"content"},[n("div",{staticClass:"tabTitle"},[t._v(t._s(t.$t("FundingHis")))]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.fundingRateShow,expression:"fundingRateShow"}],staticClass:"fundingRate-content"},[n("div",{staticClass:"listTitle-f"},[n("div",{staticClass:"c"},[t._v(t._s(t.$t("Contract")))]),n("div",{staticClass:"f-i"},[t._v("Funding Interval")]),n("div",{staticClass:"f-r"},[t._v("Funding Rate")]),n("div",{staticClass:"f-r-d"},[t._v("Funding Rate Daily")]),n("div",{staticClass:"t"},[t._v(t._s(t.$t("Time")))])]),n("div",{staticClass:"list-content-f"},[n("van-list",{attrs:{finished:t.fundingRateFinished,"finished-text":t.$t("NoMore")},on:{load:t.fundingRateOnLoad},model:{value:t.fundingRateLoading,callback:function(e){t.fundingRateLoading=e},expression:"fundingRateLoading"}},t._l(t.fundingRate,(function(e,a){return n("div",{key:a,staticClass:"list-f"},[n("div",{staticClass:"c"},[t._v(t._s(e.symbol))]),n("div",{staticClass:"f-i"},[t._v(t._s(t.getPerpetualSettleFrequency(e)))]),n("div",{staticClass:"f-r"},[t._v(t._s(t._f("toFix64")(100*e.fundingRate))+"%")]),n("div",{staticClass:"f-r-d"},[t._v(t._s(t._f("toFix64")(Number(e.perpetualSettleFrequency)*e.fundingRate*100))+"%")]),n("div",{staticClass:"t"},[t._v(t._s(t._f("dateFormat")(Math.floor(e.deliveryTime/1e3))))])])})),0)],1)]),n("noData",{directives:[{name:"show",rawName:"v-show",value:!t.fundingRateShow,expression:"!fundingRateShow"}],attrs:{status:t.noDataStatus}})],1)],1)},i=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("2909")),o=(n("c5f6"),n("ade3")),c=n("2f62"),r=n("7746"),u=n("79ec"),d=n("ff51");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g={components:{noData:r["a"]},data:function(){return{active:0,noDataStatus:2,fundingRate:[],settlementHistory:[],fundingRateLoading:!1,fundingRateFinished:!1,fundingRateCount:0,fundingRateTotle:0,fundingRateShow:!0,settlementHistoryLoading:!1,settlementHistoryFinished:!1,settlementHistoryCount:0,settlementHistoryTotle:0,settlementHistoryShow:!0}},computed:{},methods:f(f({},Object(c["b"])("futures",["queryContractDeliveryList"])),{},{getPerpetualSettleFrequency:function(t){return 2===Number(t.contractType)?"".concat(this.$t("Every")).concat(Object(u["toFix6"])(24/Number(t.perpetualSettleFrequency))).concat(this.$t("Hours")):"Settlement"},fundingRateOnLoad:function(){var t,e=this;this.fundingRateCount+=1;var n=(t={pageNum:this.fundingRateCount,contractId:this.$route.query.contractId,pageSize:20},Object(o["a"])(t,"contractId",this.$route.query.contractId),Object(o["a"])(t,"type",2),t);this.queryContractDeliveryList(n).then((function(t){!t.code&&t.data&&t.data.list.length?(e.fundingRateTotle=t.data.total,e.fundingRate=[].concat(Object(s["a"])(e.fundingRate),Object(s["a"])(t.data.list))):e.fundingRateShow=!1,e.fundingRateLoading=!1,e.fundingRate.length===e.fundingRateTotle&&(e.fundingRateFinished=!0)})).catch((function(t){console.log(t),e.fundingRateCount-=1}))},settlementHistoryOnLoad:function(){var t=this;this.settlementHistoryCount+=1;var e={pageNum:this.settlementHistoryCount,contractId:this.$route.query.contractId,pageSize:10,type:1};this.queryContractDeliveryList(e).then((function(e){!e.code&&e.data&&e.data.list.length?(t.settlementHistoryTotle=e.data.total,t.settlementHistory=[].concat(Object(s["a"])(t.settlementHistory),Object(s["a"])(e.data.list))):t.settlementHistoryShow=!1,t.settlementHistoryLoading=!1,t.settlementHistory.length===t.settlementHistoryTotle&&(t.settlementHistoryFinished=!0)})).catch((function(e){t.settlementHistoryCount-=1}))},goBack:function(){Object(d["e"])()}}),mounted:function(){}},v=g,h=(n("ba7c"),n("64c9"),n("2877")),y=Object(h["a"])(v,a,i,!1,null,"46950ecc",null);e["default"]=y.exports},"5fcb":function(t,e,n){},"63ae":function(t,e,n){"use strict";n("5fcb")},"64c9":function(t,e,n){"use strict";n("ff2d")},7746:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"err"},[n("div",{class:t.icon}),n("div",{staticClass:"message"},[t._v(t._s(t.msg))])])},i=[],s=(n("c5f6"),{props:{status:{type:Number},message:{default:""}},data:function(){return{msg:"",icon:""}},created:function(){this.icon=this.status>1?"nodata":this.status<1?"failed-to-load":"no-network",""===this.message?this.msg=this.status>1?this.$t("NoData"):this.status<1?this.$t("LoadingError"):this.$t("NoNetwork"):this.msg=this.message}}),o=s,c=(n("63ae"),n("2877")),r=Object(c["a"])(o,a,i,!1,null,"b1f3e6a6",null);e["a"]=r.exports},ba7c:function(t,e,n){"use strict";n("55d5")},ff2d:function(t,e,n){}}]);