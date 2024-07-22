<template>
    <div>
      <button @click="showModal = true">Открыть модальное окно</button>
      <Modal :visible="showModal" @update:visible="showModal = $event"></Modal>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Modal from '~/components/Modal.vue';
  
  const showModal = ref(false);
  </script>
  
  <style scoped>
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #7355d6;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #5e44a6;
  }
  </style>
  