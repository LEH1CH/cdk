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
            <div>
              <div class="service">
                <img src="@/assets/conslogo.svg" alt="КонсультантПлюс" />
                <div>
                  <h3 class="title-service">Система КонсультантПлюс</h3>
                  <p class="description-service">Полный доступ • 2 дня за 0₽</p>
                </div>
              </div>
              <img src="@/assets/lock.svg" class="lock"/>
            </div>
            <div>
              <div class="service">
                <img src="@/assets/cdklogo.svg" alt="Что делать Консалт" />
                <div>
                  <h3 class="title-service">Сервис Что делать Консалт</h3>
                  <p class="description-service">22 сервиса • 7 дней за 0₽</p>
                </div>
              </div>
              <img src="@/assets/lock.svg" class="lock"/>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.modal-content {
  display: flex;
  flex-direction: row;
  background-color: #f5f5f5;
  border-radius: 26px;
}

.left-pane {
  background: #5e61bc;
  color: white;
  padding: 20px 24px 20px 24px;
  border-radius: 24px;
  flex: 1;
  max-width: 523px;
}

.left-title {
  font-size: 32px;
  font-weight: 700;
  line-height: 38.4px;
  text-align: left;
  margin: 20px 0 0 0;
}

.left-description {
  font-size: 18px;
  font-weight: 400;
  line-height: 28.8px;
  text-align: left;
  margin: 24px 0;
}

.right-pane {
  padding: 20px;
  flex: 1;
}

.right-title {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin-top: 17px;
  margin-bottom: 24px;
}

.right-description {
  margin: 8px auto 0;
  max-width: 443px;
  text-align: center;
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
}

.service lock {
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
}

.block-service {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.description-service {
  margin: 0;
}

.title-service {
  margin: 0;
}

.service img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

form {
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

form select {
  padding: 10px;
  border: none;
  border-radius: 24px;
  color: #737278;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
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
}
</style>
