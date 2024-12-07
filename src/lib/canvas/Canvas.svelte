<script lang="ts">
	import {ProgramWrapper} from "$lib/WebGL/ProgramWrapper.ts";
	import type {Dimensions} from "../dimensions/Dimensions.ts";
	const {dimensions}: Readonly<{dimensions: Dimensions | null}> = $props();

	function handleMount(canvas: HTMLCanvasElement) {
		const gl = canvas.getContext("webgl2");

		if (gl === null) {
			throw new Error("Failed to get WebGL2 context.");
		}

		if (dimensions === null) {
			return;
		}

		let oldDimensions: Dimensions = $state<Dimensions>(dimensions);
		canvas.width = dimensions.width;
		canvas.height = dimensions.height;
		gl.viewport(0, 0, dimensions.width, dimensions.height);
		gl.clearColor(0, 0, 0, 1);
		gl.clear(gl.COLOR_BUFFER_BIT);

		type Triangle = {
			vertices: readonly [
				readonly [number, number],
				readonly [number, number],
				readonly [number, number],
			];
		};

		const program = ProgramWrapper.create(
			gl,
			{},
			{
				ins: {
					a_position: "vec2",
				},
				precision: "highp",
				createSourceCodeMainContent: ({ins: {a_position}}) =>
					`gl_Position = vec4(${a_position}, 0.0, 1.0);`,
			},
			{},
			{
				outs: {
					o_fragColor: "vec4",
				},
				precision: "highp",
				createSourceCodeMainContent: ({outs: {o_fragColor}}) =>
					`${o_fragColor} = vec4(1.0, 0.0, 0.0, 1.0);`,
			},
			{
				a_position: (triangle: Triangle, vertexIndex) => triangle.vertices[vertexIndex],
			},
		);

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

		program.draw(triangles);

		$effect(function handleDimensionsChange() {
			if (dimensions !== oldDimensions) {
				oldDimensions = dimensions;
				canvas.width = dimensions.width;
				canvas.height = dimensions.height;
				gl.viewport(0, 0, dimensions.width, dimensions.height);
				gl.clear(gl.COLOR_BUFFER_BIT);
				program.draw(triangles);
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
