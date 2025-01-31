import { defineConfig } from '@farmfe/core';
import dts from '@farmfe/js-plugin-dts';

export default defineConfig({
  plugins: [dts({ entryRoot: 'src' })],
  compilation: {
    input: {
      index: 'src/index.ts',
    },
    output: {
      entryFilename: 'index.js',
      path: 'dist',
      format: 'esm',
      targetEnv: 'library',
    },
    sourcemap: false,
    presetEnv: false,
    minify: false,
    persistentCache: false,
    progress: false,
    partialBundling: {
      enforceResources: [
        {
          name: 'index',
          test: ['.+'],
        },
      ],
    },
  },
});
