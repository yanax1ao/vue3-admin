import { defineStore } from 'pinia'
import { login } from '@/api/auth'
import type { UserStatus } from '@/types/user'
import {
  getToken,
  getPermissions,
  getRoles,
  getUserInfo,
  getMenus,
  setToken,
  setRoles,
  setPermissions,
  setMenus,
  setUserInfo,
  removeToken,
  removeRoles,
  removeUserInfo,
  removePermissions,
  removeMenus,
} from '@/utils/auth'
import { filterRoutes, generateRoutes } from '@/utils/route'
import router from '@/router'

const initState: UserStatus = {
  permissions: [],
  roles: [],
  userInfo: {},
  token: '',
  menus: [],
  hasRoutes: false,
}

export const userUserStore = defineStore('user', {
  state: (): UserStatus => ({
    permissions: getPermissions() || [],
    roles: getRoles() || [],
    userInfo: getUserInfo() || { name: '' },
    token: getToken() || '',
    menus: getMenus() || [],
    hasRoutes: false,
  }),
  actions: {
    async login(account?: string, pwd?: string) {
      const res = await login()

      this.token = res.token
      this.permissions = res.permissions
      this.roles = res.roles
      this.userInfo = res.userInfo
      this.menus = res.menus
      setToken(res.token)
      setMenus(JSON.stringify(res.menus))
      setUserInfo(JSON.stringify(res.userInfo))
      setPermissions(JSON.stringify(res.permissions))
      setRoles(JSON.stringify(res.roles))
      const routes = filterRoutes(res.menus, res.permissions)
      const accessRoutes = generateRoutes(routes)
      accessRoutes.forEach((route) => router.addRoute(route))
      this.hasRoutes = true
    },
    logout() {
      this.$state = { ...initState }
      removeToken()
      removeRoles()
      removeUserInfo()
      removePermissions()
      removeMenus()
    },
  },
})
