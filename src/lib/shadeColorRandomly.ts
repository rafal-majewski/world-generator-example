import type {RgbColor} from "./RgbColor.ts";
export function shadeColorRandomly(color: RgbColor): RgbColor {
	return {
		red: Math.max(0, Math.min(1, color.red + (2 * Math.random() - 1) * 0.05)),
		green: Math.max(0, Math.min(1, color.green + (2 * Math.random() - 1) * 0.05)),
		blue: Math.max(0, Math.min(1, color.blue + (2 * Math.random() - 1) * 0.05)),
	};
}
