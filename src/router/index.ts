import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/404.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export default router;
