<template>
  <div>
    <div v-for="item in pokemonList" :key="item.id">
      <div>{{ item.name }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { listPokemons } from '@/api/pokemon';
import pokemonQuery from '@/types/vo/pokemonQuery';
import pokemon from '@/types/pokemon';

const query: pokemonQuery = reactive({
  isSimple: true,
  name: null,
  nationnalId: null,
  paldeaId: null,
  firstLetter: null,
  type1: null,
  type2: null,
});

const pokemonList = ref<pokemon[]>([]);

const setPokemonList = () => {
  listPokemons(query)
    .then((response) => {
      pokemonList.value = response.data;
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
