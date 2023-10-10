/*
 * @Author: yzh 2683849644@qq.com
 * @Date: 2023-10-08 19:12:19
 * @LastEditors: yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-11 00:03:33
 * @FilePath: \electron_yzh\electron.vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import vue from "@vitejs/plugin-vue";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import UnoCSS from "unocss/vite";
const pathSrc = resolve(__dirname, "src/renderer");
export default defineConfig(({ command }) => {
  console.log("🚀 ~ file: electron.vite.config.js:17 ~ defineConfig ~ command:", command);
  return {
    main: {
      plugins: [externalizeDepsPlugin()],
    },
    preload: {
      plugins: [externalizeDepsPlugin()],
    },
    renderer: {
      resolve: {
        alias: {
          "@": pathSrc,
        },
      },
      plugins: [
        vue(),
        AutoImport({
          // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
          imports: ["vue", "@vueuse/core"],
          resolvers: [
            ElementPlusResolver({
              importStyle: "sass",
            }),
            // 自动导入图标组件
            IconsResolver({
              prefix: "Icon",
            }),
          ],
          eslintrc: {
            enabled: true, // 是否自动生成 eslint 规则，建议生成之后设置 false
            filepath: ".eslintrc-auto-import.json", // 指定自动导入函数 eslint 规则的文件
            globalsPropValue: true,
          },
          vueTemplate: true, // 是否在 vue 模板中自动导入
          dts: resolve(__dirname, "src/renderer/types/auto-imports.d.ts"),
        }),
        Components({
          resolvers: [
            ElementPlusResolver(),
            // 自动注册图标组件
            IconsResolver({
              enabledCollections: ["ep"],
            }),
          ],
          dts: resolve(__dirname, "src/renderer/types/components.d.ts"),
        }),
        //补充一个图标的导入配置
        Icons({
          autoInstall: true,
        }),
        UnoCSS({
          /* options */
        }),
      ],
      css: {
        preprocessorOptions: {
          scss: {
            javascriptEnabled: true,
            additionalData: `@use "@/styles/variables.scss" as *;`,
          },
        },
      },
    },
  };
});
