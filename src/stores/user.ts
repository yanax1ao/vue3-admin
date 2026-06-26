import { defineStore } from 'pinia'
import { login, loadUserInfo } from '@/api/auth'
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
import { filterMenus, generateRoutes } from '@/utils/route'
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
    hasRoutes: getMenus().length > 0 || false,
  }),
  actions: {
    async login(account?: string, pwd?: string) {
      const res = await login()
      this.token = res.token
      setToken(res.token)
    },
    async loadUserInfo() {
      const res = await loadUserInfo()
      this.permissions = res.permissions
      this.roles = res.roles
      this.userInfo = res.userInfo
      this.menus = res.menus
      setMenus(JSON.stringify(res.menus))
      setUserInfo(JSON.stringify(res.userInfo))
      setPermissions(JSON.stringify(res.permissions))
      setRoles(JSON.stringify(res.roles))
      const accessMenus = filterMenus(res.menus, res.permissions)
      console.log('menus', accessMenus)

      const accessRoutes = generateRoutes(accessMenus)
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
      this.hasRoutes = false
    },
  },
})
