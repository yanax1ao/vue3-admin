<template>
  <div class="wrapper">
    <div class="left">
      <SidebarMenu :menus="accessMenus" />
    </div>
    <div class="right">
      <div v-if="routes.path === '/home'">你好，欢迎来到后台管理系统</div>
      <AppMain />
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarMenu from './components/Sidebar.vue'
import { userUserStore } from '@/stores/user.ts'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import AppMain from './components/AppMain.vue'
import { filterMenus } from '@/utils/route'

const routes = useRoute()

const { menus, permissions } = userUserStore()
const accessMenus = filterMenus(menus, permissions)
</script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  height: 800px;
  padding: 20px 60px;
  .left {
    height: 100%;
    width: 160px;
    ul {
      height: 100%;
    }
  }
  .right {
    padding: 20px 80px;
  }
}
</style>
