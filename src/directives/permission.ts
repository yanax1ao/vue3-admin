import type { Directive, DirectiveBinding } from 'vue'
import { hasPermission as hasPms } from '@/utils/auth'

export const permission: Directive = {
  mounted(el, binding: DirectiveBinding<string | string[]>) {
    const hasPermission = hasPms(binding.value)
    if (!hasPermission) {
      el.remove()
    }
  },
}
