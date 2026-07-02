<template>
  <router-view v-slot="{ Component }">
    <KeepAlive :include="cacheList">
      <component :is="Component" />
    </KeepAlive>
  </router-view>
</template>

<script setup>
import { useTags } from '@/stores/tag'
import { storeToRefs } from 'pinia'

const store = useTags()
const { cacheList } = storeToRefs(store)
</script>
