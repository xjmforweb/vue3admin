<template>
  <div>
    <div class="add">
      <el-button @click="add">新增字段</el-button>
    </div>
    <el-table :data="data" style="width:100%;">
      <el-table-column label="字段名称" prop="name"></el-table-column>
      <el-table-column label="字段显示名" prop="name1"></el-table-column>
      <el-table-column label="数据类型" prop="name2"></el-table-column>
      <el-table-column label="是否必填" prop="name3"></el-table-column>
      <el-table-column label="是否唯一" prop="name4"></el-table-column>
      <el-table-column label="备注" prop="name5"></el-table-column>
      <el-table-column label="删除" prop="name6"></el-table-column>
      <el-table-column label="顺序" prop="name7"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { ref, reactive, shallowReactive } from 'vue'

export default {
  name: 'templatesAddDialog1',
  props: ['form'],
  setup(props, { emit }) {
    const data = ref([])

    const add = () => {
      data.value.push({})
    }

    return {
      data,
      add,
    }
  },
}
</script>

<style lang="scss">
</style>
