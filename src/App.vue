<template>
  <el-container>
    <el-header>
      <div>header</div>
    </el-header>
    <el-main>
      <router-view class="view-container" />
    </el-main>
  </el-container>
</template>

<script setup lang="ts"></script>

<style lang="scss">
body {
  background-color: #eeeeee;
}
</style>
