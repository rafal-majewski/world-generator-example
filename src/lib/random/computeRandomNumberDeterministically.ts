import type {NormalizedNumber} from "./NormalizedNumber.ts";
export function computeRandomNormalizedNumberDeterministically(seed: number): NormalizedNumber {
	const x = Math.sin(seed) * 23423.11 + Math.cos(seed) * 123.99;
	const flooredX = Math.floor(x);
	return x - flooredX;
}
