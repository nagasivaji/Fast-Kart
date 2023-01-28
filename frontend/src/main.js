import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// ANT DESING IMPORTS
import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

// BOOTSTRAP IMPORTS
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);
app.use(router);
// app.use(Antd);
app.mount('#app');

