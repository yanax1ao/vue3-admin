import { ref, onMounted } from 'vue'
import type { ApiResponse, PageResult } from '@/types/api'

export interface UseTableOptions<Query, Row> {
  api: (query: Query) => Promise<ApiResponse<PageResult<Row>>>
  query: Query
  immediate?: boolean
}

export const useTable = <Query, Row>(options: UseTableOptions<Query, Row>) => {
  const { api, query, immediate = true } = options
  const loading = ref(false)
  const tableData = ref<Row[]>([])
  const total = ref(0)
  const getList = async () => {
    try {
      loading.value = true
      const res = await api(query)
      tableData.value = res.data.list
      total.value = res.data.total
    } finally {
      loading.value = false
    }
  }
  if (immediate) {
    onMounted(getList)
  }
  return {
    loading,
    tableData,
    total,
    getList,
  }
}
