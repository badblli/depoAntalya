<template>
  <section class="contact-info-area">
    <div class="container">
      <div class="contact-info">
        <div class="row">
          <div class="col-lg-4">
            <div class="contact-info-content">
              <h3 class="title">Feel free to get in touch with depoantalya.</h3>
              <ul>
                <li>
                  <nuxt-img
                    loading="lazy"
                    placeholder="blur"
                    src="/assets/images/icon/icon-1.png"
                    alt=""
                  />
                  20 Broklyn street, New york
                </li>
                <li>
                  <nuxt-img
                    loading="lazy"
                    placeholder="blur"
                    src="/assets/images/icon/icon-2.png"
                    alt=""
                  />
                  needhelp@depoantalya.com
                </li>
                <li>
                  <nuxt-img
                    loading="lazy"
                    placeholder="blur"
                    src="/assets/images/icon/icon-3.png"
                    alt=""
                  />
                  777 888 0000
                </li>
                <li>
                  <nuxt-img
                    loading="lazy"
                    placeholder="blur"
                    src="/assets/images/icon/icon-4.png"
                    alt=""
                  />
                  24 hours / 7 days a week
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="" style="position: relative">
              <div class="banner-thumb">
                <nuxt-img
                  loading="lazy"
                  placeholder="blur"
                  src="/assets/images/banner-thumb.png"
                  alt="line"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="contact-info-text">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some injected
                humour, or randomised words.
              </p>
              <p class="text">
                Which don't look even slightly believable. If you are going to
                use a passage of you need to be sure there embarrassing.
              </p>
              <nuxt-img
                loading="lazy"
                placeholder="blur"
                src="/assets/images/logo_small.svg"
                alt="logo"
                width="200px"
                height="150px"
                style="height: auto; z-index: 9999999999999999"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactInfo",
};
</script>

<style scoped></style>
