export const login = () => {
  return Promise.resolve({
    token: '88888',
  })
}

export const loadUserInfo = () => {
  return Promise.resolve({
    roles: ['user'],
    permissions: [
      'user:view',
      // 'user:add',
      'user:edit',
      'user:delete',
      'role:view',
      'role:add',
      'theme:view',
      'set:view',
      'role:edit',
      // 'role:delete',
    ],
    userInfo: {
      id: 1,
      username: 'admin',
      nickname: '管理员',
    },
    menus: [
      {
        id: 1,
        name: '首页',
        path: '/home',
        component: 'Layout',
        icon: 'House',
      },

      {
        id: 2,
        name: '系统管理',
        path: '/system',
        component: 'Layout',
        icon: 'Setting',
        children: [
          {
            id: 3,
            name: '用户管理',
            path: '/system/user',
            component: 'system/user/index',
            permission: 'user:view',
          },

          {
            id: 4,
            name: '角色管理',
            path: '/system/role',
            component: 'system/role/index',
            permission: 'role:view',
          },
        ],
      },

      {
        id: 2,
        name: '更多管理',
        path: '/more',
        component: 'Layout',
        icon: 'Setting',
        children: [
          {
            id: 3,
            name: '主题管理',
            path: '/more/theme',
            component: 'more/theme/index',
            permission: 'theme:view',
          },

          {
            id: 4,
            name: '配置管理',
            path: '/more/set',
            component: 'more/set/index',
            permission: 'set:view',
          },
        ],
      },
    ],
  })
}
