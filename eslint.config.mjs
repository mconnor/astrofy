// @ts-check
import astroParser from 'astro-eslint-parser';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import astro from 'eslint-plugin-astro';

const config = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...astro.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      // ecmaVersion: 'latest',
      // sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        // projectService: true,
        // tsconfigRootDir: import.meta.dirname,
        project: true,

        // parser: tseslint.parser,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
    },
  },
  {
    files: ['*.config.*'],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    files: ['src/**/*.astro'],
    ...tseslint.configs.disableTypeChecked,
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        project: true,
        extraFileExtensions: ['.astro'],
        // projectService: true,
        // tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  {
    ignores: [
      'dist',
      '.astro',
      '*.cjs',
      '*rss.xml.js',
      'src/env.d.ts',
      ' src/components/_Hamburger.astro',
      'cache-directory/',
      '*.d.ts',
      '**/temp.js',
      '*lock.yaml',
      '.vercel/',
      ' test/',
    ],
  },
  eslintConfigPrettier,
);

export default config;
