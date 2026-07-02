import { ElLoading } from 'element-plus'
let loadingInstance: any
export const showLoading = () => {
  loadingInstance = ElLoading.service({
    fullscreen: true,
    text: '加载中...',
  })
}

export const hideLoading = () => {
  loadingInstance?.close()
}
