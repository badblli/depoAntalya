<template>
  <section class="team-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="team-title text-center">
            <h3 class="title">Team members</h3>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-7 col-sm-8">
          <div
            class="team-item mt-30 animated wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="0ms"
          >
            <div class="team-thumb">
              <nuxt-img
                loading="lazy"
                placeholder="blur"
                src="/assets/images/team-1.jpg"
                alt="team"
              />
            </div>
            <div class="team-content text-center">
              <h4 class="title">Kevin martin</h4>
              <span>Developer</span>
              <ul>
                <li>
                  <nuxt-link :to="localePath('/')"
                    ><i class="fa fa-facebook-square"></i
                  ></nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/')"
                    ><i class="fa fa-twitter"></i
                  ></nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/')"
                    ><i class="fa fa-instagram"></i
                  ></nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/')"
                    ><i class="fa fa-dribbble"></i
                  ></nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-7 col-sm-8">
          <div
            class="team-item mt-30 animated wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="100ms"
          >
            <div class="team-thumb">
              <nuxt-img
                loading="lazy"
                placeholder="blur"
                src="/assets/images/team-2.jpg"
                alt="team"
              />
            </div>
            <div class="team-content text-center">
              <h4 class="title">Kevin martin</h4>
              <span>Developer</span>
              <ul>
                <li>
                  <nuxt-link :to="localePath('/')"
                    ><i class="fa fa-facebook-square"></i
                  ></nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/')"
                    ><i class="fa fa-twitter"></i
                  ></nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/')"
                    ><i class="fa fa-instagram"></i
                  ></nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/')"
                    ><i class="fa fa-dribbble"></i
                  ></nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-7 col-sm-8">
          <div
            class="team-item mt-30 animated wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="200ms"
          >
            <div class="team-thumb">
              <nuxt-img
                loading="lazy"
                placeholder="blur"
                src="/assets/images/team-3.jpg"
                alt="team"
              />
            </div>
            <div class="team-content text-center">
              <h4 class="title">Kevin martin</h4>
              <span>Developer</span>
              <ul>
                <li>
                  <nuxt-link :to="localePath('/')"
                    ><i class="fa fa-facebook-square"></i
                  ></nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/')"
                    ><i class="fa fa-twitter"></i
                  ></nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/')"
                    ><i class="fa fa-instagram"></i
                  ></nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('/')"
                    ><i class="fa fa-dribbble"></i
                  ></nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="team-pattern">
      <nuxt-img
        loading="lazy"
        placeholder="blur"
        src="/assets/images/services-dot.png"
        alt=""
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "Team",
};
</script>

<style scoped></style>
