import type { Directive } from 'vue'

export const focus: Directive = {
  mounted(el, binding) {
    el.focus()
  },
}
