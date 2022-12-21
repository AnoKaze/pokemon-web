<template>
  <el-table class="pokedex-table" border :data="props.data" :header-cell-style="HeaderStyleHandler" :span-method="SpanHandler" :cell-class-name="CellClassHandler">
    <el-table-column prop="regionalId" :label="region" :formatter="formatRegionalId" header-align="center" align="center" />
    <el-table-column prop="nationalId" label="全国" :formatter="formatNationalId" header-align="center" align="center" />
    <el-table-column label="宝可梦" header-align="center" align="center">
      <template #default="scope">
        <img v-lazy="{ src: getPokemonIcon(scope.row.formId) }" width="64" height="64" />
      </template>
    </el-table-column>
    <el-table-column prop="name" header-align="center" align="center" />
    <el-table-column label="属性" header-align="center" align="center">
      <template #default="scope">
        <type-label :type="scope.row.type1" no-background />
      </template>
    </el-table-column>
    <el-table-column header-align="center" align="center">
      <template #default="scope">
        <type-label :type="scope.row.type2" no-background />
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { TableColumnCtx } from 'element-plus';
import { getPokemonIcon } from '@/utils/image';
import Pokedex from '@/types/pokedex';

interface IProps {
  region: string;
  data: Pokedex[];
}

const props = defineProps<IProps>();

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
  return {};
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
  if (columnIndex === 4) {
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
</script>
