import {computeMinimalChunkPosition} from "./computeMinimalChunkPosition.ts";
import type {NoiseGenerator} from "./noise/NoiseGenerator.ts";
import {WorldChunk} from "./WorldChunk.ts";
import type {WorldViewer} from "./WorldViewer.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export class World {
	// private readonly terrainHeightNoiseGenerator: NoiseGenerator;
	// private readonly gridChunkGridize: number;
	// private readonly chunkCountInOneDimension: number;
	// private readonly gridChunkGrid: ReadonlyMap<
	// 	number,
	// 	ReadonlyMap<number, ReadonlyMap<number, GridWorldChunk>>
	// >;
	// private constructor(
	// 	terrainHeightNoiseGenerator: NoiseGenerator,
	// 	gridChunkGridize: number,
	// 	gridChunkGrid: ReadonlyMap<number, ReadonlyMap<number, ReadonlyMap<number, GridWorldChunk>>>,
	// ) {
	// 	this.terrainHeightNoiseGenerator = terrainHeightNoiseGenerator;
	// 	this.gridChunkGridize = gridChunkGridize;
	// 	this.gridChunkGrid = gridChunkGrid;
	// }
	public static create(
		chunkSizeInOneDimension: number,
		viewers: readonly WorldViewer[],
		terrainHeightNoiseGenerator: NoiseGenerator,
		// minimalDistanceToLowerDetailLevel: number,
		// distanceToLowerDetailLevelExponent: number,
	): World {
		const chunks = new Map<number, Map<number, Map<number, WorldChunk>>>();
		for (const viewer of viewers) {
			const minimalChunkPosition: XyzCoordinates = computeMinimalChunkPosition(
				chunkSizeInOneDimension,
				viewer,
			);
			for (
				let chunkPositionDeltaZ = 0;
				chunkPositionDeltaZ < viewer.chunkCountInOneDimension;
				chunkPositionDeltaZ += 1
			) {
				const chunkPositionZ =
					minimalChunkPosition.z + chunkPositionDeltaZ * chunkSizeInOneDimension;
				for (
					let chunkPositionDeltaY = 0;
					chunkPositionDeltaY < viewer.chunkCountInOneDimension;
					chunkPositionDeltaY += 1
				) {
					const chunkPositionY =
						minimalChunkPosition.y + chunkPositionDeltaY * chunkSizeInOneDimension;
					for (
						let chunkPositionDeltaX = 0;
						chunkPositionDeltaX < viewer.chunkCountInOneDimension;
						chunkPositionDeltaX += 1
					) {
						const chunkPositionX =
							minimalChunkPosition.x + chunkPositionDeltaX * chunkSizeInOneDimension;
						const chunkPosition = {
							x: chunkPositionX,
							y: chunkPositionY,
							z: chunkPositionZ,
						} satisfies XyzCoordinates;
						if (!chunks.has(chunkPosition.z)) {
							chunks.set(chunkPosition.z, new Map<number, Map<number, WorldChunk>>());
						}
						if (!chunks.get(chunkPosition.z)!.has(chunkPosition.y)) {
							chunks.get(chunkPosition.z)!.set(chunkPosition.y, new Map<number, WorldChunk>());
						}
						if (!chunks.get(chunkPosition.z)!.get(chunkPosition.y)!.has(chunkPosition.x)) {
							const chunk = WorldChunk.create(
								chunkPosition,
								chunkSizeInOneDimension,
								terrainHeightNoiseGenerator,
							);
							chunks.get(chunkPosition.z)!.get(chunkPosition.y)!.set(chunkPosition.x, chunk);
						}
						const existingChunk = chunks
							.get(chunkPosition.z)!
							.get(chunkPosition.y)!
							.get(chunkPosition.x)!;
						const newChunk = existingChunk.expand(viewer);
						chunks.get(chunkPosition.z)!.get(chunkPosition.y)!.set(chunkPosition.x, newChunk);
					}
				}
			}
		}
		const world = new World(chunkSizeInOneDimension, chunks, viewers);
		return world;
	}
	private constructor(
		chunkSizeInOneDimension: number,
		chunks: ReadonlyMap<number, ReadonlyMap<number, ReadonlyMap<number, WorldChunk>>>,
		viewers: readonly WorldViewer[],
	) {
		this.chunkSizeInOneDimension = chunkSizeInOneDimension;
		this.chunks = chunks;
		this.viewers = viewers;
	}
	public readonly chunkSizeInOneDimension: number;
	public readonly chunks: ReadonlyMap<number, ReadonlyMap<number, ReadonlyMap<number, WorldChunk>>>;
	public readonly viewers: readonly WorldViewer[];
	// public readonly gridChunkCountInOneDimension: number;
	// public readonly gridChunkSizeInOneDimension: number;
	// public readonly subChunkGrid: ReadonlyMap<
	// 	number,
	// 	ReadonlyMap<number, ReadonlyMap<number, GridWorldChunk>>
	// >;
	// public readonly minimalDistanceToLowerDetailLevel: number;
	// public readonly distanceToLowerDetailLevelExponent: number;
}
