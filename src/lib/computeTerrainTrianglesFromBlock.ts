import type {Block} from "./Block.ts";
import type {TerrainTriangle} from "./TerrainTriangle.ts";
function computeNearTrianglesFromBlock(block: Block): readonly TerrainTriangle[] {
	const trianglesPositionZ = block.position.z - 0.5;
	const leftTriangle: TerrainTriangle = [
		{
			color: block.color,
			position: {
				x: block.position.x - 0.5,
				y: block.position.y - 0.5,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: -1,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x,
				y: block.position.y,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: -1,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x - 0.5,
				y: block.position.y + 0.5,
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
			color: block.color,
			position: {
				x: block.position.x + 0.5,
				y: block.position.y - 0.5,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: -1,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x,
				y: block.position.y,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: -1,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x + 0.5,
				y: block.position.y + 0.5,
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
			color: block.color,
			position: {
				x: block.position.x - 0.5,
				y: block.position.y - 0.5,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: -1,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x,
				y: block.position.y,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: -1,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x + 0.5,
				y: block.position.y - 0.5,
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
			color: block.color,
			position: {
				x: block.position.x - 0.5,
				y: block.position.y + 0.5,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: -1,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x,
				y: block.position.y,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: -1,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x + 0.5,
				y: block.position.y + 0.5,
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
function computeFarTrianglesFromBlock(block: Block): readonly TerrainTriangle[] {
	const trianglesPositionZ = block.position.z + 0.5;
	const leftTriangle: TerrainTriangle = [
		{
			color: block.color,
			position: {
				x: block.position.x - 0.5,
				y: block.position.y - 0.5,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: 1,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x,
				y: block.position.y,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: 1,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x - 0.5,
				y: block.position.y + 0.5,
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
			color: block.color,
			position: {
				x: block.position.x + 0.5,
				y: block.position.y - 0.5,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: 1,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x,
				y: block.position.y,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: 1,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x + 0.5,
				y: block.position.y + 0.5,
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
			color: block.color,
			position: {
				x: block.position.x - 0.5,
				y: block.position.y - 0.5,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: 1,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x,
				y: block.position.y,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: 1,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x + 0.5,
				y: block.position.y - 0.5,
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
			color: block.color,
			position: {
				x: block.position.x - 0.5,
				y: block.position.y + 0.5,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: 1,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x,
				y: block.position.y,
				z: trianglesPositionZ,
			},
			normal: {
				x: 0,
				y: 0,
				z: 1,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x + 0.5,
				y: block.position.y + 0.5,
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
function computeTopTrianglesFromBlock(block: Block): readonly TerrainTriangle[] {
	const trianglesPositionY = block.position.y + 0.5;
	const leftTriangle: TerrainTriangle = [
		{
			color: block.color,
			position: {
				x: block.position.x - 0.5,
				y: trianglesPositionY,
				z: block.position.z - 0.5,
			},
			normal: {
				x: 0,
				y: 1,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x,
				y: trianglesPositionY,
				z: block.position.z,
			},
			normal: {
				x: 0,
				y: 1,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x - 0.5,
				y: trianglesPositionY,
				z: block.position.z + 0.5,
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
			color: block.color,
			position: {
				x: block.position.x + 0.5,
				y: trianglesPositionY,
				z: block.position.z - 0.5,
			},
			normal: {
				x: 0,
				y: 1,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x,
				y: trianglesPositionY,
				z: block.position.z,
			},
			normal: {
				x: 0,
				y: 1,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x + 0.5,
				y: trianglesPositionY,
				z: block.position.z + 0.5,
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
			color: block.color,
			position: {
				x: block.position.x - 0.5,
				y: trianglesPositionY,
				z: block.position.z - 0.5,
			},
			normal: {
				x: 0,
				y: 1,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x,
				y: trianglesPositionY,
				z: block.position.z,
			},
			normal: {
				x: 0,
				y: 1,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x + 0.5,
				y: trianglesPositionY,
				z: block.position.z - 0.5,
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
			color: block.color,
			position: {
				x: block.position.x - 0.5,
				y: trianglesPositionY,
				z: block.position.z + 0.5,
			},
			normal: {
				x: 0,
				y: 1,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x,
				y: trianglesPositionY,
				z: block.position.z,
			},
			normal: {
				x: 0,
				y: 1,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x + 0.5,
				y: trianglesPositionY,
				z: block.position.z + 0.5,
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
function computeBottomTrianglesFromBlock(block: Block): readonly TerrainTriangle[] {
	const trianglesPositionY = block.position.y - 0.5;
	const leftTriangle: TerrainTriangle = [
		{
			color: block.color,
			position: {
				x: block.position.x - 0.5,
				y: trianglesPositionY,
				z: block.position.z - 0.5,
			},
			normal: {
				x: 0,
				y: -1,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x,
				y: trianglesPositionY,
				z: block.position.z,
			},
			normal: {
				x: 0,
				y: -1,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x - 0.5,
				y: trianglesPositionY,
				z: block.position.z + 0.5,
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
			color: block.color,
			position: {
				x: block.position.x + 0.5,
				y: trianglesPositionY,
				z: block.position.z - 0.5,
			},
			normal: {
				x: 0,
				y: -1,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x,
				y: trianglesPositionY,
				z: block.position.z,
			},
			normal: {
				x: 0,
				y: -1,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x + 0.5,
				y: trianglesPositionY,
				z: block.position.z + 0.5,
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
			color: block.color,
			position: {
				x: block.position.x - 0.5,
				y: trianglesPositionY,
				z: block.position.z - 0.5,
			},
			normal: {
				x: 0,
				y: -1,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x,
				y: trianglesPositionY,
				z: block.position.z,
			},
			normal: {
				x: 0,
				y: -1,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x + 0.5,
				y: trianglesPositionY,
				z: block.position.z - 0.5,
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
			color: block.color,
			position: {
				x: block.position.x - 0.5,
				y: trianglesPositionY,
				z: block.position.z + 0.5,
			},
			normal: {
				x: 0,
				y: -1,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x,
				y: trianglesPositionY,
				z: block.position.z,
			},
			normal: {
				x: 0,
				y: -1,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: block.position.x + 0.5,
				y: trianglesPositionY,
				z: block.position.z + 0.5,
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
function computeLeftTrianglesFromBlock(block: Block): readonly TerrainTriangle[] {
	const trianglesPositionX = block.position.x - 0.5;
	const bottomTriangle: TerrainTriangle = [
		{
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y - 0.5,
				z: block.position.z - 0.5,
			},
			normal: {
				x: -1,
				y: 0,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y,
				z: block.position.z,
			},
			normal: {
				x: -1,
				y: 0,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y - 0.5,
				z: block.position.z + 0.5,
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
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y + 0.5,
				z: block.position.z - 0.5,
			},
			normal: {
				x: -1,
				y: 0,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y,
				z: block.position.z,
			},
			normal: {
				x: -1,
				y: 0,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y + 0.5,
				z: block.position.z + 0.5,
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
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y - 0.5,
				z: block.position.z - 0.5,
			},
			normal: {
				x: -1,
				y: 0,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y,
				z: block.position.z,
			},
			normal: {
				x: -1,
				y: 0,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y + 0.5,
				z: block.position.z - 0.5,
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
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y - 0.5,
				z: block.position.z + 0.5,
			},
			normal: {
				x: -1,
				y: 0,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y,
				z: block.position.z,
			},
			normal: {
				x: -1,
				y: 0,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y + 0.5,
				z: block.position.z + 0.5,
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
function computeRightTrianglesFromBlock(block: Block): readonly TerrainTriangle[] {
	const trianglesPositionX = block.position.x + 0.5;
	const bottomTriangle: TerrainTriangle = [
		{
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y - 0.5,
				z: block.position.z - 0.5,
			},
			normal: {
				x: 1,
				y: 0,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y,
				z: block.position.z,
			},
			normal: {
				x: 1,
				y: 0,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y - 0.5,
				z: block.position.z + 0.5,
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
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y + 0.5,
				z: block.position.z - 0.5,
			},
			normal: {
				x: 1,
				y: 0,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y,
				z: block.position.z,
			},
			normal: {
				x: 1,
				y: 0,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y + 0.5,
				z: block.position.z + 0.5,
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
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y - 0.5,
				z: block.position.z - 0.5,
			},
			normal: {
				x: 1,
				y: 0,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y,
				z: block.position.z,
			},
			normal: {
				x: 1,
				y: 0,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y + 0.5,
				z: block.position.z - 0.5,
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
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y - 0.5,
				z: block.position.z + 0.5,
			},
			normal: {
				x: 1,
				y: 0,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y,
				z: block.position.z,
			},
			normal: {
				x: 1,
				y: 0,
				z: 0,
			},
		},
		{
			color: block.color,
			position: {
				x: trianglesPositionX,
				y: block.position.y + 0.5,
				z: block.position.z + 0.5,
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
export function computeTerrainTrianglesFromBlock(block: Block): readonly TerrainTriangle[] {
	const leftTriangles = computeLeftTrianglesFromBlock(block);
	const rightTriangles = computeRightTrianglesFromBlock(block);
	const bottomTriangles = computeBottomTrianglesFromBlock(block);
	const topTriangles = computeTopTrianglesFromBlock(block);
	const nearTriangles = computeNearTrianglesFromBlock(block);
	const farTriangles = computeFarTrianglesFromBlock(block);
	return [
		...leftTriangles,
		...rightTriangles,
		...bottomTriangles,
		...topTriangles,
		...nearTriangles,
		...farTriangles,
	];
}
