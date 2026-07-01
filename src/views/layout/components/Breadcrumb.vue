<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in breadcrumbs" :key="item.path">{{
      item.meta.title
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log('route', route)
const Home = {
  path: '/home',
  meta: {
    title: '首页',
  },
}
const breadcrumbs = computed(() => {
  const matched = route.matched.filter((item) => item.meta.title)
  if (matched.length === 1) {
    return matched
  } else {
    return [Home, ...route.matched.filter((item) => item.meta.title)]
  }
})
</script>
