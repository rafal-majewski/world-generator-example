import type {Block} from "./Block.ts";
import {computeBaseBlockColor} from "./computeBaseBlockColor.ts";
import {computeTerrainTrianglesFromBlock} from "./computeTerrainTrianglesFromBlock.ts";
import type {NoiseGenerator} from "./noise/NoiseGenerator.ts";
import {shadeColorRandomly} from "./shadeColorRandomly.ts";
import type {TerrainTriangle} from "./TerrainTriangle.ts";
import type {XyzCoordinates} from "./XyzCoordinates.ts";
export class GridWorldChunk {
	public static create(
		chunkSizeInOneDimension: number,
		chunkPosition: XyzCoordinates,
		terrainHeightNoiseGenerator: NoiseGenerator,
	): GridWorldChunk {
		const blockGrid = new Map<number, Map<number, Map<number, Block>>>();
		for (
			let z = chunkPosition.z - (chunkSizeInOneDimension - 1) / 2;
			z <= chunkPosition.z + (chunkSizeInOneDimension - 1) / 2;
			z += 1
		) {
			for (
				let x = chunkPosition.x - (chunkSizeInOneDimension - 1) / 2;
				x <= chunkPosition.x + (chunkSizeInOneDimension - 1) / 2;
				x += 1
			) {
				const height =
					10 *
					terrainHeightNoiseGenerator.compute({
						x,
						y: z,
					});
				const maximalY = Math.max(0, Math.ceil(height - 0.5));
				// for (let y = chunkPosition.y - (chunkSizeInOneDimension - 1) / 2; y <= maximalY; y += 1) {
				for (let y = maximalY; y <= maximalY; y += 1) {
					const baseColor = computeBaseBlockColor(height);
					const color = shadeColorRandomly(baseColor);
					const block: Block = {
						position: {
							x,
							y,
							z,
						},
						color,
					};
					if (!blockGrid.has(x)) {
						blockGrid.set(x, new Map<number, Map<number, Block>>());
					}
					if (!blockGrid.get(x)!.has(y)) {
						blockGrid.get(x)!.set(y, new Map<number, Block>());
					}
					blockGrid.get(x)!.get(y)!.set(z, block);
				}
			}
		}
		const blocks = Array.from(blockGrid.values()).flatMap((yMap) =>
			Array.from(yMap.values()).flatMap((zMap) => Array.from(zMap.values())),
		);
		const triangles = blocks.flatMap(computeTerrainTrianglesFromBlock);
		const gridWorldChunk = new GridWorldChunk(triangles);
		return gridWorldChunk;
	}
	public readonly triangles: readonly TerrainTriangle[];
	private constructor(triangles: readonly TerrainTriangle[]) {
		this.triangles = triangles;
	}
}
