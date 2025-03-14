<template>
  <!-- <h1>{{ store.state.count }}</h1>
  <button @click="increment">Increase Counter</button> -->
  <button 
    v-for="post in posts"
    :key="post.id"
    @click="click(post)"
    >
    {{ post.title }} post
  </button>
  <!-- {{ postId }} -->

  <div v-if="currentPost">
    <h3>{{ currentPost.title }}</h3>
    <br/>
    <p>{{ currentPost.content }}</p>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('posts/fetch')
    },
    computed: {
      posts() {
        return this.$store.state.posts.data
      },

      currentPost() {
        return this.$store.getters['posts/currentPost']
      }
    },
    methods: {
      click(post) {
        this.$store.commit('posts/setPostId', post.id)
      }
    }
  }
</script>
