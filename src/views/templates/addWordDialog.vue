<template>
  <el-dialog title="新增字段" v-model="show" :width="600">
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
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="next">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import {
  ref, reactive, watch, shallowReactive, computed,
} from 'vue'

export default {
  name: 'addWordDialog',
  emits: ['update:modelValue'],
  props: ['modelValue'],
  setup(props, { emit }) {
    const form = reactive({
      name: '',
      showName: '',
      note: '',
    })
    const formDom = ref(null)
    const rules = shallowReactive({
      name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
      showName: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
    })

    const show = computed({
      get() {
        return props.modelValue
      },
      set(v) {
        emit('update:modelValue', v)
      },
    })

    const next = () => {
      formDom.value.formDom.validate((valid) => {
        if (valid) {
          console.log(222)
        }
      })
    }

    return {
      show,
      form,
      rules,
      formDom,
      next,
    }
  },
}
</script>

<style lang="scss">
</style>
