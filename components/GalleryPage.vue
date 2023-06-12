<template>
  <div class="gallery-area gallery-page">
    <div class="container">
      <div class="gallery-itmes">
        <div class="row">
          <div
            v-if="fotoGalleries.data[0].attributes.image.data.length > 0"
            class="col-lg-4 col-md-6 col-sm-6 mb-30"
            v-for="image in fotoGalleries.data[0].attributes.image.data"
            :key="image.attributes.name"
          >
            <div
              class="gallery-thumb mt-30 wow fadeInLeft animated"
              data-wow-duration="2s"
              data-wow-delay="5s"
            >
              <nuxt-img
                loading="lazy"
                :src="`https://strapi.badblli.dev${image.attributes.url}`"
                :alt="`${image.attributes.name}`"
                width="300"
                height="200"
              />
              <a
                class="main-btn image-popup galleryTwo"
                :href="`https://strapi.badblli.dev${image.attributes.url}`"
                ><i class="flaticon-plus"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetGallery } from "../graphql/GetGallery";
export default {
  name: "GalleryPage",
  data() {
    return {
      fotoGalleries: [],
    };
  },
  apollo: {
    fotoGalleries: {
      prefetch: true,
      query: GetGallery,
    },
  },
  mounted() {
    new GLightbox({
      selector: ".galleryTwo",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });
  },
};
</script>

<style scoped></style>
