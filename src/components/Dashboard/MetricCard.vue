<template>
  <div
    class="flex flex-col flex-1 shrink self-stretch p-4 my-auto bg-white rounded-md border basis-0 border-gray-300 border-opacity-10 min-w-[293px]"
  >
    <div class="text-xs font-semibold leading-none text-slate-500">
      {{ title }}
    </div>
    <div class="flex flex-col mt-4 w-full">
      <div
        :class="
          valueClass ||
          'text-xl font-medium leading-tight text-[token(\'color.text\')]'
        "
      >
        {{ value }}
      </div>
      <div class="flex gap-2 items-center mt-1.5 w-full text-xs">
        <div :class="getTrendClass()">
          <template v-if="trend !== 'neutral'">
            <img
              loading="lazy"
              :src="getTrendIcon()"
              alt="Trend Icon"
              class="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
            />
          </template>
          <div class="self-stretch my-auto">{{ change }}%</div>
        </div>
        <div class="self-stretch my-auto leading-none text-slate-500">
          Compared to last month
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import Up from '@/assets/images/up.png';
import Down from '@/assets/images/down.png';

type TrendType = 'up' | 'down' | 'neutral';

// Define props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  change: {
    type: String,
    required: true,
  },
  trend: {
    type: String as () => TrendType,
    required: true,
  },
  valueClass: {
    type: String,
    required: false,
  },
});

// Function to get trend class
const getTrendClass = () => {
  const baseClasses =
    'flex gap-1 justify-center items-center self-stretch py-0.5 pr-1 pl-0.5 my-auto font-bold leading-none text-center whitespace-nowrap rounded min-h-[20px]';

  switch (props.trend) {
    case 'up':
      return `${baseClasses} text-teal-800 bg-green-200`;
    case 'down':
      return `${baseClasses} text-red-700 bg-rose-200`;
    default:
      return `${baseClasses} text-blue-950 bg-gray-100 bg-opacity-10`;
  }
};

// Function to get trend icon
const getTrendIcon = () => {
  return props.trend === 'up' ? Up : Down;
};
</script>
