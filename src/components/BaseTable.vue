<template>
  <div ref="table" v-loading="loading">
    <el-table
        :data="tableData"
        border
        style="width: 100%;"
        header-row-class-name="header-row"
        @selection-change="handleSelectionChange"
        @sort-change="handleSortChange">
      <el-table-column v-if="isShowSelection" type="selection" width="55" align="center"></el-table-column>
      <el-table-column align="center" label="序号" v-if="isShowSerialNumber">
        <template #default="scope">
          <span>{{scope.$index+(current-1)*size+1}}</span>
        </template>
      </el-table-column>
      <template v-for="k in props" :key="k.prop">
        <el-table-column #default="scope" align="center" :prop="k.prop" :label="k.label" :sortable="sort.includes(k.prop) ? 'custom' : false">
          <slot :name="k.prop" :data="scope.row">{{scope.row[k.prop]}}</slot>
        </el-table-column>
      </template>
      <el-table-column #default="scope" align="center" label="操作" v-if="isShowOperation">
        <slot name="operation" :data="scope.row"></slot>
      </el-table-column>
    </el-table>
    <div class="pagination" v-if="isShowPagination">
      <el-pagination
          @current-change="handleCurrentChange"
          :page-size="size"
          v-model:current-page="current"
          layout="prev, pager, next, jumper, total"
          :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import {
  ref, reactive, defineComponent, onMounted,
} from 'vue'

export default defineComponent({
  name: 'basetable',
  props: {
    isShowSelection: {
      type: Boolean,
      default: false,
    },
    immediate: {
      type: Boolean,
      default: true,
    },
    isShowSerialNumber: {
      type: Boolean,
      default: true,
    },
    isShowOperation: {
      type: Boolean,
      default: true,
    },
    isShowPagination: {
      type: Boolean,
      default: true,
    },
    callback: Function,
    sort: {
      type: Array,
      default: () => [],
    },
    query: {
      type: Object,
      default: {},
    },
    props: Array,
    action: Function,
  },
  emits: ['sortChange', 'selectionChange'],
  setup(props, { emit }) {
    const loading = ref(false)
    const tableData = ref([])
    const total = ref(0)
    const size = ref(10)
    const current = ref(1)
    const table = ref(null)

    const search = (i, isScroll) => {
      current.value = i > 0 ? i : current.value
      const query = JSON.parse(JSON.stringify(props.query))
      for (const key in query) {
        if (Array.isArray(query[key])) {
          query[key] = query[key].toString()
        }
      }
      const req = {
        pageNum: current.value,
        pageSize: size.value,
        ...query,
      }
      props.action(req).then((r) => {
        props.callback && props.callback(r) // 如果要对返回值做额外操作
        tableData.value = r.list
        total.value = r.pageTotal
        isScroll && table.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
    const handleCurrentChange = (index) => {
      search(index, true)
    }
    const handleSortChange = (val) => {
      emit('sortChange', val)
    }
    const handleSelectionChange = (val) => {
      emit('selectionChange', val)
    }

    onMounted(() => {
      props.immediate && search()
    })

    return {
      table,
      loading,
      tableData,
      total,
      size,
      current,
      search,
      handleCurrentChange,
      handleSortChange,
      handleSelectionChange,
    }
  },
})
</script>
<style lang="scss">
.pagination{
  text-align: center;
  margin-top: 20px;
}
.header-row{
}
</style>
