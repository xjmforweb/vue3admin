<template>
  <div>
    <div class="add">
      <el-button @click="add">新增筛选字段</el-button>
    </div>
    <el-table :data="data" style="width:100%;">
      <el-table-column label="筛选字段" prop="name"></el-table-column>
      <el-table-column label="筛选字段显示名" prop="name1"></el-table-column>
      <el-table-column label="筛选方式" prop="name2"></el-table-column>
      <el-table-column label="删除" prop="name3"></el-table-column>
      <el-table-column label="隐藏" prop="name4"></el-table-column>
      <el-table-column label="顺序" prop="name5"></el-table-column>
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
