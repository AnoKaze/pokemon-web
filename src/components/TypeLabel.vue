<template>
  <div class="type-label" :class="typeName">
    <div></div>
  </div>
</template>

<script lang="ts" setup>
import { TypeEnum, Type } from '@/types/type';

interface IProps {
  type: Type;
  hasText: boolean;
}
const props = defineProps<IProps>();

const typeName = computed(() => TypeEnum[props.type.getId()].toLowerCase());
</script>

<style lang="scss" scoped>
$typeName: v-bind(typeName);

.type-label {
  height: 20px;
  border-radius: 10px;
}
</style>
