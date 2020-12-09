import { createApp } from 'vue'
import App from './App.vue'
import { store } from '@/store/index';
import { router } from './router/index';

const instance = createApp(App);
instance.use(store);
instance.use(router);
instance.mount('#app')
