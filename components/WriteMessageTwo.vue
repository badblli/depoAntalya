<script>
import { GetContact } from "../graphql/GetContact";
import { GetAllSiteConfig } from "../graphql/GetAllSiteConfig";
import gql from "graphql-tag";
export default {
  name: "WriteMessageTwo",
  data() {
    return {
      contacts: [],
      siteConfigs: [],
      formSubmitted: false,
      formLoading: false,
      disabled: false,
      showModal: false,
      formError: "",
      recaptcha: false,
      formData: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        depoSize: "",
        depoUnit: "",
        date: "",
        time: "",
      },
    };
  },
  methods: {
    resetForm() {
      this.formData.name = "";
      this.formData.email = "";
      this.formData.phone = "";
      this.formData.subject = "";
      this.formData.message = "";
      this.formData.depoSize = "";
      this.formData.depoUnit = "";
      this.formData.date = "";
      this.formData.time = "";
       this.$recaptcha.reset()
    },
    closeModal() {
      this.showModal = false;
      this.recaptcha = false;
      this.resetForm();
    },
    async submitForm() {
  const mutation = gql`
    mutation sendEmail(
      $name: String!
      $email: String!
      $phone: String
      $subject: String
      $message: String
      $date: String
      $time: String
      $depoSize: String
      $depoUnit: String
    ) {
      createSendEmail(
        data: {
          name: $name
          email: $email
          phone: $phone
          subject: $subject
          message: $message
          date: $date
          time: $time
          depoSize: $depoSize
          depoUnit: $depoUnit
        }
      ) {
        data {
          attributes {
            name
            email
            phone
            subject
            message
            date
            time
            depoSize
            depoUnit
          }
        }
      }
    }
  `;

  try {
    const token = await this.$recaptcha.getResponse()
        console.log('ReCaptcha token:', token)
        if (!token) {
          this.formError = "Please complete the reCAPTCHA.";
          console.log('ReCaptcha token:', token)
          this.recaptcha = true;
          return;
        }
    await this.$apollo.mutate({
      mutation: mutation,
      variables: {
        name: this.formData.name,
        email: this.formData.email,
        phone: this.formData.phone,
        subject: this.formData.subject,
        message: this.formData.message,
        date: this.formData.date,
        time: this.formData.time,
        depoSize: this.formData.depoSize,
        depoUnit: this.formData.depoUnit,
      },
    });

    // Mutation was successful, show the modal
    this.showModal = true;
    this.disabled=true
  } catch (error) {
    // Handle any errors that occurred during the mutation
    console.error(error);
    this.showModal = false;
    this.recaptcha = true;
        this.formError = "Please complete the reCAPTCHA.";      
        await this.$recaptcha.reset()
  }
  finally {
        // Reset the loading state after the mutation completes
        this.formLoading = false;
        this.disabled=false;
      }
},

  },

  apollo: {
    contacts: {
      prefetch: true,
      query: GetContact,
      variables() {
        return { locale: this.$i18n.locale };
      },
      fetchPolicy: "no-cache",
    },
    siteConfigs: {
      prefetch: true,
      query: GetAllSiteConfig,
      variables() {
        return { locale: this.$i18n.locale };
      },
      fetchPolicy: "no-cache",
    },
  },
};
</script>

<template>
  <section class="write-massage-area pb-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div
            class="write-massage-content"
            v-for="contacts in contacts.data"
            :key="contacts.id"
          >
            <div class="write-massage-title">
              <h3 class="title">{{ contacts.attributes.title }}</h3>
            </div>
            <div class="write-massage-input">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="input-box mt-10">
                      <input
                        v-model="formData.name"
                        type="text"
                        required
                        :placeholder="`${contacts.attributes.name}`"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-box mt-10">
                      <input
                        v-model="formData.email"
                        type="email"
                        :placeholder="`${contacts.attributes.email}`"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-box mt-10">
                      <input
                        type="text"
                        required
                        v-model="formData.phone"
                        :placeholder="`${contacts.attributes.phoneTitle}`"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-box mt-10">
                      <input
                        type="text"
                        v-model="formData.subject"
                        :placeholder="`${contacts.attributes.subject}`"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-box mt-10">
                      <select id="depo" name="depo" v-model="formData.depoSize">
                        <option value="" disabled selected hidden>Depo</option>
                        <option
                          style="height: 50px"
                          v-for="contacts in contacts.attributes.depo_configs
                            .data"
                          :key="contacts.id"
                          :value="
                            contacts.attributes.title +
                            ' ' +
                            contacts.attributes.size +
                            contacts.attributes.metrekare
                          "
                        >
                          {{ contacts.attributes.title }} -
                          {{ contacts.attributes.size }}
                          ( {{ contacts.attributes.metrekare }})
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="input-box mt-10">
                      <input
                        v-model="formData.depoUnit"
                        type="number"
                        min="1"
                        max="50"
                        :placeholder="`${contacts.attributes.unit}`"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-box mt-10">
                      <input
                        type="date"
                        v-model="formData.date"
                        placeholder="Date"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-box mt-10">
                      <input
                        type="time"
                        v-model="formData.time"
                        placeholder="Time"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="input-box mt-10">
                      <textarea
                        name="message"
                        id="#"
                        cols="30"
                        rows="10"
                        :placeholder="`${contacts.attributes.message}`"
                        v-model="formData.message"
                      ></textarea>
                      <recaptcha />
                      <button type="submit" class="main-btn main-btn-2" >
                        {{ contacts.attributes.sendButton }}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="get-in-touch-info"
            v-for="siteConfigs in contacts.data"
            :key="siteConfigs.id"
          >
            <span>{{ siteConfigs.attributes.title2 }}</span>
            <p>
              {{ siteConfigs.attributes.description }}
            </p>
            <h3 class="title">
              <a
                style="color: #fff"
                :href="`callto:${siteConfigs.attributes.phone.data.attributes.phone}`"
                ><i class="flaticon-phone-call"></i> +{{
                  siteConfigs.attributes.phone.data.attributes.phone
                }}</a
              >
            </h3>
          </div>
        </div>
      </div>
    </div>
 <div>
      <!-- Modal bileşeni -->
      <div v-if="showModal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document"   
        v-for="siteConfigs in siteConfigs.data" v-bind:key="siteConfigs.id">
          <div class="modal-content">
            <div class="modal-header">
              <!-- <h5 class="modal-title">Modal Başlığı</h5> -->
              <button type="button" class="close" @click="closeModal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p> {{ siteConfigs.attributes.successMessage }} </p>
            </div>
            <div class="modal-footer">          
              <button type="button" class="btn btn-secondary" @click="closeModal">✔️</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="recaptcha" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document"
        v-for="siteConfigs in siteConfigs.data" v-bind:key="siteConfigs.id">
          <div class="modal-content">
            <div class="modal-header">
              <!-- <h5 class="modal-title">Modal Başlığı</h5> -->
              <button type="button" class="close" @click="closeModal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p> {{ siteConfigs.attributes.errorMessage }} </p>
            </div>
            <div class="modal-footer">          
              <button type="button" class="btn btn-secondary" @click="closeModal">✔️</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<style scoped>
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
.modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999999999999999999999999999;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: 0;
}
</style>
