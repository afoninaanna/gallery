import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 
import Vuex from 'vuex'

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import store from './store'
 
createApp(App).use(router, Vuex).use(store).mount('#app') 