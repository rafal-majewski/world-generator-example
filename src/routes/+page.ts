import {redirect} from "@sveltejs/kit";
import type {PageLoad} from "./$types.js";
export const load: PageLoad = async ({url}) => {
	if (url.searchParams.size !== 0) {
		const newUrl = new URL(url);
		newUrl.search = "";
		redirect(307, newUrl);
	}
};
