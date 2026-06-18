<template>
  <div>
    用户管理
    <p>我的按钮权限</p>
    <button v-if="permission.includes('user:add')">新增</button>
    <button v-if="permission.includes('user:edit')">编辑</button>
    <button v-if="permission.includes('user:del')">删除</button>
  </div>
</template>

<script setup>
const permission = localStorage.getItem('permission')
</script>

<style></style>
