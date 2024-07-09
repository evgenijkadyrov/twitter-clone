module.exports = {
	root: true,
	extends: [
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
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
		},
	],

	plugins: ['@typescript-eslint', 'react', 'simple-import-sort', 'import', 'prettier'],
	parserOptions: {
		project: './tsconfig.json',
		ecmaVersion: 'latest',
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
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				'': 'never',
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
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
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksVoidReturn: false,
			},
		],
	},
};
