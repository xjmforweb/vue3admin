<template>
  <div>
    <div class="add">
      <el-button @click="addNew">新建账户</el-button>
    </div>
    <BaseTable :props="props" :action="action">
      <template #action="scope">
        <el-button @click="addNew" size="mini">修改</el-button>
      </template>
    </BaseTable>
    <addDialog v-model="dialogShow"></addDialog>
  </div>
</template>

<script>
import { ref } from 'vue'
import BaseTable from '../../components/BaseTable.vue'
import { fetchData } from '../../api/index'
import addDialog from './addDialog.vue'

export default {
  name: 'user',
  components: { BaseTable, addDialog },
  setup() {
    const action = fetchData
    const props = ref([
      {
        label: '用户名',
        prop: 'name',
      },
      {
        label: '登录名',
        prop: 'state',
      },
      {
        label: '所属角色',
        prop: 'id',
      },
      {
        label: '备注',
        prop: 'id2',
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
