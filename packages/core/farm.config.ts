import { defineConfig } from "@farmfe/core";

export default defineConfig({
  compilation: {
    input: {
      index: "src/index.ts",
    },
    sourcemap: false,
    presetEnv: false,
  },
});
