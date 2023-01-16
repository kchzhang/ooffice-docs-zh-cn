<template>
  <div class="user-list">
    <img
      v-for="item in userlist"
      :src="withBase(item.logo)"
      :key="item.id"
      :title="item.name"
    />
  </div>
</template>

<script setup>
import { withBase, useData } from "vitepress";
import { reactive } from "vue";
import users from "./users";
const userlist = reactive(users);
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
