(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{337:function(t,e,n){var content=n(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(124).default)("ce469284",content,!0,{sourceMap:!1})},338:function(t,e,n){"use strict";var o={name:"PageHeader",data:function(){return{}},props:{title:{type:String},banner:{type:String},slug1:{type:String},slug2:{type:String}}},r=n(40),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"page-title-area bg_cover",style:{"background-image":"url(".concat(t.banner?"https://strapi.badblli.dev"+t.banner:"https://img.freepik.com/free-vector/abstract-orange-background-with-lines-halftone-effect_1017-32107.jpg?w=1060&t=st=1680692252~exp=1680692852~hmac=cc4535da3ff21392ce61635f278c710c12c8704cc90d2b6419f6ca702928500d",")")}},[t._v("\n    >\n    "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"page-title-content"},[e("h3",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("nuxt-link",{attrs:{to:t.localePath("/")}},[t._v(t._s(t.slug1))])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n                  "+t._s(t.slug2)+"\n                ")])])])])])])])])])}),[],!1,null,"438d136e",null);e.a=component.exports},339:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o,r=n(162),l=n(69),c=Object(l.a)(o||(o=Object(r.a)(["\n  query GetContact($locale: I18NLocaleCode) {\n    contacts(locale: $locale) {\n      data {\n        id\n      }\n      data {\n        attributes {\n          title\n          name\n          email\n          phoneTitle\n          subject\n          message\n          sendButton\n          unit\n          title2\n          description\n          phone {\n            data {\n              attributes {\n                phone\n              }\n            }\n          }\n          depo_configs {\n            data {\n              id\n            }\n            data {\n              attributes {\n                title\n                size\n                metrekare\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])))},341:function(t,e,n){"use strict";n(337)},342:function(t,e,n){var o=n(123)(!1);o.push([t.i,".disabled[data-v-30f1a3e6]{opacity:.5;pointer-events:none}.modal[data-v-30f1a3e6]{position:fixed;top:0;left:0;z-index:1e+30;display:flex;justify-content:center;align-items:center;width:100%;height:100%;overflow:hidden;outline:0}",""]),t.exports=o},345:function(t,e,n){"use strict";n(18);var o,r=n(162),l=n(5),c=(n(25),n(339)),d=n(102),m=n(69),v={name:"WriteMessageThree",data:function(){return{contacts:[],siteConfigs:[],formLoading:!1,disabled:!1,showModal:!1,formError:null,recaptcha:!1,formMessage:"",formData:{name:"",email:"",phone:"",subject:"",message:""},recaptchaVerified:!1}},methods:{click:function(){this.showModal=!0},submitForm:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$recaptcha.getResponse();case 3:if(n=e.sent,console.log("ReCaptcha token:",n),n){e.next=10;break}return t.formError="Please complete the reCAPTCHA.",console.log("ReCaptcha token:",n),t.recaptcha=!0,e.abrupt("return");case 10:return t.formLoading=!0,t.formError=null,l=Object(m.a)(o||(o=Object(r.a)(["\n          mutation sendEmail(\n            $name: String!\n            $email: String!\n            $phone: String\n            $subject: String\n            $message: String\n          ) {\n            createSendEmail(\n              data: {\n                name: $name\n                email: $email\n                phone: $phone\n                subject: $subject\n                message: $message\n              }\n            ) {\n              data {\n                attributes {\n                  name\n                  email\n                  phone\n                  subject\n                  message\n                }\n              }\n            }\n          }\n        "]))),e.next=15,t.$apollo.mutate({mutation:l,variables:{name:t.formData.name,email:t.formData.email,phone:t.formData.phone,subject:t.formData.subject,message:t.formData.message}});case 15:t.showModal=!0,e.next=27;break;case 18:return e.prev=18,e.t0=e.catch(0),t.recaptchaVerified=!1,t.recaptcha=!0,t.formError="Please complete the reCAPTCHA.",e.next=25,t.$recaptcha.reset();case 25:console.error(e.t0),t.showModal=!1;case 27:return e.prev=27,t.formLoading=!1,e.finish(27);case 30:case"end":return e.stop()}}),e,null,[[0,18,27,30]])})))()},resetForm:function(){this.formData.name="",this.formData.email="",this.formData.phone="",this.formData.subject="",this.formData.message="",this.$recaptcha.reset()},closeModal:function(){this.showModal=!1,this.recaptcha=!1,this.$recaptcha.reset(),this.resetForm()}},apollo:{contacts:{prefetch:!0,query:c.a,variables:function(){return{locale:this.$i18n.locale}},fetchPolicy:"no-cache"},siteConfigs:{prefetch:!0,query:d.a,variables:function(){return{locale:this.$i18n.locale}},fetchPolicy:"no-cache"}}},f=(n(341),n(40)),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"write-massage-area pb-120"},[t.showModal?e("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog"}},t._l(t.siteConfigs.data,(function(n){return e("div",{key:n.id,staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.closeModal}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),e("div",{staticClass:"modal-body"},[e("p",[t._v(" "+t._s(n.attributes.successMessage)+" ")])]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.closeModal}},[t._v("✔️")])])])])})),0):t._e(),t._v(" "),t.recaptcha?e("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog"}},t._l(t.siteConfigs.data,(function(n){return e("div",{key:n.id,staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.closeModal}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),e("div",{staticClass:"modal-body"},[e("p",[t._v(" "+t._s(n.attributes.errorMessage)+" ")])]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.closeModal}},[t._v("✔️")])])])])})),0):t._e(),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},t._l(t.contacts.data,(function(n){return e("div",{key:n.id,staticClass:"write-massage-content"},[e("div",{staticClass:"write-massage-title"},[e("h3",{staticClass:"title"},[t._v(t._s(n.attributes.title))])]),t._v(" "),e("div",{staticClass:"write-massage-input"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"input-box mt-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],attrs:{type:"text",required:"",placeholder:"".concat(n.attributes.name)},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"input-box mt-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],attrs:{type:"email",placeholder:"".concat(n.attributes.email)},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"input-box mt-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phone,expression:"formData.phone"}],attrs:{type:"text",required:"",placeholder:"".concat(n.attributes.phoneTitle)},domProps:{value:t.formData.phone},on:{input:function(e){e.target.composing||t.$set(t.formData,"phone",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"input-box mt-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.subject,expression:"formData.subject"}],attrs:{type:"text",placeholder:"".concat(n.attributes.subject)},domProps:{value:t.formData.subject},on:{input:function(e){e.target.composing||t.$set(t.formData,"subject",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"input-box mt-10"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.message,expression:"formData.message"}],attrs:{name:"message",id:"#",cols:"30",rows:"10",placeholder:"".concat(n.attributes.message)},domProps:{value:t.formData.message},on:{input:function(e){e.target.composing||t.$set(t.formData,"message",e.target.value)}}}),t._v(" "),e("recaptcha",{ref:"recaptcha",refInFor:!0}),t._v(" "),e("button",{staticClass:"main-btn main-btn-2",class:{disabled:t.disabled},attrs:{type:"submit"}},[t._v("\n                       "+t._s(n.attributes.sendButton)+"\n                     ")])],1)])])])])])})),0),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"contact-info-area"},[e("div",{staticClass:"contact-info"},t._l(t.siteConfigs.data,(function(n){return e("div",{key:n.id,staticClass:"contact-info-content"},[e("div",{staticClass:"row pt-110"},[e("div",{staticClass:"col-12 col-md-6"},[e("ul",[e("li",[e("nuxt-img",{attrs:{loading:"lazy",placeholder:"blur",src:"/assets/images/icon/icon-1.png",alt:""}}),t._v("\n                       "+t._s(n.attributes.address)+"\n                     ")],1),t._v(" "),e("li",[e("nuxt-img",{attrs:{loading:"lazy",placeholder:"blur",src:"/assets/images/icon/icon-3.png",alt:""}}),t._v("+\n                       "+t._s(n.attributes.phone)+"\n                     ")],1),t._v(" "),e("li",[e("nuxt-img",{attrs:{loading:"lazy",placeholder:"blur",src:"/assets/images/icon/icon-4.png",alt:""}}),t._v("\n                       7/24\n                     ")],1)])]),t._v(" "),e("div",{staticClass:"col-12 col-md-6"},[e("iframe",{staticStyle:{border:"0"},attrs:{src:"".concat(n.attributes.googleIframeUrl),allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})])])])})),0)])])])]),t._v(" "),e("div")])}),[],!1,null,"30f1a3e6",null);e.a=component.exports},346:function(t,e,n){"use strict";var o,r=n(340),l=n(162),c=n(69),d=Object(c.a)(o||(o=Object(l.a)(["\n  query GetSpaceToMake($locale: I18NLocaleCode) {\n    spaceToMakes(locale: $locale) {\n      data {\n        id\n      }\n      data {\n        attributes {\n          title\n          desc\n          description\n          imgtxt\n          item1\n          item2\n          image {\n            data {\n              attributes {\n                url\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),m={name:"SpaceToMake",data:function(){return{spaceToMakes:[]}},components:{ContactBtn:r.a},apollo:{spaceToMakes:{prefetch:!0,query:d,variables:function(){return{locale:this.$i18n.locale}},fetchPolicy:"no-cache"}}},v=n(40),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"space-to-make-area pt-120 pb-120"},[e("div",{staticClass:"container"},t._l(t.spaceToMakes.data,(function(n){return e("div",{key:n.id,staticClass:"row align-items-center"},[e("div",{staticClass:"col-lg-12 col-md-10"},[e("div",{staticClass:"space-to-make-content"},[e("h3",{staticClass:"title animated wow fadeInDown",attrs:{"data-wow-duration":"4s","data-wow-delay":"0ms"}},[t._v("\n            "+t._s(n.attributes.title)+"\n          ")]),t._v(" "),e("h4",{staticClass:"mb-20 animated wow fadeInDown",staticStyle:{color:"#e25303"},attrs:{"data-wow-duration":"4s","data-wow-delay":"0ms"}},[t._v("\n            "+t._s(n.attributes.imgtxt)+"\n          ")]),t._v(" "),e("p",[t._v("\n            "+t._s(n.attributes.desc)+"\n          ")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6 mb-40"},[e("div",{staticClass:"space-to-make-item mt-30"},[e("a",{attrs:{href:"callto:90 850 532 7671"}},[e("i",{staticClass:"flaticon-workspace"}),t._v(" "),e("span",[t._v(t._s(n.attributes.item1))])])])]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"space-to-make-item mt-30"},[e("nuxt-link",{attrs:{to:t.localePath("/events")}},[e("i",{staticClass:"flaticon-meeting"}),t._v(" "),e("span",[t._v(t._s(n.attributes.item2))])])],1)])]),t._v(" "),e("ContactBtn")],1)])])})),0),t._v(" "),e("div",{staticClass:"shape-pattern"},[e("nuxt-img",{attrs:{loading:"lazy",placeholder:"blur",src:"/assets/images/shape-pattern.png",alt:""}})],1),t._v(" "),e("div",{staticClass:"shape-pattern-2"},[e("nuxt-img",{attrs:{loading:"lazy",placeholder:"blur",format:"webp",src:"/assets/images/we-know-line.png",alt:""}})],1)])}),[],!1,null,"d1307c88",null);e.a=component.exports},379:function(t,e,n){"use strict";n.r(e);var o,r=n(344),l=n(338),c=n(346),d=n(345),m=n(343),v=n(162),f=n(69),h=Object(f.a)(o||(o=Object(v.a)(["\n  query GetAboutBanner($locale: I18NLocaleCode) {\n    aboutBannerConfigs(locale: $locale) {\n      data {\n        id\n      }\n      data {\n        attributes {\n          title\n          slug1\n          slug2\n          banner {\n            data {\n              id\n            }\n            data {\n              attributes {\n                name\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),C={components:{Footer:m.a,WriteMessageThree:d.a,SpaceToMake:c.a,PageHeader:l.a,Nav:r.a},head:function(){return{title:this.getPageInfo().title}},data:function(){return{aboutBannerConfigs:[]}},apollo:{aboutBannerConfigs:{prefetch:!0,query:h,variables:function(){return{locale:this.$i18n.locale}},fetchPolicy:"cache-first"}},methods:{getPageInfo:function(){if(this.aboutBannerConfigs.data&&this.aboutBannerConfigs.data.length>0){var title="";return this.aboutBannerConfigs.data.forEach((function(t){var e=t.attributes;title+=e.title})),{title:title}}return{title:""}}},mounted:function(){this.getPageInfo()}},_=n(40),component=Object(_.a)(C,(function(){var t=this,e=t._self._c;return e("div",t._l(t.aboutBannerConfigs.data,(function(n){return e("div",{key:n.id},[e("Nav"),t._v(" "),e("PageHeader",{attrs:{title:"".concat(n.attributes.title),banner:"".concat(n.attributes.banner.data.attributes.url),slug1:"".concat(n.attributes.slug1),slug2:"".concat(n.attributes.slug2)}}),t._v(" "),e("SpaceToMake"),t._v(" "),e("WriteMessageThree"),t._v(" "),e("Footer")],1)})),0)}),[],!1,null,null,null);e.default=component.exports}}]);