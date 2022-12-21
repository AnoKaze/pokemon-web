import { createApp } from 'vue';
import VueLazyLoad from 'vue3-lazyload';
import ElementPlus from 'element-plus';
import App from './App.vue';
import store from './store';
import router from './router';
import 'virtual:svg-icons-register';
import '@/styles/TypeColor.scss';

const app = createApp(App);
app.use(VueLazyLoad);
app.use(ElementPlus);
app.use(store);
app.use(router);
app.mount('#app');
