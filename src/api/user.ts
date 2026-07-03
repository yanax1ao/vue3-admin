import request from '@/utils/request'
import type { User, PageResult } from '@/types/api'

export const getUserList = () => {
  return request.get<PageResult<User>>('/user/list')
}
