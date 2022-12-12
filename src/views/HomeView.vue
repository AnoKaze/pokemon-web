<template>
  <div>
    <type-label :type="type1" />
    <type-label :type="type0" />
  </div>
</template>

<script lang="ts" setup>
import { Type } from '@/types/type';

const type1 = new Type(1, '火');
const type0 = new Type(2, '一般');
</script>
