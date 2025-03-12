<template>
  <h1>Hello {{ msg }}</h1>

  <!-- <input v-bind:value="value"
    v-on:input="input"  
  /> -->
  <!-- v-model does two things together, v-bind and v-on; its also extensible to other actions -->
  <input v-model="value"/>
  <div class="red">
    <p>{{ error }}</p>
  </div>


  <br/>
  <br/>
  
  <button v-on:click="increment()"> Increment </button>
  <p>{{ counter }}</p>
  <div v-bind:class=getClass(counter)>
    <div v-if="isEven(counter)">
      <p>Even No.</p>
    </div>
    <div v-else>
      <p>Odd No.</p>
    </div>
  </div>

  
  <div v-for="num in no" v-bind:key="num" v-bind:class=getClass(num)>
    <div>{{ num }}</div>
  </div>

  <h2> Computed function results </h2>

  <div v-for="num in evenList" v-bind:key="num">
    <div>{{ num }}</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  //data objects
  data() {
    return {
      msg: 'World!',
      counter: 0,
      no: [1,2,3,4,5,6,7],
      value: "user",
    };
  },
  //methods defined
  methods: {
    // input($event){
    //   this.value = $event.target.value;
    // },
    increment(val) {
      this.counter = isNaN(val) ?  this.counter+1: this.counter+val;
    },
    isEven(val) {
      return val%2==0;
    },
    getClass(val) {
      return this.isEven(val) ? 'blue': 'red';
    }
  },
  //business logic functions, it doesnt have arguments
  computed: {
    evenList() {
      return this.no.filter(num => this.isEven(num));
    },
    error() {
      return this.value.length < 5 ? "Must be greater than 5 chars": "";
    }
  }
}
</script>

<style src="./assets/styles.css"></style> <!-- Import CSS file -->