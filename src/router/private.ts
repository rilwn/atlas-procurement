import DashboardRoutes from './modules/dashboard';
import AllSuppliersRoutes from './modules/all-suppliers';
import PurchaseOrderRoutes from './modules/purchase-order';
import PaymentsRoutes from './modules/payments';
import SuppliersReturnRoutes from './modules/suppliers-return';
import ProductRequestRoutes from './modules/product-request';

const PrivateRoutes = {
  path: '/',
  name: 'Home',
  meta: {
    requiresAuth: true,
  },
  // redirect: '/dashboard',
  component: () => import('@/layouts/DefaultLayout.vue'),
  children: [
    DashboardRoutes,
    AllSuppliersRoutes,
    PurchaseOrderRoutes,
    PaymentsRoutes,
    SuppliersReturnRoutes,
    ProductRequestRoutes,
  ],
};

export default PrivateRoutes;
