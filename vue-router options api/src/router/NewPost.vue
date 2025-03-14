<template>
    <div>New Post</div>
    <form @submit.prevent="submit">
        <input v-model="newPost.title"
            placeholder="title"
        />
        <br/>
        <textarea 
        cols="50"
        rows="10"
        v-model="newPost.content"
        />
        <button>Submit</button>
    </form>
</template>
  
<script>

    export default{
        data() {
            return {
                newPost: {
                    title: '',
                    content: '',
                }
            }
        },
        methods: {
            submit() {
                this.$emit('createPost', {
                    title: this.newPost.title,
                    content: this.newPost.content
                })
            }
        }
    }
</script>