<template>
  <section class="space-to-make-area pt-120 pb-120">
    <div class="container">
      <div
        class="row align-items-center"
        v-for="spaceToMakes in spaceToMakes.data"
        v-bind:key="spaceToMakes.id"
      >
        <!-- <div class="col-lg-2">
          <div
            class="space-to-make-thumb animated wow fadeInLeft"
            data-wow-duration="1500ms"
            data-wow-delay="0ms"
          >
            <nuxt-img  loading="lazy" placeholder="blur"
              format="webp"
              loading="lazy"
              :src="`https://strapi.badblli.dev${spaceToMakes.attributes.image.data.attributes.url}`"
              width="560"
              height="500"
              :alt="`${spaceToMakes.attributes.image.data.attributes.name}`"
            />
            <div class="thumb-content">
              <span>{{ spaceToMakes.attributes.imgtxt }}</span>
            </div>
          </div>
        </div> -->
        <div class="col-lg-12 col-md-10">
          <div class="space-to-make-content">
            <h3
              class="title animated wow fadeInDown"
              data-wow-duration="4s"
              data-wow-delay="0ms"
            >
              {{ spaceToMakes.attributes.title }}
            </h3>
            <h4
              style="color: #e25303"
              class="mb-20 animated wow fadeInDown"
              data-wow-duration="4s"
              data-wow-delay="0ms"
            >
              {{ spaceToMakes.attributes.imgtxt }}
            </h4>
            <p>
              {{ spaceToMakes.attributes.desc }}
            </p>
            <div class="row">
              <div class="col-sm-6 mb-40">
                <div class="space-to-make-item mt-30">
                  <a href="callto:90 850 532 7671">
                    <i class="flaticon-workspace"></i>
                    <span>{{ spaceToMakes.attributes.item1 }}</span>
                  </a>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="space-to-make-item mt-30">
                  <nuxt-link :to="localePath('/events')">
                    <i class="flaticon-meeting"></i>
                    <span>{{ spaceToMakes.attributes.item2 }}</span>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <ContactBtn />
          </div>
        </div>
      </div>
    </div>
    <div class="shape-pattern">
      <nuxt-img
        loading="lazy"
        placeholder="blur"
        src="/assets/images/shape-pattern.png"
        alt=""
      />
    </div>
    <!-- <div
      style="
        position: absolute;
        left: 0px;
        bottom: 300px;
        z-index: -1;
        animation: bubbleMover2 linear infinite 3s;
      "
    >
      <nuxt-img  loading="lazy" placeholder="blur"
        format="webp"
        loading="lazy"
        src="/assets/images/we-know-line.png"
        alt=""
      />
    </div> -->
    <!-- <div class="shape-pattern-2">
      <nuxt-img  loading="lazy" placeholder="blur"
        format="webp"
        loading="lazy"
        src="/assets/images/box.svg"
        alt="box"
      />
    </div> -->
    <div class="shape-pattern-2">
      <nuxt-img
        loading="lazy"
        placeholder="blur"
        format="webp"
        src="/assets/images/we-know-line.png"
        alt=""
      />
    </div>
  </section>
</template>

<script>
import ContactBtn from "./ContactBtn.vue";
import { GetSpaceToMake } from "../graphql/GetSpaceToMake";
export default {
  name: "SpaceToMake",
  data() {
    return {
      spaceToMakes: [],
    };
  },
  components: {
    ContactBtn,
  },
  apollo: {
    spaceToMakes: {
      prefetch: true,
      query: GetSpaceToMake,
      variables() {
        return { locale: this.$i18n.locale };
      },
      fetchPolicy: "no-cache",
    },
  },
};
</script>

<style scoped></style>
