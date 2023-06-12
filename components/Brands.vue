<template>
  <section class="brand-area bg_cover" style="background-image: url(/assets/images/play-bg.jpg);">
    <div class="container">
      <div class="brand-box">
        <div class="row barnd-active">

          <swiper :options="swiperOptions">

            <swiper-slide>

            <div class="brand-item">
               <nuxt-link :to="localePath('/')"><nuxt-img  loading="lazy" placeholder="blur" src="/assets/images/brand-2.png" alt=""/></nuxt-link>
            </div>
            </swiper-slide>
            <swiper-slide>
            <div class="brand-item">
               <nuxt-link :to="localePath('/')"><nuxt-img  loading="lazy" placeholder="blur" src="/assets/images/brand-2.png" alt=""/></nuxt-link>
            </div>
            </swiper-slide>
            <swiper-slide>
            <div class="brand-item">
               <nuxt-link :to="localePath('/')"><nuxt-img  loading="lazy" placeholder="blur" src="/assets/images/brand-2.png" alt=""/></nuxt-link>
            </div>
            </swiper-slide>
            <swiper-slide>
            <div class="brand-item">
               <nuxt-link :to="localePath('/')"><nuxt-img  loading="lazy" placeholder="blur" src="/assets/images/brand-2.png" alt=""/></nuxt-link>
            </div>
            </swiper-slide>
            <swiper-slide>
            <div class="brand-item">
               <nuxt-link :to="localePath('/')"><nuxt-img  loading="lazy" placeholder="blur" src="/assets/images/brand-2.png" alt=""/></nuxt-link>
            </div>
            </swiper-slide>
            <swiper-slide>
            <div class="brand-item">
               <nuxt-link :to="localePath('/')"><nuxt-img  loading="lazy" placeholder="blur" src="/assets/images/brand-2.png" alt=""/></nuxt-link>
            </div>
            </swiper-slide>
          </swiper>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="brand-content text-center">
            <h3 class="title">depoantalya gives you unmatched agility without compromising on experience.</h3>
           <ContactBtn />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';
  import ContactBtn from '@/components/ContactBtn.vue';

  export default {
    name: "Brands",
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        swiperOptions: {
          slidesPerView : 5,
          loop: true,
          speed: 1000,
          spaceBetween : 30,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          // Responsive breakpoints
          breakpoints: {
            1024:{
              slidesPerView : 5
            },
            768:{
              slidesPerView : 3
            },
            640:{
              slidesPerView : 3
            },
            320:{
              slidesPerView : 2
            }
          }
        }
      }
    },
    components: {
      ContactBtn,
    },
  }
</script>


<style scoped>

</style>
