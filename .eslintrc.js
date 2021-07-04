module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:jsx-a11y/recommended',
		'airbnb',
		'airbnb/hooks',
		'prettier',
	],
	plugins: ['react'],
	rules: {
		// indent/line-break
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-one-expression-per-line': ['off'],
		'operator-linebreak': ['off'],
		'no-tabs': ['off'],
		'linebreak-style': ['error', 'windows'],

		// overrides: structure
		'import/prefer-default-export': ['off'],
		'react/jsx-filename-extension': ['off'],
		'import/no-cycle': ['off'],

		// overrides: code
		'no-param-reassign': ['off'],
		'react/prop-types': ['off'],
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], // defaults to error always
		'prefer-template': ['off'],
		'no-use-before-define': ['error', { functions: false }], // disable for functions as they are hoisted so this is safe

		// overrides: style
		'arrow-parens': ['off'],
		'no-confusing-arrow': ['off'],
		'comma-dangle': ['off'],
		'max-len': ['off'],
		'jsx-quotes': ['error', 'prefer-single'],
		'object-curly-spacing': ['error', 'always'],
		'object-curly-newline': ['off'],
		'arrow-body-style': ['off'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		// overrides: accesibility
		'jsx-a11y/label-has-associated-control': ['off'],
		'jsx-a11y/label-has-for': ['off'],
		'no-nested-ternary': 'off',
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
}
