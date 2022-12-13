<template>
  <div class="type-label" :class="type.getTag()" :style="width">
    <svg-icon :name="`type-${type.getTag()}`" />
    <div v-if="!noText" class="type-label-text">{{ type.getName() }}</div>
  </div>
</template>

<script lang="ts" setup>
import { Type } from '@/types/type';

interface IProps {
  type: Type;
  noText?: boolean;
}
const props = withDefaults(defineProps<IProps>(), { noText: false });
const width = computed(() => (props.noText ? 'width: 20px;' : 'width: 70px;'));
</script>

<style lang="scss" scoped>
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

.normal {
  background-color: #9fa19f;
}
.fire {
  background-color: #e62829;
}
.water {
  background-color: #2980ef;
}
.electric {
  background-color: #fac000;
}
.grass {
  background-color: #3fa129;
}
.ice {
  background-color: #3fd8ff;
}
.fighting {
  background-color: #ff8000;
}
.poison {
  background-color: #9141cb;
}
.ground {
  background-color: #915121;
}
.flying {
  background-color: #81b9ef;
}
.psychic {
  background-color: #ef4179;
}
.bug {
  background-color: #91a119;
}
.rock {
  background-color: #afa981;
}
.ghost {
  background-color: #704170;
}
.dragon {
  background-color: #5060e1;
}
.dark {
  background-color: #50413f;
}
.steel {
  background-color: #60a1b8;
}
.fairy {
  background-color: #ef70ef;
}
</style>
