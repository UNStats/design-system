module.exports = {
  extends: [
    'plugin:shopify/esnext',
    'plugin:shopify/react',
    'plugin:shopify/node',
    'plugin:shopify/prettier',
  ],
  rules: {
    'id-length': 'off',
    'babel/object-curly-spacing': ['error', 'always'],
    'shopify/jsx-no-hardcoded-content': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
