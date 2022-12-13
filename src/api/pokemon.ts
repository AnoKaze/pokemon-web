import request from '@/utils/request';
import pokemonQuery from '@/types/vo/pokemonQuery';

export function listPokemons(data: pokemonQuery) {
  return request({
    method: 'post',
    url: '/pokemon/query',
    data,
  });
}
