<template>
  <div class="tag-view">
    <div
      class="tag-item"
      :class="{ active: isActive(item.path) }"
      @click="handleClick(item)"
      v-for="(item, index) in tagsList"
      :key="item.path"
    >
      {{ item.name }}
      <span :class="{ hide: !item.closable }" class="close" @click.stop="handleClose(item, index)"
        >x</span
      >
    </div>
  </div>
</template>

<script setup>
import { useTags } from '@/stores/tag'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

const router = useRouter()
const route = useRoute()
const store = useTags()
const { tagsList } = storeToRefs(store)
const { removeTag } = store

const handleClick = (tag) => {
  router.push(tag.path)
}
const isActive = (path) => {
  return path === route.path
}
const handleClose = (item, index) => {
  const isCurrent = item.path === route.path
  const nextTag = tagsList[index - 1] || tagsList[index + 1] || tagsList[0]

  removeTag(item.path)
  if (!isCurrent) return
  router.push(nextTag ? nextTag.path : '/home')
}
</script>

<style lang="scss" scoped>
.tag-view {
  padding: 0 0 20px 180px;
  display: flex;
  gap: 20px;
  .tag-item {
    cursor: pointer;
    padding: 6px 12px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
  }
  .tag-item.active {
    background: #409eff;
    color: #fff;
  }
  .hide {
    display: none;
  }
}
</style>
