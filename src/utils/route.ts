import router from '@/router'
type routeItem = {
  path: string
  name: string
  component: string
  permission?: string
}

const modules = import.meta.glob('../views/**/*.vue')

export const filterRoutes = (routes: routeItem[], permission: string[]) => {
  return routes.filter((item) => {
    if (!item.permission) {
      return true
    }
    return permission.includes(item.permission)
  })
}

export const generateRoutes = (routes: routeItem[]) => {
  return routes.map((item) => {
    console.log('component', modules[`../views/${item.component}.vue`])
    return {
      path: item.path,
      name: item.name,
      component: modules[`../views/${item.component}.vue`] as any,
      meta: {
        permission: item.permission,
      },
    }
  })
}

export const addAccessRouter = (routes: []) => {
  routes.forEach((route) => router.addRoute(route))
}
