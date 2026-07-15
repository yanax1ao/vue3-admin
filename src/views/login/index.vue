<template>
  <div>
    <p v-if="token">用户名：{{ userInfo.name }}</p>
    <p>是否登录：{{ token ? '已登录' : '未登录' }}</p>
    <div v-if="!token">
      用户名：<input v-model="username" type="text" /> 密码：<input
        v-model="password"
        type="text"
      />
      <button @click="handleLogin">login</button>
    </div>
    <button v-else @click="handleLogout">退出</button>

    <div v-if="token">
      <button @click="goHome">去首页</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()
// state/getters 必须用 storeToRefs
const { userInfo, token } = storeToRefs(userStore)
// actions 可直接解构
const { login, logout, loadUserInfo } = userStore

const username = ref('')
const password = ref('')

const handleLogin = async () => {
  await login(username.value, password.value)
  await loadUserInfo()
  router.push('/home')
}
const handleLogout = () => {
  logout()
  username.value = ''
  password.value = ''
}
const goHome = () => {
  router.push('/home')
}
onMounted(() => {
  console.log('989898', userInfo, token)
})
</script>

<style></style>
