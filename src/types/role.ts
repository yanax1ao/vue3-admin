export interface Role {
  id: number
  name: string
  tel: string
  age: number | undefined
}

export interface RoleQuery {
  page: number
  pagesize: number
  id?: number
  name?: string
  tel?: string
}
