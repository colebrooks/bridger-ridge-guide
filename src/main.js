import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { Map } from './map'

const map = new Map([-110.887222, 45.815556, 3500], 270.0, -25.0)

createApp(App).mount('#app')
map.draw()

