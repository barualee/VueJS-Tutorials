import { createStore } from "vuex";
import { testPosts } from '@/testPosts.js'

//workflow: action -> mutation -> state

const delay = () => new Promise(res => setTimeout(res, 1000))

//modules for scalability
const posts = {
    namespaced: true,
    
    state() {
        return {
            count: 0,
            postId: null,
            data: []
        }
    },
    mutations: {
        increment(state, payload) {
            state.count += payload
        },
        setPostId(state, postId){
            state.postId = postId
        },
        setPosts(state, data){
            state.data = data
        }
    },
    actions: {
        async fetch(ctx, payload) {
            //ctx.commit/ ctx.dispatch/ ctx.state
            await delay()
            console.log(ctx, payload)
            ctx.commit('setPosts', testPosts)
        },
    },
    getters: {
        currentPost(state) {
            return state.data.find(x => {
              return x.id === state.postId
            })
        }
    }
}

export const store = createStore({
    modules: {
        posts
    }
})