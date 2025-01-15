<script lang="ts">
	import type {Dimensions} from "./Dimensions.ts";
	import {generateWorld} from "./generateWorld.ts";
	import {mainWebGlWrapperCreator} from "./mainWebGlWrapperCreator.ts";
	import {PerspectiveCamera} from "./PerspectiveCamera.ts";
	import type {Scene} from "./Scene.ts";
	import {startListeningForHtmlElementResizes} from "./startListeningForHtmlElementResizes.ts";
	import {Sun} from "./Sun.ts";
	import type {World} from "./World.ts";
	import type {XyzCoordinates} from "./XyzCoordinates.ts";
	let mainCanvas: HTMLCanvasElement;
	// let sunCanvas: HTMLCanvasElement;
	$effect(function handleMount() {
		const mainGl = mainCanvas.getContext("webgl2");
		// const sunGl = sunCanvas.getContext("webgl2");
		if (mainGl === null) {
			throw new Error("Failed to get WebGL2 context.");
		}
		const mainWebGlWrapper = mainWebGlWrapperCreator.create(mainGl);
		// const sunWebGlWrapper = WebGlWrapper.create(sunGl, [
		// 	terrainFromSunWebGlProgramWrapperCreator,
		// ] as const);
		$effect(() => {
			const stopListeningForResizes = startListeningForHtmlElementResizes(
				mainCanvas,
				function handleResize(dimensions: Dimensions) {
					mainWebGlWrapper.resize(dimensions);
					mainWebGlWrapper.draw(scene);
				},
			);
			return stopListeningForResizes;
		});
		const world: World = generateWorld({
			x: 11,
			z: 11,
		});
		function computeCameraPosition(timestamp: Date): XyzCoordinates {
			const angleRadians = computeCameraOrientationHorizontalRadians(timestamp);
			return {
				x: -0 * Math.sin(angleRadians),
				y: 2,
				z: -0 * Math.cos(angleRadians),
			};
		}
		function computeCameraOrientationHorizontalRadians(timestamp: Date): number {
			return (0.2 * timestamp.getTime()) / 1000;
		}
		function computeSunAngleRadians(timestamp: Date): number {
			return timestamp.getTime() * 0.0001;
		}
		let scene: Scene = {
			world,
			camera: new PerspectiveCamera(
				computeCameraPosition(new Date()),
				{
					horizontalRadians: computeCameraOrientationHorizontalRadians(new Date()),
					verticalRadians: 0,
				},
				{
					horizontalRadians: Math.PI / 2,
					verticalRadians: Math.PI / 2,
				},
			),
			sun: new Sun(computeSunAngleRadians(new Date()), {
				red: 1,
				green: 1,
				blue: 1,
			}),
		};
		mainWebGlWrapper.draw(scene);
		// sunWebGlWrapper.draw(scene);
		requestAnimationFrame(function animate() {
			scene = {
				...scene,
				camera: new PerspectiveCamera(
					computeCameraPosition(new Date()),
					{
						horizontalRadians: computeCameraOrientationHorizontalRadians(new Date()),
						verticalRadians: scene.camera.orientation.verticalRadians,
					},
					scene.camera.fieldOfView,
				),
				sun: new Sun(computeSunAngleRadians(new Date()), scene.sun.color),
			};
			mainWebGlWrapper.draw(scene);
			// sunWebGlWrapper.draw(scene);
			requestAnimationFrame(animate);
		});
	});
</script>

<canvas class="canvas canvas--main" bind:this={mainCanvas}></canvas>

<!-- <canvas class="canvas canvas--sun" bind:this={sunCanvas}></canvas> -->

<style lang="scss">
	.canvas {
		position: absolute;
	}
	.canvas--main {
		width: 100%;
		height: 100%;
	}
</style>
