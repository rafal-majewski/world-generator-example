import {computeMinimalChunkPositionInOneDimension} from "./computeMinimalChunkPositionInOneDimension.ts";
import type {WorldViewer} from "./WorldViewer.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export function computeMinimalChunkPosition(
	chunkSizeInOneDimension: number,
	viewer: WorldViewer,
): XyzCoordinates {
	const x = computeMinimalChunkPositionInOneDimension(
		chunkSizeInOneDimension,
		viewer.position.x,
		viewer.chunkCountInOneDimension,
	);
	const y = computeMinimalChunkPositionInOneDimension(
		chunkSizeInOneDimension,
		viewer.position.y,
		viewer.chunkCountInOneDimension,
	);
	const z = computeMinimalChunkPositionInOneDimension(
		chunkSizeInOneDimension,
		viewer.position.z,
		viewer.chunkCountInOneDimension,
	);
	return {
		x,
		y,
		z,
	};
}
