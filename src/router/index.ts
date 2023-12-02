import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/desktop'
    },
    {
      path: '/desktop',
      name: 'desktop',
      component: () => import('../views/DesktopView.vue')
    }
  ]
})

export default router
