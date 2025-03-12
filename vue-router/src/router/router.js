import { createWebHistory, createRouter } from 'vue-router';
import  HelloRoute  from './HelloRoute.vue';
import  PostsRoute  from './PostsRoute.vue';
import  PostRoute  from './PostRoute.vue';

const router = createRouter({
    history: createWebHistory(),
    //simple routes
    //dynamic routes
    //nested routes
    routes: [
        {
            path: '/hello',
            component: HelloRoute
        },
        {
            path: '/posts',
            component: PostsRoute,
            children: [
                {
                    path: ':id',
                    component: PostRoute,
                }
            ]
        }
    ]
})

export { router }