import baseConfig from "@hack-finder/eslint-config/base";
import reactConfig from "@hack-finder/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
