export interface ApiResponse<T> {
  code: number
  message: string
  data: T
}

export interface User {
  id: number
  name: string
  nickname: string
  phone: string
  status: 0 | 1
  createTime: string
}

export interface PageResult<T> {
  list: T[]
  total: number
}
interface UserQuery {
  page: number
  pageSize: number
  username?: string
  phone?: string
  status?: number
}
