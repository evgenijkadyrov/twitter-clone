module.exports = {
	root: true,
	//env: { browser: true, es2020: true },
	extends: [
		'airbnb',
		'airbnb/hooks',
		'airbnb-typescript',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.d.ts'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			parserOptions: {
				project: './tsconfig.json',
				ecmaVersion: 2021,
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
	],

	plugins: ['@typescript-eslint', 'react', 'simple-import-sort', 'import', 'prettier'],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	rules: {
		'react-refresh/only-export-components': 'off',
		'dot-notation': 'off',
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					['^react', '^@?\\w'],
					['^(@|components)(/.*|$)'],
					['^\\u0000'],
					['^\\.\\.(?!/?$)', '^\\.\\./?$'],
					['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
					['^.+\\.?(css)$'],
				],
			},
		],
		'react/react-in-jsx-scope': 'off',
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'off',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'import/prefer-default-export': 'off',
		//'@typescript-eslint/no-unsafe-assignment': 'error',
	},
};
