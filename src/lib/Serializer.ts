export interface Serializer<Datum> {
	serialize: (datum: Datum) => readonly number[];
}
