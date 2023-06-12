<template>
  <div>
    <div
      v-for="galleryBannerConfigs in galleryBannerConfigs.data"
      v-bind:key="galleryBannerConfigs.id"
    >
      <Nav />
      <PageHeader
        :title="`${galleryBannerConfigs.attributes.title}`"
        :banner="`${galleryBannerConfigs.attributes.banner.data.attributes.url}`"
        :slug1="`${galleryBannerConfigs.attributes.slug1}`"
        :slug2="`${galleryBannerConfigs.attributes.slug2}`"
      />
      <GalleryPage />
      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import GalleryPage from "../components/GalleryPage";
import { GetGalleryBanner } from "../graphql/GetGalleryBanner";
export default {
  components: {
    GalleryPage,
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
      galleryBannerConfigs: [],
    };
  },
  apollo: {
    galleryBannerConfigs: {
      prefetch: true,
      query: GetGalleryBanner,
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
        this.galleryBannerConfigs.data &&
        this.galleryBannerConfigs.data.length > 0
      ) {
        let title = "";
        this.galleryBannerConfigs.data.forEach((item) => {
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
