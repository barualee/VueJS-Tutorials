<template>
    <router-link to="/posts/new">New Post</router-link>
    <br />
    <h3>Posts Route</h3>
    <ul>
        <li
        v-for="post in posts"
        :key="post.id">
            <router-link
            :to="`/posts/${post.id}`">
                {{ post.title }}
            </router-link>
        </li>
    </ul>

    <Router-view />
</template>
  
<script>
    import { usePosts } from '@/usePosts.js';
    export default{
        setup() {
            const postStore = usePosts()
            return {
                posts : postStore.posts
            }
        }
    }
</script>