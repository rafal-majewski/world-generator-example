import type {Block} from "./Block.ts";
import type {Triangle} from "./Triangle.ts";
function computeNearTrianglesFromBlock(block: Block): readonly Triangle[] {
	const trianglesPositionZ = block.position.z - 0.5;
	const left: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	const right: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	const bottom: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	const top: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	return [left, right, bottom, top];
}
function computeFarTrianglesFromBlock(block: Block): readonly Triangle[] {
	const trianglesPositionZ = block.position.z + 0.5;
	const left: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	const right: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	const bottom: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	const top: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	return [left, right, bottom, top];
}
function computeTopTrianglesFromBlock(block: Block): readonly Triangle[] {
	const trianglesPositionY = block.position.y + 0.5;
	const left: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	const right: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	const near: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	const far: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	return [left, right, near, far];
}
function computeBottomTrianglesFromBlock(block: Block): readonly Triangle[] {
	const trianglesPositionY = block.position.y - 0.5;
	const left: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	const right: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	const near: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	const far: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	return [left, right, near, far];
}
function computeLeftTrianglesFromBlock(block: Block): readonly Triangle[] {
	const trianglesPositionX = block.position.x - 0.5;
	const bottom: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	const top: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	const near: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	const far: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	return [bottom, top, near, far];
}
function computeRightTrianglesFromBlock(block: Block): readonly Triangle[] {
	const trianglesPositionX = block.position.x + 0.5;
	const bottom: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	const top: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	const near: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	const far: Triangle = {
		vertices: [
			{
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
		],
		color: block.color,
	};
	return [bottom, top, near, far];
}
export function computeTrianglesFromBlock(block: Block): readonly Triangle[] {
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
