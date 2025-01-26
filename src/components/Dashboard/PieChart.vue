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
  name: 'PieChart',
  props: {
    data: {
      type: Object as () => ChartData<'pie', number[], string>,
      required: true,
    },
    options: {
      type: Object as () => ChartOptions<'pie'>,
      default: () => ({}),
    },
  },
  setup(props) {
    const chart = ref<HTMLCanvasElement | null>(null);

    onMounted(() => {
      if (chart.value) {
        new Chart(chart.value, {
          type: 'pie',
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
