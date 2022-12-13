import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import PokemonView from '@/views/PokemonView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/pokemon',
    alias: '/',
    component: PokemonView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
