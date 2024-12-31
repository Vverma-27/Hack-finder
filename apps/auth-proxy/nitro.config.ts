import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  output: {
    dir: ".nitro", // or ".nitro", if preferred
  },
  runtimeConfig: {
    // Runtime environment variables
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
    AUTH_REDIRECT_PROXY_URL: process.env.AUTH_REDIRECT_PROXY_URL,
    NITRO_PRESET: process.env.NITRO_PRESET,
  },
});
