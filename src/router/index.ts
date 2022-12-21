import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import PokemonListView from '@/views/PokemonListView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/PokemonList',
  },
  {
    path: '/PokemonList',
    component: PokemonListView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
