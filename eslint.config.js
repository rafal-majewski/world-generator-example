import stylisticPlugin from "@stylistic/eslint-plugin";
import * as TypescriptPlugin from "@typescript-eslint/eslint-plugin";
import * as TypescriptEslintParser from "@typescript-eslint/parser";
// @ts-expect-error - The plugin is typed incorrectly.
import {default as PerfectionistPlugin} from "eslint-plugin-perfectionist";
import * as SvelteEslintParser from "svelte-eslint-parser";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
	{
		files: ["**/*.js", "**/*.ts", "**/*.svelte"],
		languageOptions: {
			sourceType: "module",
		},
	},
	{
		files: ["**/*.ts", "**/*.js"],
		languageOptions: {
			ecmaVersion: 13,
			parser: TypescriptEslintParser,
			parserOptions: {
				extraFileExtensions: [".svelte"],
				project: "./tsconfig.json",
				tsconfigRootDir: ".",
			},
		},
	},
	{
		files: ["**/*.svelte"],
		languageOptions: {
			ecmaVersion: 13,
			parser: SvelteEslintParser,
			parserOptions: {
				extraFileExtensions: [".svelte"],
				parser: TypescriptEslintParser,
				project: "./tsconfig.json",
				tsconfigRootDir: ".",
			},
		},
	},
	{
		plugins: {
			"@stylistic": stylisticPlugin,
			// @ts-expect-error - The plugin is typed incorrectly.
			"@typescript-eslint": TypescriptPlugin,
			// The plugin is typed incorrectly.
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			perfectionist: PerfectionistPlugin,
		},
		rules: {
			"@stylistic/lines-between-class-members": [
				"warn",
				{
					enforce: [
						{
							blankLine: "always",
							next: "*",
							prev: "*",
						},
					],
				},
				{
					exceptAfterOverload: false,
					exceptAfterSingleLine: true,
				},
			],
			"@stylistic/object-curly-newline": [
				"warn",
				{
					ObjectExpression: {
						consistent: true,
						minProperties: 1,
						multiline: true,
					},
				},
			],
			"@stylistic/padding-line-between-statements": [
				"warn",
				{
					blankLine: "never",
					next: "singleline-const",
					prev: "singleline-const",
				},
				{
					blankLine: "never",
					next: "singleline-let",
					prev: "singleline-const",
				},
				{
					blankLine: "never",
					next: "singleline-const",
					prev: "singleline-let",
				},
				{
					blankLine: "never",
					next: "singleline-let",
					prev: "singleline-let",
				},
				{
					blankLine: "never",
					next: "expression",
					prev: "expression",
				},
				{
					blankLine: "always",
					next: "*",
					prev: "multiline-expression",
				},
				{
					blankLine: "always",
					next: "multiline-expression",
					prev: "*",
				},
				{
					blankLine: "always",
					next: "multiline-block-like",
					prev: "*",
				},
				{
					blankLine: "always",
					next: "*",
					prev: "multiline-block-like",
				},
				{
					blankLine: "always",
					next: "multiline-const",
					prev: "*",
				},
				{
					blankLine: "always",
					next: "*",
					prev: "multiline-const",
				},
			],
			"@stylistic/spaced-comment": [
				"warn",
				"always",
				{
					exceptions: [],
					markers: [],
				},
			],
			"@typescript-eslint/adjacent-overload-signatures": ["warn"],
			"@typescript-eslint/array-type": [
				"warn",
				{
					default: "array",
					readonly: "array",
				},
			],
			"@typescript-eslint/await-thenable": ["warn"],
			"@typescript-eslint/ban-ts-comment": [
				"warn",
				{
					minimumDescriptionLength: 1,
					"ts-check": true,
					"ts-expect-error": "allow-with-description",
					"ts-ignore": true,
					"ts-nocheck": true,
				},
			],
			"@typescript-eslint/ban-tslint-comment": ["warn"],
			"@typescript-eslint/class-literal-property-style": ["warn", "fields"],
			"@typescript-eslint/class-methods-use-this": [
				"warn",
				{
					enforceForClassFields: true,
					exceptMethods: [],
					ignoreClassesThatImplementAnInterface: false,
					ignoreOverrideMethods: false,
				},
			],
			"@typescript-eslint/consistent-type-assertions": [
				"warn",
				{
					assertionStyle: "as",
					objectLiteralTypeAssertions: "never",
				},
			],
			"@typescript-eslint/consistent-type-exports": [
				"warn",
				{
					fixMixedExportsWithInlineTypeSpecifier: true,
				},
			],
			"@typescript-eslint/consistent-type-imports": [
				"warn",
				{
					disallowTypeAnnotations: true,
					fixStyle: "separate-type-imports",
					prefer: "type-imports",
				},
			],
			"@typescript-eslint/dot-notation": [
				"warn",
				{
					allowIndexSignaturePropertyAccess: true,
					allowKeywords: true,
					allowPrivateClassPropertyAccess: false,
					allowProtectedClassPropertyAccess: false,
				},
			],
			"@typescript-eslint/explicit-module-boundary-types": [
				"warn",
				{
					allowArgumentsExplicitlyTypedAsAny: false,
					allowDirectConstAssertionInArrowFunctions: false,
					allowedNames: [],
					allowHigherOrderFunctions: false,
					allowTypedFunctionExpressions: false,
				},
			],
			"@typescript-eslint/init-declarations": ["warn", "always"],
			"@typescript-eslint/member-ordering": [
				"warn",
				{
					classes: {
						memberTypes: "never",
						order: "alphabetically",
					},
					classExpressions: {
						memberTypes: "never",
						order: "alphabetically",
					},
					default: {
						memberTypes: "never",
						order: "alphabetically",
					},
					interfaces: {
						memberTypes: "never",
						order: "alphabetically",
					},
					typeLiterals: {
						memberTypes: "never",
						order: "alphabetically",
					},
				},
			],
			"@typescript-eslint/method-signature-style": ["warn", "method"],
			"@typescript-eslint/naming-convention": [
				"warn",

				{
					format: ["camelCase"],
					selector: ["classMethod", "function", "objectLiteralMethod", "typeMethod"],
				},
				{
					format: ["PascalCase"],
					selector: ["class", "enum", "enumMember", "interface", "typeAlias", "typeParameter"],
				},
				{
					format: ["PascalCase"],
					modifiers: ["namespace"],
					selector: ["import"],
				},
			],
			"@typescript-eslint/no-array-constructor": ["warn"],
			"@typescript-eslint/no-base-to-string": [
				"warn",
				{
					ignoredTypeNames: [],
				},
			],
			"@typescript-eslint/no-confusing-void-expression": [
				"warn",
				{
					ignoreArrowShorthand: false,
					ignoreVoidOperator: false,
				},
			],
			"@typescript-eslint/no-duplicate-enum-values": ["warn"],
			"@typescript-eslint/no-duplicate-type-constituents": [
				"warn",
				{
					ignoreIntersections: false,
					ignoreUnions: false,
				},
			],
			"@typescript-eslint/no-dynamic-delete": ["warn"],
			"@typescript-eslint/no-empty-function": [
				"warn",
				{
					allow: [],
				},
			],
			"@typescript-eslint/no-empty-interface": [
				"warn",
				{
					allowSingleExtends: false,
				},
			],
			"@typescript-eslint/no-empty-object-type": [
				"warn",
				{
					allowInterfaces: "never",
					allowObjectTypes: "never",
				},
			],
			"@typescript-eslint/no-explicit-any": [
				"warn",
				{
					fixToUnknown: false,
					ignoreRestArgs: false,
				},
			],
			"@typescript-eslint/no-extra-non-null-assertion": ["warn"],
			"@typescript-eslint/no-extraneous-class": [
				"warn",
				{
					allowConstructorOnly: false,
					allowEmpty: false,
					allowStaticOnly: false,
					allowWithDecorator: false,
				},
			],
			"@typescript-eslint/no-floating-promises": [
				"warn",
				{
					ignoreIIFE: false,
					ignoreVoid: false,
				},
			],
			"@typescript-eslint/no-for-in-array": ["warn"],
			"@typescript-eslint/no-implied-eval": ["warn"],
			"@typescript-eslint/no-import-type-side-effects": ["warn"],
			"@typescript-eslint/no-inferrable-types": [
				"warn",
				{
					ignoreParameters: false,
					ignoreProperties: false,
				},
			],
			"@typescript-eslint/no-invalid-void-type": [
				"warn",
				{
					allowAsThisParameter: false,
					allowInGenericTypeArguments: true,
				},
			],
			"@typescript-eslint/no-loop-func": ["warn"],
			"@typescript-eslint/no-loss-of-precision": ["error"],
			"@typescript-eslint/no-meaningless-void-operator": [
				"warn",
				{
					checkNever: true,
				},
			],
			"@typescript-eslint/no-misused-promises": [
				"warn",
				{
					checksConditionals: true,
					checksSpreads: true,
					checksVoidReturn: {
						arguments: true,
						attributes: true,
						properties: true,
						returns: true,
						variables: true,
					},
				},
			],
			"@typescript-eslint/no-mixed-enums": ["warn"],
			"@typescript-eslint/no-namespace": [
				"warn",
				{
					allowDeclarations: false,
					allowDefinitionFiles: false,
				},
			],
			"@typescript-eslint/no-non-null-asserted-nullish-coalescing": ["warn"],
			"@typescript-eslint/no-non-null-asserted-optional-chain": ["warn"],
			"@typescript-eslint/no-non-null-assertion": ["warn"],
			"@typescript-eslint/no-redeclare": [
				"warn",
				{
					ignoreDeclarationMerge: false,
				},
			],
			"@typescript-eslint/no-redundant-type-constituents": ["warn"],
			"@typescript-eslint/no-require-imports": ["warn"],
			"@typescript-eslint/no-shadow": [
				"warn",
				{
					allow: [],
					builtinGlobals: true,
					hoist: "all",
					ignoreFunctionTypeParameterNameValueShadow: false,
					ignoreOnInitialization: true,
					ignoreTypeValueShadow: false,
				},
			],
			"@typescript-eslint/no-this-alias": ["warn"],
			"@typescript-eslint/no-unnecessary-boolean-literal-compare": [
				"warn",
				{
					allowComparingNullableBooleansToFalse: true,
					allowComparingNullableBooleansToTrue: true,
				},
			],
			"@typescript-eslint/no-unnecessary-condition": [
				"warn",
				{
					allowConstantLoopConditions: false,
					allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
				},
			],
			"@typescript-eslint/no-unnecessary-type-assertion": [
				"warn",
				{
					typesToIgnore: [],
				},
			],
			"@typescript-eslint/no-unnecessary-type-constraint": ["warn"],
			"@typescript-eslint/no-unsafe-argument": ["warn"],
			"@typescript-eslint/no-unsafe-assignment": ["warn"],
			"@typescript-eslint/no-unsafe-call": ["warn"],
			"@typescript-eslint/no-unsafe-declaration-merging": ["warn"],
			"@typescript-eslint/no-unsafe-enum-comparison": ["warn"],
			"@typescript-eslint/no-unsafe-function-type": ["warn"],
			"@typescript-eslint/no-unsafe-member-access": ["warn"],
			"@typescript-eslint/no-unsafe-return": ["warn"],
			"@typescript-eslint/no-unsafe-unary-minus": ["warn"],
			"@typescript-eslint/no-unused-expressions": [
				"warn",
				{
					allowShortCircuit: false,
					allowTaggedTemplates: false,
					allowTernary: false,
					enforceForJSX: true,
				},
			],
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					args: "all",
					caughtErrors: "all",
					ignoreRestSiblings: false,
					vars: "all",
				},
			],
			"@typescript-eslint/no-use-before-define": [
				"warn",
				{
					allowNamedExports: false,
					classes: true,
					enums: true,
					functions: true,
					ignoreTypeReferences: false,
					typedefs: true,
					variables: true,
				},
			],
			"@typescript-eslint/no-useless-constructor": ["warn"],
			"@typescript-eslint/no-useless-empty-export": ["warn"],
			"@typescript-eslint/no-var-requires": ["warn"],
			"@typescript-eslint/no-wrapper-object-types": ["warn"],
			"@typescript-eslint/non-nullable-type-assertion-style": ["warn"],
			"@typescript-eslint/only-throw-error": [
				"warn",
				{
					allowThrowingAny: false,
					allowThrowingUnknown: false,
				},
			],
			"@typescript-eslint/parameter-properties": [
				"warn",
				{
					allow: [],
					prefer: "class-property",
				},
			],
			"@typescript-eslint/prefer-as-const": ["warn"],
			"@typescript-eslint/prefer-enum-initializers": ["warn"],
			"@typescript-eslint/prefer-for-of": ["warn"],
			"@typescript-eslint/prefer-function-type": ["warn"],
			"@typescript-eslint/prefer-includes": ["warn"],
			"@typescript-eslint/prefer-literal-enum-member": [
				"warn",
				{
					allowBitwiseExpressions: false,
				},
			],
			"@typescript-eslint/prefer-nullish-coalescing": [
				"warn",
				{
					allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
					ignoreConditionalTests: false,
					ignoreMixedLogicalExpressions: false,
					ignorePrimitives: {
						bigint: false,
						boolean: false,
						number: false,
						string: false,
					},
					ignoreTernaryTests: false,
				},
			],
			"@typescript-eslint/prefer-optional-chain": [
				"warn",
				{
					allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: false,
					checkAny: true,
					checkBigInt: true,
					checkBoolean: true,
					checkNumber: true,
					checkString: true,
					checkUnknown: true,
					requireNullish: false,
				},
			],
			"@typescript-eslint/prefer-readonly": [
				"warn",
				{
					onlyInlineLambdas: false,
				},
			],
			"@typescript-eslint/prefer-reduce-type-parameter": ["warn"],
			"@typescript-eslint/prefer-regexp-exec": ["warn"],
			"@typescript-eslint/prefer-return-this-type": ["warn"],
			"@typescript-eslint/prefer-string-starts-ends-with": ["warn"],
			"@typescript-eslint/prefer-ts-expect-error": ["warn"],
			"@typescript-eslint/promise-function-async": [
				"warn",
				{
					allowAny: false,
					allowedPromiseNames: [],
					checkArrowFunctions: true,
					checkFunctionDeclarations: true,
					checkFunctionExpressions: true,
					checkMethodDeclarations: true,
				},
			],
			"@typescript-eslint/require-array-sort-compare": [
				"warn",
				{
					ignoreStringArrays: false,
				},
			],
			"@typescript-eslint/require-await": ["warn"],
			"@typescript-eslint/restrict-plus-operands": [
				"warn",
				{
					allowAny: false,
					allowBoolean: false,
					allowNullish: false,
					allowNumberAndString: false,
					allowRegExp: false,
					skipCompoundAssignments: false,
				},
			],
			"@typescript-eslint/restrict-template-expressions": [
				"warn",
				{
					allowAny: false,
					allowBoolean: false,
					allowNever: false,
					allowNullish: false,
					allowNumber: false,
					allowRegExp: false,
				},
			],
			"@typescript-eslint/return-await": ["warn", "always"],
			"@typescript-eslint/sort-type-constituents": [
				"warn",
				{
					checkIntersections: true,
					checkUnions: true,
					groupOrder: [],
				},
			],
			"@typescript-eslint/strict-boolean-expressions": [
				"warn",
				{
					allowAny: false,
					allowNullableBoolean: false,
					allowNullableEnum: false,
					allowNullableNumber: false,
					allowNullableObject: false,
					allowNullableString: false,
					allowNumber: false,
					allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
					allowString: false,
				},
			],
			"@typescript-eslint/switch-exhaustiveness-check": [
				"warn",
				{
					allowDefaultCaseForExhaustiveSwitch: false,
					requireDefaultForNonUnion: true,
				},
			],
			"@typescript-eslint/triple-slash-reference": [
				"warn",
				{
					lib: "never",
					path: "never",
					types: "never",
				},
			],
			"@typescript-eslint/unbound-method": [
				"warn",
				{
					ignoreStatic: false,
				},
			],
			"@typescript-eslint/unified-signatures": [
				"warn",
				{
					ignoreDifferentlyNamedParameters: false,
				},
			],
			"array-callback-return": [
				"warn",
				{
					allowImplicit: false,
					allowVoid: false,
					checkForEach: true,
				},
			],
			"arrow-body-style": [
				"warn",
				"as-needed",
				{
					requireReturnForObjectLiteral: false,
				},
			],
			"block-scoped-var": ["warn"],
			"consistent-return": [
				"warn",
				{
					treatUndefinedAsUnspecified: false,
				},
			],
			curly: ["warn", "all"],
			eqeqeq: [
				"warn",
				"always",
				{
					null: "always",
				},
			],
			"for-direction": ["warn"],
			"func-style": [
				"warn",
				"declaration",
				{
					allowArrowFunctions: true,
				},
			],
			"getter-return": ["warn"],
			"grouped-accessor-pairs": ["warn", "getBeforeSet"],
			"logical-assignment-operators": [
				"warn",
				"always",
				{
					enforceForIfStatements: true,
				},
			],
			"max-classes-per-file": [
				"warn",
				{
					ignoreExpressions: false,
					max: 1,
				},
			],
			"new-cap": [
				"off",
				{
					capIsNew: true,
					capIsNewExceptions: [],
					newIsCap: true,
					newIsCapExceptions: [],
					properties: true,
				},
			],
			"no-array-constructor": ["warn"],
			"no-async-promise-executor": ["warn"],
			"no-class-assign": ["warn"],
			"no-compare-neg-zero": ["warn"],
			"no-cond-assign": ["warn", "always"],
			"no-constant-binary-expression": ["warn"],
			"no-constant-condition": [
				"warn",
				{
					checkLoops: true,
				},
			],
			"no-constructor-return": ["warn"],
			"no-debugger": ["warn"],
			"no-delete-var": ["warn"],
			"no-dupe-else-if": ["warn"],
			"no-duplicate-case": ["warn"],
			"no-duplicate-imports": [
				"warn",
				{
					includeExports: true,
				},
			],
			"no-else-return": [
				"warn",
				{
					allowElseIf: false,
				},
			],
			"no-empty": ["warn"],
			"no-empty-character-class": ["warn"],
			"no-empty-pattern": ["warn"],
			"no-empty-static-block": ["warn"],
			"no-eval": ["warn"],
			"no-ex-assign": ["warn"],
			"no-extend-native": ["warn"],
			"no-extra-bind": ["warn"],
			"no-extra-boolean-cast": [
				"warn",
				{
					enforceForLogicalOperands: true,
				},
			],
			"no-extra-label": ["warn"],
			"no-global-assign": ["warn"],
			"no-implicit-coercion": ["warn"],
			"no-implied-eval": ["warn"],
			"no-inline-comments": ["warn", {}],
			"no-inner-declarations": ["warn", "both"],
			"no-invalid-regexp": ["error"],
			"no-invalid-this": [
				"warn",
				{
					capIsConstructor: true,
				},
			],
			"no-irregular-whitespace": [
				"warn",
				{
					skipComments: true,
					skipJSXText: true,
					skipRegExps: true,
					skipStrings: true,
					skipTemplates: true,
				},
			],
			"no-labels": [
				"warn",
				{
					allowLoop: false,
					allowSwitch: false,
				},
			],
			"no-lone-blocks": ["warn"],
			"no-lonely-if": ["warn"],
			"no-misleading-character-class": ["warn"],
			"no-multi-assign": [
				"warn",
				{
					ignoreNonDeclaration: false,
				},
			],
			"no-multi-str": ["warn"],
			"no-negated-condition": ["warn"],
			"no-nested-ternary": ["warn"],
			"no-new": ["warn"],
			"no-new-func": ["warn"],
			"no-new-wrappers": ["warn"],
			"no-object-constructor": ["warn"],
			"no-param-reassign": [
				"warn",
				{
					props: false,
				},
			],
			"no-plusplus": [
				"warn",
				{
					allowForLoopAfterthoughts: false,
				},
			],
			"no-promise-executor-return": [
				"warn",
				{
					allowVoid: false,
				},
			],
			"no-prototype-builtins": ["warn"],
			"no-return-assign": ["warn", "always"],
			"no-self-assign": [
				"warn",
				{
					props: true,
				},
			],
			"no-self-compare": ["warn"],
			"no-sequences": [
				"warn",
				{
					allowInParentheses: false,
				},
			],
			"no-shadow-restricted-names": ["warn"],
			"no-sparse-arrays": ["warn"],
			"no-ternary": ["warn"],
			"no-undefined": ["warn"],
			"no-underscore-dangle": [
				"warn",
				{
					allow: [],
					allowAfterSuper: false,
					allowAfterThis: false,
					allowAfterThisConstructor: false,
					allowFunctionParams: false,
					allowInArrayDestructuring: false,
					allowInObjectDestructuring: false,
					enforceInClassFields: false,
					enforceInMethodNames: false,
				},
			],
			"no-unmodified-loop-condition": ["warn"],
			"no-unneeded-ternary": [
				"warn",
				{
					defaultAssignment: false,
				},
			],
			"no-unreachable-loop": ["warn"],
			"no-unsafe-finally": ["warn"],
			"no-unused-labels": ["warn"],
			"no-unused-private-class-members": ["warn"],
			"no-useless-backreference": ["warn"],
			"no-useless-call": ["warn"],
			"no-useless-catch": ["warn"],
			"no-useless-computed-key": [
				"warn",
				{
					enforceForClassMembers: true,
				},
			],
			"no-useless-concat": ["warn"],
			"no-useless-constructor": ["warn"],
			"no-useless-escape": ["warn"],
			"no-useless-rename": [
				"warn",
				{
					ignoreDestructuring: false,
					ignoreExport: false,
					ignoreImport: false,
				},
			],
			"no-useless-return": ["warn"],
			"no-var": ["warn"],
			"no-void": [
				"warn",
				{
					allowAsStatement: false,
				},
			],
			"no-with": ["warn"],
			"object-shorthand": [
				"warn",
				"always",
				{
					avoidExplicitReturnArrows: false,
					avoidQuotes: false,
					ignoreConstructors: false,
				},
			],
			"one-var": ["warn", "never"],
			"operator-assignment": ["warn", "always"],
			"perfectionist/sort-array-includes": [
				"warn",
				{
					groupKind: "literals-first",
					ignoreCase: false,
					order: "asc",
					type: "natural",
				},
			],
			"perfectionist/sort-classes": [
				"warn",
				{
					customGroups: [],
					groups: [],
					ignoreCallbackDependenciesPatterns: [],
					ignoreCase: false,
					locales: ["en"],
					newlinesBetween: "ignore",
					order: "asc",
					partitionByComment: false,
					partitionByNewLine: false,
					specialCharacters: "keep",
					type: "natural",
				},
			],
			"perfectionist/sort-enums": [
				"warn",
				{
					ignoreCase: false,
					order: "asc",
					partitionByComment: false,
					type: "natural",
				},
			],
			"perfectionist/sort-exports": [
				"warn",
				{
					ignoreCase: false,
					order: "asc",
					type: "natural",
				},
			],
			"perfectionist/sort-imports": [
				"warn",
				{
					customGroups: {},
					groups: [],
					ignoreCase: false,
					internalPattern: [],
					newlinesBetween: "ignore",
					order: "asc",
					type: "natural",
				},
			],
			"perfectionist/sort-interfaces": [
				"warn",
				{
					customGroups: {},
					groupKind: "mixed",
					groups: [],
					ignoreCase: false,
					ignorePattern: [],
					order: "asc",
					partitionByNewLine: false,
					type: "natural",
				},
			],
			"perfectionist/sort-intersection-types": [
				"warn",
				{
					groups: [],
					ignoreCase: false,
					order: "asc",
					type: "natural",
				},
			],
			"perfectionist/sort-maps": [
				"warn",
				{
					ignoreCase: false,
					order: "asc",
					type: "natural",
				},
			],
			"perfectionist/sort-named-exports": [
				"warn",
				{
					groupKind: "mixed",
					ignoreCase: false,
					order: "asc",
					type: "natural",
				},
			],
			"perfectionist/sort-named-imports": [
				"warn",
				{
					groupKind: "mixed",
					ignoreAlias: false,
					ignoreCase: false,
					order: "asc",
					type: "natural",
				},
			],
			"perfectionist/sort-object-types": [
				"warn",
				{
					customGroups: {},
					groupKind: "mixed",
					groups: [],
					ignoreCase: false,
					order: "asc",
					partitionByNewLine: false,
					type: "natural",
				},
			],
			"perfectionist/sort-objects": [
				"warn",
				{
					customGroups: {},
					destructureOnly: false,
					groups: [],
					ignoreCase: false,
					ignorePattern: [],
					order: "asc",
					partitionByComment: false,
					partitionByNewLine: false,
					type: "natural",
				},
			],
			"perfectionist/sort-union-types": [
				"warn",
				{
					groups: [],
					ignoreCase: false,
					order: "asc",
					type: "natural",
				},
			],
			"perfectionist/sort-variable-declarations": [
				"warn",
				{
					ignoreCase: false,
					order: "asc",
					type: "natural",
				},
			],
			"prefer-arrow-callback": [
				"warn",
				{
					allowNamedFunctions: false,
					allowUnboundThis: false,
				},
			],
			"prefer-const": [
				"warn",
				{
					destructuring: "any",
					ignoreReadBeforeAssign: false,
				},
			],
			"prefer-destructuring": [
				"warn",
				{
					AssignmentExpression: {
						array: true,
						object: true,
					},
					VariableDeclarator: {
						array: true,
						object: true,
					},
				},
				{
					enforceForRenamedProperties: false,
				},
			],
			"prefer-exponentiation-operator": ["warn"],
			"prefer-named-capture-group": ["warn"],
			"prefer-numeric-literals": ["warn"],
			"prefer-object-has-own": ["warn"],
			"prefer-object-spread": ["warn"],
			"prefer-promise-reject-errors": [
				"warn",
				{
					allowEmptyReject: false,
				},
			],
			"prefer-regex-literals": [
				"warn",
				{
					disallowRedundantWrapping: true,
				},
			],
			"prefer-rest-params": ["warn"],
			"prefer-spread": ["warn"],
			"prefer-template": ["warn"],
			radix: ["warn", "always"],
			"require-atomic-updates": [
				"warn",
				{
					allowProperties: false,
				},
			],
			"require-unicode-regexp": ["warn"],
			"require-yield": ["warn"],
			"sort-imports": [
				"warn",
				{
					allowSeparatedGroups: false,
					ignoreCase: false,
					ignoreDeclarationSort: true,
					ignoreMemberSort: true,
					memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
				},
			],
			"sort-keys": [
				"warn",
				"asc",
				{
					allowLineSeparatedGroups: false,
					caseSensitive: false,
					minKeys: 2,
					natural: false,
				},
			],
			"sort-vars": [
				"warn",
				{
					ignoreCase: false,
				},
			],
			strict: ["warn", "never"],
			"symbol-description": ["warn"],
			"use-isnan": ["warn"],
			"valid-typeof": ["warn"],
			"vars-on-top": ["warn"],
			yoda: [
				"warn",
				"never",
				{
					exceptRange: false,
					onlyEquality: false,
				},
			],
		},
	},
	{
		files: ["**/*.ts", "**/*.svelte"],
		rules: {
			"@typescript-eslint/explicit-function-return-type": [
				"warn",
				{
					allowConciseArrowFunctionExpressionsStartingWithVoid: false,
					allowDirectConstAssertionInArrowFunctions: false,
					allowedNames: [],
					allowExpressions: false,
					allowFunctionsWithoutTypeParameters: false,
					allowHigherOrderFunctions: false,
					allowIIFEs: false,
					allowTypedFunctionExpressions: false,
				},
			],
			"@typescript-eslint/explicit-member-accessibility": [
				"warn",
				{
					accessibility: "explicit",
					ignoredMethodNames: [],
					overrides: {},
				},
			],
			"@typescript-eslint/typedef": [
				"warn",
				{
					arrayDestructuring: false,
					arrowParameter: true,
					memberVariableDeclaration: true,
					objectDestructuring: false,
					parameter: true,
					propertyDeclaration: true,
					variableDeclaration: false,
					variableDeclarationIgnoreFunction: false,
				},
			],
		},
	},
	{
		ignores: [".git/", "node_modules/", ".svelte-kit/"],
	},
];

export default eslintConfig;
