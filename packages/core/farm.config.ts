import { defineConfig } from "@farmfe/core";
import dts from "@farmfe/js-plugin-dts";

export default defineConfig({
  plugins: [dts()],
  compilation: {
    input: {
      index: "src/index.ts",
    },
    output: {
      entryFilename: "index.cjs",
      path: "dist",
      format: "cjs",
      targetEnv: "node",
    },
    sourcemap: false,
    presetEnv: false,
    minify: false,
    persistentCache: false,
    progress: false,
    partialBundling: {
      enforceResources: [
        {
          name: "index",
          test: [".+"],
        },
      ],
    },
  },
});
