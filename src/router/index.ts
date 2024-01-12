import { createWebHashHistory, createRouter } from 'vue-router';

//创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/index.tsx')
    }
  ]
});

const { beforeEach } = router;

// 路由前置守卫
beforeEach((to, from, next) => {
  next();
});

export default router;
