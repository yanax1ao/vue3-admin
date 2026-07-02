<template>
  <div>你好，欢迎来到后台管理系统</div>
</template>

<script setup>
import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'

onMounted(() => {
  console.log('首页onMounted')
})
onUnmounted(() => {
  console.log('首页onUnmounted')
})
onActivated(() => {
  console.log('首页onActivated')
})
onDeactivated(() => {
  console.log('首页onDeactivated')
})
defineOptions({ name: '首页' })
// 没有被缓存 因为没在router-view里面 后续可以改变一下数据结构 放在router-view里面
</script>

<style></style>
