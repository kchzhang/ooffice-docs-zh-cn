
<template>
  <div>
    <!-- baidu 统计 -->
    <br />
    <br />
    <br />
    <br />
    <div><h4>{{props.tip || '如果有帮助到您，请作者喝杯咖啡吧'}}</h4></div>
    <table>
      <tr>
        <td>
          <!-- <img width="220" src="../wxpay.JPG" /> -->
          <img width="220" :src="withBase('/wxpay.JPG')" />
        </td>
        <td></td>
        <td>
          <!-- <img width="220" src="../alipay.JPG" /> -->
          <img width="220" :src="withBase('/alipay.JPG')" />
        </td>
      </tr>
    </table>
    <br />
    <div><h4><a href="https://jq.qq.com/?_wv=1027&k=m01BIUzX" target="_blank">QQ交流群</a></h4></div>
    <!-- <img width="220" src="../qq-group.png" /> -->
    <img width="220" :src="withBase('/qq-group.png')" />
    <img width="220" :src="withBase('/QQ.JPG')" />
  </div>
</template>

<script setup>
import { withBase, useData } from "vitepress";

const props = defineProps(['tip']);

const { theme } = useData();
if (!import.meta.env.SSR) {
  var _hmt = _hmt || [];

  var dom = document.getElementById("baidu-hm");
  if (dom) {
    dom.parentNode.removeChild(dom);
  }
  var hm = document.createElement("script");
  hm.id = "baidu-hm";
  hm.src = "https://hm.baidu.com/hm.js?e96978ddd4a043adb41b2c052ca28a3a";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
}
</script>