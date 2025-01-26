<template>
  <div
    class="flex overflow-hidden relative flex-col items-center p-4 rounded-lg border border-gray-300 border-[token('color.border')] min-w-[240px] w-[296px]"
  >
    <TopPerformersSection
      title="Top Suppliers"
      :items="suppliers"
      valuePrefix="₦"
      model="suppliers"
    />
    <div
      class="flex z-0 mt-5 max-w-full bg-gray-300 my-4 bg-opacity-10 min-h-[1px] w-[264px]"
    ></div>
    <TopPerformersSection
      title="Top Products"
      :items="products"
      model="products"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopPerformersSection from './TopPerformersSection.vue';

export default defineComponent({
  name: 'TopPerformers',
  components: {
    TopPerformersSection,
  },
  data() {
    return {
      suppliers: [
        { name: 'Emzor Pharmaceuticals', value: '235,000' },
        { name: 'Fidson Healthcare', value: '122,040' },
        { name: 'Emzor Pharmaceuticals', value: '76,320' },
        { name: 'Fidson Healthcare', value: '63,470' },
        { name: 'Emzor Pharmaceuticals', value: '4,609' },
      ],
      products: [
        { name: 'Paracetamol', value: '2,000' },
        { name: 'Ibuprofen', value: '500' },
        { name: 'Amoxicillin', value: '403' },
        { name: 'Vitamin C Tablets', value: '321' },
        { name: 'Artemether-Lumefantrine', value: '81' },
      ],
    };
  },
});
</script>
