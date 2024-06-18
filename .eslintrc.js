module.exports = {
  root: true,

  extends: ['@metamask/eslint-config'],

  parserOptions: {
    project: './tsconfig.json',
  },

  overrides: [
    {
      files: ['*.ts'],
      extends: ['@metamask/eslint-config-typescript'],
      rules: {
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/unbound-method': 'warn',
        'id-denylist': 'off',
        'id-length': 'off',
        // TODO: Move this to our shared config
        'no-invalid-this': 'off',
        'no-restricted-syntax': 'off',
        '@typescript-eslint/no-invalid-this': ['error'],
        '@typescript-eslint/restrict-template-expressions': 'off',
        'no-void': 'off', // Disable the no-void rule
      },
    },

    {
      files: ['*.js'],
      extends: ['@metamask/eslint-config-nodejs'],
    },

    {
      files: ['*.test.ts', './tests/*.ts'],
      extends: ['@metamask/eslint-config-jest'],
      rules: {
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        'id-denylist': 'off',
        'import/no-nodejs-modules': 'off',
        'no-restricted-globals': 'off',
        'no-void': 'off', // Disable the no-void rule for test files
      },
    },
  ],

  ignorePatterns: ['!.eslintrc.js', '!.prettierrc.js', 'dist/'],
};
