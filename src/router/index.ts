import { createWebHashHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home')
  }
];

//创建路由
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
});

const { beforeEach } = router;

// 路由前置守卫
beforeEach((to, from, next) => {
  next();
});

export default router;
