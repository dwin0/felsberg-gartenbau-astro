import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import globals from "globals";

export default [
  js.configs.all,
  ...eslintPluginAstro.configs["flat/recommended"],
  ...eslintPluginAstro.configs["flat/jsx-a11y-strict"],
  {
    rules: {
      "no-ternary": "off",
      "one-var": "off",
      "sort-imports": "off",
      "sort-keys": "off",
      "max-lines": "off",
      "func-style": "off",
      "capitalized-comments": "off",
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
  },
];
