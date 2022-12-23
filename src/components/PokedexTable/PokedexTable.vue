<template>
  <el-table class="pokedex-table" border :data="props.data" :header-cell-style="HeaderStyleHandler" :span-method="SpanHandler" :cell-class-name="CellClassHandler">
    <el-table-column prop="regionalId" :label="region" width="70px" :resizable="false" :formatter="formatRegionalId" align="center" />
    <el-table-column prop="nationalId" label="全国" width="70px" :resizable="false" :formatter="formatNationalId" align="center" />
    <el-table-column label="宝可梦" width="90px" :resizable="false" align="center">
      <template #default="scope">
        <img v-lazy="{ src: getPokemonIcon(scope.row.formId) }" width="64" height="64" style="cursor: pointer" @click="toRoute(scope.row.formId)" />
      </template>
    </el-table-column>
    <el-table-column prop="name" width="100px" :resizable="false" align="center">
      <template #default="scope">
        <div style="cursor: pointer" @click="toRoute(scope.row.nationalId)">{{ scope.row.name }}</div>
        <small v-if="scope.row.subName && scope.row.subName === `${region}的样子`">{{ scope.row.subName }}</small>
      </template>
    </el-table-column>
    <el-table-column label="属性" width="100px" :resizable="false" align="center">
      <template #default="scope">
        <type-label :type="scope.row.type1" no-background />
      </template>
    </el-table-column>
    <el-table-column width="100px" :resizable="false" align="center">
      <template #default="scope">
        <type-label v-if="scope.row.type2" :type="scope.row.type2" no-background />
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { TableColumnCtx } from 'element-plus';
import { getPokemonIcon } from '@/utils/image';
import Pokedex from '@/types/Pokedex';

const router = useRouter();

const props = defineProps<{
  region: string;
  data: Pokedex[];
}>();

interface SpanParams {
  row: Pokedex;
  column: TableColumnCtx<Pokedex>;
  rowIndex: number;
  columnIndex: number;
}

function HeaderStyleHandler({ row, columnIndex }: { row: any; columnIndex: number }) {
  if (row[0].level === 1) {
    row[2].colSpan = 2;
    row[4].colSpan = 2;
    if (columnIndex === 3 || columnIndex === 5) {
      return { display: 'none' };
    }
  }
  return { color: '#ffffff', backgroundColor: '#111111' };
}

function SpanHandler({ row, columnIndex }: SpanParams) {
  if (columnIndex === 4) {
    if (row.type2) {
      return [1, 1];
    }
    return [1, 2];
  }

  if (columnIndex === 5) {
    if (row.type2) {
      return [1, 1];
    }
    return [1, 0];
  }

  return [1, 1];
}

function CellClassHandler({ row, columnIndex }: SpanParams) {
  if (columnIndex === 4 && row.type1) {
    return `bg-${row.type1.tag}`;
  }
  if (columnIndex === 5 && row.type2) {
    return `bg-${row.type2.tag}`;
  }
}

function formatRegionalId(row: any) {
  let regionalId: string = row.regionalId.toString();
  regionalId = regionalId.padStart(3, '0');
  return `#${regionalId}`;
}

function formatNationalId(row: any) {
  let nationalId: string = row.nationalId.toString();
  nationalId = nationalId.padStart(3, '0');
  return `#${nationalId}`;
}

function toRoute(formId: string) {
  router.push(`/pokemon/${formId}`);
}
</script>

<style lang="scss" scoped>
.pokedex-table {
  width: fit-content;
  border: 2px solid #000000;
}
</style>
