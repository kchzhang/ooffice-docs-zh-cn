
<template>
  <div>
    <!-- baidu 统计 -->
    <br />
    <br />
    <br />
    <br />
    <div>
      <h4>{{ props.tip || "如果有帮助到您，请作者喝杯咖啡吧" }}</h4>
    </div>

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

    <!-- <br />
    <a :href="withBase('/qrcode.jpg')">公众号</a>
    <img width="220" :src="withBase('/qrcode.jpg')" /> -->

    <!-- <a :href="withBase('/my-code.png')">微信</a>
    <img width="220" :src="withBase('/my-code.png')" /> -->
    <div>
      <h4>
        <a href="https://jq.qq.com/?_wv=1027&k=m01BIUzX" target="_blank"
          >QQ交流1群(已满)</a
        >
      </h4>
    </div>
    <!-- <img width="220" src="../qq-group.png" /> -->
    <img width="220" :src="withBase('/qq-group1.png')" />

    <div>
      <h4>
        <a href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=DaEUQcFtPQZHkmTqCLbsPE-qUuVOzoak&authKey=p5EowysVPEcC3ThMz27sofJUjQj9XH0rABJklaIZ4ldaAzQn1QjvzHtd%2FlWc%2B6QH&noverify=0&group_code=698534646" target="_blank"
          >QQ交流2群</a
        >
      </h4>
    </div>
    <img width="220" :src="withBase('/qq-group2.png')" />

    <img width="220" :src="withBase('/QQ.JPG')" />
  </div>
</template>

<script setup>
import { withBase, useData } from "vitepress";

const props = defineProps(["tip"]);

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