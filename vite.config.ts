import {sveltekit as createSvelteKitPlugin} from "@sveltejs/kit/vite";
const svelteKitPlugin = await createSvelteKitPlugin();

/** @type {import("vite").UserConfig} */
const viteConfig = {
	plugins: [svelteKitPlugin],
};

export default viteConfig;
