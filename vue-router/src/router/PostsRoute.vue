<template>
    <div>Posts Route</div>
    <ul>
        <li
        v-for="post in testPosts"
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
    import { testPosts } from '@/testPosts';
    export default{
        setup() {
            return {
                testPosts
            }
        }
    }
</script>