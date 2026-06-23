export const asyncRoutes = [
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
]
