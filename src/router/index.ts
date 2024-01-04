import { createWebHashHistory, createRouter } from 'vue-router';

//创建路由
const router = createRouter({ history: createWebHashHistory(), routes: [] });

const { beforeEach } = router;

// 路由前置守卫
beforeEach((to, from, next) => {
  next();
});

export default router;
