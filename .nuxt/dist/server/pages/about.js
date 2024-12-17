exports.ids = [1];
exports.modules = {

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=45e231d8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', _vm._l(_vm.aboutBannerConfigs.data, function (aboutBannerConfigs) {
    return _vm._ssrNode("<div>", "</div>", [_c('Nav'), _vm._ssrNode(" "), _c('PageHeader', {
      attrs: {
        "title": `${aboutBannerConfigs.attributes.title}`,
        "banner": `${aboutBannerConfigs.attributes.banner.data.attributes.url}`,
        "slug1": `${aboutBannerConfigs.attributes.slug1}`,
        "slug2": `${aboutBannerConfigs.attributes.slug2}`
      }
    }), _vm._ssrNode(" "), _c('SpaceToMake'), _vm._ssrNode(" "), _c('WriteMessageThree'), _vm._ssrNode(" "), _c('Footer')], 2);
  }), 0);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=45e231d8&

// EXTERNAL MODULE: ./components/Nav.vue + 5 modules
var Nav = __webpack_require__(85);

// EXTERNAL MODULE: ./components/PageHeader.vue + 4 modules
var PageHeader = __webpack_require__(87);

// EXTERNAL MODULE: ./components/SpaceToMake.vue + 5 modules
var SpaceToMake = __webpack_require__(92);

// EXTERNAL MODULE: ./components/WriteMessageThree.vue + 4 modules
var WriteMessageThree = __webpack_require__(91);

// EXTERNAL MODULE: ./components/Footer.vue + 10 modules
var Footer = __webpack_require__(84);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(24);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./graphql/GetAboutBanner.js

const GetAboutBanner = external_graphql_tag_default.a`
  query GetAboutBanner($locale: I18NLocaleCode) {
    aboutBannerConfigs(locale: $locale) {
      data {
        id
      }
      data {
        attributes {
          title
          slug1
          slug2
          banner {
            data {
              id
            }
            data {
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`;
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js&







// import CompanyLogo from "../components/CompanyLogo";
// import ChangingArea from "../components/ChangingArea";
// import Testimonial from "../components/Testimonial";
// import JoinCommunity from "../components/JoinCommunity";
// import GetToKnow from "../components/GetToKnow";
// import Team from "../components/Team";
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  components: {
    Footer: Footer["a" /* default */],
    WriteMessageThree: WriteMessageThree["a" /* default */],
    // CompanyLogo,
    // Team,
    // JoinCommunity,
    // Testimonial,
    // ChangingArea,
    // GetToKnow,
    SpaceToMake: SpaceToMake["a" /* default */],
    PageHeader: PageHeader["a" /* default */],
    Nav: Nav["a" /* default */]
  },
  head() {
    return {
      title: this.getPageInfo().title
    };
  },
  data() {
    return {
      aboutBannerConfigs: []
    };
  },
  apollo: {
    aboutBannerConfigs: {
      prefetch: true,
      query: GetAboutBanner,
      variables() {
        return {
          locale: this.$i18n.locale
        };
      },
      fetchPolicy: "cache-first"
    }
  },
  methods: {
    getPageInfo() {
      if (this.aboutBannerConfigs.data && this.aboutBannerConfigs.data.length > 0) {
        let title = "";
        this.aboutBannerConfigs.data.forEach(item => {
          const config = item.attributes;
          title += config.title;
        });
        return {
          title
        };
      }
      return {
        title: ""
      };
    }
  },
  mounted() {
    this.getPageInfo();
  }
});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/about.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2deb8af9"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(17).default
module.exports.__inject__ = function (context) {
  add("fbb88f64", content, true, context)
};

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(17).default
module.exports.__inject__ = function (context) {
  add("4c27a6c5", content, true, context)
};

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(17).default
module.exports.__inject__ = function (context) {
  add("644c5647", content, true, context)
};

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactBtn.vue?vue&type=template&id=19535e96&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', _vm._l(_vm.siteConfigs.data, function (siteConfigs) {
    return _vm._ssrNode("<div data-v-19535e96>", "</div>", [_c('nuxt-link', {
      staticClass: "main-btn",
      attrs: {
        "to": _vm.localePath('/get-in-touch')
      }
    }, [_vm._v("\n      " + _vm._s(siteConfigs.attributes.contact) + " "), _c('i', {
      staticClass: "flaticon-right-arrow"
    })])], 1);
  }), 0);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ContactBtn.vue?vue&type=template&id=19535e96&scoped=true&

// EXTERNAL MODULE: ./graphql/GetAllSiteConfig.js
var GetAllSiteConfig = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactBtn.vue?vue&type=script&lang=js&

/* harmony default export */ var ContactBtnvue_type_script_lang_js_ = ({
  name: "ContactBtn",
  data() {
    return {
      siteConfigs: []
    };
  },
  apollo: {
    siteConfigs: {
      prefetch: true,
      query: GetAllSiteConfig["a" /* GetAllSiteConfig */],
      variables() {
        return {
          locale: this.$i18n.locale
        };
      },
      fetchPolicy: "no-cache"
    }
  }
});
// CONCATENATED MODULE: ./components/ContactBtn.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ContactBtnvue_type_script_lang_js_ = (ContactBtnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/ContactBtn.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ContactBtnvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "19535e96",
  "eaedd274"
  
)

/* harmony default export */ var ContactBtn = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_7bcb9060_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_7bcb9060_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_7bcb9060_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_7bcb9060_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_7bcb9060_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(16);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".aicon[data-v-7bcb9060]{height:46px;width:46px;text-align:center;line-height:46px;border-radius:50%;background:#fbf0ee;font-size:14px;color:#817a78;margin-left:5px;transition:all .3s ease-out 0s}@media (min-width:768px){.desktop-address[data-v-7bcb9060]{display:none}.mobile-address[data-v-7bcb9060]{display:inline}}@media (max-width:767px){.desktop-address[data-v-7bcb9060]{display:inline}.mobile-address[data-v-7bcb9060]{display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsappBtn_vue_vue_type_style_index_0_id_2659b8b6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsappBtn_vue_vue_type_style_index_0_id_2659b8b6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsappBtn_vue_vue_type_style_index_0_id_2659b8b6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsappBtn_vue_vue_type_style_index_0_id_2659b8b6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsappBtn_vue_vue_type_style_index_0_id_2659b8b6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(16);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".whatsapp-container[data-v-2659b8b6]{transition:all .3s ease-out}#whatsapp-container[data-v-2659b8b6]{position:fixed;bottom:19px;right:20px;z-index:1000}#whatsapp-button[data-v-2659b8b6]{width:40px;height:40px;background-color:#25d366;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:24px;cursor:pointer;box-shadow:0 4px 8px rgba(0,0,0,.2);transition:transform .2s ease}#whatsapp-button[data-v-2659b8b6]:hover{transform:scale(1.1)}#whatsapp-popup[data-v-2659b8b6]{display:flex;flex-direction:column;position:absolute;bottom:60px;right:0;background-color:#fff;padding:10px;box-shadow:0 4px 8px rgba(0,0,0,.2);width:250px}#whatsapp-popup textarea[data-v-2659b8b6]{width:100%;padding:8px;margin-bottom:10px;border:none;background-color:#fbf0ee;resize:none;font-family:inherit;font-size:14px;color:#817a78}#whatsapp-popup button[data-v-2659b8b6]{background-color:#25d366;color:#fff;border:none;cursor:pointer;transition:background-color .2s ease}#whatsapp-popup button[data-v-2659b8b6]:hover{background-color:#1ebc57}.fade-slide-enter-active[data-v-2659b8b6],.fade-slide-leave-active[data-v-2659b8b6]{transition:all .3s ease}.fade-slide-enter-from[data-v-2659b8b6],.fade-slide-leave-to[data-v-2659b8b6]{opacity:0;transform:translateY(20px)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_abbc21e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_abbc21e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_abbc21e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_abbc21e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_abbc21e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(16);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".whatsapp-btn[data-v-abbc21e0]{transform:translateX(0);transition:transform .3s ease-out}.shift-left[data-v-abbc21e0]{transform:translateX(-45px);transition:transform .3s ease}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=abbc21e0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<section class=\"footer-area\" data-v-abbc21e0>", "</section>", [_vm._ssrNode("<div class=\"container\" data-v-abbc21e0>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-abbc21e0>", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-6 col-sm-8\" data-v-abbc21e0>", "</div>", _vm._l(_vm.footerConfigs.data, function (footerConfigs) {
    return _vm._ssrNode("<div class=\"footer-about mt-30\" data-v-abbc21e0>", "</div>", [_vm._ssrNode("<div class=\"logo\" data-v-abbc21e0>", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": _vm.localePath('/index')
      }
    }, [_c('nuxt-img', {
      attrs: {
        "loading": "lazy",
        "placeholder": "blur",
        "format": "webp",
        "src": `https://strapi.badblli.dev${footerConfigs.attributes.footerLogo.data.attributes.url}`,
        "alt": `${footerConfigs.attributes.footerLogo.data.attributes.name}`
      }
    })], 1)], 1), _vm._ssrNode(" <p data-v-abbc21e0>" + _vm._ssrEscape("\n              " + _vm._s(footerConfigs.attributes.description.data.attributes.description) + "\n            ") + "</p> <ul data-v-abbc21e0><li data-v-abbc21e0><a" + _vm._ssrAttr("href", `callto:${footerConfigs.attributes.phone.data.attributes.phone}`) + " data-v-abbc21e0><i class=\"flaticon-phone-call\" data-v-abbc21e0></i>" + _vm._ssrEscape(" +" + _vm._s(footerConfigs.attributes.phone.data.attributes.phone)) + "</a></li> <li data-v-abbc21e0><a" + _vm._ssrAttr("href", `${footerConfigs.attributes.instagramlink.data.attributes.instagramlink}`) + " target=\"_blank\" data-v-abbc21e0><i class=\"fa fa-instagram\" data-v-abbc21e0></i> depoantalya</a></li></ul>")], 2);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-2 col-md-6 col-sm-6\" data-v-abbc21e0>", "</div>", _vm._l(_vm.footerConfigs.data, function (footerConfigs) {
    return _vm._ssrNode("<div class=\"footer-list mt-30\" data-v-abbc21e0>", "</div>", [_vm._ssrNode("<h4 class=\"title\" data-v-abbc21e0>" + _vm._ssrEscape("\n              " + _vm._s(footerConfigs.attributes.companyTitle) + "\n            ") + "</h4> "), _vm._ssrNode("<ul data-v-abbc21e0>", "</ul>", _vm._l(footerConfigs.attributes.nav_configs.data, function (footerConfigs) {
      return _vm._ssrNode("<li data-v-abbc21e0>", "</li>", [_c('nuxt-link', {
        attrs: {
          "to": _vm.localePath(footerConfigs.attributes.slug)
        }
      }, [_vm._v(_vm._s(footerConfigs.attributes.navTitle))])], 1);
    }), 0)], 2);
  }), 0), _vm._ssrNode(" <div class=\"col-lg-3 col-md-6\" data-v-abbc21e0>" + _vm._ssrList(_vm.footerConfigs.data, function (footerConfigs) {
    return "<div class=\"footer-address mt-30\" data-v-abbc21e0><h3 class=\"title\" data-v-abbc21e0>" + _vm._ssrEscape("\n              " + _vm._s(footerConfigs.attributes.adressTitle) + "\n            ") + "</h3> <p data-v-abbc21e0><i class=\"fa fa-map-marker\" data-v-abbc21e0></i>" + _vm._ssrEscape("\n              " + _vm._s(footerConfigs.attributes.adressDescription) + "\n            ") + "</p> <iframe" + _vm._ssrAttr("src", `${footerConfigs.attributes.googleMapUrl}`) + " width=\"600\" height=\"450\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\" style=\"border: 0\" data-v-abbc21e0></iframe></div>";
  }) + "</div>")], 2)]), _vm._ssrNode(" <div class=\"footer-copyright-area\" data-v-abbc21e0><div class=\"container\" data-v-abbc21e0><div class=\"row\" data-v-abbc21e0><div class=\"col-lg-12\" data-v-abbc21e0>" + _vm._ssrList(_vm.footerConfigs.data, function (footerConfigs) {
    return "<div class=\"footer-copyright d-block d-md-flex justify-content-center align-items-center\" data-v-abbc21e0><p data-v-abbc21e0>" + _vm._ssrEscape("\n                © Copyright " + _vm._s(new Date().getFullYear()) + " by\n                ") + "<span data-v-abbc21e0><ul data-v-abbc21e0><li data-v-abbc21e0><a" + _vm._ssrAttr("href", `${footerConfigs.attributes.copyRightLink}`) + " target=\"_blank\" data-v-abbc21e0>" + _vm._ssrEscape(_vm._s(footerConfigs.attributes.copyRightText)) + "</a></li></ul></span></p></div>";
  }) + "</div></div></div></div> "), _vm._ssrNode("<div class=\"footer-pattern\" data-v-abbc21e0>", "</div>", [_c('nuxt-img', {
    attrs: {
      "loading": "lazy",
      "placeholder": "blur",
      "format": "webp",
      "src": "/assets/images/footer-pattern.png",
      "alt": ""
    }
  })], 1)], 2), _vm._ssrNode(" <div class=\"go-top-area\" data-v-abbc21e0><div class=\"go-top-wrap\" data-v-abbc21e0><div class=\"go-top-btn-wrap\" data-v-abbc21e0><div" + _vm._ssrClass(null, `go-top go-top-btn ${_vm.scrollBtn ? 'active' : ''}`) + " data-v-abbc21e0><i class=\"fa fa-angle-double-up\" data-v-abbc21e0></i> <i class=\"fa fa-angle-double-up\" data-v-abbc21e0></i></div></div></div></div> "), _c('WhatsappBtn', {
    staticClass: "whatsapp-btn",
    class: {
      'shift-left': _vm.scrollBtn
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=abbc21e0&scoped=true&

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(24);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./graphql/GetFooter.js

const GetFooter = external_graphql_tag_default.a`
  query GetFooter($locale: I18NLocaleCode) {
    footerConfigs(locale: $locale) {
      data {
        attributes {
          companyTitle
          adressTitle
          adressDescription
          googleMapUrl
          copyRightText
          copyRightLink
          instagramlink {
            data {
              attributes {
                instagramlink
              }
            }
          }
          footerLogo {
            data {
              attributes {
                url
                name
              }
            }
          }
          adress {
            data {
              attributes {
                address
              }
            }
          }

          phone {
            data {
              attributes {
                phone
              }
            }
          }
          description {
            data {
              attributes {
                description
              }
            }
          }
          nav_configs {
            data {
              attributes {
                navTitle
                slug
              }
            }
          }
        }
      }
    }
  }
`;
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/WhatsappBtn.vue?vue&type=template&id=2659b8b6&scoped=true&
var WhatsappBtnvue_type_template_id_2659b8b6_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "whatsapp-container"
    }
  }, [_vm._ssrNode("<i id=\"whatsapp-button\" class=\"fa fa-whatsapp\" data-v-2659b8b6></i> "), _c('transition', {
    attrs: {
      "name": "fade-slide"
    }
  }, [_vm.isPopupOpen ? _c('div', {
    attrs: {
      "id": "whatsapp-popup"
    }
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.message,
      expression: "message"
    }],
    attrs: {
      "name": "#",
      "id": "#",
      "cols": "8",
      "rows": "4",
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": _vm.message
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.message = $event.target.value;
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "main-btn main-btn-2",
    on: {
      "click": _vm.sendWhatsAppMessage
    }
  }, [_vm._v("\n        " + _vm._s(_vm.sendTitle) + "\n      ")])]) : _vm._e()])], 2);
};
var WhatsappBtnvue_type_template_id_2659b8b6_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/WhatsappBtn.vue?vue&type=template&id=2659b8b6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WhatsappBtn.vue?vue&type=script&lang=js&
/* harmony default export */ var WhatsappBtnvue_type_script_lang_js_ = ({
  data() {
    return {
      isPopupOpen: false,
      message: "",
      phoneNumber: "905424648229",
      // WhatsApp numarası
      sendTitle: "Send Message",
      // Buton başlığı
      placeholder: "Merhaba bilgi almak istiyorum" // Textarea placeholder
    };
  },

  watch: {
    // Locale değiştiğinde başlık, placeholder ve mesaj güncelleniyor
    "$i18n.locale"(newLocale) {
      this.updateLocaleTexts(newLocale);
    }
  },
  mounted() {
    // Başlangıçta metinler ayarlanıyor
    this.updateLocaleTexts(this.$i18n.locale);
  },
  methods: {
    updateLocaleTexts(locale) {
      // Locale'e göre "Send Message" ve "Message" çevirileri
      this.sendTitle = locale === "tr" ? "Mesaj Gönder" : locale === "en" ? "Send Message" : locale === "ru" ? "Отправить сообщение" : locale === "de" ? "Nachricht senden" : locale === "uk" ? "Надіслати повідомлення" : "Send Message";
      this.placeholder = locale === "tr" ? "Merhaba bilgi almak istiyorum" : locale === "en" ? "Hi, I want to get information" : locale === "ru" ? "Здравствуйте, я хочу получить информацию" : locale === "de" ? "Hallo, ich möchte Informationen erhalten" : locale === "uk" ? "Здравствуйте, я хочу получить информацию" : "Hi, I want to get information";
    },
    togglePopup() {
      this.isPopupOpen = !this.isPopupOpen;
    },
    sendWhatsAppMessage() {
      let locale = this.$i18n.locale;
      // Mesaj başlığını güncelle
      // const translatedRequest =
      //   locale === "tr"
      //     ? "Bilgi Almak İstiyorum"
      //     : locale === "en"
      //     ? "I Want to Get Information"
      //     : locale === "ru"
      //     ? "Я хочу получить информацию"
      //     : locale === "de"
      //     ? "Ich möchte Informationen erhalten"
      //     : locale === "uk"
      //     ? "Я хочу отримати інформацію"
      //     : "I Want to Get Information";

      // const prefixMessage = `${locale}`;
      // this.message =
      //   `${prefixMessage}\n${translatedRequest}\n` + " | " + this.message;
      this.message = this.placeholder;
      if (this.message.trim() !== "") {
        const whatsappURL = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
        window.open(whatsappURL, "_blank");
      } else {
        alert("Lütfen bir mesaj yazın.");
      }
    }
  }
});
// CONCATENATED MODULE: ./components/WhatsappBtn.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WhatsappBtnvue_type_script_lang_js_ = (WhatsappBtnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/WhatsappBtn.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(80)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WhatsappBtnvue_type_script_lang_js_,
  WhatsappBtnvue_type_template_id_2659b8b6_scoped_true_render,
  WhatsappBtnvue_type_template_id_2659b8b6_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "2659b8b6",
  "2396e730"
  
)

/* harmony default export */ var WhatsappBtn = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&


/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  name: "Footer",
  components: {
    WhatsappBtn: WhatsappBtn
  },
  data() {
    return {
      scrollBtn: false,
      footerConfigs: []
    };
  },
  apollo: {
    footerConfigs: {
      prefetch: true,
      query: GetFooter,
      variables() {
        return {
          locale: this.$i18n.locale
        };
      },
      fetchPolicy: "no-cache"
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 70) {
        this.scrollBtn = true;
      } else if (window.scrollY < 70) {
        this.scrollBtn = false;
      }
    },
    scrollTop() {
      window.scrollTo(0, 0);
    }
  }
});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Footer.vue



function Footer_injectStyles (context) {
  
  var style0 = __webpack_require__(82)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Footer_component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  Footer_injectStyles,
  "abbc21e0",
  "1dfcdfc5"
  
)

/* harmony default export */ var Footer = __webpack_exports__["a"] = (Footer_component.exports);

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Nav.vue?vue&type=template&id=7bcb9060&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<header class=\"header-area\" data-v-7bcb9060>", "</header>", [_vm._ssrNode("<div class=\"header-top-area\" data-v-7bcb9060>", "</div>", [_vm._ssrNode("<div class=\"container-fluid\" data-v-7bcb9060>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-7bcb9060>", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 pr-0\" data-v-7bcb9060>", "</div>", _vm._l(_vm.siteConfigs.data, function (siteConfigs) {
    return _vm._ssrNode("<div class=\"header-top\" style=\"height: 50px\" data-v-7bcb9060>", "</div>", [_vm._ssrNode("<ul data-v-7bcb9060><li data-v-7bcb9060><a" + _vm._ssrAttr("href", `tel:${siteConfigs.attributes.phone}`) + " data-v-7bcb9060><i class=\"flaticon-phone-call\" data-v-7bcb9060></i>" + _vm._ssrEscape(" +" + _vm._s(siteConfigs.attributes.phone) + "\n") + "</a></li> <li data-v-7bcb9060><a" + _vm._ssrAttr("href", `${siteConfigs.attributes.instagramlink}`) + " target=\"_blank\" data-v-7bcb9060><i class=\"fa fa-instagram\" data-v-7bcb9060></i>" + _vm._ssrEscape(_vm._s(siteConfigs.attributes.instagram) + "\n                    ") + "</a></li> <li data-v-7bcb9060><a" + _vm._ssrAttr("href", `${siteConfigs.attributes.googleMapUrl}`) + " target=\"_blank\" data-v-7bcb9060><i class=\"flaticon-placeholder\" data-v-7bcb9060></i> <span class=\"desktop-address\" data-v-7bcb9060>" + _vm._ssrEscape(_vm._s(siteConfigs.attributes.address)) + "</span> <span class=\"mobile-address\" data-v-7bcb9060>" + _vm._ssrEscape(_vm._s(_vm.getCityDistrict(siteConfigs.attributes.address))) + "</span></a></li></ul> "), _vm._ssrNode("<div class=\"d-none d-sm-block footer-list\" data-v-7bcb9060>", "</div>", [_c('ContactBtn')], 1)], 2);
  }), 0)])])]), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass(null, `main-header ${_vm.sticky ? 'sticky' : ''}`) + " data-v-7bcb9060>", "</div>", [_vm._ssrNode("<div class=\"container-fluid\" data-v-7bcb9060>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-7bcb9060>", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\" data-v-7bcb9060>", "</div>", [_vm._ssrNode("<div class=\"main-header-item d-flex justify-content-between align-items-center w-100\" data-v-7bcb9060>", "</div>", [_vm._ssrNode("<div class=\"main-header-menus w-100 d-flex\" data-v-7bcb9060>", "</div>", [_vm._l(_vm.siteConfigs.data, function (siteConfigs) {
    return _vm._ssrNode("<div class=\"header-logo\" data-v-7bcb9060>", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": _vm.localePath('/')
      }
    }, [_c('nuxt-img', {
      staticStyle: {
        "height": "auto",
        "z-index": "9999999999999999"
      },
      attrs: {
        "loading": "lazy",
        "placeholder": "blur",
        "src": `https://strapi.badblli.dev${siteConfigs.attributes.logo.data.attributes.url}`,
        "alt": `${siteConfigs.attributes.logo.data.attributes.name}`,
        "width": "200px",
        "height": "150px"
      }
    })], 1)], 1);
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-menu w-100 d-none d-lg-flex justify-content-between\" data-v-7bcb9060>", "</div>", [_vm._ssrNode("<ul data-v-7bcb9060>", "</ul>", _vm._l(_vm.navConfigs.data, function (navConfigs) {
    return _vm._ssrNode("<li data-wow-duration=\"2s\" data-wow-delay=\"5s\" class=\"wow fadeInLeft animated title\" data-v-7bcb9060>", "</li>", [_c('nuxt-link', {
      attrs: {
        "to": _vm.localePath(navConfigs.attributes.slug),
        "exact-active-class": "active",
        "inactive-class": ""
      }
    }, [_vm._v(_vm._s(navConfigs.attributes.navTitle))])], 1);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"mr-5\" data-v-7bcb9060>", "</ul>", [_vm._ssrNode("<li data-v-7bcb9060>", "</li>", [_vm._ssrNode("<a data-v-7bcb9060>", "</a>", [_c('nuxt-img', {
    attrs: {
      "loading": "lazy",
      "placeholder": "blur",
      "src": `/assets/images/country/${_vm.$i18n.locale}.png`,
      "alt": `${_vm.localeName}`
    }
  }), _vm._ssrNode(_vm._ssrEscape("\n                          " + _vm._s(_vm.localeName) + " ") + "<i class=\"fa fa-angle-down\" data-v-7bcb9060></i>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"sub-menu\" data-v-7bcb9060>", "</ul>", _vm._l(_vm.availableLocales, function (locale) {
    return _vm.availableLocales ? _vm._ssrNode("<li data-v-7bcb9060>", "</li>", [_c('nuxt-link', {
      attrs: {
        "to": _vm.switchLocalePath(locale.code)
      }
    }, [_c('nuxt-img', {
      attrs: {
        "loading": "lazy",
        "placeholder": "blur",
        "src": `/assets/images/country/${locale.code}.png`,
        "alt": `${_vm.localeName}`
      }
    }), _vm._v("\n                              " + _vm._s(locale.name))], 1)], 1) : _vm._e();
  }), 0)], 2)])], 2)], 2), _vm._ssrNode(" <div class=\"header-social d-flex align-items-center\" data-v-7bcb9060><ul class=\"d-none d-lg-block\" data-v-7bcb9060></ul> <div class=\"toggle-btn ml-30 canvas_open d-lg-none d-block\" data-v-7bcb9060><i class=\"fa fa-bars\" data-v-7bcb9060></i></div></div>")], 2)])])])])], 2), _vm._ssrNode(" <div" + _vm._ssrClass(null, `off_canvars_overlay ${_vm.mobileToggle ? 'active' : ''}`) + " data-v-7bcb9060></div> "), _vm._ssrNode("<div class=\"offcanvas_menu\" data-v-7bcb9060>", "</div>", [_vm._ssrNode("<div class=\"container-fluid\" data-v-7bcb9060>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-7bcb9060>", "</div>", [_vm._ssrNode("<div class=\"col-12\" data-v-7bcb9060>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass(null, `offcanvas_menu_wrapper ${_vm.mobileToggle ? 'active' : ''}`) + " data-v-7bcb9060>", "</div>", [_vm._ssrNode("<div class=\"canvas_close\" data-v-7bcb9060><a href=\"javascript:void(0)\" data-v-7bcb9060><i class=\"fa fa-times\" data-v-7bcb9060></i></a></div> "), _vm._ssrNode("<div class=\"offcanvas-social\" data-v-7bcb9060>", "</div>", [_vm._ssrNode("<div class=\"header-logo\" data-v-7bcb9060>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": _vm.localePath('/')
    }
  }, [_c('nuxt-img', {
    staticStyle: {
      "height": "auto",
      "z-index": "9999999999999999"
    },
    attrs: {
      "loading": "lazy",
      "placeholder": "blur",
      "src": "/assets/images/logo_small.svg",
      "alt": "logo",
      "width": "200px",
      "height": "150px"
    }
  })], 1)], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"menu\" class=\"text-left\" data-v-7bcb9060>", "</div>", [_vm._ssrNode("<ul class=\"offcanvas_main_menu\" data-v-7bcb9060>", "</ul>", _vm._l(_vm.navConfigs.data, function (navConfigs) {
    return _vm._ssrNode("<li data-v-7bcb9060>", "</li>", [_c('nuxt-link', {
      attrs: {
        "to": _vm.localePath(navConfigs.attributes.slug),
        "exact-active-class": "active",
        "inactive-class": ""
      }
    }, [_vm._v(_vm._s(navConfigs.attributes.navTitle))])], 1);
  }), 0)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"offcanvas_footer\" data-v-7bcb9060>", "</div>", [_vm._ssrNode("<div class=\"row mb-20 justify-content-center\" data-v-7bcb9060>", "</div>", [_vm._ssrNode("<ul data-v-7bcb9060>", "</ul>", _vm._l(_vm.availableLocales, function (locale) {
    return _c('nuxt-link', {
      key: locale.code,
      attrs: {
        "to": _vm.switchLocalePath(locale.code)
      }
    }, [_c('nuxt-img', {
      staticClass: "mx-3",
      attrs: {
        "loading": "lazy",
        "placeholder": "blur",
        "src": `/assets/images/country/${locale.code}.png`,
        "alt": `${_vm.localeName}`,
        "width": "30px",
        "height": "20px"
      }
    })], 1);
  }), 1)]), _vm._ssrNode(" <div class=\"row d-flex flex-row mr-0 justify-content-center\" data-v-7bcb9060>" + _vm._ssrList(_vm.siteConfigs.data, function (siteConfigs) {
    return "<span data-v-7bcb9060><a" + _vm._ssrAttr("href", `tel:${siteConfigs.attributes.phone}`) + " class=\"aicon\" data-v-7bcb9060><i class=\"flaticon-phone-call\" data-v-7bcb9060></i></a> <a" + _vm._ssrAttr("href", `${siteConfigs.attributes.instagramlink}`) + " target=\"_blank\" class=\"aicon\" data-v-7bcb9060><i class=\"fa fa-instagram\" data-v-7bcb9060></i></a></span>";
  }) + "</div>")], 2)], 2)])])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Nav.vue?vue&type=template&id=7bcb9060&scoped=true&

// EXTERNAL MODULE: ./graphql/GetAllSiteConfig.js
var GetAllSiteConfig = __webpack_require__(12);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(24);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./graphql/GetAllNavConfig.js

const GetAllNavConfig = external_graphql_tag_default.a`
  query GetAllNavConfig($locale: I18NLocaleCode) {
    navConfigs(locale: $locale) {
      data {
        id
      }
      data {
        attributes {
          navTitle
          slug
        }
      }
    }
  }
`;
// EXTERNAL MODULE: ./components/ContactBtn.vue + 4 modules
var ContactBtn = __webpack_require__(77);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Nav.vue?vue&type=script&lang=js&



/* harmony default export */ var Navvue_type_script_lang_js_ = ({
  name: "Nav",
  data({
    $i18n
  }) {
    return {
      sticky: false,
      mobileToggle: false,
      i18NLocales: [],
      navConfigs: [],
      siteConfigs: [],
      localeName: $i18n.locales.find(i18n => i18n.code === $i18n.locale).name
    };
  },
  components: {
    ContactBtn: ContactBtn["a" /* default */]
  },
  apollo: {
    navConfigs: {
      prefetch: true,
      query: GetAllNavConfig,
      variables() {
        return {
          locale: this.$i18n.locale
        };
      },
      fetchPolicy: "no-cache"
    },
    siteConfigs: {
      prefetch: true,
      query: GetAllSiteConfig["a" /* GetAllSiteConfig */],
      variables() {
        return {
          locale: this.$i18n.locale
        };
      },
      fetchPolicy: "no-cache"
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 70) {
        this.sticky = true;
      } else if (window.scrollY < 70) {
        this.sticky = false;
      }
    },
    getCityDistrict(address) {
      // Adresi virgüllerden ayırıyoruz
      const parts = address.split(",");

      // Son parçayı alıyoruz ve başındaki ve sonundaki boşlukları kaldırıyoruz
      const cityDistrict = parts[parts.length - 1].trim();
      return cityDistrict;
    }
  }
});
// CONCATENATED MODULE: ./components/Nav.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navvue_type_script_lang_js_ = (Navvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Nav.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(78)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7bcb9060",
  "090cbe69"
  
)

/* harmony default export */ var Nav = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(17).default
module.exports.__inject__ = function (context) {
  add("ce469284", content, true, context)
};

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/PageHeader.vue?vue&type=template&id=438d136e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"page-title-area bg_cover\"" + _vm._ssrStyle(null, {
    'background-image': `url(${_vm.banner ? 'https://strapi.badblli.dev' + _vm.banner : 'https://img.freepik.com/free-vector/abstract-orange-background-with-lines-halftone-effect_1017-32107.jpg?w=1060&t=st=1680692252~exp=1680692852~hmac=cc4535da3ff21392ce61635f278c710c12c8704cc90d2b6419f6ca702928500d'})`
  }, null) + " data-v-438d136e>", "</div>", [_vm._ssrNode("\n    &gt;\n    "), _vm._ssrNode("<div class=\"container\" data-v-438d136e>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-438d136e>", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\" data-v-438d136e>", "</div>", [_vm._ssrNode("<div class=\"page-title-content\" data-v-438d136e>", "</div>", [_vm._ssrNode("<h3 class=\"title\" data-v-438d136e>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h3> "), _vm._ssrNode("<nav aria-label=\"breadcrumb\" data-v-438d136e>", "</nav>", [_vm._ssrNode("<ol class=\"breadcrumb\" data-v-438d136e>", "</ol>", [_vm._ssrNode("<li class=\"breadcrumb-item\" data-v-438d136e>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": _vm.localePath('/')
    }
  }, [_vm._v(_vm._s(_vm.slug1))])], 1), _vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\" data-v-438d136e>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.slug2) + "\n                ") + "</li>")], 2)])], 2)])])])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PageHeader.vue?vue&type=template&id=438d136e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageHeader.vue?vue&type=script&lang=js&
/* harmony default export */ var PageHeadervue_type_script_lang_js_ = ({
  name: "PageHeader",
  data() {
    return {};
  },
  props: {
    title: {
      type: String
    },
    banner: {
      type: String
    },
    slug1: {
      type: String
    },
    slug2: {
      type: String
    }
  }
});
// CONCATENATED MODULE: ./components/PageHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PageHeadervue_type_script_lang_js_ = (PageHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/PageHeader.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PageHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "438d136e",
  "e58bfab4"
  
)

/* harmony default export */ var PageHeader = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetContact; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GetContact = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query GetContact($locale: I18NLocaleCode) {
    contacts(locale: $locale) {
      data {
        id
      }
      data {
        attributes {
          title
          name
          email
          phoneTitle
          subject
          message
          sendButton
          unit
          title2
          description
          phone {
            data {
              attributes {
                phone
              }
            }
          }
          depo_configs {
            data {
              id
            }
            data {
              attributes {
                title
                size
                metrekare
              }
            }
          }
        }
      }
    }
  }
`;

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WriteMessageThree_vue_vue_type_style_index_0_id_30f1a3e6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WriteMessageThree_vue_vue_type_style_index_0_id_30f1a3e6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WriteMessageThree_vue_vue_type_style_index_0_id_30f1a3e6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WriteMessageThree_vue_vue_type_style_index_0_id_30f1a3e6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WriteMessageThree_vue_vue_type_style_index_0_id_30f1a3e6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(16);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".disabled[data-v-30f1a3e6]{opacity:.5;pointer-events:none}.modal[data-v-30f1a3e6]{position:fixed;top:0;left:0;z-index:1e+30;display:flex;justify-content:center;align-items:center;width:100%;height:100%;overflow:hidden;outline:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/WriteMessageThree.vue?vue&type=template&id=30f1a3e6&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "write-massage-area pb-120"
  }, [_vm._ssrNode((_vm.showModal ? "<div tabindex=\"-1\" role=\"dialog\" class=\"modal\" data-v-30f1a3e6>" + _vm._ssrList(_vm.siteConfigs.data, function (siteConfigs) {
    return "<div role=\"document\" class=\"modal-dialog\" data-v-30f1a3e6><div class=\"modal-content\" data-v-30f1a3e6><div class=\"modal-header\" data-v-30f1a3e6><button type=\"button\" aria-label=\"Close\" class=\"close\" data-v-30f1a3e6><span aria-hidden=\"true\" data-v-30f1a3e6>×</span></button></div> <div class=\"modal-body\" data-v-30f1a3e6><p data-v-30f1a3e6>" + _vm._ssrEscape(" " + _vm._s(siteConfigs.attributes.successMessage) + " ") + "</p></div> <div class=\"modal-footer\" data-v-30f1a3e6><button type=\"button\" class=\"btn btn-secondary\" data-v-30f1a3e6>✔️</button></div></div></div>";
  }) + "</div>" : "<!---->") + " " + (_vm.recaptcha ? "<div tabindex=\"-1\" role=\"dialog\" class=\"modal\" data-v-30f1a3e6>" + _vm._ssrList(_vm.siteConfigs.data, function (siteConfigs) {
    return "<div role=\"document\" class=\"modal-dialog\" data-v-30f1a3e6><div class=\"modal-content\" data-v-30f1a3e6><div class=\"modal-header\" data-v-30f1a3e6><button type=\"button\" aria-label=\"Close\" class=\"close\" data-v-30f1a3e6><span aria-hidden=\"true\" data-v-30f1a3e6>×</span></button></div> <div class=\"modal-body\" data-v-30f1a3e6><p data-v-30f1a3e6>" + _vm._ssrEscape(" " + _vm._s(siteConfigs.attributes.errorMessage) + " ") + "</p></div> <div class=\"modal-footer\" data-v-30f1a3e6><button type=\"button\" class=\"btn btn-secondary\" data-v-30f1a3e6>✔️</button></div></div></div>";
  }) + "</div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"container\" data-v-30f1a3e6>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-30f1a3e6>", "</div>", [_vm._ssrNode("<div class=\"col-lg-6\" data-v-30f1a3e6>", "</div>", _vm._l(_vm.contacts.data, function (contacts) {
    return _vm._ssrNode("<div class=\"write-massage-content\" data-v-30f1a3e6>", "</div>", [_vm._ssrNode("<div class=\"write-massage-title\" data-v-30f1a3e6><h3 class=\"title\" data-v-30f1a3e6>" + _vm._ssrEscape(_vm._s(contacts.attributes.title)) + "</h3></div> "), _vm._ssrNode("<div class=\"write-massage-input\" data-v-30f1a3e6>", "</div>", [_vm._ssrNode("<form data-v-30f1a3e6>", "</form>", [_vm._ssrNode("<div class=\"row\" data-v-30f1a3e6>", "</div>", [_vm._ssrNode("<div class=\"col-lg-6\" data-v-30f1a3e6><div class=\"input-box mt-10\" data-v-30f1a3e6><input type=\"text\" required=\"required\"" + _vm._ssrAttr("placeholder", `${contacts.attributes.name}`) + _vm._ssrAttr("value", _vm.formData.name) + " data-v-30f1a3e6></div></div> <div class=\"col-lg-6\" data-v-30f1a3e6><div class=\"input-box mt-10\" data-v-30f1a3e6><input type=\"email\"" + _vm._ssrAttr("placeholder", `${contacts.attributes.email}`) + _vm._ssrAttr("value", _vm.formData.email) + " data-v-30f1a3e6></div></div> <div class=\"col-lg-6\" data-v-30f1a3e6><div class=\"input-box mt-10\" data-v-30f1a3e6><input type=\"text\" required=\"required\"" + _vm._ssrAttr("placeholder", `${contacts.attributes.phoneTitle}`) + _vm._ssrAttr("value", _vm.formData.phone) + " data-v-30f1a3e6></div></div> <div class=\"col-lg-6\" data-v-30f1a3e6><div class=\"input-box mt-10\" data-v-30f1a3e6><input type=\"text\"" + _vm._ssrAttr("placeholder", `${contacts.attributes.subject}`) + _vm._ssrAttr("value", _vm.formData.subject) + " data-v-30f1a3e6></div></div> "), _vm._ssrNode("<div class=\"col-lg-12\" data-v-30f1a3e6>", "</div>", [_vm._ssrNode("<div class=\"input-box mt-10\" data-v-30f1a3e6>", "</div>", [_vm._ssrNode("<textarea name=\"message\" id=\"#\" cols=\"30\" rows=\"10\"" + _vm._ssrAttr("placeholder", `${contacts.attributes.message}`) + " data-v-30f1a3e6>" + _vm._ssrEscape(_vm._s(_vm.formData.message)) + "</textarea> "), _c('recaptcha', {
      ref: "recaptcha",
      refInFor: true
    }), _vm._ssrNode(" <button type=\"submit\"" + _vm._ssrClass("main-btn main-btn-2", {
      disabled: _vm.disabled
    }) + " data-v-30f1a3e6>" + _vm._ssrEscape("\n                       " + _vm._s(contacts.attributes.sendButton) + "\n                     ") + "</button>")], 2)])], 2)])])], 2);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-6\" data-v-30f1a3e6>", "</div>", [_vm._ssrNode("<div class=\"contact-info-area\" data-v-30f1a3e6>", "</div>", [_vm._ssrNode("<div class=\"contact-info\" data-v-30f1a3e6>", "</div>", _vm._l(_vm.siteConfigs.data, function (siteConfigs) {
    return _vm._ssrNode("<div class=\"contact-info-content\" data-v-30f1a3e6>", "</div>", [_vm._ssrNode("<div class=\"row pt-110\" data-v-30f1a3e6>", "</div>", [_vm._ssrNode("<div class=\"col-12 col-md-6\" data-v-30f1a3e6>", "</div>", [_vm._ssrNode("<ul data-v-30f1a3e6>", "</ul>", [_vm._ssrNode("<li data-v-30f1a3e6>", "</li>", [_c('nuxt-img', {
      attrs: {
        "loading": "lazy",
        "placeholder": "blur",
        "src": "/assets/images/icon/icon-1.png",
        "alt": ""
      }
    }), _vm._ssrNode(_vm._ssrEscape("\n                       " + _vm._s(siteConfigs.attributes.address) + "\n                     "))], 2), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-30f1a3e6>", "</li>", [_c('nuxt-img', {
      attrs: {
        "loading": "lazy",
        "placeholder": "blur",
        "src": "/assets/images/icon/icon-3.png",
        "alt": ""
      }
    }), _vm._ssrNode(_vm._ssrEscape("+\n                       " + _vm._s(siteConfigs.attributes.phone) + "\n                     "))], 2), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-30f1a3e6>", "</li>", [_c('nuxt-img', {
      attrs: {
        "loading": "lazy",
        "placeholder": "blur",
        "src": "/assets/images/icon/icon-4.png",
        "alt": ""
      }
    }), _vm._ssrNode("\n                       7/24\n                     ")], 2)], 2)]), _vm._ssrNode(" <div class=\"col-12 col-md-6\" data-v-30f1a3e6><iframe" + _vm._ssrAttr("src", `${siteConfigs.attributes.googleIframeUrl}`) + " allowfullscreen=\"allowfullscreen\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\" style=\"border: 0\" data-v-30f1a3e6></iframe></div>")], 2)]);
  }), 0)])])], 2)]), _vm._ssrNode(" <div data-v-30f1a3e6></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/WriteMessageThree.vue?vue&type=template&id=30f1a3e6&scoped=true&

// EXTERNAL MODULE: ./graphql/GetContact.js
var GetContact = __webpack_require__(88);

// EXTERNAL MODULE: ./graphql/GetAllSiteConfig.js
var GetAllSiteConfig = __webpack_require__(12);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(24);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WriteMessageThree.vue?vue&type=script&lang=js&



/* harmony default export */ var WriteMessageThreevue_type_script_lang_js_ = ({
  name: "WriteMessageThree",
  data() {
    return {
      contacts: [],
      siteConfigs: [],
      formLoading: false,
      disabled: false,
      showModal: false,
      formError: null,
      recaptcha: false,
      formMessage: "",
      formData: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      },
      recaptchaVerified: false
    };
  },
  methods: {
    click() {
      this.showModal = true;
    },
    async submitForm() {
      try {
        const token = await this.$recaptcha.getResponse();
        console.log('ReCaptcha token:', token);
        if (!token) {
          this.formError = "Please complete the reCAPTCHA.";
          console.log('ReCaptcha token:', token);
          this.recaptcha = true;
          return;
        }
        this.formLoading = true;
        this.formError = null;
        const mutation = external_graphql_tag_default.a`
          mutation sendEmail(
            $name: String!
            $email: String!
            $phone: String
            $subject: String
            $message: String
          ) {
            createSendEmail(
              data: {
                name: $name
                email: $email
                phone: $phone
                subject: $subject
                message: $message
              }
            ) {
              data {
                attributes {
                  name
                  email
                  phone
                  subject
                  message
                }
              }
            }
          }
        `;
        await this.$apollo.mutate({
          mutation: mutation,
          variables: {
            name: this.formData.name,
            email: this.formData.email,
            phone: this.formData.phone,
            subject: this.formData.subject,
            message: this.formData.message
          }
        });

        // Mutation was successful, show the modal
        this.showModal = true;
      } catch (error) {
        this.recaptchaVerified = false;
        this.recaptcha = true;
        this.formError = "Please complete the reCAPTCHA.";
        await this.$recaptcha.reset();
        // Handle any errors that occurred during the mutation
        console.error(error);
        this.showModal = false;
      } finally {
        // Reset the loading state after the mutation completes
        this.formLoading = false;
      }
    },
    resetForm() {
      this.formData.name = "";
      this.formData.email = "";
      this.formData.phone = "";
      this.formData.subject = "";
      this.formData.message = "";
      this.$recaptcha.reset();
    },
    closeModal() {
      this.showModal = false;
      this.recaptcha = false;
      this.$recaptcha.reset();
      this.resetForm();
    }
  },
  apollo: {
    contacts: {
      prefetch: true,
      query: GetContact["a" /* GetContact */],
      variables() {
        return {
          locale: this.$i18n.locale
        };
      },
      fetchPolicy: "no-cache"
    },
    siteConfigs: {
      prefetch: true,
      query: GetAllSiteConfig["a" /* GetAllSiteConfig */],
      variables() {
        return {
          locale: this.$i18n.locale
        };
      },
      fetchPolicy: "no-cache"
    }
  }
});
// CONCATENATED MODULE: ./components/WriteMessageThree.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WriteMessageThreevue_type_script_lang_js_ = (WriteMessageThreevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/WriteMessageThree.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(89)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WriteMessageThreevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "30f1a3e6",
  "6870529c"
  
)

/* harmony default export */ var WriteMessageThree = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/SpaceToMake.vue?vue&type=template&id=d1307c88&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "space-to-make-area pt-120 pb-120"
  }, [_vm._ssrNode("<div class=\"container\" data-v-d1307c88>", "</div>", _vm._l(_vm.spaceToMakes.data, function (spaceToMakes) {
    return _vm._ssrNode("<div class=\"row align-items-center\" data-v-d1307c88>", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 col-md-10\" data-v-d1307c88>", "</div>", [_vm._ssrNode("<div class=\"space-to-make-content\" data-v-d1307c88>", "</div>", [_vm._ssrNode("<h3 data-wow-duration=\"4s\" data-wow-delay=\"0ms\" class=\"title animated wow fadeInDown\" data-v-d1307c88>" + _vm._ssrEscape("\n            " + _vm._s(spaceToMakes.attributes.title) + "\n          ") + "</h3> <h4 data-wow-duration=\"4s\" data-wow-delay=\"0ms\" class=\"mb-20 animated wow fadeInDown\" style=\"color: #e25303\" data-v-d1307c88>" + _vm._ssrEscape("\n            " + _vm._s(spaceToMakes.attributes.imgtxt) + "\n          ") + "</h4> <p data-v-d1307c88>" + _vm._ssrEscape("\n            " + _vm._s(spaceToMakes.attributes.desc) + "\n          ") + "</p> "), _vm._ssrNode("<div class=\"row\" data-v-d1307c88>", "</div>", [_vm._ssrNode("<div class=\"col-sm-6 mb-40\" data-v-d1307c88><div class=\"space-to-make-item mt-30\" data-v-d1307c88><a href=\"callto:90 850 532 7671\" data-v-d1307c88><i class=\"flaticon-workspace\" data-v-d1307c88></i> <span data-v-d1307c88>" + _vm._ssrEscape(_vm._s(spaceToMakes.attributes.item1)) + "</span></a></div></div> "), _vm._ssrNode("<div class=\"col-sm-6\" data-v-d1307c88>", "</div>", [_vm._ssrNode("<div class=\"space-to-make-item mt-30\" data-v-d1307c88>", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": _vm.localePath('/events')
      }
    }, [_c('i', {
      staticClass: "flaticon-meeting"
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(spaceToMakes.attributes.item2))])])], 1)])], 2), _vm._ssrNode(" "), _c('ContactBtn')], 2)])]);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"shape-pattern\" data-v-d1307c88>", "</div>", [_c('nuxt-img', {
    attrs: {
      "loading": "lazy",
      "placeholder": "blur",
      "src": "/assets/images/shape-pattern.png",
      "alt": ""
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"shape-pattern-2\" data-v-d1307c88>", "</div>", [_c('nuxt-img', {
    attrs: {
      "loading": "lazy",
      "placeholder": "blur",
      "format": "webp",
      "src": "/assets/images/we-know-line.png",
      "alt": ""
    }
  })], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SpaceToMake.vue?vue&type=template&id=d1307c88&scoped=true&

// EXTERNAL MODULE: ./components/ContactBtn.vue + 4 modules
var ContactBtn = __webpack_require__(77);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(24);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./graphql/GetSpaceToMake.js

const GetSpaceToMake = external_graphql_tag_default.a`
  query GetSpaceToMake($locale: I18NLocaleCode) {
    spaceToMakes(locale: $locale) {
      data {
        id
      }
      data {
        attributes {
          title
          desc
          description
          imgtxt
          item1
          item2
          image {
            data {
              attributes {
                url
                name
              }
            }
          }
        }
      }
    }
  }
`;
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SpaceToMake.vue?vue&type=script&lang=js&


/* harmony default export */ var SpaceToMakevue_type_script_lang_js_ = ({
  name: "SpaceToMake",
  data() {
    return {
      spaceToMakes: []
    };
  },
  components: {
    ContactBtn: ContactBtn["a" /* default */]
  },
  apollo: {
    spaceToMakes: {
      prefetch: true,
      query: GetSpaceToMake,
      variables() {
        return {
          locale: this.$i18n.locale
        };
      },
      fetchPolicy: "no-cache"
    }
  }
});
// CONCATENATED MODULE: ./components/SpaceToMake.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SpaceToMakevue_type_script_lang_js_ = (SpaceToMakevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/SpaceToMake.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SpaceToMakevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d1307c88",
  "4c0834f5"
  
)

/* harmony default export */ var SpaceToMake = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about.js.map