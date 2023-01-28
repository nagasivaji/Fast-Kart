import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).use(router).use(Antd).mount('#app')

