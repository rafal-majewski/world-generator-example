<script lang="ts">
	import type {GeneratorConfigurationFormStateManager} from "./GeneratorConfigurationFormStateManager.svelte.ts";
	import type {LayerConfigurationFormState} from "./LayerConfigurationFormState.ts";
	const {
		layerConfiguration,
		index,
		manager,
	}: Readonly<{
		layerConfiguration: LayerConfigurationFormState;
		index: number;
		manager: GeneratorConfigurationFormStateManager;
	}> = $props();
	function handleAmplitudeInputInput(
		event: Event &
			Readonly<{
				currentTarget: EventTarget & HTMLInputElement;
			}>,
	): void {
		manager.updateAmplitude(index, event.currentTarget.valueAsNumber);
	}
	function handleFrequencyInputInput(
		event: Event &
			Readonly<{
				currentTarget: EventTarget & HTMLInputElement;
			}>,
	): void {
		manager.updateFrequency(index, event.currentTarget.valueAsNumber);
	}
	function handleShiftXInputInput(
		event: Event &
			Readonly<{
				currentTarget: EventTarget & HTMLInputElement;
			}>,
	): void {
		manager.updateShiftX(index, event.currentTarget.valueAsNumber);
	}
	function handleShiftYInputInput(
		event: Event &
			Readonly<{
				currentTarget: EventTarget & HTMLInputElement;
			}>,
	): void {
		manager.updateShiftY(index, event.currentTarget.valueAsNumber);
	}
	function handleAngleInputInput(
		event: Event &
			Readonly<{
				currentTarget: EventTarget & HTMLInputElement;
			}>,
	): void {
		manager.updateAngle(index, event.currentTarget.valueAsNumber);
	}
</script>

<tr>
	<td>
		<input
			type="number"
			step="0.2"
			value={layerConfiguration.amplitude}
			oninput={handleAmplitudeInputInput}
		/>
	</td>
	<td>
		<input
			type="number"
			step="0.01"
			value={layerConfiguration.frequency}
			oninput={handleFrequencyInputInput}
		/>
	</td>
	<td>
		<input
			type="number"
			step="0.1"
			min="0"
			max={Math.PI * 2}
			value={layerConfiguration.shiftRadians.x}
			oninput={handleShiftXInputInput}
		/>
	</td>
	<td>
		<input
			type="number"
			step="0.1"
			min="0"
			max={Math.PI * 2}
			value={layerConfiguration.shiftRadians.y}
			oninput={handleShiftYInputInput}
		/>
	</td>
	<td>
		<input
			type="number"
			step="0.1"
			min="0"
			max={Math.PI * 2}
			value={layerConfiguration.angleRadians}
			oninput={handleAngleInputInput}
		/>
	</td>
</tr>
