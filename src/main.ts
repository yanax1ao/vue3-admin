import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { setupDirective } from '@/directives/index.ts'

const menus = JSON.parse(localStorage.getItem('menus') || '{}')
const permissions = JSON.parse(localStorage.getItem('permission') || '{}')

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
setupDirective(app)
app.mount('#app')
