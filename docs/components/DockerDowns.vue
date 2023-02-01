<template>
  <div class="user-list"></div>
</template>

<script setup>
import { withBase, useData } from "vitepress";
import { reactive } from "vue";
import users from "./users";
import { loadXMLDoc } from "./ajax";
const dockerInfo = reactive({});

loadXMLDoc(
  {
    type: "GET",
    url: "https://hub.docker.com/v2/repositories/knoxzhang/oo-ce-docker-license/",
  },
  function (res) {
    console.log(1111, res);
  }
);
</script>

<style>
.user-list {
  display: flex;
}
.user-list img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
</style>
