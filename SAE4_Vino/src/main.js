import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// Icon : FontAwesome
import '@fortawesome/fontawesome-free/css/all.min.css';
// Icon : Google-material-design
import 'material-design-icons-iconfont/dist/material-design-icons.css';


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')