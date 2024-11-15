<script lang="ts">
	import type {Dimensions} from "../Dimensions.ts";
	import type {OnscreenWebGL2RenderingContext} from "./OnscreenWebGL2RenderingContext.ts";
	import {updateGlDimensions} from "./updateGlDimensions.ts";
	const {dimensions}: Readonly<{dimensions: Dimensions}> = $props();

	function handleCanvasMount(canvas: HTMLCanvasElement): void {
		const gl = canvas.getContext("webgl2") as OnscreenWebGL2RenderingContext;
		gl.clearColor(0, 0, 0, 1);

		$effect(function handleDimensionsChange(): void {
			updateGlDimensions(gl, dimensions);
			gl.clear(gl.COLOR_BUFFER_BIT);
		});
	}
</script>

<canvas class="canvas" use:handleCanvasMount></canvas>

<style lang="scss">
	.canvas {
		width: 100%;
		height: 100%;
	}
</style>
