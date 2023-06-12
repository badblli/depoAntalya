<template>
  <section class="services-area pt-90 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div
            class="services-title"
            v-for="services in services.data"
            v-bind:key="services.id"
          >
            <h3 class="title">{{ services.attributes.title2 }}</h3>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-6 col-sm-6"
          v-for="services in services.data"
          v-bind:key="services.id"
        >
          <div class="single-services mt-30" style="height: 90%">
            <nuxt-img
              loading="lazy"
              placeholder="blur"
              format="webp"
              :src="`https://strapi.badblli.dev${services.attributes.icon.data.attributes.url}`"
              :alt="`${services.attributes.icon.data.attributes.name}`"
              width="75"
              height="75"
            />
            <!-- <nuxt-link to="/single-event" -->
            <nuxt-link :to="localePath('/events')"
              ><h4 class="title">{{ services.attributes.title }}</h4></nuxt-link
            >
            <p>{{ services.attributes.description }}</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="services-book mt-30">
            <h3
              v-for="services in services.data"
              v-bind:key="services.id"
              class="title"
            >
              {{ services.attributes.title3 }}
            </h3>
            <ContactBtn style="margin-top: -100px" class="main-btn-2" />
          </div>
        </div>
      </div>
    </div>
    <div class="services-pattern">
      <nuxt-img
        loading="lazy"
        placeholder="blur"
        format="webp"
        src="/assets/images/services-pattern.png"
        alt="pattern"
      />
    </div>
    <div class="services-dot">
      <nuxt-img
        loading="lazy"
        placeholder="blur"
        format="webp"
        src="/assets/images/services-dot.png"
        alt="pattern"
      />
    </div>
  </section>
</template>

<script>
import ContactBtn from "./ContactBtn.vue";
import { GetAllServices } from "../graphql/GetAllServices";
export default {
  name: "Services",
  data() {
    return {
      services: [],
    };
  },
  components: {
    ContactBtn,
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
};
</script>

<style scoped></style>
