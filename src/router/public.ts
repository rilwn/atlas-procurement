const PublicRoutes = {
  path: '/',
  component: () => import('@/layouts/BlankLayout.vue'),
  meta: {
    requiresAuth: false,
  },
  children: [
    {
      name: 'Login',
      path: '/login',
      component: () => import('@/views/Auth/LoginView.vue'),
    },
    {
      name: 'Register',
      path: '/register',
      component: () => import('@/views/Auth/RegisterView.vue'),
    },
  ],
};

export default PublicRoutes;
