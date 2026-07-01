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
        this.tagsList.splice(index, 1)
      }
      console.log('store', this.tagsList)
    },
  },
})
