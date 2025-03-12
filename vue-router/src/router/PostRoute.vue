<template>
    <h3>{{ post.title }}</h3>
    <p>{{ post.content }}</p>
</template>
  
<script>
    import { testPosts } from '@/testPosts';
    import { useRoute } from 'vue-router';
    import { computed } from 'vue';
    
    export default{setup() {
        const route = useRoute()
        const post = computed(() => testPosts.find(x => x.id === parseInt(route.params.id, 10)))
        return {post}
    }}
</script>