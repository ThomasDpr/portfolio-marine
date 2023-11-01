module.exports = {
    plugins: [
        'prettier-plugin-tailwindcss',
        '@trivago/prettier-plugin-sort-imports',
    ],
    singleQuote: true,
    tabWidth: 4,
    useTabs: false,
    trailingComma: 'all',
    arrowParens: 'avoid',
    printWidth: 80,
    semi: true,
    endOfLine: 'auto',
    bracketSpacing: true,
    bracketSameLine: true,
    importOrder: [
        '^components/(.*)$',
        '<THIRD_PARTY_MODULES>',
        '^[./]',
        '^@/public/(.*)$',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
