import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Home from './views/HomeView.vue'
import category from './views/Category/Category.vue'
import "bootstrap";
import "animate.css";
import "animate.js";

createApp(category).use(router).mount('#category')
createApp(Home).use(router).mount('#home')
createApp(App).use(router).mount('#app')

