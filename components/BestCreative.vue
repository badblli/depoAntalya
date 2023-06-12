<template>
  <section class="best-creative-area" v-observe-visibility="onVisibilityChange">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div
            v-for="bestCreativeComponents in bestCreativeComponents.data"
            v-bind:key="bestCreativeComponents.id"
            class="best-creative-bg"
          >
            <div class="row">
              <div class="col-lg-7">
                <div class="best-creative-content">
                  <h3 class="title">
                    {{ bestCreativeComponents.attributes.title }}
                  </h3>
                  <p>{{ bestCreativeComponents.attributes.description }}</p>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="best-creative-list">
                  <div class="best-creative-seats">
                    <i class="flaticon-computer"></i>
                    <h3 class="title counter">
                      <countTo
                        :startVal="0"
                        :endVal="startCounter ? 70 : 0"
                        :duration="3000"
                      ></countTo>
                    </h3>
                    <p>{{ bestCreativeComponents.attributes.subtitle }}</p>
                    <span>{{
                      bestCreativeComponents.attributes.subtitle2
                    }}</span>
                  </div>
                  <div class="best-creative-list-item">
                    <ul>
                      <li
                        v-for="feature in bestCreativeComponents.attributes
                          .items.features"
                        :key="feature"
                      >
                        <i class="fa fa-check"></i>{{ feature }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import countTo from "vue-count-to";
import { ObserveVisibility } from "vue-observe-visibility";
import { BestCreative } from "../graphql/BestCreative";
export default {
  name: "BestCreative",
  components: { countTo },
  directives: {
    ObserveVisibility,
  },
  data() {
    return {
      startCounter: false,
      bestCreativeComponents: [],
    };
  },
  apollo: {
    bestCreativeComponents: {
      prefetch: true,
      query: BestCreative,
      variables() {
        return { locale: this.$i18n.locale };
      },
      fetchPolicy: "no-cache",
    },
  },
  methods: {
    onVisibilityChange(isVisible) {
      if (isVisible) {
        this.startCounter = true;
      }
    },
  },
};
</script>

<style scoped></style>
