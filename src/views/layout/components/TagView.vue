<template>
  <div class="tag-view">
    <div
      class="tag-item"
      :class="{ active: isActive(item.path) }"
      @click="handleClick(item)"
      v-for="(item, index) in store.tagsList"
      :key="item.path"
    >
      {{ item.name }}
      <span :class="{ hide: !item.closable }" class="close" @click.stop="handleClose(item, index)"
        >x</span
      >
      <span @click.stop="closeLeft(item, index)">x左</span>
      <span @click.stop="closeRight(item, index)">x右</span>
      <span @click.stop="closeSelf(item, index)">清空</span>
    </div>
  </div>
</template>

<script setup>
import { useTags } from '@/stores/tag'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const store = useTags()
const { removeTag, removeLeft, removeRight, removeOther } = store

const handleClick = (tag) => {
  router.push(tag.path)
}
const isActive = (path) => {
  return path === route.path
}
const handleClose = (item, index) => {
  const isCurrent = item.path === route.path
  const nextTag = store.tagsList[index - 1] || store.tagsList[index + 1] || store.tagsList[0]
  removeTag(item.path)
  removeCache(item.name)
  if (!isCurrent) return
  router.push(nextTag ? nextTag.path : '/home')
}
const closeLeft = (item, index) => {
  removeLeft(item.path)
  router.push(item.path)
}

const closeRight = (item, index) => {
  removeRight(item.path)
  router.push(item.path)
}

const closeSelf = (item, index) => {
  removeOther(item.path)
  if (!store.tagsList.some((i) => i.path === route.path)) {
    router.push(item.path)
  }
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
    span {
      margin: 0 5px;
    }
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
