<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import { defaultLocale } from "../constants/i18nLocales";
import { GetAllSiteConfig } from "../graphql/GetAllSiteConfig";

export default {
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
      // update(data) {
      //   console.log(data.siteConfigs); // Inspect the returned data structure
      //   this.siteConfigs = data.siteConfigs.data; // Update siteConfigs with fetched data
      // },

      // result({ data }) {
      //   console.log(data.siteConfigs); // Inspect the returned data
      // },
      // error(error) {
      //   console.error(error); // Log any errors that occur
      // },
    },
  },

  methods: {
    getPageInfo() {
      // console.log(this.siteConfigs); // Check if siteConfigs is populated
      if (this.siteConfigs.data && this.siteConfigs.data.length > 0) {
        let title = "";
        let description = "";

        this.siteConfigs.data.forEach((item) => {
          const config = item.attributes;
          title += config.title;
          description += config.description;
        });

        // console.log(title, description);
        return { title, description };
      }

      return { title: "", description: "" };
    },
  },
  mounted() {
    this.getPageInfo();
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    const { title, description } = this.getPageInfo();
    return {
      // titleTemplate: 'Faqly | %s',
      title,
      htmlAttrs: {
        lang: this.$i18n.locale || defaultLocale,
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: description || process.env.npm_package_description,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: title || process.env.npm_package_name,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: description || process.env.npm_package_description,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: title || process.env.npm_package_name,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description || process.env.npm_package_description,
        },
        ...i18nHead.meta,
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/assets/images/logo_small.svg",
        },
        { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "/assets/css/font-awesome.min.css" },
        { rel: "stylesheet", href: "/assets/css/flaticon.css" },
        {
          rel: "stylesheet",
          href: "/assets/plugins/glightbox/glightbox.min.css",
        },
        { rel: "stylesheet", href: "/assets/css/nice-select.css" },
        { rel: "stylesheet", href: "/assets/css/animate.min.css" },
        { rel: "stylesheet", href: "/assets/css/default.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap",
        },
        ...i18nHead.link,
      ],
      script: [
        { src: "/assets/plugins/glightbox/glightbox.min.js", body: true },
        { src: "/assets/plugins/accordion/accordion.min.js", body: true },
      ],
    };
  },
};
</script>

<style></style>
