
<template>
  <div class="card-item">
    <img src alt />
    <div>1111</div>
  </div>
</template>

<script setup>
import { withBase, useData } from "vitepress";

const props = defineProps(["tip"]);

const { theme } = useData();
</script>
<style scoped>
.card-item {
  width: 160px;
  /* display: flex; */
  height: 200px;
}
</style>