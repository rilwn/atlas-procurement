<template>
  <div class="flex overflow-hidden flex-col bg-white">
    <ProcurementTitle />
    <div
      class="flex flex-wrap flex-1 gap-4 px-6 pb-4 size-full max-md:px-5 max-md:max-w-full"
    >
      <div
        class="flex flex-col flex-1 shrink basis-8 min-w-[240px] max-md:max-w-full"
      >
        <MetricsGrid />
        <div
          class="flex flex-wrap flex-1 gap-4 mt-6 size-full max-md:max-w-full"
        >
          <ShelfLifeAnalysis />
          <StorageSpace />
        </div>
      </div>
      <TopPerformers />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProcurementTitle from '@/components/Dashboard/ProcurementTitle.vue';
import MetricsGrid from '@/components/Dashboard/MetricsGrid.vue';
import ShelfLifeAnalysis from '@/components/Dashboard/ShelfLifeAnalysis.vue';
import StorageSpace from '@/components/Dashboard/StorageSpace.vue';
import TopPerformers from '@/components/Dashboard/TopPerformers.vue';
</script>
