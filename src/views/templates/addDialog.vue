<template>
  <el-dialog :title="titles[step]" v-model="show" :width="600">
    <step1 ref="formDom" :form="form" v-if="step === 0"></step1>
    <step2></step2>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="next">下一步</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { ref, reactive, watch, shallowReactive, computed } from 'vue'
import step1 from './step1.vue'
import step2 from './step2.vue'

export default {
  name: 'templatesAddDialog',
  emits: ['update:modelValue'],
  props: ['modelValue'],
  components: {step1, step2},
  setup (props, { emit }) {
    let form = reactive({
      name: '',
      showName: '',
      note: '',
    })
    let formDom = ref(null)
    let step = ref(0)
    let titles = ref(['参数配置', '字段配置', '筛选配置', '权限配置'])

    let show = computed({
      get() {
        return props.modelValue;
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
  }
};
</script>

<style lang="scss">
</style>