import type {SearchParamsValidationResult} from "./SearchParamsValidationResult.ts";
export type SearchParamsValidator<Datum> = (
	searchParams: URLSearchParams,
) => SearchParamsValidationResult<Datum>;
