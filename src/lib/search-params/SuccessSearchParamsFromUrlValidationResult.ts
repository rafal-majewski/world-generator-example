import type {SearchParamsFromUrlValidationResult} from "./SearchParamsFromUrlValidationResult.js";
import type {successSearchParamsFromUrlValidationResultStatus} from "./successSearchParamsFromUrlValidationResultStatus.js";
export type SuccessSearchParamsFromUrlValidationResult<Datum> = SearchParamsFromUrlValidationResult<
	typeof successSearchParamsFromUrlValidationResultStatus
> &
	Readonly<{
		datum: Datum;
	}>;
