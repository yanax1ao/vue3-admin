<template>
  <div>
    用户管理

    <button v-if="hasPermission('user:add')">新增</button>
    <button v-if="hasPermission('user:edit')">编辑</button>
    <button v-if="hasPermission('user:delete')">删除</button>
  </div>
</template>

<script setup>
import { hasPermission } from '@/utils/auth'
</script>

<style></style>
