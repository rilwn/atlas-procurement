import { ref } from 'vue';
import type { SupplierOrder } from '../types/index';

export function useSupplierOrders() {
  const orders = ref<SupplierOrder[]>([
    {
      orderNo: 'RHPO-1651244214',
      supplierName: 'Fidson Healthcare',
      type: 'Trade',
      date: '5/21/2024',
      total: 2055043.0,
      quantity: 93,
      quantityReturned: 1,
      status: 'Approved',
    },
    {
      orderNo: 'RHPO-1651244211',
      supplierName: 'Fidson Healthcare',
      type: 'Trade',
      date: '3/25/2024',
      total: 423369.55,
      quantity: 120,
      quantityReturned: 2,
      status: 'Approved',
    },
    {
      orderNo: 'RHPO-1651244891',
      supplierName: 'Fidson Healthcare',
      type: 'Trade',
      date: '4/19/2024',
      total: 386934.91,
      quantity: 67,
      quantityReturned: 5,
      status: 'Approved',
    },
    {
      orderNo: 'RHPO-1651214524',
      supplierName: 'Fidson Healthcare',
      type: 'Trade',
      date: '5/20/2024',
      total: 952639.63,
      quantity: 84,
      quantityReturned: 3,
      status: 'Approved',
    },
    {
      orderNo: 'RHPO-1051244110',
      supplierName: 'Fidson Healthcare',
      type: 'Trade',
      date: '6/20/2024',
      total: 629792.38,
      quantity: 36,
      quantityReturned: 0,
      status: 'Approved',
    },
    {
      orderNo: 'RHPO-1651241013',
      supplierName: 'Fidson Healthcare',
      type: 'Trade',
      date: '6/28/2024',
      total: 1638653.94,
      quantity: 47,
      quantityReturned: 5,
      status: 'Approved',
    },
    {
      orderNo: 'RHPO-1651241014',
      supplierName: 'Fidson Healthcare',
      type: 'Trade',
      date: '7/2/2024',
      total: 51333.32,
      quantity: 48,
      quantityReturned: 4,
      status: 'Approved',
    },
    {
      orderNo: 'RHPO-1651241015',
      supplierName: 'Fidson Healthcare',
      type: 'Trade',
      date: '12/6/2024',
      total: 1168142.8,
      quantity: 11,
      quantityReturned: 0,
      status: 'Approved',
    },
    {
      orderNo: 'RHPO-1651241016',
      supplierName: 'Fidson Healthcare',
      type: 'Trade',
      date: '6/11/2024',
      total: 1462624.27,
      quantity: 29,
      quantityReturned: 2,
      status: 'Approved',
    },
    {
      orderNo: 'RHPO-1651241017',
      supplierName: 'Fidson Healthcare',
      type: 'Trade',
      date: '1/4/2024',
      total: 249268.61,
      quantity: 50,
      quantityReturned: 0,
      status: 'Confirm',
    },
    {
      orderNo: 'RHPO-1651244214',
      supplierName: 'Fidson Healthcare',
      type: 'Trade',
      date: '5/21/2024',
      total: 2055043.0,
      quantity: 93,
      quantityReturned: 1,
      status: 'Approved',
    },
    {
      orderNo: 'RHPO-1651244211',
      supplierName: 'Fidson Healthcare',
      type: 'Trade',
      date: '3/25/2024',
      total: 423369.55,
      quantity: 120,
      quantityReturned: 2,
      status: 'Approved',
    },
    {
      orderNo: 'RHPO-1651244891',
      supplierName: 'Fidson Healthcare',
      type: 'Trade',
      date: '4/19/2024',
      total: 386934.91,
      quantity: 67,
      quantityReturned: 5,
      status: 'Approved',
    },
    {
      orderNo: 'RHPO-1651214524',
      supplierName: 'Fidson Healthcare',
      type: 'Trade',
      date: '5/20/2024',
      total: 952639.63,
      quantity: 84,
      quantityReturned: 3,
      status: 'Approved',
    },
    {
      orderNo: 'RHPO-1051244110',
      supplierName: 'Fidson Healthcare',
      type: 'Trade',
      date: '6/20/2024',
      total: 629792.38,
      quantity: 36,
      quantityReturned: 0,
      status: 'Approved',
    },
    {
      orderNo: 'RHPO-1651241013',
      supplierName: 'Fidson Healthcare',
      type: 'Trade',
      date: '6/28/2024',
      total: 1638653.94,
      quantity: 47,
      quantityReturned: 5,
      status: 'Approved',
    },
    {
      orderNo: 'RHPO-1651241014',
      supplierName: 'Fidson Healthcare',
      type: 'Trade',
      date: '7/2/2024',
      total: 51333.32,
      quantity: 48,
      quantityReturned: 4,
      status: 'Approved',
    },
    {
      orderNo: 'RHPO-1651241015',
      supplierName: 'Fidson Healthcare',
      type: 'Trade',
      date: '12/6/2024',
      total: 1168142.8,
      quantity: 11,
      quantityReturned: 0,
      status: 'Approved',
    },
    {
      orderNo: 'RHPO-1651241016',
      supplierName: 'Fidson Healthcare',
      type: 'Trade',
      date: '6/11/2024',
      total: 1462624.27,
      quantity: 29,
      quantityReturned: 2,
      status: 'Approved',
    },
    {
      orderNo: 'RHPO-1651241017',
      supplierName: 'Fidson Healthcare',
      type: 'Trade',
      date: '1/4/2024',
      total: 249268.61,
      quantity: 50,
      quantityReturned: 0,
      status: 'Confirm',
    },
  ]);

  return {
    orders,
  };
}
