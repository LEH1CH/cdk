<template>
  <div v-if="visible" class="modal-overlay" @click.self="close">
    <div class="modal">
      <button class="close-button" @click="close">×</button>
      <div class="modal-content">
        <div class="left-pane">
          <h2 class="left-title">Большой тест-драйв</h2>
          <p class="left-description">
            Получите 2 дня доступа к КонсультантПлюс <br />и 7 дней доступа к
            нашим сервисам бесплатно. Попробуйте сейчас!
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
                <p class="description-service">Полный доступ • 2 дня за 0₽</p>
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
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: #ffffff;
  border-radius: 26px;
  max-width: 1046px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.close-button {
  position: absolute;
  top: 7px;
  right: 5px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.modal-content {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #f5f5f5;
  border-radius: 26px;
}


.left-pane {
  background: #5e61bc;
  color: white;
  padding: 20px 24px 20px 24px;
  border-radius: 24px;
  max-width: 523px;
  flex: 1 1 auto;
  font-family: "Open Sans", sans-serif;
}

.left-title {
  font-size: 32px;
  font-weight: 700;
  line-height: 38.4px;
  text-align: left;
  max-width: 475px;
  margin: 20px 0 0 0;
}

.left-description {
  font-size: 18px;
  font-weight: 400;
  line-height: 28.8px;
  text-align: left;
  max-width: 475px;
  margin: 24px 0;
}

.right-pane {
  padding: 20px 24px;
  max-width: 523px;
  flex: 1 1 auto;
  font-family: "Open Sans", sans-serif;
}

.right-title {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin: 17px 0 0 0;
}

.right-description {
  margin: 8px auto 0;
  letter-spacing: 0.1px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  color: #737278;
}

.service {
  display: flex;
  padding: 16px;
  align-items: center;
  background-color: #7e81c9;
  border-radius: 8px;
  position: relative;
  max-width: 475px;
  gap: 7px;
  outline: 1px solid #a4a7d9;
}

.block-service {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 20px;
}

.service-info {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.description-service {
  margin: 0;
  font-size: 16px;
}

.title-service {
  margin: 0;
  font-size: 16px;
}

.lock-icon {
  position: absolute;
  top: -10px;
  right: -5px;
  width: 32px;
  height: 32px;
}

.service-img {
  width: 48px;
  height: 48px;
}

form {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;
}

.submit-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 475px;
}

form input {
  padding: 8px;
  border: none;
  border-radius: 24px;
  color: #737278;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
}

form input::placeholder {
  letter-spacing: 0.4px;
  padding-left: 8px;
}

form select {
  padding: 8px;
  border: none;
  border-radius: 24px;
  color: #737278;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  appearance: none;
  letter-spacing: 0.3px;
  background: url("assets/arrow.svg") no-repeat right #fff;
  background-position-x: 452px;
}

form button {
  padding: 8px;
  border-radius: 24px;
  background: #5e61bc;
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  margin-top: 24px;
  cursor: pointer;
  border: none;
  letter-spacing: 0.5px;
}
</style>
