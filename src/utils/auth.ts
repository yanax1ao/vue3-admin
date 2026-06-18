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

export const removePermissions = () => {
  localStorage.removeItem('permission')
}
export const removeRoles = () => {
  localStorage.removeItem('roles')
}
export const removeUserInfo = () => {
  localStorage.removeItem('userInfo')
}
