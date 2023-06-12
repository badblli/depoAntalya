<script>
import { GetContact } from "../graphql/GetContact";
import { GetAllSiteConfig } from "../graphql/GetAllSiteConfig";
import gql from "graphql-tag";

export default {
  name: "WriteMessageThree",
  data() {
    return {
      contacts: [],
      siteConfigs: [],
      formLoading: false,
      disabled:false,
      showModal: false,
      formError: null,
      formMessage: "",
      formData: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    click() {
    this.showModal = true;
  },
    async submitForm() {
      try {
        this.formLoading = true;
        this.formError = null;

        const mutation = gql`
          mutation sendEmail(
            $name: String!
            $email: String!
            $phone: String
            $subject: String
            $message: String
          ) {
            createSendEmail(
              data: {
                name: $name
                email: $email
                phone: $phone
                subject: $subject
                message: $message
              }
            ) {
              data {
                attributes {
                  name
                  email
                  phone
                  subject
                  message
                }
              }
            }
          }
        `;

        await this.$apollo.mutate({
          mutation: mutation,
          variables: {
            name: this.formData.name,
            email: this.formData.email,
            phone: this.formData.phone,
            subject: this.formData.subject,
            message: this.formData.message,
          },
        });
    // Mutation was successful, show the modal
    this.showModal = true;
  } catch (error) {
    // Handle any errors that occurred during the mutation
    console.error(error);
    this.showModal = false;
    this.formError = "An error occurred while submitting the form.";
  }
  finally {
        // Reset the loading state after the mutation completes
        this.formLoading = false;
      }
},
resetForm(){
  this.formData.name = "";
  this.formData.email = "";
  this.formData.phone = "";
  this.formData.subject = "";
  this.formData.message = "";
},

    closeModal() {
      this.showModal = false;
      this.resetForm();
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
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
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
                      <button
                        type="submit"
                        class="main-btn main-btn-2"
                      
                      >
                        {{ contacts.attributes.sendButton }}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="contact-info-area">
            <div class="contact-info">
              <div
                class="contact-info-content"
                v-for="siteConfigs in siteConfigs.data"
                :key="siteConfigs.id"
              >
                <!-- <h3 class="title">
                  Feel free to get in touch with depoantalya.
                </h3> -->

                <div class="row pt-110">
                  <div class="col-12 col-md-6">
                    <ul>
                      <li>
                        <nuxt-img
                          loading="lazy"
                          placeholder="blur"
                          src="/assets/images/icon/icon-1.png"
                          alt=""
                        />
                        {{ siteConfigs.attributes.address }}
                      </li>
                      <!-- <li>
                      <nuxt-img  loading="lazy" placeholder="blur" src="/assets/images/icon/icon-2.png" alt="" />
                      needhelp@depoantalya.com
                    </li> -->
                      <li>
                        <nuxt-img
                          loading="lazy"
                          placeholder="blur"
                          src="/assets/images/icon/icon-3.png"
                          alt=""
                        />+
                        {{ siteConfigs.attributes.phone }}
                      </li>
                      <li>
                        <nuxt-img
                          loading="lazy"
                          placeholder="blur"
                          src="/assets/images/icon/icon-4.png"
                          alt=""
                        />
                        7/24
                      </li>
                    </ul>
                  </div>
                  <div class="col-12 col-md-6">
                    <iframe
                      :src="`${siteConfigs.attributes.googleIframeUrl}`"
                      style="border: 0"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <nuxt-img
                  loading="lazy"
                  placeholder="blur"
                  :src="`http://localhost:8082${siteConfigs.attributes.logo.data.attributes.url}`"
                  :alt="`${siteConfigs.attributes.logo.data.attributes.name}`"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 <div>
         
       

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
}</style>
