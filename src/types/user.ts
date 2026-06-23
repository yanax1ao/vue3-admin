export type routeItem = {
  path: string
  name: string
  component: string
  permission?: string
}

export type UserStatus = {
  permissions: string[]
  roles: string[]
  userInfo: object | null
  token: string
  menus: routeItem[]
  hasRoutes: boolean
}
