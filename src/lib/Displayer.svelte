<script lang="ts">
	import {applyGeneratorConfigurationToScene} from "./applyGeneratorConfigurationToScene.ts";
	import {computeNewScene} from "./computeNewScene.ts";
	import type {Dimensions} from "./Dimensions.ts";
	import {generateScene} from "./generateScene.ts";
	import type {GeneratorConfiguration} from "./GeneratorConfiguration.ts";
	import type {KeyboardState} from "./KeyboardState.ts";
	import {mainWebGlWrapperCreator} from "./mainWebGlWrapperCreator.ts";
	import type {Scene} from "./Scene.ts";
	import {startListeningForHtmlElementResizes} from "./startListeningForHtmlElementResizes.ts";
	import type {XyCoordinates} from "./XyCoordinates.ts";
	const {
		generatorConfiguration,
	}: Readonly<{
		generatorConfiguration: GeneratorConfiguration;
	}> = $props();
	let mainCanvas: HTMLCanvasElement;
	let keyboardState: KeyboardState = new Map();
	type MouseState = Readonly<{
		positionDelta: XyCoordinates | null;
		isDown: boolean;
	}>;
	let mouseState: MouseState = {
		positionDelta: null,
		isDown: false,
	};
	function handleKeyDown(event: KeyboardEvent): void {
		keyboardState = new Map([...keyboardState.entries(), [event.code, "down"]]);
	}
	function handleKeyUp(event: KeyboardEvent): void {
		keyboardState = new Map([...keyboardState.entries(), [event.code, "up"]]);
	}
	function handleMouseDown(): void {
		mouseState = {
			...mouseState,
			isDown: true,
		};
	}
	function handleMouseUp(): void {
		mouseState = {
			...mouseState,
			isDown: false,
		};
	}
	function handleMouseMove(event: MouseEvent): void {
		if (mouseState.isDown) {
			mouseState = {
				...mouseState,
				positionDelta: {
					x: event.movementX,
					y: event.movementY,
				},
			};
		}
	}
	// let sunCanvas: HTMLCanvasElement;
	let scene: Scene = generateScene(generatorConfiguration);
	$effect(() => {
		scene = applyGeneratorConfigurationToScene(scene, generatorConfiguration);
	});
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
		// const world: World = generateWorld({
		// 	x: 11,
		// 	z: 11,
		// });
		// function computeCameraPosition(timestamp: Date): XyzCoordinates {
		// 	const angleRadians = computeCameraOrientationHorizontalRadians(timestamp);
		// 	return {
		// 		x: -0 * Math.sin(angleRadians),
		// 		y: 2,
		// 		z: -0 * Math.cos(angleRadians),
		// 	};
		// }
		// function computeCameraOrientationHorizontalRadians(timestamp: Date): number {
		// 	return (0.2 * timestamp.getTime()) / 1000;
		// }
		// function computeSunAngleRadians(timestamp: Date): number {
		// 	return timestamp.getTime() * 0.0001;
		// }
		// let scene: Scene = {
		// 	world,
		// 	camera: new PerspectiveCamera(
		// 		computeCameraPosition(new Date()),
		// 		{
		// 			horizontalRadians: computeCameraOrientationHorizontalRadians(new Date()),
		// 			verticalRadians: 0,
		// 		},
		// 		{
		// 			horizontalRadians: Math.PI / 2,
		// 			verticalRadians: Math.PI / 2,
		// 		},
		// 	),
		// 	sun: new Sun(computeSunAngleRadians(new Date()), {
		// 		red: 1,
		// 		green: 1,
		// 		blue: 1,
		// 	}),
		// };
		mainWebGlWrapper.draw(scene);
		// sunWebGlWrapper.draw(scene);
		requestAnimationFrame(function animate() {
			// scene = {
			// 	// ...scene,
			// 	// camera: new PerspectiveCamera(
			// 	// 	computeCameraPosition(new Date()),
			// 	// 	{
			// 	// 		horizontalRadians: computeCameraOrientationHorizontalRadians(new Date()),
			// 	// 		verticalRadians: scene.camera.orientation.verticalRadians,
			// 	// 	},
			// 	// 	scene.camera.fieldOfView,
			// 	// ),
			// 	// sun: new Sun(computeSunAngleRadians(new Date()), scene.sun.color),
			// };
			scene = computeNewScene(scene, keyboardState, mouseState.positionDelta);
			mouseState = {
				...mouseState,
				positionDelta: null,
			};
			mainWebGlWrapper.draw(scene);
			// sunWebGlWrapper.draw(scene);
			requestAnimationFrame(animate);
		});
	});
</script>

<section>
	<canvas class="canvas canvas--main" bind:this={mainCanvas}></canvas>
</section>

<svelte:window
	onkeydown={handleKeyDown}
	onkeyup={handleKeyUp}
	onmousedown={handleMouseDown}
	onmouseup={handleMouseUp}
	onmousemove={handleMouseMove}
/>

<!-- <canvas class="canvas canvas--sun" bind:this={sunCanvas}></canvas> -->

<style lang="scss">
	.canvas {
		position: absolute;
	}
	.canvas--main {
		width: 100%;
		height: 100%;
	}
	section {
		flex: 1;
		position: relative;
	}
</style>
