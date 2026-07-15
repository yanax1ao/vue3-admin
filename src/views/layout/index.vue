<template>
  <div class="wrapper">
    <Header />
    <TagView />
    <div class="main">
      <div class="left">
        <button @click="handleLogout">退出登录</button>
        <SidebarMenu :menus="accessMenus" />
      </div>
      <div class="right">
        <div v-if="route.path === '/home'">
          <Home />
        </div>
        <AppMain />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import SidebarMenu from './components/Sidebar.vue'
import { useUserStore } from '@/stores/user.ts'
import { useRoute, useRouter } from 'vue-router'
import AppMain from './components/AppMain.vue'
import { filterMenus } from '@/utils/route'
import Header from './components/Header.vue'
import TagView from './components/TagView.vue'
import Home from '@/views/system/home/index.vue'
import { useTags } from '@/stores/tag'

const route = useRoute()
const { addTag, addCache } = useTags()
const router = useRouter()

const { menus, permissions, logout } = useUserStore()
const accessMenus = filterMenus(menus, permissions)
const handleLogout = () => {
  logout()
  router.push('/login')
}
watch(
  () => route.fullPath,
  () => {
    const curTag = {
      title: route.meta.title as string,
      name: route.name as string,
      path: route.path,
      closable: route.path !== '/home',
      keepAlive: true,
    }
    addTag(curTag)
    addCache(curTag.name)
  },
  { immediate: true },
)
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
