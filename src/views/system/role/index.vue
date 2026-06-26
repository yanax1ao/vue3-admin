<template>
  <div>
    角色管理
    <button v-if="hasPermission('role:add')">新增</button>
    <button v-if="hasPermission('role:edit')">编辑</button>
    <button v-if="hasPermission('role:delete')">删除</button>
  </div>
</template>

<script setup>
import { hasPermission } from '@/utils/auth'
</script>

<style></style>
