<template>
  <div>
    <div class="flex overflow-hidden flex-col bg-white min-h-screen">
      <ProcurementHeader />

      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import ProcurementHeader from '@/components/Dashboard/ProcurementHeader.vue';
</script>

<style scoped>
/* .tab-content {
  margin-top: 1rem;
} */
</style>
