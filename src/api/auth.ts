export const login = () => {
  return Promise.resolve({
    roles: ['admin'],
    permissions: ['user:list', 'role:list', 'user:add', 'user:delete', 'role:add'],
    userInfo: {
      name: 'nana',
    },
    token: '88888',
  })
}
