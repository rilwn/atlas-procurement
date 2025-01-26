<template>
  <div
    class="flex flex-col flex-1 shrink justify-center items-center p-4 rounded-lg border border-gray-300 basis-0 border-[token('color.border')] min-w-[240px] max-md:max-w-full"
  >
    <div class="flex flex-col self-stretch w-full">
      <h2 class="text-base font-semibold leading-none text-blue-950">
        Shelf Life Analysis
      </h2>
      <div class="mt-1 text-xs font-medium text-slate-500">
        Ratio of received products with expiry less than 18 months
      </div>
    </div>
    <div
      class="flex overflow-hidden gap-2.5 justify-center items-center px-6 py-6 mt-5 max-w-full min-h-[240px] w-[394px] max-md:px-5"
    >
      <div class="flex self-stretch my-auto min-h-[196px] w-[195px]"></div>
    </div>
    <div class="flex gap-3 items-start mt-5 text-xs font-medium text-slate-500">
      <div class="gap-2 self-stretch">Less than 18 Months</div>
      <div class="gap-2 self-stretch">More than 18 Months</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ShelfLifeAnalysis',
});
</script>
