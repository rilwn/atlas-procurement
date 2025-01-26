<template>
  <div class="bg-white p-4 rounded-lg border border-gray-200">
    <h3 class="text-xs font-semibold text-gray-500">{{ title }}</h3>
    <div class="mt-4">
      <div class="text-xl font-medium">{{ value }}</div>
      <div class="flex items-center gap-2 mt-1.5">
        <span
          class="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold"
          :class="trendClasses"
        >
          <svg
            v-if="trend !== 'neutral'"
            class="w-4 h-4 mr-1"
            :class="trend === 'up' ? 'rotate-0' : 'rotate-180'"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 4.414l-3.293 3.293a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          {{ trendValue }}
        </span>
        <span class="text-xs text-gray-500">Compared to last month</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  title: string;
  value: string | number;
  trend: 'up' | 'down' | 'neutral';
  trendValue: string;
}

const props = defineProps<Props>();

const trendClasses = computed(() => {
  switch (props.trend) {
    case 'up':
      return 'bg-green-100 text-green-800';
    case 'down':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
});
</script>
