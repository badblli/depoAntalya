<template>
  <div>
    <div
      v-for="aboutBannerConfigs in aboutBannerConfigs.data"
      v-bind:key="aboutBannerConfigs.id"
    >
      <Nav />
      <PageHeader
        :title="`${aboutBannerConfigs.attributes.title}`"
        :banner="`${aboutBannerConfigs.attributes.banner.data.attributes.url}`"
        :slug1="`${aboutBannerConfigs.attributes.slug1}`"
        :slug2="`${aboutBannerConfigs.attributes.slug2}`"
      />
      <SpaceToMake />
      <WriteMessageThree />
      <!-- <GetToKnow /> -->
      <!-- <ChangingArea /> -->
      <!-- <Testimonial /> -->
      <!-- <JoinCommunity /> -->
      <!-- <Team /> -->
      <!-- <CompanyLogo /> -->
      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import SpaceToMake from "../components/SpaceToMake";
import WriteMessageThree from "../components/WriteMessageThree";
import Footer from "../components/Footer";
import { GetAboutBanner } from "../graphql/GetAboutBanner";

// import CompanyLogo from "../components/CompanyLogo";
// import ChangingArea from "../components/ChangingArea";
// import Testimonial from "../components/Testimonial";
// import JoinCommunity from "../components/JoinCommunity";
// import GetToKnow from "../components/GetToKnow";
// import Team from "../components/Team";
export default {
  components: {
    Footer,
    WriteMessageThree,
    // CompanyLogo,
    // Team,
    // JoinCommunity,
    // Testimonial,
    // ChangingArea,
    // GetToKnow,
    SpaceToMake,
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
      aboutBannerConfigs: [],
    };
  },
  apollo: {
    aboutBannerConfigs: {
      prefetch: true,
      query: GetAboutBanner,
      variables() {
        return {
          locale: this.$i18n.locale,
        };
      },
      fetchPolicy: "cache-first",
    },
  },

  methods: {
    getPageInfo() {
      if (
        this.aboutBannerConfigs.data &&
        this.aboutBannerConfigs.data.length > 0
      ) {
        let title = "";
        this.aboutBannerConfigs.data.forEach((item) => {
          const config = item.attributes;
          title += config.title;
        });

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
