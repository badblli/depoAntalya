<template>
  <section
    class="depoantalya-changing-area bg_cover"
    style="background-image: url(/assets/images/depoantalya-changing-bg.jpg)"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="depoantalya-changing-text">
            <h3 class="title">
              depoantalya is changing the way people and companies work.
            </h3>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="depoantalya-changing-play text-left text-lg-right">
            <nuxt-link
              class="main-btn video-popup videoBox"
              to="https://www.youtube.com/watch?v=_9MEYFNyilQ"
              ><i class="fa fa-play"></i
            ></nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ChangingArea",
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
