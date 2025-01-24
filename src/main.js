import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueFeather from 'vue-feather'

// TODO: Load routes from backend, build route models

const app = createApp(App)
app.component(VueFeather.name, VueFeather)

app.mount('#app')
