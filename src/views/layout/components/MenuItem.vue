<template>
  <el-sub-menu :index="menuItem.path" v-if="menuItem.children?.length">
    <template #title>{{ menuItem.name }}</template>
    <MenuItem v-for="child in menuItem.children" :key="child.path" :menuItem="child"></MenuItem>
  </el-sub-menu>
  <el-menu-item :index="menuItem.path" v-else
    ><template #title>{{ menuItem.name }}</template></el-menu-item
  >
</template>
<script setup lang="ts">
import type { Menu } from '@/types/user'
import MenuItem from './MenuItem.vue'

defineProps<{
  menuItem: Menu
}>()
defineOptions({ name: 'MenuItem' })
</script>
