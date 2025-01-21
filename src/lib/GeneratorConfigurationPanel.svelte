<script lang="ts">
	import GeneratorConfigurationPanelLayerConfigurationRow from "./GeneratorConfigurationPanelLayerConfigurationRow.svelte";

	import type {GeneratorConfigurationFormStateManager} from "./GeneratorConfigurationFormStateManager.svelte.ts";
	const {
		manager,
	}: Readonly<{
		manager: GeneratorConfigurationFormStateManager;
	}> = $props();
	function handleAddLayerButtonClick(): void {
		manager.addTerrainLayerConfiguration();
	}
</script>

<section>
	<form>
		<fieldset>
			<legend>Terrain generation</legend>
			<table>
				<thead>
					<tr>
						<th>Amplitude</th>
						<th>Frequency</th>
						<th>Shift (x)</th>
						<th>Shift (y)</th>
						<th>Angle</th>
					</tr>
				</thead>
				<tbody>
					{#each manager.$state.terrain.layerConfigurations as layerConfiguration, index (index)}
						<GeneratorConfigurationPanelLayerConfigurationRow {layerConfiguration} {index} {manager}
						></GeneratorConfigurationPanelLayerConfigurationRow>
					{/each}
				</tbody>
			</table>
			<button type="button" onclick={handleAddLayerButtonClick}>Add layer</button>
		</fieldset>
	</form>
</section>

<style lang="scss">
	section {
		flex: 1;
	}
</style>
