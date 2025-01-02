import type {Block} from "./Block.ts";
import type {Triangle} from "./Triangle.ts";
function computeNearTrianglesFromBlock(block: Block): readonly Triangle[] {
	const trianglesPositionZ = block.position.z - 0.5;
	const left: Triangle = {
		vertexPositions: {
			1: {
				x: block.position.x - 0.5,
				y: block.position.y - 0.5,
				z: trianglesPositionZ,
			},
			2: {
				x: block.position.x,
				y: block.position.y,
				z: trianglesPositionZ,
			},
			3: {
				x: block.position.x - 0.5,
				y: block.position.y + 0.5,
				z: trianglesPositionZ,
			},
		},
		color: block.color,
	};
	const right: Triangle = {
		vertexPositions: {
			1: {
				x: block.position.x + 0.5,
				y: block.position.y - 0.5,
				z: trianglesPositionZ,
			},
			2: {
				x: block.position.x,
				y: block.position.y,
				z: trianglesPositionZ,
			},
			3: {
				x: block.position.x + 0.5,
				y: block.position.y + 0.5,
				z: trianglesPositionZ,
			},
		},
		color: block.color,
	};
	const bottom: Triangle = {
		vertexPositions: {
			1: {
				x: block.position.x - 0.5,
				y: block.position.y - 0.5,
				z: trianglesPositionZ,
			},
			2: {
				x: block.position.x,
				y: block.position.y,
				z: trianglesPositionZ,
			},
			3: {
				x: block.position.x + 0.5,
				y: block.position.y - 0.5,
				z: trianglesPositionZ,
			},
		},
		color: block.color,
	};
	const top: Triangle = {
		vertexPositions: {
			1: {
				x: block.position.x - 0.5,
				y: block.position.y + 0.5,
				z: trianglesPositionZ,
			},
			2: {
				x: block.position.x,
				y: block.position.y,
				z: trianglesPositionZ,
			},
			3: {
				x: block.position.x + 0.5,
				y: block.position.y + 0.5,
				z: trianglesPositionZ,
			},
		},
		color: block.color,
	};
	return [left, right, bottom, top];
}
function computeFarTrianglesFromBlock(block: Block): readonly Triangle[] {
	const trianglesPositionZ = block.position.z + 0.5;
	const left: Triangle = {
		vertexPositions: {
			1: {
				x: block.position.x - 0.5,
				y: block.position.y - 0.5,
				z: trianglesPositionZ,
			},
			2: {
				x: block.position.x,
				y: block.position.y,
				z: trianglesPositionZ,
			},
			3: {
				x: block.position.x - 0.5,
				y: block.position.y + 0.5,
				z: trianglesPositionZ,
			},
		},
		color: block.color,
	};
	const right: Triangle = {
		vertexPositions: {
			1: {
				x: block.position.x + 0.5,
				y: block.position.y - 0.5,
				z: trianglesPositionZ,
			},
			2: {
				x: block.position.x,
				y: block.position.y,
				z: trianglesPositionZ,
			},
			3: {
				x: block.position.x + 0.5,
				y: block.position.y + 0.5,
				z: trianglesPositionZ,
			},
		},
		color: block.color,
	};
	const bottom: Triangle = {
		vertexPositions: {
			1: {
				x: block.position.x - 0.5,
				y: block.position.y - 0.5,
				z: trianglesPositionZ,
			},
			2: {
				x: block.position.x,
				y: block.position.y,
				z: trianglesPositionZ,
			},
			3: {
				x: block.position.x + 0.5,
				y: block.position.y - 0.5,
				z: trianglesPositionZ,
			},
		},
		color: block.color,
	};
	const top: Triangle = {
		vertexPositions: {
			1: {
				x: block.position.x - 0.5,
				y: block.position.y + 0.5,
				z: trianglesPositionZ,
			},
			2: {
				x: block.position.x,
				y: block.position.y,
				z: trianglesPositionZ,
			},
			3: {
				x: block.position.x + 0.5,
				y: block.position.y + 0.5,
				z: trianglesPositionZ,
			},
		},
		color: block.color,
	};
	return [left, right, bottom, top];
}
function computeTopTrianglesFromBlock(block: Block): readonly Triangle[] {
	const trianglesPositionY = block.position.y + 0.5;
	const left: Triangle = {
		vertexPositions: {
			1: {
				x: block.position.x - 0.5,
				y: trianglesPositionY,
				z: block.position.z - 0.5,
			},
			2: {
				x: block.position.x,
				y: trianglesPositionY,
				z: block.position.z,
			},
			3: {
				x: block.position.x - 0.5,
				y: trianglesPositionY,
				z: block.position.z + 0.5,
			},
		},
		color: block.color,
	};
	const right: Triangle = {
		vertexPositions: {
			1: {
				x: block.position.x + 0.5,
				y: trianglesPositionY,
				z: block.position.z - 0.5,
			},
			2: {
				x: block.position.x,
				y: trianglesPositionY,
				z: block.position.z,
			},
			3: {
				x: block.position.x + 0.5,
				y: trianglesPositionY,
				z: block.position.z + 0.5,
			},
		},
		color: block.color,
	};
	const near: Triangle = {
		vertexPositions: {
			1: {
				x: block.position.x - 0.5,
				y: trianglesPositionY,
				z: block.position.z - 0.5,
			},
			2: {
				x: block.position.x,
				y: trianglesPositionY,
				z: block.position.z,
			},
			3: {
				x: block.position.x + 0.5,
				y: trianglesPositionY,
				z: block.position.z - 0.5,
			},
		},
		color: block.color,
	};
	const far: Triangle = {
		vertexPositions: {
			1: {
				x: block.position.x - 0.5,
				y: trianglesPositionY,
				z: block.position.z + 0.5,
			},
			2: {
				x: block.position.x,
				y: trianglesPositionY,
				z: block.position.z,
			},
			3: {
				x: block.position.x + 0.5,
				y: trianglesPositionY,
				z: block.position.z + 0.5,
			},
		},
		color: block.color,
	};
	return [left, right, near, far];
}
function computeBottomTrianglesFromBlock(block: Block): readonly Triangle[] {
	const trianglesPositionY = block.position.y - 0.5;
	const left: Triangle = {
		vertexPositions: {
			1: {
				x: block.position.x - 0.5,
				y: trianglesPositionY,
				z: block.position.z - 0.5,
			},
			2: {
				x: block.position.x,
				y: trianglesPositionY,
				z: block.position.z,
			},
			3: {
				x: block.position.x - 0.5,
				y: trianglesPositionY,
				z: block.position.z + 0.5,
			},
		},
		color: block.color,
	};
	const right: Triangle = {
		vertexPositions: {
			1: {
				x: block.position.x + 0.5,
				y: trianglesPositionY,
				z: block.position.z - 0.5,
			},
			2: {
				x: block.position.x,
				y: trianglesPositionY,
				z: block.position.z,
			},
			3: {
				x: block.position.x + 0.5,
				y: trianglesPositionY,
				z: block.position.z + 0.5,
			},
		},
		color: block.color,
	};
	const near: Triangle = {
		vertexPositions: {
			1: {
				x: block.position.x - 0.5,
				y: trianglesPositionY,
				z: block.position.z - 0.5,
			},
			2: {
				x: block.position.x,
				y: trianglesPositionY,
				z: block.position.z,
			},
			3: {
				x: block.position.x + 0.5,
				y: trianglesPositionY,
				z: block.position.z - 0.5,
			},
		},
		color: block.color,
	};
	const far: Triangle = {
		vertexPositions: {
			1: {
				x: block.position.x - 0.5,
				y: trianglesPositionY,
				z: block.position.z + 0.5,
			},
			2: {
				x: block.position.x,
				y: trianglesPositionY,
				z: block.position.z,
			},
			3: {
				x: block.position.x + 0.5,
				y: trianglesPositionY,
				z: block.position.z + 0.5,
			},
		},
		color: block.color,
	};
	return [left, right, near, far];
}
function computeLeftTrianglesFromBlock(block: Block): readonly Triangle[] {
	const trianglesPositionX = block.position.x - 0.5;
	const bottom: Triangle = {
		vertexPositions: {
			1: {
				x: trianglesPositionX,
				y: block.position.y - 0.5,
				z: block.position.z - 0.5,
			},
			2: {
				x: trianglesPositionX,
				y: block.position.y,
				z: block.position.z,
			},
			3: {
				x: trianglesPositionX,
				y: block.position.y - 0.5,
				z: block.position.z + 0.5,
			},
		},
		color: block.color,
	};
	const top: Triangle = {
		vertexPositions: {
			1: {
				x: trianglesPositionX,
				y: block.position.y + 0.5,
				z: block.position.z - 0.5,
			},
			2: {
				x: trianglesPositionX,
				y: block.position.y,
				z: block.position.z,
			},
			3: {
				x: trianglesPositionX,
				y: block.position.y + 0.5,
				z: block.position.z + 0.5,
			},
		},
		color: block.color,
	};
	const near: Triangle = {
		vertexPositions: {
			1: {
				x: trianglesPositionX,
				y: block.position.y - 0.5,
				z: block.position.z - 0.5,
			},
			2: {
				x: trianglesPositionX,
				y: block.position.y,
				z: block.position.z,
			},
			3: {
				x: trianglesPositionX,
				y: block.position.y + 0.5,
				z: block.position.z - 0.5,
			},
		},
		color: block.color,
	};
	const far: Triangle = {
		vertexPositions: {
			1: {
				x: trianglesPositionX,
				y: block.position.y - 0.5,
				z: block.position.z + 0.5,
			},
			2: {
				x: trianglesPositionX,
				y: block.position.y,
				z: block.position.z,
			},
			3: {
				x: trianglesPositionX,
				y: block.position.y + 0.5,
				z: block.position.z + 0.5,
			},
		},
		color: block.color,
	};
	return [bottom, top, near, far];
}
function computeRightTrianglesFromBlock(block: Block): readonly Triangle[] {
	const trianglesPositionX = block.position.x + 0.5;
	const bottom: Triangle = {
		vertexPositions: {
			1: {
				x: trianglesPositionX,
				y: block.position.y - 0.5,
				z: block.position.z - 0.5,
			},
			2: {
				x: trianglesPositionX,
				y: block.position.y,
				z: block.position.z,
			},
			3: {
				x: trianglesPositionX,
				y: block.position.y - 0.5,
				z: block.position.z + 0.5,
			},
		},
		color: block.color,
	};
	const top: Triangle = {
		vertexPositions: {
			1: {
				x: trianglesPositionX,
				y: block.position.y + 0.5,
				z: block.position.z - 0.5,
			},
			2: {
				x: trianglesPositionX,
				y: block.position.y,
				z: block.position.z,
			},
			3: {
				x: trianglesPositionX,
				y: block.position.y + 0.5,
				z: block.position.z + 0.5,
			},
		},
		color: block.color,
	};
	const near: Triangle = {
		vertexPositions: {
			1: {
				x: trianglesPositionX,
				y: block.position.y - 0.5,
				z: block.position.z - 0.5,
			},
			2: {
				x: trianglesPositionX,
				y: block.position.y,
				z: block.position.z,
			},
			3: {
				x: trianglesPositionX,
				y: block.position.y + 0.5,
				z: block.position.z - 0.5,
			},
		},
		color: block.color,
	};
	const far: Triangle = {
		vertexPositions: {
			1: {
				x: trianglesPositionX,
				y: block.position.y - 0.5,
				z: block.position.z + 0.5,
			},
			2: {
				x: trianglesPositionX,
				y: block.position.y,
				z: block.position.z,
			},
			3: {
				x: trianglesPositionX,
				y: block.position.y + 0.5,
				z: block.position.z + 0.5,
			},
		},
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
