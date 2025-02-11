import type {RgbColor} from "./RgbColor.ts";
import type {TerrainTriangle} from "./TerrainTriangle.ts";
import type {WorldChunk} from "./WorldChunk.ts";
function computeNearTrianglesFromWorldChunk(
	chunk: WorldChunk &
		Readonly<{
			terrainColor: RgbColor;
		}>,
): readonly TerrainTriangle[] {
	const trianglesPositionZ = chunk.position.z - 0.5 * chunk.sizeInOneDimension;
	const leftTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x - 0.5 * chunk.sizeInOneDimension,
				y: chunk.position.y - 0.5 * chunk.sizeInOneDimension,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: -1,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x,
				y: chunk.position.y,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: -1,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x - 0.5 * chunk.sizeInOneDimension,
				y: chunk.position.y + 0.5 * chunk.sizeInOneDimension,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: -1,
			},
		},
	];
	const rightTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x + 0.5 * chunk.sizeInOneDimension,
				y: chunk.position.y - 0.5 * chunk.sizeInOneDimension,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: -1,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x,
				y: chunk.position.y,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: -1,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x + 0.5 * chunk.sizeInOneDimension,
				y: chunk.position.y + 0.5 * chunk.sizeInOneDimension,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: -1,
			},
		},
	];
	const bottomTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x - 0.5 * chunk.sizeInOneDimension,
				y: chunk.position.y - 0.5 * chunk.sizeInOneDimension,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: -1,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x,
				y: chunk.position.y,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: -1,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x + 0.5 * chunk.sizeInOneDimension,
				y: chunk.position.y - 0.5 * chunk.sizeInOneDimension,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: -1,
			},
		},
	];
	const topTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x - 0.5 * chunk.sizeInOneDimension,
				y: chunk.position.y + 0.5 * chunk.sizeInOneDimension,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: -1,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x,
				y: chunk.position.y,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: -1,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x + 0.5 * chunk.sizeInOneDimension,
				y: chunk.position.y + 0.5 * chunk.sizeInOneDimension,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: -1,
			},
		},
	];
	return [leftTriangle, rightTriangle, bottomTriangle, topTriangle];
}
function computeFarTrianglesFromWorldChunk(
	chunk: WorldChunk &
		Readonly<{
			terrainColor: RgbColor;
		}>,
): readonly TerrainTriangle[] {
	const trianglesPositionZ = chunk.position.z + 0.5 * chunk.sizeInOneDimension;
	const leftTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x - 0.5 * chunk.sizeInOneDimension,
				y: chunk.position.y - 0.5 * chunk.sizeInOneDimension,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: 1,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x,
				y: chunk.position.y,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: 1,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x - 0.5 * chunk.sizeInOneDimension,
				y: chunk.position.y + 0.5 * chunk.sizeInOneDimension,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: 1,
			},
		},
	];
	const rightTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x + 0.5 * chunk.sizeInOneDimension,
				y: chunk.position.y - 0.5 * chunk.sizeInOneDimension,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: 1,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x,
				y: chunk.position.y,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: 1,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x + 0.5 * chunk.sizeInOneDimension,
				y: chunk.position.y + 0.5 * chunk.sizeInOneDimension,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: 1,
			},
		},
	];
	const bottomTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x - 0.5 * chunk.sizeInOneDimension,
				y: chunk.position.y - 0.5 * chunk.sizeInOneDimension,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: 1,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x,
				y: chunk.position.y,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: 1,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x + 0.5 * chunk.sizeInOneDimension,
				y: chunk.position.y - 0.5 * chunk.sizeInOneDimension,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: 1,
			},
		},
	];
	const topTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x - 0.5 * chunk.sizeInOneDimension,
				y: chunk.position.y + 0.5 * chunk.sizeInOneDimension,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: 1,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x,
				y: chunk.position.y,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: 1,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x + 0.5 * chunk.sizeInOneDimension,
				y: chunk.position.y + 0.5 * chunk.sizeInOneDimension,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: 1,
			},
		},
	];
	return [leftTriangle, rightTriangle, bottomTriangle, topTriangle];
}
function computeTopTrianglesFromWorldChunk(
	chunk: WorldChunk &
		Readonly<{
			terrainColor: RgbColor;
		}>,
): readonly TerrainTriangle[] {
	const trianglesPositionY = chunk.position.y + 0.5 * chunk.sizeInOneDimension;
	const leftTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x - 0.5 * chunk.sizeInOneDimension,
				y: trianglesPositionY,
				z: chunk.position.z - 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 0,
				y: 1,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x,
				y: trianglesPositionY,
				z: chunk.position.z,
			},
			normal: {
				x: 0,
				y: 1,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x - 0.5 * chunk.sizeInOneDimension,
				y: trianglesPositionY,
				z: chunk.position.z + 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 0,
				y: 1,
				z: 0,
			},
		},
	];
	const rightTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x + 0.5 * chunk.sizeInOneDimension,
				y: trianglesPositionY,
				z: chunk.position.z - 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 0,
				y: 1,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x,
				y: trianglesPositionY,
				z: chunk.position.z,
			},
			normal: {
				x: 0,
				y: 1,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x + 0.5 * chunk.sizeInOneDimension,
				y: trianglesPositionY,
				z: chunk.position.z + 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 0,
				y: 1,
				z: 0,
			},
		},
	];
	const nearTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x - 0.5 * chunk.sizeInOneDimension,
				y: trianglesPositionY,
				z: chunk.position.z - 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 0,
				y: 1,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x,
				y: trianglesPositionY,
				z: chunk.position.z,
			},
			normal: {
				x: 0,
				y: 1,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x + 0.5 * chunk.sizeInOneDimension,
				y: trianglesPositionY,
				z: chunk.position.z - 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 0,
				y: 1,
				z: 0,
			},
		},
	];
	const farTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x - 0.5 * chunk.sizeInOneDimension,
				y: trianglesPositionY,
				z: chunk.position.z + 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 0,
				y: 1,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x,
				y: trianglesPositionY,
				z: chunk.position.z,
			},
			normal: {
				x: 0,
				y: 1,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x + 0.5 * chunk.sizeInOneDimension,
				y: trianglesPositionY,
				z: chunk.position.z + 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 0,
				y: 1,
				z: 0,
			},
		},
	];
	return [leftTriangle, rightTriangle, nearTriangle, farTriangle];
}
function computeBottomTrianglesFromWorldChunk(
	chunk: WorldChunk &
		Readonly<{
			terrainColor: RgbColor;
		}>,
): readonly TerrainTriangle[] {
	const trianglesPositionY = chunk.position.y - 0.5 * chunk.sizeInOneDimension;
	const leftTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x - 0.5 * chunk.sizeInOneDimension,
				y: trianglesPositionY,
				z: chunk.position.z - 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 0,
				y: -1,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x,
				y: trianglesPositionY,
				z: chunk.position.z,
			},
			normal: {
				x: 0,
				y: -1,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x - 0.5 * chunk.sizeInOneDimension,
				y: trianglesPositionY,
				z: chunk.position.z + 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 0,
				y: -1,
				z: 0,
			},
		},
	];
	const rightTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x + 0.5 * chunk.sizeInOneDimension,
				y: trianglesPositionY,
				z: chunk.position.z - 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 0,
				y: -1,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x,
				y: trianglesPositionY,
				z: chunk.position.z,
			},
			normal: {
				x: 0,
				y: -1,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x + 0.5 * chunk.sizeInOneDimension,
				y: trianglesPositionY,
				z: chunk.position.z + 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 0,
				y: -1,
				z: 0,
			},
		},
	];
	const nearTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x - 0.5 * chunk.sizeInOneDimension,
				y: trianglesPositionY,
				z: chunk.position.z - 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 0,
				y: -1,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x,
				y: trianglesPositionY,
				z: chunk.position.z,
			},
			normal: {
				x: 0,
				y: -1,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x + 0.5 * chunk.sizeInOneDimension,
				y: trianglesPositionY,
				z: chunk.position.z - 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 0,
				y: -1,
				z: 0,
			},
		},
	];
	const farTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x - 0.5 * chunk.sizeInOneDimension,
				y: trianglesPositionY,
				z: chunk.position.z + 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 0,
				y: -1,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x,
				y: trianglesPositionY,
				z: chunk.position.z,
			},
			normal: {
				x: 0,
				y: -1,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: chunk.position.x + 0.5 * chunk.sizeInOneDimension,
				y: trianglesPositionY,
				z: chunk.position.z + 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 0,
				y: -1,
				z: 0,
			},
		},
	];
	return [leftTriangle, rightTriangle, nearTriangle, farTriangle];
}
function computeLeftTrianglesFromWorldChunk(
	chunk: WorldChunk &
		Readonly<{
			terrainColor: RgbColor;
		}>,
): readonly TerrainTriangle[] {
	const trianglesPositionX = chunk.position.x - 0.5 * chunk.sizeInOneDimension;
	const bottomTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y - 0.5 * chunk.sizeInOneDimension,
				z: chunk.position.z - 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: -1,
				y: 0,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y,
				z: chunk.position.z,
			},
			normal: {
				x: -1,
				y: 0,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y - 0.5 * chunk.sizeInOneDimension,
				z: chunk.position.z + 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: -1,
				y: 0,
				z: 0,
			},
		},
	];
	const topTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y + 0.5 * chunk.sizeInOneDimension,
				z: chunk.position.z - 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: -1,
				y: 0,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y,
				z: chunk.position.z,
			},
			normal: {
				x: -1,
				y: 0,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y + 0.5 * chunk.sizeInOneDimension,
				z: chunk.position.z + 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: -1,
				y: 0,
				z: 0,
			},
		},
	];
	const nearTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y - 0.5 * chunk.sizeInOneDimension,
				z: chunk.position.z - 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: -1,
				y: 0,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y,
				z: chunk.position.z,
			},
			normal: {
				x: -1,
				y: 0,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y + 0.5 * chunk.sizeInOneDimension,
				z: chunk.position.z - 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: -1,
				y: 0,
				z: 0,
			},
		},
	];
	const farTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y - 0.5 * chunk.sizeInOneDimension,
				z: chunk.position.z + 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: -1,
				y: 0,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y,
				z: chunk.position.z,
			},
			normal: {
				x: -1,
				y: 0,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y + 0.5 * chunk.sizeInOneDimension,
				z: chunk.position.z + 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: -1,
				y: 0,
				z: 0,
			},
		},
	];
	return [bottomTriangle, topTriangle, nearTriangle, farTriangle];
}
function computeRightTrianglesFromWorldChunk(
	chunk: WorldChunk &
		Readonly<{
			terrainColor: RgbColor;
		}>,
): readonly TerrainTriangle[] {
	const trianglesPositionX = chunk.position.x + 0.5 * chunk.sizeInOneDimension;
	const bottomTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y - 0.5 * chunk.sizeInOneDimension,
				z: chunk.position.z - 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 1,
				y: 0,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y,
				z: chunk.position.z,
			},
			normal: {
				x: 1,
				y: 0,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y - 0.5 * chunk.sizeInOneDimension,
				z: chunk.position.z + 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 1,
				y: 0,
				z: 0,
			},
		},
	];
	const topTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y + 0.5 * chunk.sizeInOneDimension,
				z: chunk.position.z - 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 1,
				y: 0,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y,
				z: chunk.position.z,
			},
			normal: {
				x: 1,
				y: 0,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y + 0.5 * chunk.sizeInOneDimension,
				z: chunk.position.z + 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 1,
				y: 0,
				z: 0,
			},
		},
	];
	const nearTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y - 0.5 * chunk.sizeInOneDimension,
				z: chunk.position.z - 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 1,
				y: 0,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y,
				z: chunk.position.z,
			},
			normal: {
				x: 1,
				y: 0,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y + 0.5 * chunk.sizeInOneDimension,
				z: chunk.position.z - 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 1,
				y: 0,
				z: 0,
			},
		},
	];
	const farTriangle: TerrainTriangle = [
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y - 0.5 * chunk.sizeInOneDimension,
				z: chunk.position.z + 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 1,
				y: 0,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y,
				z: chunk.position.z,
			},
			normal: {
				x: 1,
				y: 0,
				z: 0,
			},
		},
		{
			color: chunk.terrainColor,
			position: {
				x: trianglesPositionX,
				y: chunk.position.y + 0.5 * chunk.sizeInOneDimension,
				z: chunk.position.z + 0.5 * chunk.sizeInOneDimension,
			},
			normal: {
				x: 1,
				y: 0,
				z: 0,
			},
		},
	];
	return [bottomTriangle, topTriangle, nearTriangle, farTriangle];
}
export function computeTerrainTrianglesFromWorldChunk(
	chunk: WorldChunk,
): readonly TerrainTriangle[] {
	const triangles: TerrainTriangle[] = [];
	if (chunk.terrainColor !== null) {
		const leftTriangles = computeLeftTrianglesFromWorldChunk(
			chunk as WorldChunk &
				Readonly<{
					terrainColor: RgbColor;
				}>,
		);
		const rightTriangles = computeRightTrianglesFromWorldChunk(
			chunk as WorldChunk &
				Readonly<{
					terrainColor: RgbColor;
				}>,
		);
		const bottomTriangles = computeBottomTrianglesFromWorldChunk(
			chunk as WorldChunk &
				Readonly<{
					terrainColor: RgbColor;
				}>,
		);
		const topTriangles = computeTopTrianglesFromWorldChunk(
			chunk as WorldChunk &
				Readonly<{
					terrainColor: RgbColor;
				}>,
		);
		const nearTriangles = computeNearTrianglesFromWorldChunk(
			chunk as WorldChunk &
				Readonly<{
					terrainColor: RgbColor;
				}>,
		);
		const farTriangles = computeFarTrianglesFromWorldChunk(
			chunk as WorldChunk &
				Readonly<{
					terrainColor: RgbColor;
				}>,
		);
		triangles.push(...leftTriangles);
		triangles.push(...rightTriangles);
		triangles.push(...bottomTriangles);
		triangles.push(...topTriangles);
		triangles.push(...nearTriangles);
		triangles.push(...farTriangles);
	}
	if (chunk.subChunks !== null) {
		const walls = chunk.subChunks.values();
		for (const wall of walls) {
			const rows = wall.values();
			for (const row of rows) {
				const subChunks = row.values();
				for (const subChunk of subChunks) {
					const subChunkTriangles = computeTerrainTrianglesFromWorldChunk(subChunk);
					triangles.push(...subChunkTriangles);
				}
			}
		}
	}
	return triangles;
}
