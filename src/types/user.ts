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
  menus: Menu[]
  hasRoutes: boolean
}

interface Permission {
  id: number
  code: string
  name: string
  type: 'menu' | 'api' | 'button'
}

interface User {
  id: number
  username: string
  roles: Role[]
}

interface Role {
  id: number
  name: string
  permissions: Permission[]
}

export interface Menu {
  name: string
  id: number
  path: string
  component?: string
  icon?: string
  permission?: string
  children?: Menu[]
}
