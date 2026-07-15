import type { Directive, DirectiveBinding } from 'vue'
import { hasPermission as hasPms } from '@/utils/auth'
import { useUserStore } from '@/stores/user'

export const permission: Directive = {
  mounted(el, binding: DirectiveBinding<string | string[]>) {
    const userStore = useUserStore()
    const hasPermission = hasPms(
      binding.value,
      userStore.permissions,
      userStore.roles,
      binding.modifiers?.and,
    )
    if (!hasPermission) {
      el.remove()
    }
  },
}
