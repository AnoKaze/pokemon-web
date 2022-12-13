<template>
  <svg class="svg-icon" aria-hidden="true" :width="size" :height="size">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts" setup>
interface IProps {
  name: string;
  prefix?: string;
  color?: string;
  size?: string;
}

const props = withDefaults(defineProps<IProps>(), { prefix: 'icon', color: '#ffffff', size: '20px' });
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>
