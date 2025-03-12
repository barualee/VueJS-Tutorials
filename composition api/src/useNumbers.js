import { ref, watch, computed } from 'vue';

export function useNumbers() {
    const a = ref(0)
    const b = ref(0)
    const hist = ref([])
    
    watch([a,b], ([newA, newB], [oldA, oldB]) => {
        if(newA !== oldA){
          hist.value.push(`A: ${oldA} -> ${newA}`)
          // console.log(`${oldA} -> ${newA}`)
        }
        if(newB !== oldB){
          hist.value.push(`B: ${oldB} -> ${newB}`)
          // console.log(`${oldB} -> ${newB}`)
        }
    })
    
    const total = computed(() => {
        return a.value + b.value;
    })

    return {
        a,b,hist, total
    }
}
