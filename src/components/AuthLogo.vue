<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        src="@/assets/logo/logo.svg"
        class="mx-auto h-10 w-auto"
        :height="props.height"
        alt="logo"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  height: {
    type: Number,
    default: 35,
  },
});
</script>
