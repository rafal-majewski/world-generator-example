import {computeAmplitudeMultiplier} from "./computeAmplitudeMultiplier.ts";
/**
 * In the range of <0, 1).
 */
type NormalizedIndex = number;
type AmplitudeComputer = (normalizedLayerIndex: NormalizedIndex) => number;
type FrequencyComputer = (normalizedLayerIndex: NormalizedIndex) => number;
type XyCoordinates = Readonly<{
	x: number;
	y: number;
}>;
type ShiftComputer = (normalizedLayerIndex: NormalizedIndex) => XyCoordinates;
type AngleComputer = (normalizedLayerIndex: NormalizedIndex) => number;

export class NoiseGenerator {
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
			const rotatedPosition: XyCoordinates = rotateXyCoordinates(position, angle);
			const frequency: number = this.frequencyComputer(normalizedLayerIndex);
			const shift: XyCoordinates = this.shiftComputer(normalizedLayerIndex);
			const amplitude = this.amplitudeComputer(normalizedLayerIndex);
			result +=
				amplitude *
				Math.sin(rotatedPosition.x * frequency + shift.x) *
				Math.sin(rotatedPosition.y * frequency + shift.y);
		}
		return result * this.aplitudeMultiplier;
	}
}
function rotateXyCoordinates(coordinates: XyCoordinates, angle: number): XyCoordinates {
	const x = coordinates.x * Math.cos(angle) - coordinates.y * Math.sin(angle);
	const y = coordinates.x * Math.sin(angle) + coordinates.y * Math.cos(angle);
	return {
		x,
		y,
	} as const satisfies XyCoordinates;
}
