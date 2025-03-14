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

    <Router-view :posts="posts"
        @createPost = "createPost"
    />
</template>
  
<script>
    import { testPosts } from '@/testPosts';
    export default{
        data() {
            return {
                posts: testPosts
            }
        },
        methods: {
            createPost(newPost){
                const id = this.posts.length + 1;
                this.posts.push({
                    id: id,
                    title: newPost.title,
                    content: newPost.content
                })
                //options api has $ sign for global variables
                this.$router.push(`/posts/${id}`)
            }
        }
    }
</script>