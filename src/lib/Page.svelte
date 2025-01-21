<script lang="ts">
	import Displayer from "./Displayer.svelte";
	import {computeGeneratorConfigurationFromGeneratorConfigurationFormState} from "./computeGeneratorConfigurationFromGeneratorConfigurationFormState.ts";
	import {GeneratorConfigurationFormStateManager} from "./GeneratorConfigurationFormStateManager.svelte.ts";
	import GeneratorConfigurationPanel from "./GeneratorConfigurationPanel.svelte";
	const manager = new GeneratorConfigurationFormStateManager();
	const generatorConfiguration = $derived(
		computeGeneratorConfigurationFromGeneratorConfigurationFormState(manager.$state),
	);
</script>

<main class="page">
	<Displayer {generatorConfiguration} />
	<GeneratorConfigurationPanel {manager} />
</main>

<style lang="scss">
	.page {
		flex: 1;
		position: relative;
		overflow: hidden;
		display: flex;
	}
</style>
