import type {XyCoordinates} from "./XyCoordinates.ts";
export function rotateXyCoordinates(coordinates: XyCoordinates, angle: number): XyCoordinates {
	const x = coordinates.x * Math.cos(angle) - coordinates.y * Math.sin(angle);
	const y = coordinates.x * Math.sin(angle) + coordinates.y * Math.cos(angle);
	return {
		x,
		y,
	};
}
