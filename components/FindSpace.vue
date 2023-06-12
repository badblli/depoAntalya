<template>
  <section class="find-space-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="find-space-title text-center">
            <h3 class="title">Find the space that's right for you.</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="find-space d-block d-lg-flex">
            <div class="find-space-item mt-30 d-block d-sm-flex active">
              <div class="find-space-thumb">
                <nuxt-img
                  loading="lazy"
                  placeholder="blur"
                  src="/assets/images/find-space-1.jpg"
                  alt=""
                />
              </div>
              <div class="find-space-content">
                <h4 class="title">Coworking Space</h4>
                <p>
                  There are many new variations of pasages of available text.
                </p>
                <nuxt-link to="/get-in-touch"
                  ><i class="flaticon-right-arrow"></i
                ></nuxt-link>
              </div>
            </div>
            <div class="find-space-item mt-30 d-block d-sm-flex">
              <div class="find-space-thumb">
                <nuxt-img
                  loading="lazy"
                  placeholder="blur"
                  src="/assets/images/find-space-2.png"
                  alt=""
                />
              </div>
              <div class="find-space-content">
                <h4 class="title">Coworking Space</h4>
                <p>
                  There are many new variations of pasages of available text.
                </p>
                <nuxt-link to="/get-in-touch"
                  ><i class="flaticon-right-arrow"></i
                ></nuxt-link>
              </div>
            </div>
            <div class="find-space-item mt-30 d-block d-sm-flex">
              <div class="find-space-thumb">
                <nuxt-img
                  loading="lazy"
                  placeholder="blur"
                  src="/assets/images/find-space-3.png"
                  alt=""
                />
              </div>
              <div class="find-space-content">
                <h4 class="title">Coworking Space</h4>
                <p>
                  There are many new variations of pasages of available text.
                </p>
                <nuxt-link to="/get-in-touch"
                  ><i class="flaticon-right-arrow"></i
                ></nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="find-pattern">
      <nuxt-img
        loading="lazy"
        placeholder="blur"
        src="/assets/images/fun-facts-pattern.png"
        alt=""
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "FindSpace",
};
</script>

<style scoped></style>
