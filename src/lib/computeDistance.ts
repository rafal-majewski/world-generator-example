import type {XyzCoordinates} from "./XyzCoordinates.ts";
export function computeDistance(point1: XyzCoordinates, point2: XyzCoordinates): number {
	const deltaX = point1.x - point2.x;
	const deltaY = point1.y - point2.y;
	const deltaZ = point1.z - point2.z;
	const distance = (deltaX ** 2 + deltaY ** 2 + deltaZ ** 2) ** (1 / 2);
	return distance;
}
