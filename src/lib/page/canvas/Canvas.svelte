<script lang="ts">
	import type {Dimensions} from "../dimensions/Dimensions.ts";
	import type {Block} from "./Block.ts";
	import type {Camera} from "./Camera.ts";
	import {computeProjection} from "./computeProjection.ts";
	import {createCheckerboard} from "./createCheckerboard.ts";
	import type {RgbColor} from "./RgbColor.ts";
	import type {Vertex} from "./Vertex.ts";
	import {Mat4VariableDefinition} from "./WebGL/program-wrapper/Mat4VariableDefinition.ts";
	import {Vec3VariableDefinition} from "./WebGL/program-wrapper/Vec3VariableDefinition.ts";
	import {WebGlProgramWrapper} from "./WebGL/program-wrapper/WebGlProgramWrapper.ts";
	import {WebGlWrapper} from "./WebGL/webgl-wrapper/WebGlWrapper.ts";
	import type {XyzCoordinates} from "./XyzCoordinates.ts";
	const {dimensions}: Readonly<{dimensions: Dimensions}> = $props();
	let oldDimensions: Dimensions = dimensions;
	function handleMount(canvas: HTMLCanvasElement) {
		const gl = canvas.getContext("webgl2");
		if (gl === null) {
			throw new Error("Failed to get WebGL2 context.");
		}
		type Triangle = Readonly<{
			vertexPositions: Readonly<Record<1 | 2 | 3, XyzCoordinates>>;
			color: RgbColor;
		}>;
		type Scene = Readonly<{
			blocks: readonly Block[];
			camera: Camera;
		}>;
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
		function computeTrianglesFromBlock(block: Block): readonly Triangle[] {
			const nearTriangles = computeNearTrianglesFromBlock(block);
			return nearTriangles;
		}
		const programWrapper = WebGlProgramWrapper.create(
			gl,
			{
				projection: new Mat4VariableDefinition((scene: Scene) => {
					const projection = computeProjection(scene.camera);
					return projection;
				}),
			},
			{
				position: new Vec3VariableDefinition((vertex: Vertex) => [
					vertex.position.x,
					vertex.position.y,
					vertex.position.z,
				]),
				color: new Vec3VariableDefinition((vertex: Vertex) => [
					vertex.color.red,
					vertex.color.green,
					vertex.color.blue,
				]),
			},
			{
				color: "vec3",
			},
			{
				precision: "highp",
				mainContentCreator: ({uniforms, ins, outs}) =>
					`gl_Position = ${uniforms.projection} * vec4(${ins.position}, 1.0);
${outs.color} = ${ins.color};`,
			},
			{
				color: "vec4",
			},
			{
				precision: "highp",
				mainContentCreator: ({ins, outs}) => `${outs.color} = vec4(${ins.color}, 1.0);`,
			},
			(scene: Scene) => scene.blocks.flatMap(computeTrianglesFromBlock),
			(triangle: Triangle) => ({
				1: {
					position: triangle.vertexPositions[1],
					color: triangle.color,
				},
				2: {
					position: triangle.vertexPositions[2],
					color: triangle.color,
				},
				3: {
					position: triangle.vertexPositions[3],
					color: triangle.color,
				},
			}),
		);
		const webglWrapper = WebGlWrapper.create(gl, [programWrapper], {
			red: 1,
			green: 0,
			blue: 0,
		});
		const blocks = createCheckerboard({
			x: 10,
			z: 10,
		});
		const scene = {
			blocks,
			camera: {
				position: {
					x: 0,
					y: 0,
					z: 0,
				},
				orientation: {
					horizontalRadians: 0,
					verticalRadians: 0,
				},
				fieldOfView: {
					horizontalRadians: Math.PI / 2,
					verticalRadians: Math.PI / 2,
				},
			},
		} as const satisfies Scene;
		webglWrapper.resize(dimensions);
		webglWrapper.draw(scene);
		$effect(function handleDimensionsChange() {
			if (oldDimensions !== dimensions) {
				webglWrapper.resize(dimensions);
				webglWrapper.draw(scene);
				oldDimensions = dimensions;
			}
		});
	}
</script>

<canvas class="canvas" use:handleMount></canvas>

<style lang="scss">
	.canvas {
		position: absolute;
	}
</style>
