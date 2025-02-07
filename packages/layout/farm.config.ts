import { defineConfig } from '@farmfe/core';
import dts from '@farmfe/js-plugin-dts';

export default defineConfig({
  plugins: ['@farmfe/plugin-react', dts()],
  compilation: {
    input: {
      index: 'src/index.ts',
    },
    output: {
      entryFilename: 'index.js',
      targetEnv: 'library',
      format: 'esm',
      path: 'dist',
    },
    external: ['react', 'react-dom'],
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
