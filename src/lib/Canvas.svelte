<script lang="ts">
	import {blockWebGlProgramWrapperConfiguration} from "./blockWebGlProgramWrapperConfiguration.ts";
	import {generateBlocks} from "./generateBlocks.ts";
	import type {Scene} from "./Scene.ts";
	import {WebGlProgramWrapper} from "./WebGlProgramWrapper.ts";
	import {WebGlWrapper} from "./WebGlWrapper.ts";
	import type {XyzCoordinates} from "./XyzCoordinates.ts";
	function handleMount(canvas: HTMLCanvasElement) {
		const gl = canvas.getContext("webgl2");
		if (gl === null) {
			throw new Error("Failed to get WebGL2 context.");
		}
		const blockWebGlProgramWrapper = WebGlProgramWrapper.create(
			gl,
			blockWebGlProgramWrapperConfiguration,
		);
		const webglWrapper = WebGlWrapper.create(gl, [blockWebGlProgramWrapper], {
			red: 0,
			green: 0.5,
			blue: 0.9,
		});
		const blocks = generateBlocks({
			x: 11,
			z: 11,
		});
		function computeCameraPosition(timestamp: Date): XyzCoordinates {
			const angleRadians = computeCameraOrientationHorizontalRadians(timestamp);
			return {
				x: -8 * Math.sin(angleRadians),
				y: 6,
				z: -8 * Math.cos(angleRadians),
			};
		}
		function computeCameraOrientationHorizontalRadians(timestamp: Date): number {
			return (0.1 * timestamp.getTime()) / 1000;
		}
		let scene = {
			blocks,
			camera: {
				position: computeCameraPosition(new Date()),
				orientation: {
					horizontalRadians: computeCameraOrientationHorizontalRadians(new Date()),
					verticalRadians: (-Math.PI / 2) * 0.5,
				},
				fieldOfView: {
					horizontalRadians: Math.PI / 2,
					verticalRadians: Math.PI / 2,
				},
			},
			sun: {
				angleRadians: 0,
				color: {
					red: 1,
					green: 1,
					blue: 1,
				},
			},
		} as const satisfies Scene;
		// webglWrapper.resize({
		// 	width: canvas.width,
		// 	height: canvas.height,
		// });
		webglWrapper.draw(scene);
		// $effect(function handleDimensionsChange() {
		// 	if (oldDimensions !== dimensions) {
		// 		webglWrapper.resize(dimensions);
		// 		webglWrapper.draw(scene);
		// 		oldDimensions = dimensions;
		// 	}
		// });
		setTimeout(function animate() {
			scene = {
				...scene,
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
			setTimeout(animate, 30);
		}, 30);
	}
</script>

<canvas class="canvas" use:handleMount></canvas>

<style lang="scss">
	.canvas {
		position: absolute;
	}
</style>
