<template>
  <div class="flex z-0 flex-col max-w-full w-[264px]">
    <h2 class="text-base font-semibold leading-none text-blue-950">
      {{ title }}
    </h2>
    <div class="flex flex-col mt-5 w-full">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="flex flex-col mt-2 w-full"
        :class="{ 'mt-0': index === 0 }"
      >
        <div class="text-xs font-medium leading-none text-blue-950">
          {{ item.name }}
        </div>
        <div class="flex gap-1.5 items-center mt-1 w-full">
          <div
            class="flex flex-1 shrink gap-3 items-center self-stretch my-auto basis-0"
          >
            <div
              class="flex flex-col flex-1 shrink self-stretch my-auto w-full rounded-lg basis-0"
            >
              <div
                class="flex flex-col items-start bg-gray-200 rounded-full max-md:pr-5"
              >
                <div
                  class="flex shrink-0 h-2 rounded-full"
                  :class="progressBg"
                  :style="getBarWidth(item.value)"
                ></div>
              </div>
            </div>
          </div>
          <div
            class="self-stretch my-auto text-xs font-medium leading-none text-blue-950"
            :class="valueWidth"
          >
            {{ valuePrefix }}{{ item.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

interface PerformerItem {
  name: string;
  value: string;
}

export default defineComponent({
  name: 'TopPerformersSection',
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array as PropType<PerformerItem[]>,
      required: true,
    },
    valuePrefix: {
      type: String,
      default: '',
    },
    model: {
      type: String,
      default: '',
    },
  },
  computed: {
    valueWidth(): string {
      return this.valuePrefix ? 'w-[58px]' : 'w-[35px]';
    },
    progressBg(): string {
      return this.model == 'products' ? 'bg-[#A3F94E]' : 'bg-blue-600';
    },
  },
  methods: {
    getBarWidth(value: string): { width: string } {
      const numValue = parseFloat(value.replace(/,/g, ''));
      const maxValue = Math.max(
        ...this.items.map((item) => parseFloat(item.value.replace(/,/g, ''))),
      );
      const percentage = (numValue / maxValue) * 100;
      return { width: `${Math.max(percentage, 20)}px` };
    },
  },
});
</script>
