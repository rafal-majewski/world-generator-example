export function mapObjectValueWise<Key extends string | number, Value, NewValue>(
	object_: Readonly<Record<Key, Value>>,
	mapper: (value: Value) => NewValue,
): Readonly<Record<Key, NewValue>> {
	const objectEntries = Object.entries(object_) as unknown as readonly (readonly [Key, Value])[];
	const mappedObjectEntries: readonly (readonly [Key, NewValue])[] = objectEntries.map(
		([key, value]) => {
			const mappedValue = mapper(value);
			return [key, mappedValue] as const;
		},
	);
	const newObject = Object.fromEntries(mappedObjectEntries) as Readonly<Record<Key, NewValue>>;
	return newObject;
}
