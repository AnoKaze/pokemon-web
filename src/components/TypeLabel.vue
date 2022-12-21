<template>
  <div class="type-label" :class="labelClass" :style="labelStyle" @click="toRoute()">
    <img :src="getTypeIcon(type.tag)" :alt="type.name" width="20" height="20" />
    <div v-if="!noText" class="type-label-text">{{ type.name }}</div>
  </div>
</template>

<script lang="ts" setup>
import { getTypeIcon } from '@/utils/image';
import Type from '@/types/type';

const router = useRouter();
interface IProps {
  type: Type;
  noBackground?: boolean;
  noText?: boolean;
}
const props = withDefaults(defineProps<IProps>(), { noText: false });

const labelClass = computed(() => (props.noBackground ? null : `bg-${props.type.tag}`));
const labelStyle = computed(() => ({ width: props.noText ? '20px' : '60px' }));

function toRoute() {}
</script>

<style lang="scss" scoped>
.type-label {
  height: 20px;
  display: inline-flex;
  justify-content: space-between;
  border-radius: 10px;
  cursor: pointer;

  .type-label-text {
    width: 40px;
    color: #ffffff;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
