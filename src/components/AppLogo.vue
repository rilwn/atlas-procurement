<script setup lang="ts">
import Logo from '@/assets/logo/logo.svg';
</script>

<template>
  <div style="line-height: 0" class="logo">
    <img :src="Logo" :height="height" alt="logo" />
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100% !important;
}
</style>
