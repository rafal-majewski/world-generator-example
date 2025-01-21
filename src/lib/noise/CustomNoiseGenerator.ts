import type {XyCoordinates} from "./XyCoordinates.ts";
import {computeAmplitudeMultiplierFromLayerConfigurations} from "./computeAmplitudeMultiplierFromLayerConfigurations.ts";
import {rotateXyCoordinates} from "./rotateXyCoordinates.ts";
import type {LayerConfiguration} from "$lib/LayerConfiguration.ts";
import type {NoiseGenerator} from "./NoiseGenerator.ts";
export class CustomNoiseGenerator implements NoiseGenerator {
	public static create(layerConfigurations: readonly LayerConfiguration[]): CustomNoiseGenerator {
		const aplitudeMultiplier =
			computeAmplitudeMultiplierFromLayerConfigurations(layerConfigurations);
		const sanitizedLayerConfigurations: readonly LayerConfiguration[] = layerConfigurations.map(
			(layerConfiguration: LayerConfiguration): LayerConfiguration => ({
				...layerConfiguration,
				amplitude: layerConfiguration.amplitude * aplitudeMultiplier,
			}),
		);
		const generator = new CustomNoiseGenerator(sanitizedLayerConfigurations);
		return generator;
	}
	private readonly layerConfigurations: readonly LayerConfiguration[];
	public compute(position: XyCoordinates): number {
		let accumulatedResult = 0;
		// for (let layerIndex = 0; layerIndex < this.layerCount; layerIndex += 1) {
		// 	const normalizedLayerIndex = layerIndex / this.layerCount;
		// 	const angle = this.angleComputer(normalizedLayerIndex);
		// 	const rotatedPosition: XyCoordinates = rotateXyCoordinates(position, angle);
		// 	const frequency = this.frequencyComputer(normalizedLayerIndex);
		// 	const shift: XyCoordinates = this.shiftComputer(normalizedLayerIndex);
		// 	const amplitude = this.amplitudeComputer(normalizedLayerIndex);
		// 	result +=
		// 		amplitude *
		// 		Math.sin(rotatedPosition.x * frequency + shift.x) *
		// 		Math.sin(rotatedPosition.y * frequency + shift.y);
		// }
		// return result * this.aplitudeMultiplier;
		for (const layerConfiguration of this.layerConfigurations) {
			const rotatedPosition: XyCoordinates = rotateXyCoordinates(
				position,
				layerConfiguration.angleRadians,
			);
			accumulatedResult +=
				layerConfiguration.amplitude *
				Math.sin(
					rotatedPosition.x * layerConfiguration.frequency + layerConfiguration.shiftRadians.x,
				) *
				Math.sin(
					rotatedPosition.y * layerConfiguration.frequency + layerConfiguration.shiftRadians.y,
				);
		}
		return accumulatedResult;
	}
	private constructor(layerConfigurations: readonly LayerConfiguration[]) {
		this.layerConfigurations = layerConfigurations;
	}
}
