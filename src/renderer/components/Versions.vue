<!--
 * @Author: yzh 2683849644@qq.com
 * @Date: 2023-10-08 19:12:19
 * @LastEditors: yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-10 23:59:34
 * @FilePath: \electron_yzh\src\renderer\components\Versions.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { useRouter } from "vue-router";
import { useCounterStore } from "../store/modules/counterStore";
const counterStore = useCounterStore();
const router = useRouter();
function goBack() {
  router.back();
}
const versions = reactive({ ...window?.electron?.process?.versions });
console.log("first", window);
</script>

<template>
  <h1>当前的计数为：{{ counterStore.counter }} 双倍值为：{{ counterStore.doubleCounter }}</h1>
  <el-button type="success" @click="goBack">返回上一页</el-button>
  <div class="versionsUl">
    <ul class="versions">
      <li>
        <el-icon size="25" color="red">
          <i-ep-edit />
        </el-icon>
      </li>
      <li>
        <el-button type="warning" @click="counterStore.counter++">直接操作state去改变值</el-button>
      </li>
      <li>
        <el-button type="info" @click="counterStore.increment">increment</el-button>
      </li>
      <li class="electron-version">Electron v{{ versions.electron }}</li>
      <li class="chrome-version">Chromium v{{ versions.chrome }}</li>
      <li class="node-version">Node v{{ versions.node }}</li>
      <li class="v8-version">V8 v{{ versions.v8 }}</li>
    </ul>
  </div>
</template>
