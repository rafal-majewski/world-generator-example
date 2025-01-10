import type {XyCoordinates} from "./XyCoordinates.ts";
import type {AmplitudeComputer} from "./AmplitudeComputer.ts";
import type {AngleComputer} from "./AngleComputer.ts";
import {computeAmplitudeMultiplier} from "./computeAmplitudeMultiplier.ts";
import type {FrequencyComputer} from "./FrequencyComputer.ts";
import type {ShiftComputer} from "./ShiftComputer.ts";
import {rotateXyCoordinates} from "./rotateXyCoordinates.ts";
export class LoopingNoiseGenerator {
	private readonly aplitudeMultiplier: number;
	public constructor(
		layerCount: number,
		amplitudeComputer: AmplitudeComputer,
		frequencyComputer: FrequencyComputer,
		shiftComputer: ShiftComputer,
		angleComputer: AngleComputer,
	) {
		this.aplitudeMultiplier = computeAmplitudeMultiplier(layerCount, amplitudeComputer);
		this.layerCount = layerCount;
		this.amplitudeComputer = amplitudeComputer;
		this.frequencyComputer = frequencyComputer;
		this.shiftComputer = shiftComputer;
		this.angleComputer = angleComputer;
	}
	private readonly layerCount: number;
	private readonly amplitudeComputer: AmplitudeComputer;
	private readonly frequencyComputer: FrequencyComputer;
	private readonly shiftComputer: ShiftComputer;
	private readonly angleComputer: AngleComputer;
	public compute(position: XyCoordinates): number {
		let result = 0;
		for (let layerIndex = 0; layerIndex < this.layerCount; layerIndex += 1) {
			const normalizedLayerIndex = layerIndex / this.layerCount;
			const angle = this.angleComputer(normalizedLayerIndex);
			// const loopingDivisor = Math.abs(Math.sin(angle)) + Math.abs(Math.cos(angle));
			const rotatedPosition: XyCoordinates = rotateXyCoordinates(position, angle);
			const originalPositionImportance = Math.max(
				(Math.cos(2 * position.x * Math.PI) + 1) / 2,
				(Math.cos(2 * position.y * Math.PI) + 1) / 2,
			);
			const rotatedFixedPosition: XyCoordinates = {
				x:
					rotatedPosition.x * (1 - originalPositionImportance) +
					position.x * originalPositionImportance,
				y:
					rotatedPosition.y * (1 - originalPositionImportance) +
					position.y * originalPositionImportance,
			};
			const frequency = this.frequencyComputer(normalizedLayerIndex);
			const shift: XyCoordinates = this.shiftComputer(normalizedLayerIndex);
			const amplitude = this.amplitudeComputer(normalizedLayerIndex);
			result +=
				amplitude *
				Math.sin(rotatedFixedPosition.x * frequency + shift.x) *
				Math.sin(rotatedFixedPosition.y * frequency + shift.y);
		}
		return result * this.aplitudeMultiplier;
	}
}
