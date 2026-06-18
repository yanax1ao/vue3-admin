import { defineStore } from 'pinia'
import { login } from '@/api/auth'
import type { UserStatus } from '@/types/user'
import {
  getToken,
  getPermissions,
  getRoles,
  getUserInfo,
  setToken,
  setRoles,
  setPermissions,
  setUserInfo,
  removeToken,
  removeRoles,
  removeUserInfo,
  removePermissions,
} from '@/utils/auth'

const initState: UserStatus = {
  permissions: [],
  roles: [],
  userInfo: {},
  token: '',
}

export const userUserStore = defineStore('user', {
  state: (): UserStatus => ({
    permissions: getPermissions() || [],
    roles: getRoles() || [],
    userInfo: getUserInfo() || { name: '' },
    token: getToken() || '',
  }),
  actions: {
    async login(account: string, pwd: string) {
      const res = await login()

      this.token = res.token
      this.permissions = res.permissions
      this.roles = res.roles
      this.userInfo = res.userInfo

      setToken(res.token)
      setUserInfo(JSON.stringify(res.userInfo))
      setPermissions(JSON.stringify(res.permissions))
      setRoles(JSON.stringify(res.roles))
    },
    logout() {
      this.$state = { ...initState }
      removeToken()
      removeRoles()
      removeUserInfo()
      removePermissions()
    },
  },
})
