import { defineStore } from 'pinia'
import type { Tag, tagsStatus } from '@/types/tag'

export const useTags = defineStore('tags', {
  state: (): tagsStatus => ({
    tagsList: [],
  }),
  actions: {
    addTag(tag: Tag) {
      const hasTag = this.tagsList.some((item) => item.path === tag.path)
      if (hasTag) return
      this.tagsList.push(tag)
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
      }
    },
    removeRight(path: string) {
      const index = this.tagsList.findIndex((item) => item.path === path)
      if (index !== -1) {
        this.tagsList = this.tagsList.filter((_, i) => i <= index || !_.closable)
      }
    },
    removeOther(path: string) {
      this.tagsList = this.tagsList.filter((_, i) => _.path === path || !_.closable)
    },
  },
})
