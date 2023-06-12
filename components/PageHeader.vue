<template>
  <div>
    <div
      class="page-title-area bg_cover"
      :style="{
        'background-image': `url(${
          banner
            ? 'https://strapi.badblli.dev' + banner
            : 'https://img.freepik.com/free-vector/abstract-orange-background-with-lines-halftone-effect_1017-32107.jpg?w=1060&t=st=1680692252~exp=1680692852~hmac=cc4535da3ff21392ce61635f278c710c12c8704cc90d2b6419f6ca702928500d'
        })`,
      }"
    >
      >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title-content">
              <h3 class="title">{{ title }}</h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <nuxt-link :to="localePath('/')">{{ slug1 }}</nuxt-link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {{ slug2 }}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
    },
    banner: {
      type: String,
    },
    slug1: {
      type: String,
    },
    slug2: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
