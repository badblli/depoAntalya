<template>
  <section class="gallery-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="gallery-title text-center">
            <h3
              v-for="galleryBannerConfigs in galleryBannerConfigs.data"
              v-bind:key="galleryBannerConfigs.id"
              class="title"
            >
              {{ galleryBannerConfigs.attributes.title }}
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid p-0">
      <div class="gallery-itmes">
        <div class="row no-gutters gallery-active">
          <div
            class="col-md-3 wow fadeInLeft animated"
            data-wow-duration="2s"
            data-wow-delay="5s"
            v-for="(
              image, index
            ) in fotoGalleries.data[0].attributes.image.data.slice(0, 4)"
            :key="image.attributes.name"
          >
            <div class="gallery-thumb">
              <nuxt-img
                preload
                placeholder="blur"
                :src="`https://strapi.badblli.dev${image.attributes.url}`"
                :alt="image.attributes.name"
                width="300"
                height="200"
                fit="cover"
              />
              <a
                class="main-btn image-popup galleryOne"
                :href="`https://strapi.badblli.dev${image.attributes.url}`"
                ><i class="flaticon-plus"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { GetGallery } from "../graphql/GetGallery";
import { GetGalleryBanner } from "../graphql/GetGalleryBanner";
export default {
  name: "Gallery",
  data() {
    return {
      fotoGalleries: [],
      galleryBannerConfigs: [],
    };
  },
  apollo: {
    fotoGalleries: {
      prefetch: true,
      query: GetGallery,
    },
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
  mounted() {
    new GLightbox({
      selector: ".galleryOne",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });
  },
};
</script>
<style scoped></style>
