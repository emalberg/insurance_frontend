import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    reporters: ['html'],
    setupFiles: './setupTest.ts',
    globals: true,
    coverage: {
      enabled: true,
      exclude: [
        'node_modules/',
        '.next/',
        '.storybook/',
        'html/',
        'src/**/*.stories.*',
        'src/**/*.story.*',
        'dist/',
        'build/',
        '**/test-utils/**',

        // config files
        'eslint.config.mjs',
        'next-env.d.ts',
        'next.config.ts',
        'postcss.config.mjs',
        'vitest.config.*',
      ],
    },
  },
});
