<template>
  <div>
    <var-table>
      <thead>
        <tr>
          <th colspan="2">宝可梦</th>
          <th>帕底亚图鉴</th>
          <th>全国图鉴</th>
          <th colspan="2">属性</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pokemon in pokemonList" :key="pokemon.formId">
          <th>{{ pokemon.name }}</th>
          <th>{{ pokemon.name }}</th>
          <th>{{ pokemon.paldeaId === undefined ? '—' : pokemon.paldeaId }}</th>
          <th>{{ pokemon.nationalId }}</th>
          <th :colspan="pokemon.type2 === undefined ? '2' : '1'" style="background-color: chartreuse">{{ pokemon.type1.name }}</th>
          <th>{{ pokemon.type2?.name }}</th>
        </tr>
      </tbody>
    </var-table>
  </div>
</template>

<script lang="ts" setup>
import { listPaldeaPokemons } from '@/api/pokemon';
import Type, { TypeList } from '@/types/type';

interface paldeaPokemon {
  paldeaId: number;
  nationalId: number;
  formId: string;
  name: string;
  subName: string;
  type1: Type;
  type2?: Type;
}

const pokemonList = ref<paldeaPokemon[]>([]);

const setPokemonList = () => {
  listPaldeaPokemons()
    .then((response) => {
      const originList: any[] = response.data;
      originList.forEach((item) => {
        const newItem: paldeaPokemon = {
          paldeaId: item.paldeaId,
          nationalId: item.nationalId,
          formId: item.formId,
          name: item.name,
          subName: item.subName,
          type1: TypeList.get(item.type1)!,
          type2: TypeList.get(item.type2),
        };
        pokemonList.value.push(newItem);
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

onMounted(() => {
  setPokemonList();
});
</script>

<style lang="scss" scoped></style>
