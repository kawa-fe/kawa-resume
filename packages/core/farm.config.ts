import { defineConfig } from '@farmfe/core';
import dts from '@farmfe/js-plugin-dts';

export default defineConfig({
  plugins: [dts({ entryRoot: 'src' })],
  compilation: {
    external: ['react', 'react-dom'],
    input: {
      index: 'src/index.ts',
    },
    output: {
      entryFilename: 'index.js',
      path: 'dist',
      format: 'esm',
      targetEnv: 'library',
      clean: true,
    },
    sourcemap: false,
    presetEnv: false,
    minify: false,
    persistentCache: false,
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
