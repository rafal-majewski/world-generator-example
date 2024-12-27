<script lang="ts">
	import {WithoutUniformsWebGlWrapperComponent} from "./WebGL/webgl-wrapper-component/types/without-uniforms-webgl-wrapper-component/WithoutUniformsWebGlWrapperComponent.ts";
	import {WebGlWrapper} from "./WebGL/webgl-wrapper/WebGlWrapper.ts";
	import {WithoutUniformsWebGlProgramWrapper} from "./WebGL/program-wrapper/WithoutUniformsWebGlProgramWrapper.ts";
	import type {Dimensions} from "../dimensions/Dimensions.ts";
	const {dimensions}: Readonly<{dimensions: Dimensions}> = $props();
	let oldDimensions: Dimensions = dimensions;
	function handleMount(canvas: HTMLCanvasElement) {
		const gl = canvas.getContext("webgl2");
		if (gl === null) {
			throw new Error("Failed to get WebGL2 context.");
		}
		type Triangle = {
			vertices: readonly [
				readonly [number, number],
				readonly [number, number],
				readonly [number, number],
			];
		};
		const programWrapper = WithoutUniformsWebGlProgramWrapper.create(
			gl,
			{
				position: "vec2",
			},
			{
				precision: "highp",
				createSourceCodeMainContent: ({ins}) => `gl_Position = vec4(${ins.position}, 0.0, 1.0);`,
			},
			{},
			{
				precision: "highp",
				createSourceCodeMainContent: ({outs}) => `${outs.fragColor} = vec4(1.0, 0.0, 0.0, 1.0);`,
			},
			{
				fragColor: "vec4",
			},
			{
				position: {
					1: (triangle: Triangle) => triangle.vertices[0],
					2: (triangle: Triangle) => triangle.vertices[1],
					3: (triangle: Triangle) => triangle.vertices[2],
				},
			},
		);
		type Scene = Readonly<{
			triangles: readonly Triangle[];
		}>;
		const webglWrapper = new WebGlWrapper(gl, [
			// {
			// 	programWrapper,
			// 	trianglesSelector: (scene: Scene) => scene.triangles,
			// 	contextSelector: (scene: Scene) => scene.triangles,
			// },
			new WithoutUniformsWebGlWrapperComponent(programWrapper, (scene: Scene) => scene.triangles),
		] as const);
		const triangles = [
			{
				vertices: [
					[-1, -1],
					[-1, 1],
					[1, -1],
				],
			},
			{
				vertices: [
					[-1, 1],
					[1, 1],
					[1, -1],
				],
			},
		] as const satisfies readonly Triangle[];
		const scene = {
			triangles,
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
