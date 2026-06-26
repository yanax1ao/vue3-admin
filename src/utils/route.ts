import router from '@/router'
import type { Menu } from '@/types/user'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/views/layout/index.vue'

const modules = import.meta.glob('../views/**/*.vue')

export const filterMenus = (routes: Menu[], permission: string[]) => {
  return routes.reduce<Menu[]>((acc, cur): Menu[] => {
    let curObj = { ...cur }
    if (!curObj.permission) {
      if (!curObj.children?.length) {
        acc.push(curObj)
      } else {
        curObj.children = filterMenus(curObj.children, permission)
        acc.push(curObj)
      }
    } else {
      permission.includes(curObj.permission) && acc.push(curObj)
    }
    return acc
  }, [])
}

// export const filterMenus = (menus: Menu[], permissions: string[]): Menu[] => {
//   return menus.reduce<Menu[]>((result, menu) => {
//     const currentMenu = { ...menu }
//     // 先处理children
//     if (currentMenu.children?.length) {
//       currentMenu.children = filterMenus(currentMenu.children, permissions)
//     }
//     // 当前节点有权限
//     const hasCurrentPermission =
//       !currentMenu.permission || permissions.includes(currentMenu.permission)

//     // 子节点还有内容
//     const hasChildren = currentMenu.children?.length
//     if (hasCurrentPermission || hasChildren) {
//       result.push(currentMenu)
//     }
//     return result
//   }, [])
// }

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
