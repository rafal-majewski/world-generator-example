<script lang="ts">
	import {applyGeneratorConfigurationToScene} from "./applyGeneratorConfigurationToScene.ts";
	import {ComposedNewSceneComputer} from "./ComposedNewSceneComputer.ts";
	import type {Dimensions} from "./Dimensions.ts";
	import {generateScene} from "./generateScene.ts";
	import type {GeneratorConfiguration} from "./GeneratorConfiguration.ts";
	import type {Interactions} from "./Interactions.ts";
	import type {KeyCodesState} from "./KeyCodesState.ts";
	import {mainWebGlWrapperBuilder} from "./mainWebGlWrapperBuilder.ts";
	import type {Scene} from "./Scene.ts";
	import {startListeningForHtmlElementResizes} from "./startListeningForHtmlElementResizes.ts";
	import {UpdatingCameraNewSceneComputer} from "./UpdatingCameraNewSceneComputer.ts";
	const {
		generatorConfiguration,
	}: Readonly<{
		generatorConfiguration: GeneratorConfiguration;
	}> = $props();
	let mainCanvas: HTMLCanvasElement;
	let interactions: Interactions = {
		keyboardState: {
			keyCodesStates: new Map(),
		},
		mouseState: {
			movementDeltaPixelCount: {
				x: 0,
				y: 0,
			},
			leftButtonState: "up",
		},
	};

	function handleKeyDown(event: KeyboardEvent): void {
		const newKeyCodesStates: KeyCodesState = new Map([
			...interactions.keyboardState.keyCodesStates.entries(),
			[event.code, "down"],
		]);
		interactions = {
			...interactions,
			keyboardState: {
				keyCodesStates: newKeyCodesStates,
			},
		};
	}
	function handleKeyUp(event: KeyboardEvent): void {
		const newKeyCodesStates: KeyCodesState = new Map([
			...interactions.keyboardState.keyCodesStates.entries(),
			[event.code, "up"],
		]);
		interactions = {
			...interactions,
			keyboardState: {
				keyCodesStates: newKeyCodesStates,
			},
		};
	}
	function handleMouseDown(): void {
		interactions = {
			...interactions,
			mouseState: {
				...interactions.mouseState,
				leftButtonState: "down",
			},
		};
	}
	function handleMouseUp(): void {
		interactions = {
			...interactions,
			mouseState: {
				...interactions.mouseState,
				leftButtonState: "up",
			},
		};
	}
	function handleMouseMove(event: MouseEvent): void {
		interactions = {
			...interactions,
			mouseState: {
				...interactions.mouseState,
				movementDeltaPixelCount: {
					x: event.movementX,
					y: event.movementY,
				},
			},
		};
	}
	// let sunCanvas: HTMLCanvasElement;
	let scene: Scene = generateScene(generatorConfiguration);
	$effect(() => {
		scene = applyGeneratorConfigurationToScene(scene, generatorConfiguration);
	});
	const updatingCameraNewSceneComputer = new UpdatingCameraNewSceneComputer();
	const composedNewSceneComputer = new ComposedNewSceneComputer([updatingCameraNewSceneComputer]);
	$effect(function handleMount() {
		const mainGl = mainCanvas.getContext("webgl2");
		// const sunGl = sunCanvas.getContext("webgl2");
		if (mainGl === null) {
			throw new Error("Failed to get WebGL2 context.");
		}
		const mainWebGlWrapper = mainWebGlWrapperBuilder.build(mainGl);
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
		// sunWebGlWrapper.draw(scene);console.log(scene);
		console.log(scene);
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
			scene = composedNewSceneComputer.compute(scene, interactions);

			mainWebGlWrapper.draw(scene);
			interactions = {
				...interactions,
				mouseState: {
					...interactions.mouseState,
					movementDeltaPixelCount: {
						x: 0,
						y: 0,
					},
				},
			};
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
