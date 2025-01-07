import type {NormalizedNumber} from "./NormalizedNumber.ts";
export function computeRandomNormalizedNumberDeterministically(seed: number): NormalizedNumber {
	const x = Math.sin(seed) * 10000;
	const flooredX = Math.floor(x);
	return x - flooredX;
}
