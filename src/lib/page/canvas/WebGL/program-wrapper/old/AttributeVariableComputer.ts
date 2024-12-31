export type AttributeVariableComputer<Triangle, VariableValueToUse> = Readonly<
	Record<1 | 2 | 3, (triangle: Triangle) => VariableValueToUse>
>;
