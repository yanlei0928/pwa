(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-329f8713"],{"0407":function(t,e,i){},"0b9e":function(t,e,i){"use strict";i("0407")},6614:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"role-des"},[i("van-nav-bar",{staticClass:"van-app",attrs:{title:t.$t("returnDetail"),"left-arrow":""},on:{"click-left":t.goBack}}),i("div",{staticClass:"content-box"},t._l(t.data,(function(e,r){return i("div",{key:r,staticClass:"detail-box"},[i("div",{staticClass:"detail"},[i("div",[t._v(t._s(t.$t("account")))]),i("div",[t._v(t._s(e.name))])]),i("div",{staticClass:"detail"},[i("div",[t._v(t._s(t.$t("lever")))]),2===e.type?i("div",[t._v(t._s(t.$t("box")))]):"en_US"===t.$i18n.locale?i("div",[t._v("lever "+t._s(e.level))]):i("div",[t._v(t._s(e.level)+"级")])]),i("div",{staticClass:"detail"},[i("div",[t._v(t._s(t.$t("currency")))]),i("div",[t._v(t._s(e.currency))])]),i("div",{staticClass:"detail"},[i("div",[t._v(t._s(t.$t("Fee")))]),i("div",[t._v(t._s(t._f("amoutFilter")(e.effectiveCharge))+" "+t._s(e.currency))])]),i("div",{staticClass:"detail"},[i("div",[t._v(t._s(t.$t("CommissionRatio")))]),1===e.type?i("div",[t._v(t._s(t._f("bigFilter")(e.rate))+"%")]):i("div",[t._v("- -")])]),i("div",{staticClass:"detail"},[i("div",[t._v(t._s(t.$t("rebateAmount")))]),i("div",{staticStyle:{color:"#09AEB0"}},[t._v(t._s(t._f("amoutFilter")(e.amount))+" "+t._s(e.currency))])]),i("div",{staticClass:"detail"},[i("div",[t._v(t._s(t.$t("rebateTime")))]),i("div",[t._v(t._s(e.rebateTime))])])])})),0)],1)},a=[],s=(i("8e6e"),i("ac6a"),i("456d"),i("ade3")),c=i("2f62"),n=i("79ec"),o=i("9dcd"),v=i.n(o);function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var u={data:function(){return{data:[]}},created:function(){this.SETPARTNERTAB(0),this.$route.params&&(this.data=[this.$route.params.data])},methods:d(d({},Object(c["d"])("common",["SETPARTNERTAB"])),{},{goBack:function(){this.$router.go(-1)}}),filters:{amoutFilter:function(t){return Object(n["subStringNum"])(t,4)},bigFilter:function(t){return v()(t).times(100)}}},_=u,f=(i("0b9e"),i("2877")),b=Object(f["a"])(_,r,a,!1,null,"4aba00d1",null);e["default"]=b.exports}}]);