<template>
  <div>
    <type-label :type="type0" />
    <type-label :type="type1" />
  </div>
</template>

<script lang="ts" setup>
import { Type } from '@/types/type';

const type0 = new Type(0, '一般');
const type1 = new Type(1, '火');
</script>
