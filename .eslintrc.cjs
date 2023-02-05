module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [ // then, enable whichever type-aware rules you want to use
    'plugin:svelte/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier'
  ],
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte'],
  },
  rules: {
  },
  settings: {
    'svelte3/typescript': true
  }
}
