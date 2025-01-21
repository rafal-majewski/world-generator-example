import {computeMInOneDimension} from "./computeMInOneDimension.ts";
import {GridWorldChunk} from "./GridWorldChunk.ts";
import type {NoiseGenerator} from "./noise/NoiseGenerator.ts";
import type {TerrainTriangle} from "./TerrainTriangle.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export class MainWorldChunk {
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
		gridChunkSizeInOneDimension: number,
		viewerPosition: XyzCoordinates,
		gridChunkCountInOneDimension: number,
		terrainHeightNoiseGenerator: NoiseGenerator,
	): MainWorldChunk {
		const gridChunkGrid = new Map<number, Map<number, Map<number, GridWorldChunk>>>();
		const mX = computeMInOneDimension(
			gridChunkSizeInOneDimension,
			viewerPosition.x,
			gridChunkCountInOneDimension,
		);
		const mY = computeMInOneDimension(
			gridChunkSizeInOneDimension,
			viewerPosition.y,
			gridChunkCountInOneDimension,
		);
		const mZ = computeMInOneDimension(
			gridChunkSizeInOneDimension,
			viewerPosition.z,
			gridChunkCountInOneDimension,
		);
		for (let iz = 0; iz < gridChunkCountInOneDimension; iz += 1) {
			const z = mZ + iz * gridChunkSizeInOneDimension;
			const gridChunkGridInZ = new Map<number, Map<number, GridWorldChunk>>();
			gridChunkGrid.set(z, gridChunkGridInZ);
			for (let iy = 0; iy < gridChunkCountInOneDimension; iy += 1) {
				const y = mY + iy * gridChunkSizeInOneDimension;
				const gridChunkGridInY = new Map<number, GridWorldChunk>();
				gridChunkGridInZ.set(y, gridChunkGridInY);
				for (let ix = 0; ix < gridChunkCountInOneDimension; ix += 1) {
					const x = mX + ix * gridChunkSizeInOneDimension;
					const chunkPosition: XyzCoordinates = {
						x,
						y,
						z,
					};
					const gridChunk = GridWorldChunk.create(
						gridChunkSizeInOneDimension,
						chunkPosition,
						terrainHeightNoiseGenerator,
					);
					gridChunkGridInY.set(x, gridChunk);
				}
			}
		}
		const gridChunks: readonly GridWorldChunk[] = [...gridChunkGrid.values()].flatMap(
			(gridChunkGridInZ) =>
				[...gridChunkGridInZ.values()].flatMap((gridChunkGridInY) => [
					...gridChunkGridInY.values(),
				]),
		);
		const triangles: readonly TerrainTriangle[] = gridChunks.flatMap(
			(gridChunk) => gridChunk.triangles,
		);
		const chunk = new MainWorldChunk(
			triangles,
			gridChunkSizeInOneDimension,
			gridChunkCountInOneDimension,
			terrainHeightNoiseGenerator,
		);
		return chunk;
	}
	public readonly triangles: readonly TerrainTriangle[];
	private constructor(
		triangles: readonly TerrainTriangle[],
		gridChunkSizeInOneDimension: number,
		gridChunkCountInOneDimension: number,
		terrainHeightNoiseGenerator: NoiseGenerator,
	) {
		this.triangles = triangles;
		this.gridChunkSizeInOneDimension = gridChunkSizeInOneDimension;
		this.gridChunkCountInOneDimension = gridChunkCountInOneDimension;
		this.terrainHeightNoiseGenerator = terrainHeightNoiseGenerator;
	}
	public readonly gridChunkCountInOneDimension: number;
	public readonly gridChunkSizeInOneDimension: number;
	public readonly terrainHeightNoiseGenerator: NoiseGenerator;
	public update(viewerPosition: XyzCoordinates): MainWorldChunk {
		return this;
	}
}
