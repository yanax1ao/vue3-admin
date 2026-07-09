import request from '@/utils/request'
import type { Role, RoleQuery, Detail, Message } from '@/types/role'
import type { ApiResponse, PageResult } from '@/types/api'

export const getRoleList = (query: RoleQuery): Promise<ApiResponse<PageResult<Role>>> => {
  console.log(query, '请求表格接口')
  // return request<ApiResponse<PageResult<UserItem>>>({
  //   url: '/user/list',
  //   method: 'get',
  //   params: query,
  // })
  return Promise.resolve({
    code: 200,
    message: 'success',
    data: {
      list: [
        {
          id: 2,
          name: '肖雅娜',
          tel: '13024272212',
          age: 21,
        },
      ],
      total: 1,
    },
  })
}

export const getRoleDetail = (id: number): Promise<ApiResponse<Detail>> => {
  console.log('id', id)
  return Promise.resolve({
    code: 200,
    message: 'success',
    data: {
      id: 2,
      name: 'nananana',
      tel: '13024242212',
      age: 20,
      address: '重庆',
      gender: 'girl',
    },
  })
}

export const editRoleDetail = (form: Role): Promise<ApiResponse<Message>> => {
  console.log('form', form)
  return Promise.resolve({
    code: 200,
    message: 'success',
    data: {
      code: 200,
      message: '编辑成功',
    },
  })
}

export const addRoleDetail = (form: Role): Promise<ApiResponse<Message>> => {
  console.log('addform', form)
  return Promise.resolve({
    code: 200,
    message: 'success',
    data: {
      code: 200,
      message: '新增成功',
    },
  })
}
