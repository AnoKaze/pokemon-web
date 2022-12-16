import { createApp } from 'vue';
import Varlet from '@varlet/ui';
import App from './App.vue';
import store from './store';
import router from './router';
import 'virtual:svg-icons-register';

const app = createApp(App);
app.use(Varlet);
app.use(store);
app.use(router);
app.mount('#app');
