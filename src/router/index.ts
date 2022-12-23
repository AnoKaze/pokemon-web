import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import PokemonListView from '@/views/PokemonListView.vue';
import TypeView from '@/views/TypeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/pokemon/list',
  },
  {
    path: '/pokemon',
    children: [
      {
        path: 'list',
        component: PokemonListView,
      },
      {
        path: ':id',
        component: TypeView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
