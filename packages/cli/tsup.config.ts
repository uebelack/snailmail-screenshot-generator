import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  platform: 'node',
  target: 'node18',
  shims: true,
  // Keep all dependencies external - they'll be installed when package is installed
  external: [
    'commander',
    'chalk',
    'ora',
    'prompts',
    'get-port',
    'playwright',
    'vite',
  ],
});
