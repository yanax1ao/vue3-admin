<template>
  <el-menu router :default-active="router.path">
    <MenuItem v-for="(item, index) in menus" :key="index" :menuItem="item"></MenuItem>
  </el-menu>
</template>

<script setup lang="ts">
import type { Menu } from '@/types/user'
import MenuItem from './MenuItem.vue'
import { useRoute } from 'vue-router'
const router = useRoute()
defineProps<{
  menus: Menu[]
  // defaultActive?: string
}>()
</script>
