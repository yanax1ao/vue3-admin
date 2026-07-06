import request from '@/utils/request'
import type { UserItem, UserQuery } from '@/types/user'
import type { ApiResponse, PageResult } from '@/types/api'

export const getUserList = (query: UserQuery): Promise<ApiResponse<PageResult<UserItem>>> => {
  console.log(query)
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
          nickname: 'nanana',
          phone: '13024272212',
          status: 1,
          createTime: '2026-7-3',
        },
      ],
      total: 1,
    },
  })
}
