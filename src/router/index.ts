import { createRouter, createWebHistory } from 'vue-router'
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
    path: '/user',
    name: 'User',
    component: () => import('@/views/user/index.vue'),
    meta: {
      permission: 'user:list',
    },
  },
  {
    path: '/role',
    name: 'Role',
    component: () => import('@/views/role/index.vue'),
    meta: {
      permission: 'role:list',
    },
  },
]

const filterRoutes = (routes: any) => {
  console.log('?', permission)
  if (!permission) return routes
  const res = routes.filter((item: any) => {
    if (item.meta) {
      return permission?.includes(item.meta.permission)
    } else {
      return true
    }
  })
  return res
}

console.log('***', filterRoutes(routes))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: filterRoutes(routes),
})

router.beforeEach((to, from) => {
  console.log(router, '888')

  if (to.path === '/home') {
    console.log('?', localStorage.getItem('token'))

    if (!localStorage.getItem('token')) {
      router.push('/login')
    }
  }
})

export default router
