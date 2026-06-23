export const login = () => {
  return Promise.resolve({
    roles: ['admin'],
    permissions: ['role:list', 'role:add', 'role:delete'],
    userInfo: {
      name: 'nana',
    },
    token: '88888',
    menus: [
      {
        path: '/user',
        name: 'User',
        component: 'user/index',
        permission: 'user:list',
      },

      {
        path: '/role',
        name: 'Role',
        component: 'role/index',
        permission: 'role:list',
      },
    ],
  })
}
