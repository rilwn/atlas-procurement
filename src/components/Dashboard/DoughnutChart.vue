<template>
  <div>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';
import type { ChartData, ChartOptions } from 'chart.js';

Chart.register(...registerables);

export default defineComponent({
  name: 'DoughnutChart',
  props: {
    data: {
      type: Object as () => ChartData<'doughnut', number[], string>,
      required: true,
    },
    options: {
      type: Object as () => ChartOptions<'doughnut'>,
      default: () => ({}),
    },
  },
  setup(props) {
    const chart = ref<HTMLCanvasElement | null>(null);

    onMounted(() => {
      if (chart.value) {
        new Chart(chart.value, {
          type: 'doughnut',
          data: props.data,
          options: props.options,
        });
      }
    });

    return {
      chart,
    };
  },
});
</script>
