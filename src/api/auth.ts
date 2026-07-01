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
      // 'role:edit',
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
    ],
  })
}

// menus: [
//   {
//     id: 1,
//     path: '/',
//     component: 'Layout',
//     redirect: '/home',
//     children: [
//       {
//         id: 2,
//         path: 'home',
//         name: '首页',
//         component: 'dashboard/index',
//         meta: {
//           title: '首页',
//           icon: 'House',
//         },
//       },
//       {
//         id: 3,
//         path: 'system',
//         name: '系统管理',
//         meta: {
//           title: '系统管理',
//           icon: 'Setting',
//         },
//         children: [
//           {
//             id: 4,
//             path: 'user',
//             name: '用户管理',
//             component: 'system/user/index',
//             meta: {
//               title: '用户管理',
//               permission: 'user:view',
//             },
//           },
//           {
//             id: 5,
//             path: 'role',
//             name: '角色管理',
//             component: 'system/role/index',
//             meta: {
//               title: '角色管理',
//               permission: 'role:view',
//             },
//           },
//         ],
//       },
//     ],
//   },
// ]
