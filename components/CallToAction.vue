<template>
  <section
    class="cta-area animated wow fadeInUp"
    data-wow-duration="1500ms"
    data-wow-delay="0ms"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="cta-bg">
            <div class="row">
              <div class="col-lg-5">
                <div class="cta-text">
                  <h3 class="title">Fully equipped meeting rooms for rent</h3>
                  <ContactBtn />
                </div>
              </div>
              <div class="col-lg-7">
                <div class="cta-text">
                  <p>
                    Sed quia lipsum dolor sit atur adipiscing elit is nunc quis
                    tellus sed ligula porta ultricies quis nec magna neulla.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div class="cta-dot">
              <nuxt-img
                loading="lazy"
                placeholder="blur"
                src="/assets/images/cta-dot.png"
                alt="cta"
              />
            </div>
            <div class="cta-dot-2">
              <nuxt-img
                loading="lazy"
                placeholder="blur"
                src="/assets/images/cta-dot-2.png"
                alt="cta"
              />
            </div>
            <div class="cta-dot-3">
              <nuxt-img
                loading="lazy"
                placeholder="blur"
                src="/assets/images/cta-dot-3.png"
                alt="cta"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactBtn from "./ContactBtn.vue";
export default {
  name: "CallToAction",
  components: {
    ContactBtn,
  },
};
</script>

<style scoped></style>
