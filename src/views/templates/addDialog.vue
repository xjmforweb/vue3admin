<template>
  <el-dialog :title="titles[step]" v-model="show" :width="600">
    <step1 ref="formDom" :form="form" v-if="step === 0"></step1>
    <step2 v-if="step === 1"></step2>
    <step3 v-if="step === 3"></step3>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="next">下一步</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import {
  ref, reactive, watch, shallowReactive, computed,
} from 'vue'
import step1 from './step1.vue'
import step2 from './step2.vue'
import step3 from './step2.vue'

export default {
  name: 'templatesAddDialog',
  emits: ['update:modelValue'],
  props: ['modelValue'],
  components: { step1, step2, step3 },
  setup(props, { emit }) {
    const form = reactive({
      name: '',
      showName: '',
      note: '',
    })
    const formDom = ref(null)
    const step = ref(0)
    const titles = ref(['参数配置', '字段配置', '筛选配置', '权限配置'])

    const show = computed({
      get() {
        return props.modelValue
      },
      set(v) {
        emit('update:modelValue', v)
      },
    })

    const next = () => {
      if (step.value === 0) {
        formDom.value.formDom.validate((valid) => {
          if (valid) {
            console.log(111)
            step.value++
          }
        })
      }
    }

    return {
      show,
      form,
      formDom,
      titles,
      step,
      next,
    }
  },
}
</script>

<style lang="scss">
</style>
