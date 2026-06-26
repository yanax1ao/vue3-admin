<template>
  <div>
    用户管理

    <button v-permission="'user:add'">新增</button>
    <button v-permission="'user:edit'">编辑</button>
    <button v-permission="'user:delete'">删除</button>
    <button v-permission="['user:add', 'user:edit']">操作</button>
  </div>
</template>

<script setup></script>

<style></style>
