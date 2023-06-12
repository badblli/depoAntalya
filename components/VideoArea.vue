<template>
  <div class="play-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="play-thumb">
            <nuxt-img
              loading="lazy"
              placeholder="blur"
              src="/assets/images/play-thumb.jpg"
              alt="play"
            />
            <nuxt-link
              class="main-btn videoBox"
              to="https://www.youtube.com/watch?v=cSLAO7zxS2M"
              ><i class="fa fa-play"></i
            ></nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoArea",
  mounted() {
    new GLightbox({
      selector: ".videoBox",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });
  },
};
</script>

<style scoped></style>
