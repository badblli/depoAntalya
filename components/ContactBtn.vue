<template>
  <div>
    <div v-for="siteConfigs in siteConfigs.data" v-bind:key="siteConfigs.id">
      <nuxt-link class="main-btn" :to="localePath('/get-in-touch')">
        {{ siteConfigs.attributes.contact }} <i class="flaticon-right-arrow"></i
      ></nuxt-link>
    </div>
  </div>
</template>

<script>
import { GetAllSiteConfig } from "../graphql/GetAllSiteConfig";
export default {
  name: "ContactBtn",
  data() {
    return {
      siteConfigs: [],
    };
  },
  apollo: {
    siteConfigs: {
      prefetch: true,
      query: GetAllSiteConfig,
      variables() {
        return { locale: this.$i18n.locale };
      },
      fetchPolicy: "no-cache",
    },
  },
};
</script>

<style scoped></style>
