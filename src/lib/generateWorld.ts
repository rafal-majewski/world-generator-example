// import type {Block} from "./Block.ts";
// import {computeBlockColor} from "./computeBlockColor.ts";
// import {computeGrassTriangles} from "./computeGrassTriangles.ts";
// import {computeTerrainHeight} from "./computeTerrainHeight.ts";
// import type {Grass} from "./Grass.ts";
// import type {GrassVertex} from "./GrassVertex.ts";
// import type {RgbColor} from "./RgbColor.ts";
// import type {TerrainVertex} from "./TerrainVertex.ts";
// import type {Triangle} from "./web-gl/Triangle.ts";
// import type {World} from "./World.ts";
// import type {XzCoordinates} from "./XzCoordinates.ts";
// import type {XzDimensions} from "./XzDimensions.ts";
// export function generateWorld(dimensions: XzDimensions): World {
// 	const terrainTriangles: Triangle<TerrainVertex>[] = [];
// 	const grassTriangles: Triangle<GrassVertex>[] = [];
// 	for (let gridX = -(dimensions.x - 1) / 2; gridX <= (dimensions.x - 1) / 2; gridX += 1) {
// 		for (let gridZ = -(dimensions.z - 1) / 2; gridZ <= (dimensions.z - 1) / 2; gridZ += 1) {
// 			const gridXz: XzCoordinates = {
// 				x: gridX,
// 				z: gridZ,
// 			};
// 			const y = computeTerrainHeight(gridXz);
// 			const color: RgbColor = computeBlockColor(y);
// 			const actualY = Math.max(0, y);
// 			const gridY = Math.round(actualY);
// 			const block: Block = {
// 				position: {
// 					x: gridX,
// 					y: gridY,
// 					z: gridZ,
// 				},
// 				color,
// 				material: "sand",
// 			};
// 			const someTerrainTriangles = computeTerrainTriangles(block);
// 			terrainTriangles.push(...someTerrainTriangles);
// 			const grass: Grass = {
// 				height: Math.random() * 0.5 + 0.5,
// 				plantPosition: {
// 					x: gridX,
// 					y: gridY + 0.5,
// 					z: gridZ,
// 				},
// 				angleRadians: Math.random() * Math.PI * 2,
// 			};
// 			const someGrassTriangles = computeGrassTriangles(grass);
// 			grassTriangles.push(...someGrassTriangles);
// 		}
// 	}
// 	return {
// 		terrainTriangles,
// 		grassTriangles,
// 	};
// }
