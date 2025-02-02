import { createApp } from 'vue'
import App from './App.vue'
import elementplus from "element-plus"
import "element-plus/dist/index.css";
import axios from 'axios';

import LoginPlugin from '../package/main.js';
const app = createApp(App)
app.config.globalProperties.$axios = axios;
console.log("************");
console.log(LoginPlugin);
console.log("************");
app.use(LoginPlugin);
app.use(elementplus);

app.mount('#app')