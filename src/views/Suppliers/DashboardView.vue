<template>
  <div class="flex overflow-hidden flex-col bg-white">
    <SupplierNavigation />
    <SupplierStatistics :stats="supplierStats" />
    <SupplierTabs />
    <SupplierTableControls />
    <SupplierOrdersTable :orders="orders" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SupplierNavigation from '@/components/Suppliers/SupplierNavigation.vue';
import SupplierStatistics from '@/components/Suppliers/SupplierStatistics.vue';
import SupplierTabs from '@/components/Suppliers/SupplierTabs.vue';
import SupplierTableControls from '@/components/Suppliers/SupplierTableControls.vue';
import SupplierOrdersTable from '@/components/Suppliers/SupplierOrdersTable.vue';
import { useSupplierOrders } from '@/composables/useSupplierOrders';
import type { SupplierStats } from '@/types/index';

// Define reactive data
const supplierStats = ref<SupplierStats>({
  purchaseOrders: { count: 40, total: 5250000 },
  invoices: { count: 20, total: 5250000 },
  payments: { count: 25, total: 5250000 },
  purchaseQty: 12,
  returns: 0,
});

const { orders } = useSupplierOrders();
// const orders = ref<SupplierOrder[]>([]);
</script>
