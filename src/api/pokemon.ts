import request from '@/utils/request';
import pokemonQuery from '@/types/vo/pokemonQuery';

export function listPaldeaPokemons() {
  return request({
    method: 'post',
    url: '/pokemon/listPaldeaPokemons',
  });
}
