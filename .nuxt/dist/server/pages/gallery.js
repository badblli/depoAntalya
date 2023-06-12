exports.ids = [4];
exports.modules = {

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/gallery.vue?vue&type=template&id=616163f4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', _vm._l(_vm.galleryBannerConfigs.data, function (galleryBannerConfigs) {
    return _vm._ssrNode("<div>", "</div>", [_c('Nav'), _vm._ssrNode(" "), _c('PageHeader', {
      attrs: {
        "title": `${galleryBannerConfigs.attributes.title}`,
        "banner": `${galleryBannerConfigs.attributes.banner.data.attributes.url}`,
        "slug1": `${galleryBannerConfigs.attributes.slug1}`,
        "slug2": `${galleryBannerConfigs.attributes.slug2}`
      }
    }), _vm._ssrNode(" "), _c('GalleryPage'), _vm._ssrNode(" "), _c('Footer')], 2);
  }), 0);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/gallery.vue?vue&type=template&id=616163f4&

// EXTERNAL MODULE: ./components/Nav.vue + 5 modules
var Nav = __webpack_require__(77);

// EXTERNAL MODULE: ./components/PageHeader.vue + 4 modules
var PageHeader = __webpack_require__(80);

// EXTERNAL MODULE: ./components/Footer.vue + 5 modules
var Footer = __webpack_require__(78);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/GalleryPage.vue?vue&type=template&id=f0011c44&scoped=true&
var GalleryPagevue_type_template_id_f0011c44_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "gallery-area gallery-page"
  }, [_vm._ssrNode("<div class=\"container\" data-v-f0011c44>", "</div>", [_vm._ssrNode("<div class=\"gallery-itmes\" data-v-f0011c44>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-f0011c44>", "</div>", _vm._l(_vm.fotoGalleries.data[0].attributes.image.data, function (image) {
    return _vm.fotoGalleries.data[0].attributes.image.data.length > 0 ? _vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-6 mb-30\" data-v-f0011c44>", "</div>", [_vm._ssrNode("<div data-wow-duration=\"2s\" data-wow-delay=\"5s\" class=\"gallery-thumb mt-30 wow fadeInLeft animated\" data-v-f0011c44>", "</div>", [_c('nuxt-img', {
      attrs: {
        "loading": "lazy",
        "src": `https://strapi.badblli.dev${image.attributes.url}`,
        "alt": `${image.attributes.name}`,
        "width": "300",
        "height": "200"
      }
    }), _vm._ssrNode(" <a" + _vm._ssrAttr("href", `https://strapi.badblli.dev${image.attributes.url}`) + " class=\"main-btn image-popup galleryTwo\" data-v-f0011c44><i class=\"flaticon-plus\" data-v-f0011c44></i></a>")], 2)]) : _vm._e();
  }), 0)])])]);
};
var GalleryPagevue_type_template_id_f0011c44_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/GalleryPage.vue?vue&type=template&id=f0011c44&scoped=true&

// EXTERNAL MODULE: ./graphql/GetGallery.js
var GetGallery = __webpack_require__(88);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GalleryPage.vue?vue&type=script&lang=js&

/* harmony default export */ var GalleryPagevue_type_script_lang_js_ = ({
  name: "GalleryPage",
  data() {
    return {
      fotoGalleries: []
    };
  },
  apollo: {
    fotoGalleries: {
      prefetch: true,
      query: GetGallery["a" /* GetGallery */]
    }
  },
  mounted() {
    new GLightbox({
      selector: ".galleryTwo",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true
    });
  }
});
// CONCATENATED MODULE: ./components/GalleryPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GalleryPagevue_type_script_lang_js_ = (GalleryPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/GalleryPage.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GalleryPagevue_type_script_lang_js_,
  GalleryPagevue_type_template_id_f0011c44_scoped_true_render,
  GalleryPagevue_type_template_id_f0011c44_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "f0011c44",
  "117e803e"
  
)

/* harmony default export */ var GalleryPage = (component.exports);
// EXTERNAL MODULE: ./graphql/GetGalleryBanner.js
var GetGalleryBanner = __webpack_require__(89);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/gallery.vue?vue&type=script&lang=js&





/* harmony default export */ var galleryvue_type_script_lang_js_ = ({
  components: {
    GalleryPage: GalleryPage,
    Footer: Footer["a" /* default */],
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
      galleryBannerConfigs: []
    };
  },
  apollo: {
    galleryBannerConfigs: {
      prefetch: true,
      query: GetGalleryBanner["a" /* GetGalleryBanner */],
      variables() {
        return {
          locale: this.$i18n.locale
        };
      },
      fetchPolicy: "no-cache"
    }
  },
  methods: {
    getPageInfo() {
      if (this.galleryBannerConfigs.data && this.galleryBannerConfigs.data.length > 0) {
        let title = "";
        this.galleryBannerConfigs.data.forEach(item => {
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
// CONCATENATED MODULE: ./pages/gallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_galleryvue_type_script_lang_js_ = (galleryvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/gallery.vue





/* normalize component */

var gallery_component = Object(componentNormalizer["a" /* default */])(
  pages_galleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "50353764"
  
)

/* harmony default export */ var gallery = __webpack_exports__["default"] = (gallery_component.exports);

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(17).default
module.exports.__inject__ = function (context) {
  add("fbb88f64", content, true, context)
};

/***/ }),

/***/ 74:
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
  "880e4e28"
  
)

/* harmony default export */ var ContactBtn = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_7bcb9060_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_7bcb9060_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_7bcb9060_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_7bcb9060_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_7bcb9060_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(16);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".aicon[data-v-7bcb9060]{height:46px;width:46px;text-align:center;line-height:46px;border-radius:50%;background:#fbf0ee;font-size:14px;color:#817a78;margin-left:5px;transition:all .3s ease-out 0s}@media (min-width:768px){.desktop-address[data-v-7bcb9060]{display:none}.mobile-address[data-v-7bcb9060]{display:inline}}@media (max-width:767px){.desktop-address[data-v-7bcb9060]{display:inline}.mobile-address[data-v-7bcb9060]{display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 77:
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
var ContactBtn = __webpack_require__(74);

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
  
  var style0 = __webpack_require__(75)
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
  "7be67b03"
  
)

/* harmony default export */ var Nav = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=541f9d82&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<section class=\"footer-area\" data-v-541f9d82>", "</section>", [_vm._ssrNode("<div class=\"container\" data-v-541f9d82>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-541f9d82>", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-6 col-sm-8\" data-v-541f9d82>", "</div>", _vm._l(_vm.footerConfigs.data, function (footerConfigs) {
    return _vm._ssrNode("<div class=\"footer-about mt-30\" data-v-541f9d82>", "</div>", [_vm._ssrNode("<div class=\"logo\" data-v-541f9d82>", "</div>", [_c('nuxt-link', {
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
    })], 1)], 1), _vm._ssrNode(" <p data-v-541f9d82>" + _vm._ssrEscape("\n              " + _vm._s(footerConfigs.attributes.description.data.attributes.description) + "\n            ") + "</p> <ul data-v-541f9d82><li data-v-541f9d82><a" + _vm._ssrAttr("href", `callto:${footerConfigs.attributes.phone.data.attributes.phone}`) + " data-v-541f9d82><i class=\"flaticon-phone-call\" data-v-541f9d82></i>" + _vm._ssrEscape(" +" + _vm._s(footerConfigs.attributes.phone.data.attributes.phone)) + "</a></li> <li data-v-541f9d82><a" + _vm._ssrAttr("href", `${footerConfigs.attributes.instagramlink.data.attributes.instagramlink}`) + " target=\"_blank\" data-v-541f9d82><i class=\"fa fa-instagram\" data-v-541f9d82></i> depoantalya</a></li></ul>")], 2);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-2 col-md-6 col-sm-6\" data-v-541f9d82>", "</div>", _vm._l(_vm.footerConfigs.data, function (footerConfigs) {
    return _vm._ssrNode("<div class=\"footer-list mt-30\" data-v-541f9d82>", "</div>", [_vm._ssrNode("<h4 class=\"title\" data-v-541f9d82>" + _vm._ssrEscape("\n              " + _vm._s(footerConfigs.attributes.companyTitle) + "\n            ") + "</h4> "), _vm._ssrNode("<ul data-v-541f9d82>", "</ul>", _vm._l(footerConfigs.attributes.nav_configs.data, function (footerConfigs) {
      return _vm._ssrNode("<li data-v-541f9d82>", "</li>", [_c('nuxt-link', {
        attrs: {
          "to": _vm.localePath(footerConfigs.attributes.slug)
        }
      }, [_vm._v(_vm._s(footerConfigs.attributes.navTitle))])], 1);
    }), 0)], 2);
  }), 0), _vm._ssrNode(" <div class=\"col-lg-3 col-md-6\" data-v-541f9d82>" + _vm._ssrList(_vm.footerConfigs.data, function (footerConfigs) {
    return "<div class=\"footer-address mt-30\" data-v-541f9d82><h3 class=\"title\" data-v-541f9d82>" + _vm._ssrEscape("\n              " + _vm._s(footerConfigs.attributes.adressTitle) + "\n            ") + "</h3> <p data-v-541f9d82><i class=\"fa fa-map-marker\" data-v-541f9d82></i>" + _vm._ssrEscape("\n              " + _vm._s(footerConfigs.attributes.adressDescription) + "\n            ") + "</p> <iframe" + _vm._ssrAttr("src", `${footerConfigs.attributes.googleMapUrl}`) + " width=\"600\" height=\"450\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\" style=\"border: 0\" data-v-541f9d82></iframe></div>";
  }) + "</div>")], 2)]), _vm._ssrNode(" <div class=\"footer-copyright-area\" data-v-541f9d82><div class=\"container\" data-v-541f9d82><div class=\"row\" data-v-541f9d82><div class=\"col-lg-12\" data-v-541f9d82>" + _vm._ssrList(_vm.footerConfigs.data, function (footerConfigs) {
    return "<div class=\"footer-copyright d-block d-md-flex justify-content-center align-items-center\" data-v-541f9d82><p data-v-541f9d82>" + _vm._ssrEscape("\n                © Copyright " + _vm._s(new Date().getFullYear()) + " by\n                ") + "<span data-v-541f9d82><ul data-v-541f9d82><li data-v-541f9d82><a" + _vm._ssrAttr("href", `${footerConfigs.attributes.copyRightLink}`) + " target=\"_blank\" data-v-541f9d82>" + _vm._ssrEscape(_vm._s(footerConfigs.attributes.copyRightText)) + "</a></li></ul></span></p></div>";
  }) + "</div></div></div></div> "), _vm._ssrNode("<div class=\"footer-pattern\" data-v-541f9d82>", "</div>", [_c('nuxt-img', {
    attrs: {
      "loading": "lazy",
      "placeholder": "blur",
      "format": "webp",
      "src": "/assets/images/footer-pattern.png",
      "alt": ""
    }
  })], 1)], 2), _vm._ssrNode(" <div class=\"go-top-area\" data-v-541f9d82><div class=\"go-top-wrap\" data-v-541f9d82><div class=\"go-top-btn-wrap\" data-v-541f9d82><div" + _vm._ssrClass(null, `go-top go-top-btn ${_vm.scrollBtn ? 'active' : ''}`) + " data-v-541f9d82><i class=\"fa fa-angle-double-up\" data-v-541f9d82></i> <i class=\"fa fa-angle-double-up\" data-v-541f9d82></i></div></div></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=541f9d82&scoped=true&

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&

/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  name: "Footer",
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
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Footer.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "541f9d82",
  "663fa4eb"
  
)

/* harmony default export */ var Footer = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 80:
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
  "82ac7668"
  
)

/* harmony default export */ var PageHeader = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetGallery; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GetGallery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query GetGallery($locale: I18NLocaleCode) {
    fotoGalleries(locale: $locale) {
      data {
        id
      }
      data {
        attributes {
          title
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

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetGalleryBanner; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GetGalleryBanner = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query GetContactBanner($locale: I18NLocaleCode) {
    galleryBannerConfigs(locale: $locale) {
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

/***/ })

};;
//# sourceMappingURL=gallery.js.map