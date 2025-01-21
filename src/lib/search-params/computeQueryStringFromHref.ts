import type {QueryString} from "./QueryString.ts";
export function computeQueryStringFromHref(href: string): QueryString {
	const {queryString} = (/^(?:[^?]*)(?<queryString>(?:\?.*)?)$/u.exec(href) as RegExpExecArray)
		.groups as Readonly<{
		queryString: QueryString;
	}>;
	return queryString;
}
