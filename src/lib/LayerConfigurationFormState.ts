import type {NullableXyCoordinates} from "./NullableXyCoordinates.ts";
export type LayerConfigurationFormState = Readonly<{
	amplitude: number | null;
	frequency: number | null;
	shiftRadians: NullableXyCoordinates;
	angleRadians: number | null;
}>;
