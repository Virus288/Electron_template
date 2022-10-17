module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'erb',
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  rules: {
    'no-underscore-dangle': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'import/no-unresolved': 2,
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': 0,
    'no-param-reassign': 0,
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    'interface-over-type-literal': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-this-alias': [
      2,
      {
        allowedNames: ['self'],
      },
    ],
    'prettier/prettier': 2,
    'require-jsdoc': 0,
    'no-invalid-this': 0,
    'no-restricted-modules': 2,
    'no-var': 2,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
      },
    ],
    semi: 2,
    'no-trailing-spaces': 2,
    'prefer-const': 2,
    'no-throw-literal': 0,
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/typedef': 2,
    'class-methods-use-this': 0,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-prettier', 'react'],
  settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve('./.erb/configs/webpack.config.eslint.ts'),
      },
      typescript: {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
