import type {FailureSearchParamsFromUrlValidationResult} from "./FailureSearchParamsFromUrlValidationResult.js";
import type {SuccessSearchParamsFromUrlValidationResult} from "./SuccessSearchParamsFromUrlValidationResult.ts";
export type SupportedSearchParamsFromUrlValidationResult<Datum> =
	| SuccessSearchParamsFromUrlValidationResult<Datum>
	| FailureSearchParamsFromUrlValidationResult;
