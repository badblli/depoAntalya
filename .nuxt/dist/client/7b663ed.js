(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{350:function(t,e,n){"use strict";var c={name:"PageHeader",data:function(){return{}},props:{title:{type:String},banner:{type:String},slug1:{type:String},slug2:{type:String}}},l=n(40),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"page-title-area bg_cover",style:{"background-image":"url(".concat(t.banner?"https://strapi.badblli.dev"+t.banner:"https://img.freepik.com/free-vector/abstract-orange-background-with-lines-halftone-effect_1017-32107.jpg?w=1060&t=st=1680692252~exp=1680692852~hmac=cc4535da3ff21392ce61635f278c710c12c8704cc90d2b6419f6ca702928500d",")")}},[t._v("\n    >\n    "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"page-title-content"},[e("h3",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:t.localePath("/")}},[t._v(t._s(t.slug1))])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n                  "+t._s(t.slug2)+"\n                ")])])])])])])])])])}),[],!1,null,"438d136e",null);e.a=component.exports},386:function(t,e,n){"use strict";n.r(e);var c,l,r=n(356),o=n(350),v=n(355),d={name:"PricingPage"},_=n(40),f=Object(_.a)(d,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"pricing-area pricing-page"},[t._m(0),t._v(" "),e("div",{staticClass:"pricing-item-area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-4 col-md-7 col-sm-9"},[e("div",{staticClass:"pricing-item text-center"},[e("span",[t._v("Basic pack")]),t._v(" "),e("h3",{staticClass:"title"},[t._v("$20.00")]),t._v(" "),t._m(1),t._v(" "),e("nuxt-link",{staticClass:"main-btn main-btn-2",attrs:{to:"/get-in-touch"}},[t._v("Book space")])],1)]),t._v(" "),e("div",{staticClass:"col-lg-4 col-md-7 col-sm-9"},[e("div",{staticClass:"pricing-item text-center"},[e("span",[t._v("Standard pack")]),t._v(" "),e("h3",{staticClass:"title"},[t._v("$40.00")]),t._v(" "),t._m(2),t._v(" "),e("nuxt-link",{staticClass:"main-btn main-btn-2",attrs:{to:"/get-in-touch"}},[t._v("Book space")])],1)]),t._v(" "),e("div",{staticClass:"col-lg-4 col-md-7 col-sm-9"},[e("div",{staticClass:"pricing-item text-center"},[e("span",[t._v("Ultimate pack")]),t._v(" "),e("h3",{staticClass:"title"},[t._v("$90.00")]),t._v(" "),t._m(3),t._v(" "),e("nuxt-link",{staticClass:"main-btn main-btn-2",attrs:{to:"/get-in-touch"}},[t._v("Book space")])],1)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"pricing-title-area"},[t("div",{staticClass:"container"},[t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-lg-6"},[t("div",{staticClass:"pricng-title text-center"},[t("h3",{staticClass:"title"},[this._v("Choose pricing plans for space")])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"list"},[e("ul",[e("li",[e("span",[t._v("High speed internet")]),t._v(" "),e("i",{staticClass:"fa fa-check"})]),t._v(" "),e("li",[e("span",[t._v("Free parking space")]),t._v(" "),e("i",{staticClass:"fa fa-check"})]),t._v(" "),e("li",[e("span",[t._v("Drinks & coffee")]),t._v(" "),e("i",{staticClass:"fa fa-check"})]),t._v(" "),e("li",[e("span",[t._v("Full access")]),t._v(" "),e("i",{staticClass:"fa fa-check"})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"list"},[e("ul",[e("li",[e("span",[t._v("High speed internet")]),t._v(" "),e("i",{staticClass:"fa fa-check"})]),t._v(" "),e("li",[e("span",[t._v("Free parking space")]),t._v(" "),e("i",{staticClass:"fa fa-check"})]),t._v(" "),e("li",[e("span",[t._v("Drinks & coffee")]),t._v(" "),e("i",{staticClass:"fa fa-check"})]),t._v(" "),e("li",[e("span",[t._v("Full access")]),t._v(" "),e("i",{staticClass:"fa fa-check"})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"list"},[e("ul",[e("li",[e("span",[t._v("High speed internet")]),t._v(" "),e("i",{staticClass:"fa fa-check"})]),t._v(" "),e("li",[e("span",[t._v("Free parking space")]),t._v(" "),e("i",{staticClass:"fa fa-check"})]),t._v(" "),e("li",[e("span",[t._v("Drinks & coffee")]),t._v(" "),e("i",{staticClass:"fa fa-check"})]),t._v(" "),e("li",[e("span",[t._v("Full access")]),t._v(" "),e("i",{staticClass:"fa fa-check"})])])])}],!1,null,"8ad2d182",null).exports,C=(n(18),n(169)),h=n(70),m=Object(h.a)(c||(c=Object(C.a)(["\n  query GetDepoConfig($locale: I18NLocaleCode) {\n    depoConfigs(locale: $locale) {\n      data {\n        id\n      }\n      data {\n        attributes {\n          title\n          size\n          metrekare\n          adet\n          description\n          size\n          item\n          image {\n            data {\n              id\n            }\n            data {\n              attributes {\n                url\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),k=Object(h.a)(l||(l=Object(C.a)(["\n  query GetDepoBanner($locale: I18NLocaleCode) {\n    depoBannerConfigs(locale: $locale) {\n      data {\n        id\n      }\n      data {\n        attributes {\n          title\n          slug1\n          slug2\n          banner {\n            data {\n              id\n            }\n            data {\n              attributes {\n                name\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),x=n(352),y={name:"Explore",components:{ContactBtn:x.a},data:function(){return{depoConfigs:[],depoBannerConfigs:[]}},apollo:{depoConfigs:{prefetch:!0,query:m,variables:function(){return{locale:this.$i18n.locale}},fetchPolicy:"no-cache"},depoBannerConfigs:{prefetch:!0,query:k,variables:function(){return{locale:this.$i18n.locale}},fetchPolicy:"no-cache"}}},B=Object(_.a)(y,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"explore-depoantalya-area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"explore-depoantalya-title text-center"},t._l(t.depoBannerConfigs.data,(function(n,c){return 1===c?e("h3",{key:c,staticClass:"title"},[t._v("\n            "+t._s(n.attributes.title)+"\n          ")]):t._e()})),0)])]),t._v(" "),e("div",{staticClass:"row"},t._l(t.depoConfigs.data,(function(n){return e("div",{key:n.id,staticClass:"col-lg-4 col-md-4 col-sm-12 col-12"},[e("div",{staticClass:"explore-depoantalya-item mb-40"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 mb-10"},[e("nuxt-img",{attrs:{src:"https://strapi.badblli.dev".concat(n.attributes.image.data.attributes.url),alt:"".concat(n.attributes.image.data.attributes.name)}})],1),t._v(" "),e("div",{staticClass:"col-12"},[e("h3",{staticClass:"title"},[t._v("\n                "+t._s(n.attributes.title)+" -\n                "),e("span",[t._v(t._s(n.attributes.size))])]),t._v(" "),e("span",[t._v(t._s(n.attributes.metrekare))]),t._v(" "),e("p",[t._v(t._s(n.attributes.description))]),t._v(" "),e("ContactBtn",{staticStyle:{display:"flex","justify-content":"end"}})],1)])])])})),0)])])}),[],!1,null,"fbf0008c",null).exports,w={name:"CallToActionTwo",components:{ContactBtn:x.a}},P={components:{CallToActionTwo:Object(_.a)(w,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"cta-2-area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"cta-content text-left text-lg-right"},[e("ContactBtn")],1)])])]),t._v(" "),e("div",{staticClass:"cta-dot"},[e("nuxt-img",{attrs:{loading:"lazy",placeholder:"blur",src:"/assets/images/cta-dot-2.png",alt:"cta"}})],1),t._v(" "),e("div",{staticClass:"cta-dot-2"},[e("nuxt-img",{attrs:{loading:"lazy",placeholder:"blur",src:"/assets/images/cta-dot.png",alt:"cta"}})],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"col-lg-4"},[t("div",{staticClass:"cta-content"},[t("h3",{staticClass:"title"},[this._v("Fully equipped meeting rooms for rent")])])])},function(){var t=this._self._c;return t("div",{staticClass:"col-lg-5"},[t("div",{staticClass:"cta-content"},[t("p",[this._v("\n            Sed quia lipsum dolor sit atur adipiscing elit is nunc quis tellus\n            sed ligula porta ultricies quis nec magna neulla.\n          ")])])])}],!1,null,"cbc80e52",null).exports,Explore:B,PricingPage:f,Footer:v.a,PageHeader:o.a,Nav:r.a},head:function(){return{title:this.getPageInfo().title}},data:function(){return{depoBannerConfigs:[]}},apollo:{depoBannerConfigs:{prefetch:!0,query:k,variables:function(){return{locale:this.$i18n.locale}},fetchPolicy:"no-cache"}},methods:{getPageInfo:function(){if(this.depoBannerConfigs.data&&this.depoBannerConfigs.data.length>0){var title="";if(this.depoBannerConfigs.data.length>0)title=this.depoBannerConfigs.data[0].attributes.title;return{title:title}}return{title:""}}},mounted:function(){this.getPageInfo()}},j=Object(_.a)(P,(function(){var t=this,e=t._self._c;return e("div",t._l(t.depoBannerConfigs.data,(function(n,c){return e("div",{key:c},[0===c?[e("Nav"),t._v(" "),e("PageHeader",{attrs:{title:"".concat(n.attributes.title),banner:"".concat(n.attributes.banner.data.attributes.url),slug1:"".concat(n.attributes.slug1),slug2:"".concat(n.attributes.slug2)}}),t._v(" "),e("Explore"),t._v(" "),e("Footer")]:t._e()],2)})),0)}),[],!1,null,null,null);e.default=j.exports}}]);