export interface Branch {
  id: string;
  name: string;
}

export interface DashboardStats {
  receivedSuppliers: number;
  receivedProductsQty: number;
  valueOfReceivedProducts: number;
  ordersPendingArrival: number;
  ordersPassedDeliveryDate: number;
  averageProcessingTime: string;
}

export interface TopSupplier {
  name: string;
  value: number;
  percentage: number;
}

export interface TopProduct {
  name: string;
  quantity: number;
  percentage: number;
}

export interface SupplierStats {
  purchaseOrders: {
    count: number;
    total: number;
  };
  invoices: {
    count: number;
    total: number;
  };
  payments: {
    count: number;
    total: number;
  };
  purchaseQty: number;
  returns: number;
}

export interface SupplierOrder {
  orderNo: string;
  supplierName: string;
  type: string;
  date: string;
  total: number;
  quantity: number;
  quantityReturned: number;
  status: string;
}
