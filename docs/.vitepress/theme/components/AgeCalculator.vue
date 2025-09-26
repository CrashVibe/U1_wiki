<template>
  <span>{{ age }}</span>
</template>

<script setup>
import { ref, onMounted } from "vue";

const age = ref(0);

onMounted(() => {
  const birthDate = new Date("2005-08-16");
  const today = new Date();
  let ageValue = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    ageValue--;
  }

  age.value = ageValue;
});
</script>
