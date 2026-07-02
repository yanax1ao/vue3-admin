<template>
  <div>配置管理</div>
</template>

<script setup>
import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'

onMounted(() => {
  console.log('配置管理onMounted')
})
onUnmounted(() => {
  console.log('配置管理onUnmounted')
})
onActivated(() => {
  console.log('配置管理onActivated')
})
onDeactivated(() => {
  console.log('配置管理onDeactivated')
})
defineOptions({ name: '配置管理' })
</script>

<style></style>
