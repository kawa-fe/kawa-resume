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
