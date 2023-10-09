<!--
 * @Author: yzh 2683849644@qq.com
 * @Date: 2023-10-08 19:12:19
 * @LastEditors: yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-10 00:41:10
 * @FilePath: \electron_yzh\src\renderer\components\Versions.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
const color1 = ref("#409EFF");
const value1 = ref(true);
const value2 = ref(null);
const input = ref("");
const versions = reactive({ ...window?.electron?.process?.versions });
console.log("first", window);
</script>

<template>
  <h1>DOME_1</h1>
  <div class="demo-rate-block">
    <span class="demonstration">Default</span>
    <el-rate v-model="value2" />
  </div>
  <el-icon size="25" color="red">
    <i-ep-Plus />
  </el-icon>
  <el-input v-model="input" placeholder="Please input" />
  <el-switch v-model="value1" />
  <el-button type="success">点我好吗</el-button>
  <el-icon size="25" color="red">
    <i-ep-edit />
  </el-icon>
  <div class="demo-color-block">
    <span class="demonstration">With default value</span>
    <el-color-picker v-model="color1" />
  </div>
  <ul class="versions">
    <li class="electron-version">Electron v{{ versions.electron }}</li>
    <li class="chrome-version">Chromium v{{ versions.chrome }}</li>
    <li class="node-version">Node v{{ versions.node }}</li>
    <li class="v8-version">V8 v{{ versions.v8 }}</li>
  </ul>
</template>
