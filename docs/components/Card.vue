
<template>
  <div class="card-item">
    <img :src="withBase(props.src)" alt />
    <div class="card-footer">
      <div>
        <div class="txt">{{ props.desc }}</div>
        <div class="price">价格：￥{{ props.price }}</div>
      </div>
      <div class="right-code">
        <span class="txt-buy">微信扫码购买</span>
        <span class="contract">
          <img
            class="code"
            width="18"
            height="18"
            :src="withBase('/code.png')"
            @mouseenter="mouseenter"
            @mouseleave="mouseleave"
          />
          <transition>
            <img width="100" height="100" v-if="show" class="user" :src="withBase('/my-code.png')" />
          </transition>
        </span>
      </div>
    </div>
    <div class="link">
      <a :href="withBase(props.src)" target="_blank">点击放大</a>
    </div>
    <br />
  </div>
</template>

<script setup>
import { withBase, useData } from "vitepress";
import { ref } from "vue";

const props = defineProps(["src", "desc", "price"]);

const { theme } = useData();
const show = ref(false);

const mouseenter = function () {
  show.value = true;
};
const mouseleave = function () {
  show.value = false;
};
</script>
<style scoped>
.card-item {
  width: 600px;
  /* display: flex; */
  /* height: 200px; */
  user-select: none;
}
.card-item .txt,
.price {
  font-size: 12px;
}
.card-item .price {
  color: red;
}
.card-footer {
  display: flex;
  cursor: pointer;
}
.card-item img.user {
  position: absolute;
  top: 0;
  right: 30px;
  z-index: 999;
}
.card-item .card-footer {
  position: relative;
}

.card-item .card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.right-code {
  display: flex;
  align-items: center;
}
.txt-buy{
  margin-right: 4px;
  font-size: 12px;
}
</style>