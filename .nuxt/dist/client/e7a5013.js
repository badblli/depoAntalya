(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{352:function(t,e,n){"use strict";var o={name:"ContactBtn",data:function(){return{siteConfigs:[]}},apollo:{siteConfigs:{prefetch:!0,query:n(105).a,variables:function(){return{locale:this.$i18n.locale}},fetchPolicy:"no-cache"}}},l=n(40),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",t._l(t.siteConfigs.data,(function(n){return e("div",{key:n.id},[e("nuxt-link",{staticClass:"main-btn",attrs:{to:t.localePath("/get-in-touch")}},[t._v("\n      "+t._s(n.attributes.contact)+" "),e("i",{staticClass:"flaticon-right-arrow"})])],1)})),0)}),[],!1,null,"19535e96",null);e.a=component.exports},355:function(t,e,n){"use strict";n(18);var o,l=n(169),c=n(70),r=Object(c.a)(o||(o=Object(l.a)(["\n  query GetFooter($locale: I18NLocaleCode) {\n    footerConfigs(locale: $locale) {\n      data {\n        attributes {\n          companyTitle\n          adressTitle\n          adressDescription\n          googleMapUrl\n          copyRightText\n          copyRightLink\n          instagramlink {\n            data {\n              attributes {\n                instagramlink\n              }\n            }\n          }\n          footerLogo {\n            data {\n              attributes {\n                url\n                name\n              }\n            }\n          }\n          adress {\n            data {\n              attributes {\n                address\n              }\n            }\n          }\n\n          phone {\n            data {\n              attributes {\n                phone\n              }\n            }\n          }\n          description {\n            data {\n              attributes {\n                description\n              }\n            }\n          }\n          nav_configs {\n            data {\n              attributes {\n                navTitle\n                slug\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),d={data:function(){return{isPopupOpen:!1,message:"",phoneNumber:"905424648229",sendTitle:"Send Message",placeholder:"Merhaba bilgi almak istiyorum"}},watch:{"$i18n.locale":function(t){this.updateLocaleTexts(t)}},mounted:function(){this.updateLocaleTexts(this.$i18n.locale)},methods:{updateLocaleTexts:function(t){this.sendTitle="tr"===t?"Mesaj Gönder":"en"===t?"Send Message":"ru"===t?"Отправить сообщение":"de"===t?"Nachricht senden":"uk"===t?"Надіслати повідомлення":"Send Message",this.placeholder="tr"===t?"Merhaba bilgi almak istiyorum":"en"===t?"Hi, I want to get information":"ru"===t?"Здравствуйте, я хочу получить информацию":"de"===t?"Hallo, ich möchte Informationen erhalten":"uk"===t?"Здравствуйте, я хочу получить информацию":"Hi, I want to get information"},togglePopup:function(){this.isPopupOpen=!this.isPopupOpen},sendWhatsAppMessage:function(){this.$i18n.locale;if(this.message=this.placeholder,""!==this.message.trim()){var t="https://wa.me/".concat(this.phoneNumber,"?text=").concat(encodeURIComponent(this.message));window.open(t,"_blank")}else alert("Lütfen bir mesaj yazın.")}}},f=(n(370),n(40)),v={name:"Footer",components:{WhatsappBtn:Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"whatsapp-container"}},[e("i",{staticClass:"fa fa-whatsapp",attrs:{id:"whatsapp-button"},on:{click:t.togglePopup}}),t._v(" "),e("transition",{attrs:{name:"fade-slide"}},[t.isPopupOpen?e("div",{attrs:{id:"whatsapp-popup"}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{name:"#",id:"#",cols:"8",rows:"4",placeholder:t.placeholder},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),e("button",{staticClass:"main-btn main-btn-2",on:{click:t.sendWhatsAppMessage}},[t._v("\n        "+t._s(t.sendTitle)+"\n      ")])]):t._e()])],1)}),[],!1,null,"2659b8b6",null).exports},data:function(){return{scrollBtn:!1,footerConfigs:[]}},apollo:{footerConfigs:{prefetch:!0,query:r,variables:function(){return{locale:this.$i18n.locale}},fetchPolicy:"no-cache"}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},scrollTop:function(){window.scrollTo(0,0)}}},h=(n(372),Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"footer-area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-md-6 col-sm-8"},t._l(t.footerConfigs.data,(function(n){return e("div",{key:n.id,staticClass:"footer-about mt-30"},[e("div",{staticClass:"logo"},[e("nuxt-link",{attrs:{to:t.localePath("/index")}},[e("nuxt-img",{attrs:{loading:"lazy",placeholder:"blur",format:"webp",src:"https://strapi.badblli.dev".concat(n.attributes.footerLogo.data.attributes.url),alt:"".concat(n.attributes.footerLogo.data.attributes.name)}})],1)],1),t._v(" "),e("p",[t._v("\n              "+t._s(n.attributes.description.data.attributes.description)+"\n            ")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"callto:".concat(n.attributes.phone.data.attributes.phone)}},[e("i",{staticClass:"flaticon-phone-call"}),t._v(" +"+t._s(n.attributes.phone.data.attributes.phone))])]),t._v(" "),e("li",[e("a",{attrs:{href:"".concat(n.attributes.instagramlink.data.attributes.instagramlink),target:"_blank"}},[e("i",{staticClass:"fa fa-instagram"}),t._v(" depoantalya")])])])])})),0),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-6 col-sm-6"},t._l(t.footerConfigs.data,(function(n){return e("div",{key:n.id,staticClass:"footer-list mt-30"},[e("h4",{staticClass:"title"},[t._v("\n              "+t._s(n.attributes.companyTitle)+"\n            ")]),t._v(" "),e("ul",t._l(n.attributes.nav_configs.data,(function(n){return e("li",{key:n.id},[e("nuxt-link",{attrs:{to:t.localePath(n.attributes.slug)}},[t._v(t._s(n.attributes.navTitle))])],1)})),0)])})),0),t._v(" "),e("div",{staticClass:"col-lg-3 col-md-6"},t._l(t.footerConfigs.data,(function(n){return e("div",{key:n.id,staticClass:"footer-address mt-30"},[e("h3",{staticClass:"title"},[t._v("\n              "+t._s(n.attributes.adressTitle)+"\n            ")]),t._v(" "),e("p",[e("i",{staticClass:"fa fa-map-marker"}),t._v("\n              "+t._s(n.attributes.adressDescription)+"\n            ")]),t._v(" "),e("iframe",{staticStyle:{border:"0"},attrs:{src:"".concat(n.attributes.googleMapUrl),width:"600",height:"450",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})])})),0)])]),t._v(" "),e("div",{staticClass:"footer-copyright-area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},t._l(t.footerConfigs.data,(function(n){return e("div",{key:n.id,staticClass:"footer-copyright d-block d-md-flex justify-content-center align-items-center"},[e("p",[t._v("\n                © Copyright "+t._s((new Date).getFullYear())+" by\n                "),e("span",[e("ul",[e("li",[e("a",{attrs:{href:"".concat(n.attributes.copyRightLink),target:"_blank"}},[t._v(t._s(n.attributes.copyRightText))])])])])])])})),0)])])]),t._v(" "),e("div",{staticClass:"footer-pattern"},[e("nuxt-img",{attrs:{loading:"lazy",placeholder:"blur",format:"webp",src:"/assets/images/footer-pattern.png",alt:""}})],1)]),t._v(" "),e("div",{staticClass:"go-top-area"},[e("div",{staticClass:"go-top-wrap"},[e("div",{staticClass:"go-top-btn-wrap"},[e("div",{class:"go-top go-top-btn ".concat(t.scrollBtn?"active":""),on:{click:t.scrollTop}},[e("i",{staticClass:"fa fa-angle-double-up"}),t._v(" "),e("i",{staticClass:"fa fa-angle-double-up"})])])])]),t._v(" "),e("WhatsappBtn",{staticClass:"whatsapp-btn",class:{"shift-left":t.scrollBtn}})],1)}),[],!1,null,"abbc21e0",null));e.a=h.exports},356:function(t,e,n){"use strict";n(18),n(85),n(16),n(55);var o,l=n(105),c=n(169),r=n(70),d=Object(r.a)(o||(o=Object(c.a)(["\n  query GetAllNavConfig($locale: I18NLocaleCode) {\n    navConfigs(locale: $locale) {\n      data {\n        id\n      }\n      data {\n        attributes {\n          navTitle\n          slug\n        }\n      }\n    }\n  }\n"]))),f={name:"Nav",data:function(t){var e=t.$i18n;return{sticky:!1,mobileToggle:!1,i18NLocales:[],navConfigs:[],siteConfigs:[],localeName:e.locales.find((function(t){return t.code===e.locale})).name}},components:{ContactBtn:n(352).a},apollo:{navConfigs:{prefetch:!0,query:d,variables:function(){return{locale:this.$i18n.locale}},fetchPolicy:"no-cache"},siteConfigs:{prefetch:!0,query:l.a,variables:function(){return{locale:this.$i18n.locale}},fetchPolicy:"no-cache"}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}},methods:{handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)},getCityDistrict:function(address){var t=address.split(",");return t[t.length-1].trim()}}},v=(n(368),n(40)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"header-area"},[e("div",{staticClass:"header-top-area"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 pr-0"},t._l(t.siteConfigs.data,(function(n){return e("div",{key:n.id,staticClass:"header-top",staticStyle:{height:"50px"}},[e("ul",[e("li",[e("a",{attrs:{href:"tel:".concat(n.attributes.phone)}},[e("i",{staticClass:"flaticon-phone-call"}),t._v(" +"+t._s(n.attributes.phone)+"\n")])]),t._v(" "),e("li",[e("a",{attrs:{href:"".concat(n.attributes.instagramlink),target:"_blank"}},[e("i",{staticClass:"fa fa-instagram"}),t._v(t._s(n.attributes.instagram)+"\n                    ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"".concat(n.attributes.googleMapUrl),target:"_blank"}},[e("i",{staticClass:"flaticon-placeholder"}),t._v(" "),e("span",{staticClass:"desktop-address"},[t._v(t._s(n.attributes.address))]),t._v(" "),e("span",{staticClass:"mobile-address"},[t._v(t._s(t.getCityDistrict(n.attributes.address)))])])])]),t._v(" "),e("div",{staticClass:"d-none d-sm-block footer-list"},[e("ContactBtn")],1)])})),0)])])]),t._v(" "),e("div",{class:"main-header ".concat(t.sticky?"sticky":"")},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"main-header-item d-flex justify-content-between align-items-center w-100"},[e("div",{staticClass:"main-header-menus w-100 d-flex"},[t._l(t.siteConfigs.data,(function(n){return e("div",{key:n.id,staticClass:"header-logo"},[e("nuxt-link",{attrs:{to:t.localePath("/")}},[e("nuxt-img",{staticStyle:{height:"auto","z-index":"9999999999999999"},attrs:{loading:"lazy",placeholder:"blur",src:"https://strapi.badblli.dev".concat(n.attributes.logo.data.attributes.url),alt:"".concat(n.attributes.logo.data.attributes.name),width:"200px",height:"150px"}})],1)],1)})),t._v(" "),e("div",{staticClass:"header-menu w-100 d-none d-lg-flex justify-content-between"},[e("ul",t._l(t.navConfigs.data,(function(n){return e("li",{key:n.id,staticClass:"wow fadeInLeft animated title",attrs:{"data-wow-duration":"2s","data-wow-delay":"5s"}},[e("nuxt-link",{attrs:{to:t.localePath(n.attributes.slug),"exact-active-class":"active","inactive-class":""}},[t._v(t._s(n.attributes.navTitle))])],1)})),0),t._v(" "),e("ul",{staticClass:"mr-5"},[e("li",[e("a",[e("nuxt-img",{attrs:{loading:"lazy",placeholder:"blur",src:"/assets/images/country/".concat(t.$i18n.locale,".png"),alt:"".concat(t.localeName)}}),t._v("\n                          "+t._s(t.localeName)+" "),e("i",{staticClass:"fa fa-angle-down"})],1),t._v(" "),e("ul",{staticClass:"sub-menu"},t._l(t.availableLocales,(function(n){return t.availableLocales?e("li",{key:n.code},[e("nuxt-link",{attrs:{to:t.switchLocalePath(n.code)}},[e("nuxt-img",{attrs:{loading:"lazy",placeholder:"blur",src:"/assets/images/country/".concat(n.code,".png"),alt:"".concat(t.localeName)}}),t._v("\n                              "+t._s(n.name))],1)],1):t._e()})),0)])])])],2),t._v(" "),e("div",{staticClass:"header-social d-flex align-items-center"},[e("ul",{staticClass:"d-none d-lg-block"}),t._v(" "),e("div",{staticClass:"toggle-btn ml-30 canvas_open d-lg-none d-block",on:{click:function(e){t.mobileToggle=!t.mobileToggle}}},[e("i",{staticClass:"fa fa-bars"})])])])])])])])]),t._v(" "),e("div",{class:"off_canvars_overlay ".concat(t.mobileToggle?"active":"")}),t._v(" "),e("div",{staticClass:"offcanvas_menu"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{class:"offcanvas_menu_wrapper ".concat(t.mobileToggle?"active":"")},[e("div",{staticClass:"canvas_close"},[e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.mobileToggle=!t.mobileToggle}}},[e("i",{staticClass:"fa fa-times"})])]),t._v(" "),e("div",{staticClass:"offcanvas-social"},[e("div",{staticClass:"header-logo"},[e("nuxt-link",{attrs:{to:t.localePath("/")}},[e("nuxt-img",{staticStyle:{height:"auto","z-index":"9999999999999999"},attrs:{loading:"lazy",placeholder:"blur",src:"/assets/images/logo_small.svg",alt:"logo",width:"200px",height:"150px"}})],1)],1)]),t._v(" "),e("div",{staticClass:"text-left",attrs:{id:"menu"}},[e("ul",{staticClass:"offcanvas_main_menu"},t._l(t.navConfigs.data,(function(n){return e("li",{key:n.id},[e("nuxt-link",{attrs:{to:t.localePath(n.attributes.slug),"exact-active-class":"active","inactive-class":""}},[t._v(t._s(n.attributes.navTitle))])],1)})),0)]),t._v(" "),e("div",{staticClass:"offcanvas_footer"},[e("div",{staticClass:"row mb-20 justify-content-center"},[e("ul",t._l(t.availableLocales,(function(n){return e("nuxt-link",{key:n.code,attrs:{to:t.switchLocalePath(n.code)}},[e("nuxt-img",{staticClass:"mx-3",attrs:{loading:"lazy",placeholder:"blur",src:"/assets/images/country/".concat(n.code,".png"),alt:"".concat(t.localeName),width:"30px",height:"20px"}})],1)})),1)]),t._v(" "),e("div",{staticClass:"row d-flex flex-row mr-0 justify-content-center"},t._l(t.siteConfigs.data,(function(n){return e("span",{key:n.id},[e("a",{staticClass:"aicon",attrs:{href:"tel:".concat(n.attributes.phone)}},[e("i",{staticClass:"flaticon-phone-call"})]),t._v(" "),e("a",{staticClass:"aicon",attrs:{href:"".concat(n.attributes.instagramlink),target:"_blank"}},[e("i",{staticClass:"fa fa-instagram"})])])})),0)])])])])])])])}),[],!1,null,"7bcb9060",null);e.a=component.exports},363:function(t,e,n){var content=n(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(132).default)("fbb88f64",content,!0,{sourceMap:!1})},364:function(t,e,n){var content=n(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(132).default)("4c27a6c5",content,!0,{sourceMap:!1})},365:function(t,e,n){var content=n(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(132).default)("644c5647",content,!0,{sourceMap:!1})},368:function(t,e,n){"use strict";n(363)},369:function(t,e,n){var o=n(131)(!1);o.push([t.i,".aicon[data-v-7bcb9060]{height:46px;width:46px;text-align:center;line-height:46px;border-radius:50%;background:#fbf0ee;font-size:14px;color:#817a78;margin-left:5px;transition:all .3s ease-out 0s}@media (min-width:768px){.desktop-address[data-v-7bcb9060]{display:none}.mobile-address[data-v-7bcb9060]{display:inline}}@media (max-width:767px){.desktop-address[data-v-7bcb9060]{display:inline}.mobile-address[data-v-7bcb9060]{display:none}}",""]),t.exports=o},370:function(t,e,n){"use strict";n(364)},371:function(t,e,n){var o=n(131)(!1);o.push([t.i,".whatsapp-container[data-v-2659b8b6]{transition:all .3s ease-out}#whatsapp-container[data-v-2659b8b6]{position:fixed;bottom:19px;right:20px;z-index:1000}#whatsapp-button[data-v-2659b8b6]{width:40px;height:40px;background-color:#25d366;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:24px;cursor:pointer;box-shadow:0 4px 8px rgba(0,0,0,.2);transition:transform .2s ease}#whatsapp-button[data-v-2659b8b6]:hover{transform:scale(1.1)}#whatsapp-popup[data-v-2659b8b6]{display:flex;flex-direction:column;position:absolute;bottom:60px;right:0;background-color:#fff;padding:10px;box-shadow:0 4px 8px rgba(0,0,0,.2);width:250px}#whatsapp-popup textarea[data-v-2659b8b6]{width:100%;padding:8px;margin-bottom:10px;border:none;background-color:#fbf0ee;resize:none;font-family:inherit;font-size:14px;color:#817a78}#whatsapp-popup button[data-v-2659b8b6]{background-color:#25d366;color:#fff;border:none;cursor:pointer;transition:background-color .2s ease}#whatsapp-popup button[data-v-2659b8b6]:hover{background-color:#1ebc57}.fade-slide-enter-active[data-v-2659b8b6],.fade-slide-leave-active[data-v-2659b8b6]{transition:all .3s ease}.fade-slide-enter-from[data-v-2659b8b6],.fade-slide-leave-to[data-v-2659b8b6]{opacity:0;transform:translateY(20px)}",""]),t.exports=o},372:function(t,e,n){"use strict";n(365)},373:function(t,e,n){var o=n(131)(!1);o.push([t.i,".whatsapp-btn[data-v-abbc21e0]{transform:translateX(0);transition:transform .3s ease-out}.shift-left[data-v-abbc21e0]{transform:translateX(-45px);transition:transform .3s ease}",""]),t.exports=o}}]);