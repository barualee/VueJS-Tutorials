<template>
  <!-- <h1>{{ store.state.count }}</h1>
  <button @click="increment">Increase Counter</button> -->
  <button 
    v-for="post in posts"
    :key="post.id"
    @click="click(post)"
    >
    {{ post.title }} Post
  </button>
  {{ postId }}

  <div v-if="currentPost">
    <h3>{{ currentPost.title }}</h3>
    <br/>
    <p>{{ currentPost.content }}</p>
  </div>
</template>

<script>
  import { useStore } from 'vuex';
  import { computed, onMounted } from 'vue';

  export default {
    setup() {
      // const posts = [
      //   {id:1, title: "title 1"},
      //   {id:2, title: "title 2"},
      // ]
      const store = useStore()

      const click = (post) => {
        // store.commit('setPostId', post.id)
        store.commit('posts/setPostId', post.id)
      }

      const fetchData = () => {
        // store.dispatch('fetchPosts', 'POST')
        store.dispatch('posts/fetch')
        store.dispatch('fetchPosts')
      }

      // const currentPost = computed(() => {
      //   return store.state.posts.find(x => {
      //     return x.id === store.state.postId
      //   })
      // })

      onMounted(() => {
        fetchData()
      })
      // console.log(store) // see what options are in store, can be used for other variables as well
      // const increment = () => {
      //   // store.state.count+=1
      //   store.commit('increment', 10)
      // }
      
      return {
        store,
        // currentPost,
        // posts: computed(() => store.state.posts),
        posts: computed(() => store.state.posts.data),
        click,
        postId: computed(() => store.state.postId),
        // currentPost: computed(() => store.getters.currentPost)
        currentPost: computed(() => store.getters['posts/currentPost'])
        // fetchData no need when using via onMounted
        // increment
      }
    }
  }
</script>
