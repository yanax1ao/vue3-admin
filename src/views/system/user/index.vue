<template>
  <div>
    用户管理

    <!-- <button v-permission="'user:add'">新增</button>
    <button v-permission="'user:edit'">编辑</button> -->
    <button v-permission="'user:delete'">删除</button>
    <button v-permission="['user:add', 'user:edit']">操作</button>
    <button v-permission.and="['user:add', 'user:edit']">编辑和新增</button>
    <button v-permission.and="['user:delete', 'user:edit']">删除和编辑</button>
    <input v-focus type="text" />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'

onMounted(() => {
  console.log('用户管理onMounted')
})
onUnmounted(() => {
  console.log('用户管理onUnmounted')
})
onActivated(() => {
  console.log('用户管理onActivated')
})
onDeactivated(() => {
  console.log('用户管理onDeactivated')
})
defineOptions({ name: '用户管理' })
</script>

<style></style>
