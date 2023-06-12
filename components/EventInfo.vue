<template>
  <section class="event-info-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-7">
          <div class="event-info-item mt-30">
            <h3 class="title">Venue</h3>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet
              adipisci veli sed quiae.
            </p>
            <div class="info">
              <ul>
                <li><i class="flaticon-calendar"></i> 24 Feb, 2020</li>
                <li><i class="flaticon-alarm-clock"></i> 9:00am 02:00pm</li>
                <li><i class="flaticon-map"></i> New York</li>
              </ul>
            </div>
            <div class="social">
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
        <div class="col-lg-4 col-md-7">
          <div class="event-info-map mt-30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.3355547331084!2d30.747456227642584!3d36.906240705232804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39bab9b347c63%3A0x22891f6a4c252745!2sProtalya%20Bilgi%20Teknolojileri!5e0!3m2!1str!2str!4v1672222493050!5m2!1str!2str"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="col-lg-4 col-md-7">
          <div class="event-info-item mt-30 item-2">
            <h3 class="title">Organizer</h3>
            <p>
              Neque porro q est, qui dolorem ipsum quiaolor sit amet adipisci
              veli sed quiae.
            </p>
            <div class="info">
              <ul>
                <li><i class="flaticon-phone-call"></i> 777 888 0000</li>
                <li>
                  <i class="flaticon-message"></i> needhelp@depoantalya.com
                </li>
                <li>
                  <i class="flaticon-placeholder"></i> 20 broklyn street road
                  new york, USA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EventInfo",
};
</script>

<style scoped></style>
