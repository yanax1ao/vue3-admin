import router from '@/router'
import type { Menu } from '@/types/user'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/views/layout/index.vue'
import { hasPermission } from './auth'

const modules = import.meta.glob('../views/**/*.vue')

export const filterMenus = (menus: Menu[]): Menu[] => {
  return menus.reduce<Menu[]>((result, menu): Menu[] => {
    const currentMenu = { ...menu }
    if (currentMenu.children?.length) {
      currentMenu.children = filterMenus(currentMenu.children)
    }
    const hasCurrentPermission = !currentMenu.permission || hasPermission(currentMenu.permission)
    const hasChildren = currentMenu.children?.length
    if (hasCurrentPermission || hasChildren) {
      result.push(currentMenu)
    }
    return result
  }, [])
}

export const addAccessRouter = (routes: []) => {
  routes.forEach((route) => router.addRoute(route))
}

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
