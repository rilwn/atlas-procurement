<template>
  <div class="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
    <MetricCard
      title="Received Suppliers"
      value="60"
      change="12.95"
      trend="up"
    />
    <MetricCard
      title="Received Products Qty"
      value="20,550"
      change="2.95"
      trend="down"
    />
    <MetricCard
      title="Value of Received Products"
      value="₦5,250,000"
      change="12.95"
      trend="neutral"
    />
    <MetricCard
      title="Orders Pending Arrival"
      value="15"
      change="3.32"
      trend="down"
    />
    <MetricCard
      title="Orders Passed Delivery Date"
      value="10"
      change="12.95"
      trend="neutral"
    />
    <MetricCard
      title="Average Processing Time"
      value="06 Days | 14 Hours | 53 Minutes"
      change="12.95"
      trend="neutral"
      valueClass="text-base font-medium leading-7 text-blue-950"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MetricCard from './MetricCard.vue';

export default defineComponent({
  name: 'MetricsGrid',
  components: {
    MetricCard,
  },
});
</script>
