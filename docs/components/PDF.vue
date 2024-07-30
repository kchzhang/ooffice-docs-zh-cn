<template>
  <iframe :src="url"> </iframe>
</template>

<script setup>
import { withBase, useData } from "vitepress";
import { reactive } from "vue";
import users from "./users";
const userlist = reactive(users);
const url = withBase("/pdfjs-4.5.136-legacy-dist/web/viewer.html");
</script>

<style scoped>
iframe{
  width: 100%;
  height: 100%;
  border: 0;
  min-height: 600px;
}
</style>>
