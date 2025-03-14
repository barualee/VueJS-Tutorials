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
    import { reactive } from 'vue';
    import { usePosts } from '@/usePosts';
    import { useRouter } from 'vue-router';

    export default{
        setup() {

            const postStore = usePosts()
            const router = useRouter()
            const newPost = reactive({
                title: '',
                content: '',
            })
            const submit = () => {
                const id = postStore.posts.value.length + 1
                postStore.addPost({
                    // id: id,
                    id, //shorthand
                    title: newPost.title,
                    content: newPost.content
                })
                router.push(`/posts/${id}`)
            }
            return {
                newPost,
                submit
            }
    }}
</script>