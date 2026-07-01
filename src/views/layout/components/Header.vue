<template>
  <div class="header">
    后台管理系统
    <Breadcrumb />
  </div>
</template>
<script setup>
import Breadcrumb from './Breadcrumb.vue'
</script>
<style lang="scss" scoped>
.header {
  background: skyblue;
  margin: 0 0 20px;
  padding: 20px 10px;
  display: flex;
  gap: 20px;
  align-items: center;
}
</style>
