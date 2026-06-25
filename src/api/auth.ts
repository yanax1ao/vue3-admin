export const login = () => {
  return Promise.resolve({
    token: '88888',
  })
}

export const loadUserInfo = () => {
  return Promise.resolve({
    roles: ['admin'],
    permissions: ['role:list', 'role:add', 'role:delete'],
    userInfo: {
      name: 'nana',
    },
    // menus: [
    //   {
    //     path: '/user',
    //     name: 'User',
    //     component: 'user/index',
    //     permission: 'user:list',
    //   },

    //   {
    //     path: '/role',
    //     name: 'Role',
    //     component: 'role/index',
    //     permission: 'role:list',
    //   },
    // ],
    menus: [
      {
        id: 1,
        name: '首页',
        path: '/home',
        component: 'Layout',
      },
      {
        id: 2,
        name: '系统管理',
        path: '/system',
        children: [
          {
            id: 3,
            name: '用户管理',
            path: '/system/user',
            component: 'system/user/index',
          },
          {
            id: 4,
            name: '角色管理',
            path: '/system/role',
            component: 'system/role/index',
          },
        ],
      },
    ],
  })
}
