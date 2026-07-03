import axios from 'axios'
import { getToken } from './auth'
import { showLoading, hideLoading } from './loading'
import { ElMessage } from 'element-plus'
import type { ApiResponse } from '@/types/api'

let loadingCount = 0

/** 内部 axios 实例，负责拦截器逻辑 */
const service = axios.create({
  baseURL: '/api',
  timeout: 10000,
})

const closeLoading = () => {
  loadingCount--
  if (loadingCount === 0) {
    hideLoading()
  }
}

service.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers.Authrization = `Bearer ${token}`
  }
  loadingCount++
  if (loadingCount === 1) {
    showLoading()
  }
  console.log('请求开始')
  return config
})

service.interceptors.response.use(
  (res) => {
    console.log('响应成功')
    closeLoading()
    const data = res.data
    if (data.code === 200) {
      return data
    }
    ElMessage.error(data.message)
    return Promise.reject(data)
  },
  (err) => {
    closeLoading()
    return Promise.reject(err)
  },
)

const request = {
  get<T>(url: string, config?: Record<string, any>) {
    return service.get(url, config) as Promise<ApiResponse<T>>
  },
  post<T>(url: string, data?: any, config?: Record<string, any>) {
    return service.post(url, data, config) as Promise<ApiResponse<T>>
  },
}

export default request
