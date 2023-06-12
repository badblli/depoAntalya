<template>
  <section class="we-listen-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="we-listen-content">
            <div>
              <h3
                v-for="service in services.data"
                v-bind:key="service.id"
                class="title"
              >
                {{ service.attributes.title2 }}
              </h3>
              <div class="d-flex" style="margin-top: -100px">
                <div
                  class="ml-20 thumb"
                  v-for="services in services.data"
                  v-bind:key="services.id"
                >
                  <nuxt-img
                    loading="lazy"
                    placeholder="blur"
                    :src="`https://strapi.badblli.dev${services.attributes.icon.data.attributes.url}`"
                    :alt="`${services.attributes.icon.data.attributes.name}`"
                    width="75"
                    height="75"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div>
            <div class="faq-accordion">
              <div class="accordion-container-one">
                <div
                  v-for="(service, index) in services.data"
                  :key="index"
                  class="ac"
                >
                  <h4
                    @click="toggleBtn(index)"
                    class="ac-q accordion__title-text"
                    tabIndex="0"
                  >
                    {{ service.attributes.title }}
                  </h4>
                  <div
                    v-show="index === activeIndex"
                    class="ac-a accordion__content"
                  >
                    <p class="accordion__content-desc">
                      {{ service.attributes.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { GetAllServices } from "../graphql/GetAllServices";
export default {
  name: "WeListen",
  data() {
    return {
      services: [],
      activeIndex: null,
    };
  },
  methods: {
    toggleBtn(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
  apollo: {
    services: {
      prefetch: true,
      query: GetAllServices,
      variables() {
        return { locale: this.$i18n.locale };
      },
      fetchPolicy: "no-cache",
    },
  },
  mounted() {
    // new Accordion(".accordion-container-one");
  },
};
</script>
<style scoped>
.ac {
  margin-top: 10px;
  padding: 10px;
  background: #ffffff;
  box-sizing: border-box;
}

.ac > .ac-q {
  padding: 10px 30px 10px 10px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  position: relative;
  margin: 0;
  color: #192437;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Libel Suit", sans-serif;
}

.ac.is-active .ac-q {
  color: #222 !important;
}
.ac > .ac-q::after {
  content: "+";
  text-align: center;
  width: 15px;
  right: 10px;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  position: absolute;
}

.ac > .ac-a {
  overflow: hidden;
  -webkit-transition-property: all;
  transition-property: all;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
}

.ac > .ac-a p {
  margin: 0;
  padding: 10px;
  color: #545764;
  font-size: 16px;
  line-height: 30px;
  font-weight: 300;
}

.ac.js-enabled > .ac-a {
  visibility: hidden;
}

.ac.is-active > .ac-a {
  visibility: visible;
}

.ac.is-active > .ac-q::after {
  content: "\2013";
  color: #222;
}
</style>
