<template>
  <div>主题管理</div>
</template>

<script setup>
import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'

onMounted(() => {
  console.log('主题管理onMounted')
})
onUnmounted(() => {
  console.log('主题管理onUnmounted')
})
onActivated(() => {
  console.log('主题管理onActivated')
})
onDeactivated(() => {
  console.log('主题管理onDeactivated')
})
defineOptions({ name: '主题管理' })
</script>

<style></style>
