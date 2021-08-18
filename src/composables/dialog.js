import { ref, watch } from 'vue'

export default function useDialog(props) {
    let show = ref(false)
    watch(show, val => {
        emit('input', val)
    })
    watch(props.value, val => {
        show.value = value
    })
    return {
        show,
    }
}