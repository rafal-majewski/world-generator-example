export type SearchParamsValidationResult<Datum> = Readonly<{
	datum: Datum;
	correctedSearchParams: URLSearchParams;
}>;
