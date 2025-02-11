import type {XyzCoordinates} from "./XyzCoordinates.ts";
export function computeXyzCoordinatesAverage(
	...positions: [XyzCoordinates, ...(readonly XyzCoordinates[])]
): XyzCoordinates {
	const totalPosition: XyzCoordinates = positions.reduce(
		(accumulatedTotalPosition: XyzCoordinates, position: XyzCoordinates): XyzCoordinates => ({
			x: accumulatedTotalPosition.x + position.x,
			y: accumulatedTotalPosition.y + position.y,
			z: accumulatedTotalPosition.z + position.z,
		}),
	);
	return {
		x: totalPosition.x / positions.length,
		y: totalPosition.y / positions.length,
		z: totalPosition.z / positions.length,
	};
}
