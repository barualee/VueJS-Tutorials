import {createRouter, createWebHistory} from 'vue-router'
import PhotoApp from '../components/PhotoApp'
import PhotoView from '../components/PhotoView'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: PhotoApp,
      path: '/',
      children: [
        {
            path: 'albums/:id',
            component: PhotoView,
        }
      ]
    }
  ]
})
