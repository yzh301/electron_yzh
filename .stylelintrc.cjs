/*
 * @Author: yzh 2683849644@qq.com
 * @Date: 2023-10-09 19:50:22
 * @LastEditors: yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-10 22:56:56
 * @FilePath: \electron_yzh\.stylelintrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  // 继承推荐规范配置
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss",
    "stylelint-config-recommended-vue/scss",
    "stylelint-config-html/vue",
    "stylelint-config-recess-order",
  ],
  // 指定不同文件对应的解析器
  overrides: [
    {
      files: ["**/*.{vue,html}"],
      customSyntax: "postcss-html",
    },
    {
      files: ["**/*.{css,scss}"],
      customSyntax: "postcss-scss",
    },
  ],
  // 自定义规则
  rules: {
    // 允许 global 、export 、v-deep等伪类
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "export", "v-deep", "deep"],
      },
    ],
    "custom-property-pattern": null,
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "value-keyword-case": null,
    "color-named": null,
    "font-weight-notation": null,
    "font-family-no-duplicate-names": null,
    "font-family-no-missing-generic-family-keyword": null,
    "function-url-quotes": null,
    "max-nesting-depth": null,
    "no-descending-specificity": null,
  },
};
