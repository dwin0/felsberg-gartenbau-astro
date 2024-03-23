import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  js.configs.all,
  ...eslintPluginAstro.configs["flat/recommended"],
  ...eslintPluginAstro.configs["flat/jsx-a11y-strict"],
  {
    rules: {
      "no-ternary": "off",
      "one-var": "off",
      "sort-imports": "off",
    },
  },
];
