import type {Block} from "./Block.ts";
import type {TerrainVertex} from "./TerrainVertex.ts";
import type {Triangle} from "./web-gl/Triangle.ts";
function computeNearTrianglesFromBlock(block: Block): readonly Triangle<TerrainVertex>[] {
	const trianglesPositionZ = block.position.z - 0.5;
	const leftTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
	const rightTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
	const bottomTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
	const topTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
function computeFarTrianglesFromBlock(block: Block): readonly Triangle<TerrainVertex>[] {
	const trianglesPositionZ = block.position.z + 0.5;
	const leftTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
	const rightTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
	const bottomTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
	const topTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
function computeTopTrianglesFromBlock(block: Block): readonly Triangle<TerrainVertex>[] {
	const trianglesPositionY = block.position.y + 0.5;
	const leftTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
	const rightTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
	const nearTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
	const farTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
function computeBottomTrianglesFromBlock(block: Block): readonly Triangle<TerrainVertex>[] {
	const trianglesPositionY = block.position.y - 0.5;
	const leftTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
	const rightTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
	const nearTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
	const farTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
function computeLeftTrianglesFromBlock(block: Block): readonly Triangle<TerrainVertex>[] {
	const trianglesPositionX = block.position.x - 0.5;
	const bottomTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
	const topTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
	const nearTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
	const farTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
function computeRightTrianglesFromBlock(block: Block): readonly Triangle<TerrainVertex>[] {
	const trianglesPositionX = block.position.x + 0.5;
	const bottomTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
	const topTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
	const nearTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
	const farTriangle: Triangle<TerrainVertex> = [
		{
			material: block.material,
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
			material: block.material,
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
			material: block.material,
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
export function computeTerrainTriangles(block: Block): readonly Triangle<TerrainVertex>[] {
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
