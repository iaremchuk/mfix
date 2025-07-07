module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    // Add any custom rules here
    'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
    'no-console': ['error', { allow: ['warn', 'error'] }]
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
