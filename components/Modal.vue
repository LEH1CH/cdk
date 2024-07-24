<template>
  <div v-if="visible" class="modal-overlay" @click.self="close">
    <div class="modal">
      <button class="close-button" @click="close">×</button>
      <div class="modal-content">
        <div class="left-pane">
          <h2 class="left-title">Большой тест-драйв</h2>
          <p class="left-description">
            Получите 2 дня доступа к КонсультантПлюс и 7 дней доступа к нашим
            сервисам бесплатно. Попробуйте сейчас!
          </p>
          <div class="block-service">
            <div class="service">
              <img
                src="@/assets/conslogo.svg"
                alt="КонсультантПлюс"
                class="service-img"
              />
              <div class="service-info">
                <h3 class="title-service">Система КонсультантПлюс</h3>
                <p class="description-service">
                  Полный доступ • 2 дня за&nbsp;0₽
                </p>
              </div>
              <img
                class="lock-icon"
                src="@/assets/lock-icon.svg"
                alt="Lock Icon"
              />
            </div>
            <div class="service">
              <img
                src="@/assets/cdklogo.svg"
                alt="Что делать Консалт"
                class="service-img"
              />
              <div class="service-info">
                <h3 class="title-service">Сервис Что делать Консалт</h3>
                <p class="description-service">22 сервиса • 7 дней за 0₽</p>
              </div>
              <img
                class="lock-icon"
                src="@/assets/lock-icon.svg"
                alt="Lock Icon"
              />
            </div>
          </div>
        </div>
        <div class="right-pane">
          <h3 class="right-title">
            Оставьте заявку и с вами свяжутся наши специалисты
          </h3>
          <form @submit.prevent="submitForm">
            <div class="submit-form">
              <input type="text" v-model="name" placeholder="Имя" />
              <input type="tel" v-model="phone" placeholder="Телефон" />
              <input
                type="email"
                v-model="email"
                placeholder="Электронная почта"
              />
              <select v-model="region">
                <option disabled value="">Выберите регион</option>
                <option value="region1">Регион 1</option>
                <option value="region2">Регион 2</option>
              </select>
            </div>
            <button type="submit">Отправить</button>
            <p class="right-description">
              Нажимая «Отправить», вы соглашаетесь <br />
              <a href="#">с политикой конфиденциальности</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:visible"]);
const close = () => {
  emit("update:visible", false);
};

const name = ref("");
const phone = ref("");
const email = ref("");
const region = ref("");

const submitForm = () => {
  // Логика отправки формы
  console.log({
    name: name.value,
    phone: phone.value,
    email: email.value,
    region: region.value,
  });
  close();
};
</script>

<style scoped lang="scss">
@import "./ModalStyles.scss";
</style>
