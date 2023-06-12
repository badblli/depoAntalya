<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import { GetSlider } from "../graphql/GetSlider";
import ContactBtn from "./ContactBtn";

export default {
  name: "Slider",
  components: { VueSlickCarousel, ContactBtn },
  data() {
    return {
      sliderConfigs: [],
      settings: {
        arrows: false,
        autoplay: true,
        lazyLoad: "ondemand",
      },
    };
  },
  apollo: {
    sliderConfigs: {
      prefetch: true,
      query: GetSlider,
      variables() {
        return { locale: this.$i18n.locale };
      },
    },
  },
};
</script>

<style scoped></style>

<template>
  <section class="banner-slide">
    <VueSlickCarousel
      v-if="sliderConfigs.data"
      :data="sliderConfigs"
      v-bind="settings"
    >
      <div
        v-for="sliderConfigs in sliderConfigs.data"
        v-bind:key="sliderConfigs.id"
        class="banner-area bg_cover d-flex align-items-center"
        :style="{
          backgroundImage: `url(
    'https://strapi.badblli.dev${sliderConfigs.attributes.sliderImage.data.attributes.url}'
  )`,
        }"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <!-- <div class="banner-slide-number">
                <span>0{{ sliderConfigs.id }}</span>
              </div> -->
            </div>
          </div>
          <div class="row">
            <div class="col-lg-7">
              <div class="banner-content">
                <span
                  class="wow fadeInLeft animated"
                  data-wow-duration="2s"
                  data-wow-delay="5s"
                >
                  <!-- <nuxt-img  loading="lazy" placeholder="blur" src="/assets/images/logo_white_small.svg" alt="" /> -->
                  {{ sliderConfigs.attributes.title }}</span
                >
                <h1
                  class="wow fadeInLeft animated title"
                  data-wow-duration="2s"
                  data-wow-delay="5s"
                >
                  {{ sliderConfigs.attributes.subTitle }}
                </h1>
              </div>
              <ContactBtn
                class="wow fadeInLeft animated"
                data-wow-duration="2s"
                data-wow-delay="5s"
              />
            </div>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </section>
</template>
