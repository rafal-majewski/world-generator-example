import createNodeAdapter from "@sveltejs/adapter-node";
import {vitePreprocess as createVitePreprocess} from "@sveltejs/vite-plugin-svelte";
const nodeAdapter = createNodeAdapter();
const vitePreprocess = createVitePreprocess();

/** @type {import("@sveltejs/kit").Config} */
const svelteConfig = {
	kit: {
		adapter: nodeAdapter,
		files: {
			assets: "./src/static",
		},
	},
	preprocess: vitePreprocess,
};

export default svelteConfig;
