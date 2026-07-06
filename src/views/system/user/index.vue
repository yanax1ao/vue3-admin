<template>
  <div>
    用户管理

    <!-- <button v-permission="'user:add'">新增</button>
    <button v-permission="'user:edit'">编辑</button> -->
    <button v-permission="'user:delete'">删除</button>
    <button @click="handleClick" v-permission="['user:add', 'user:edit']">操作</button>
    <button v-permission.and="['user:add', 'user:edit']">编辑和新增</button>
    <button v-permission.and="['user:delete', 'user:edit']">删除和编辑</button>
    <input v-focus type="text" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, onActivated, onDeactivated, reactive, ref } from 'vue'
import { getUserList } from '@/api/user'
import type { UserQuery, UserItem } from '@/types/user'
import { useTable } from '@/composables/useTable'

const query = reactive<UserQuery>({
  page: 1,
  pagesize: 10,
  username: '',
  phone: '',
  status: undefined,
})

const { loading, tableData, total, getList } = useTable({
  api: getUserList,
  query: query,
  immediate: false,
})

const handleClick = async () => {
  console.log('发送请求')
  await getList()
  console.log('tableData', tableData.value)
}

// const total = ref(0)

// const loading = ref(false)

// const tableList = ref<User[]>([])

// const getTableList = async () => {
//   loading.value = true
//   try {
//     const res = await getUserList()
//     console.log(res, 'res')
//   } finally {
//     loading.value = true
//   }
// }

// onMounted(() => {
//   console.log('用户管理onMounted')
//   getTableList()
// })

onUnmounted(() => {
  console.log('用户管理onUnmounted')
})
onActivated(() => {
  console.log('用户管理onActivated')
})
onDeactivated(() => {
  console.log('用户管理onDeactivated')
})
defineOptions({ name: '用户管理' })
</script>

<style></style>
