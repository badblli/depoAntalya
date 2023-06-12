<template>
  <div>
    <section class="footer-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-8">
            <div
              class="footer-about mt-30"
              v-for="footerConfigs in footerConfigs.data"
              v-bind:key="footerConfigs.id"
            >
              <div class="logo">
                <nuxt-link :to="localePath('/index')"
                  ><nuxt-img
                    loading="lazy"
                    placeholder="blur"
                    format="webp"
                    :src="`https://strapi.badblli.dev${footerConfigs.attributes.footerLogo.data.attributes.url}`"
                    :alt="`${footerConfigs.attributes.footerLogo.data.attributes.name}`"
                /></nuxt-link>
              </div>
              <p>
                {{
                  footerConfigs.attributes.description.data.attributes
                    .description
                }}
              </p>
              <ul>
                <li>
                  <a
                    :href="`callto:${footerConfigs.attributes.phone.data.attributes.phone}`"
                    ><i class="flaticon-phone-call"></i> +{{
                      footerConfigs.attributes.phone.data.attributes.phone
                    }}</a
                  >
                </li>
                <li>
                  <a
                    :href="`${footerConfigs.attributes.instagramlink.data.attributes.instagramlink}`"
                    target="_blank"
                    ><i class="fa fa-instagram"></i> depoantalya</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6">
            <div
              class="footer-list mt-30"
              v-for="footerConfigs in footerConfigs.data"
              v-bind:key="footerConfigs.id"
            >
              <h4 class="title">
                {{ footerConfigs.attributes.companyTitle }}
              </h4>
              <ul>
                <li
                  v-for="footerConfigs in footerConfigs.attributes.nav_configs
                    .data"
                  v-bind:key="footerConfigs.id"
                >
                  <nuxt-link :to="localePath(footerConfigs.attributes.slug)">{{
                    footerConfigs.attributes.navTitle
                  }}</nuxt-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div
              class="footer-address mt-30"
              v-for="footerConfigs in footerConfigs.data"
              v-bind:key="footerConfigs.id"
            >
              <h3 class="title">
                {{ footerConfigs.attributes.adressTitle }}
              </h3>
              <p>
                <i class="fa fa-map-marker"></i>
                {{ footerConfigs.attributes.adressDescription }}
              </p>
              <iframe
                :src="`${footerConfigs.attributes.googleMapUrl}`"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div
                class="footer-copyright d-block d-md-flex justify-content-center align-items-center"
                v-for="footerConfigs in footerConfigs.data"
                v-bind:key="footerConfigs.id"
              >
                <p>
                  © Copyright {{ new Date().getFullYear() }} by
                  <span>
                    <ul>
                      <li>
                        <a
                          :href="`${footerConfigs.attributes.copyRightLink}`"
                          target="_blank"
                          >{{ footerConfigs.attributes.copyRightText }}</a
                        >
                      </li>
                    </ul>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-pattern">
        <nuxt-img
          loading="lazy"
          placeholder="blur"
          format="webp"
          src="/assets/images/footer-pattern.png"
          alt=""
        />
      </div>
      <!-- <div
        class="footer-logo"
        style="opacity: 0.3"
        v-for="footerConfigs in footerConfigs.data"
        v-bind:key="footerConfigs.id"
      >
        <nuxt-img  loading="lazy" placeholder="blur"
          sizes="sm:100vw md:50vw lg:400px"
          format="webp"
          loading="lazy"
          :src="`https://strapi.badblli.dev${footerConfigs.attributes.footerLogo.data.attributes.url}`"
          :alt="`${footerConfigs.attributes.footerLogo.data.attributes.name}`"
        />
      </div> -->
    </section>

    <div class="go-top-area">
      <div class="go-top-wrap">
        <div class="go-top-btn-wrap">
          <div
            @click="scrollTop"
            :class="`go-top go-top-btn ${scrollBtn ? 'active' : ''}`"
          >
            <i class="fa fa-angle-double-up"></i>
            <i class="fa fa-angle-double-up"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetFooter } from "../graphql/GetFooter";
export default {
  name: "Footer",
  data() {
    return {
      scrollBtn: false,
      footerConfigs: [],
    };
  },
  apollo: {
    footerConfigs: {
      prefetch: true,
      query: GetFooter,
      variables() {
        return { locale: this.$i18n.locale };
      },
      fetchPolicy: "no-cache",
    },
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
    },
  },
};
</script>

<style scoped></style>
