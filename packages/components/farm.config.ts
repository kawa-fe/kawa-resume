import { defineConfig } from "@farmfe/core";
import farmDtsPlugin from "@farmfe/js-plugin-dts";

export default defineConfig({
  plugins: ["@farmfe/plugin-react", farmDtsPlugin()],
  compilation: {
    input: {
      index: "index.ts",
    },
    output: {
      entryFilename: "index.js",
      targetEnv: "node",
      format: "esm",
      path: "dist",
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
