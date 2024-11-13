import type {UserConfig} from "@commitlint/types";

export default {
	defaultIgnores: true,
	extends: [],
	ignores: [],
	rules: {
		"scope-empty": [2, "always"],
		"subject-empty": [2, "never"],
		"type-case": [2, "always", "lower-case"],
		"type-empty": [2, "never"],
		"type-enum": [2, "always", ["chore", "feature", "fix"]],
	},
} as const satisfies UserConfig;
