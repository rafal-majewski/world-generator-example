<script lang="ts">
	import {blockWebGlProgramWrapperConfiguration} from "./blockWebGlProgramWrapperConfiguration.ts";
	import {generateBlocks} from "./generateBlocks.ts";
	import type {RgbColor} from "./RgbColor.ts";
	import type {Scene} from "./Scene.ts";
	import {skyboxWebGlProgramWrapperConfiguration} from "./skyboxWebGlProgramWrapperConfiguration.ts";
	import {WebGlWrapper} from "./WebGlWrapper.ts";
	import type {XyzCoordinates} from "./XyzCoordinates.ts";
	function handleMount(canvas: HTMLCanvasElement) {
		const gl = canvas.getContext("webgl2");
		if (gl === null) {
			throw new Error("Failed to get WebGL2 context.");
		}
		const webglWrapper = WebGlWrapper.create(
			gl,
			[skyboxWebGlProgramWrapperConfiguration, blockWebGlProgramWrapperConfiguration] as const,
			{
				red: 0,
				green: 0.5,
				blue: 0.9,
			} as const satisfies RgbColor,
		);
		const blocks = generateBlocks({
			x: 11,
			z: 11,
		});
		function computeCameraPosition(timestamp: Date): XyzCoordinates {
			const angleRadians = computeCameraOrientationHorizontalRadians(timestamp);
			return {
				x: -20 * Math.sin(angleRadians),
				y: 20,
				z: -20 * Math.cos(angleRadians),
			};
		}
		function computeCameraOrientationHorizontalRadians(timestamp: Date): number {
			return (0.644 * timestamp.getTime()) / 1000;
		}
		function computeSunAngleRadians(timestamp: Date): number {
			return (1 * timestamp.getTime()) / 1000;
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
			sun: {
				angleRadians: computeSunAngleRadians(new Date()),
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
				sun: {
					...scene.sun,
					angleRadians: computeSunAngleRadians(new Date()),
				},
			};
			webglWrapper.draw(scene);
			setTimeout(animate, 30);
		}, 30);
	}
</script>

<canvas width="300" height="300" class="canvas" use:handleMount></canvas>

<style lang="scss">
	.canvas {
		position: absolute;
	}
</style>
