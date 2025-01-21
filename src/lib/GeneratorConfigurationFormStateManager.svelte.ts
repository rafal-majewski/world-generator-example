import type {GeneratorConfigurationFormState} from "./GeneratorConfigurationFormState.ts";
import type {LayerConfigurationFormState} from "./LayerConfigurationFormState.ts";
export class GeneratorConfigurationFormStateManager {
	private state = $state.raw<GeneratorConfigurationFormState>({
		terrain: {
			layerConfigurations: [],
		},
	});
	public addTerrainLayerConfiguration(): void {
		const newConfigurations: readonly LayerConfigurationFormState[] = [
			...this.state.terrain.layerConfigurations,
			{
				amplitude: 1,
				frequency: 0.1,
				shiftRadians: {
					x: Math.random() * Math.PI * 2,
					y: Math.random() * Math.PI * 2,
				},
				angleRadians: Math.random() * Math.PI * 2,
			},
		];
		this.state = {
			...this.state,
			terrain: {
				...this.state.terrain,
				layerConfigurations: newConfigurations,
			},
		};
	}
	public get $state(): GeneratorConfigurationFormState {
		return this.state;
	}
	public updateAmplitude(index: number, amplitude: number): void {
		const newConfigurations: readonly LayerConfigurationFormState[] =
			this.state.terrain.layerConfigurations.map((configuration, i) =>
				i === index
					? {
							...configuration,
							amplitude,
						}
					: configuration,
			);
		this.state = {
			...this.state,
			terrain: {
				...this.state.terrain,
				layerConfigurations: newConfigurations,
			},
		};
	}
	public updateFrequency(index: number, frequency: number): void {
		const newConfigurations: readonly LayerConfigurationFormState[] =
			this.state.terrain.layerConfigurations.map((configuration, i) =>
				i === index
					? {
							...configuration,
							frequency,
						}
					: configuration,
			);
		this.state = {
			...this.state,
			terrain: {
				...this.state.terrain,
				layerConfigurations: newConfigurations,
			},
		};
	}
	public updateShiftX(index: number, shiftXRadians: number): void {
		const newConfigurations: readonly LayerConfigurationFormState[] =
			this.state.terrain.layerConfigurations.map((configuration, i) =>
				i === index
					? {
							...configuration,
							shiftRadians: {
								...configuration.shiftRadians,
								x: shiftXRadians,
							},
						}
					: configuration,
			);
		this.state = {
			...this.state,
			terrain: {
				...this.state.terrain,
				layerConfigurations: newConfigurations,
			},
		};
	}
	public updateShiftY(index: number, shiftYRadians: number): void {
		const newConfigurations: readonly LayerConfigurationFormState[] =
			this.state.terrain.layerConfigurations.map((configuration, i) =>
				i === index
					? {
							...configuration,
							shiftRadians: {
								...configuration.shiftRadians,
								y: shiftYRadians,
							},
						}
					: configuration,
			);
		this.state = {
			...this.state,
			terrain: {
				...this.state.terrain,
				layerConfigurations: newConfigurations,
			},
		};
	}
	public updateAngle(index: number, angleRadians: number): void {
		const newConfigurations: readonly LayerConfigurationFormState[] =
			this.state.terrain.layerConfigurations.map((configuration, i) =>
				i === index
					? {
							...configuration,
							angleRadians,
						}
					: configuration,
			);
		this.state = {
			...this.state,
			terrain: {
				...this.state.terrain,
				layerConfigurations: newConfigurations,
			},
		};
	}
}
