<template>
  <div class="view-container">
    <h1>帕底亚地区图鉴</h1>
    <el-divider />
    <pokedex-table class="pokedex-table" :region="RegionMap.get(RegionEnum.PALDEA)?.name" :data="pokedex" />
  </div>
</template>

<script lang="ts" setup>
import { listRegionalPokemons } from '@/api/pokemon';
import RegionEnum from '@/types/enum/RegionEnum';
import RegionMap from '@/types/map/RegionMap';
import TypeMap from '@/types/map/TypeMap';
import Pokedex from '@/types/Pokedex';

const pokedex = ref<Pokedex[]>([]);

function setPokemonList() {
  listRegionalPokemons(RegionEnum.PALDEA)
    .then((response) => {
      const originList: any[] = response.data;
      originList.forEach((item) => {
        const newItem: Pokedex = {
          regionalId: item.regionalId,
          nationalId: item.nationalId,
          formId: item.formId,
          name: item.name,
          subName: item.subName,
          type1: TypeMap.get(item.type1)!,
          type2: TypeMap.get(item.type2),
        };
        pokedex.value.push(newItem);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

onBeforeMount(() => {
  setPokemonList();
});
</script>

<style lang="scss" scoped>
.view-container {
  margin: auto;
  max-width: 1200px;
  background-color: #ffffff;

  padding: 50px;
  display: flex;
  flex-direction: column;
}

.pokedex-table {
  align-self: center;
}
</style>
