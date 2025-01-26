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
      <PieChart :data="chartData" :options="chartOptions" />
    </div>
    <div class="flex gap-3 items-start mt-5 text-xs font-medium text-slate-500">
      <div class="gap-2 self-stretch">Less than 18 Months</div>
      <div class="gap-2 self-stretch">More than 18 Months</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PieChart from './PieChart.vue';

export default defineComponent({
  name: 'ShelfLifeAnalysis',
  components: {
    PieChart,
  },
  data() {
    return {
      chartData: {
        labels: ['Less than 18 Months', 'More than 18 Months'],
        datasets: [
          {
            label: 'Shelf Life Analysis',
            data: [30, 70],
            backgroundColor: ['#A3F94E', '#0000EE'],
            hoverBackgroundColor: ['#A3F94E', '#0000EE'],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
});
</script>
