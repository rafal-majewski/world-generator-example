import {computeTerrainGeneratorConfigurationFromTerrainGeneratorConfigurationFormState} from "./computeTerrainGeneratorConfigurationFromTerrainGeneratorConfigurationFormState.ts";
import type {GeneratorConfiguration} from "./GeneratorConfiguration.ts";
import type {GeneratorConfigurationFormState} from "./GeneratorConfigurationFormState.ts";
export function computeGeneratorConfigurationFromGeneratorConfigurationFormState(
	formState: GeneratorConfigurationFormState,
): GeneratorConfiguration {
	const terrainConfiguration =
		computeTerrainGeneratorConfigurationFromTerrainGeneratorConfigurationFormState(
			formState.terrain,
		);
	return {
		terrain: terrainConfiguration,
	};
}
