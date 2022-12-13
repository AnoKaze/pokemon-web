import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import store from './store';
import router from './router';
import 'virtual:svg-icons-register';

const app = createApp(App);
app.use(ElementPlus, { size: 'small', zIndex: 3000 });
app.use(store);
app.use(router);
app.mount('#app');
