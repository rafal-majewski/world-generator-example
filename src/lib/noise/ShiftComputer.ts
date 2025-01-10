import type {XyCoordinates} from "./XyCoordinates.ts";
import type {NormalizedIndex} from "./NormalizedIndex.ts";
export type ShiftComputer = (normalizedLayerIndex: NormalizedIndex) => XyCoordinates;
