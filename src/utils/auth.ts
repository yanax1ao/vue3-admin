export const setToken = (token: string) => {
  localStorage.setItem('token', token)
}

export const setRoles = (roles: string) => {
  localStorage.setItem('token', roles)
}

export const setPermissions = (permission: string) => {
  localStorage.setItem('permission', permission)
}

export const setUserInfo = (userInfo: string) => {
  localStorage.setItem('userInfo', userInfo)
}

export const setMenus = (menus: string) => {
  localStorage.setItem('menus', menus)
}

export const removeToken = () => {
  localStorage.removeItem('token')
}

export const getToken = () => localStorage.getItem('token')
export const getPermissions = () =>
  localStorage.getItem('permission') ? JSON.parse(localStorage.getItem('permission') || '') : []
export const getRoles = () =>
  localStorage.getItem('roles') ? JSON.parse(localStorage.getItem('roles') || '') : []
export const getUserInfo = () =>
  localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo') || '') : {}

export const getMenus = () =>
  localStorage.getItem('menus') ? JSON.parse(localStorage.getItem('menus') || '') : []

export const removePermissions = () => {
  localStorage.removeItem('permission')
}
export const removeRoles = () => {
  localStorage.removeItem('roles')
}
export const removeUserInfo = () => {
  localStorage.removeItem('userInfo')
}

export const removeMenus = () => {
  localStorage.removeItem('menus')
}

const user = {
  roles: [
    {
      permissions: [{ code: 'user:add' }, { code: 'user:delete' }],
    },
    {
      permissions: [{ code: 'user:add' }, { code: 'user:delete' }],
    },
  ],
}
export const hasPermission = (code: string): boolean => {
  const permissions = user.roles.flatMap((role) => role.permissions)
  return permissions.some((item) => item.code === code)
}
