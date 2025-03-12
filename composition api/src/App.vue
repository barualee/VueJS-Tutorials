<template>
  <div>{{ msg }}</div>
  <button @click="increment">{{ count }}</button>
  <!-- <button @click="increase('a')">{{ numbers.a }}</button>
  <button @click="increase('b')">{{ numbers.b }}</button> -->
  <button @click="a++">{{ a }}</button>
  <button @click="b++">{{ b }}</button>
  <input v-model="msg"/>
  <p>{{ total }}</p>
  <div v-for="number in hist" :key="number">
    {{ number }}
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { useNumbers } from './useNumbers';
  // import { reactive, watchEffect } from 'vue';
  export default {
    setup() {
      //used for primitive data types
      const msg = ref('Helo world')
      //used for objects and custom data types; 
      const count = ref(1)

      const {
        a,b,hist, total
      } = useNumbers()
      
      //reactive only support object; array not supported
      // const numbers = reactive({
      //   a:0,
      //   b:0,
      // })

      // const increment = () => {
      //   console.log(count)
      //   count.value++
      // }

      // watch(numbers, (newVal) => {
      //   console.log(`a: ${newVal.a} b: ${newVal.b}`)},
      //   {immediate:true}
      // )
        //useful when there is changes in the page and need to re render stuff; route params.
        //immediate allow first time rendering
      // watch(count, (newVal) => {
      //   console.log(newVal)},
      //   {immediate:true}
      // )
        //watch n watch effect are similar, watch is specific, need to give what to watch
        //watcheffect is more general
      // watchEffect(() => {
      //   console.log(numbers.a)
      // })

      //watch can be used to get current change value and old value;
      //but the const cant be reactive, they should be ref type



      // const increase = (n) => {
      //   numbers[n]++;
      // }

      // const total = computed(() => {
      //   return count.value + numbers.a + numbers.b;
      // })

      return {
        msg,
        count,
        a,
        b,
        // numbers,
        total,
        hist,
        // increment,
        // increase
      }
    }
  }
</script>

<style scoped>
button {
  height: 200px;
  width: 200px;
  font-size: 50px;
}
p {
  font-size: 40px;
}
</style>