<template>
  <div id="whatsapp-container">
    <!-- WhatsApp Butonu -->
    <i class="fa fa-whatsapp" id="whatsapp-button" @click="togglePopup"> </i>

    <!-- Animasyonlu Popup -->
    <transition name="fade-slide">
      <div v-if="isPopupOpen" id="whatsapp-popup">
        <!-- <textarea
          v-model="message"
          name="#"
          id="#"
          cols="8"
          rows="4"
          :placeholder="placeholder"
        ></textarea> -->
        <button
          class="main-btn main-btn-2"
          @click="sendWhatsAppMessage(placeholder)"
        >
          {{ placeholder }}
        </button>
        <button
          class="main-btn main-btn-2"
          @click="sendWhatsAppMessage(placeholder2)"
        >
          {{ placeholder2 }}
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPopupOpen: false,
      message: "",
      phoneNumber: "905424648229", // WhatsApp numarası

      placeholder: "Merhaba bilgi almak istiyorum", // Textarea placeholder
      placeholder2: "Merhaba. Rezervasyonumla ilgili bilgi almak istiyorum.", // Textarea placeholder
    };
  },
  watch: {
    // Locale değiştiğinde başlık, placeholder ve mesaj güncelleniyor
    "$i18n.locale"(newLocale) {
      this.updateLocaleTexts(newLocale);
    },
  },
  mounted() {
    // Başlangıçta metinler ayarlanıyor
    this.updateLocaleTexts(this.$i18n.locale);
  },
  methods: {
    updateLocaleTexts(locale) {
      this.placeholder =
        locale === "tr"
          ? "Merhaba bilgi almak istiyorum"
          : locale === "en"
          ? "Hi, I want to get information"
          : locale === "ru"
          ? "Здравствуйте, я хочу получить информацию"
          : locale === "de"
          ? "Hallo, ich möchte Informationen erhalten"
          : locale === "uk"
          ? "Здравствуйте, я хочу получить информацию"
          : "Hi, I want to get information";

      this.placeholder2 =
        locale === "tr"
          ? "Merhaba. Rezervasyonumla ilgili bilgi almak istiyorum."
          : locale === "en"
          ? "Hello. I would like to get information about my reservation."
          : locale === "ru"
          ? "Здравствуйте. Я хотел бы получить информацию о моем бронировании."
          : locale === "de"
          ? "Guten Tag. Ich möchte Informationen zu meiner Reservierung erhalten."
          : locale === "uk"
          ? "Привіт. Я хотів би отримати інформацію про своє бронювання."
          : "Hello. I would like to get information about my reservation.";
    },
    togglePopup() {
      this.isPopupOpen = !this.isPopupOpen;
    },
    sendWhatsAppMessage(text) {
      this.message = text;
      if (this.message.trim() !== "") {
        const whatsappURL = `https://wa.me/${
          this.phoneNumber
        }?text=${encodeURIComponent(this.message)}`;
        window.open(whatsappURL, "_blank");
      } else {
        alert("Lütfen bir mesaj yazın.");
      }
    },
  },
};
</script>

<style scoped>
.main-btn {
  line-height: 30px !important;
  font-size: 14px !important;
  padding: 0 10px !important;
  font-weight: 500 !important;
}

.whatsapp-container {
  transition: all 0.3s ease-out; /* Her zaman animasyon etkin */
}
/* Konteyner */
#whatsapp-container {
  position: fixed;
  bottom: 19px;
  right: 20px;
  z-index: 1000;
}

/* WhatsApp Butonu */
#whatsapp-button {
  width: 40px;
  height: 40px;
  background-color: #25d366;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
}

#whatsapp-button:hover {
  transform: scale(1.1);
}

/* WhatsApp Popup */
#whatsapp-popup {
  display: flex;
  flex-direction: column; /* Alt alta diz */

  position: absolute;
  bottom: 60px;
  right: 0;
  background-color: white;
  gap: 10px;

  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 250px;
}

/* Textarea */
#whatsapp-popup textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: none;
  background-color: #fbf0ee;
  resize: none; /* Kullanıcının boyutlandırmasını engeller */
  font-family: inherit;
  font-size: 14px;
  color: #817a78;
}

/* Gönder Butonu */
#whatsapp-popup button {
  background-color: #25d366;
  color: white;
  border: none;
  white-space: normal; /* Metin taşarsa alt satıra geç */
  word-wrap: break-word; /* Uzun kelimeleri böler */
  text-align: center; /* Metni ortalar */
  padding: 10px; /* İç boşluklar */
  cursor: pointer;
  transition: background-color 0.2s ease;
}

#whatsapp-popup button:hover {
  background-color: #1ebc57;
}

/* Animasyonlar */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
