import { defineConfig } from '@farmfe/core';
import dts from '@farmfe/js-plugin-dts';
import tailwindcss from '@farmfe/js-plugin-tailwindcss';

export default defineConfig({
  plugins: ['@farmfe/plugin-react', dts(), tailwindcss()],
  compilation: {
    input: {
      index: 'index.ts',
    },
    output: {
      entryFilename: 'index.js',
      targetEnv: 'library-browser',
      format: 'esm',
      path: 'dist',
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
