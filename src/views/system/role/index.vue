<template>
  <div>
    角色管理
    <button v-permission="'role:add'">新增</button>
    <button v-permission="'role:edit'">编辑</button>
    <button v-permission="'role:delete'">删除</button>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'

onMounted(() => {
  console.log('角色管理onMounted')
})
onUnmounted(() => {
  console.log('角色管理onUnmounted')
})
onActivated(() => {
  console.log('角色管理onActivated')
})
onDeactivated(() => {
  console.log('角色管理onDeactivated')
})
defineOptions({ name: '角色管理' })
</script>

<style></style>
