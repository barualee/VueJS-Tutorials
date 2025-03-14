<template>
    <h3>{{ post.title }}</h3>
    <p>{{ post.content }}</p>
</template>
  
<script>
    import { usePosts } from '@/usePosts.js';
    import { useRoute } from 'vue-router';
    import { computed } from 'vue';
    
    export default{setup() {
        const route = useRoute()
        const postStore = usePosts()
        const post = computed(() => postStore.posts.value.find(x => x.id === parseInt(route.params.id, 10)))
        return {post}
    }}
</script>