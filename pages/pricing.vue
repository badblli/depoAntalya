<template>
  <div>
    <div v-for="(item, index) in depoBannerConfigs.data" :key="index">
      <template v-if="index === 0">
        <Nav />
        <PageHeader
          :title="`${item.attributes.title}`"
          :banner="`${item.attributes.banner.data.attributes.url}`"
          :slug1="`${item.attributes.slug1}`"
          :slug2="`${item.attributes.slug2}`"
        />
        <!-- <PricingPage /> -->
        <Explore />
        <!-- <CallToActionTwo /> -->
        <Footer />
      </template>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import PricingPage from "../components/PricingPage";
import Explore from "../components/Explore";
import CallToActionTwo from "../components/CallToActionTwo";
import { GetDepoBanner } from "../graphql/GetDepoBanner";
export default {
  components: {
    CallToActionTwo,
    Explore,
    PricingPage,
    Footer,
    PageHeader,
    Nav,
  },
  head() {
    return {
      title: this.getPageInfo().title,
    };
  },
  data() {
    return {
      depoBannerConfigs: [],
    };
  },
  apollo: {
    depoBannerConfigs: {
      prefetch: true,
      query: GetDepoBanner,
      variables() {
        return {
          locale: this.$i18n.locale,
        };
      },
      fetchPolicy: "no-cache",
    },
  },
  methods: {
    getPageInfo() {
      if (
        this.depoBannerConfigs.data &&
        this.depoBannerConfigs.data.length > 0
      ) {
        let title = "";
        if (this.depoBannerConfigs.data.length > 0) {
          const config = this.depoBannerConfigs.data[0].attributes;
          title = config.title;
        }

        return { title };
      }

      return { title: "" };
    },
  },
  mounted() {
    this.getPageInfo();
  },
};
</script>
