<template>
  <form @submit.prevent="submit">
    <my-inputs 
      name="Username"
      :rules="{required: true, min: 5}"
      :value="username.value" 
      :error="username.error"
      @update="update"
    />
    <my-inputs 
      name="Password"
      :rules="{required: true, min: 15}"
      :value="password.value" 
      :error="password.error" 
      type="password" 
      @update="update"
    />
    <!-- kebab case -->
    <my-button 
      color = "white"
      background = "darkblue"
      :disabled = "valid"  
    /> 
    <!-- : is used to bind -->
  </form>
</template>

<script>
  import MyButton from './components/MyButton.vue';
  import MyInputs from './components/MyInputs.vue';
  
  export default{
    components: {
      MyButton,
      MyInputs
    },
    data() {
      return {
        username: {
          value: 'user',
          error: ''
        },
        password: {
          value: 'pass',
          error: ''
        }
      }
    },
    methods: {
      update({name, value, error}){
        this[name].value = value;
        this[name].error = error;
      },
      submit() {
        // $event.preventDefault();
        console.log('Event')
      }
    },
    computed: {
      valid() {
        return (
          !this.username.error &&
          !this.password.error
        )
      }
    }
  }
</script>

<style scoped></style>