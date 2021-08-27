module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    semi: [2, 'never'],
  },
}
