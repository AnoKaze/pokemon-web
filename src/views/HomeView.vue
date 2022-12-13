<template>
  <div class="view">
    <type-label :type="type1" />
    <type-label :type="type0" />
  </div>
</template>

<script lang="ts" setup>
import { Type } from '@/types/type';

const type1 = new Type(11, '超能力', 'psychic');
const type0 = new Type(2, '火', 'fire');
</script>

<style lang="scss" scoped>
.view {
  height: 50px;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
}
</style>
