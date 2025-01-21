import type {QueryString} from "./QueryString.ts";
export function computeQueryStringFromSearchParams(searchParams: URLSearchParams): QueryString {
	if (searchParams.size === 0) {
		return "";
	}
	const searchParamsString = searchParams.toString();
	return `?${searchParamsString}`;
}
