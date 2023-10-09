/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-10-08 17:45:29
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-08 18:01:29
 * @FilePath: \electron_yzh\src\preload\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { contextBridge } from "electron";
import { electronAPI } from "@electron-toolkit/preload";

// 用于渲染进程的自定义 API
const api = {};

// 如果启用了上下文隔离（context isolation），则使用 `contextBridge` 暴露 Electron API 给渲染进程，
// 否则直接添加到 DOM 的全局对象中。
if (process.contextIsolated) {
  try {
    // 在主界面世界中暴露 'electron' 和 'api' 对象，以供渲染进程使用。
    contextBridge.exposeInMainWorld("electron", electronAPI);
    contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  // 如果未启用上下文隔离，则将 'electron' 和 'api' 对象直接添加到全局的 'window' 对象中。
  window.electron = electronAPI;
  window.api = api;
}
