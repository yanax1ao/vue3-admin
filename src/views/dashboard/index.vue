<template>
  <div>
    我是首页
    <p>我的菜单:</p>
    <div v-for="(item, index) in menu" :key="index">
      <p @click="handleJump(item.link)" v-show="permission.includes(item.permission)">
        {{ item.name }}
      </p>
    </div>
  </div>
</template>

<script setup>
import router from '@/router'
import { userUserStore } from '@/stores/user'
const userStore = userUserStore()
const permission = userStore.permissions

const menu = [
  {
    name: '用户管理',
    permission: 'user:list',
    link: '/user',
  },
  {
    name: '角色管理',
    permission: 'role:list',
    link: '/role',
  },
]
const handleJump = (path) => {
  router.push(path)
}
</script>

<style></style>
