import SuppliersDashboardRoutes from './../modules/suppliers-dashbopard';

const PrivateRecursiveRoutes = {
  path: '/',
  meta: {
    requiresAuth: true,
  },
  component: () => import('@/layouts/RecursiveLayout.vue'),
  children: [SuppliersDashboardRoutes],
};

export default PrivateRecursiveRoutes;
