<template>
  <div class="banner-slide-3">
    <VueSlickCarousel v-bind="settings">
      <div class="banner-3-area bg_cover slide-bg5 d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="banner-content">
                <span data-animation="fadeInDown" data-delay=".5s"
                  ><nuxt-img
                    loading="lazy"
                    placeholder="blur"
                    src="/assets/images/banner-icon.png"
                    alt="logo"
                  />
                  Book your tour today</span
                >
                <h1 data-animation="fadeInLeft" data-delay="1.5s" class="title">
                  Biggest coworking space.
                </h1>
                <ContactBtn
                  data-animation="fadeInUp"
                  data-delay=".5s"
                  class="main-btn main-btn-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="banner-line">
          <nuxt-img
            loading="lazy"
            placeholder="blur"
            src="assets/images/banner-line.png"
            alt="line"
          />
        </div>
        <div class="banner-dot">
          <nuxt-img
            loading="lazy"
            placeholder="blur"
            src="assets/images/banner-dot.png"
            alt="line"
          />
        </div>
        <div class="banner-thumb">
          <nuxt-img
            loading="lazy"
            placeholder="blur"
            src="assets/images/banner-thumb.png"
            alt="line"
          />
        </div>
      </div>
      <div class="banner-3-area bg_cover slide-bg6 d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="banner-content">
                <span data-animation="fadeInDown" data-delay=".5s"
                  ><nuxt-img
                    loading="lazy"
                    placeholder="blur"
                    src="/assets/images/banner-icon.png"
                    alt="logo"
                  />
                  Book your tour today</span
                >
                <h1 data-animation="fadeInLeft" data-delay="1.5s" class="title">
                  Biggest coworking space.
                </h1>
                <ContactBtn class="main-btn main-btn-2" />
              </div>
            </div>
          </div>
        </div>
        <div class="banner-line">
          <nuxt-img
            loading="lazy"
            placeholder="blur"
            src="/assets/images/banner-line.png"
            alt="line"
          />
        </div>
        <div class="banner-dot">
          <nuxt-img
            loading="lazy"
            placeholder="blur"
            src="/assets/images/banner-dot.png"
            alt="line"
          />
        </div>
        <div class="banner-thumb">
          <nuxt-img
            loading="lazy"
            placeholder="blur"
            src="/assets/images/banner-thumb.png"
            alt="line"
          />
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import ContactBtn from "./ContactBtn.vue";
export default {
  name: "SliderThree",
  components: { VueSlickCarousel, ContactBtn },
  data() {
    return {
      settings: {
        arrows: false,
        autoplay: true,
      },
    };
  },
};
</script>

<style scoped></style>
