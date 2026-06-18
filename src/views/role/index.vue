<template>
  <div>
    角色管理
    <p>我的按钮权限</p>
    <button v-if="permission.includes('role:add')">新增</button>
    <button v-if="permission.includes('role:edit')">编辑</button>
    <button v-if="permission.includes('role:del')">删除</button>
  </div>
</template>

<script setup>
const permission = localStorage.getItem('permission')
</script>

<style></style>
