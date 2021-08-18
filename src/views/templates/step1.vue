<template>
  <el-form label-width="100px" :rules="rules" ref="formDom" :model="form">
    <el-form-item label="模板名称" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="模板显示名" prop="showName">
      <el-input v-model="form.showName"></el-input>
    </el-form-item>
    <el-form-item label="备注" prop="note">
      <el-input type="textarea" v-model="form.note"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import { ref, reactive, shallowReactive } from 'vue'

export default {
  name: 'templatesAddDialog1',
  props: ['form'],
  setup (props, { emit }) {
    let formDom = ref(null)
    const rules = shallowReactive({
      name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
      showName: [{ required: true, message: '请输入活动名称', trigger: 'blur' }]
    })

    return {
      rules,
      formDom,
    }
  }
};
</script>

<style lang="scss">
</style>