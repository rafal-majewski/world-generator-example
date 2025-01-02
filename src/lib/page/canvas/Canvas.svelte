<script lang="ts">
	import type {Dimensions} from "../dimensions/Dimensions.ts";
	import type {Block} from "./Block.ts";
	import type {Camera} from "./Camera.ts";
	import {computeProjection} from "./computeProjection.ts";
	import {createCheckerboard} from "./createCheckerboard.ts";
	import type {Vertex} from "./Vertex.ts";
	import {Mat4VariableDefinition} from "./WebGL/program-wrapper/Mat4VariableDefinition.ts";
	import {Vec3VariableDefinition} from "./WebGL/program-wrapper/Vec3VariableDefinition.ts";
	import {WebGlProgramWrapper} from "./WebGL/program-wrapper/WebGlProgramWrapper.ts";
	import {WebGlWrapper} from "./WebGL/webgl-wrapper/WebGlWrapper.ts";
	import {computeTrianglesFromBlock} from "./computeTrianglesFromBlock.ts";
	import type {Triangle} from "./Triangle.ts";
	import type {XyzCoordinates} from "./XyzCoordinates.ts";
	const {dimensions}: Readonly<{dimensions: Dimensions}> = $props();
	let oldDimensions: Dimensions = dimensions;
	function handleMount(canvas: HTMLCanvasElement) {
		const gl = canvas.getContext("webgl2");
		if (gl === null) {
			throw new Error("Failed to get WebGL2 context.");
		}

		type Scene = Readonly<{
			blocks: readonly Block[];
			camera: Camera;
		}>;
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
			x: 17,
			z: 17,
		});
		function computeCameraPosition(timestamp: Date): XyzCoordinates {
			const angleRadians = computeCameraOrientationHorizontalRadians(timestamp);
			return {
				x: -15 * Math.sin(angleRadians),
				y: 4,
				z: -15 * Math.cos(angleRadians),
			};
		}
		function computeCameraOrientationHorizontalRadians(timestamp: Date): number {
			return timestamp.getTime() / 1000;
		}
		let scene = {
			blocks,
			camera: {
				position: computeCameraPosition(new Date()),
				orientation: {
					horizontalRadians: computeCameraOrientationHorizontalRadians(new Date()),
					verticalRadians: (-Math.PI / 2) * 0.2,
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
		requestAnimationFrame(function animate() {
			scene = {
				blocks,
				camera: {
					...scene.camera,
					position: computeCameraPosition(new Date()),
					orientation: {
						...scene.camera.orientation,
						horizontalRadians: computeCameraOrientationHorizontalRadians(new Date()),
					},
				},
			};
			webglWrapper.draw(scene);
			requestAnimationFrame(animate);
		});
	}
</script>

<canvas class="canvas" use:handleMount></canvas>

<style lang="scss">
	.canvas {
		position: absolute;
	}
</style>
