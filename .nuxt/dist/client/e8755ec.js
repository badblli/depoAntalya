(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{351:function(t,e,n){"use strict";var c={name:"PageHeader",data:function(){return{}},props:{title:{type:String},banner:{type:String},slug1:{type:String},slug2:{type:String}}},r=n(38),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"page-title-area bg_cover",style:{"background-image":"url(".concat(t.banner?"https://strapi.badblli.dev"+t.banner:"https://img.freepik.com/free-vector/abstract-orange-background-with-lines-halftone-effect_1017-32107.jpg?w=1060&t=st=1680692252~exp=1680692852~hmac=cc4535da3ff21392ce61635f278c710c12c8704cc90d2b6419f6ca702928500d",")")}},[t._v("\n    >\n    "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"page-title-content"},[e("h3",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:t.localePath("/")}},[t._v(t._s(t.slug1))])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n                  "+t._s(t.slug2)+"\n                ")])])])])])])])])])}),[],!1,null,"438d136e",null);e.a=component.exports},356:function(t,e,n){"use strict";var c,r=n(349),l=n(169),o=n(70),d=Object(o.a)(c||(c=Object(l.a)(["\n  query GetSpaceToMake($locale: I18NLocaleCode) {\n    spaceToMakes(locale: $locale) {\n      data {\n        id\n      }\n      data {\n        attributes {\n          title\n          desc\n          description\n          imgtxt\n          item1\n          item2\n          image {\n            data {\n              attributes {\n                url\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),v={name:"SpaceToMake",data:function(){return{spaceToMakes:[]}},components:{ContactBtn:r.a},apollo:{spaceToMakes:{prefetch:!0,query:d,variables:function(){return{locale:this.$i18n.locale}},fetchPolicy:"no-cache"}}},f=n(38),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"space-to-make-area pt-120 pb-120"},[e("div",{staticClass:"container"},t._l(t.spaceToMakes.data,(function(n){return e("div",{key:n.id,staticClass:"row align-items-center"},[e("div",{staticClass:"col-lg-12 col-md-10"},[e("div",{staticClass:"space-to-make-content"},[e("h3",{staticClass:"title animated wow fadeInDown",attrs:{"data-wow-duration":"4s","data-wow-delay":"0ms"}},[t._v("\n            "+t._s(n.attributes.title)+"\n          ")]),t._v(" "),e("h4",{staticClass:"mb-20 animated wow fadeInDown",staticStyle:{color:"#e25303"},attrs:{"data-wow-duration":"4s","data-wow-delay":"0ms"}},[t._v("\n            "+t._s(n.attributes.imgtxt)+"\n          ")]),t._v(" "),e("p",[t._v("\n            "+t._s(n.attributes.desc)+"\n          ")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6 mb-40"},[e("div",{staticClass:"space-to-make-item mt-30"},[e("a",{attrs:{href:"callto:90 850 532 7671"}},[e("i",{staticClass:"flaticon-workspace"}),t._v(" "),e("span",[t._v(t._s(n.attributes.item1))])])])]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"space-to-make-item mt-30"},[e("nuxt-link",{attrs:{to:t.localePath("/events")}},[e("i",{staticClass:"flaticon-meeting"}),t._v(" "),e("span",[t._v(t._s(n.attributes.item2))])])],1)])]),t._v(" "),e("ContactBtn")],1)])])})),0),t._v(" "),e("div",{staticClass:"shape-pattern"},[e("nuxt-img",{attrs:{loading:"lazy",placeholder:"blur",src:"/assets/images/shape-pattern.png",alt:""}})],1),t._v(" "),e("div",{staticClass:"shape-pattern-2"},[e("nuxt-img",{attrs:{loading:"lazy",placeholder:"blur",format:"webp",src:"/assets/images/we-know-line.png",alt:""}})],1)])}),[],!1,null,"d1307c88",null);e.a=component.exports},385:function(t,e,n){"use strict";n.r(e);var c,r=n(352),l=n(351),o=n(356),d=n(357),v=n(353),f=n(169),m=n(70),_=Object(m.a)(c||(c=Object(f.a)(["\n  query GetAboutBanner($locale: I18NLocaleCode) {\n    aboutBannerConfigs(locale: $locale) {\n      data {\n        id\n      }\n      data {\n        attributes {\n          title\n          slug1\n          slug2\n          banner {\n            data {\n              id\n            }\n            data {\n              attributes {\n                name\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),h={components:{Footer:v.a,WriteMessageThree:d.a,SpaceToMake:o.a,PageHeader:l.a,Nav:r.a},head:function(){return{title:this.getPageInfo().title}},data:function(){return{aboutBannerConfigs:[]}},apollo:{aboutBannerConfigs:{prefetch:!0,query:_,variables:function(){return{locale:this.$i18n.locale}},fetchPolicy:"cache-first"}},methods:{getPageInfo:function(){if(this.aboutBannerConfigs.data&&this.aboutBannerConfigs.data.length>0){var title="";return this.aboutBannerConfigs.data.forEach((function(t){var e=t.attributes;title+=e.title})),{title:title}}return{title:""}}},mounted:function(){this.getPageInfo()}},C=n(38),component=Object(C.a)(h,(function(){var t=this,e=t._self._c;return e("div",t._l(t.aboutBannerConfigs.data,(function(n){return e("div",{key:n.id},[e("Nav"),t._v(" "),e("PageHeader",{attrs:{title:"".concat(n.attributes.title),banner:"".concat(n.attributes.banner.data.attributes.url),slug1:"".concat(n.attributes.slug1),slug2:"".concat(n.attributes.slug2)}}),t._v(" "),e("SpaceToMake"),t._v(" "),e("WriteMessageThree"),t._v(" "),e("Footer")],1)})),0)}),[],!1,null,null,null);e.default=component.exports}}]);