(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["futuresInfo"],{"46ab":function(t,n,e){"use strict";e.r(n);var c,r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"futures-info"},[e("van-nav-bar",{staticClass:"van-app",attrs:{title:t.$t("contractInfo.info"),"left-arrow":""},on:{"click-left":t.goBack}}),e("van-tabs",{attrs:{sticky:"",offsetTop:46,lineWidth:25}},[e("van-tab",{attrs:{title:t.$t("FundsRate")}},[e("van-list",{attrs:{finished:t.fundingRateFinished,"finished-text":t.$t("NoMore"),offset:100},on:{load:t.fundingRateOnLoad},model:{value:t.fundingRateLoading,callback:function(n){t.fundingRateLoading=n},expression:"fundingRateLoading"}},[e("div",{staticClass:"filter-wrap"},[e("div",{staticClass:"bold",on:{click:function(n){t.showContractPicker=!0}}},[e("span",[t._v(t._s(t.curContract.text))]),e("van-icon",{attrs:{name:"play"}})],1),e("div",{staticClass:"txt"},[t._v("\n            "+t._s(t.SettleFrequency)+"\n          ")])]),e("div",{staticClass:"list-title"},[e("div",{staticClass:"cell1"},[t._v(t._s(t.$t("contractInfo.name")))]),e("div",{staticClass:"cell2"},[t._v(t._s(t.$t("contractInfo.fundingRate")))]),e("div",{staticClass:"cell3"},[t._v(t._s(t.$t("contractInfo.fundingRateDaily")))]),e("div",{staticClass:"cell4"},[t._v(t._s(t.$t("contractInfo.time")))])]),e("div",{staticClass:"list-wrap"},t._l(t.fundingRateList,(function(n,c){return e("div",{key:c,staticClass:"list-item"},[e("div",{staticClass:"cell1"},[t._v(t._s(n.symbol))]),e("div",{staticClass:"cell2"},[t._v(t._s(t._f("toFix64")(100*n.fundingRate))+"%")]),e("div",{staticClass:"cell3"},[t._v(t._s(t._f("toFix64")(Number(n.perpetualSettleFrequency)*n.fundingRate*100))+"%\n            ")]),e("div",{staticClass:"cell4"},[t._v(t._s(t._f("dateFormat2")(Math.floor(n.deliveryTime/1e3)))+"\n            ")])])})),0)])],1),e("van-tab",{attrs:{title:t.$t("InsuranceAccount")}},[e("van-list",{attrs:{finished:t.insuranceFinished,"finished-text":t.$t("NoMore"),offset:100},on:{load:t.insuranceOnLoad},model:{value:t.insuranceLoading,callback:function(n){t.insuranceLoading=n},expression:"insuranceLoading"}},[e("div",{staticClass:"filter-wrap"},[e("div",{staticClass:"bold",on:{click:function(n){t.showCurrencyPicker=!0}}},[e("span",[t._v(t._s(t.curCurrency.text))]),e("van-icon",{attrs:{name:"play"}})],1),e("div",{staticClass:"txt",on:{click:t.showRemark}},[t._v("\n            "+t._s(t.$t("InsuranceAccount"))+"\n            "),e("van-icon",{attrs:{name:"question"}})],1)]),e("div",{staticClass:"list-title"},[e("div",{staticClass:"date"},[t._v(t._s(t.$t("contractInfo.insuranceDate")))]),e("div",{staticClass:"currency"},[t._v(t._s(t.$t("contractInfo.currencyName")))]),e("div",{staticClass:"balance"},[t._v(t._s(t.$t("contractInfo.insuranceFundBalance")))])]),e("div",{staticClass:"list-wrap"},t._l(t.insuranceList,(function(n,c){return e("div",{key:c,staticClass:"list-item"},[e("div",{staticClass:"date"},[t._v(t._s(n.date))]),e("div",{staticClass:"currency"},[t._v(t._s(t._f("currencyFilter")(n.currencyId)))]),e("div",{staticClass:"balance"},[t._v(t._s(t._f("removeInvalidZero")(t._f("toFix8")(n.amount))))])])})),0)])],1)],1),e("van-popup",{attrs:{position:"bottom"},model:{value:t.showContractPicker,callback:function(n){t.showContractPicker=n},expression:"showContractPicker"}},[e("van-picker",{attrs:{title:t.$t("Contract"),columns:t.contractList,"confirm-button-text":t.$t("ConfirmTxt"),"cancel-button-text":t.$t("Cancel"),showToolbar:!0,"default-index":t.contractPickerIndex},on:{confirm:t.onConfirm,cancel:function(n){t.showContractPicker=!1}}})],1),e("van-popup",{attrs:{position:"bottom"},model:{value:t.showCurrencyPicker,callback:function(n){t.showCurrencyPicker=n},expression:"showCurrencyPicker"}},[e("van-picker",{attrs:{title:t.$t("contractInfo.currencyName"),columns:t.currencyList,"confirm-button-text":t.$t("ConfirmTxt"),"cancel-button-text":t.$t("Cancel"),showToolbar:!0,"default-index":t.currencyPickerIndex},on:{confirm:t.onConfirmCurrency,cancel:function(n){t.showCurrencyPicker=!1}}})],1),e("van-popup",{staticClass:"popup-remark",model:{value:t.isShowRemark,callback:function(n){t.isShowRemark=n},expression:"isShowRemark"}},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("InsuranceAccount"))+"\n      "),e("van-icon",{attrs:{name:"cross"},on:{click:function(n){t.isShowRemark=!1}}})],1),e("div",{staticClass:"remark"},[e("p",[t._v(t._s(t.$t("insuranceFundTip2")))]),e("p",[t._v(t._s(t.$t("insuranceFundTip1")))])])])],1)},i=[],a=(e("8e6e"),e("ac6a"),e("456d"),e("2909")),s=(e("7514"),e("c5f6"),e("ade3")),o=e("2f62"),u=e("ff51");e("2934");function d(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,c)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?d(Object(e),!0).forEach((function(n){Object(s["a"])(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var f={name:"futuresInfo",data:function(){return{contractList:[],showContractPicker:!1,contractPickerIndex:0,fundingRateList:[],fundingRatePageNum:0,fundingRateLoading:!1,fundingRateFinished:!1,curContract:{contractId:"",text:"",deliveryPriceInterval:2},currencyList:[],showCurrencyPicker:!1,currencyPickerIndex:0,insuranceList:[],insuranceCount:0,insuranceLoading:!1,insuranceFinished:!1,curCurrency:{currencyId:"",text:""},insuranceNextId:"",isShowRemark:!1}},computed:l(l({},Object(o["e"])("base",["userId","currencyConfig"])),{},{contractId:function(){return this.$route.query.contractId||1e5},currencyId:function(){return this.$route.query.currencyId||7},SettleFrequency:function(){var t=Number(24/Number(this.curContract.deliveryPriceInterval));return this.$t("contractInfo.settleHours",{hours:t})}}),filters:{currencyFilter:function(t){if(!c.currencyList)return"";var n=c.currencyList.find((function(n){return n.currencyId==t}));return n?n.text:""}},methods:l(l({},Object(o["b"])("futures",["queryContractDeliveryList","queryFuturesCommonInfo","queryDailyBalance"])),{},{goBack:function(){Object(u["e"])()},showRemark:function(){this.isShowRemark=!0},onConfirm:function(t,n){this.contractPickerIndex=n,this.fundingRatePageNum=0,this.fundingRateList=[],this.fundingRateFinished=!1,this.deliveryPriceInterval=t.deliveryPriceInterval,this.curContract=t,this.showContractPicker=!1,this.fundingRateOnLoad()},onConfirmCurrency:function(t,n){this.currencyPickerIndex=n,this.insuranceCount=0,this.insuranceFinished=!1,this.insuranceNextId="",this.curCurrency=t,this.showCurrencyPicker=!1,this.insuranceOnLoad()},fundingRateOnLoad:function(){var t=this,n=this.curContract.contractId||this.contractId,e={pageNum:this.fundingRatePageNum+1,contractId:n,pageSize:20,type:2,hostType:Object(u["c"])(n)};this.queryContractDeliveryList(e).then((function(n){t.fundingRatePageNum=n.data.pageNum,!n.code&&n.data&&n.data.list.length&&(t.fundingRateList=[].concat(Object(a["a"])(t.fundingRateList),Object(a["a"])(n.data.list))),t.fundingRateLoading=!1,n.data.list.length<20&&(t.fundingRateFinished=!0)}))},currencyConvertHost:function(t){return t>99&&t<400?"full":7!==t&&8!==t?"reverse":"default"},insuranceOnLoad:function(){var t=this,n=this.curCurrency.currencyId||this.currencyId,e={start:this.insuranceNextId,size:21,currencyId:n,direction:"next",hostType:this.currencyConvertHost(Number(n))};this.queryDailyBalance(e).then((function(n){t.insuranceLoading=!1,200===n.code&&(""==t.insuranceNextId?t.insuranceList=n.data.slice(0,20):t.insuranceList=t.insuranceList.concat(n.data.slice(0,20)),n.data.length>0&&(t.insuranceNextId=n.data[n.data.length-1].id),t.insuranceFinished=n.data.length<21)}))},init:function(){var t=this;this.queryFuturesCommonInfo().then((function(n){var e=[];t.contractList=n.data.contracts.map((function(t){var n=e.find((function(n){return n.currencyId===t.currencyId}));return n||e.push({currencyId:t.currencyId,text:t.currencyName}),{contractId:t.contractId,text:t.symbol,deliveryPriceInterval:t.deliveryPriceInterval,commodityId:t.commodityId,commodityName:t.commodityName,currencyId:t.currencyId,currencyName:t.currencyName,weight:t.weight}})),t.currencyList=e;for(var c=0;c<t.contractList.length;c++)if(t.contractList[c].contractId==t.contractId){t.curContract=t.contractList[c],t.contractPickerIndex=c;break}console.log(t.currencyList);for(c=0;c<t.currencyList.length;c++)if(t.currencyList[c].currencyId==t.currencyId){t.curCurrency=t.currencyList[c],t.currencyPickerIndex=c;break}}))}}),mounted:function(){this.init()},created:function(){c=this}},v=f,y=(e("8014"),e("2877")),h=Object(y["a"])(v,r,i,!1,null,"22b67108",null);n["default"]=h.exports},8014:function(t,n,e){"use strict";e("cb2e")},cb2e:function(t,n,e){}}]);