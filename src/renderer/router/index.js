/*
 * @Author: yzh 2683849644@qq.com
 * @Date: 2023-10-10 00:32:28
 * @LastEditors: yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-10 00:40:16
 * @FilePath: \electron_yzh\src\renderer\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  //  hash 模式。
  history: createWebHashHistory(),
  routes: [
    // 设置首页
    {
      path: "/",
      component: () => import("../components/demo/dome_1.vue"),
    },
    // 配置helloworld页的路径
    {
      path: "/Versions",
      component: () => import("../components/Versions.vue"),
    },
  ],
});

export default router;
