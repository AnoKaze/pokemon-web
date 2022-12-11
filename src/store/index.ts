import { createPinia } from 'pinia';
import piniaPresist from 'pinia-plugin-persist';

const pinia = createPinia();
pinia.use(piniaPresist);

export default pinia;
