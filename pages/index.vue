<template>
  <div>
    <Nav />
    <Slider />
    <BestCreative />
    <SpaceToMake />
    <Services />
    <Gallery />
    <WriteMessageThree />
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import BestCreative from "../components/BestCreative";
import SpaceToMake from "../components/SpaceToMake";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
// import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import WriteMessageThree from "../components/WriteMessageThree.vue";

export default {
  data() {
    return {};
  },
  components: {
    Footer,
    WriteMessageThree,
    // CallToAction,
    Gallery,
    Services,
    SpaceToMake,
    BestCreative,
    Slider,
    Nav,
  },
};
</script>
