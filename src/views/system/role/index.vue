<template>
  <div>
    角色管理
    <button v-permission="'role:add'" @click="openAdd">新增</button>
    <button v-permission="'role:edit'">编辑</button>
    <button v-permission="'role:delete'">删除</button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="id" label="id" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="tel" label="tel" width="120" />
      <el-table-column prop="age" label="age" width="120" />
      <el-table-column fixed="right" label="Operations" min-width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="handleEdit(scope.row)">
            Edit
          </el-button>
          <el-button link type="primary" size="small" @click="handleAdd">Add</el-button>
        </template>
      </el-table-column>
    </el-table>
    <button @click="handleChangePage">{{ query.page }}</button>
    <el-dialog v-model="visible" :title="mode === 'add' ? '新增信息' : '编辑信息'" width="500">
      <el-form :model="form">
        <el-form-item label="姓名">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.tel" autocomplete="off" /> </el-form-item
        ><el-form-item label="年龄">
          <el-input v-model="form.age" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="close">Cancel</el-button>
          <el-button type="primary" @click="handleConfirm"> Confirm </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, onUnmounted, onActivated, onDeactivated, reactive } from 'vue'
import { useForm } from '@/composables/useForm'
import type { Role, RoleQuery, Detail, Message } from '@/types/role'
import { getRoleList, getRoleDetail, editRoleDetail, addRoleDetail } from '@/api/role'

import { useTable } from '@/composables/useTable'

const form = reactive<Role>({
  id: 0,
  name: '',
  tel: '',
  age: undefined,
})
const initForm: Role = {
  id: 0,
  name: '',
  tel: '',
  age: undefined,
}
const query = reactive<RoleQuery>({
  page: 1,
  pagesize: 10,
})

const { loading, tableData, total, getList } = useTable({
  api: getRoleList,
  query: query,
})
const handleChangePage = async () => {
  query.page++
  await getList()
}
const { visible, mode, currentRow, openAdd, openEdit, close, confirm } = useForm<
  Role,
  Message,
  Detail
>({
  detailApi: async (row) => {
    const res = await getRoleDetail(row.id)
    return res.data
  },
  onDetail(detail) {
    Object.assign(form, detail)
  },
  editApi: async (row) => {
    const res = await editRoleDetail(row)
    if (res.data.code !== 200) throw res.data
    return res.data
  },
  addApi: async (row) => {
    const res = await addRoleDetail(row)
    if (res.data.code !== 200) throw res.data
    return res.data
  },
  onSuccess: (res) => {
    console.log(res?.message)
    close()
    getList()
  },
  onFialed: (err) => {
    console.log('失败', err)
  },
})
const handleEdit = (row: Role) => {
  openEdit(row)
}
const handleAdd = () => {
  openAdd()
  Object.assign(form, initForm)
}
const handleConfirm = () => {
  confirm(form)
}

onMounted(() => {
  console.log('角色管理onMounted')
})
onUnmounted(() => {
  console.log('角色管理onUnmounted')
})
onActivated(() => {
  console.log('角色管理onActivated')
})
onDeactivated(() => {
  console.log('角色管理onDeactivated')
})
defineOptions({ name: '角色管理' })
</script>

<style></style>
