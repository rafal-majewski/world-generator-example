// import type {XyCoordinates} from "./XyCoordinates.ts";
// import type {AmplitudeComputer} from "./AmplitudeComputer.ts";
// import type {AngleComputer} from "./AngleComputer.ts";
// import {computeAmplitudeMultiplier} from "./computeAmplitudeMultiplierFromLayerConfigurations.ts";
// import type {FrequencyComputer} from "./FrequencyComputer.ts";
// import type {ShiftComputer} from "./ShiftComputer.ts";
// import {rotateXyCoordinates} from "./rotateXyCoordinates.ts";
// export class AutomaticNoiseGenerator {
// 	private readonly amplitudeMultiplier: number;
// 	// TODO: No computations in constructor!
// 	public constructor(
// 		layerCount: number,
// 		amplitudeComputer: AmplitudeComputer,
// 		frequencyComputer: FrequencyComputer,
// 		shiftComputer: ShiftComputer,
// 		angleComputer: AngleComputer,
// 	) {
// 		this.amplitudeMultiplier = computeAmplitudeMultiplier(layerCount, amplitudeComputer);
// 		this.layerCount = layerCount;
// 		this.amplitudeComputer = amplitudeComputer;
// 		this.frequencyComputer = frequencyComputer;
// 		this.shiftComputer = shiftComputer;
// 		this.angleComputer = angleComputer;
// 	}
// 	private readonly layerCount: number;
// 	private readonly amplitudeComputer: AmplitudeComputer;
// 	private readonly frequencyComputer: FrequencyComputer;
// 	private readonly shiftComputer: ShiftComputer;
// 	private readonly angleComputer: AngleComputer;
// 	public compute(position: XyCoordinates): number {
// 		let result = 0;
// 		for (let layerIndex = 0; layerIndex < this.layerCount; layerIndex += 1) {
// 			// TODO: Optimze. precompute LayerConfigurations
// 			const normalizedLayerIndex = layerIndex / this.layerCount;
// 			const angle = this.angleComputer(normalizedLayerIndex);
// 			const rotatedPosition: XyCoordinates = rotateXyCoordinates(position, angle);
// 			const frequency = this.frequencyComputer(normalizedLayerIndex);
// 			const shift: XyCoordinates = this.shiftComputer(normalizedLayerIndex);
// 			const amplitude = this.amplitudeComputer(normalizedLayerIndex);
// 			result +=
// 				amplitude *
// 				Math.sin(rotatedPosition.x * frequency + shift.x) *
// 				Math.sin(rotatedPosition.y * frequency + shift.y);
// 		}
// 		return result * this.amplitudeMultiplier;
// 	}
// }