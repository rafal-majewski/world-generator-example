import type {RgbColor} from "./RgbColor.ts";
function interpolateColors(color1: RgbColor, color2: RgbColor, factor: number): RgbColor {
	const red = color1.red + factor * (color2.red - color1.red);
	const green = color1.green + factor * (color2.green - color1.green);
	const blue = color1.blue + factor * (color2.blue - color1.blue);
	return {
		red,
		green,
		blue,
	};
}
const deepWaterColor: RgbColor = {
	red: 0,
	green: 0,
	blue: 0.5,
};
const shallowWaterColor: RgbColor = {
	red: 0,
	green: 0.5,
	blue: 1,
};
const sandColor: RgbColor = {
	red: 1,
	green: 1,
	blue: 0.5,
};
const dirtColor: RgbColor = {
	red: 0.5,
	green: 0.25,
	blue: 0,
};
const rockColor: RgbColor = {
	red: 0.5,
	green: 0.5,
	blue: 0.5,
};
const snowColor: RgbColor = {
	red: 1,
	green: 1,
	blue: 1,
};
export function computeBaseBlockColor(height: number): RgbColor {
	if (height < 0) {
		return interpolateColors(shallowWaterColor, deepWaterColor, Math.min(-height / 10, 1));
	}
	if (height < 2) {
		return interpolateColors(shallowWaterColor, sandColor, height / 2);
	}
	if (height < 4) {
		return interpolateColors(sandColor, dirtColor, (height - 2) / 2);
	}
	if (height < 6) {
		return interpolateColors(dirtColor, rockColor, (height - 4) / 2);
	}
	return interpolateColors(rockColor, snowColor, Math.min((height - 6) / 4, 1));
}
