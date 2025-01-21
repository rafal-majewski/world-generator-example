import {computeQueryStringFromHref} from "./computeQueryStringFromHref.ts";
import {computeQueryStringFromSearchParams} from "./computeQueryStringFromSearchParams.ts";
import type {FailureSearchParamsFromUrlValidationResult} from "./FailureSearchParamsFromUrlValidationResult.ts";
import {failureSearchParamsFromUrlValidationResultStatus} from "./failureSearchParamsFromUrlValidationResultStatus.ts";
import type {SearchParamsValidator} from "./SearchParamsValidator.ts";
import type {SuccessSearchParamsFromUrlValidationResult} from "./SuccessSearchParamsFromUrlValidationResult.ts";
import {successSearchParamsFromUrlValidationResultStatus} from "./successSearchParamsFromUrlValidationResultStatus.ts";
import type {SupportedSearchParamsFromUrlValidationResult} from "./SupportedSearchParamsFromUrlValidationResult.ts";
export function validateSearchParamsFromUrl<Datum>(
	url: URL,
	validator: SearchParamsValidator<Datum>,
): SupportedSearchParamsFromUrlValidationResult<Datum> {
	const {datum, correctedSearchParams} = validator(url.searchParams);
	const queryString = computeQueryStringFromHref(url.href);
	const correctedQueryString = computeQueryStringFromSearchParams(correctedSearchParams);
	if (queryString === correctedQueryString) {
		return {
			status: successSearchParamsFromUrlValidationResultStatus,
			datum,
		} satisfies SuccessSearchParamsFromUrlValidationResult<Datum>;
	}
	const correctedUrl = new URL(url);
	correctedUrl.search = correctedQueryString;
	return {
		status: failureSearchParamsFromUrlValidationResultStatus,
		correctedUrl,
	} satisfies FailureSearchParamsFromUrlValidationResult;
}
