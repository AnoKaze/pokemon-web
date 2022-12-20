<template>
  <table class="data-table">
    <thead>
      <tr>
        <th colspan="2">宝可梦</th>
        <th>全国图鉴</th>
        <th>帕底亚图鉴</th>
        <th colspan="2">属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="pokemon in pokemonList" :key="pokemon.nationalId">
        <td>{{ pokemon.name }}</td>
        <td>{{ pokemon.name }}</td>
        <td>{{ pokemon.nationalId }}</td>
        <td>{{ pokemon.paldeaId }}</td>
        <td :colspan="pokemon.type2 ? 1 : 2" :class="pokemon.type1.tag">
          <img :src="getTypeIcon(pokemon.type1.tag)" />
          <span>{{ pokemon.type1.name }}</span>
        </td>
        <td v-if="pokemon.type2" :class="pokemon.type2.tag">
          <img :src="getTypeIcon(pokemon.type2.tag)" />
          <span>{{ pokemon.type2.name }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { listPaldeaPokemons } from '@/api/pokemon';
import { getTypeIcon } from '@/utils/image';
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

<style lang="scss" scoped>
@import '@/styles/typeColor.scss';

.data-table {
  background-color: rgb(212, 84, 85);
  border: 3px rgb(138, 55, 55) solid;
  border-radius: 10px;
  td {
    background-color: #ffffff;
  }
  tbody {
    tr:last-child {
      td {
        &:first-child {
          border-radius: 0px 0px 0px 5px;
        }

        &:last-child {
          border-radius: 0px 0px 5px 0px;
        }
      }
    }
  }
}
</style>
