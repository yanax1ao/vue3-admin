import type { App } from 'vue'
import { permission } from './permission'
import { focus } from './focus'

export const setupDirective = (app: App) => {
  app.directive('permission', permission)
  app.directive('focus', focus)
}
