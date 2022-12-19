import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
Vue.prototype.$http = axios;
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
