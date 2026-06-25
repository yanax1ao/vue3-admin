import router from '@/router'
import type { Menu } from '@/types/user'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/views/layout/index.vue'

const modules = import.meta.glob('../views/**/*.vue')

export const filterRoutes = (routes: Menu[], permission: string[]) => {
  return routes.filter((item) => {
    if (!item.permission) {
      return true
    }
    return permission.includes(item.permission)
  })
}

// export const generateRoutes = (routes: Menu[]) => {
//   return routes.map((item) => {
//     console.log('item', item)

//     console.log('component', modules[`../views/${item.component}.vue`])
//     const routesObj = {
//       path: item.path,
//       name: item.name,
//       component: modules[`../views/${item.component}.vue`] as any,
//       meta: {
//         permission: item.permission,
//       },
//     }
//     return routesObj
//   })
// }

export const addAccessRouter = (routes: []) => {
  routes.forEach((route) => router.addRoute(route))
}

const menus: Menu[] = [
  {
    id: 1,
    name: '系统管理',
    path: '/system',
    component: 'Layout',
    children: [
      {
        id: 2,
        name: '用户管理',
        path: 'user',
        component: 'system/user/index',
      },
      {
        id: 3,
        name: '角色管理',
        path: 'role',
        component: 'system/role/index',
      },
    ],
  },
]

export const generateRoutes = (menus: Menu[]) => {
  const routes: RouteRecordRaw[] = []
  menus.forEach((item) => {
    const route = {} as RouteRecordRaw
    route.path = item.path
    route.name = item.name
    route.meta = {
      title: item.name,
    }
    if (!item.component) return
    if (item.component === 'Layout') {
      route.component = Layout
    } else {
      const component = modules[`../views/${item.component}.vue`]
      if (!component) {
        console.error(`${item.component}不存在`)
        return
      }
      route.component = component
    }
    console.log(item.name, item.path, 'component', modules[`../views/${item.component}.vue`])
    if (item.children?.length) {
      route.children = generateRoutes(item.children)
    }
    routes.push(route)
  })
  return routes
}

const routes = generateRoutes(menus)
routes.forEach((item) => router.addRoute(item))
