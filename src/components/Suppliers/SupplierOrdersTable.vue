<template>
  <div
    class="flex overflow-hidden relative flex-1 mb-6 gap-3 items-start px-6 size-full max-md:px-5 max-md:max-w-full"
  >
    <div
      class="flex overflow-hidden relative z-0 mb-2 flex-1 shrink items-start rounded-lg border border-solid basis-0 border-gray-300 border-opacity-10 min-w-[240px] max-md:max-w-full"
    >
      <table class="w-full">
        <!-- Table Header -->
        <thead class="sticky top-0 bg-gray-50 z-10">
          <tr class="text-xs font-medium text-blue-950">
            <th
              class="px-2 py-2 text-left border-b border-gray-300 border-opacity-10"
            >
              Order No
            </th>
            <th
              class="px-2 py-2 text-left border-b border-gray-300 border-opacity-10"
            >
              Supplier's Name
            </th>
            <th
              class="px-2 py-2 text-left border-b border-gray-300 border-opacity-10"
            >
              Type
            </th>
            <th
              class="px-2 py-2 text-left border-b border-gray-300 border-opacity-10"
            >
              Date
            </th>
            <th
              class="px-2 py-2 text-left border-b border-gray-300 border-opacity-10"
            >
              Total
            </th>
            <th
              class="px-2 py-2 text-left border-b border-gray-300 border-opacity-10"
            >
              Quantity
            </th>
            <th
              class="px-2 py-2 text-left border-b border-gray-300 border-opacity-10"
            >
              Quantity Returned
            </th>
            <th
              class="px-2 py-2 text-left border-b border-gray-300 border-opacity-10"
            >
              Status
            </th>
            <th
              class="px-2 py-2 text-left border-b border-gray-300 border-opacity-10"
            >
              Action
            </th>
          </tr>
        </thead>

        <!-- Table Body -->
        <tbody class="block overflow-y-auto max-h-[400px]">
          <tr
            v-for="order in orders"
            :key="order.orderNo"
            class="text-xs font-medium text-slate-600 border-b border-gray-300 border-opacity-10"
          >
            <td class="px-2 py-3">{{ order.orderNo }}</td>
            <td class="px-2 py-3">{{ order.supplierName }}</td>
            <td class="px-2 py-3">{{ order.type }}</td>
            <td class="px-2 py-3">{{ order.date }}</td>
            <td class="px-2 py-3">₦{{ formatNumber(order.total) }}</td>
            <td class="px-2 py-3">{{ order.quantity }}</td>
            <td class="px-2 py-3">{{ order.quantityReturned }}</td>
            <td class="px-2 py-3">
              <span
                class="px-1.5 py-1 bg-green-100 rounded border border-green-200 border-solid text-[token('color.text.success')] font-bold"
              >
                {{ order.status }}
              </span>
            </td>
            <td class="px-2 py-3">
              <button
                class="p-0.5 rounded cursor-pointer"
                aria-label="View order details"
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5002 17.5C11.4206 17.5 12.1668 16.7538 12.1668 15.8333C12.1668 14.9129 11.4206 14.1667 10.5002 14.1667C9.57969 14.1667 8.8335 14.9129 8.8335 15.8333C8.8335 16.7538 9.57969 17.5 10.5002 17.5Z"
                    fill="#44546F"
                  />
                  <path
                    d="M10.5002 11.6667C11.4206 11.6667 12.1668 10.9205 12.1668 10C12.1668 9.07953 11.4206 8.33333 10.5002 8.33333C9.57969 8.33333 8.8335 9.07953 8.8335 10C8.8335 10.9205 9.57969 11.6667 10.5002 11.6667Z"
                    fill="#44546F"
                  />
                  <path
                    d="M10.5002 5.83333C11.4206 5.83333 12.1668 5.08714 12.1668 4.16667C12.1668 3.24619 11.4206 2.5 10.5002 2.5C9.57969 2.5 8.8335 3.24619 8.8335 4.16667C8.8335 5.08714 9.57969 5.83333 10.5002 5.83333Z"
                    fill="#44546F"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { SupplierOrder } from '@/types/index';

defineProps({
  orders: {
    type: Array as () => SupplierOrder[],
    required: true,
  },
});

// Function to format numbers
const formatNumber = (num: number): string => {
  return num.toLocaleString();
};
</script>

<style scoped>
table {
  display: flex;
  flex-direction: column;
}

thead,
tbody {
  display: block;
}

thead tr,
tbody tr {
  display: flex;
  width: 100%;
}

thead th,
tbody td {
  flex: 1;
  min-width: 120px;
}
</style>
