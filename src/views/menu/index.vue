<template>
  <div>
    <p>我的菜单:</p>
    <div v-for="(item, index) in menu" :key="index">{{ item.name }}</div>
  </div>
</template>

<script setup>
const menu = [
  {
    name: '用户管理',
  },
  {
    name: '角色管理',
  },
]
</script>

<style></style>
