import { defineStore } from 'pinia'
import type { Tag, tagsStatus } from '@/types/tag'

export const useTags = defineStore('tags', {
  state: (): tagsStatus => ({
    tagsList: [],
    cacheList: [],
  }),
  actions: {
    addTag(tag: Tag) {
      const hasTag = this.tagsList.some((item) => item.path === tag.path)
      if (hasTag) return
      this.tagsList.push(tag)
    },
    addCache(name: string) {
      if (this.cacheList?.includes(name)) return
      this.cacheList.push(name)
      console.log('this.cacheList', this.cacheList)
    },
    removeTag(path: string) {
      const index = this.tagsList.findIndex((item) => item.path === path)
      if (index !== -1) {
        this.tagsList = this.tagsList.filter((_, i) => i !== index)
      }
    },
    removeLeft(path: string) {
      const index = this.tagsList.findIndex((item) => item.path === path)
      if (index !== -1) {
        this.tagsList = this.tagsList.filter((_, i) => i >= index || !_.closable)
        this.rebuildCache()
      }
    },
    removeRight(path: string) {
      const index = this.tagsList.findIndex((item) => item.path === path)
      if (index !== -1) {
        this.tagsList = this.tagsList.filter((_, i) => i <= index || !_.closable)
        this.rebuildCache()
      }
    },
    removeOther(path: string) {
      this.tagsList = this.tagsList.filter((_, i) => _.path === path || !_.closable)
      this.rebuildCache()
    },
    removeCache(name: string) {
      const index = this.cacheList?.findIndex((i) => i === name) ?? -1
      if (index > -1) {
        this.cacheList?.splice(index, 1)
      }
    },
    rebuildCache() {
      this.cacheList = this.tagsList.filter((i) => i.keepAlive).map((item) => item.name)
    },
  },
})
