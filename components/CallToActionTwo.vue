<template>
  <section class="cta-2-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4">
          <div class="cta-content">
            <h3 class="title">Fully equipped meeting rooms for rent</h3>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="cta-content">
            <p>
              Sed quia lipsum dolor sit atur adipiscing elit is nunc quis tellus
              sed ligula porta ultricies quis nec magna neulla.
            </p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="cta-content text-left text-lg-right">
            <ContactBtn />
          </div>
        </div>
      </div>
    </div>
    <div class="cta-dot">
      <nuxt-img
        loading="lazy"
        placeholder="blur"
        src="/assets/images/cta-dot-2.png"
        alt="cta"
      />
    </div>
    <div class="cta-dot-2">
      <nuxt-img
        loading="lazy"
        placeholder="blur"
        src="/assets/images/cta-dot.png"
        alt="cta"
      />
    </div>
  </section>
</template>

<script>
import ContactBtn from "./ContactBtn.vue";
export default {
  name: "CallToActionTwo",
  components: {
    ContactBtn,
  },
};
</script>

<style scoped></style>
