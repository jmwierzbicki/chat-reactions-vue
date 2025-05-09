module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
	},
	extends: [
		"plugin:vue/essential",
		"plugin:vue/recommended",
		"eslint:recommended",
	],
	parserOptions: {
		parser: "babel-eslint",
	},
	plugins: ["vue"],
	rules: {
		"no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
		"vue/max-attributes-per-line": [
			"error",
			{
				singleline: {
					max: 1,
				},
				multiline: {
					max: 1,
				},
			},
		],
		"vue/html-indent": [
			"error",
			4,
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: [],
			},
		],
		"vue/no-multi-spaces": "error",
		"vue/component-tags-order": [
			"error",
			{
				order: ["template", "script", "style"],
			},
		],
		// Enforce hyphenation of attributes (e.g., kebab-case)
		"vue/attribute-hyphenation": ["error", "always"],
	},
};
