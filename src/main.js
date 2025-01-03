import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueFeather from 'vue-feather'

const app = createApp(App)
app.component(VueFeather.name, VueFeather)

app.mount('#app')
