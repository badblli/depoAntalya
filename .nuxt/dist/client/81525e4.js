(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{352:function(t,e,n){"use strict";var c={name:"PageHeader",data:function(){return{}},props:{title:{type:String},banner:{type:String},slug1:{type:String},slug2:{type:String}}},l=n(40),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"page-title-area bg_cover",style:{"background-image":"url(".concat(t.banner?"https://strapi.badblli.dev"+t.banner:"https://img.freepik.com/free-vector/abstract-orange-background-with-lines-halftone-effect_1017-32107.jpg?w=1060&t=st=1680692252~exp=1680692852~hmac=cc4535da3ff21392ce61635f278c710c12c8704cc90d2b6419f6ca702928500d",")")}},[t._v("\n    >\n    "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"page-title-content"},[e("h3",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:t.localePath("/")}},[t._v(t._s(t.slug1))])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n                  "+t._s(t.slug2)+"\n                ")])])])])])])])])])}),[],!1,null,"438d136e",null);e.a=component.exports},359:function(t,e,n){"use strict";var c,l=n(349),r=n(169),o=n(70),v=Object(o.a)(c||(c=Object(r.a)(["\n  query GetSpaceToMake($locale: I18NLocaleCode) {\n    spaceToMakes(locale: $locale) {\n      data {\n        id\n      }\n      data {\n        attributes {\n          title\n          desc\n          description\n          imgtxt\n          item1\n          item2\n          image {\n            data {\n              attributes {\n                url\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),d={name:"SpaceToMake",data:function(){return{spaceToMakes:[]}},components:{ContactBtn:l.a},apollo:{spaceToMakes:{prefetch:!0,query:v,variables:function(){return{locale:this.$i18n.locale}},fetchPolicy:"no-cache"}}},m=n(40),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"space-to-make-area pt-120 pb-120"},[e("div",{staticClass:"container"},t._l(t.spaceToMakes.data,(function(n){return e("div",{key:n.id,staticClass:"row align-items-center"},[e("div",{staticClass:"col-lg-12 col-md-10"},[e("div",{staticClass:"space-to-make-content"},[e("h3",{staticClass:"title animated wow fadeInDown",attrs:{"data-wow-duration":"4s","data-wow-delay":"0ms"}},[t._v("\n            "+t._s(n.attributes.title)+"\n          ")]),t._v(" "),e("h4",{staticClass:"mb-20 animated wow fadeInDown",staticStyle:{color:"#e25303"},attrs:{"data-wow-duration":"4s","data-wow-delay":"0ms"}},[t._v("\n            "+t._s(n.attributes.imgtxt)+"\n          ")]),t._v(" "),e("p",[t._v("\n            "+t._s(n.attributes.desc)+"\n          ")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6 mb-40"},[e("div",{staticClass:"space-to-make-item mt-30"},[e("a",{attrs:{href:"callto:90 850 532 7671"}},[e("i",{staticClass:"flaticon-workspace"}),t._v(" "),e("span",[t._v(t._s(n.attributes.item1))])])])]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"space-to-make-item mt-30"},[e("nuxt-link",{attrs:{to:t.localePath("/events")}},[e("i",{staticClass:"flaticon-meeting"}),t._v(" "),e("span",[t._v(t._s(n.attributes.item2))])])],1)])]),t._v(" "),e("ContactBtn")],1)])])})),0),t._v(" "),e("div",{staticClass:"shape-pattern"},[e("nuxt-img",{attrs:{loading:"lazy",placeholder:"blur",src:"/assets/images/shape-pattern.png",alt:""}})],1),t._v(" "),e("div",{staticClass:"shape-pattern-2"},[e("nuxt-img",{attrs:{loading:"lazy",placeholder:"blur",format:"webp",src:"/assets/images/we-know-line.png",alt:""}})],1)])}),[],!1,null,"d1307c88",null);e.a=component.exports},363:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c,l=n(169),r=n(70),o=Object(r.a)(c||(c=Object(l.a)(["\n  query GetAllServices($locale: I18NLocaleCode) {\n    services(locale: $locale) {\n      data {\n        id\n      }\n      data {\n        attributes {\n          title\n          description\n          title2\n          title3\n          icon {\n            data {\n              id\n            }\n            data {\n              attributes {\n                name\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])))},367:function(t,e,n){var content=n(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(132).default)("0aa00bb6",content,!0,{sourceMap:!1})},376:function(t,e,n){"use strict";n(367)},377:function(t,e,n){var c=n(131)(!1);c.push([t.i,'.ac[data-v-5ecaa225]{margin-top:10px;padding:10px;background:#fff;box-sizing:border-box}.ac>.ac-q[data-v-5ecaa225]{padding:10px 30px 10px 10px;text-decoration:none;display:block;cursor:pointer;position:relative;margin:0;color:#192437;font-size:16px;font-weight:600;text-transform:uppercase;font-family:"Libel Suit",sans-serif}.ac.is-active .ac-q[data-v-5ecaa225]{color:#222!important}.ac>.ac-q[data-v-5ecaa225]:after{content:"+";text-align:center;width:15px;right:10px;top:50%;transform:translateY(-50%);position:absolute}.ac>.ac-a[data-v-5ecaa225]{overflow:hidden;transition-property:all;transition-timing-function:ease}.ac>.ac-a p[data-v-5ecaa225]{margin:0;padding:10px;color:#545764;font-size:16px;line-height:30px;font-weight:300}.ac.js-enabled>.ac-a[data-v-5ecaa225]{visibility:hidden}.ac.is-active>.ac-a[data-v-5ecaa225]{visibility:visible}.ac.is-active>.ac-q[data-v-5ecaa225]:after{content:"\\2013";color:#222}',""]),t.exports=c},384:function(t,e,n){"use strict";n.r(e);var c,l=n(353),r=n(352),o=n(354),v={name:"UpcomingEventsTwo"},d=n(40),m=Object(d.a)(v,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"upcoming-events-area events-page"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"upcoming-events-item"},[e("div",{staticClass:"item mt-20"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-lg-9"},[e("div",{staticClass:"upcoming-events-content d-block d-md-flex align-items-center"},[e("div",{staticClass:"thumb"},[e("nuxt-img",{attrs:{loading:"lazy",placeholder:"blur",src:"assets/images/events-1.jpg",alt:""}}),t._v(" "),t._m(0)],1),t._v(" "),t._m(1)])]),t._v(" "),e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"events-btn text-left text-lg-right"},[e("nuxt-link",{staticClass:"main-btn main-btn-2",attrs:{to:"single-news.html"}},[t._v("Join event")])],1)])])]),t._v(" "),e("div",{staticClass:"item mt-20"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-lg-9"},[e("div",{staticClass:"upcoming-events-content d-block d-md-flex align-items-center"},[e("div",{staticClass:"thumb"},[e("nuxt-img",{attrs:{loading:"lazy",placeholder:"blur",src:"/assets/images/events-2.jpg",alt:""}}),t._v(" "),t._m(2)],1),t._v(" "),t._m(3)])]),t._v(" "),e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"events-btn text-left text-lg-right"},[e("nuxt-link",{staticClass:"main-btn main-btn-2",attrs:{to:"/single-news"}},[t._v("Join event")])],1)])])]),t._v(" "),e("div",{staticClass:"item mt-20"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-lg-9"},[e("div",{staticClass:"upcoming-events-content d-block d-md-flex align-items-center"},[e("div",{staticClass:"thumb"},[e("nuxt-img",{attrs:{loading:"lazy",placeholder:"blur",src:"/assets/images/events-3.jpg",alt:""}}),t._v(" "),t._m(4)],1),t._v(" "),t._m(5)])]),t._v(" "),e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"events-btn text-left text-lg-right"},[e("nuxt-link",{staticClass:"main-btn main-btn-2",attrs:{to:"/single-news"}},[t._v("Join event")])],1)])])]),t._v(" "),e("div",{staticClass:"item mt-20"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-lg-9"},[e("div",{staticClass:"upcoming-events-content d-block d-md-flex align-items-center"},[e("div",{staticClass:"thumb"},[e("nuxt-img",{attrs:{loading:"lazy",placeholder:"blur",src:"/assets/images/events-4.jpg",alt:""}}),t._v(" "),t._m(6)],1),t._v(" "),t._m(7)])]),t._v(" "),e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"events-btn text-left text-lg-right"},[e("nuxt-link",{staticClass:"main-btn main-btn-2",attrs:{to:"/single-news"}},[t._v("Join event")])],1)])])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"date"},[e("span",[t._v("07 "),e("br"),t._v("\n                        Feb")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content ml-65"},[e("ul",[e("li",[e("i",{staticClass:"fa fa-clock-o"}),t._v(" 12:00 am")]),t._v(" "),e("li",[e("i",{staticClass:"fa fa-user-o"}),t._v(" Admin")])]),t._v(" "),e("h4",{staticClass:"title"},[t._v("The new startup is on the way")]),t._v(" "),e("p",[t._v("\n                      There are many variations of passages of Lorem Ipsum\n                      available, but the majority have suffered in some form\n                      humour.\n                    ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"date"},[e("span",[t._v("07 "),e("br"),t._v("\n                        Feb")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content ml-65"},[e("ul",[e("li",[e("i",{staticClass:"fa fa-clock-o"}),t._v(" 12:00 am")]),t._v(" "),e("li",[e("i",{staticClass:"fa fa-user-o"}),t._v(" Admin")])]),t._v(" "),e("h4",{staticClass:"title"},[t._v("The new startup is on the way")]),t._v(" "),e("p",[t._v("\n                      There are many variations of passages of Lorem Ipsum\n                      available, but the majority have suffered in some form\n                      humour.\n                    ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"date"},[e("span",[t._v("07 "),e("br"),t._v("\n                        Feb")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content ml-65"},[e("ul",[e("li",[e("i",{staticClass:"fa fa-clock-o"}),t._v(" 12:00 am")]),t._v(" "),e("li",[e("i",{staticClass:"fa fa-user-o"}),t._v(" Admin")])]),t._v(" "),e("h4",{staticClass:"title"},[t._v("The new startup is on the way")]),t._v(" "),e("p",[t._v("\n                      There are many variations of passages of Lorem Ipsum\n                      available, but the majority have suffered in some form\n                      humour.\n                    ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"date"},[e("span",[t._v("07 "),e("br"),t._v("\n                        Feb")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content ml-65"},[e("ul",[e("li",[e("i",{staticClass:"fa fa-clock-o"}),t._v(" 12:00 am")]),t._v(" "),e("li",[e("i",{staticClass:"fa fa-user-o"}),t._v(" Admin")])]),t._v(" "),e("h4",{staticClass:"title"},[t._v("The new startup is on the way")]),t._v(" "),e("p",[t._v("\n                      There are many variations of passages of Lorem Ipsum\n                      available, but the majority have suffered in some form\n                      humour.\n                    ")])])}],!1,null,"364fe294",null).exports,f=(n(18),{name:"WeListen",data:function(){return{services:[],activeIndex:null}},methods:{toggleBtn:function(t){this.activeIndex=this.activeIndex===t?null:t}},apollo:{services:{prefetch:!0,query:n(363).a,variables:function(){return{locale:this.$i18n.locale}},fetchPolicy:"no-cache"}},mounted:function(){}}),_=(n(376),Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"we-listen-area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"we-listen-content"},[e("div",[t._l(t.services.data,(function(n){return e("h3",{key:n.id,staticClass:"title"},[t._v("\n              "+t._s(n.attributes.title2)+"\n            ")])})),t._v(" "),e("div",{staticClass:"d-flex",staticStyle:{"margin-top":"-100px"}},t._l(t.services.data,(function(t){return e("div",{key:t.id,staticClass:"ml-20 thumb"},[e("nuxt-img",{attrs:{loading:"lazy",placeholder:"blur",src:"https://strapi.badblli.dev".concat(t.attributes.icon.data.attributes.url),alt:"".concat(t.attributes.icon.data.attributes.name),width:"75",height:"75"}})],1)})),0)],2)])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",[e("div",{staticClass:"faq-accordion"},[e("div",{staticClass:"accordion-container-one"},t._l(t.services.data,(function(n,c){return e("div",{key:c,staticClass:"ac"},[e("h4",{staticClass:"ac-q accordion__title-text",attrs:{tabIndex:"0"},on:{click:function(e){return t.toggleBtn(c)}}},[t._v("\n                  "+t._s(n.attributes.title)+"\n                ")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:c===t.activeIndex,expression:"index === activeIndex"}],staticClass:"ac-a accordion__content"},[e("p",{staticClass:"accordion__content-desc"},[t._v("\n                    "+t._s(n.attributes.description)+"\n                  ")])])])})),0)])])])])])])}),[],!1,null,"5ecaa225",null).exports),h=n(359),C=n(360),x=n(169),w=n(70),y=Object(w.a)(c||(c=Object(x.a)(["\n  query GetServicesBanner($locale: I18NLocaleCode) {\n    servicesBannerConfigs(locale: $locale) {\n      data {\n        id\n      }\n      data {\n        attributes {\n          title\n          slug1\n          slug2\n          banner {\n            data {\n              id\n            }\n            data {\n              attributes {\n                name\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),k={components:{WeListen:_,UpcomingEventsTwo:m,Footer:o.a,SpaceToMake:h.a,WriteMessageThree:C.a,PageHeader:r.a,Nav:l.a},data:function(){return{servicesBannerConfigs:[]}},head:function(){return{title:this.getPageInfo().title}},apollo:{servicesBannerConfigs:{prefetch:!0,query:y,variables:function(){return{locale:this.$i18n.locale}},fetchPolicy:"no-cache"}},methods:{getPageInfo:function(){if(this.servicesBannerConfigs.data&&this.servicesBannerConfigs.data.length>0){var title="";return this.servicesBannerConfigs.data.forEach((function(t){var e=t.attributes;title+=e.title})),{title:title}}return{title:""}}},mounted:function(){this.getPageInfo()}},j=Object(d.a)(k,(function(){var t=this,e=t._self._c;return e("div",t._l(t.servicesBannerConfigs.data,(function(n){return e("div",{key:n.id},[e("head",[e("title",[t._v(t._s(n.attributes.title))])]),t._v(" "),e("Nav"),t._v(" "),e("PageHeader",{attrs:{title:"".concat(n.attributes.title),banner:"".concat(n.attributes.banner.data.attributes.url),slug1:"".concat(n.attributes.slug1),slug2:"".concat(n.attributes.slug2)}}),t._v(" "),e("WeListen"),t._v(" "),e("WriteMessageThree"),t._v(" "),e("Footer")],1)})),0)}),[],!1,null,null,null);e.default=j.exports}}]);