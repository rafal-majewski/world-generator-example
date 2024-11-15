<script lang="ts">
	import Canvas from "./canvas-displayer/Canvas.svelte";
	import type {Dimensions} from "./Dimensions.ts";
	let dimensions: Dimensions | null = $state.raw<Dimensions | null>(null);

	function handleMount(HTMLElement: HTMLElement): void {
		$effect(function attachResizeObserver(): () => void {
			const resizeObserver = new ResizeObserver((entries: readonly ResizeObserverEntry[]): void => {
				for (const entry of entries) {
					dimensions = {
						width: entry.contentRect.width,
						height: entry.contentRect.height,
					};
				}
			});

			resizeObserver.observe(HTMLElement);
			return resizeObserver.disconnect;
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
		display: grid;
	}
</style>
