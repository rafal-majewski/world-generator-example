import type {RgbColor} from "./RgbColor.ts";
export function computeBlockColor(originalHeight: number): RgbColor {
	if (originalHeight < 0) {
		return {
			red: 0,
			green: 0,
			blue: 1 / (-0.3 * originalHeight + 1),
		};
	}
	if (originalHeight < 1) {
		return {
			red: 1 - originalHeight / 2,
			green: 1 - (originalHeight * 3) / 4,
			blue: 0,
		};
	}
	return {
		red: 1 / 2,
		green: 1 / 4,
		blue: 0,
	};
}
