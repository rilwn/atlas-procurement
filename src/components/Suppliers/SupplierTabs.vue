<template>
  <div
    class="flex items-start px-6 pt-2 w-full text-xs font-semibold leading-none text-center bg-gray-50 border-b border-gray-300 border-opacity-10 text-slate-600 max-md:px-5 max-md:max-w-full"
  >
    <div
      class="flex flex-wrap flex-1 shrink items-start w-full basis-0 min-w-[240px] max-md:max-w-full -mb-[1px]"
    >
      <button
        class="overflow-hidden cursor-pointer px-4 py-3 bg-white rounded-tl-md rounded-tr-md border-t border-r border-l border-gray-300 border-opacity-10 text-blue-950 hover:text-blue-600"
        aria-selected="true"
      >
        Purchase order
      </button>
      <button
        class="overflow-hidden px-4 py-3 whitespace-nowrap rounded-md"
        aria-selected="false"
      >
        Invoices
      </button>
      <button
        class="overflow-hidden px-4 py-3 whitespace-nowrap rounded"
        aria-selected="false"
      >
        Payment
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SupplierTabs',
});
</script>
