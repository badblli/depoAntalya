<script>
import { GetAllSiteConfig } from "../graphql/GetAllSiteConfig";
import { GetAllNavConfig } from "../graphql/GetAllNavConfig";
import ContactBtn from "./ContactBtn";

export default {
  name: "Nav",
  data({ $i18n }) {
    return {
      sticky: false,
      mobileToggle: false,
      i18NLocales: [],
      navConfigs: [],
      siteConfigs: [],
      localeName: $i18n.locales.find((i18n) => i18n.code === $i18n.locale).name,
    };
  },
  components: {
    ContactBtn,
  },
  apollo: {
    navConfigs: {
      prefetch: true,
      query: GetAllNavConfig,
      variables() {
        return { locale: this.$i18n.locale };
      },
      fetchPolicy: "no-cache",
    },
    siteConfigs: {
      prefetch: true,
      query: GetAllSiteConfig,
      variables() {
        return { locale: this.$i18n.locale };
      },
      fetchPolicy: "no-cache",
    },
  },
  
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
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
    },
  },
};
</script>

<template>
  <div>
    <header class="header-area"> 
      <div class="header-top-area">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 pr-0">
              <div
                class="header-top"
                style="height: 50px"
                v-for="siteConfigs in siteConfigs.data"
                v-bind:key="siteConfigs.id"
              >
                <ul>
            
                  <li>
                    <a :href="`tel:${siteConfigs.attributes.phone}`">
  <i class="flaticon-phone-call"></i> +{{ siteConfigs.attributes.phone }}
</a>

                  </li>
                  <li>
                    <a
                      :href="`${siteConfigs.attributes.instagramlink}`"
                      target="_blank"
                    >
                      <i class="fa fa-instagram"></i
                      >{{ siteConfigs.attributes.instagram }}
                    </a>
                  </li>
                  <li>
    <a
      :href="`${siteConfigs.attributes.googleMapUrl}`"
      target="_blank"
    >
      <i class="flaticon-placeholder"></i>
      <span class="desktop-address">{{ siteConfigs.attributes.address }}</span>
      <span class="mobile-address">{{ getCityDistrict(siteConfigs.attributes.address) }}</span>
    </a>
  </li>
                  
                </ul>
                <div class="d-none d-sm-block footer-list">
                  <ContactBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div :class="`main-header ${sticky ? 'sticky' : ''}`">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div
                class="main-header-item d-flex justify-content-between align-items-center w-100"
              >
                <div class="main-header-menus w-100 d-flex">
                  <div
                    class="header-logo"
                    v-for="siteConfigs in siteConfigs.data"
                    v-bind:key="siteConfigs.id"
                  >
                    <nuxt-link :to="localePath('/')">
                      <nuxt-img
                        loading="lazy"
                        placeholder="blur"
                        :src="`https://strapi.badblli.dev${siteConfigs.attributes.logo.data.attributes.url}`"
                        :alt="`${siteConfigs.attributes.logo.data.attributes.name}`"
                        width="200px"
                        height="150px"
                        style="height: auto; z-index: 9999999999999999"
                      />
                    </nuxt-link>
                  </div>
                  <div
                    class="header-menu w-100 d-none d-lg-flex justify-content-between"
                  >
                    <ul>
                      <li
                        class="wow fadeInLeft animated title"
                        data-wow-duration="2s"
                        data-wow-delay="5s"
                        v-for="navConfigs in navConfigs.data"
                        v-bind:key="navConfigs.id"
                      >
                        <nuxt-link
                          :to="localePath(navConfigs.attributes.slug)"
                          exact-active-class="active"
                          inactive-class=""
                          >{{ navConfigs.attributes.navTitle }}</nuxt-link
                        >
                      </li>
                      <!-- <li>
                        <nuxt-link class="active" to="#">Anasayfa</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/about">Hakkımızda</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/events">Hizmetlerimiz</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/pricing">Depolar</nuxt-link>
                      </li>

                      <li><nuxt-link to="/contact">İletişim</nuxt-link></li> -->
                    </ul>
                    <ul class="mr-5">
                      <li>
                        <a>
                          <nuxt-img
                            loading="lazy"
                            placeholder="blur"
                            :src="`/assets/images/country/${$i18n.locale}.png`"
                            :alt="`${localeName}`"
                          />
                          {{ localeName }} <i class="fa fa-angle-down"> </i>
                        </a>

                        <ul class="sub-menu">
                          <li
                            v-if="availableLocales"
                            v-for="locale in availableLocales"
                            :key="locale.code"
                          >
                            <nuxt-link :to="switchLocalePath(locale.code)">
                              <nuxt-img
                                loading="lazy"
                                placeholder="blur"
                                :src="`/assets/images/country/${locale.code}.png`"
                                :alt="`${localeName}`"
                              />
                              {{ locale.name }}</nuxt-link
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div class="header-social d-flex align-items-center">
                  <ul class="d-none d-lg-block">
                    <!-- <li>
                      <nuxt-link to="$"><i class="fa fa-facebook-square"></i></nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="$"><i class="fa fa-twitter"></i></nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="$"><i class="fa fa-dribbble"></i></nuxt-link>
                    </li> -->
                    <!-- <li>
                      <nuxt-link to="$"><i class="fa fa-instagram"></i></nuxt-link>
                    </li> -->
                  </ul>
                  <div
                    @click="mobileToggle = !mobileToggle"
                    class="toggle-btn ml-30 canvas_open d-lg-none d-block"
                  >
                    <i class="fa fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div :class="`off_canvars_overlay ${mobileToggle ? 'active' : ''}`"></div>
    <div class="offcanvas_menu">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div
              :class="`offcanvas_menu_wrapper ${mobileToggle ? 'active' : ''}`"
            >
              <div class="canvas_close">
                <a
                  @click="mobileToggle = !mobileToggle"
                  href="javascript:void(0)"
                  ><i class="fa fa-times"></i
                ></a>
              </div>
              <div class="offcanvas-social">
                <div class="header-logo">
                  <nuxt-link :to="localePath('/')">
                    <nuxt-img
                      loading="lazy"
                      placeholder="blur"
                      src="/assets/images/logo_small.svg"
                      alt="logo"
                      width="200px"
                      height="150px"
                      style="height: auto; z-index: 9999999999999999"
                    />
                  </nuxt-link>
                </div>
              </div>
              <div id="menu" class="text-left">
                <ul class="offcanvas_main_menu">
                  <li
                    v-for="navConfigs in navConfigs.data"
                    v-bind:key="navConfigs.id"
                  >
                    <nuxt-link
                      :to="localePath(navConfigs.attributes.slug)"
                      exact-active-class="active"
                      inactive-class=""
                      >{{ navConfigs.attributes.navTitle }}</nuxt-link
                    >
                  </li>
                </ul>
             
              </div>
            
              <div class="offcanvas_footer">
                <div class="row mb-20 justify-content-center">
                  <ul>
                    <nuxt-link
                      v-for="locale in availableLocales"
                      :key="locale.code"
                      :to="switchLocalePath(locale.code)"
                    >
                      <nuxt-img
                        loading="lazy"
                        placeholder="blur"
                        class="mx-3"
                        :src="`/assets/images/country/${locale.code}.png`"
                        :alt="`${localeName}`"
                        width="30px"
                        height="20px"
                      />
                    </nuxt-link>
                  </ul>
                </div>
                <div class="row d-flex flex-row mr-0 justify-content-center">
                  <span  v-for="siteConfigs in siteConfigs.data"
                v-bind:key="siteConfigs.id"> 
                    <a class="aicon" :href="`tel:${siteConfigs.attributes.phone}`"
                      ><i class="flaticon-phone-call"></i
                    ></a>
                  
                    <a
                      class="aicon"
                      :href="`${siteConfigs.attributes.instagramlink}`"
                      target="_blank"
                      ><i class="fa fa-instagram"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.aicon {
  height: 46px;
  width: 46px;
  text-align: center;
  line-height: 46px;
  border-radius: 50%;
  background: #fbf0ee;
  font-size: 14px;
  color: #817a78;
  margin-left: 5px;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
}

@media (min-width: 768px) {
  .desktop-address {
    display: none;
  }
  .mobile-address {
    display: inline;
  }
}

@media (max-width: 767px) {
  .desktop-address {
    display: inline;
  }
  .mobile-address {
    display: none;
  }
}
</style>
