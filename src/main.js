import { createApp } from 'vue'
import App from './App.vue'
// import App2 from './App2.vue'
import { store } from '@/store/index';
import { router } from './router/index';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const instance = createApp(App);

instance.use(store);
instance.use(router);
instance.use(ElementPlus);

instance.mount('#app');
