module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: ['prettier', 'plugin:node/recommended'],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: '2018',
    },
    rules: {
        'prettier/prettier': 'error',
        'no-unused-vars': 'warn',
        'no-console': 'off',
        'func-names': 'off',
        'no-plusplus': 'off',
        'no-process-exit': 'off',
        'class-methods-use-this': 'off',
    },
};
