import { createApp } from 'vue'
import App from './App.vue'
import { store } from './js/store'
import { router } from './js/router'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
