// @ts-check
import astroParser from 'astro-eslint-parser';
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import astro from 'eslint-plugin-astro';

export default tseslint.config(
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  ...astro.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        projectServices: '/tsconfig.eslint.json',

        // For example, if you use a specific tsconfig.eslint.json for linting, you'd specify:
        tsconfigRootDir: import.meta.dirname,
        parser: tseslint.parser,
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
    },

    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },

  { ignores: ['dist', '.astro', '**/*.d.ts', '*.cjs', '*rss.xml.js'] },
  eslintConfigPrettier,
);
