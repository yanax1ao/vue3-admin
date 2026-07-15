export const setToken = (token: string) => {
  localStorage.setItem('token', token)
}

export const removeToken = () => {
  localStorage.removeItem('token')
}

export const getToken = () => localStorage.getItem('token')

export const hasPermission = (
  code: string | string[],
  permissions: string[],
  roles: string[],
  and?: boolean,
): boolean => {
  if (roles.includes('admin')) return true
  if (Array.isArray(code)) {
    if (and) {
      return code.every((item) => permissions.includes(item))
    }
    return code.some((item) => permissions.includes(item))
  } else {
    return permissions.includes(code)
  }
}
