<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>宝可梦</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { TableColumnCtx } from 'element-plus';
import { listPokemons } from '@/api/pokemon';
import Type, { TypeList } from '@/types/type';
import pokemonQuery from '@/types/vo/pokemonQuery';
import Pokemon from '@/types/pokemon';

const query: pokemonQuery = reactive({
  isSimple: true,
  name: null,
  nationnalId: null,
  paldeaId: null,
  firstLetter: null,
  type1: null,
  type2: null,
});

const pokemonList = ref<Pokemon[]>([]);

const setPokemonList = () => {
  listPokemons(query)
    .then((response) => {
      response.data.forEach((item: any) => {
        const newPokemon = new Pokemon(item.id, item.nationalId, item.paldeaId, item.name, TypeList.get(item.type1) as Type, TypeList.get(item.type2));
        pokemonList.value.push(newPokemon);
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

onMounted(() => {
  setPokemonList();
});

interface SpanMethodProps {
  row: Pokemon;
  column: TableColumnCtx<Pokemon>;
  rowIndex: number;
  columnIndex: number;
}

function headerMethod({ row, column, rowIndex, columnIndex }: SpanMethodProps) {
  if (rowIndex === 1) {
    return { display: 'none' };
  }
  return {};
}

const spanMethod = ({ row, column, rowIndex, columnIndex }: SpanMethodProps) => {
  return [1, 1];
};
</script>

<style lang="scss" scoped></style>
