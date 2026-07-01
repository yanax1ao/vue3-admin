<template>
  <div class="wrapper">
    <Header />
    <div class="main">
      <div class="left">
        <button @click="handleLogout">退出登录</button>
        <SidebarMenu :menus="accessMenus" />
      </div>
      <div class="right">
        <div v-if="routes.path === '/home'">你好，欢迎来到后台管理系统</div>
        <AppMain />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarMenu from './components/Sidebar.vue'
import { useUserStore } from '@/stores/user.ts'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import AppMain from './components/AppMain.vue'
import { filterMenus } from '@/utils/route'
import Header from './components/Header.vue'

const routes = useRoute()
const router = useRouter()

const { menus, permissions, logout } = useUserStore()
const accessMenus = filterMenus(menus)
const handleLogout = () => {
  logout()
  router.push('/login')
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 800px;
  padding: 20px 60px;
  .main {
    display: flex;
  }
  .left {
    height: 100%;
    width: 160px;
    ul {
      height: 100%;
    }
    button {
      margin-bottom: 10px;
    }
  }
  .right {
    padding: 40px 80px;
  }
}
</style>
