<template>
  <nav
    class="flex flex-wrap gap-2 px-4 w-full bg-white border-b border-gray-300 border-opacity-10"
    role="tablist"
  >
    <button
      v-for="menu in menus"
      :key="menu.id"
      @click="goTo(menu.name)"
      class="relative cursor-pointer px-4 py-3 text-xs tracking-tight font-[590] transition-colors focus:outline-none hover:text-blue-600"
      :class="{ 'text-blue-600': isActive(menu.name) }"
    >
      {{ menu.label }}
      <div
        v-if="isActive(menu.name)"
        class="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-sm"
        aria-hidden="true"
      ></div>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { menus } from '@/composables/data';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

// Function to navigate to a specific route
const goTo = (page: string) => {
  router.push({ name: page });
};

// Function to check if the current route matches the menu route
const isActive = (menuName: string) => {
  return route.name === menuName;
};
</script>

<style scoped>
/* Styles */
</style>
