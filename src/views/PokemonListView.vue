<template>
  <pokedex-table :region="'帕底亚'" :data="pokedex" />
</template>

<script lang="ts" setup>
import { listPaldeaPokemons } from '@/api/pokemon';
import { TypeList } from '@/types/type';
import Pokedex from '@/types/pokedex';

const pokedex = ref<Pokedex[]>([]);

function setPokemonList() {
  listPaldeaPokemons()
    .then((response) => {
      const originList: any[] = response.data;
      originList.forEach((item) => {
        const newItem: Pokedex = {
          regionalId: item.paldeaId,
          nationalId: item.nationalId,
          formId: item.formId,
          name: item.name,
          subName: item.subName,
          type1: TypeList.get(item.type1)!,
          type2: TypeList.get(item.type2),
        };
        pokedex.value.push(newItem);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

onMounted(() => {
  setPokemonList();
});
</script>
