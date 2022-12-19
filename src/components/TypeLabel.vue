<template>
  <div class="type-label" :class="type.tag" :style="width">
    <img :src="getTypeIcon(type.tag)" :alt="type.name" width="20" height="20" />
    <div v-if="!noText" class="type-label-text">{{ type.name }}</div>
  </div>
</template>

<script lang="ts" setup>
import { getTypeIcon } from '@/utils/image';
import Type from '@/types/type';

interface IProps {
  type: Type;
  noText?: boolean;
}
const props = withDefaults(defineProps<IProps>(), { noText: false });
const width = computed(() => (props.noText ? 'width: 20px;' : 'width: 60px;'));
</script>

<style lang="scss" scoped>
@import '@/styles/typeColor.scss';

.type-label {
  height: 20px;
  display: inline-flex;
  justify-content: space-between;
  border-radius: 10px;

  .type-label-text {
    width: 40px;
    color: #ffffff;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
