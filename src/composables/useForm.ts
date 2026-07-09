import { ref } from 'vue'

interface UseFormOption<Row, Detail, Message> {
  detailApi?: (row: Row) => Promise<Detail>
  onDetail?: (detail: Detail) => void
  editApi?: (row: Row) => Promise<Message>
  addApi?: (row: Row) => Promise<Message>
  onSuccess?: (res?: Message) => void
  onFialed?: (error?: unknown) => void
}

export const useForm = <Row, Message, Detail = Row>(
  option: UseFormOption<Row, Detail, Message>,
) => {
  const { detailApi, onDetail, editApi, addApi, onSuccess, onFialed } = option
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
  const confirm = async (row: Row) => {
    try {
      let res
      if (mode.value === 'add') {
        if (!addApi) return
        res = await addApi(row)
      } else {
        if (!editApi) return
        res = await editApi(row)
      }
      onSuccess?.(res)
    } catch (err) {
      onFialed?.(err)
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
    confirm,
  }
}
