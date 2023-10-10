/*
 * @Author: yzh 2683849644@qq.com
 * @Date: 2023-10-08 19:12:19
 * @LastEditors: yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-11 00:01:57
 * @FilePath: \electron_yzh\src\renderer\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { createApp } from "vue";
// import App from "./App.vue";

// createApp(App).mount("#app");
// src\main.ts
import { createApp } from "vue";
import App from "./App.vue";
import "./styles/index.scss";
// import "./samples/node-api";
import router from "./router";
import pinia from "./store";
import "unocss";
const app = createApp(App);

// 配置路由
app.use(router).use(pinia);

app.mount("#app").$nextTick(() => {
  postMessage({ payload: "removeLoading" }, "*");
});
