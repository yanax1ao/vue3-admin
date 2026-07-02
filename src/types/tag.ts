export interface Tag {
  title: string
  name: string
  path: string

  query?: Record<string, any>
  params?: Record<string, any>
  icon?: string
  closable?: boolean
  keepAlive: boolean
}

export interface tagsStatus {
  tagsList: Tag[]
  cacheList: string[]
}
