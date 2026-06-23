import { createRouter, createWebHistory } from 'vue-router'
import { getMenus, getPermissions } from '@/utils/auth'
import { filterRoutes as filterRequestRoutes, generateRoutes, addAccessRouter } from '@/utils/route'
import { userUserStore } from '@/stores/user'

const permission = localStorage.getItem('permission')
let routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/dashboard/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
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

router.beforeEach(async (to, from) => {
  const userStore = userUserStore()
  if (!userStore.token) {
    if (to.path === '/home') {
      return true
    }
  }
  if (!userStore.hasRoutes) {
    await userStore.login()
    return {
      ...to,
      replace: true,
    }
  }
  return true
})

export default router
