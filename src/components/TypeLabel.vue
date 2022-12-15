<template>
  <div class="type-label" :class="type.tag" :style="width">
    <svg-icon :name="`type-${type.tag}`" />
    <div v-if="!noText" class="type-label-text">{{ type.name }}</div>
  </div>
</template>

<script lang="ts" setup>
import Type from '@/types/type';

interface IProps {
  type: Type;
  noText?: boolean;
}
const props = withDefaults(defineProps<IProps>(), { noText: false });
const width = computed(() => (props.noText ? 'width: 20px;' : 'width: 70px;'));
</script>

<style lang="scss" scoped>
@import '@/styles/typeColor.scss';

.type-label {
  height: 20px;
  display: inline-flex;
  justify-content: space-between;
  border-radius: 10px;

  .type-label-text {
    width: 50px;
    color: #ffffff;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
