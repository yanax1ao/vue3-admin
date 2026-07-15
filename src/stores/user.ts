import { defineStore } from 'pinia'
import { login, loadUserInfo } from '@/api/auth'
import type { UserStatus } from '@/types/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
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

export const useUserStore = defineStore('user', {
  state: (): UserStatus => ({
    permissions: [],
    roles: [],
    userInfo: { name: '' },
    token: getToken() || '',
    menus: [],
    hasRoutes: false,
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

      const accessMenus = filterMenus(res.menus, res.permissions)
      const accessRoutes = generateRoutes(accessMenus)
      accessRoutes.forEach((route) => router.addRoute(route))
      router.addRoute({
        path: '/:pathMatch(.*)*',
        redirect: '/404',
      })
      this.hasRoutes = true
    },
    logout() {
      this.$state = { ...initState }
      removeToken()

      this.hasRoutes = false
    },
  },
})
