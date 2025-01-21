import type {failureSearchParamsFromUrlValidationResultStatus} from "./failureSearchParamsFromUrlValidationResultStatus.ts";
import type {SearchParamsFromUrlValidationResult} from "./SearchParamsFromUrlValidationResult.ts";
export type FailureSearchParamsFromUrlValidationResult = SearchParamsFromUrlValidationResult<
	typeof failureSearchParamsFromUrlValidationResultStatus
> &
	Readonly<{
		correctedUrl: URL;
	}>;
