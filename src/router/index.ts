import { createRouter, createWebHistory } from 'vue-router';
import PrivateRecursiveRoutes from './private/recursive';
import PrivateRoutes from './private';
import PublicRoutes from './public';

const whiteList = ['Login', 'Register'];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    PrivateRecursiveRoutes,
    PrivateRoutes,
    PublicRoutes,
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/Pages/NotFound.vue'),
    },
  ],
});

// Check if user is authenticated or authorized to access the route (static login)
router.beforeEach(async (to) => {
  const routeName = String(to.name);
  if (whiteList.includes(routeName)) {
    return true;
  } else {
    try {
      return true;
    } catch (error) {
      return { name: 'Login' };
    }
  }
});

export default router;
