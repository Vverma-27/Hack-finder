import baseConfig, { restrictEnvAccess } from "@hack-finder/eslint-config/base";
import nextjsConfig from "@hack-finder/eslint-config/nextjs";
import reactConfig from "@hack-finder/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
