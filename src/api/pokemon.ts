import request from '@/utils/request';

export function listPaldeaPokemons() {
  return request({
    method: 'post',
    url: '/pokemon/listPaldeaPokemons',
  });
}
