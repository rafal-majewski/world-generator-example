import {computeDistance} from "./computeDistance.ts";
import {computeTerrainColor} from "./computeTerrainColor.ts";
import type {NoiseGenerator} from "./noise/NoiseGenerator.ts";
import type {RgbColor} from "./RgbColor.ts";
import type {WorldViewer} from "./WorldViewer.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export class WorldChunk {
	public readonly position: XyzCoordinates;
	public readonly sizeInOneDimension: number;
	public readonly terrainColor: RgbColor | null;
	public readonly subChunks: ReadonlyMap<
		number,
		ReadonlyMap<number, ReadonlyMap<number, WorldChunk>>
	> | null;
	private readonly terrainGenerator: NoiseGenerator;
	private constructor(
		position: XyzCoordinates,
		sizeInOneDimension: number,
		terrainColor: RgbColor | null,
		subChunks: ReadonlyMap<number, ReadonlyMap<number, ReadonlyMap<number, WorldChunk>>> | null,
		terrainGenerator: NoiseGenerator,
	) {
		this.position = position;
		this.sizeInOneDimension = sizeInOneDimension;
		this.terrainColor = terrainColor;
		this.subChunks = subChunks;
		this.terrainGenerator = terrainGenerator;
	}
	public static create(
		position: XyzCoordinates,
		sizeInOneDimension: number,
		terrainGenerator: NoiseGenerator,
	): WorldChunk {
		const terrainHeight = terrainGenerator.compute({
			x: position.x,
			y: position.z,
		});
		const terrainColor =
			position.y <= Math.max(0, terrainHeight) ? computeTerrainColor(terrainHeight) : null;
		const chunk = new WorldChunk(
			position,
			sizeInOneDimension,
			terrainColor,
			null,
			terrainGenerator,
		);
		return chunk;
	}
	public expand(viewer: WorldViewer): WorldChunk {
		const distanceFromViewerToChunk = computeDistance(viewer.position, this.position);
		const desiredChunkSizeInOneDimension =
			3 **
			Math.floor(
				(distanceFromViewerToChunk / viewer.minimalDistanceToLowerDetailLevel) **
					(1 / viewer.distanceToLowerDetailLevelExponent),
			);
		if (this.sizeInOneDimension > desiredChunkSizeInOneDimension) {
			const subChunks = new Map<number, Map<number, Map<number, WorldChunk>>>();
			const minimalSubChunkPosition = {
				x: this.position.x - this.sizeInOneDimension / 3,
				y: this.position.y - this.sizeInOneDimension / 3,
				z: this.position.z - this.sizeInOneDimension / 3,
			} satisfies XyzCoordinates;
			for (
				let subChunkPositionDeltaZ = 0;
				subChunkPositionDeltaZ < 3;
				subChunkPositionDeltaZ += 1
			) {
				const subChunkPositionZ =
					minimalSubChunkPosition.z + (subChunkPositionDeltaZ * this.sizeInOneDimension) / 3;
				if (!subChunks.has(subChunkPositionZ)) {
					subChunks.set(subChunkPositionZ, new Map<number, Map<number, WorldChunk>>());
				}
				for (
					let subChunkPositionDeltaY = 0;
					subChunkPositionDeltaY < 3;
					subChunkPositionDeltaY += 1
				) {
					const subChunkPositionY =
						minimalSubChunkPosition.y + (subChunkPositionDeltaY * this.sizeInOneDimension) / 3;
					if (!subChunks.get(subChunkPositionZ)!.has(subChunkPositionY)) {
						subChunks.get(subChunkPositionZ)!.set(subChunkPositionY, new Map<number, WorldChunk>());
					}
					for (
						let subChunkPositionDeltaX = 0;
						subChunkPositionDeltaX < 3;
						subChunkPositionDeltaX += 1
					) {
						const subChunkPositionX =
							minimalSubChunkPosition.x + (subChunkPositionDeltaX * this.sizeInOneDimension) / 3;
						const subChunkPosition = {
							x: subChunkPositionX,
							y: subChunkPositionY,
							z: subChunkPositionZ,
						} satisfies XyzCoordinates;
						const subChunk = WorldChunk.create(
							subChunkPosition,
							this.sizeInOneDimension / 3,
							this.terrainGenerator,
						);
						const expandedSubChunk = subChunk.expand(viewer);
						subChunks
							.get(subChunkPosition.z)!
							.get(subChunkPosition.y)!
							.set(subChunkPosition.x, expandedSubChunk);
					}
				}
			}
			const chunk = new WorldChunk(
				this.position,
				this.sizeInOneDimension,
				null,
				subChunks,
				this.terrainGenerator,
			);
			return chunk;
		} else {
			return this;
		}
	}
}
