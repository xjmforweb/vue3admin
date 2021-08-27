<template>
  <div>
    <div class="add">
      <el-button @click="addNew">新建模板</el-button>
    </div>
    <BaseTable :props="props" :action="action"></BaseTable>
    <addDialog v-model="dialogShow"></addDialog>
  </div>
</template>

<script>
import { ref } from 'vue'
import BaseTable from '../../components/BaseTable.vue'
import { fetchData } from '../../api/index'
import addDialog from './addDialog.vue'

export default {
  name: 'templates',
  components: { BaseTable, addDialog },
  setup() {
    const action = fetchData
    const props = ref([
      {
        label: 'test',
        prop: 'name',
      },
      {
        label: 'test2',
        prop: 'state',
      },
      {
        label: 'test3',
        prop: 'id',
      },
    ])
    const dialogShow = ref(false)

    const addNew = () => {
      dialogShow.value = true
    }

    return {
      addNew,
      action,
      props,
      dialogShow,
    }
  },
}
</script>

<style lang="scss">
.add {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
</style>
