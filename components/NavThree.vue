<template>
  <div>
    <header class="header-area header-2-area header-3-area">
      <div class="header-top-area header-top-3-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="header-top flex-row-reverse">
                <ul>
                  <li>
                    <nuxt-link to="mailto:needhelp@depoantalya.com"
                      ><i class="flaticon-message"></i>
                      needhelp@depoantalya.com</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="tel:7778880000"
                      ><i class="flaticon-phone-call"></i> 777 888
                      0000</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/')"
                      ><i class="flaticon-placeholder"></i> 20 Broklyn Street,
                      New York. USA</nuxt-link
                    >
                  </li>
                </ul>
                <div class="dropdown d-none d-md-block">
                  <nuxt-img
                    loading="lazy"
                    placeholder="blur"
                    src="/assets/images/map.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="`main-header ${sticky ? 'sticky' : ''}`">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div
                class="main-header-item d-flex d-lg-block justify-content-between align-items-center"
              >
                <div class="main-header-menus d-flex justify-content-between">
                  <div class="header-logo">
                    <nuxt-link to="/"
                      ><nuxt-img
                        loading="lazy"
                        placeholder="blur"
                        src="/assets/images/logo.png"
                        alt="logo"
                    /></nuxt-link>
                  </div>
                  <div class="header-menu d-none d-lg-block">
                    <ul>
                      <li>
                        <nuxt-link class="active" to="#"
                          >Home <i class="fa fa-angle-down"></i
                        ></nuxt-link>
                        <ul class="sub-menu">
                          <li><nuxt-link to="/">Home 1</nuxt-link></li>
                          <li><nuxt-link to="/index-2">Home 2</nuxt-link></li>
                          <li><nuxt-link to="/index-3">Home 3</nuxt-link></li>
                          <li>
                            <nuxt-link :to="localePath('/')"
                              >Header Versions</nuxt-link
                            >
                            <ul class="sub-menu">
                              <li>
                                <nuxt-link to="/">Header Style 1</nuxt-link>
                              </li>
                              <li>
                                <nuxt-link to="/index-2"
                                  >Header Style 2</nuxt-link
                                >
                              </li>
                              <li>
                                <nuxt-link to="/index-3"
                                  >Header Style 3</nuxt-link
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <nuxt-link to="/about">About</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link :to="localePath('/')"
                          >Events <i class="fa fa-angle-down"></i
                        ></nuxt-link>
                        <ul class="sub-menu">
                          <li><nuxt-link to="/events">Events</nuxt-link></li>
                          <li>
                            <nuxt-link to="/single-event"
                              >single event</nuxt-link
                            >
                          </li>
                        </ul>
                      </li>
                      <li>
                        <nuxt-link :to="localePath('/')"
                          >Pages <i class="fa fa-angle-down"></i
                        ></nuxt-link>
                        <ul class="sub-menu">
                          <li><nuxt-link to="/team">team</nuxt-link></li>
                          <li><nuxt-link to="/pricing">pricing</nuxt-link></li>
                          <li>
                            <ContactBtn />
                          </li>
                          <li><nuxt-link to="/gallery">gallery</nuxt-link></li>
                        </ul>
                      </li>
                      <li>
                        <nuxt-link :to="localePath('/')"
                          >News <i class="fa fa-angle-down"></i
                        ></nuxt-link>
                        <ul class="sub-menu">
                          <li><nuxt-link to="/news">news</nuxt-link></li>
                          <li>
                            <nuxt-link to="/single-news">single news</nuxt-link>
                          </li>
                        </ul>
                      </li>
                      <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                    </ul>
                  </div>
                </div>
                <div class="header-social d-flex align-items-center">
                  <div
                    @click="mobileToggle = !mobileToggle"
                    class="toggle-btn ml-30 canvas_open d-lg-none d-block"
                  >
                    <i class="fa fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div :class="`off_canvars_overlay ${mobileToggle ? 'active' : ''}`"></div>
    <div class="offcanvas_menu">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div
              :class="`offcanvas_menu_wrapper ${mobileToggle ? 'active' : ''}`"
            >
              <div class="canvas_close">
                <nuxt-link
                  @click="mobileToggle = !mobileToggle"
                  to="javascript:void(0)"
                  ><i class="fa fa-times"></i
                ></nuxt-link>
              </div>
              <div class="offcanvas-social">
                <ul class="text-center">
                  <li>
                    <nuxt-link to="$"
                      ><i class="fa fa-facebook-square"></i
                    ></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="$"><i class="fa fa-twitter"></i></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="$"
                      ><i class="fa fa-instagram"></i
                    ></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="$"><i class="fa fa-dribbble"></i></nuxt-link>
                  </li>
                </ul>
              </div>
              <div id="menu" class="text-left">
                <ul class="offcanvas_main_menu">
                  <li class="menu-item-has-children active">
                    <nuxt-link :to="localePath('/')">Home</nuxt-link>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/">Home 1</nuxt-link></li>
                      <li><nuxt-link to="/index-2">Home 2</nuxt-link></li>
                      <li><nuxt-link to="/index-3">Home 3</nuxt-link></li>
                      <li class="menu-item-has-children">
                        <nuxt-link :to="localePath('/')"
                          >Header Versions</nuxt-link
                        >
                        <ul class="sub-menu">
                          <li><nuxt-link to="/">Header Style 1</nuxt-link></li>
                          <li>
                            <nuxt-link to="/index-2">Header Style 2</nuxt-link>
                          </li>
                          <li>
                            <nuxt-link to="/index-3">Header Style 3</nuxt-link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <nuxt-link to="/about">About</nuxt-link>
                  </li>
                  <li class="menu-item-has-children active">
                    <ul class="sub-menu">
                      <li><nuxt-link to="/events">Events</nuxt-link></li>
                      <li>
                        <nuxt-link to="/single-event">single event</nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children active">
                    <nuxt-link :to="localePath('/')">Pages</nuxt-link>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/team">team</nuxt-link></li>
                      <li><nuxt-link to="/pricing">pricing</nuxt-link></li>
                      <li>
                        <ContactBtn />
                      </li>
                      <li><nuxt-link to="/gallery">gallery</nuxt-link></li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children active">
                    <nuxt-link :to="localePath('/')"
                      >News <i class="fa fa-angle-down"></i
                    ></nuxt-link>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/news">news</nuxt-link></li>
                      <li>
                        <nuxt-link to="/single-news">single news</nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children active">
                    <nuxt-link :to="localePath('/')">Blog</nuxt-link>
                    <ul class="sub-menu">
                      <li><nuxt-link to="/posts">posts</nuxt-link></li>
                      <li>
                        <nuxt-link to="/single-post">single post</nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children active">
                    <nuxt-link to="/contact">Contact</nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="offcanvas_footer">
                <span
                  ><nuxt-link to="mailto:tanvirahmed8282@gmail.com"
                    ><i class="fa fa-envelope-o"></i>
                    layerdrops@gmail.com</nuxt-link
                  ></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactBtn from "./ContactBtn.vue";
export default {
  name: "NavThree",
  data() {
    return {
      sticky: false,
      mobileToggle: false,
    };
    components: {
      ContactBtn;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 70) {
        this.sticky = true;
      } else if (window.scrollY < 70) {
        this.sticky = false;
      }
    },
  },
};
</script>

<style scoped></style>
