import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { filterMenus, generateRoutes } from '@/utils/route'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const menus = JSON.parse(localStorage.getItem('menus') || '{}')
const permissions = JSON.parse(localStorage.getItem('permission') || '{}')

import App from './App.vue'
import router from './router'

if (menus.length) {
  const accsessRoutes = filterMenus(menus, permissions)
  const routes = generateRoutes(accsessRoutes)
  routes.forEach((item) => router.addRoute(item))
}

const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
