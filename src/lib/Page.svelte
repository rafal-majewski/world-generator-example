<script lang="ts">
	import type {Dimensions} from "./Dimensions.ts";
	import Canvas from "./canvas/Canvas.svelte";
	import {startListeningForHtmlElementResizes} from "./startListeningForHtmlElementResizes.ts";
	let dimensions: Dimensions | null = $state<Dimensions | null>(null);
	function handleMount(element: HTMLElement) {
		$effect(function useEffect() {
			const stopListeningForResizes = startListeningForHtmlElementResizes(
				element,
				function handleResize(newDimensions: Dimensions) {
					dimensions = newDimensions;
				},
			);
			return function handleUnmount() {
				stopListeningForResizes();
			};
		});
	}
</script>

<main class="page" use:handleMount>
	{#if dimensions !== null}
		<Canvas {dimensions} />
	{/if}
</main>

<style lang="scss">
	.page {
		flex: 1;
		position: relative;
		overflow: hidden;
	}
</style>
