import { ref } from 'vue'

interface UseFormOption<Row, Detail> {
  detailApi?: (row: Row) => Promise<Detail>
  onDetail?: (detail: Detail) => void
}

export const useForm = <Row, Detail = Row>(option: UseFormOption<Row, Detail>) => {
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
      onDetail?.(detail)
    } finally {
      loading.value = false
    }
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
