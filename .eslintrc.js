module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react-hooks'],
    extends: [
      'airbnb', // or airbnb-base
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended', // 설치 한경우
      'plugin:import/errors', // 설치한 경우
      'plugin:import/warnings', // 설치한 경우
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    rules: {
      'prettier/prettier': 0,
      "no-use-before-define": "off",
      '@typescript-eslint/no-use-before-define': ['error'],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }]
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  };