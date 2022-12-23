import request from '@/utils/request';

export function listRegionalPokemons(regionId: number) {
  return request({
    method: 'post',
    url: '/pokemon/listRegionalPokemons',
    params: { regionId },
  });
}
