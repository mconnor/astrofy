// @ts-check
import astroParser from 'astro-eslint-parser';
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import astro from 'eslint-plugin-astro';

const config = tseslint.config(
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  ...astro.configs.recommended,
  // {
  //   languageOptions: {
  //     parserOptions: {
  //       projectService: true,
  //       tsconfigRootDir: import.meta.dirname,
  //     },
  //   },
  // },

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

    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },

  { ignores: ['dist', '.astro', '*.cjs', '*rss.xml.js', 'src/env.d.ts'] },
  eslintConfigPrettier,
);

export default config;
