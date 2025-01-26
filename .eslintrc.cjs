/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    // 'prettier/prettier': 'error', // Ensure Prettier errors are shown
    // semi: ['error', 'always'], // Enforce semicolons
    // 'no-trailing-spaces': 'error', // Disallow trailing whitespace
    // 'space-before-blocks': 'error', // Require space before blocks
    // 'keyword-spacing': ['error', { before: true, after: true }], // Require spacing around keywords
    // 'comma-dangle': ['error', 'always-multiline'], // Enforce consistent use of trailing commas
    // indent: ['error', 2], // Enforce 2-space indentation
    // quotes: ['error', 'single'], // Enforce single quotes
    // Add other custom rules as needed
  },
};
