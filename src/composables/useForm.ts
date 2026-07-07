import { ref } from 'vue'
import type { ApiResponse } from '@/types/api'

interface UseFormOption<Row> {
  detailApi?: (row: Row) => Promise<ApiResponse<Row>>
  onDetail?: (detail: Row) => void
}
interface BaseRow {
  id: number
}

export const useForm = <Row>(option: UseFormOption<Row>) => {
  const { detailApi, onDetail } = option
  const visible = ref(false)
  const mode = ref<'add' | 'edit'>('add')
  const currentRow = ref<Row>()
  const loading = ref(false)
  const openAdd = () => {
    visible.value = true
    mode.value = 'add'
    currentRow.value = undefined
  }
  const openEdit = async (row: Row) => {
    visible.value = true
    currentRow.value = row
    mode.value = 'edit'

    if (!detailApi) return
    loading.value = true
    try {
      const detail = await detailApi(row)
      console.log('?', detail)

      onDetail?.(detail.data)
    } finally {
      loading.value = false
    }
    loading.value = false
  }
  const close = () => {
    visible.value = false
  }
  return {
    visible,
    mode,
    currentRow,
    openAdd,
    openEdit,
    close,
  }
}
