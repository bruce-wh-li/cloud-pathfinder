/*eslint no-undef: "warn"*/
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    // ignorePatterns: [
    //     ".vuepress/dist/*",
    //     ".vuepress/components/*",
    //     ".vuepress/.temp/*",
    //     ".vuepress/.cache/*"
    // ]
};