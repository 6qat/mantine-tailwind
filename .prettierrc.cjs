module.exports = {
  ...require('eslint-config-mantine/.prettierrc.js'),
  trailingComma: 'es5',
  semi: true,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
};
