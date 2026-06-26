import { createRouter, createWebHistory } from 'vue-router'
import { userUserStore } from '@/stores/user'
import type { RouteRecordRaw } from 'vue-router'
import NotFound from '@/views/error/404.vue'

let routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/404',
    component: NotFound,
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

router.beforeEach(async (to) => {
  const userStore = userUserStore()
  if (to.path === '/login') {
    return true
  }
  if (!userStore.token) {
    return { path: '/login' }
  }
  if (!userStore.hasRoutes) {
    await userStore.loadUserInfo()
    return {
      ...to,
      replace: true,
    }
  }
  return true
})

export default router
