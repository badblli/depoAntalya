exports.ids = [5];
exports.modules = {

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/get-in-touch.vue?vue&type=template&id=26a5bda0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', _vm._l(_vm.contactBannerConfigs.data, function (contactBannerConfigs) {
    return _vm._ssrNode("<div>", "</div>", [_c('Nav'), _vm._ssrNode(" "), _c('PageHeader', {
      attrs: {
        "title": `${contactBannerConfigs.attributes.title}`,
        "banner": `${contactBannerConfigs.attributes.banner.data.attributes.url}`,
        "slug1": `${contactBannerConfigs.attributes.slug1}`,
        "slug2": `${contactBannerConfigs.attributes.slug2}`
      }
    }), _vm._ssrNode(" "), _c('WriteMessageTwo'), _vm._ssrNode(" "), _c('Footer')], 2);
  }), 0);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/get-in-touch.vue?vue&type=template&id=26a5bda0&

// EXTERNAL MODULE: ./components/Nav.vue + 5 modules
var Nav = __webpack_require__(78);

// EXTERNAL MODULE: ./components/PageHeader.vue + 4 modules
var PageHeader = __webpack_require__(81);

// EXTERNAL MODULE: ./components/Footer.vue + 5 modules
var Footer = __webpack_require__(79);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/WriteMessageTwo.vue?vue&type=template&id=06c98b48&scoped=true&
var WriteMessageTwovue_type_template_id_06c98b48_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "write-massage-area pb-120"
  }, [_vm._ssrNode("<div class=\"container\" data-v-06c98b48>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-06c98b48>", "</div>", [_vm._ssrNode("<div class=\"col-lg-8\" data-v-06c98b48>", "</div>", _vm._l(_vm.contacts.data, function (contacts) {
    return _vm._ssrNode("<div class=\"write-massage-content\" data-v-06c98b48>", "</div>", [_vm._ssrNode("<div class=\"write-massage-title\" data-v-06c98b48><h3 class=\"title\" data-v-06c98b48>" + _vm._ssrEscape(_vm._s(contacts.attributes.title)) + "</h3></div> "), _vm._ssrNode("<div class=\"write-massage-input\" data-v-06c98b48>", "</div>", [_vm._ssrNode("<form data-v-06c98b48>", "</form>", [_vm._ssrNode("<div class=\"row\" data-v-06c98b48>", "</div>", [_vm._ssrNode("<div class=\"col-lg-6\" data-v-06c98b48><div class=\"input-box mt-10\" data-v-06c98b48><input type=\"text\" required=\"required\"" + _vm._ssrAttr("placeholder", `${contacts.attributes.name}`) + _vm._ssrAttr("value", _vm.formData.name) + " data-v-06c98b48></div></div> <div class=\"col-lg-6\" data-v-06c98b48><div class=\"input-box mt-10\" data-v-06c98b48><input type=\"email\"" + _vm._ssrAttr("placeholder", `${contacts.attributes.email}`) + _vm._ssrAttr("value", _vm.formData.email) + " data-v-06c98b48></div></div> <div class=\"col-lg-6\" data-v-06c98b48><div class=\"input-box mt-10\" data-v-06c98b48><input type=\"text\" required=\"required\"" + _vm._ssrAttr("placeholder", `${contacts.attributes.phoneTitle}`) + _vm._ssrAttr("value", _vm.formData.phone) + " data-v-06c98b48></div></div> <div class=\"col-lg-6\" data-v-06c98b48><div class=\"input-box mt-10\" data-v-06c98b48><input type=\"text\"" + _vm._ssrAttr("placeholder", `${contacts.attributes.subject}`) + _vm._ssrAttr("value", _vm.formData.subject) + " data-v-06c98b48></div></div> "), _vm._ssrNode("<div class=\"col-lg-6\" data-v-06c98b48>", "</div>", [_vm._ssrNode("<div class=\"input-box mt-10\" data-v-06c98b48>", "</div>", [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.formData.depoSize,
        expression: "formData.depoSize"
      }],
      attrs: {
        "id": "depo",
        "name": "depo"
      },
      on: {
        "change": function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(_vm.formData, "depoSize", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c('option', {
      attrs: {
        "value": "",
        "disabled": "",
        "selected": "",
        "hidden": ""
      }
    }, [_vm._v("Depo")]), _vm._v(" "), _vm._l(contacts.attributes.depo_configs.data, function (contacts) {
      return _c('option', {
        key: contacts.id,
        staticStyle: {
          "height": "50px"
        },
        domProps: {
          "value": contacts.attributes.title + ' ' + contacts.attributes.size + contacts.attributes.metrekare
        }
      }, [_vm._v("\n                         " + _vm._s(contacts.attributes.title) + " -\n                         " + _vm._s(contacts.attributes.size) + "\n                         ( " + _vm._s(contacts.attributes.metrekare) + ")\n                       ")]);
    })], 2)])]), _vm._ssrNode(" <div class=\"col-lg-6\" data-v-06c98b48><div class=\"input-box mt-10\" data-v-06c98b48><input type=\"number\" min=\"1\" max=\"50\"" + _vm._ssrAttr("placeholder", `${contacts.attributes.unit}`) + _vm._ssrAttr("value", _vm.formData.depoUnit) + " data-v-06c98b48></div></div> <div class=\"col-lg-6\" data-v-06c98b48><div class=\"input-box mt-10\" data-v-06c98b48><input type=\"date\" placeholder=\"Date\"" + _vm._ssrAttr("value", _vm.formData.date) + " data-v-06c98b48></div></div> <div class=\"col-lg-6\" data-v-06c98b48><div class=\"input-box mt-10\" data-v-06c98b48><input type=\"time\" placeholder=\"Time\"" + _vm._ssrAttr("value", _vm.formData.time) + " data-v-06c98b48></div></div> "), _vm._ssrNode("<div class=\"col-lg-12\" data-v-06c98b48>", "</div>", [_vm._ssrNode("<div class=\"input-box mt-10\" data-v-06c98b48>", "</div>", [_vm._ssrNode("<textarea name=\"message\" id=\"#\" cols=\"30\" rows=\"10\"" + _vm._ssrAttr("placeholder", `${contacts.attributes.message}`) + " data-v-06c98b48>" + _vm._ssrEscape(_vm._s(_vm.formData.message)) + "</textarea> "), _c('recaptcha'), _vm._ssrNode(" <button type=\"submit\" class=\"main-btn main-btn-2\" data-v-06c98b48>" + _vm._ssrEscape("\n                       " + _vm._s(contacts.attributes.sendButton) + "\n                     ") + "</button>")], 2)])], 2)])])], 2);
  }), 0), _vm._ssrNode(" <div class=\"col-lg-4\" data-v-06c98b48>" + _vm._ssrList(_vm.contacts.data, function (siteConfigs) {
    return "<div class=\"get-in-touch-info\" data-v-06c98b48><span data-v-06c98b48>" + _vm._ssrEscape(_vm._s(siteConfigs.attributes.title2)) + "</span> <p data-v-06c98b48>" + _vm._ssrEscape("\n             " + _vm._s(siteConfigs.attributes.description) + "\n           ") + "</p> <h3 class=\"title\" data-v-06c98b48><a" + _vm._ssrAttr("href", `callto:${siteConfigs.attributes.phone.data.attributes.phone}`) + " style=\"color: #fff\" data-v-06c98b48><i class=\"flaticon-phone-call\" data-v-06c98b48></i>" + _vm._ssrEscape(" +" + _vm._s(siteConfigs.attributes.phone.data.attributes.phone)) + "</a></h3></div>";
  }) + "</div>")], 2)]), _vm._ssrNode(" <div data-v-06c98b48>" + (_vm.showModal ? "<div tabindex=\"-1\" role=\"dialog\" class=\"modal\" data-v-06c98b48>" + _vm._ssrList(_vm.siteConfigs.data, function (siteConfigs) {
    return "<div role=\"document\" class=\"modal-dialog\" data-v-06c98b48><div class=\"modal-content\" data-v-06c98b48><div class=\"modal-header\" data-v-06c98b48><button type=\"button\" aria-label=\"Close\" class=\"close\" data-v-06c98b48><span aria-hidden=\"true\" data-v-06c98b48>×</span></button></div> <div class=\"modal-body\" data-v-06c98b48><p data-v-06c98b48>" + _vm._ssrEscape(" " + _vm._s(siteConfigs.attributes.successMessage) + " ") + "</p></div> <div class=\"modal-footer\" data-v-06c98b48><button type=\"button\" class=\"btn btn-secondary\" data-v-06c98b48>✔️</button></div></div></div>";
  }) + "</div>" : "<!---->") + " " + (_vm.recaptcha ? "<div tabindex=\"-1\" role=\"dialog\" class=\"modal\" data-v-06c98b48>" + _vm._ssrList(_vm.siteConfigs.data, function (siteConfigs) {
    return "<div role=\"document\" class=\"modal-dialog\" data-v-06c98b48><div class=\"modal-content\" data-v-06c98b48><div class=\"modal-header\" data-v-06c98b48><button type=\"button\" aria-label=\"Close\" class=\"close\" data-v-06c98b48><span aria-hidden=\"true\" data-v-06c98b48>×</span></button></div> <div class=\"modal-body\" data-v-06c98b48><p data-v-06c98b48>" + _vm._ssrEscape(" " + _vm._s(siteConfigs.attributes.errorMessage) + " ") + "</p></div> <div class=\"modal-footer\" data-v-06c98b48><button type=\"button\" class=\"btn btn-secondary\" data-v-06c98b48>✔️</button></div></div></div>";
  }) + "</div>" : "<!---->") + "</div>")], 2);
};
var WriteMessageTwovue_type_template_id_06c98b48_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/WriteMessageTwo.vue?vue&type=template&id=06c98b48&scoped=true&

// EXTERNAL MODULE: ./graphql/GetContact.js
var GetContact = __webpack_require__(82);

// EXTERNAL MODULE: ./graphql/GetAllSiteConfig.js
var GetAllSiteConfig = __webpack_require__(12);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(24);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WriteMessageTwo.vue?vue&type=script&lang=js&



/* harmony default export */ var WriteMessageTwovue_type_script_lang_js_ = ({
  name: "WriteMessageTwo",
  data() {
    return {
      contacts: [],
      siteConfigs: [],
      formSubmitted: false,
      formLoading: false,
      disabled: false,
      showModal: false,
      formError: "",
      recaptcha: false,
      formData: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        depoSize: "",
        depoUnit: "",
        date: "",
        time: ""
      }
    };
  },
  methods: {
    resetForm() {
      this.formData.name = "";
      this.formData.email = "";
      this.formData.phone = "";
      this.formData.subject = "";
      this.formData.message = "";
      this.formData.depoSize = "";
      this.formData.depoUnit = "";
      this.formData.date = "";
      this.formData.time = "";
      this.$recaptcha.reset();
    },
    closeModal() {
      this.showModal = false;
      this.recaptcha = false;
      this.resetForm();
    },
    async submitForm() {
      const mutation = external_graphql_tag_default.a`
    mutation sendEmail(
      $name: String!
      $email: String!
      $phone: String
      $subject: String
      $message: String
      $date: String
      $time: String
      $depoSize: String
      $depoUnit: String
    ) {
      createSendEmail(
        data: {
          name: $name
          email: $email
          phone: $phone
          subject: $subject
          message: $message
          date: $date
          time: $time
          depoSize: $depoSize
          depoUnit: $depoUnit
        }
      ) {
        data {
          attributes {
            name
            email
            phone
            subject
            message
            date
            time
            depoSize
            depoUnit
          }
        }
      }
    }
  `;
      try {
        const token = await this.$recaptcha.getResponse();
        console.log('ReCaptcha token:', token);
        if (!token) {
          this.formError = "Please complete the reCAPTCHA.";
          console.log('ReCaptcha token:', token);
          this.recaptcha = true;
          return;
        }
        await this.$apollo.mutate({
          mutation: mutation,
          variables: {
            name: this.formData.name,
            email: this.formData.email,
            phone: this.formData.phone,
            subject: this.formData.subject,
            message: this.formData.message,
            date: this.formData.date,
            time: this.formData.time,
            depoSize: this.formData.depoSize,
            depoUnit: this.formData.depoUnit
          }
        });

        // Mutation was successful, show the modal
        this.showModal = true;
        this.disabled = true;
      } catch (error) {
        // Handle any errors that occurred during the mutation
        console.error(error);
        this.showModal = false;
        this.recaptcha = true;
        this.formError = "Please complete the reCAPTCHA.";
        await this.$recaptcha.reset();
      } finally {
        // Reset the loading state after the mutation completes
        this.formLoading = false;
        this.disabled = false;
      }
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
// CONCATENATED MODULE: ./components/WriteMessageTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WriteMessageTwovue_type_script_lang_js_ = (WriteMessageTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/WriteMessageTwo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(97)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WriteMessageTwovue_type_script_lang_js_,
  WriteMessageTwovue_type_template_id_06c98b48_scoped_true_render,
  WriteMessageTwovue_type_template_id_06c98b48_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "06c98b48",
  "345da138"
  
)

/* harmony default export */ var WriteMessageTwo = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/CompanyLogo.vue?vue&type=template&id=aa169930&scoped=true&
var CompanyLogovue_type_template_id_aa169930_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "company-logos-area"
  }, [_vm._ssrNode("<div class=\"container\" data-v-aa169930>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-aa169930>", "</div>", [_vm._ssrNode("<div class=\"col-lg-5\" data-v-aa169930><div class=\"company-logos-text\" data-v-aa169930><h3 class=\"title\" data-v-aa169930>\n            Clients we <br data-v-aa169930>\n            have worked <br data-v-aa169930>\n            with.\n          </h3></div></div> "), _vm._ssrNode("<div class=\"col-lg-7\" data-v-aa169930>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-aa169930>", "</div>", [_vm._ssrNode("<div class=\"col-sm-4\" data-v-aa169930>", "</div>", [_vm._ssrNode("<div class=\"logo-item mt-15\" data-v-aa169930>", "</div>", [_c('nuxt-img', {
    attrs: {
      "loading": "lazy",
      "placeholder": "blur",
      "src": "/assets/images/brand-1.png",
      "alt": ""
    }
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-sm-4\" data-v-aa169930>", "</div>", [_vm._ssrNode("<div class=\"logo-item mt-15\" data-v-aa169930>", "</div>", [_c('nuxt-img', {
    attrs: {
      "loading": "lazy",
      "placeholder": "blur",
      "src": "/assets/images/brand-1.png",
      "alt": ""
    }
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-sm-4\" data-v-aa169930>", "</div>", [_vm._ssrNode("<div class=\"logo-item mt-15\" data-v-aa169930>", "</div>", [_c('nuxt-img', {
    attrs: {
      "loading": "lazy",
      "placeholder": "blur",
      "src": "/assets/images/brand-1.png",
      "alt": ""
    }
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-sm-4\" data-v-aa169930>", "</div>", [_vm._ssrNode("<div class=\"logo-item mt-80\" data-v-aa169930>", "</div>", [_c('nuxt-img', {
    attrs: {
      "loading": "lazy",
      "placeholder": "blur",
      "src": "/assets/images/brand-1.png",
      "alt": ""
    }
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-sm-4\" data-v-aa169930>", "</div>", [_vm._ssrNode("<div class=\"logo-item mt-80\" data-v-aa169930>", "</div>", [_c('nuxt-img', {
    attrs: {
      "loading": "lazy",
      "placeholder": "blur",
      "src": "/assets/images/brand-1.png",
      "alt": ""
    }
  })], 1)])], 2)])], 2)])]);
};
var CompanyLogovue_type_template_id_aa169930_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/CompanyLogo.vue?vue&type=template&id=aa169930&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CompanyLogo.vue?vue&type=script&lang=js&
/* harmony default export */ var CompanyLogovue_type_script_lang_js_ = ({
  name: "CompanyLogo"
});
// CONCATENATED MODULE: ./components/CompanyLogo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CompanyLogovue_type_script_lang_js_ = (CompanyLogovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/CompanyLogo.vue



function CompanyLogo_injectStyles (context) {
  
  
}

/* normalize component */

var CompanyLogo_component = Object(componentNormalizer["a" /* default */])(
  components_CompanyLogovue_type_script_lang_js_,
  CompanyLogovue_type_template_id_aa169930_scoped_true_render,
  CompanyLogovue_type_template_id_aa169930_scoped_true_staticRenderFns,
  false,
  CompanyLogo_injectStyles,
  "aa169930",
  "18249f28"
  
)

/* harmony default export */ var CompanyLogo = (CompanyLogo_component.exports);
// EXTERNAL MODULE: ./graphql/GetContactBanner.js
var GetContactBanner = __webpack_require__(87);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/get-in-touch.vue?vue&type=script&lang=js&






/* harmony default export */ var get_in_touchvue_type_script_lang_js_ = ({
  components: {
    CompanyLogo: CompanyLogo,
    WriteMessageTwo: WriteMessageTwo,
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
      contactBannerConfigs: []
    };
  },
  apollo: {
    contactBannerConfigs: {
      prefetch: true,
      query: GetContactBanner["a" /* GetContactBanner */],
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
      if (this.contactBannerConfigs.data && this.contactBannerConfigs.data.length > 0) {
        let title = "";
        this.contactBannerConfigs.data.forEach(item => {
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
// CONCATENATED MODULE: ./pages/get-in-touch.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_get_in_touchvue_type_script_lang_js_ = (get_in_touchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/get-in-touch.vue





/* normalize component */

var get_in_touch_component = Object(componentNormalizer["a" /* default */])(
  pages_get_in_touchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "64dbf2e8"
  
)

/* harmony default export */ var get_in_touch = __webpack_exports__["default"] = (get_in_touch_component.exports);

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
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

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_7bcb9060_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_7bcb9060_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_7bcb9060_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_7bcb9060_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_7bcb9060_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(16);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".aicon[data-v-7bcb9060]{height:46px;width:46px;text-align:center;line-height:46px;border-radius:50%;background:#fbf0ee;font-size:14px;color:#817a78;margin-left:5px;transition:all .3s ease-out 0s}@media (min-width:768px){.desktop-address[data-v-7bcb9060]{display:none}.mobile-address[data-v-7bcb9060]{display:inline}}@media (max-width:767px){.desktop-address[data-v-7bcb9060]{display:inline}.mobile-address[data-v-7bcb9060]{display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 78:
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
var ContactBtn = __webpack_require__(75);

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
  
  var style0 = __webpack_require__(76)
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

/***/ 79:
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

/***/ 81:
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

/***/ 82:
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

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetContactBanner; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GetContactBanner = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query GetContactBanner($locale: I18NLocaleCode) {
    contactBannerConfigs(locale: $locale) {
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

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(17).default
module.exports.__inject__ = function (context) {
  add("f7c5cb46", content, true, context)
};

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WriteMessageTwo_vue_vue_type_style_index_0_id_06c98b48_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WriteMessageTwo_vue_vue_type_style_index_0_id_06c98b48_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WriteMessageTwo_vue_vue_type_style_index_0_id_06c98b48_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WriteMessageTwo_vue_vue_type_style_index_0_id_06c98b48_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WriteMessageTwo_vue_vue_type_style_index_0_id_06c98b48_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(16);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".disabled[data-v-06c98b48]{opacity:.5;pointer-events:none}.modal[data-v-06c98b48]{position:fixed;top:0;left:0;z-index:1e+30;display:flex;justify-content:center;align-items:center;width:100%;height:100%;overflow:hidden;outline:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=get-in-touch.js.map