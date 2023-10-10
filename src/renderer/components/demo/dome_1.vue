<!--
 * @Author: yzh 2683849644@qq.com
 * @Date: 2023-10-08 19:12:19
 * @LastEditors: yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-10 22:47:56
 * @FilePath: \electron_yzh\src\renderer\components\Versions.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { useRouter } from "vue-router";
import { useCounterStore } from "../../store/modules/counterStore";
const counterStore = useCounterStore();
const router = useRouter();

// 点击事件跳转对应页面
function goTo(path) {
  router.push(path);
}
</script>

<template>
  <div class="box">
    <h1>这是DOME页面，当前计数:{{ counterStore.counter }}</h1>
    <ul>
      <li><router-link to="/Versions">链接跳转Versions页</router-link></li>
      <li><a @click="goTo('/Versions')">点击事件跳转Versions页</a></li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
}
</style>
